import {
  grayColor,
  container,
  cardTitle,
} from "~/assets/jss/nextjs-material-kit-pro.js";

import imagesStyles from "~/assets/jss/nextjs-material-kit-pro/imagesStyles.js";

const sectionTextStyle = {
  container,
  title: {
    fontSize: "1.8rem !important",
    color: "black !important",
    textAlign: "center",
    paddingBottom: "1.7rem",
  },
  section: {
    paddingBottom: "0",
    backgroundPosition: "50%",
    backgroundSize: "cover",
    padding: "70px 0",
    "& p": {
      fontSize: "1.188rem",
      lineHeight: "1.5em",
      color: grayColor[15],
      marginBottom: "15xpx",
    },
  },
  blogTags: {
    marginTop: "8px",
  },
  tag: {
    color: "white !important",
  },
  buttons: {
    marginTop: "0",
    marginBottom: "0",
    float: "right !important",
  },
  card: {
    marginTop: "0",
    textAlign: "left",
  },
  cardTitle,
  cardsubTitle: {
    ...cardTitle,
    fontSize: "2rem !important",
    color: "#21646D !important",
  },
  description: {
    fontSize: "1rem",
    color: grayColor[0],
  },
  pullRight: {
    marginTop: "25px",
    float: "right",
  },
  constents: {
    textDecoration: "none",
    // textAlign: "center",
    color: "#21646D",
  },
  quoteText: {
    fontSize: "1.5rem !important",
  },
  ...imagesStyles,
};

export default sectionTextStyle;
