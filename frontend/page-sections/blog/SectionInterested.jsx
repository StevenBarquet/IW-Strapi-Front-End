import React from "react";
import Link from "next/link";
import getConfig from "next/config";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/client";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
// core components
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";
import Card from "~/components/Card/Card";
import CardBody from "~/components/Card/CardBody";
import CardHeader from "~/components/Card/CardHeader";
import Button from "~/components/CustomButtons/Button";

// gql
import { ARTICLES_QUERY } from "~/gql/queries/blog";

import sectionInterestedStyle from "~/assets/jss/blogPostsPageStyle/sectionInterestedStyle.js";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const useStyles = makeStyles(sectionInterestedStyle);

const SectionInterested = ({ id }) => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(ARTICLES_QUERY, {
    variables: {
      where: { tags: { id_nin: ["5f5145f3955f97000dd62822"] } },
      sort: "createdAt:desc",
      limit: 4,
    },
  });

  if (loading) {
    return null;
  }

  if (error) {
    return (
      <h1>
        Error:
        {JSON.stringify(error)}
      </h1>
    );
  }

  const { articles } = data;

  return (
    <div className={classes.section}>
      <GridContainer>
        {articles &&
          articles.map((article, index) => (
            <>
              {index === 0 && (
                <GridItem key={article.id} xs={12} sm={12} md={12}>
                  <Card
                    raised
                    background
                    style={{
                      backgroundImage:
                        "url(" +
                        `${apiUrl}${article.Seo.shareImage.image.url}` +
                        ")",
                    }}
                  >
                    <CardBody background>
                      <h6 className={classes.category}>
                        {article.category.name}
                      </h6>
                      <h3 className={classes.cardTitle}>
                        {article.Seo.metaTitle}
                      </h3>
                      <p className={classes.category}>
                        {article.Seo.metaDescription}
                      </p>
                      <Link as={`/blog/${article.id}`} href="/blog/[id]">
                        <Button round className={classes.btonLeer}>
                          <FormatAlignLeft className={classes.icons} />
                          Leer más…
                        </Button>
                      </Link>
                    </CardBody>
                  </Card>
                </GridItem>
              )}
              {index !== 0 && (
                <GridItem key={article.id} xs={12} sm={4} md={4} lg={4} xl={4}>
                  <Card plain blog>
                    <CardHeader image plain>
                      <img
                        style={{
                          height: "180px",
                          width: "100%",
                          display: "block",
                        }}
                        src={`${apiUrl}${article.Seo.shareImage.image.url}`}
                        alt="..."
                      />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage:
                            "url(" +
                            `${apiUrl}${article.Seo.shareImage.image.url}` +
                            ")",
                          opacity: "1",
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>
                        <a href="#pablo">{article.Seo.metaTitle}</a>
                      </h4>
                      <p className={classes.description}>
                        {article.Seo.metaDescription}
                        <Link as={`/blog/${article.id}`} href="/blog/[id]">
                          <a href="#pablo">Leer más…</a>
                        </Link>
                      </p>
                    </CardBody>
                  </Card>
                </GridItem>
              )}
            </>
          ))}
      </GridContainer>
    </div>
  );
};

SectionInterested.defaultProps = {
  id: "",
};

SectionInterested.propTypes = {
  id: PropTypes.string,
};

export default SectionInterested;
