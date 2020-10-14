import {
  main,
  mainRaised,
  section,
  textCenter,
  title,
  floatRight,
  sectionWithBackgroundColor,
} from "assets/jss/nextjs-material-kit-pro";

const joinUsStyle = () => ({
  main,
  mainRaised,
  section,
  textCenter,
  floatRight,
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
  tagsFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  tagsFlexEnd: {
    "@media (max-width: 1024px)": {
      display: "none",
    },
    display: "flex",
    justifyContent: "flex-end",
    margin: "1rem",
  },
  marginAuto: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  lengthText: {
    color: "#21646D",
    fontWeight: 600,
    position: "relative",
    top: "12px",
  },
  dividerGreen: {
    "@media (max-width: 1024px)": {
      borderTop: "8px solid rgba(17,27,46,0.6)",
    },
    borderTop: "10px solid rgba(17,27,46,0.6)",
    marginTop: "-1.2rem",
    marginBottom: "2rem",
  },
  dividerSmall: {
    marginTop: "1.2rem",
    marginBottom: "0.500rem",
    borderTop: "3px solid #3DB49E",
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
  displayNone: {
    "@media (max-width: 736px)": {
      display: "none",
    },
  },
  contactText: {
    "@media (max-width: 1024px)": {
      fontSize: "0.9rem",
    },
    color: "#15695b",
    fontWeight: "bold",
    marginBottom: "5rem",
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
  sectionBackgroundColor: {
    "@media (max-width: 736px)": {
      ...sectionWithBackgroundColor,
    },
  },
  divider: {
    borderTop: "10px solid #00C7B1",
    marginTop: "-1.2rem",
    marginBottom: "2rem",
  },
});

export default joinUsStyle;
