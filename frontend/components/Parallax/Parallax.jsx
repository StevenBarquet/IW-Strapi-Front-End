// nodejs library that concatenates classes
import classNames from "classnames";

// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import styles from "~/assets/jss/nextjs-material-kit-pro/components/parallaxStyle";

const useStyles = makeStyles(styles);

const Parallax = (props) => {
  const windowScrollTop = 0;
  const [transform, setTransform] = React.useState(
    `translate3d(0,${windowScrollTop}px,0)`
  );

  const resetTransform = () => {
    const windowScrollTop = window.pageYOffset / 3;
    setTransform(`translate3d(0,${windowScrollTop}px,0)`);
  };

  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  });

  const { filter, className, children, style, image, small } = props;
  const classes = useStyles();
  const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes[`${filter}Color`]]: filter !== undefined,
    [classes.small]: small,
    [className]: className !== undefined,
  });
  return (
    <div
      className={parallaxClasses}
      style={{
        ...style,
        backgroundImage: `url(${image})`,
        transform,
      }}
    >
      {children}
    </div>
  );
};

Parallax.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.oneOf([
    "primary",
    "dark",
    "success",
    "warning",
    "danger",
  ]),
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string,
  small: PropTypes.bool,
};

export default Parallax;
