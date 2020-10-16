import {
  main,
  mainRaised,
  section,
  captionContainer,
  textOverlay,
  floatRight,
  textCenter,
  sectionWithBackgroundColor,
} from "assets/jss/nextjs-material-kit-pro";

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
  captionContainer,
  textOverlay,
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
      "& div": {
        display: "flex",
        "& span": {
          marginRight: "16px",
          fontSize: "1.5rem",
          color: "#2e7b69",
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
