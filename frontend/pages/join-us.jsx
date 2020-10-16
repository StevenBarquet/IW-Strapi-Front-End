// Dependencies
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import dynamic from "next/dynamic";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

// context
import { useSettings } from "context/Settings";

// core components
import Badge from "components/Badge/Badge";

// gql
import { JOIN_US_TAGS_QUERY } from "gql/queries/join-us";

// apollo
import { withApollo } from "libs/apollo";

// layout
import withLayout from "layouts/main";

// utils
import { replaceObject, getItemByAttr, removeItem } from "utils/utils";

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

  const {
    defaultSettings: { language },
  } = useSettings();

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

  useEffect(() => {
    tags.forEach((s) =>
      setMultipleSelectValue((suc) => [...suc, { ...s, active: true }])
    );
  }, []);

  const onRemoveItem = (id) => {
    const selectTag = getItemByAttr(multipleSelectValue, { id });
    selectTag.active = true;

    setMultipleValue(removeItem(multipleValue, { id }));
    setTagsID(removeItem(multipleValue, { id }));
    setMultipleSelectValue(
      replaceObject(multipleSelectValue, { id }, selectTag)
    );
  };

  const onTags = (temp) => {
    const selectTags = getItemByAttr(multipleSelectValue, {
      id: temp.id,
    });
    selectTags.active = false;
    multipleValue.push(temp);
    setTagsID([...tagsID, temp.id]);
    setMultipleValue(multipleValue);
    setMultipleSelectValue(
      replaceObject(multipleSelectValue, { id: temp.id }, selectTags)
    );
  };

  const SelectTags = () =>
    multipleValue.map((item) => (
      <Badge key={item.id} color="primary">
        <button
          type="button"
          className={classes.removeIcon}
          onClick={() => onRemoveItem(item.id)}
        >
          <span>{item[`name${language}`]}</span>
          <Icon style={{ position: "absolute", bottom: "-1px" }}>clear</Icon>
        </button>
      </Badge>
    ));

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
          onTags={onTags}
          SelectTags={SelectTags}
        />
        <SendCV />
      </main>
    </>
  );
};

export default withApollo(withLayout(JoinUsPage));
