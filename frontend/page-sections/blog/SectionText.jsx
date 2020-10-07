import React from "react";
import PropTypes from "prop-types";
import getConfig from "next/config";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";
import Card from "~/components/Card/Card";
import CardAvatar from "~/components/Card/CardAvatar";
import RenderHTML from "~/components/HTML/RenderHTML";

import sectionTextStyle from "~/assets/jss/blogPostsPageStyle/sectionTextStyle.js";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const useStyles = makeStyles(sectionTextStyle);

const SectionText = ({ article }) => {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={8} sm={8} md={8}>
          <RenderHTML className={classes.constents} html={article[0].content} />
          <br />
          <h4 className={classes.cardsubTitle}>Experto Interware</h4>
          <hr />
          <Card plain profile className={classes.card}>
            <GridContainer>
              <GridItem xs={12} sm={2} md={2}>
                <CardAvatar plain profile>
                  <img
                    src={`${apiUrl}${article[0].user.image.url}`}
                    alt={article[0].user.alt}
                  />
                </CardAvatar>
              </GridItem>
              <GridItem xs={12} sm={8} md={8}>
                <h4 className={classes.cardTitle}>{article[0].user.name}</h4>
                <p className={classes.description}>
                  {article[0].user.description}
                </p>
              </GridItem>
            </GridContainer>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

SectionText.defaultProps = {
  article: {
    content: "",
    user: {
      name: "",
      alt: "",
      description: "",
      linkedin: "",
      image: {
        url: "",
      },
    },
  },
};

SectionText.propTypes = {
  article: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string,
      user: PropTypes.shape({
        name: PropTypes.string,
        alt: PropTypes.string,
        description: PropTypes.string,
        linkedin: PropTypes.string,
        image: PropTypes.shape({
          url: PropTypes.string,
        }),
      }),
    })
  ),
};

export default SectionText;
