/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";
import Card from "~/components/Card/Card";
import CardBody from "~/components/Card/CardBody";
import CardHeader from "~/components/Card/CardHeader";
import CardFooter from "~/components/Card/CardFooter";
import Button from "~/components/CustomButtons/Button";

// Style
import pricingStyle from "~/assets/jss/robotPageStyles/pricingStyle.js";

import headerRobotIW from "~/assets/img/robotIW.png";

const useStyles = makeStyles(pricingStyle);

const SectionPricing = () => {
  const classes = useStyles();
  return (
    <div className="cd-section">
      <div className={classes.pricing}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6} lg={4}>
              <Card pricing className={classes.margimTop4rem}>
                <CardHeader className={classes.cardPosition} image plain>
                  <img
                    style={{
                      height: "140px",
                      width: "90%",
                      display: "block",
                    }}
                    src={headerRobotIW}
                    alt="..."
                  />
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${{ headerRobotIW }})`,
                      opacity: "1",
                    }}
                  />
                </CardHeader>
                <CardBody pricing plain>
                  <h1 className={classes.cardTitle}>$ 1,200</h1>
                  <h5 className={classes.description}>
                    At magnum periculum adiit in quo enim ad id ne.
                  </h5>
                  <ul>
                    <li>
                      <strong>100</strong> Projects
                    </li>
                    <li>
                      <strong>100</strong> Projects
                    </li>
                    <li>
                      <strong>100</strong> Projects
                    </li>
                    <li>
                      <strong>100</strong> Projects
                    </li>
                  </ul>
                </CardBody>
                <CardFooter pricing className={classes.justifyContentCenter}>
                  <Button color="warning" round>
                    Contrata ahora
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={4}>
              <Card pricing>
                <CardHeader className={classes.cardPosition} image plain>
                  <img
                    style={{
                      height: "140px",
                      width: "90%",
                      display: "block",
                    }}
                    src={headerRobotIW}
                    alt="..."
                  />
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${{ headerRobotIW }})`,
                      opacity: "1",
                    }}
                  />
                </CardHeader>
                <CardBody pricing>
                  <h1 className={classes.cardTitle}>$ 1,200</h1>
                  <h5 className={classes.description}>
                    At magnum periculum adiit in quo enim ad id ne.
                  </h5>
                  <ul>
                    <li>
                      <strong>100</strong> Projects
                    </li>
                    <li>
                      <strong>100</strong> Projects
                    </li>
                    <li>
                      <strong>100</strong> Projects
                    </li>
                    <li>
                      <strong>100</strong> Projects
                    </li>
                  </ul>
                </CardBody>
                <CardFooter pricing className={classes.justifyContentCenter}>
                  <Button color="warning" round>
                    Contrata ahora
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={4}>
              <Card pricing className={classes.margimTop4rem}>
                <CardHeader className={classes.cardPosition} image plain>
                  <img
                    style={{
                      height: "140px",
                      width: "90%",
                      display: "block",
                    }}
                    src={headerRobotIW}
                    alt="..."
                  />
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${{ headerRobotIW }})`,
                      opacity: "1",
                    }}
                  />
                </CardHeader>
                <CardBody pricing>
                  <h1 className={classes.cardTitle}>$ 1,200</h1>
                  <h5 className={classes.description}>
                    At magnum periculum adiit in quo enim ad id ne.
                  </h5>
                  <ul className={classes.text}>
                    <li>
                      <strong>100</strong> Projects
                    </li>
                    <li>
                      <strong>100</strong> Projects
                    </li>
                    <li>
                      <strong>100</strong> Projects
                    </li>
                    <li>
                      <strong>100</strong> Projects
                    </li>
                  </ul>
                </CardBody>
                <CardFooter pricing className={classes.justifyContentCenter}>
                  <Button color="warning" round>
                    Contrata ahora
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
          <br />
          <GridContainer justify="center">
            <Button color="behance" round>
              Adquiere tu propio iw Robot
            </Button>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

export default SectionPricing;
