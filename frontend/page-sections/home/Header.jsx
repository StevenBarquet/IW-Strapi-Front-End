// Dependencies
import getConfig from "next/config";
import { useQuery } from "@apollo/client";
import Carousel from "react-slick";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// components
import RenderHTML from "~/components/HTML/RenderHTML";

// gql
import { HOME_HEADER_QUERY } from "~/gql/queries/home";

import homeStyle from "~/assets/jss/homeStyle";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const useStyles = makeStyles(homeStyle);

const Header = () => {
  const { loading, error, data } = useQuery(HOME_HEADER_QUERY);
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

  if (error) {
    return (
      <h1>
        Error:
        {JSON.stringify(error)}
      </h1>
    );
  }

  if (!data.home) {
    return <h1>¡Revisar CMS!</h1>;
  }

  const {
    home: { header },
  } = data;

  return (
    <header id="header" className={classes.carouselContainer}>
      <Carousel {...sliderSettings}>
        {header.images.map((image) => (
          <div key={image._id}>
            <img
              src={`${apiUrl}${image.url}`}
              alt={image.alternativeText}
              className="slick-image"
            />
          </div>
        ))}
      </Carousel>
      <div className={classes.captionContainer}>
        <RenderHTML html={header.caption} className={classes.textOverlay} />
      </div>
    </header>
  );
};

export default Header;
