// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core-components
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";
import Button from "~/components/CustomButtons/Button";

import SectionCVStyle from "~/assets/jss/vacantesPageStyle/SectionCVStyle";

const useStyles = makeStyles(SectionCVStyle);

const SectionCV = () => {
  const classes = useStyles();

  return (
    <div id="section-experience">
      <GridContainer justify="center" className={classes.background}>
        <GridItem item xs={10} sm={8} md={7} lg={4}>
          <div className={classes.titleContainer}>
            <h1>¡Intégrate a nuestro equipo!</h1>
            <hr className={classes.divider} />
          </div>
        </GridItem>
        <GridItem xs={10} sm={8} md={4} lg={5}>
          <div className={classes.vacantesContainer}>
            <div className={classes.businessFeed}>
              No rncuentras la vacante que buscabas, envianos tu Curriculum
              Vitae para integar tu perfil a nuestra base y considerarte para
              las próximas vacantes.
            </div>
            <div className={classes.mtbtnCV}>
              <Button onClick={(e) => e.preventDefault()} round color="behance">
                Enviar tu CV
              </Button>
            </div>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default SectionCV;
