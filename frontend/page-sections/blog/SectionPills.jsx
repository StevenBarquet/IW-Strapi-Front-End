// Dependencies
import dynamic from "next/dynamic";
import getConfig from "next/config";
import { useQuery } from "@apollo/client";
import PropTypes from "prop-types";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components+
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import Pagination from "components/Pagination/Pagination";
import RenderHTML from "components/HTML/RenderHTML";

// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";

// context
import { useSettings } from "context/Settings";

// gql
import { BLOG_ARTICLES_QUERY } from "gql/queries/blog";

// jss styles
import blogStyle from "assets/jss/blogStyle";

const Menu = dynamic(import("page-sections/blog/Menu"));
const SectionInterested = dynamic(
  import("page-sections/blog/SectionInterested")
);
const SectionBlogsList = dynamic(import("page-sections/blog/SectionBlogsList"));
const SectionTags = dynamic(import("page-sections/blog/SectionTags"));
const CarouselHeader = dynamic(import("page-sections/blog/CarouselHeader"));

const useStyles = makeStyles(blogStyle);

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const SectionPills = ({
  categoryID,
  pageArticle,
  btnHome,
  articleCategory,
  setPageArticle,
}) => {
  const {
    defaultSettings: { language },
  } = useSettings();

  const start = pageArticle === 1 ? 0 : (pageArticle - 1) * 4;

  const { loading, error, data } = useQuery(BLOG_ARTICLES_QUERY, {
    variables: {
      where: categoryID ? { category: { id_in: [categoryID] } } : {},
      limit: 4,
      start,
    },
  });

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

  if (!data.articles) {
    return <span>¡Revisar CMS!</span>;
  }

  const { articles } = data;

  const lastpage = Math.ceil(
    categoryID ? articles.length / 4 : data.articlesCount / 4
  );

  return (
    <div id="section-about" className={classes.section}>
      <Menu
        articleCategory={articleCategory}
        categoryID={categoryID}
        btnHome={btnHome}
      />
      {!btnHome ? (
        <>
          <GridItem
            xs={12}
            sm={8}
            md={8}
            className={`${classes.mlAuto} ${classes.mrAuto}`}
          >
            <GridContainer justify="center">
              {articles &&
                articles.map((article) => (
                  <GridItem key={article.id} xs={12} sm={11} md={6}>
                    <Card
                      raised
                      background
                      style={{
                        backgroundImage:
                          "url(" +
                          `${apiUrl}${article.seo.shareImage.url}` +
                          ")",
                      }}
                    >
                      <CardBody background>
                        <h6 className={classes.category}>
                          {article.category.name}
                        </h6>
                        <h3 className={classes.cardTitle}>
                          {article.seo[`metaTitle${language}`]}
                        </h3>
                        <RenderHTML
                          html={article.seo[`metaDescription${language}`]}
                        />
                        <Link as={`/blog/${article.id}`} href="/blog/[id]">
                          <Button round className={classes.btonLeer}>
                            <FormatAlignLeft className={classes.icons} />
                            {language === "_en"
                              ? "Read more..."
                              : "Leer más..."}
                          </Button>
                        </Link>
                      </CardBody>
                    </Card>
                  </GridItem>
                ))}
            </GridContainer>
            <div className={classes.floatRight}>
              <Pagination
                pages={[
                  {
                    text: "Previous",
                    onClick: () => setPageArticle(pageArticle - 1),
                    disabled: pageArticle <= 1,
                  },
                  {
                    text: "Next",
                    onClick: () => setPageArticle(pageArticle + 1),
                    disabled: pageArticle >= lastpage,
                  },
                ]}
              />
            </div>
          </GridItem>
        </>
      ) : (
        <>
          <CarouselHeader />
          <SectionInterested />
          <GridContainer justify="center">
            <SectionBlogsList showImage />
            <SectionTags />
          </GridContainer>
        </>
      )}
    </div>
  );
};

SectionPills.defaultProps = {
  pageArticle: 1,
  categoryID: "",
  btnHome: true,
};

SectionPills.propTypes = {
  categoryID: PropTypes.string,
  pageArticle: PropTypes.number,
  btnHome: PropTypes.bool,
  setPageArticle: PropTypes.func.isRequired,
  articleCategory: PropTypes.func.isRequired,
};

export default SectionPills;
