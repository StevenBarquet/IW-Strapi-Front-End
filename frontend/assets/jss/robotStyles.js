import {
  main,
  mainRaised,
  section,
  subTitle,
  textCenter,
  blackcolor,
  hexToRgb,
  blackColor,
  title,
  cardTitle,
  centerImage,
  captionContainer,
  textOverlay,
  sectionWithBackgroundColor,
} from "assets/jss/nextjs-material-kit-pro";

const robotStyle = () => ({
  section,
  main,
  mainRaised,
  centerImage,
  sectionWithBackgroundColor,
  textCenter,
  title: {
    ...title,
    "@media (max-width: 736px)": {
      fontSize: "2.500rem",
    },
  },
  captionContainer: {
    ...captionContainer,
    left: "22%",
    top: "53%",
  },
  textOverlay: {
    ...textOverlay,
    width: "650px",
    "& p": {
      fontSize: "3rem",
      fontWeight: "700",
      clear: "both",
      display: "block",
      color: "#7B7575",
    },
    "@media (max-width: 736px)": {
      width: "450px",
      "& h1": {
        fontSize: "2rem",
      },
    },
  },
  iframeContainer: {
    "@media (max-width: 1024px)": {
      "& > iframe": {
        width: "100%",
        height: "300px !important",
      },
    },
    "& > iframe": {
      width: "100%",
      boxShadow: `0 16px 38px -12px rgba(${hexToRgb(
        blackColor
      )}, 0.56), 0 4px 25px 0px rgba(${hexToRgb(
        blackColor
      )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb(blackColor)}, 0.2)`,
    },
  },
  imgFeature: {
    "@media (max-width: 1024px)": {
      width: "37%",
      top: "-34px",
      left: "68px",
    },
    "@media (max-width: 736px)": {
      width: "37%",
      top: "-36px",
      left: "96px",
    },
    width: "20%",
    position: "absolute",
    top: "-71px",
    left: "194px",
  },
  cardFeatures: {
    marginTop: "4rem",
    marginLeft: "auto",
    marginRight: "auto",
  },
  mt8rem: {
    marginTop: "8rem",
  },
  mt4rem: {
    marginTop: "4rem",
  },
  sectionSinPB: {
    ...section,
    paddingBottom: "0px !important",
  },
  subtitle: {
    ...subTitle,
    color: "#21646D !important",
    marginBottom: "0px !important",
    "@media (max-width: 736px)": {
      fontSize: "1rem",
    },
  },
  descriptionText: {
    marginTop: "0px !important",
    textDecoration: "none",
    textAlign: "center",
    fontWeight: "700",
    marginBottom: "25px",
    minHeight: "32px",
    fontFamily: `"Raleway", "Times New Roman", serif`,
    "& h3": {
      marginTop: "0px",
    },
    "@media (max-width: 736px)": {
      "& h3": {
        fontSize: "1rem !important",
      },
      minHeight: "10px",
      marginTop: "1.400rem !important",
    },
  },
  featuresSection: {
    margin: "50px 0px",
  },
  cardTitle: {
    ...cardTitle,
    fontSize: "1.500rem",
    color: `${blackcolor}!important`,
  },
  cardPosition: {
    position: "relative",
    left: "15px",
    bottom: "30px",
  },
  backgroundContainer: {
    background: blackcolor,
    padding: "1rem",
    borderRadius: "1rem",
    width: "90%",
    right: "-2px",
  },
  textBackground: {
    color: "#F09F54",
    fontWeight: "bold",
    fontSize: "2rem",
  },
  textDescription6rem: {
    marginTop: "4rem",
    marginBottom: "6rem",
  },
  margimTop7rem: {
    marginTop: "7rem",
  },
  carousel: {
    "@media (min-width: 1024px)": {
      display: "none",
    },
  },
  listaInfoArea: {
    "@media (max-width: 1024px)": {
      display: "none",
    },
  },
  autoMargin: {
    "@media (max-width: 1024px)": {
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
});

export default robotStyle;
