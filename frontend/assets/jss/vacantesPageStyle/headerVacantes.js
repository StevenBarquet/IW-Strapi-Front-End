import {
  title,
  mlAuto,
  mrAuto,
  dangerColor,
  primaryColor,
} from "~/assets/jss/nextjs-material-kit-pro.js";

const headerVacantes = {
  textCenter: {
    textAlign: "center",
  },
  mtAuto: {
    marginTop: "5rem",
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
  mlAuto,
  mrAuto,
};

export default headerVacantes;
