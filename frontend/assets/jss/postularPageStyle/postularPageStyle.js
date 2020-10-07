import {
  container,
  title,
  main,
  mainRaised,
} from "~/assets/jss/nextjs-material-kit-pro";

const blogPostsPageStyle = {
  container: {
    ...container,
    zIndex: "2",
    position: "relative",
  },
  textCenter: {
    textAlign: "center",
  },
  subTitle: {
    color: "#111B2E",
    fontSize: "3rem",
  },
  title: {
    ...title,
    marginTop: "1px !important",
    color: "#111B2E",
    fontSize: "3.675rem",
  },
  main: {
    ...main,
    ...mainRaised,
  },
};

export default blogPostsPageStyle;
