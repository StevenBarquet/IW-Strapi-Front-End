import {
  main,
  mainRaised,
  section,
  captionContainer,
  textOverlay,
  textCenter,
  mrAuto,
  mlAuto,
  divider,
  captionTextContainer,
  sectionWithBackgroundColor,
} from "assets/jss/nextjs-material-kit-pro";

const qualityAssuranceStyle = () => ({
  main,
  mainRaised,
  section,
  sectionWithBackgroundColor,
  textCenter,
  mrAuto,
  mlAuto,
  divider,
  captionContainer: {
    ...captionContainer,
    top: "45%",
    left: "15%",
  },
  textOverlay,
  qaOfferCaption: {
    ...captionTextContainer,
    top: "33%",
    left: "65%",
    "@media (max-width: 1024px)": {
      top: "45%",
      left: "41%",
    },
    "@media (max-width: 736px)": {
      top: "260%",
      left: "24%",
      textAlign: "center",
    },
  },
  successStoriesCaption: {
    ...captionTextContainer,
    top: "86%",
    left: "62%",
    "@media (max-width: 1024px)": {
      top: "91%",
      left: "40%",
    },
    "@media (max-width: 736px)": {
      top: "422%",
      left: "31%",
      textAlign: "center",
    },
  },
  successStoriesOverlay: {
    "& h1": {
      fontSize: "2rem",
    },
    "@media (max-width: 1025px)": {
      width: "600px",
    },
    "@media (max-width: 736px)": {
      width: "300px",
    },
  },
});

export default qualityAssuranceStyle;
