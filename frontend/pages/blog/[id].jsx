// Dependencies
import React from "react";
import dynamic from "next/dynamic";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Link from "next/link";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

import { initializeApollo } from "libs/apollo";

// gql
import { BLOG_ARTICLES_QUERY, BLOG_ARTICLE_QUERY } from "gql/queries/blog";

// layout
import withLayout from "layouts/main";

// core components
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import Button from "components/CustomButtons/Button";

// context
import { useSettings } from "context/Settings";

// jss styles
import blogStyle from "assets/jss/blogStyle";

// sections
const Header = dynamic(import("page-sections/blog/Header"));
const SectionArticleInfo = dynamic(
  import("page-sections/blog/SectionArticleInfo")
);
const SectionArticleText = dynamic(
  import("page-sections/blog/SectionArticleText")
);
const SectionBlogsList = dynamic(import("page-sections/blog/SectionBlogsList"));
const SectionTags = dynamic(import("page-sections/blog/SectionTags"));
const SectionComments = dynamic(import("page-sections/blog/SectionComments"));

const useStyles = makeStyles(blogStyle);

const ArticlePage = () => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const classes = useStyles();
  const router = useRouter();

  const { loading, error, data } = useQuery(BLOG_ARTICLE_QUERY, {
    variables: {
      id: router.query.id,
    },
  });

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

  if (!data.article) {
    return <span>¡Revisar CMS!</span>;
  }

  const { article } = data;

  return (
    <>
      <Header />
      <main className={classNames(classes.main, classes.mainRaised)}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={11}>
            <Link href="/blog">
              <Button
                style={{
                  float: "right",
                  marginTop: "3rem",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                }}
                link
                color="primary"
              >
                <a>
                  <KeyboardBackspaceIcon />
                  {language === "_en" ? "Back to Blog" : "Regresar a Blog"}
                </a>
              </Button>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={7} md={8}>
            <SectionArticleInfo article={article} />
            <SectionArticleText article={article} />
          </GridItem>
          <GridItem xs={12} sm={5} md={3}>
            <SectionTags articleImg />
            <SectionBlogsList id={router.query.id} />
          </GridItem>
        </GridContainer>
        <SectionComments id={router.query.id} />
      </main>
    </>
  );
};

export async function getStaticPaths() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: BLOG_ARTICLES_QUERY,
  });

  return {
    paths: data.articles.map((article) => ({
      params: {
        id: article.id,
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: BLOG_ARTICLE_QUERY,
    variables: {
      id: params.id,
    },
  });

  return {
    props: { id: data.article.id },
    revalidate: 1,
  };
}

export default withLayout(ArticlePage);
