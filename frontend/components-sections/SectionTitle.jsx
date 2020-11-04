// Dependencies
import getConfig from "next/config";
import PropTypes from "prop-types";
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// library used for cool animations
import ScrollAnimation from "react-animate-on-scroll";

// core-components
import GridItem from "components/Grid/GridItem";

import {
  legend,
  title,
  subTitle,
  mlAuto,
  mrAuto,
  centerImage,
} from "assets/jss/nextjs-material-kit-pro";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const sectionTitleStyle = {
  legend,
  mlAuto,
  mrAuto,
  title: {
    ...title,
    "@media (max-width: 830px)": {
      fontSize: "2.500rem",
    },
  },
  subTitle,
  subTitleColor: {
    ...subTitle,
    color: "#21646D",
  },
  animationFlipInX: {
    animation: "flipInX",
    animationDuration: "3s",
  },

  animationSlideInUp: {
    animation: "slideInUp",
    animationDuration: "3s",
  },
  centerImage,
};

const useStyles = makeStyles(sectionTitleStyle);

// eslint-disable-next-line no-shadow
const SectionTitle = ({
  legend,
  title,
  subTitle,
  icon,
  effect,
  children,
  changeColor,
}) => {
  const classes = useStyles();

  const Icon = () => {
    return (
      <ScrollAnimation animateIn="slideInUp" animateOnce>
        <img
          src={`${apiUrl}${icon.url}`}
          alt={icon.alternativeText}
          className={classNames(classes.centerImage, "lazyload")}
        />
      </ScrollAnimation>
    );
  };

  return (
    <GridItem xs={10} sm={9} md={8} lg={10}>
      {icon && <Icon />}
      {legend && <p className={classes.legend}>{legend}</p>}
      {title &&
        (effect ? (
          <ScrollAnimation animateIn="flipInX" duration={2} animateOnce>
            <h1 className={classes.title}>{title}</h1>
          </ScrollAnimation>
        ) : (
          <h1 className={classes.title}>{title}</h1>
        ))}
      {subTitle && (
        <h2 className={changeColor ? classes.subTitleColor : classes.subTitle}>
          {subTitle}
        </h2>
      )}
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
  changeColor: false,
  effect: false,
};

SectionTitle.propTypes = {
  legend: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  icon: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string,
  }),
  effect: PropTypes.bool,
  changeColor: PropTypes.bool,
  children: PropTypes.element,
};

export default SectionTitle;
