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
  captionContainer,
  textOverlay,
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
    ...captionContainer,
    left: "38% !important",
    textAlign: "center",
    "@media (max-width: 1024px)": {
      left: "34% !important",
    },
    "@media (max-width: 768px)": {
      left: "28% !important",
    },
  },
  textOverlay: {
    ...textOverlay,
    width: "600px",
    "& p": {
      textAlign: "center",
      fontSize: "2.8rem",
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
