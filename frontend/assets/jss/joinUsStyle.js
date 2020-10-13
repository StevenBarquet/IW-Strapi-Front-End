import {
  main,
  mainRaised,
  section,
  textCenter,
  title,
  sectionWithBackgroundColor,
} from "assets/jss/nextjs-material-kit-pro";

const joinUsStyle = () => ({
  main,
  mainRaised,
  section,
  textCenter,
  sectionWithBackgroundColor,
  title: {
    ...title,
    "@media (max-width: 736px)": {
      fontSize: "2.500rem",
    },
  },
  captionContainer: {
    "@media (max-width: 736px)": {
      display: "none",
    },
    left: "18%",
    transform: "translate(-25%, -50%)",
    top: "53%",
    position: "absolute",
    zIndex: "1",
  },
  captionContainerText: {
    "@media (max-width: 736px)": {
      position: "static",
      marginLeft: "1.509rem",
      transform: "none",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    display: "none",
  },
  textOverlay: {
    "@media (max-width: 1024px)": {
      width: "300px",
      "& h1": {
        fontSize: "1.6rem",
        "& span": {
          fontSize: "2rem",
        },
      },
      "& p": {
        fontSize: "3rem",
      },
    },
    "@media (max-width: 736px)": {
      width: "300px",
      "& h1": {
        fontSize: "1.6rem",
        "& span": {
          fontSize: "2rem",
        },
      },
      "& p": {
        fontSize: "2rem",
      },
    },
    width: "650px",
    "& h1": {
      fontWeight: "700",
      "& span": {
        fontWeight: "100",
        clear: "both",
        display: "block",
      },
    },
    "& p": {
      fontSize: "3rem",
      textAlign: "center",
      clear: "both",
      display: "block",
      color: "#111B2E",
    },
  },
  introductoryText: {
    "& p": {
      color: "#30A490",
      fontWeight: 600,
      fontSize: "22px",
    },
    "& h4": {
      fontSize: "22px",
      margin: "0px",
    },
  },
  tagsFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  marginAuto: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "3rem",
  },
  lengthText: {
    color: "#21646D",
    fontWeight: 600,
    position: "relative",
    top: "12px",
  },
});

export default joinUsStyle;
