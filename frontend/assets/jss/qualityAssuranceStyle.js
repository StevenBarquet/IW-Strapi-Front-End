import {
  main,
  mainRaised,
  section,
  captionContainer,
  textOverlay,
  textCenter,
  mrAuto,
  mlAuto,
  divider,
  captionTextContainer,
  positionRelative,
  sectionWithBackgroundColor,
} from "assets/jss/nextjs-material-kit-pro";

const qualityAssuranceStyle = () => ({
  main,
  mainRaised,
  section,
  sectionWithBackgroundColor,
  textCenter,
  mrAuto,
  mlAuto,
  divider,
  positionRelative,
  captionContainer: {
    ...captionContainer,
    top: "45%",
    left: "15%",
  },
  textOverlay: {
    ...textOverlay,
    width: "376px",
  },
  qaOfferCaption: {
    ...captionTextContainer,
    top: "53%",
    left: "65%",
    "@media (max-width: 1024px)": {
      top: "68%",
      left: "41%",
    },
    "@media (max-width: 736px)": {
      top: "68%",
      left: "24%",
      textAlign: "center",
    },
  },
  successStoriesCaption: {
    ...captionTextContainer,
    top: "49%",
    left: "62%",
    "@media (max-width: 1024px)": {
      top: "95%",
      left: "40%",
    },
    "@media (max-width: 828px)": {
      top: "57%",
      left: "31%",
      textAlign: "center",
    },
  },
  successStoriesOverlay: {
    "& h1": {
      fontSize: "2rem",
    },
    "@media (max-width: 1025px)": {
      width: "600px",
    },
    "@media (max-width: 736px)": {
      width: "300px",
    },
  },
});

export default qualityAssuranceStyle;
