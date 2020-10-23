// Dependencies
import dynamic from "next/dynamic";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// apollo
import { withApollo } from "libs/apollo";

// layout
import withLayout from "layouts/main";

// styles
import technologyConsultingStyle from "assets/jss/technologyConsultingStyle";

// sections
const Header = dynamic(import("page-sections/technology-consulting/Header"));
const TaskOptimization = dynamic(
  import("page-sections/technology-consulting/TaskOptimization")
);
const OfferGuarantees = dynamic(
  import("page-sections/technology-consulting/OfferGuarantees")
);
const ConsultingOptions = dynamic(
  import("page-sections/technology-consulting/ConsultingOptions")
);
const SuccessStories = dynamic(
  import("page-sections/technology-consulting/SuccessStories")
);

const useStyles = makeStyles(technologyConsultingStyle);

const TechnologyConsulting = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <main className={classNames(classes.main, classes.mainRaised)}>
        <TaskOptimization />
        <OfferGuarantees />
        <ConsultingOptions />
        <SuccessStories />
      </main>
    </>
  );
};

export default withApollo(withLayout(TechnologyConsulting));
