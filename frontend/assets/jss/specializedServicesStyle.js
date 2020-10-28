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
  positionRelative,
  captionTextContainer,
} from "assets/jss/nextjs-material-kit-pro";

const robotStyle = () => ({
  section,
  main,
  textCenter,
  mainRaised,
  captionContainer,
  title,
  divider,
  positionRelative,
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
    marginTop: "3rem",
    "& p": {
      fontSize: "1.8rem",
    },
    "@media (max-width: 736px)": {
      "& p": {
        fontSize: "1.4rem",
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
    ...captionTextContainer,
    "@media (max-width: 1024px)": {
      top: "62%",
      left: "27%",
    },
    "@media (max-width: 736px)": {
      top: "58%",
      left: "29%",
      textAlign: "center",
    },
  },
  textOverlayLeft: {
    ...textOverlay,
    width: "700px",
    "& h1": {
      margin: "0px",
    },
    "@media (max-width: 1024px)": {
      width: "500px",
      "& p": {
        fontSize: "1.8rem",
      },
      "& h1": {
        fontSize: "29px",
      },
    },
    "@media (max-width: 736px)": {
      width: "350px",
    },
  },
  textOverlayRight: {
    width: "550px",
    "& p": {
      marginLeft: "7rem",
      fontSize: "1.5rem",
    },
    "@media (max-width: 1024px)": {
      width: "340px",
      "& p": {
        marginLeft: "3rem",
        fontSize: "1rem",
      },
    },
    "@media (max-width: 736px)": {
      width: "340px",
      "& p": {
        marginLeft: "0.5rem",
      },
    },
  },
});

export default robotStyle;
