import {
  container,
  section,
  sectionDark,
  mlAuto,
  mrAuto,
  title,
  description,
  cardTitle,
  blackColor,
  whiteColor,
  grayColor,
  hexToRgb,
} from "~/assets/jss/nextjs-material-kit-pro.js";

const pricingSection = {
  container,
  mlAuto,
  mrAuto,
  title,
  description,
  cardTitle: {
    ...cardTitle,
    fontSize: "2rem",
  },
  cardTitleWhite: {
    ...cardTitle,
  },
  sectionGray: {
    background: grayColor[14],
  },
  section: {
    ...section,
    ...sectionDark,
    position: "relative",
    "& $container": {
      position: "relative",
      zIndex: "2",
    },
    "& $description": {
      color: `rgba(${hexToRgb(whiteColor)}, 0.5)`,
    },
    "& $cardCategory": {
      color: `rgba(${hexToRgb(whiteColor)}, 0.76)`,
    },
    "& $title": {
      color: whiteColor,
      marginBottom: "10px",
    },
    "&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''",
      backgroundColor: `rgba(${hexToRgb(blackColor)}, 0.7)`,
    },
  },
  pricing: {
    padding: "80px 0",
  },
  textCenter: {
    textAlign: "center",
  },
  sectionSpace: {
    height: "70px",
    display: "block",
  },
  cardCategory: {
    ...description,
  },
  cardDescription: {
    ...description,
  },
  justifyContentCenter: {
    WebkitBoxPack: "center !important",
    MsFlexPack: "center !important",
    justifyContent: "center !important",
  },
  marginTop30: {
    marginTop: "30px",
  },
  margimTop4rem: {
    marginTop: "4rem",
  },
  marginBottom20: {
    marginBottom: "20px",
  },
  marginBottom30: {
    marginBottom: "30px",
  },
  text: {
    color: "red !important",
    "& ul li": {
      color: "red !important",
      borderColor: "rgba(255, 255, 255,0.3)",
    },
  },
  cardPosition: {
    position: "relative",
    left: "15px",
    bottom: "30px",
  },
  iframeContainer: {
    "@media (max-width: 830px)": {
      "& > iframe": {
        width: "100%",
        height: "100%",
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
};

export default pricingSection;
