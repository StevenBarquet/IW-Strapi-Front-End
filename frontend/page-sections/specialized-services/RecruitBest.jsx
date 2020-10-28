// Dependencies
import { useQuery } from "@apollo/client";
import getConfig from "next/config";
import Carousel from "react-slick";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import RenderHTML from "components/HTML/RenderHTML";
import SectionTitle from "components-sections/SectionTitle";

// context
import { useSettings } from "context/Settings";

// gql
import { SPECIALIZED_SERVICES_RECRUITBEST_QUERY } from "gql/queries/specialized-services";

// jss styles
import specializedServicesStyle from "assets/jss/specializedServicesStyle";

const useStyles = makeStyles(specializedServicesStyle);

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const RecruitBest = () => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const { loading, error, data } = useQuery(
    SPECIALIZED_SERVICES_RECRUITBEST_QUERY
  );
  const classes = useStyles();

  const sliderSettings = {
    autoplay: true,
    dots: true,
    lazyLoad: "ondemand",
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
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

  if (!data.specializedService) {
    return <span>¡Revisar CMS!</span>;
  }

  const {
    specializedService: { recruitBest },
  } = data;

  return (
    <div id="section-recruit-Best" className={classes.section}>
      <GridContainer justify="center">
        <SectionTitle title={recruitBest.title[`sectionTitle${language}`]}>
          <>
            <RenderHTML
              html={recruitBest.introductoryText[`introductoryText${language}`]}
              className={classes.introductoryText}
            />
          </>
        </SectionTitle>
      </GridContainer>
      <div className={classes.margin8rem} />
      <div className={classes.positionRelative}>
        <Hidden only={["sm", "md", "lg", "xl"]}>
          <Carousel {...sliderSettings}>
            {recruitBest.carousel.small_images.map((image) => (
              <div key={image.id}>
                <img
                  src={`${apiUrl}${image.url}`}
                  alt={image.alternativeText}
                  className="slick-image"
                />
              </div>
            ))}
          </Carousel>
        </Hidden>
        <Hidden only={["xs", "md", "lg", "xl"]}>
          <Carousel {...sliderSettings}>
            {recruitBest.carousel.medium_images.map((image) => (
              <div key={image.id}>
                <img
                  src={`${apiUrl}${image.url}`}
                  alt={image.alternativeText}
                  className="slick-image"
                />
              </div>
            ))}
          </Carousel>
        </Hidden>
        <Hidden only={["xs", "sm"]}>
          <Carousel {...sliderSettings}>
            {recruitBest.carousel.large_images.map((image) => (
              <div key={image.id}>
                <img
                  src={`${apiUrl}${image.url}`}
                  alt={image.alternativeText}
                  className="slick-image"
                />
              </div>
            ))}
          </Carousel>
        </Hidden>
        <div className={classes.recruitBestLeftCaptionContainer}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={5} lg={6}>
              <RenderHTML
                html={recruitBest.carousel[`caption${language}`]}
                className={classes.textOverlayLeft}
              />
              <br />
              <GridItem xs={12} sm={11} md={5} lg={8}>
                <div className={classes.divider} />
              </GridItem>
            </GridItem>
            <GridItem xs={12} sm={6} md={5} lg={4}>
              <RenderHTML
                html={
                  recruitBest.introductionTextCarousel[
                    `introductoryText${language}`
                  ]
                }
                className={classes.textOverlayRight}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

export default RecruitBest;
