/* eslint-disable react/require-default-props */
// Dependencies
import { useQuery } from "@apollo/client";
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import AttachFile from "@material-ui/icons/AttachFile";
// context
import { useSettings } from "context/Settings";

// core-components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import TextInputField from "components/CustomInput/CustomInput";
import DateTime from "components/DateTime/DateTime";
import Button from "components/CustomButtons/Button";
import RenderHTML from "components/HTML/RenderHTML";
import CustomFileInput from "components/CustomFileInput/CustomFileInput";

// gql
import { VACANCIES_FORM_QUERY } from "gql/queries/vacancies";

import robotStyles from "assets/jss/robotStyles";

const useStyles = makeStyles(robotStyles);

const Form = ({ values, errors, handleChange }) => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const { loading, error, data } = useQuery(VACANCIES_FORM_QUERY);
  const classes = useStyles();

  if (loading) {
    return null;
  }

  if (error) {
    return (
      <h1>
        Error:
        {JSON.stringify(error)}
      </h1>
    );
  }

  if (!data.vacanciesIw) {
    return <h1>¡Revisar CMS!</h1>;
  }

  const {
    vacanciesIw: { form },
  } = data;

  return (
    <div id="section-form" className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={8} lg={11}>
          <h2 className={classes.title}>
            {form.title[`sectionTitle${language}`]}
          </h2>
          <RenderHTML
            html={form.subtitle[`sectionSubTitle${language}`]}
            className={classes.textCenter}
          />
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={10}>
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
                labelText={language === "_en" ? "Email" : "Correo electrónico"}
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
          </GridContainer>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={10}>
          <h3>Datos Personales</h3>
          <GridContainer>
            <GridItem item xs={12} sm={4} md={4}>
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
            <GridItem item xs={12} sm={4} md={4}>
              <TextInputField
                id="automatizacion"
                name="automatizacion"
                value={values.automatizacion}
                labelText={
                  language === "_en" ? "Automation Needs" : "Necesidades"
                }
                handleChange={handleChange}
                errors={errors && !!errors.automatizacion}
                inputProps={{
                  name: "automatizacion",
                  maxLength: 18,
                  placeholder:
                    language === "_en" ? "Automation Needs" : "Necesidades",
                }}
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <DateTime
                labelText="Fecha de nacimiento"
                id="fecha"
                name="fecha"
                onChange={() => {}}
                value=""
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
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={10}>
          <h3>Datos de Contacto</h3>
          <GridContainer>
            <GridItem item xs={12} sm={4} md={4}>
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
            <GridItem item xs={12} sm={4} md={4}>
              <TextInputField
                id="automatizacion"
                name="automatizacion"
                value={values.automatizacion}
                labelText={
                  language === "_en" ? "Automation Needs" : "Necesidades"
                }
                handleChange={handleChange}
                errors={errors && !!errors.automatizacion}
                inputProps={{
                  name: "automatizacion",
                  maxLength: 18,
                  placeholder:
                    language === "_en" ? "Automation Needs" : "Necesidades",
                }}
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <TextInputField
                id="automatizacion"
                name="automatizacion"
                value={values.automatizacion}
                labelText={
                  language === "_en" ? "Automation Needs" : "Necesidades"
                }
                handleChange={handleChange}
                errors={errors && !!errors.automatizacion}
                inputProps={{
                  name: "automatizacion",
                  maxLength: 18,
                  placeholder:
                    language === "_en" ? "Automation Needs" : "Necesidades",
                }}
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={10}>
          <h3>Adjunta tu Curriculum Vitae</h3>
          <GridContainer>
            <GridItem item xs={12} sm={6} md={6}>
              <CustomFileInput
                id="archivoCarga"
                value=""
                label="Seleccionar archivo..."
                fileInputProps={{
                  id: "archivoCarga",
                  name: "archivoCarga",
                  accept:
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",
                  onChange: () => {},
                }}
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  placeholder: "Seleccionar archivo...",
                }}
                endButton={{
                  buttonProps: {
                    round: true,
                    color: "primary",
                    justIcon: true,
                    fileButton: true,
                  },
                  icon: <AttachFile />,
                }}
              />
              <p className={classes.colorText}>
                {language === "_en"
                  ? "Formato Word o PDF, RTF peso menor a 2000 KB "
                  : "Word or PDF format, RTF weight less than 2000 KB"}
              </p>
            </GridItem>
            <GridItem item xs={12} sm={6} md={6}>
              <TextInputField
                id="automatizacion"
                name="automatizacion"
                value={values.automatizacion}
                labelText={
                  language === "_en"
                    ? "Link to download"
                    : "Link para descargar"
                }
                handleChange={handleChange}
                errors={errors && !!errors.automatizacion}
                inputProps={{
                  name: "automatizacion",
                  placeholder:
                    language === "_en"
                      ? "Link to download"
                      : "Link para descargar",
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
