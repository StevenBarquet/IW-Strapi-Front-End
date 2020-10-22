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

// jss styles
import homeStyle from "assets/jss/homeStyle";

// sections
const Header = dynamic(import("page-sections/home/Header"));
const SectionAboutUs = dynamic(import("page-sections/home/AboutUs"));
const SectionExperience = dynamic(import("page-sections/home/Experience"));
const TechnologyImplementation = dynamic(
  import("page-sections/home/TechnologyImplementation")
);
const SectionBusinessPartners = dynamic(
  import("page-sections/home/BusinessPartners")
);
const SectionTheyTrust = dynamic(import("page-sections/home/TheyTrust"));

const useStyles = makeStyles(homeStyle);

const HomePage = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <main className={classNames(classes.main, classes.mainRaised)}>
        <SectionAboutUs />
        <SectionExperience />
        <TechnologyImplementation />
        <SectionBusinessPartners />
        <SectionTheyTrust />
      </main>
    </>
  );
};

export default withApollo(withLayout(HomePage));
