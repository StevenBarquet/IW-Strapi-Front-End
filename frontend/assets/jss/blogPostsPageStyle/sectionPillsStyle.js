import {
  whiteColor,
  hexToRgb,
  cardTitle,
} from "~/assets/jss/nextjs-material-kit-pro.js";

import tooltipsStyle from "~/assets/jss/nextjs-material-kit-pro/tooltipsStyle.js";

const sectionPillsStyle = {
  ...tooltipsStyle,
  section: {
    backgroundPosition: "50%",
    backgroundSize: "cover",
    padding: "70px 0",
  },
  textCenter: {
    textAlign: "center",
  },
  category: {
    color: `rgba(${hexToRgb(whiteColor)}, 0.7) !important`,
    marginTop: "10px",
  },
  cardTitle: {
    ...cardTitle,
    color: `${whiteColor}  !important`,
  },
  icons: {
    width: "1.1rem",
    height: "1.1rem",
    position: "relative",
    display: "inline-block",
    top: "0",
    marginTop: "-1em",
    marginBottom: "-1em",
    marginRight: "4px",
    verticalAlign: "middle",
  },
  tabSpace: {
    padding: "20px 0 50px",
  },
  btonCategory: {
    color: "#FFF",
    boxShadow:
      " 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(61, 180, 158, 0.4)",
    backgroundColor: "#3DB49E !important",
    borderRadius: "2rem !important",
    marginLeft: "2rem !important",
  },
  btonCategorySelect: {
    color: "#FFF",
    boxShadow:
      " 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(61, 180, 158, 0.4)",
    backgroundColor: "#999 !important",
    borderRadius: "2rem !important",
    marginLeft: "2rem !important",
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
};

export default sectionPillsStyle;
