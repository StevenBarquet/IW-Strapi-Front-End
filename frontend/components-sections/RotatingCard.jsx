// Dependencies
import getConfig from "next/config";
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/core components
import Icon from "@material-ui/core/Icon";

// core-components
import GridItem from "~/components/Grid/GridItem";
import Card from "~/components/Card/Card";
import CardBody from "~/components/Card/CardBody";
import CardFooter from "~/components/Card/CardFooter";
import Button from "~/components/CustomButtons/Button";
import RenderHTML from "~/components/HTML/RenderHTML";

import rotatingCardStyles from "~/assets/jss/homeSectionStyles/components-section/rotatingCardStyles";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const useStyles = makeStyles(rotatingCardStyles);

const PartnerCard = ({ cardContent: { cardFront, cardBack } }) => {
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
    cardBack.brandList.map((listItem) => (
      <div key={listItem._id}>
        <Icon>{listItem.listItemIcon}</Icon>
        <RenderHTML html={listItem.listIconDescription} />
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
              <legend className={classes.title}>{cardFront.cardTitle}</legend>
              <img
                src={`${apiUrl}${cardFront.brandLogo.url}`}
                alt="Partner Card"
                style={{ maxWidth: "100%", display: "block", margin: "auto" }}
              />
              <div className={classes.cardBodyContent}>
                <span>{cardFront.brandClient}</span>
                <p>{cardFront.brandDescription}</p>
              </div>
            </CardBody>
            <CardFooter>
              <div style={{ width: "100%" }}>
                <Button
                  link
                  className={classes.floatRight}
                  onClick={() => setActiveRotate(classes.activateRotate)}
                >
                  más...
                </Button>
              </div>
            </CardFooter>
          </div>
          <div className={classes.back}>
            <CardBody className={classes.cardBodyRotate}>
              <div className={classes.backContainer}>
                <h3>{cardBack.cardTitle}</h3>
                <div className={classes.backSolutionsList}>
                  <CardBackList />
                </div>
              </div>
            </CardBody>
            <CardFooter>
              <div className={classes.backFooterContainer}>
                <Button
                  color="primary"
                  round
                  onClick={() => setActiveRotate("")}
                >
                  {cardBack.cardActioner}
                </Button>
              </div>
            </CardFooter>
          </div>
        </Card>
      </div>
    </GridItem>
  );
};

PartnerCard.defaultProps = {
  cardContent: {
    cardFront: {
      cardTitle: "",
      brandClient: "",
      brandDescription: "",
    },
    cardBack: {
      cardTitle: "",
      brandList: [],
      cardActioner: "",
    },
  },
};

PartnerCard.propTypes = {
  cardContent: PropTypes.shape({
    cardFront: PropTypes.shape({
      cardTitle: PropTypes.string,
      brandClient: PropTypes.string,
      brandDescription: PropTypes.string,
    }),
    cardBack: PropTypes.shape({
      cardTitle: PropTypes.string,
      brandList: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string,
          listItemIcon: PropTypes.string,
          listIconDescription: PropTypes.string,
        })
      ),
      cardActioner: PropTypes.string,
    }),
  }),
};

export default PartnerCard;
