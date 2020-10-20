// Dependencies
import { useQuery } from "@apollo/client";
import getConfig from "next/config";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer";
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

const SectionPills = ({ BannerOne, BannerTwo }) => {
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
    <GridItem xs={12} sm={11} md={3}>
      <GridItem xs={12} sm={11} md={12}>
        <CardHeader image plain>
          <img src={BannerOne} alt="BannerOne" />
          <div
            className={classes.coloredShadow}
            style={{
              backgroundImage: `url(${BannerOne})`,
              opacity: "1",
            }}
          />
        </CardHeader>
      </GridItem>
      <br />
      <br />
      <GridItem xs={12} sm={11} md={12}>
        <CardHeader image plain>
          <img src={BannerTwo} alt="BannerTwo" />
          <div
            className={classes.coloredShadow}
            style={{
              backgroundImage: `url(${BannerTwo})`,
              opacity: "1",
            }}
          />
        </CardHeader>
      </GridItem>
      <br />
      <GridItem xs={12} sm={11} md={12}>
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
      <GridItem xs={12} sm={11} md={11}>
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
    </GridItem>
  );
};

export default SectionPills;
