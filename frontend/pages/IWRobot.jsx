/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import dynamic from "next/dynamic";
import { useQuery } from "@apollo/client";

// @material-ui/icons
import { makeStyles } from "@material-ui/core/styles";
import withLayout from "~/layouts/main";

// core components
import SectionTitle from "~/components-sections/SectionTitle";
import Parallax from "~/components/Parallax/Parallax";
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";

// apollo
import { withApollo } from "~/libs/apollo";

// gql
import { IWROBOT_QUERY } from "~/gql/queries/iwrobot";

import robotPageStyles from "~/assets/jss/robotPageStyles/robotPageStyles";

// sections
const SectionPricing = dynamic(import("~/page-sections/robot/SectionPricing"));
const SectionForm = dynamic(import("~/page-sections/robot/SectionForm"));
const SectionFuncionamiento = dynamic(
  import("~/page-sections/robot/SectionFuncionamiento")
);
const SectionFeatures = dynamic(
  import("~/page-sections/robot/SectionFeatures")
);

const useStyles = makeStyles(robotPageStyles);

const IWRobot = () => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(IWROBOT_QUERY);

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

  const {
    iwRobot: { Automatizacion },
  } = data;

  return (
    <div>
      <Parallax image={require("~/assets/img/banner_robot.png")} small>
        <div className={classes.captionContainer}>
          <div className={classes.textOverlay}>
            <h1>
              Libertad tecnologica
              <span>y automatización</span>
            </h1>
          </div>
        </div>
      </Parallax>
      <div className={classes.main}>
        <SectionFuncionamiento />
        <GridContainer justify="center">
          <SectionTitle
            icon={{
              url: Automatizacion.header.titleIcon.url,
              alt: "PlanesIWRobot",
            }}
            title={Automatizacion.header.title}
          >
            <GridContainer>
              <GridItem
                xs={12}
                sm={6}
                md={6}
                className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}
              >
                <h2 className={classes.titlesub}>24 horas 365 días del año</h2>
                <div className={classes.sectionSpace} />
              </GridItem>
            </GridContainer>
            <SectionFeatures />
          </SectionTitle>
        </GridContainer>
        <GridContainer justify="center">
          <SectionTitle
            icon={{
              url: Automatizacion.header.titleIcon.url,
              alt: "PlanesIWRobot",
            }}
            title={Automatizacion.header.title}
          >
            <GridContainer>
              <GridItem
                xs={12}
                sm={6}
                md={6}
                className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}
              >
                <h2 className={classes.titlesub}>Un plan a tu medida</h2>
              </GridItem>
            </GridContainer>
            <SectionPricing />
          </SectionTitle>
        </GridContainer>
        <SectionForm />
      </div>
    </div>
  );
};

export default withApollo(withLayout(IWRobot));
