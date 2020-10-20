// Dependencies
import { useQuery } from "@apollo/client";
import getConfig from "next/config";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import RenderHTML from "components/HTML/RenderHTML";

// context
import { useSettings } from "context/Settings";

// gql
import { BLOG_ARTICLES_QUERY } from "gql/queries/blog";

// jss styles
import blogStyle from "assets/jss/blogStyle";

const useStyles = makeStyles(blogStyle);

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const SectionPills = ({ showImage }) => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const { loading, error, data } = useQuery(BLOG_ARTICLES_QUERY, {
    variables: {
      sort: "created_at:desc",
      limit: showImage ? 5 : 3,
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
    <GridItem
      xs={12}
      sm={showImage ? 8 : 12}
      md={showImage ? 6 : 12}
      lg={showImage ? 6 : 12}
    >
      <h2 className={classes.title}>Destacados</h2>
      <hr />
      {articles &&
        articles.map((article) => (
          <Card key={article.id} plain blog>
            <GridContainer>
              {showImage && (
                <GridItem xs={12} sm={2} md={3}>
                  <CardHeader image plain>
                    <a href="#pablito" onClick={(e) => e.preventDefault()}>
                      <img
                        style={{
                          width: "177px",
                          height: "115px",
                        }}
                        src={`${apiUrl}${article.seo.shareImage.url}`}
                        alt="..."
                      />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${`${apiUrl}${article.seo.shareImage.url}`})`,
                        opacity: "1",
                      }}
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${`${apiUrl}${article.seo.shareImage.url}`})`,
                        opacity: "1",
                      }}
                    />
                  </CardHeader>
                </GridItem>
              )}
              <GridItem xs={12} sm={showImage ? 5 : 11} md={showImage ? 7 : 11}>
                <p className={classes.cardCategory}>{article.tags.name}</p>
                <h2 className={classes.cardTitle}>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    {article.seo[`metaTitle${language}`]}
                  </a>
                </h2>
                <RenderHTML html={article.seo[`metaDescription${language}`]} />
                <Link as={`/blog/${article.id}`} href="/blog/[id]">
                  <a href="#pablo"> Leer más…</a>
                </Link>
              </GridItem>
              <hr />
            </GridContainer>
          </Card>
        ))}
    </GridItem>
  );
};

export default SectionPills;
