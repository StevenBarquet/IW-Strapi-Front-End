// Dependencies
import { useQuery } from "@apollo/client";
import Link from "next/link";
import getConfig from "next/config";
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridItem from "components/Grid/GridItem";
import CardHeader from "components/Card/CardHeader";
import Badge from "components/Badge/Badge";
import CustomInput from "components/CustomInput/CustomInput";
import Button from "components/CustomButtons/Button";

// context
import { useSettings } from "context/Settings";

// gql
import { BLOG_TAGS_QUERY } from "gql/queries/blog";

// jss styles
import blogStyle from "assets/jss/blogStyle";

const useStyles = makeStyles(blogStyle);

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const SectionTags = ({ articleImg }) => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const { loading, error, data } = useQuery(BLOG_TAGS_QUERY);
  const classes = useStyles();

  if (loading) {
    return null;
  }

  if (error) {
    return (
      <span>
        Error:
        {JSON.stringify(error)}
      </span>
    );
  }

  if (!data.tagsBlogs) {
    return <span>¡Revisar CMS!</span>;
  }

  const { tagsBlogs } = data;

  return (
    <GridItem xs={12} sm={10} md={articleImg ? 12 : 3}>
      <GridItem xs={12} sm={11} md={12} className={classes.marginTop5rem}>
        <CardHeader image plain>
          <img
            src={`${apiUrl}${data.blog.bannersBlog.bannerUp.url}`}
            alt={data.blog.bannersBlog.bannerDown.alternativeText}
          />
          <div
            className={classes.coloredShadow}
            style={{
              backgroundImage: `url(${apiUrl}${data.blog.bannersBlog.bannerUp.url})`,
              opacity: "1",
            }}
          />
        </CardHeader>
      </GridItem>
      <GridItem xs={12} sm={11} md={12} className={classes.marginTop5rem}>
        <CardHeader image plain>
          <img
            src={`${apiUrl}${data.blog.bannersBlog.bannerDown.url}`}
            alt={data.blog.bannersBlog.bannerDown.alternativeText}
          />
          <div
            className={classes.coloredShadow}
            style={{
              backgroundImage: `url(${apiUrl}${data.blog.bannersBlog.bannerDown.url})`,
              opacity: "1",
            }}
          />
        </CardHeader>
      </GridItem>
      <GridItem xs={12} sm={11} md={12} className={classes.marginTop5rem}>
        <h2>
          {language === "_en" ? "Interware Newsletter" : "Boletín Interware"}
        </h2>
        <hr />
        <h3>
          {language === "_en"
            ? "Sign up for our newsletter"
            : "Inscríbete a nuestro boletín"}
        </h3>
        <CustomInput
          id="inscribete"
          name="inscribete"
          value=""
          labelText={language === "_en" ? "Sign up" : "Inscríbete"}
          handleChange={() => {}}
          inputProps={{
            name: "inscribete",
            placeholder: language === "_en" ? "Sign up" : "Inscríbete",
          }}
          formControlProps={{
            fullWidth: true,
          }}
        />
        <Button
          onClick={(e) => e.preventDefault()}
          color="primary"
          className={classes.btnBoletin}
          round
        >
          {language === "_en" ? "Send" : "Enviar"}
        </Button>
      </GridItem>
      <br />
      <GridItem xs={12} sm={12} md={11}>
        <h2>Tags</h2>
        <hr />
        {tagsBlogs &&
          tagsBlogs.map((tag) => (
            <Badge key={tag.id} color="primary">
              <Link href="/blog">
                <span>{tag[`name${language}`]}</span>
              </Link>
            </Badge>
          ))}
      </GridItem>
    </GridItem>
  );
};

SectionTags.defaultProps = {
  articleImg: false,
};

SectionTags.propTypes = {
  articleImg: PropTypes.bool,
};

export default SectionTags;
