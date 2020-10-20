// Dependencies
import dynamic from "next/dynamic";
import { useQuery } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components+
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import Pagination from "components/Pagination/Pagination";
import RenderHTML from "components/HTML/RenderHTML";
import SectionTitle from "components-sections/SectionTitle";

// context
import { useSettings } from "context/Settings";

// gql
import { BLOG_ARTICLES_QUERY } from "gql/queries/blog";

// jss styles
import blogStyle from "assets/jss/blogStyle";

import cardBlog3 from "assets/img/blog5.jpg";
import cardBlog4 from "assets/img/blog6.jpg";

const Menu = dynamic(import("page-sections/blog/Menu"));
const SectionInterested = dynamic(
  import("page-sections/blog/SectionInterested")
);
const SectionBlogsList = dynamic(import("page-sections/blog/SectionBlogsList"));
const SectionTags = dynamic(import("page-sections/blog/SectionTags"));

const useStyles = makeStyles(blogStyle);

const SectionPills = ({ activeBtn, categoryID, pageArticle, btnHome }) => {
  const {
    defaultSettings: { language },
  } = useSettings();

  const start = pageArticle === 1 ? 0 : (pageArticle - 1) * 4;

  const { loading, error, data } = useQuery(BLOG_ARTICLES_QUERY, {
    variables: {
      where: categoryID ? { category: { id_in: [categoryID] } } : {},
      limit: 4,
      start,
    },
  });

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

  if (!data.articles) {
    return <span>¡Revisar CMS!</span>;
  }

  const { articles } = data;

  return (
    <div id="section-about" className={classes.section}>
      <Menu />
      <SectionInterested />
      <GridContainer justify="center">
        <SectionBlogsList showImage={activeBtn} />
        <SectionTags BannerOne={cardBlog4} BannerTwo={cardBlog3} />
      </GridContainer>
    </div>
  );
};

export default SectionPills;
