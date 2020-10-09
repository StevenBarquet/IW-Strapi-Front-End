// Dependencies
import getConfig from "next/config";
import { useQuery } from "@apollo/client";
import Carousel from "react-slick";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import TrendingUpIcon from "@material-ui/icons/TrendingUp";

// core-components
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";
import InfoArea from "~/components/InfoArea/InfoArea";
import RenderHTML from "~/components/HTML/RenderHTML";
import SectionTitle from "~/components-sections/SectionTitle";

// gql
import { ROBOT_BENEFITS_QUERY } from "~/gql/queries/robot";

import robotStyles from "~/assets/jss/robotStyles";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const useStyles = makeStyles(robotStyles);

const Benefits = () => {
  const { loading, error, data } = useQuery(ROBOT_BENEFITS_QUERY);
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
    return <h1>Loading</h1>;
  }

  if (error) {
    return (
      <h1>
        Error:
        {JSON.stringify(error)}
      </h1>
    );
  }

  if (!data.robot.benefits) {
    return <h1>¡Revisar CMS!</h1>;
  }

  const {
    robot: { benefits },
  } = data;

  return (
    <div id="section-benefits" className={classes.section}>
      <GridContainer justify="center">
        <SectionTitle
          icon={benefits.sectionIcon}
          legend={benefits.legend.sectionLegendTitle}
          title={benefits.title.sectionTitle}
        >
          <GridContainer
            className={`${classes.mt8rem} ${classes.listaInfoArea}`}
          >
            {benefits.InfoArea.map((item) => {
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
                    alt={item.alternativeText}
                  />
                  <InfoArea
                    vertical
                    icon={TrendingUpIcon}
                    title={item.title}
                    description={<RenderHTML html={item.descriptionTexts} />}
                    iconColor="warning"
                  />
                </GridItem>
              );
            })}
          </GridContainer>
          <GridContainer className={classes.carousel}>
            <GridItem xs={12} sm={12} md={9}>
              <Carousel {...sliderSettings}>
                {benefits.InfoArea.map((item) => {
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
                        alt={item.alternativeText}
                      />
                      <InfoArea
                        vertical
                        icon={TrendingUpIcon}
                        title={item.title}
                        description={
                          <RenderHTML html={item.descriptionTexts} />
                        }
                        iconColor="warning"
                      />
                    </GridItem>
                  );
                })}
              </Carousel>
            </GridItem>
          </GridContainer>
        </SectionTitle>
      </GridContainer>
    </div>
  );
};

export default Benefits;
