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
import joinUsStyle from "assets/jss/joinUsStyle";

// sections
const Header = dynamic(import("page-sections/join-us/Header"));
const JoinTeam = dynamic(import("page-sections/join-us/JoinTeam"));
const SendCV = dynamic(import("page-sections/join-us/SendCV"));
const Vacancies = dynamic(import("page-sections/join-us/Vacancies"));

const useStyles = makeStyles(joinUsStyle);

const JoinUsPage = () => {
  const classes = useStyles();
  const [pageVacant, setPageVacant] = useState(1);
  const [multipleValue, setMultipleValue] = React.useState([]);

  return (
    <>
      <Header />
      <main className={classNames(classes.main, classes.mainRaised)}>
        <JoinTeam />
        <Vacancies
          pageVacant={pageVacant}
          setPageVacant={setPageVacant}
          multipleValue={multipleValue}
          setMultipleValue={setMultipleValue}
        />
        <SendCV />
      </main>
    </>
  );
};

export default withApollo(withLayout(JoinUsPage));
