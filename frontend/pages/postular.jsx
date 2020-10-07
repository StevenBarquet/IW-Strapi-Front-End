import React from "react";
import dynamic from "next/dynamic";

// @material-ui/icons
import { makeStyles } from "@material-ui/core/styles";
import withLayout from "~/layouts/main";

// core components
import Parallax from "~/components/Parallax/Parallax";
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";

import postularPageStyle from "~/assets/jss/postularPageStyle/postularPageStyle";

// sections
const SectionSearch = dynamic(import("~/page-sections/postular/SectionSearch"));
const SectionForm = dynamic(import("~/page-sections/postular/SectionForm"));

const useStyles = makeStyles(postularPageStyle);

const Postular = () => {
  const classes = useStyles();

  return (
    <div>
      <Parallax image={require("~/assets/img/bannerPostular.png")} small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
              <h2 className={classes.subTitle}>Head Hunting</h2>
              <h2 className={classes.title}>Vacantes IW</h2>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.main}>
        <SectionSearch />
        <SectionForm />
      </div>
    </div>
  );
};

export default withLayout(Postular);
