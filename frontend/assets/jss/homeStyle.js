import {
  main,
  mainRaised,
  section,
  floatRight,
  textCenter,
  sectionWithBackgroundColor,
} from "~/assets/jss/nextjs-material-kit-pro";

const homeStyle = (theme) => ({
  main,
  mainRaised,
  section,
  sectionWithBackgroundColor,
  floatRight,
  textCenter,
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
    width: "400px",
    "& p": {
      fontSize: "2.8rem",
      fontWeight: "100",
      clear: "both",
      display: "block",
    },
  },
  underlinedTitleContainer: {
    "@media (max-width: 576px)": {
      width: "auto",
    },
    width: "300px",
  },
  divider: {
    borderTop: "10px solid #00C7B1",
    marginTop: "-1.2rem",
    marginBottom: "2rem",
  },
  businessListContainer: {
    [theme.breakpoints.down("md")]: {
      marginTop: "2rem",
      display: "block",
      alignItems: "initial",
      justifyContent: "initial",
    },
    display: "flex",
    "& div": {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  businessLinesTitle: {
    fontSize: "1.5rem",
    fontWeight: "800",
    color: "#21646D",
  },
  businessFeed: {
    marginTop: "16px",
    padding: "0",
    listStyleType: "none",
    "& li": {
      paddingBottom: "10px",
      float: "left",
      "& div": {
        display: "flex",
        "& span": {
          marginRight: "16px",
          fontSize: "1.5rem",
          color: "#3DB49E",
        },
        "& a": {
          fontSize: "1.125rem",
          color: "#21646D",
        },
        "& a:hover": {
          textDecoration: "underline",
          cursor: "pointer",
        },
      },
    },
  },
});

export default homeStyle;
