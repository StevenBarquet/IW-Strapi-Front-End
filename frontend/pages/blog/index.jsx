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
  const [activeBtn, setActiveBtn] = useState(true);
  const classes = useStyles();

  return (
    <>
      <Header />
      <main className={classNames(classes.main, classes.mainRaised)}>
        <SectionPills activeBtn={activeBtn} />
        <SectionTeams />
      </main>
    </>
  );
};

export default withApollo(withLayout(HomePage));
