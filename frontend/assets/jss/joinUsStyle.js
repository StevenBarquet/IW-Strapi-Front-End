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

const joinUsStyle = () => ({
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
    left: "25%",
    transform: "translate(-25%, -50%)",
    top: "40%",
    position: "absolute",
    zIndex: "1",
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
  },
  introductoryText: {
    "& p": {
      color: "#15695b",
      fontWeight: 600,
      fontSize: "22px",
    },
    "& h2": {
      fontSize: "22px",
      margin: "0px",
    },
    "@media (max-width: 736px)": {
      "& p": {
        fontSize: "1rem",
      },
      "& h2": {
        fontSize: "1rem",
      },
    },
  },
  sectionBackgroundColor: {
    "@media (max-width: 736px)": {
      ...sectionWithBackgroundColor,
    },
  },
  titleContainer: {
    "@media (max-width: 1024px)": {
      width: "300px",
      "& h1": {
        fontSize: "2.2rem",
      },
    },
    "@media (max-width: 576px)": {
      width: "auto",
      "& h1": {
        textAlign: "center",
      },
    },
    width: "420px",
  },
  dividerTags: {
    ...divider,
    borderTop: "1px solid #21646D",
    marginTop: "0.2rem !important",
  },
  lengthVacantText: {
    ...floatRight,
    color: "#21646D",
    fontWeight: 600,
    position: "relative",
    top: "10px",
  },
  titleVacante: {
    "@media (max-width: 1024px)": {
      fontSize: "1.3rem",
    },
    color: "#225E66",
    fontWeight: 600,
    fontSize: "1.8rem",
    marginBottom: "19px",
  },
  contactText: {
    "@media (max-width: 1024px)": {
      fontSize: "0.9rem",
    },
    color: "#15695b",
    fontWeight: "bold",
    marginBottom: "5rem",
  },
  dividerGray: {
    ...divider,
    "@media (max-width: 1024px)": {
      borderTop: "8px solid rgba(17,27,46,0.6)",
    },
    borderTop: "10px solid rgba(17,27,46,0.6)",
  },
  displayNone: {
    "@media (max-width: 736px)": {
      display: "none",
    },
  },
});

export default joinUsStyle;
