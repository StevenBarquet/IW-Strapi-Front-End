// Dependencies
import { Formik } from "formik";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// layout
import withLayout from "layouts/main";

// InicialValues & Schema
import { initialValues, schema } from "page-sections/robot/formConfig";

// apollo
import { initializeApollo } from "libs/apollo";

// gql
import { ROBOT_HEADER_QUERY, ROBOT_FUNTIONING_QUERY } from "gql/queries/robot";

// styles
import robotStyles from "assets/jss/robotStyles";

// sections
import Header from "page-sections/robot/Header";
import Functioning from "page-sections/robot/Functioning";
import Benefits from "page-sections/robot/Benefits";
import Form from "page-sections/robot/Form";
import PlansForYou from "page-sections/robot/PlansForYou";

const useStyles = makeStyles(robotStyles);

const RobotPage = () => {
  const classes = useStyles();

  const onSubmitForm = async (values, { resetForm, setSubmitting }) => {
    console.log("FormValues: ", values); // eslint-disable-line no-console
    resetForm();
    setSubmitting(false);
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

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ROBOT_HEADER_QUERY,
  });

  await apolloClient.query({
    query: ROBOT_FUNTIONING_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}

export default withLayout(RobotPage);
