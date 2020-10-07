import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
// core components
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";
import InfoArea from "~/components/InfoArea/InfoArea";

import Bitmap from "~/assets/img/Bitmap-2.png";

import featuresStyle from "~/assets/jss/robotPageStyles/featuresStyle.js";

const useStyles = makeStyles(featuresStyle);

const SectionFeatures = () => {
  const classes = useStyles();
  return (
    <div className="cd-section">
      <div className={classes.container}>
        <div className={classes.features1}>
          <GridContainer className={classes.mtAuto}>
            <GridItem xs={12} sm={4} md={4}>
              <img className={classes.imgFeature} src={`${Bitmap}`} alt="..." />
              <InfoArea
                vertical
                icon={TrendingUpIcon}
                title="Escalabilidad"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough"
                iconColor="warning"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img className={classes.imgFeature} src={`${Bitmap}`} alt="..." />
              <InfoArea
                vertical
                icon={TrendingUpIcon}
                title="Escalabilidad"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                iconColor="warning"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img className={classes.imgFeature} src={`${Bitmap}`} alt="..." />
              <InfoArea
                vertical
                icon={TrendingUpIcon}
                title="Escalabilidad"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                iconColor="warning"
              />
            </GridItem>
          </GridContainer>
          <GridContainer justify="center" className={classes.mtAuto}>
            <GridItem xs={12} sm={4} md={4}>
              <img className={classes.imgFeature} src={`${Bitmap}`} alt="..." />
              <InfoArea
                vertical
                icon={TrendingUpIcon}
                title="Escalabilidad"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough"
                iconColor="warning"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img className={classes.imgFeature} src={`${Bitmap}`} alt="..." />
              <InfoArea
                vertical
                icon={TrendingUpIcon}
                title="Escalabilidad"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                iconColor="warning"
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

export default SectionFeatures;
