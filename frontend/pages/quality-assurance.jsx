// Dependencies
import dynamic from "next/dynamic";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// layout
import withLayout from "layouts/main";

// styles
import qualityAssuranceStyle from "assets/jss/qualityAssuranceStyle";

// sections
const Header = dynamic(import("page-sections/quality-assurance/Header"));
const QADescription = dynamic(
  import("page-sections/quality-assurance/QADescription")
);
const QAOffer = dynamic(import("page-sections/quality-assurance/QAOffer"));
const QAofferGuarantees = dynamic(
  import("page-sections/quality-assurance/QAofferGuarantees")
);
const QASuccessStories = dynamic(
  import("page-sections/quality-assurance/QASuccessStories")
);

const useStyles = makeStyles(qualityAssuranceStyle);

const QualityAssurance = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <main className={classNames(classes.main, classes.mainRaised)}>
        <QADescription />
        <QAOffer />
        <QAofferGuarantees />
        <QASuccessStories />
      </main>
    </>
  );
};

export default withLayout(QualityAssurance);
