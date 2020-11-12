// Dependencies
import { Formik } from "formik";
import dynamic from "next/dynamic";
import { useMutation } from "@apollo/client";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// gql
import { FORM_EMAIL_QUERY } from "gql/queries/email";

// apollo
import { withApollo } from "libs/apollo";

// layout
import withLayout from "layouts/main";

// InicialValues & Schema
import {
  initialValues,
  schema,
} from "page-sections/specialized-services/formConfig";

// jss styles
import homeStyle from "assets/jss/homeStyle";

// sections
const Header = dynamic(import("page-sections/specialized-services/Header"));
const TalentScout = dynamic(
  import("page-sections/specialized-services/TalentScout")
);
const TalentAttraction = dynamic(
  import("page-sections/specialized-services/TalentAttraction")
);
const RecruitBest = dynamic(
  import("page-sections/specialized-services/RecruitBest")
);
const RequestQuote = dynamic(
  import("page-sections/specialized-services/RequestQuote")
);

const useStyles = makeStyles(homeStyle);

const SpecializedServices = () => {
  const classes = useStyles();
  const [createRegistry] = useMutation(FORM_EMAIL_QUERY);

  const onSubmitForm = async (values, { resetForm, setSubmitting }) => {
    const { name, email, company, telephone, description } = values;

    try {
      const { data } = await createRegistry({
        variables: {
          input: {
            to: "cmulato@interware.com.mx",
            subject: "Formulario Solicita una cotización",
            html: `<h1>Solicita una cotización</h1><strong>Nombre: </strong>${name}<br/> <strong> Correo Electronico: </strong> ${email} <br/> <strong>Empresa: </strong> ${company} <br/> <strong>Telefono: </strong> ${telephone} <br/> <strong>Indica tu necesidad: </strong> ${description}`,
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
        <TalentScout />
        <TalentAttraction />
        <RecruitBest />
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmitForm}
          validationSchema={schema}
          validateOnChange={false}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <RequestQuote {...props} />
            </form>
          )}
        </Formik>
      </main>
    </>
  );
};

export default withApollo(withLayout(SpecializedServices));
