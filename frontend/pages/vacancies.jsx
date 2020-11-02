// Dependencies
import { Formik } from "formik";
import dynamic from "next/dynamic";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// apollo
import { withApollo } from "libs/apollo";

// layout
import withLayout from "layouts/main";

// InicialValues & Schema
import { initialValues, schema } from "page-sections/robot/formConfig";

// jss styles
import joinUsStyle from "assets/jss/joinUsStyle";

// sections
const Header = dynamic(import("page-sections/vacancies/Header"));
const SearchVacancies = dynamic(
  import("page-sections/vacancies/SearchVacancies")
);
const Form = dynamic(import("page-sections/vacancies/Form"));

const useStyles = makeStyles(joinUsStyle);

const Vacancies = () => {
  const classes = useStyles();

  const onSubmitForm = async (values, { resetForm, setSubmitting }) => {
    console.log("values", values);
    resetForm();
    setSubmitting(false);
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
              <Form {...props} />
            </form>
          )}
        </Formik>
      </main>
    </>
  );
};

export default withApollo(withLayout(Vacancies));
