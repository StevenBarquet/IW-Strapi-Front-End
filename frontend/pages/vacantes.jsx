import React from "react";
import dynamic from "next/dynamic";

// layout

// @material-ui/icons
import { makeStyles } from "@material-ui/core/styles";
import withLayout from "~/layouts/main";

// core components
import Parallax from "~/components/Parallax/Parallax";
import vacantesPageStyle from "~/assets/jss/vacantesPageStyle/vacantesPageStyle";

// sections
const SectionCV = dynamic(import("~/page-sections/vacantes/SectionCV"));
const SectionheaderV = dynamic(
  import("~/page-sections/vacantes/SectionheaderV")
);
const SectionCards = dynamic(import("~/page-sections/vacantes/SectionCards"));

const useStyles = makeStyles(vacantesPageStyle);

const Vacantes = () => {
  const classes = useStyles();

  return (
    <div>
      <Parallax image={require("~/assets/img/bannerVacantes.png")} small>
        <div className={classes.captionContainer}>
          <div className={classes.textOverlay}>
            <h1>
              ¡Queremos conocerte!
              <span>¡Queremos conocerte!</span>
            </h1>
          </div>
        </div>
      </Parallax>
      <div className={classes.main}>
        <SectionheaderV />
        <SectionCards />
        <SectionCV />
      </div>
    </div>
  );
};

export default withLayout(Vacantes);
