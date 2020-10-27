// Dependencies
import getConfig from "next/config";
import { useQuery } from "@apollo/client";
import Carousel from "react-slick";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import TrendingUpIcon from "@material-ui/icons/TrendingUp";

// context
import { useSettings } from "context/Settings";

// core-components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import InfoArea from "components/InfoArea/InfoArea";
import RenderHTML from "components/HTML/RenderHTML";
import SectionTitle from "components-sections/SectionTitle";

// gql
import { TECHNOLOGY_CONSULTING_OFFERGUATANTES_QUERY } from "gql/queries/technology-consulting";

import robotStyles from "assets/jss/robotStyles";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const useStyles = makeStyles(robotStyles);

const OfferGuarantees = () => {
  const {
    defaultSettings: { language },
  } = useSettings();

  const { loading, error, data } = useQuery(TECHNOLOGY_CONSULTING_OFFERGUATANTES_QUERY);
  const classes = useStyles();

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading) {
    return null;
  }

  if (error) {
    return (
      <span>
        Error:
        {JSON.stringify(error)}
      </span>
    );
  }

  if (!data.technologyConsulting) {
    return <span>¡Revisar CMS!</span>;
  }

  const {
    technologyConsulting: { offerGuarantees },
  } = data;

  const renderComponent = () => {
    return offerGuarantees.infoArea.map((item) => {
      return (
        <GridItem
          xs={12}
          sm={10}
          md={4}
          key={item.id}
          className={classes.cardFeatures}
        >
          <img
            className={classes.imgFeature}
            src={`${apiUrl}${item.sectionIcon.url}`}
            alt={item.sectionIcon.alternativeText}
          />
          <InfoArea
            vertical
            icon={TrendingUpIcon}
            title={item[`title${language}`]}
            description={
              <RenderHTML html={item[`descriptionTexts${language}`]} />
            }
            iconColor="warning"
          />
        </GridItem>
      );
    });
  };

  return (
    <div id="section-offer-guarantees" className={classes.section}>
      <GridContainer justify="center">
        <SectionTitle
          icon={offerGuarantees.sectionIcon}
          title={offerGuarantees.title[`sectionTitle${language}`]}
        >
          <>
            <GridContainer
              className={`${classes.mt8rem} ${classes.listaInfoArea}`}
            >
              {renderComponent()}
            </GridContainer>
            <GridContainer className={classes.carousel}>
              <GridItem xs={12} sm={12} md={9}>
                <Carousel {...sliderSettings}>{renderComponent()}</Carousel>
              </GridItem>
            </GridContainer>
          </>
        </SectionTitle>
      </GridContainer>
    </div>
  );
};

export default OfferGuarantees;
