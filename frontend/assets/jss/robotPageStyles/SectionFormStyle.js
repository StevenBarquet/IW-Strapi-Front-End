import {
  container,
  title,
  orangeColor,
} from "~/assets/jss/nextjs-material-kit-pro.js";

const SectionFormStyle = () => ({
  title: {
    ...title,
    fontSize: "2.874rem",
  },
  subtitle: {
    color: orangeColor,
  },
  mtAuto: {
    marginTop: "5rem",
  },
  background: {
    margin: "0",
    backgroundColor: "#F4F3ED",
    paddingTop: "4rem",
    paddingBottom: "4rem",
  },
  titleContainer: {
    "@media (max-width: 576px)": {
      width: "auto",
    },
    width: "300px",
  },
  divider: {
    marginTop: "-1.2rem",
    borderTop: "10px solid #00C7B1",
  },
  experienceDescription: {
    marginTop: "2rem",
  },
  learnMoreButton: {
    float: "right",
  },
  container: {
    ...container,
    zIndex: "2",
  },
  textCenter: {
    textAlign: "center",
  },
});

export default SectionFormStyle;
