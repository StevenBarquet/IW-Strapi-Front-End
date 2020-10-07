import React from "react";
import Link from "next/link";
import getConfig from "next/config";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/client";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import blogsStyle from "~/assets/jss/blogPostsPageStyle/blogsStyle.js";
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";
import Card from "~/components/Card/Card";
import CardHeader from "~/components/Card/CardHeader";

// gql
import { ARTICLES_QUERY } from "~/gql/queries/blog";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const useStyles = makeStyles(blogsStyle);

const SectionBlogsList = ({ showImage, id }) => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(ARTICLES_QUERY, {
    variables: {
      where: showImage
        ? { tags: { id_in: ["5f5145f3955f97000dd62822"] } }
        : { tags: { id_in: ["5f5145f3955f97000dd62822"] }, id_nin: [id] },
      limit: showImage ? 5 : 3,
      sort: "createdAt:desc",
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
    <div className="cd-section">
      <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={showImage ? 10 : 12}
              md={showImage ? 10 : 12}
              className={`${classes.mlAuto} ${classes.mrAuto}`}
            >
              <h2 className={classes.title}>Destacados</h2>
              <hr />
              {articles &&
                articles.map((article) => (
                  <Card key={article.id} plain blog className={classes.card}>
                    <GridContainer>
                      {showImage && (
                        <GridItem xs={12} sm={4} md={4}>
                          <CardHeader image plain>
                            <a
                              href="#pablito"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                style={{
                                  width: "177px",
                                  height: "115px",
                                }}
                                src={`${apiUrl}${article.Seo.shareImage.image.url}`}
                                alt="..."
                              />
                            </a>
                            <div
                              className={classes.coloredShadow}
                              style={{
                                backgroundImage: `url(${`${apiUrl}${article.Seo.shareImage.image.url}`})`,
                                opacity: "1",
                              }}
                            />
                            <div
                              className={classes.coloredShadow}
                              style={{
                                backgroundImage: `url(${`${apiUrl}${article.Seo.shareImage.image.url}`})`,
                                opacity: "1",
                              }}
                            />
                          </CardHeader>
                        </GridItem>
                      )}
                      <GridItem
                        xs={12}
                        sm={showImage ? 8 : 11}
                        md={showImage ? 8 : 11}
                      >
                        <h6 className={classes.cardCategory}>
                          {article.tags[1].name}
                        </h6>
                        <h3 className={classes.cardTitle}>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            {article.Seo.metaTitle}
                          </a>
                        </h3>
                        <p className={classes.description}>
                          {article.Seo.metaDescription}
                          <Link as={`/blog/${article.id}`} href="/blog/[id]">
                            <a href="#pablo"> Leer más…</a>
                          </Link>
                        </p>
                      </GridItem>
                      <hr />
                    </GridContainer>
                  </Card>
                ))}
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

SectionBlogsList.defaultProps = {
  id: "",
  showImage: false,
};

SectionBlogsList.propTypes = {
  id: PropTypes.string,
  showImage: PropTypes.bool,
};

export default SectionBlogsList;
