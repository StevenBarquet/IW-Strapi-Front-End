// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core-components
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";

import SectionCVStyle from "~/assets/jss/vacantesPageStyle/SectionCVStyle";
import imgRH from "~/assets/img/Group9.png";

const useStyles = makeStyles(SectionCVStyle);

const SectionBeneficios = () => {
  const classes = useStyles();

  return (
    <div id="section-experience">
      <GridContainer justify="center" className={classes.background}>
        <GridItem item xs={10} sm={8} md={7} lg={6}>
          <img
            style={{
              width: "80%",
              display: "block",
            }}
            src={imgRH}
            alt="section-beneficios"
          />
        </GridItem>
        <GridItem xs={10} sm={8} md={4} lg={4}>
          <div className={classes.vacantesContainer}>
            <div className={classes.businessFeed}>
              Certe, inquam, pertinax non quo ignorare vos arbitrer, sed et
              caritatem, quae sunt vitae dicta sunt, explicabo nemo enim ad
              respondendum reddidisti quorum nihil ut ratione intellegi posse et
              via procedat oratio.
            </div>
          </div>
          <p className={classes.textColor}>
            Primum igitur, quid aut odit aut in armatum hostem impetum.
          </p>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default SectionBeneficios;
