// Dependencies
import { useRouter } from "next/router";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";

// core components
import CustomDropDown from "components/CustomDropDown/CustomDropDown";
import Button from "components/CustomButtons/Button";

// context
import { useSettings } from "context/Settings";

// gql
import MAIN_HEADER_QUERY from "gql/queries/header";

// jss styles
import headerLinksStyle from "assets/jss/nextjs-material-kit-pro/components/headerLinksStyle";

const useStyles = makeStyles(headerLinksStyle);

const HeaderLinks = () => {
  const { loading, error, data } = useQuery(MAIN_HEADER_QUERY);
  const router = useRouter();
  const { defaultSettings, changeSettings } = useSettings();
  const classes = useStyles();

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

  if (!data.navigationMenu) {
    return <span>¡Revisar CMS!</span>;
  }

  const { navigationMenu } = data;

  return (
    <List className={`${classes.list} ${classes.mlAuto}`}>
      {navigationMenu.body.map((navigationMenuItem) => {
        if (navigationMenuItem.__typename === "ComponentPageLink") {
          return (
            <ListItem
              key={navigationMenuItem.path}
              className={classes.listItem}
            >
              <Button
                className={classNames(classes.navLink, {
                  [classes.selectedNavLink]:
                    router.pathname === navigationMenuItem.path,
                })}
                onClick={() => router.push(navigationMenuItem.path)}
                color={
                  router.pathname === navigationMenuItem.path
                    ? "primary"
                    : "transparent"
                }
              >
                <Link href={navigationMenuItem.path}>
                  <a>
                    {navigationMenuItem[`label${defaultSettings.language}`]}
                  </a>
                </Link>
              </Button>
            </ListItem>
          );
        }

        return (
          <ListItem key={navigationMenuItem.id} className={classes.listItem}>
            <CustomDropDown
              buttonText={
                navigationMenuItem[`topLabel${defaultSettings.language}`]
              }
              buttonProps={{
                className: classes.navLink,
                color: "transparent",
              }}
              dropdownList={navigationMenuItem.nestedLinks.map((nestedLink) => (
                <Link href={nestedLink.path}>
                  <a>{nestedLink[`label${defaultSettings.language}`]}</a>
                </Link>
              ))}
            />
          </ListItem>
        );
      })}
      <ListItem className={classes.listItem}>
        <div>
          <Button
            onClick={() => changeSettings({ language: "" })}
            round
            justIcon
            disabled={!defaultSettings.language}
            color="transparent"
          >
            <Icon>flag</Icon>
          </Button>
          <Button
            onClick={() => changeSettings({ language: "_en" })}
            round
            justIcon
            disabled={defaultSettings.language === "_en"}
            color="transparent"
          >
            <Icon>emoji_flags</Icon>
          </Button>
        </div>
      </ListItem>
    </List>
  );
};

export default HeaderLinks;
