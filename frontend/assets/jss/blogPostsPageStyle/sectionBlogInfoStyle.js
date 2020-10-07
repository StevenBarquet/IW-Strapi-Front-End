import { grayColor, cardTitle } from "~/assets/jss/nextjs-material-kit-pro.js";
const sectionBlogInfoStyle = {
  section: {
    paddingTop: "30px",
    paddingBottom: "0",
    backgroundPosition: "50%",
    backgroundSize: "cover",
    padding: "70px 0",
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
  description: {
    fontSize: "1rem",
    color: grayColor[0],
  },
  pullRight: {
    marginTop: "25px",
    float: "right",
  },
  date: {
    color: "#21646D",
    fontWeight: 600,
    position: "relative",
    top: "12px",
    textTransform: "uppercase",
  },
  titlePrincipal: {
    color: "#21646D",
    fontSize: "2rem !important",
    marginTop: "30px",
    minHeight: "32px",
    fontFamily: "Raleway, Times New Roman, serif",
    fontWeight: 600,
    marginBottom: "0px",
    textDecoration: "none",
  },
  sectionPrincial: {
    marginTop: "9rem",
  },
  btnBoletin: {
    position: "absolute",
    top: "10.580rem",
    right: "1rem",
  },
};

export default sectionBlogInfoStyle;
