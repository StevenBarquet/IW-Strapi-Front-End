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

const softwareFactoryStyle = () => ({
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
  textOverlay: {
    ...textOverlay,
    width: "372px",
  },
  swDescription: {
    ...textCenter,
    margin: "4rem 0rem",
    "& p": {
      fontSize: "1.8rem",
      color: "#383838",
    },
  },
  factoryServicesCaption: {
    ...captionTextContainer,
    top: "32%",
    left: "65%",
    "@media (max-width: 1024px)": {
      top: "36%",
      left: "41%",
    },
    "@media (max-width: 736px)": {
      top: "229%",
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
