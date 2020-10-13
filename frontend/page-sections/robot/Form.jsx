/* eslint-disable react/require-default-props */
// Dependencies
import getConfig from "next/config";
import { useQuery } from "@apollo/client";
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// context
import { useSettings } from "context/Settings";

// core-components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import TextInputField from "components/CustomInput/CustomInput";
import Button from "components/CustomButtons/Button";
import RenderHTML from "components/HTML/RenderHTML";

// gql
import { ROBOT_FORM_QUERY } from "gql/queries/robot";

import robotStyles from "assets/jss/robotStyles";

const useStyles = makeStyles(robotStyles);

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const Form = ({ values, errors, handleChange }) => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const { loading, error, data } = useQuery(ROBOT_FORM_QUERY);
  const classes = useStyles();

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (error) {
    return (
      <h1>
        Error:
        {JSON.stringify(error)}
      </h1>
    );
  }

  if (!data.robot) {
    return <h1>¡Revisar CMS!</h1>;
  }

  const {
    robot: { form },
  } = data;

  return (
    <div id="section-form" className={classes.sectionSinPB}>
      <GridContainer
        justify="center"
        className={classes.sectionWithBackgroundColor}
      >
        <GridItem xs={10} sm={8} md={8} lg={10}>
          <img
            src={`${apiUrl}${form.sectionIcon.url}`}
            alt={form.sectionIcon.alternativeText}
            className={classes.centerImage}
          />
          <h1 className={classes.title}>
            {form.title[`sectionTitle${language}`]}
          </h1>
          <h2 className={classes.subtitle}>
            {form.subtitle[`sectionSubTitle${language}`]}
          </h2>
          <RenderHTML
            className={classes.descriptionText}
            html={form.introductoryText[`introductoryText${language}`]}
          />
          <GridContainer justify="center">
            <GridItem xs={12} sm={10} md={8}>
              <GridContainer>
                <GridItem item xs={12} sm={6} md={6}>
                  <TextInputField
                    id="nombre"
                    name="nombre"
                    value={values.nombre}
                    labelText={language === "_en" ? "Name" : "Nombre"}
                    handleChange={handleChange}
                    errors={errors && !!errors.nombre}
                    inputProps={{
                      name: "nombre",
                      maxLength: 18,
                      placeholder: language === "_en" ? "Name" : "Nombre",
                    }}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem item xs={12} sm={6} md={6}>
                  <TextInputField
                    id="email"
                    name="email"
                    value={values.email}
                    labelText={
                      language === "_en" ? "Email" : "Eorreo electrónico"
                    }
                    handleChange={handleChange}
                    errors={errors && !!errors.email}
                    inputProps={{
                      name: "email",
                      maxLength: 18,
                      placeholder:
                        language === "_en" ? "Email" : "Correo electrónico",
                    }}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem item xs={12} sm={5} md={5}>
                  <TextInputField
                    id="empresa"
                    name="empresa"
                    value={values.empresa}
                    labelText={language === "_en" ? "Company" : "Empresa"}
                    handleChange={handleChange}
                    errors={errors && !!errors.empresa}
                    inputProps={{
                      name: "empresa",
                      maxLength: 18,
                      placeholder: language === "_en" ? "Company" : "Empresa",
                    }}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem item xs={12} sm={7} md={7}>
                  <TextInputField
                    id="automatizacion"
                    name="automatizacion"
                    value={values.automatizacion}
                    labelText={
                      language === "_en"
                        ? "Automation Needs"
                        : "Necesidades de Automatización"
                    }
                    handleChange={handleChange}
                    errors={errors && !!errors.automatizacion}
                    inputProps={{
                      name: "automatizacion",
                      maxLength: 18,
                      placeholder:
                        language === "_en"
                          ? "Automation Needs"
                          : "Necesidades de Automatización",
                    }}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
          <GridContainer justify="center" className={classes.mt4rem}>
            <Button
              type="submit"
              className={classes.learnMoreButton}
              round
              color="behance"
            >
              {form.actionButton[`label${language}`]}
            </Button>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
};

Form.propTypes = {
  values: PropTypes.shape({
    nombre: PropTypes.string,
    empresa: PropTypes.string,
    email: PropTypes.string,
    automatizacion: PropTypes.string,
  }),
  errors: PropTypes.shape({
    nombre: PropTypes.string,
    empresa: PropTypes.string,
    email: PropTypes.string,
    automatizacion: PropTypes.string,
  }),
  handleChange: PropTypes.func.isRequired,
};

export default Form;
