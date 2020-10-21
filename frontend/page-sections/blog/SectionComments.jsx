/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// jss styles
import blogStyle from "assets/jss/blogStyle";

// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

// context
import { useSettings } from "context/Settings";

const useStyles = makeStyles(blogStyle);

const SectionComments = ({ id }) => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={10}>
          <div>
            <p className={classes.titleArticle}>
              {language === "_en" ? "Comments" : "Comentarios"}
            </p>
            <hr />
            <br />
            <div style={{ display: "flex" }}>
              <GridItem style={{ marginRight: "27px" }} xs={2} sm={3} md={1}>
                <div
                  className="fb-share-button"
                  data-href={`http://198.199.101.145/blog/${id}`}
                  data-layout="button"
                  data-size="small"
                >
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F198.199.101.145%2Fblog%2F${id}&amp;src=sdkpreparse`}
                    className="fb-xfbml-parse-ignore"
                    target="_blank"
                  >
                    {language === "_en" ? "Share" : "Compartir"}
                  </a>
                </div>
              </GridItem>
              {/* <GridItem style={{ marginTop: "4px" }} xs={3} sm={3} md={2}>
                <div className="a2a_kit">
                  <a
                    className="a2a_button_linkedin_share"
                    data-url={`http://localhost:3000/blog/${id}`}
                  />
                </div>
              </GridItem> */}
            </div>
            {/* Comentarios */}
            <div
              className="fb-comments"
              data-href={`http://198.199.101.145/blog/${id}`}
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
