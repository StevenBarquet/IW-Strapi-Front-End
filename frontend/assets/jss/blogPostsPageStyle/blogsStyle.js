import {
  container,
  cardTitle,
  coloredShadow,
  description,
  mlAuto,
  mrAuto,
  grayColor,
} from "~/assets/jss/nextjs-material-kit-pro.js";

const blogsSection = {
  container,
  coloredShadow: {
    ...coloredShadow,
  },
  cardTitle,
  mlAuto,
  mrAuto,
  description,
  blog: {
    padding: "50px 0",
  },
  title: {
    color: "#21646D",
    fontSize: "2rem !important",
    marginTop: "30px",
    minHeight: "32px",
    fontFamily: "Raleway, Times New Roman, serif",
    fontWeight: 600,
    marginBottom: "0px",
    textDecoration: "none",
  },
  cardCategory: {
    fontSize: "1rem !important",
    color: "#3DB49E",
    marginBottom: "0",
    marginTop: "10px",
    "& svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      top: "8px",
      lineHeight: "0",
    },
  },
  description1: {
    ...description,
    lineHeight: "1.313rem",
  },
  author: {
    "& a": {
      color: grayColor[1],
      textDecoration: "none",
    },
  },
  card: {
    marginBottom: "5px",
    marginTop: "5px !important",
  },
  card4: {
    marginBottom: "60px",
    textAlign: "center",
  },
};

export default blogsSection;
