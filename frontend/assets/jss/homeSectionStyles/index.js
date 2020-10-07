import { main, mainRaised } from "~/assets/jss/nextjs-material-kit-pro";

const mainHeaderStyle = {
  carouselContainer: {
    "@media (max-width: 576px)": {
      position: "static",
      display: "flex",
      flexDirection: "column",
    },
    position: "relative",
  },
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
    width: "450px",
    "& h1": {
      fontWeight: "700",
      "& span": {
        fontWeight: "100",
        clear: "both",
        display: "block",
      },
    },
  },
  main: {
    ...main,
  },
  mainRaised: {
    ...mainRaised,
  },
  introductoryText: {
    textAlign: "center",
  },
  learnMoreButton: {
    float: "right",
  },
  section: {
    paddingTop: "3rem",
    paddingBottom: "3rem",
  },
  carouselCompanyLogo: {
    width: "100vw",
    height: "50vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default mainHeaderStyle;
