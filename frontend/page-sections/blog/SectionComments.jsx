/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";

import sectionTextStyle from "~/assets/jss/blogPostsPageStyle/sectionCommentsStyle.js";

const useStyles = makeStyles(sectionTextStyle);

const SectionComments = ({ id }) => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={10}>
          <div>
            <h3 className={classes.title}>Comentarios</h3>
            <div style={{ display: "flex" }}>
              <GridItem style={{ marginRight: "27px" }} xs={2} sm={3} md={1}>
                <div
                  className="fb-share-button"
                  data-href="https://developers.facebook.com/docs/plugins/"
                  data-layout="button"
                  data-size="small"
                >
                  <a
                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
                    className="fb-xfbml-parse-ignore"
                    target="_blank"
                  >
                    Compartir
                  </a>
                </div>
              </GridItem>
              <GridItem style={{ marginTop: "4px" }} xs={3} sm={3} md={2}>
                <div className="a2a_kit">
                  <a
                    className="a2a_button_linkedin_share"
                    data-url={`http://localhost:3000/blog/${id}`}
                  />
                </div>
              </GridItem>
            </div>
            {/* Comentarios */}
            <div
              className="fb-comments"
              data-href={`http://localhost:3000/blog/${id}`}
              data-numposts="5"
              data-width="100%"
            />
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
};

SectionComments.defaultProps = {
  id: "",
};

SectionComments.propTypes = {
  id: PropTypes.string,
};

export default SectionComments;
