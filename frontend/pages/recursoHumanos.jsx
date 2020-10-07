import React from "react";
import dynamic from "next/dynamic";

// @material-ui/icons
import { makeStyles } from "@material-ui/core/styles";
import withLayout from "~/layouts/main";

// core components
import Parallax from "~/components/Parallax/Parallax";

import recursoHPage from "~/assets/jss/recursoHPageStyle/recursoHPageStyle";

// sections
const SectionSearch = dynamic(import("~/page-sections/recursos/SectionSearch"));
const SectionFormRH = dynamic(import("~/page-sections/recursos/SectionFormRH"));
const SectionModalidad = dynamic(
  import("~/page-sections/recursos/SectionModalidad")
);
const SectionBeneficios = dynamic(
  import("~/page-sections/recursos/SectionBeneficios")
);

const useStyles = makeStyles(recursoHPage);

const RecursoHPage = () => {
  const classes = useStyles();

  return (
    <div>
      <Parallax image={require("~/assets/img/bannerhrPage.jpg")} small>
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
        <SectionSearch />
        <SectionModalidad />
        <SectionFormRH />
        <SectionBeneficios />
      </div>
    </div>
  );
};

export default withLayout(RecursoHPage);
