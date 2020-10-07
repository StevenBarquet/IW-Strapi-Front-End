import {
  container,
  title,
  cardTitle,
  description,
  mlAuto,
  mrAuto,
  section,
  sectionDark,
  coloredShadow,
  blackColor,
  whiteColor,
  hexToRgb,
} from "~/assets/jss/nextjs-material-kit-pro";

const teamsSection = {
  container,
  title,
  mlAuto,
  mrAuto,
  cardTitle,
  coloredShadow,
  description,
  descriptionWhite: {
    ...description,
  },
  textCenter: {
    textAlign: "center",
  },
  team: {
    padding: "10px 0",
    "& h5$description,& h5$descriptionWhite": {
      marginBottom: "80px",
    },
  },
  section: {
    ...sectionDark,
    ...section,
    position: "relative",
    "& $title": {
      color: whiteColor,
    },
    "& $descriptionWhite": {
      color: "rgba(" + hexToRgb(whiteColor) + ", 0.76)",
    },
    "& $container": {
      zIndex: "2",
      position: "relative",
    },
    "&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''",
      backgroundColor: "rgba(" + hexToRgb(blackColor) + ", 0.7)",
    },
  },
  justifyContent: {
    WebkitBoxPack: "center !important",
    MsFlexPack: "center !important",
    justifyContent: "center !important",
  },
  cardCategory: {
    marginTop: "10px",
  },
  btn: {
    marginTop: "0 !important",
  },
  card3: {
    textAlign: "left",
  },
  card5: {
    textAlign: "left",
    "& $cardTitle": {
      color: whiteColor,
    },
    "& $description": {
      color: whiteColor,
    },
  },
  redes: {
    "& ul": {
      padding: 0,
    },
    "& a": {
      color: "#3DB49E",
    },
    "& span": {
      color: "#3DB49E",
      fontWeight: "700",
    },
    "& ul:not($socialButtons) li a": {
      color: "#111b2e",
      padding: "0.9375rem",
      fontWeight: "500",
      fontSize: "0.75rem",
      borderRadius: "3px",
      textDecoration: "none",
      position: "relative",
      display: "block",
    },
    "& small": {
      fontSize: "75%",
      color: "#111B2E",
    },
    
  },
  socialButtons: {
    "& li": {
      display: "inline-block",
    },
  },
  icon: {
    top: "3px",
    width: "18px",
    height: "18px",
    position: "relative",
  },
};

export default teamsSection;
