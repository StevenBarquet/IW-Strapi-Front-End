import {
  main,
  mainRaised,
  section,
  captionContainer,
  textOverlay,
  floatRight,
  textCenter,
  mrAuto,
  mlAuto,
  divider,
  captionTextContainer,
  sectionWithBackgroundColor,
} from "assets/jss/nextjs-material-kit-pro";

const technologyConsultingStyle = () => ({
  main,
  mainRaised,
  section,
  sectionWithBackgroundColor,
  floatRight,
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
  consultingOptionsCaption: {
    ...captionTextContainer,
    top: "63%",
    left: "65%",
    "@media (max-width: 1024px)": {
      top: "68%",
      left: "41%",
    },
    "@media (max-width: 736px)": {
      top: "430%",
      left: "24%",
      textAlign: "center",
    },
  },
  successStoriesCaption: {
    ...captionTextContainer,
    top: "88%",
    "@media (max-width: 1024px)": {
      top: "93%",
      left: "41%",
    },
    "@media (max-width: 736px)": {
      top: "535%",
      left: "24%",
      textAlign: "center",
    },
  },
  successStoriesOverlay: {
    "@media (max-width: 736px)": {
      width: "390px",
    },
  },
});

export default technologyConsultingStyle;
