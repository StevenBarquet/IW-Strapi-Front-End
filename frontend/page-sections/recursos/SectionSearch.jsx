// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core-components
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";
import CustomInput from "~/components/CustomInput/CustomInput";
import Button from "~/components/CustomButtons/Button";

import SectionCVStyle from "~/assets/jss/vacantesPageStyle/SectionCVStyle";

const useStyles = makeStyles(SectionCVStyle);

const SectionSearch = () => {
  const classes = useStyles();

  return (
    <div id="section-experience">
      <GridContainer justify="center" className={classes.background}>
        <GridItem xs={10} sm={8} md={4} lg={4}>
          <h2>Buscador de talento</h2>
          <div className={classes.vacantesContainer}>
            <div className={classes.businessFeed}>
              Busca al candidato idóneo para el puesto realizando una exhaustiva
              búsqueda en nuestra base de datos interna,
            </div>
          </div>
        </GridItem>
        <GridItem item xs={10} sm={8} md={7} lg={3}>
          <CustomInput
            labelText="Búscar perfil"
            id="float"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              rows: 6,
            }}
          />
          <Button
            onClick={(e) => e.preventDefault()}
            className={classes.btonSearch}
            round
            color="primary"
          >
            Enviar
          </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default SectionSearch;
