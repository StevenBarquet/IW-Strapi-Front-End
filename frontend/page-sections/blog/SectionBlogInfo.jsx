import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import moment from "moment";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";
import Badge from "~/components/Badge/Badge";

import sectionBlogInfoStyle from "~/assets/jss/blogPostsPageStyle/sectionBlogInfoStyle.js";

const useStyles = makeStyles(sectionBlogInfoStyle);

const SectionBlogInfo = ({ article }) => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={8}>
          <br />
          <br />
          <br />
          <GridContainer>
            <GridItem xs={12} sm={6} md={9}>
              <div className={classes.blogTags}>
                Tags:{" "}
                {article[0].tags.map((tag) => (
                  <Badge key={tag.id} color="primary">
                    <Link href="/blog">
                      <span className={classes.tag}>{tag.name}</span>
                    </Link>
                  </Badge>
                ))}
              </div>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <div>
                <p className={classes.date}>
                  {moment(article[0].createdAt)
                    .locale("es")
                    .format("MMMM/YYYY")}
                </p>
              </div>
            </GridItem>
          </GridContainer>
          <hr />
        </GridItem>
      </GridContainer>
    </div>
  );
};

SectionBlogInfo.defaultProps = {
  article: {
    tags: [],
    createdAt: "",
  },
};

SectionBlogInfo.propTypes = {
  article: PropTypes.arrayOf(
    PropTypes.shape({
      createdAt: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.shape({})),
    })
  ),
};

export default SectionBlogInfo;
