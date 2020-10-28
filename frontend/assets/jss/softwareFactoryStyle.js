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
  positionRelative,
  captionTextContainer,
  sectionWithBackgroundColor,
} from "assets/jss/nextjs-material-kit-pro";

const softwareFactoryStyle = () => ({
  main,
  mainRaised,
  section,
  sectionWithBackgroundColor,
  textCenter,
  mrAuto,
  mlAuto,
  divider,
  positionRelative,
  captionContainer: {
    ...captionContainer,
    top: "45%",
    left: "15%",
  },
  textOverlay: {
    ...textOverlay,
    width: "372px",
  },
  swDescription: {
    ...textCenter,
    margin: "4rem 0rem",
    minHeight: "32px",
    color: "#383838",
    "& p": {
      fontSize: "1.8rem",
      color: "#383838",
    },
    "@media (max-width: 736px)": {
      "& p": {
        fontSize: "1.3rem",
        color: "#383838",
        minHeight: "32px",
      },
    },
  },
  factoryServicesCaption: {
    ...captionTextContainer,
    top: "52%",
    left: "65%",
    "@media (max-width: 1024px)": {
      top: "63%",
      left: "41%",
    },
    "@media (max-width: 736px)": {
      top: "62%",
      left: "24%",
      textAlign: "center",
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
    width: "462px",
  },
  marginTop6rem: {
    marginTop: "6rem",
    "@media (max-width: 1024px)": {
      marginTop: "3rem",
    },
  },
  imageBenefits: {
    width: "121px",
    height: "121px",
    "@media (max-width: 1024px)": {
      width: "110px",
      height: "110px",
    },
  },
});

export default softwareFactoryStyle;
