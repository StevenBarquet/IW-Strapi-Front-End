import {
  main,
  mainRaised,
  section,
  subTitle,
  textCenter,
  orangeColor,
  hexToRgb,
  blackColor,
  title,
  cardTitle,
  centerImage,
  sectionWithBackgroundColor,
} from "~/assets/jss/nextjs-material-kit-pro";

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
    "@media (max-width: 736px)": {
      display: "none",
    },
    left: "18%",
    transform: "translate(-25%, -50%)",
    top: "63%",
    position: "absolute",
    zIndex: "1",
  },
  captionContainerText: {
    "@media (max-width: 736px)": {
      position: "static",
      marginLeft: "1.509rem",
      transform: "none",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    display: "none",
  },
  textOverlay: {
    "@media (max-width: 736px)": {
      width: "300px",
      "& h1": {
        fontSize: "1.6rem",
        "& span": {
          fontSize: "2rem",
        },
      },
    },
    "@media (max-width: 1024px)": {
      width: "300px",
      "& h1": {
        fontSize: "1.6rem",
        "& span": {
          fontSize: "2rem",
        },
      },
    },
    color: orangeColor,
    width: "650px",
    "& h1": {
      fontWeight: "700",
      "& span": {
        fontWeight: "100",
        clear: "both",
        display: "block",
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
    "@media (max-width: 736px)": {
      width: "37%",
      top: "-36px",
      left: "96px",
    },
    "@media (max-width: 1024px)": {
      width: "37%",
      top: "-34px",
      left: "68px",
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
    color: "#F09F54 !important",
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
  cardTitle: {
    ...cardTitle,
    fontSize: "1.500rem",
    color: "#F09F54 !important",
  },
  cardPosition: {
    position: "relative",
    left: "15px",
    bottom: "30px",
  },
  backgroundContainer: {
    background: "#F09F54",
    padding: "1rem",
    borderRadius: "1rem",
    width: "90%",
    right: "-2px",
  },
  textBackground: {
    color: "#FFFF",
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
});

export default robotStyle;
