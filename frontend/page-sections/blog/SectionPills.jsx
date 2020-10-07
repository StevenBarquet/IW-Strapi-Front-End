/* eslint-disable no-unused-expressions */
import Link from "next/link";
import PropTypes from "prop-types";
import getConfig from "next/config";
import dynamic from "next/dynamic";
import { useQuery } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
// core components
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";
import Card from "~/components/Card/Card";
import CardBody from "~/components/Card/CardBody";
import Button from "~/components/CustomButtons/Button";
import Pagination from "~/components/Pagination/Pagination";

import cardBlog3 from "~/assets/img/blog5.jpg";
import cardBlog4 from "~/assets/img/blog6.jpg";

// Apollo
import { initializeApollo } from "~/libs/apollo";

// gql
import { CATEGORIES_QUERY } from "~/gql/queries/blog";

import sectionPillsStyle from "~/assets/jss/blogPostsPageStyle/sectionPillsStyle";

const SectionInterested = dynamic(
  import("~/page-sections/blog/SectionInterested")
);
const SectionTags = dynamic(import("~/page-sections/blog/SectionTags"));
const SectionBlogsList = dynamic(
  import("~/page-sections/blog/SectionBlogsList")
);

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const useStyles = makeStyles(sectionPillsStyle);

const SectionPills = ({
  articles,
  activeBtnNext,
  activeBtn,
  pageArticle,
  categoryID,
  articleCategory,
  btnHome,
  setActiveBtnNext,
  setActiveBtn,
  setPageArticle,
}) => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(CATEGORIES_QUERY);

  if (loading) {
    return null;
  }

  if (error) {
    return (
      <h1>
        Error:
        {JSON.stringify(error)}
      </h1>
    );
  }

  const { categories } = data;

  const lengthArt = categories.filter((item) => item.id === categoryID);
  const arraArticle = [];
  categories.map((item) => arraArticle.push(item.articles.length));
  let suma = 0;
  arraArticle.forEach((numero) => {
    suma += numero;
  });

  const lastpage = Math.ceil(
    categoryID ? lengthArt[0].articles.length / 4 : suma / 4
  );

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12} className={classes.textCenter}>
          <Button
            onClick={() => articleCategory("HOME", false)}
            className={
              btnHome ? classes.btonCategorySelect : classes.btonCategory
            }
          >
            HOME
          </Button>
          <Button
            onClick={() => articleCategory("ALL", false)}
            className={
              !categoryID && !btnHome
                ? classes.btonCategorySelect
                : classes.btonCategory
            }
          >
            ALL
          </Button>
          {categories &&
            categories.map((category) => {
              return (
                <span key={category.id}>
                  <Button
                    onClick={() => articleCategory(category, false)}
                    className={
                      categoryID === category.id && !btnHome
                        ? classes.btonCategorySelect
                        : classes.btonCategory
                    }
                  >
                    {category.name}
                  </Button>
                </span>
              );
            })}
          <div className={classes.tabSpace} />
        </GridItem>
      </GridContainer>
      {!btnHome ? (
        <>
          <GridContainer>
            {articles &&
              articles.map((article) => (
                <GridItem key={article.id} xs={12} sm={6} md={6}>
                  <Card
                    raised
                    background
                    style={{
                      backgroundImage:
                        "url(" +
                        `${apiUrl}${article.Seo.shareImage.image.url}` +
                        ")",
                    }}
                  >
                    <CardBody background>
                      <h6 className={classes.category}>
                        {article.category.name}
                      </h6>
                      <h3 className={classes.cardTitle}>
                        {article.Seo.metaTitle}
                      </h3>
                      <p className={classes.category}>
                        {article.Seo.metaDescription}
                      </p>
                      <Link as={`/blog/${article.id}`} href="/blog/[id]">
                        <Button round className={classes.btonLeer}>
                          <FormatAlignLeft className={classes.icons} />
                          Leer más...
                        </Button>
                      </Link>
                    </CardBody>
                  </Card>
                </GridItem>
              ))}
          </GridContainer>
          <div className={classes.justifyContentEnd}>
            <Pagination
              pages={[
                {
                  text: "Previous",
                  onClick: () => {
                    setPageArticle(pageArticle - 1),
                      setActiveBtn(true),
                      setActiveBtnNext(false);
                  },
                  disabled: pageArticle <= 1,
                  active: pageArticle <= 1 ? false : activeBtn,
                },
                {
                  text: "Next",
                  onClick: () => {
                    setPageArticle(pageArticle + 1),
                      setActiveBtnNext(true),
                      setActiveBtn(false);
                  },
                  disabled: pageArticle >= lastpage,
                  active: pageArticle >= lastpage ? false : activeBtnNext,
                },
              ]}
            />
          </div>
        </>
      ) : (
        <>
          <GridContainer>
            <SectionInterested />
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={8} md={8}>
              <SectionBlogsList showImage={btnHome} />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <SectionTags BannerOne={cardBlog4} BannerTwo={cardBlog3} />
            </GridItem>
          </GridContainer>
        </>
      )}
    </div>
  );
};

SectionPills.defaultProps = {
  articles: {
    id: "",
    Seo: {
      metaTitle: "",
      metaDescription: "",
      shareImage: {
        alt: "",
        image: {
          url: "",
        },
      },
    },
  },
  activeBtn: false,
  activeBtnNext: false,
  pageArticle: 1,
  categoryID: "",
  btnHome: true,
};

SectionPills.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      Seo: PropTypes.shape({
        metaTitle: PropTypes.string,
        metaDescription: PropTypes.string,
        shareImage: PropTypes.shape({
          alt: PropTypes.string,
          image: PropTypes.shape({
            url: PropTypes.string,
          }),
        }),
      }),
    })
  ),
  categoryID: PropTypes.string,
  pageArticle: PropTypes.number,
  activeBtn: PropTypes.bool,
  activeBtnNext: PropTypes.bool,
  btnHome: PropTypes.bool,
  setActiveBtnNext: PropTypes.func.isRequired,
  setActiveBtn: PropTypes.func.isRequired,
  setPageArticle: PropTypes.func.isRequired,
  articleCategory: PropTypes.func.isRequired,
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: CATEGORIES_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default SectionPills;
