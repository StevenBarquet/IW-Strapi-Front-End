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
const Header = dynamic(import("page-sections/specialized-services/Header"));
const TalentScout = dynamic(
  import("page-sections/specialized-services/TalentScout")
);

const useStyles = makeStyles(homeStyle);

const SpecializedServices = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <main className={classNames(classes.main, classes.mainRaised)}>
        <TalentScout />
      </main>
    </>
  );
};

export default withApollo(withLayout(SpecializedServices));
