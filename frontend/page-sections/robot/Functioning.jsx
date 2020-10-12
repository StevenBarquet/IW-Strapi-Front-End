// Dependencies
import getConfig from "next/config";
import { useQuery } from "@apollo/client";
import Carousel from "react-slick";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// context
import { useSettings } from "~/context/Settings";

// core components
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";
import RenderHTML from "~/components/HTML/RenderHTML";

// gql
import { ROBOT_FUNTIONING_QUERY } from "~/gql/queries/robot";

import robotStyles from "~/assets/jss/robotStyles";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const useStyles = makeStyles(robotStyles);

const Functioning = () => {
  const {
    defaultSettings: { language },
  } = useSettings();

  const { loading, error, data } = useQuery(ROBOT_FUNTIONING_QUERY);
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

  if (!data.robot) {
    return <span>¡Revisar CMS!</span>;
  }

  if (error) {
    return (
      <span>
        Error:
        {JSON.stringify(error)}
      </span>
    );
  }

  const {
    robot: { funtioning, header },
  } = data;

  return (
    <div id="section-funtioning" className={classes.section}>
      <div className={classes.captionContainerText}>
        <RenderHTML
          html={header[`title${language}`]}
          className={classes.textOverlay}
        />
      </div>
      <Carousel {...sliderSettings}>
        {funtioning.header.images.map((image) => (
          <div key={image.id}>
            <img
              src={`${apiUrl}${image.url}`}
              alt={image.alternativeText}
              className="slick-image"
            />
          </div>
        ))}
      </Carousel>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={9}>
          <h2 className={classes.title}>
            {funtioning.title[`sectionTitle${language}`]}
          </h2>
          <RenderHTML
            html={funtioning.introductoryText[`introductoryText${language}`]}
            className={classes.introductoryText}
          />
          <div className={classes.featuresSection} />
        </GridItem>
        <GridItem xs={12} sm={10} md={9}>
          <div className={classes.iframeContainer}>
            <iframe
              height="650"
              src={funtioning.urlYoutube}
              frameBorder="0"
              allow="encrypted-media"
              allowFullScreen=""
              title="Tesla"
            />
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default Functioning;
