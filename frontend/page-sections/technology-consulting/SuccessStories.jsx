// Dependencies
import getConfig from "next/config";
import { useQuery } from "@apollo/client";
import Carousel from "react-slick";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

// context
import { useSettings } from "context/Settings";

// components
import RenderHTML from "components/HTML/RenderHTML";
import GridItem from "components/Grid/GridItem";

// gql
import { TECHNOLOGY_CONSULTING_SUCCESSSTORIES_QUERY } from "gql/queries/technology-consulting";

// jss styles
import technologyConsultingStyle from "assets/jss/technologyConsultingStyle";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const useStyles = makeStyles(technologyConsultingStyle);

const SuccessStories = () => {
  const {
    defaultSettings: { language },
  } = useSettings();

  const { loading, error, data } = useQuery(
    TECHNOLOGY_CONSULTING_SUCCESSSTORIES_QUERY
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


  if (!data.technologyConsulting) {
    return <span>¡Revisar CMS!</span>;
  }

  const {
    technologyConsulting: { successStories },
  } = data;

  return (
    <header id="success-stories" className={classes.carouselContainer}>
      <Hidden only={["sm", "md", "lg", "xl"]}>
        <Carousel {...sliderSettings}>
          {successStories.successStoriesCarousel.small_images.map((image) => (
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
          {successStories.successStoriesCarousel.medium_images.map((image) => (
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
          {successStories.successStoriesCarousel.large_images.map((image) => (
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
      <div className={classes.successStoriesCaption}>
        <GridItem xs={12} sm={10} md={8}>
          <RenderHTML
            html={successStories.successStoriesCarousel[`caption${language}`]}
            className={classes.successStoriesOverlay}
          />
        </GridItem>
      </div>
    </header>
  );
};

export default SuccessStories;
