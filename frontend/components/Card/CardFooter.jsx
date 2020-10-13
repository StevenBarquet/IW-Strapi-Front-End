// nodejs library that concatenates classes
import classNames from "classnames";

// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import styles from "assets/jss/nextjs-material-kit-pro/components/cardFooterStyle";

const useStyles = makeStyles(styles);

const CardFooter = (props) => {
  const {
    className,
    children,
    plain,
    profile,
    pricing,
    testimonial,
    ...rest
  } = props;
  const classes = useStyles();
  const cardFooterClasses = classNames({
    [classes.cardFooter]: true,
    [classes.cardFooterPlain]: plain,
    [classes.cardFooterProfile]: profile || testimonial,
    [classes.cardFooterPricing]: pricing,
    [classes.cardFooterTestimonial]: testimonial,
    [className]: className !== undefined,
  });
  return (
    <div className={cardFooterClasses} {...rest}>
      {children}
    </div>
  );
};
CardFooter.defaultProps = {
  className: "",
  profile: false,
  plain: false,
  testimonial: false,
  pricing: false,
  children: false,
};

CardFooter.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  pricing: PropTypes.bool,
  testimonial: PropTypes.bool,
  children: PropTypes.node,
};

export default CardFooter;
