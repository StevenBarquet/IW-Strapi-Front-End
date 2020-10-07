import {
  container,
  title,
  main,
  mlAuto,
  mrAuto,
  orangeColor,
  whiteColor,
  mainRaised,
} from "~/assets/jss/nextjs-material-kit-pro";

const robotPageStyles = {
  mlAuto,
  mrAuto,
  container: {
    ...container,
    zIndex: "2",
    position: "relative",
  },
  textCenter: {
    textAlign: "center",
  },
  subTitle: {
    color: whiteColor,
    fontSize: "3rem",
  },
  title: {
    ...title,
    color: orangeColor,
    fontSize: "3.675rem",
  },
  titlesub: {
    ...title,
  },
  main: {
    ...main,
    ...mainRaised,
  },
  captionContainer: {
    "@media (max-width: 576px)": {
      position: "static",
      marginLeft: "1.509rem",
      transform: "none",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    left: "18%",
    transform: "translate(-25%, -50%)",
    top: "63%",
    position: "absolute",
    zIndex: "1",
  },
  textOverlay: {
    "@media (max-width: 830px)": {
      "& h1": {
        fontSize: "2rem",
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
};

export default robotPageStyles;
