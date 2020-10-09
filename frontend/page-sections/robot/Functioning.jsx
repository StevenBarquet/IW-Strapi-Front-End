// Dependencies
import getConfig from "next/config";
import { useQuery } from "@apollo/client";
import Carousel from "react-slick";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

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
    return <h1>Loading</h1>;
  }

  if (!data.robot.funtioning) {
    return <h1>¡Revisar CMS!</h1>;
  }

  if (error) {
    return (
      <h1>
        Error:
        {JSON.stringify(error)}
      </h1>
    );
  }

  const {
    robot: { funtioning, header },
  } = data;

  return (
    <div id="section-funtioning" className={classes.section}>
      <div className={classes.captionContainerText}>
        <RenderHTML html={header.title} className={classes.textOverlay} />
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
          <h2 className={classes.title}>{funtioning.title.sectionTitle}</h2>
          <RenderHTML
            html={funtioning.introductoryText.introductoryText}
            className={classes.introductoryText}
          />
          <div className={classes.sectionSpace} />
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
