import {
  main,
  mainRaised,
  section,
  sectionWithBackgroundColor,
  captionContainer,
  textOverlay,
} from "assets/jss/nextjs-material-kit-pro";

const robotStyle = () => ({
  section,
  main,
  mainRaised,
  captionContainer,
  textOverlay: {
    ...textOverlay,
    width: "550px",
  },
  blockedImage: {
    "@media (max-width: 576px)": {
      backgroundRepeat: "no-repeat",
      height: "auto",
      position: "static",
      display: "block",
    },
    "& div": {
      "@media (max-width: 576px)": {
        // backgroundColor: "red",
        width: "auto",
        marginTop: "150px",
        display: "block",
      },
    },
  },
  sectionWithBackgroundColor,
});

export default robotStyle;
