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

  const onSubmitForm = async (values) => {
    console.log("values", values);
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
