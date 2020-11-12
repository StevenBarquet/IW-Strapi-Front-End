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

// gql
import { FORM_EMAIL_QUERY } from "gql/queries/email";

// layout
import withLayout from "layouts/main";

// InicialValues & Schema
import { initialValues, schema } from "page-sections/robot/formConfig";

// styles
import robotStyles from "assets/jss/robotStyles";

// sections
const Header = dynamic(import("page-sections/robot/Header"));
const Functioning = dynamic(import("page-sections/robot/Functioning"));
const Benefits = dynamic(import("page-sections/robot/Benefits"));
const Form = dynamic(import("page-sections/robot/Form"));
const PlansForYou = dynamic(import("page-sections/robot/PlansForYou"));

const useStyles = makeStyles(robotStyles);

const RobotPage = () => {
  const classes = useStyles();
  const [createRegistry] = useMutation(FORM_EMAIL_QUERY);

  const onSubmitForm = async (values, { resetForm, setSubmitting }) => {
    const { nombre, email, empresa, automatizacion } = values;
    try {
      const { data } = await createRegistry({
        variables: {
          input: {
            to: "cmulato@interware.com.mx",
            subject: "Formulario de Robot",
            html: `<h1>¡Integra IW Robot a tu equipo de trabajo!</h1><strong>Nombre: </strong>${nombre}<br/> <strong> Correo Electronico: </strong> ${email} <br/> <strong>Empresa: </strong> ${empresa} <br/> <strong>Necesidades de automatizacion: </strong> ${automatizacion}`,
          },
        },
      });
      setSubmitting(false);
      resetForm();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <main className={classNames(classes.main, classes.mainRaised)}>
        <Functioning />
        <Benefits />
        <PlansForYou />
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmitForm}
          validationSchema={schema}
          validateOnChange={false}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <Form {...props} />
            </form>
          )}
        </Formik>
      </main>
    </>
  );
};

export default withApollo(withLayout(RobotPage));
