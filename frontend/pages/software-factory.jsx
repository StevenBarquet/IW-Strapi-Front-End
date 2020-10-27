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
import softwareFactoryStyle from "assets/jss/softwareFactoryStyle";

// sections
const Header = dynamic(import("page-sections/software-factory/Header"));
const TimeMarket = dynamic(import("page-sections/software-factory/TimeMarket"));
const FactoryServices = dynamic(
  import("page-sections/software-factory/FactoryServices")
);
const Benefits = dynamic(import("page-sections/software-factory/Benefits"));
const Deliverables = dynamic(
  import("page-sections/software-factory/Deliverables")
);
const DigitalServices = dynamic(
  import("page-sections/software-factory/DigitalServices")
);

const useStyles = makeStyles(softwareFactoryStyle);

const SoftwareFactory = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <main className={classNames(classes.main, classes.mainRaised)}>
        <TimeMarket />
        <FactoryServices />
        <Benefits />
        <Deliverables />
        <DigitalServices />
      </main>
    </>
  );
};

export default withApollo(withLayout(SoftwareFactory));
