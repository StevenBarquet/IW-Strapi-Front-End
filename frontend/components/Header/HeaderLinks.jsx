// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";

// core components
// import Dropdown from "~/components/Dropdown/Dropdown";
import Button from "~/components/CustomButtons/Button";

// context
import { useSettings } from "~/context/Settings";

// jss styles
import headerLinksStyle from "~/assets/jss/nextjs-material-kit-pro/components/headerLinksStyle";

const useStyles = makeStyles(headerLinksStyle);

const HeaderLinks = () => {
  const { defaultSettings, changeSettings } = useSettings();

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
      <ListItem className={classes.listItem}>
        <div>
          <Button
            onClick={() => changeSettings({ languaje: "" })}
            round
            justIcon
            disabled={!defaultSettings.languaje}
            color="transparent"
          >
            <Icon>flag</Icon>
          </Button>
          <Button
            onClick={() => changeSettings({ languaje: "_en" })}
            round
            justIcon
            disabled={defaultSettings.languaje === "_en"}
            color="transparent"
          >
            <Icon>emoji_flags</Icon>
          </Button>
        </div>
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
