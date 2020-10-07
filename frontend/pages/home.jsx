// Dependencies
import dynamic from "next/dynamic";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// layout
import withLayout from "~/layouts/main";

// styles
import homeSectionStyles from "~/assets/jss/homeSectionStyles";

// sections
const Header = dynamic(import("~/page-sections/home/Header"));
const SectionAboutUs = dynamic(import("~/page-sections/home/AboutUs"));
const SectionExperience = dynamic(import("~/page-sections/home/Experience"));
const SectionBusinessPartners = dynamic(
  import("~/page-sections/home/BusinessPartners")
);
// const SectionTheyTrust = dynamic(import("~/page-sections/home/TheyTrust"));

const useStyles = makeStyles(homeSectionStyles);

const HomePage = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <main className={classNames(classes.main, classes.mainRaised)}>
        <SectionAboutUs />
        <SectionExperience />
        <SectionBusinessPartners />
        {/* <SectionTheyTrust sectionTheyTrust={sectionTheyTrust} /> */}
      </main>
    </>
  );
};

export default withLayout(HomePage);
