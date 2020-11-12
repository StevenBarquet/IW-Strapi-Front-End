/* eslint-disable no-undef */
// Dependencies
import { Formik } from "formik";
import dynamic from "next/dynamic";
import { useMutation } from "@apollo/client";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// apollo
import { withApollo } from "libs/apollo";

// layout
import withLayout from "layouts/main";

// gql
import { FORM_EMAIL_QUERY } from "gql/queries/email";

// InicialValues & Schema
import { initialValues, schema } from "page-sections/vacancies/formConfig";

// jss styles
import joinUsStyle from "assets/jss/joinUsStyle";
import { useState } from "react";

// sections
const Header = dynamic(import("page-sections/vacancies/Header"));
const SearchVacancies = dynamic(
  import("page-sections/vacancies/SearchVacancies")
);
const Form = dynamic(import("page-sections/vacancies/Form"));

const useStyles = makeStyles(joinUsStyle);

const Vacancies = () => {
  const classes = useStyles();
  const [archivoData, setarchivoData] = useState();
  const [uploadFile] = useMutation(FORM_EMAIL_QUERY);

  const onSubmitForm = async (values, { resetForm, setSubmitting }) => {
    const {
      archivoCarga,
      name,
      apellidos,
      edad,
      celular,
      email,
      localidad,
      linkPDF,
    } = values;

    const getBase64 = (file, cb) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        cb(reader.result);
      };
    };

    getBase64(archivoCarga, async (result) => {
      try {
        const { data } = await uploadFile({
          variables: {
            input: {
              content: result.replace(/^data:.+;base64,/, ""),
              filename: archivoCarga.name,
              to: "cmulato@interware.com.mx",
              subject: `Formulario de Postularse de ${name} ${apellidos}`,
              html: `<h1>Datos Personales</h1> <strong>Nombre: </strong>${name}<br/> <strong>Apellidos: </strong>${apellidos}<br/> <strong>Edad: </strong>${edad}<br/> <h1>Datos del Contacto</h1><strong>Telefono celular/casa: </strong>${celular}<br/> <strong>Correo Electronico: </strong>${email}<br/><strong>Localidad Municipio o Acaldia: </strong>${localidad}<br/> <h1>Curriculum Viate</h1> <strong>Link para descargar: </strong>${linkPDF}<br/>`,
            },
          },
        });
        setSubmitting(false);
        setarchivoData();
        resetForm();
        console.log(data);
      } catch (error) {
        console.log(error);
      }

      return result;
    });
  };

  return (
    <>
      <Header />
      <main className={classNames(classes.main, classes.mainRaised)}>
        <SearchVacancies />
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmitForm}
          validationSchema={schema}
          validateOnChange={false}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <Form
                {...props}
                archivoData={archivoData}
                setarchivoData={setarchivoData}
              />
            </form>
          )}
        </Formik>
      </main>
    </>
  );
};

export default withApollo(withLayout(Vacancies));
