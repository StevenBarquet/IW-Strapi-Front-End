// Dependencies
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useQuery } from "@apollo/client";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// layout
import withLayout from "~/layouts/main";

// apollo
import { withApollo } from "~/libs/apollo";

// gql
import { ARTICLES_QUERY } from "~/gql/queries/blog";

// components
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";
import Parallax from "~/components/Parallax/Parallax";

// styles
import blogPostsPageStyle from "~/assets/jss/blogPostsPageStyle/blogPostsPageStyle";

// sections
const SectionPills = dynamic(import("~/page-sections/blog/SectionPills"));
const SectionImage = dynamic(import("~/page-sections/blog/SectionImage"));

const useStyles = makeStyles(blogPostsPageStyle);

const BlogPage = () => {
  const classes = useStyles();
  const [categoryID, setcategoryID] = useState("");
  const [pageArticle, setPageArticle] = useState(1);
  const [activeBtn, setActiveBtn] = useState(false);
  const [activeBtnNext, setActiveBtnNext] = useState(false);
  const [statusCategory, setstatusCategory] = useState(true);
  const [btnHome, setbtnHome] = useState(true);

  const start = pageArticle === 1 ? 0 : (pageArticle - 1) * 4;

  const { loading, error, data } = useQuery(ARTICLES_QUERY, {
    variables: {
      where: categoryID ? { category: { id_in: [categoryID] } } : {},
      limit: 4,
      start,
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

  const articleCategory = (categoty, status) => {
    if (categoty === "ALL") {
      setcategoryID("");
      setbtnHome(false);
    } else if (categoty === "HOME") {
      setbtnHome(true);
    } else {
      setcategoryID(categoty.id);
      setbtnHome(false);
    }
    setstatusCategory(status);
    setPageArticle(1);
    setActiveBtn(false);
    setActiveBtnNext(false);
  };

  const { articles } = data;

  return (
    <>
      <Parallax image={require("~/assets/img/header.png")} filter="dark" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
              <h2 className={classes.subTitle}>Blog</h2>
              <h2 className={classes.title}>Interware</h2>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <main className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionPills
            btnHome={btnHome}
            activeBtn={activeBtn}
            activeBtnNext={activeBtnNext}
            setActiveBtnNext={setActiveBtnNext}
            setActiveBtn={setActiveBtn}
            categoryID={categoryID}
            setPageArticle={setPageArticle}
            pageArticle={pageArticle}
            articles={articles}
            statusCategory={statusCategory}
            articleCategory={articleCategory}
            setcategoryID={setcategoryID}
          />
        </div>
        <SectionImage />
      </main>
    </>
  );
};

export default withApollo(withLayout(BlogPage));
