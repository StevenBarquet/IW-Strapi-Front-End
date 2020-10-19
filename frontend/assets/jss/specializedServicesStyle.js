import {
  main,
  mainRaised,
  section,
  title,
  sectionWithBackgroundColor,
  captionContainer,
  textOverlay,
  textCenter,
  divider,
} from "assets/jss/nextjs-material-kit-pro";

const robotStyle = () => ({
  section,
  main,
  textCenter,
  mainRaised,
  captionContainer,
  title,
  divider,
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
  introductoryText: {
    ...textCenter,
    "& p": {
      fontSize: "2rem",
    },
    "@media (max-width: 736px)": {
      "& p": {
        fontSize: "1rem",
      },
    },
  },
  margin8rem: {
    marginTop: "6rem",
    "@media (max-width: 736px)": {
      marginTop: "3rem",
    },
  },
  recruitBestLeftCaptionContainer: {
    ...captionContainer,
    top: "67%",
    left: "17%",
    "@media (max-width: 1024px)": {
      top: "73%",
      left: "21%",
    },
  },
  recruitBestRightCaptionContainer: {
    ...captionContainer,
    top: "67%",
    left: "60%",
    "@media (max-width: 1024px)": {
      top: "73%",
      marginTop: "1.3rem",
    },
  },
  textOverlayLeft: {
    ...textOverlay,
    width: "500px",
    "@media (max-width: 1024px)": {
      "& p": {
        fontSize: "1.8rem",
      },
    },
    "@media (max-width: 736px)": {
      width: "400px",
    },
  },
  textOverlayRight: {
    "& p": {
      marginTop: "3rem",
      fontSize: "1.5rem",
    },
    "@media (max-width: 1024px)": {
      "& p": {
        fontSize: "1rem",
      },
    },
  },
});

export default robotStyle;
