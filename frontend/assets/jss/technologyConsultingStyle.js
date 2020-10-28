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
  subTitle,
  positionRelative,
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
  subTitle: {
    ...subTitle,
    fontSize: "1.8rem",
    fontFamily: `"Raleway", "Times New Roman", serif`,

    "@media (max-width: 736px)": {
      fontSize: "1.5rem",
      fontFamily: `"Raleway", "Times New Roman", serif`,
    },
  },
  positionRelative,
  captionContainer: {
    ...captionContainer,
    top: "45%",
    left: "15%",
  },
  textOverlay: {
    ...textOverlay,
    width: "368px",
  },
  consultingOptionsCaption: {
    ...captionTextContainer,
    top: "50%",
    left: "65%",
    "@media (max-width: 1024px)": {
      top: "58%",
      left: "41%",
    },
    "@media (max-width: 736px)": {
      top: "54%",
      left: "24%",
      textAlign: "center",
    },
  },
  successStoriesCaption: {
    ...captionTextContainer,
    top: "51%",
    left: "65%",
    "@media (max-width: 1024px)": {
      top: "78%",
      left: "41%",
    },
    "@media (max-width: 736px)": {
      top: "61%",
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
