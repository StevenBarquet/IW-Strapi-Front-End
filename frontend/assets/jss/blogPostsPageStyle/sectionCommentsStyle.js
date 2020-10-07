import { grayColor, title } from "~/assets/jss/nextjs-material-kit-pro.js";

import tooltipsStyle from "~/assets/jss/nextjs-material-kit-pro/tooltipsStyle.js";

const sectionCommentsStyle = {
  ...tooltipsStyle,
  section: {
    backgroundposition: "50%",
    backgroundSize: "cover",
    padding: "70px 0",
  },
  title: {
    ...title,
    marginBottom: "30px",
    textAlign: "center",
  },
  footerButtons: {
    float: "right",
  },
  footerIcons: {
    width: "1.1rem",
    height: "1.1rem",
    position: "relative",
    display: "inline-block",
    top: "0",
    marginTop: "-1em",
    marginBottom: "-1em",
    marginRight: "3px",
    verticalAlign: "middle",
  },
  color555: {
    "&,& *": {
      color: `${grayColor[15]} !important`,
    },
  },
  linkedin: {
    backgroundColor: " #0073b1!important",
    border: "0!important",
    borderRadius: "4px!important",
    boxSizing: "borderBox!important",
    color: "#fff!important",
    cursor: "pointer!important",
    display: "inlineBlock!important",
    fontFamily:
      "-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif!important",
    fontWeight: " 600!important",
    overflow: " hidden!important",
    outlineWidth: "2px!important",
    position: "relative!important",
    textAlign: "center!important",
    textDecoration: "none!important",
    verticalAlign: "middle!important",
    whiteSpace: "nowrap!important",
    marginTop: "4px",
    marginLeft: "9px",
  },
};

export default sectionCommentsStyle;
