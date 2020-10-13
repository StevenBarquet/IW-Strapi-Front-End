// Dependencies
import dynamic from "next/dynamic";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// apollo
import { withApollo } from "~/libs/apollo";

// layout
import withLayout from "~/layouts/main";

// jss styles
import joinUsStyle from "~/assets/jss/joinUsStyle";

// sections
const Header = dynamic(import("~/page-sections/join-us/Header"));
const JoinTeam = dynamic(import("~/page-sections/join-us/JoinTeam"));

const useStyles = makeStyles(joinUsStyle);

const JoinUsPage = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <main className={classNames(classes.main, classes.mainRaised)}>
        <JoinTeam />
      </main>
    </>
  );
};

export default withApollo(withLayout(JoinUsPage));
