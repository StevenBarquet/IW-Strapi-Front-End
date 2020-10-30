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
import { QUALITY_QA_OFFERGUATANTES_QUERY } from "gql/queries/quality-assurance";

import robotStyles from "assets/jss/robotStyles";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const useStyles = makeStyles(robotStyles);

const QAofferGuarantees = () => {
  const {
    defaultSettings: { language },
  } = useSettings();

  const { loading, error, data } = useQuery(QUALITY_QA_OFFERGUATANTES_QUERY);
  const classes = useStyles();

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    lazyLoad: "ondemand",
    adaptiveHeight: false,
    speed: 1700,
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

  if (!data.qualityAssurance) {
    return <span>¡Revisar CMS!</span>;
  }

  const {
    qualityAssurance: { offerGuaranteesQA },
  } = data;

  const renderComponent = () => {
    return offerGuaranteesQA.infoArea.map((item) => {
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
    <div id="section-QAofferGuarantees" className={classes.section}>
      <GridContainer justify="center">
        <SectionTitle
          icon={offerGuaranteesQA.sectionIcon}
          title={offerGuaranteesQA.title[`sectionTitle${language}`]}
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

export default QAofferGuarantees;
