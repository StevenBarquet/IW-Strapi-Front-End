// Dependencies
import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import dynamic from "next/dynamic";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// gql
import { JOIN_US_TAGS_QUERY } from "gql/queries/join-us";

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
  const [multipleValue, setMultipleValue] = useState([]);
  const [multipleSelectValue, setMultipleSelectValue] = useState([]);
  const [tagsID, setTagsID] = useState([]);

  const { loading, error, data } = useQuery(JOIN_US_TAGS_QUERY);

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

  if (!data.tags) {
    return <span>¡Revisar CMS!</span>;
  }

  const { tags } = data;

  return (
    <>
      <Header />
      <main className={classNames(classes.main, classes.mainRaised)}>
        <JoinTeam />
        <Vacancies
          pageVacant={pageVacant}
          setPageVacant={setPageVacant}
          tagsID={tagsID}
          multipleSelectValue={multipleSelectValue}
          multipleValue={multipleValue}
          setMultipleSelectValue={setMultipleSelectValue}
          setTagsID={setTagsID}
          tagsData={tags}
          setMultipleValue={setMultipleValue}
        />
        <SendCV />
      </main>
    </>
  );
};

export default withApollo(withLayout(JoinUsPage));
