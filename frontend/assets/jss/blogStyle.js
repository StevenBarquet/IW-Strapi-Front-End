import {
  main,
  mainRaised,
  section,
  captionContainer,
  textOverlay,
  floatRight,
  textCenter,
  cardTitle,
  whiteColor,
  mlAuto,
  mrAuto,
  title,
  coloredShadow,
  sectionWithBackgroundColor,
} from "assets/jss/nextjs-material-kit-pro";

const blogStyle = () => ({
  main,
  mainRaised,
  section,
  mlAuto,
  mrAuto,
  title,
  sectionWithBackgroundColor,
  floatRight,
  textCenter,
  cardTitle: {
    ...cardTitle,
    fontSize: "1.5rem",
  },
  coloredShadow,
  captionContainer: {
    ...captionContainer,
    left: "45%",
    top: "50%",
  },
  textOverlay: {
    ...textOverlay,
    "& p": {
      ...textCenter,
      fontSize: "2.8rem",
      color: whiteColor,
    },
    ...textCenter,
    color: whiteColor,
  },
  justifyContent: {
    WebkitBoxPack: "center !important",
    MsFlexPack: "center !important",
    justifyContent: "center !important",
  },
  cardCategory: {
    fontSize: "1rem !important",
    color: "#3DB49E",
    marginBottom: "0",
    marginTop: "10px",
    "& svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      top: "8px",
      lineHeight: "0",
    },
  },
  redes: {
    "& ul": {
      padding: 0,
    },
    "& a": {
      color: "#166F5E",
    },
    "& span": {
      color: "#166F5E",
      fontWeight: "700",
    },
    "& ul:not($socialButtons) li a": {
      color: "#111b2e",
      padding: "0.9375rem",
      fontWeight: "500",
      fontSize: "0.75rem",
      borderRadius: "3px",
      textDecoration: "none",
      position: "relative",
      display: "block",
    },
    "& small": {
      fontSize: "75%",
      color: "#111B2E",
    },
  },
  socialButtons: {
    "& li": {
      display: "inline-block",
    },
  },
});

export default blogStyle;
