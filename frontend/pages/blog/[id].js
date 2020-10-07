/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

// layout

// @material-ui/icons
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace"; // @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import withLayout from "~/layouts/main";

import cardBlog3 from "~/assets/img/blog5.jpg";
import cardBlog4 from "~/assets/img/blog6.jpg";

// core components
import Parallax from "~/components/Parallax/Parallax";
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";
import Button from "~/components/CustomButtons/Button";

// gql
import { ARTICLES_QUERY } from "~/gql/queries/blog";

import blogPostPageStyle from "~/assets/jss/blogPostsPageStyle/blogPostPageStyle.js";

// sections
const SectionText = dynamic(import("~/page-sections/blog/SectionText"));
const SectionBlogInfo = dynamic(import("~/page-sections/blog/SectionBlogInfo"));
const SectionBlogsList = dynamic(
  import("~/page-sections/blog/SectionBlogsList")
);
const SectionTags = dynamic(import("~/page-sections/blog/SectionTags"));
const SectionComments = dynamic(import("~/page-sections/blog/SectionComments"));

const useStyles = makeStyles(blogPostPageStyle);

const BlogPostPage = () => {
  const classes = useStyles();
  const router = useRouter();

  const { loading, error, data } = useQuery(ARTICLES_QUERY, {
    variables: {
      where: { id_in: [router.query.id] },
    },
  });

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

  const { articles } = data;

  return (
    <div>
      <Parallax image={require("~/assets/img/header.png")} filter="dark" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem md={9} className={classes.textCenter}>
              <h2 className={classes.subTitle}>Blog</h2>
              <h2 className={classes.title}>Interware</h2>
              <br />
              <Link href="/blog">
                <Button color="danger" size="lg" round>
                  <KeyboardBackspaceIcon /> Regresar a Blog
                </Button>
              </Link>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.main}>
        <GridContainer>
          <GridItem xs={12} sm={8} md={8}>
            <div className={classes.container}>
              <SectionBlogInfo article={articles} />
              <SectionText article={articles} />
            </div>
          </GridItem>
          <GridItem xs={12} sm={4} md={3}>
            <SectionTags
              article={articles}
              BannerOne={cardBlog3}
              BannerTwo={cardBlog4}
            />
            <SectionBlogsList id={router.query.id} />
          </GridItem>
        </GridContainer>
        <div className={classes.container}>
          <SectionComments id={router.query.id} />
        </div>
      </div>
    </div>
  );
};

export default withLayout(BlogPostPage);
