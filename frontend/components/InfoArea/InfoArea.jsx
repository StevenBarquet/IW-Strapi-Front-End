import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/nextjs-material-kit-pro/components/infoStyle.js";

const useStyles = makeStyles(styles);

const InfoArea = (props) => {
  const { title, description, className } = props;
  const classes = useStyles();
  const infoAreaClasses = classNames({
    [classes.infoArea]: true,
    [className]: className !== undefined,
  });

  return (
    <div className={infoAreaClasses}>
      <div className={classes.descriptionWrapper}>
        <p className={classes.title}>{title}</p>
        <div className={classes.description}>{description}</div>
      </div>
    </div>
  );
};

InfoArea.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  vertical: PropTypes.bool,
  className: PropTypes.string,
};

export default InfoArea;
