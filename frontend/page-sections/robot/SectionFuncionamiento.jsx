import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";

// Style
import pricingStyle from "~/assets/jss/robotPageStyles/pricingStyle.js";

const useStyles = makeStyles(pricingStyle);

const SectionFuncionamiento = () => {
  const classes = useStyles();
  return (
    <div className="cd-section">
      <div className={classes.pricing}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={10}
              md={10}
              className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}
            >
              <h2 className={classes.title}>Funcionamiento</h2>
              <p>
                Et quidem rerum facilis est primum igitur, inquit, sic agam, ut
                aut voluptates omittantur maiorum dolorum effugiendorum gratia
                quidem exercitus quid ex eo ortum, tam crudelis fuisse, nihil
                oportere nimium nos amice et quale sit numeranda nec segniorem
                ad minima veniam, quis nostrum exercitationem.
              </p>
              <div className={classes.sectionSpace} />
            </GridItem>
            <GridItem
              xs={12}
              sm={10}
              md={10}
              className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}
            >
              <div className={classes.iframeContainer}>
                <iframe
                  height="550"
                  src="https://www.youtube.com/embed/IN6QnLpVEPI?ref=creativetim"
                  frameBorder="0"
                  allow="encrypted-media"
                  allowFullScreen=""
                  title="Tesla"
                />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

export default SectionFuncionamiento;
