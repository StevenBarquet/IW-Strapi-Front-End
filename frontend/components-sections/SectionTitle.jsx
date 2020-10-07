// Dependencies
import getConfig from "next/config";
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core-components
import GridItem from "~/components/Grid/GridItem";

import {
  legend,
  title,
  subTitle,
  centerImage,
} from "~/assets/jss/nextjs-material-kit-pro";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const sectionTitleStyle = {
  legend,
  title,
  subTitle,
  centerImage,
};

const useStyles = makeStyles(sectionTitleStyle);

// eslint-disable-next-line no-shadow
const SectionTitle = ({ legend, title, subTitle, icon, children }) => {
  const classes = useStyles();

  const Icon = () => {
    return (
      <img
        src={`${apiUrl}${icon.url}`}
        alt={icon.alternativeText}
        className={classes.centerImage}
      />
    );
  };

  return (
    <GridItem xs={10} sm={8} md={8} lg={10}>
      {icon && <Icon />}
      <legend className={classes.legend}>{legend}</legend>
      <h1 className={classes.title}>{title}</h1>
      {subTitle && <h2 className={classes.subTitle}>{subTitle}</h2>}
      {children}
    </GridItem>
  );
};

SectionTitle.defaultProps = {
  legend: "",
  title: "",
  subTitle: "",
  icon: null,
  children: null,
};

SectionTitle.propTypes = {
  legend: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  icon: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string,
  }),
  children: PropTypes.element,
};

export default SectionTitle;
