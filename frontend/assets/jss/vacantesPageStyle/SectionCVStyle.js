const SectionCVStyle = (theme) => ({
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
    width: "420px",
  },
  title: {
    textDecoration: "underline",
  },
  divider: {
    marginTop: "-1.2rem",
    borderTop: "10px solid #00C7B1",
  },
  vacantesContainer: {
    [theme.breakpoints.down("md")]: {
      marginTop: "2rem",
      alignItems: "initial",
      justifyContent: "initial",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  vacantesFeed: {
    marginTop: "1rem",
    "& div": {
      display: "flex",
      overflow: "hidden",
      paddingBottom: "10px",
      maxWidth: 300,
      "& div": {
        paddingLeft: "10px",
        "& p": {
          fontSize: "1.125rem",
          color: "#21646D",
        },
      },
      "& p:hover": {
        textDecoration: "underline",
        cursor: "pointer",
      },
      "& span": {
        paddingRight: "5px",
        fontSize: "1.5rem",
        color: "#3DB49E",
      },
    },
  },
  learnMoreButton: {
    float: "right",
  },
  mtbtnCV: {
    marginTop: "3rem",
  },
  btonSearch: {
    position: "absolute",
    top: "10px",
    right: "12px",
  },
  textColor: {
    color: "#21646D",
    marginTop: "1rem",
    alignItems: "center",
    fontWeight: "600",
  },
});

export default SectionCVStyle;
