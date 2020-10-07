import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "~/assets/jss/nextjs-material-kit-pro/components/badgeStyle.js";

const useStyles = makeStyles(styles);

const Badge = (props) => {
  const { color, children, className } = props;
  const classes = useStyles();
  const badgeClasses = classNames({
    [classes.badge]: true,
    [classes[color]]: true,
    [className]: className !== undefined,
  });
  return <span className={badgeClasses}>{children}</span>;
};

Badge.defaultProps = {
  color: "primary",
  className: "",
  children: {},
};
Badge.propTypes = {
  color: PropTypes.oneOf(["primary", "warning", "danger", "gray"]),
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Badge;
