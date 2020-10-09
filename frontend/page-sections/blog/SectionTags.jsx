import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import CardHeader from "~/components/Card/CardHeader";
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";
import Badge from "~/components/Badge/Badge";
import CustomInput from "~/components/CustomInput/CustomInput";
import Button from "~/components/CustomButtons/Button";

// gql
import { TAGS_QUERY } from "~/gql/queries/blog";

import sectionBlogInfoStyle from "~/assets/jss/blogPostsPageStyle/sectionBlogInfoStyle.js";

const useStyles = makeStyles(sectionBlogInfoStyle);

const SectionTags = ({ BannerOne, BannerTwo }) => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(TAGS_QUERY);

  if (loading) {
    return <h1>Cargando</h1>;
  }

  if (error) {
    return (
      <h1>
        Error:
        {JSON.stringify(error)}
      </h1>
    );
  }

  const { tags } = data;

  return (
    <div>
      <GridContainer className={classes.sectionPrincial} justify="center">
        <GridContainer>
          <GridItem xs={12} sm={11} md={12}>
            <CardHeader image plain>
              <img src={BannerOne} alt="BannerOne" />
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: `url(${BannerOne})`,
                  opacity: "1",
                }}
              />
            </CardHeader>
          </GridItem>
        </GridContainer>
        <br />
        <br />
        <GridContainer>
          <GridItem xs={12} sm={11} md={12}>
            <CardHeader image plain>
              <img src={BannerTwo} alt="BannerTwo" />
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: `url(${BannerTwo})`,
                  opacity: "1",
                }}
              />
            </CardHeader>
          </GridItem>
        </GridContainer>
        <br />
        <GridItem xs={12} sm={11} md={12}>
          <h2 className={classes.titlePrincipal}>Boletín Interware</h2>
          <hr />
          <h3>Inscríbete a nuestro boletín</h3>
          <CustomInput
            labelText="Inscríbete"
            id="numeroPerito"
            inputProps={{
              name: "numeroPerito",
              value: "",
              onChange: () => {},
              disabled: true,
            }}
            formControlProps={{
              fullWidth: true,
            }}
          />
          <Button
            onClick={(e) => e.preventDefault()}
            color="primary"
            className={classes.btnBoletin}
            round
          >
            Enviar
          </Button>
        </GridItem>
        <GridItem xs={12} sm={11} md={12}>
          <br />
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div className={classes.blogTags}>
                <h2 className={classes.titlePrincipal}>Tags</h2>
                <hr />
                {tags &&
                  tags.map((tag) => (
                    <Badge key={tag.id} color="primary">
                      <Link href="/blog">
                        <span className={classes.tag}>{tag.name}</span>
                      </Link>
                    </Badge>
                  ))}
              </div>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
};

SectionTags.propTypes = {
  BannerOne: PropTypes.string.isRequired,
  BannerTwo: PropTypes.string.isRequired,
};

export default SectionTags;
