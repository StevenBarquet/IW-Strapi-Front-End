// Dependencies
import getConfig from "next/config";
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/core components
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";

// core-components
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardFooter from "components/Card/CardFooter";
import Button from "components/CustomButtons/Button";

// context
import { useSettings } from "context/Settings";

// jss styles
import rotatingCardStyle from "assets/jss/components/rotatingCardStyle";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const useStyles = makeStyles(rotatingCardStyle);

const PartnerCard = ({ card: { front, back } }) => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const [activeRotate, setActiveRotate] = React.useState("");
  const classes = useStyles();

  const addStylesForRotatingCards = () => {
    const rotatingCards = document.getElementsByClassName(classes.cardRotate);
    for (let i = 0; i < rotatingCards.length; i += 1) {
      const rotatingCard = rotatingCards[i];
      const cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
      const cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      const rotatingWrapper = rotatingCard.parentElement;
      const cardWidth = rotatingCard.parentElement.offsetWidth;
      const cardHeight = rotatingCard.children[0].children[0].offsetHeight;
      rotatingWrapper.style.height = `${cardHeight}px`;
      rotatingWrapper.style["margin-bottom"] = `${30}px`;
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      cardFront.style.height = `${cardHeight + 35}px`;
      cardFront.style.width = `${cardWidth}px`;
      cardBack.style.height = `${cardHeight + 35}px`;
      cardBack.style.width = `${cardWidth}px`;
    }
  };

  React.useEffect(() => {
    if (window) {
      window.addEventListener("resize", addStylesForRotatingCards);
    }
    addStylesForRotatingCards();
    return function cleanup() {
      if (window) {
        window.removeEventListener("resize", addStylesForRotatingCards);
      }
    };
  });

  const CardBackList = () =>
    back.backCardListItems.map((backCardListItem) => (
      <div key={backCardListItem.id}>
        <Icon>{backCardListItem.materialIcon}</Icon>
        <p>{backCardListItem[`description${language}`]}</p>
      </div>
    ));

  return (
    <GridItem xs={12} sm={10} md={6} lg={4}>
      <div
        className={`${classes.rotatingCardContainer} ${classes.manualRotate} ${activeRotate}`}
      >
        <Card className={classes.cardRotate}>
          <div className={classes.front}>
            <CardBody className={classes.cardBodyRotate}>
              <legend className={classes.title}>
                {front[`frontCardTitle${language}`]}
              </legend>
              <img
                src={`${apiUrl}${front.brandImage.url}`}
                alt="Partner Card"
                style={{ maxWidth: "100%", display: "block", margin: "auto" }}
              />
              <div className={classes.cardBodyContent}>
                <span>{front[`partnerType${language}`]}</span>
                <p>{front[`allianceTime${language}`]}</p>
              </div>
            </CardBody>
            <CardFooter>
              <div style={{ width: "100%" }}>
                <Button
                  link
                  className={classes.floatRight}
                  onClick={() => setActiveRotate(classes.activateRotate)}
                >
                  {front[`buttonLabel${language}`]}
                </Button>
              </div>
            </CardFooter>
          </div>
          <div className={classes.back}>
            <CardBody className={classes.cardBodyRotate}>
              <div className={classes.backContainer}>
                <h2>{back[`backCardTitle${language}`]}</h2>
                <div className={classes.backSolutionsList}>
                  <CardBackList />
                </div>
              </div>
            </CardBody>
            <CardFooter>
              <div className={classes.backFooterContainer}>
                <IconButton
                  color="inherit"
                  aria-label={`rotating card ${front.frontCardTitle}`}
                  className={classes.floatRight}
                  onClick={() => setActiveRotate("")}
                >
                  <Icon>replay</Icon>
                </IconButton>
              </div>
            </CardFooter>
          </div>
        </Card>
      </div>
    </GridItem>
  );
};

PartnerCard.defaultProps = {
  card: {
    front: {},
    back: {},
  },
};

PartnerCard.propTypes = {
  card: PropTypes.shape({
    front: PropTypes.shape({
      frontCardTitle: PropTypes.string,
      brandImage: PropTypes.shape({
        url: PropTypes.string,
      }),
      partnerType: PropTypes.string,
      allianceTime: PropTypes.string,
    }),
    back: PropTypes.shape({
      backCardTitle: PropTypes.string,
      backCardListItems: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          materialIcon: PropTypes.string,
          description: PropTypes.string,
        })
      ),
    }),
  }),
};

export default PartnerCard;
