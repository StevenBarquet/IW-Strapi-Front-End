// Dependencies
import { useQuery } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer";
import Button from "components/CustomButtons/Button";
import GridItem from "components/Grid/GridItem";

// context
import { useSettings } from "context/Settings";

// gql
import { BLOG_CATEGORIES_QUERY } from "gql/queries/blog";

// jss styles
import blogStyle from "assets/jss/blogStyle";

const useStyles = makeStyles(blogStyle);

const Menu = () => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const { loading, error, data } = useQuery(BLOG_CATEGORIES_QUERY);
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

  if (!data.categories) {
    return <span>¡Revisar CMS!</span>;
  }

  const { categories } = data;

  return (
    <div id="section-menu">
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12} className={classes.textCenter}>
          <Button color="behance">HOME</Button>
          <Button color="behance">ALL</Button>
          {categories &&
            categories.map((category) => {
              return (
                <span key={category.id}>
                  <Button color="behance">{category[`name${language}`]}</Button>
                </span>
              );
            })}
          <div className={classes.tabSpace} />
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default Menu;
