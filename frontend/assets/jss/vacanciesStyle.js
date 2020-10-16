import {
  main,
  mainRaised,
  section,
  textCenter,
  title,
  divider,
  mlAuto,
  mrAuto,
  floatRight,
  sectionWithBackgroundColor,
} from "assets/jss/nextjs-material-kit-pro";

const vacanciesStyle = () => ({
  main,
  mainRaised,
  section,
  textCenter,
  floatRight,
  divider,
  mlAuto,
  mrAuto,
  sectionWithBackgroundColor,
  title,
  captionContainer: {
    "@media (max-width: 576px)": {
      textAlign: "center",
      position: "static",
      transform: "none",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    left: "38%",
    textAlign: "center",
    transform: "translate(-25%, -50%)",
    top: "40%",
    position: "absolute",
    zIndex: "1",
    "@media (max-width: 1024px)": {
      left: "34%",
    },
    "@media (max-width: 768px)": {
      left: "28%",
    },
  },
  textOverlay: {
    width: "600px",
    "& p": {
      textAlign: "center",
      fontSize: "2.8rem",
      fontWeight: "100",
      clear: "both",
      display: "block",
    },
    "@media (max-width: 576px)": {
      "& h1": {
        fontSize: "2rem",
        margin: "0px",
      },
      "& p": {
        fontSize: "1.5rem",
        margin: "0px",
      },
    },
  },
});

export default vacanciesStyle;
