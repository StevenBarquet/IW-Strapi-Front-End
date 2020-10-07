// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
// import Dropdown from "~/components/Dropdown/Dropdown";
import Button from "~/components/CustomButtons/Button";

import styles from "~/assets/jss/nextjs-material-kit-pro/components/headerLinksStyle";

const useStyles = makeStyles(styles);

const HeaderLinks = () => {
  const classes = useStyles();
  return (
    <List className={`${classes.list} ${classes.mlAuto}`}>
      <ListItem className={classes.listItem}>
        <Button
          href="#home"
          className={classes.navLink}
          onClick={(e) => e.preventDefault()}
          color="transparent"
        >
          Home
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#home"
          className={classes.navLink}
          onClick={(e) => e.preventDefault()}
          color="transparent"
        >
          Iw Robot
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#home"
          className={classes.navLink}
          onClick={(e) => e.preventDefault()}
          color="transparent"
        >
          Nosotros
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#home"
          className={classes.navLink}
          onClick={(e) => e.preventDefault()}
          color="transparent"
        >
          Experiencia
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#home"
          className={classes.navLink}
          onClick={(e) => e.preventDefault()}
          color="transparent"
        >
          Partners
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#blog"
          className={classes.navLink}
          onClick={(e) => e.preventDefault()}
          color="transparent"
        >
          Blog
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#home"
          className={classes.navLink}
          onClick={(e) => e.preventDefault()}
          color="transparent"
        >
          Contacto
        </Button>
      </ListItem>
    </List>
  );
};

HeaderLinks.defaultProps = {
  hoverColor: "primary",
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "success",
    "warning",
    "danger",
  ]),
};

export default HeaderLinks;
