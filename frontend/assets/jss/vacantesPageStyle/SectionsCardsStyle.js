import {
  title,
  mlAuto,
  mrAuto,
  dangerColor,
  primaryColor,
  greenColor,
} from "~/assets/jss/nextjs-material-kit-pro.js";

const headerVacantes = {
  featuresSection: {
    padding: "80px 0px",
  },
  textCenter: {
    textAlign: "center",
  },
  mtAuto: {
    marginTop: "5rem",
  },
  imgFeature: {
    "@media (max-width: 830px)": {
      width: "37%",
      position: "absolute",
      top: "-34px",
      left: "101px",
    },
    width: "37%",
    position: "absolute",
    top: "-71px",
    left: "158px",
  },
  textDescription: {
    fontSize: "1.474rem",
  },
  textcolor: {
    marginLeft: "0.287rem",
    color: primaryColor[0],
  },
  title: {
    ...title,
    fontSize: "3rem",
  },
  textRed: {
    marginTop: "6rem",
    fontSize: "1.474rem",
    color: dangerColor[0],
  },
  blogTags: {
    marginTop: "8px",
  },
  tag: {
    color: "white !important",
  },
  vacantesText: {
    color: "#21646D",
    fontWeight: 600,
    position: "relative",
    top: "12px",
    textTransform: "uppercase",
  },
  tagsFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  titleContainer: {
    color: greenColor[0],
    "@media (max-width: 576px)": {
      width: "auto",
    },
    width: "420px",
  },
  boldText: {
    fontWeight: "bold",
    color: primaryColor[0],
  },
  mbText: {
    marginBottom: "2rem",
  },
  dividerSmall: {
    marginTop: "1.2rem",
    marginBottom: "0.500rem",
    borderTop: "3px solid #3DB49E",
  },
  divider: {
    marginTop: "-1.2rem",
    borderTop: "10px solid rgba(17,27,46,0.6)",
  },
  activateRotate: {},
  manualRotate: {},
  cardRotate: {
    transition: "all 0.8s cubic-bezier(0.34, 1.45, 0.7, 1)",
    transformStyle: "preserve-3d",
    position: "relative",
    background: "transparent",
  },
  cardBodyRotate: {
    WebkitBoxPack: "center",
    MsFlexPack: "center",
    justifyContent: "center",
    MsFlexLinePack: "center",
    alignContent: "center",
    display: "flex",
    WebkitBoxOrient: "vertical",
    WebkitBoxDirection: "normal",
    flexDirection: "column",
  },
  cardBodyContent: {
    padding: "2rem 0",
    textAlign: "center",
  },
  backContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& h3": {
      fontWeight: "700",
      marginBottom: "15px",
    },
  },
  backSolutionsList: {
    "& div": {
      display: "flex",
      overflow: "hidden",
      paddingBottom: "6px",
      maxWidth: 350,
      "& div": {
        paddingLeft: "16px",
        "& > p": {
          color: "#fff",
        },
      },
      "& svg": {
        paddingRight: "5px",
        color: "#fff",
      },
    },
  },
  backFooterContainer: {
    width: "100%",
    "& button": {
      display: "block",
      margin: "auto",
    },
  },
  floatRight: {
    float: "right",
  },
  justifyContentEnd: {
    "& > ul": {
      justifyContent: "center !important",
    },
    paddingTop: "4rem",
  },
  btonLeer: {
    background: "#D9373E",
  },
  mlAuto,
  mrAuto,
};

export default headerVacantes;
