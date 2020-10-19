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

  const onSubmitForm = async (values, { resetForm, setSubmitting }) => {
    console.log("values", values);
    resetForm();
    setSubmitting(false);
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
