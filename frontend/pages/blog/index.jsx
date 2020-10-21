// Dependencies
import React, { useState } from "react";
import dynamic from "next/dynamic";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// apollo
import { withApollo } from "libs/apollo";

// layout
import withLayout from "layouts/main";

// jss styles
import blogStyle from "assets/jss/blogStyle";

// sections
const Header = dynamic(import("page-sections/blog/Header"));
const SectionPills = dynamic(import("page-sections/blog/SectionPills"));
const SectionTeams = dynamic(import("page-sections/blog/SectionTeams"));

const useStyles = makeStyles(blogStyle);

const HomePage = () => {
  const [categoryID, setcategoryID] = useState("");
  const [pageArticle, setPageArticle] = useState(1);
  const [btnHome, setbtnHome] = useState(true);
  const classes = useStyles();

  const articleCategory = (categoty) => {
    if (categoty === "ALL") {
      setcategoryID("");
      setbtnHome(false);
    } else if (categoty === "HOME") {
      setbtnHome(true);
    } else {
      setcategoryID(categoty.id);
      setbtnHome(false);
    }
    setPageArticle(1);
  };

  return (
    <>
      <Header />
      <main className={classNames(classes.main, classes.mainRaised)}>
        <SectionPills
          setPageArticle={setPageArticle}
          pageArticle={pageArticle}
          categoryID={categoryID}
          btnHome={btnHome}
          articleCategory={articleCategory}
        />
        <SectionTeams />
      </main>
    </>
  );
};

export default withApollo(withLayout(HomePage));
