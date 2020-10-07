// Dependencies
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core-components
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";
import CustomInput from "~/components/CustomInput/CustomInput";
import Button from "~/components/CustomButtons/Button";
import Select from "~/components/CustomSelect/Select";

import SectionFormStyle from "~/assets/jss/robotPageStyles/SectionFormStyle";

import HeaderRobot from "~/assets/img/headerRobot.png";

const useStyles = makeStyles(SectionFormStyle);

const SectionForm = () => {
  const classes = useStyles();

  return (
    <div id="section-experience" className={classes.background}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12} className={classes.textCenter}>
            <img
              style={{
                width: "10%",
              }}
              src={`${HeaderRobot}`}
              alt="..."
            />
            <h1 className={classes.title}>
              ¿Y tú, qué esperas para automatizarte?
            </h1>
            <h2 className={classes.subtitle}>
              ¡Integra IW Robot a tu equipo de trabajo!
            </h2>
            <h3>
              El complemento perfecto para que tu empresa se vuelva más
              eficiente.
            </h3>
          </GridItem>
        </GridContainer>
      </div>
      <GridContainer justify="center" className={classes.mtAuto}>
        <GridItem item xs={7} sm={7} md={4} lg={3}>
          <CustomInput
            labelText="Nombre"
            id="nombre"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              rows: 6,
            }}
          />
          <Select
            id="empresa"
            name="empresa"
            label="Empresa"
            noOptionText="Empresa"
            value=""
            handleChange={() => {}}
            options={[]}
          />
        </GridItem>
        <GridItem xs={7} sm={7} md={4} lg={3}>
          <CustomInput
            labelText="Correo Electronico"
            id="correo"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              rows: 6,
            }}
          />
          <Select
            id="automatizacion"
            name="automatizacion"
            label="Necesidades de Automatización:"
            noOptionText="Necesidades de Automatización:"
            value=""
            handleChange={() => {}}
            options={[]}
          />
        </GridItem>
      </GridContainer>
      <GridContainer justify="center" className={classes.mtAuto}>
        <Button
          onClick={(e) => e.preventDefault()}
          className={classes.learnMoreButton}
          round
          color="behance"
        >
          Empezar
        </Button>
      </GridContainer>
    </div>
  );
};

SectionForm.defaultProps = {
  sectionExperience: {
    title: "",
    introductoryText: "",
  },
  businessLines: {
    listTitle: "",
    listItems: [],
  },
};

SectionForm.propTypes = {
  sectionExperience: PropTypes.shape({
    title: PropTypes.string,
    introductoryText: PropTypes.string,
  }),
  businessLines: PropTypes.shape({
    listTitle: PropTypes.string,
    listItems: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string,
        listItemIcon: PropTypes.string,
        listIconDescription: PropTypes.string,
      })
    ),
  }),
};

export default SectionForm;
