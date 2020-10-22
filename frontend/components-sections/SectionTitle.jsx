// Dependencies
import getConfig from "next/config";
import PropTypes from "prop-types";
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core-components
import GridItem from "components/Grid/GridItem";

import {
  legend,
  title,
  subTitle,
  centerImage,
} from "assets/jss/nextjs-material-kit-pro";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const sectionTitleStyle = {
  legend,
  title: {
    ...title,
    "@media (max-width: 830px)": {
      fontSize: "2.500rem",
    },
  },
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
        className={classNames(classes.centerImage, "lazyload")}
      />
    );
  };

  return (
    <GridItem xs={10} sm={9} md={8} lg={10}>
      {icon && <Icon />}
      {legend && <legend className={classes.legend}>{legend}</legend>}
      {title && <h1 className={classes.title}>{title}</h1>}
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
