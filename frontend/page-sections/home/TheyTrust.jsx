// Dependencies
import getConfig from "next/config";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import Carousel from "react-slick";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer";
import SectionTitle from "components-sections/SectionTitle";

// context
import { useSettings } from "context/Settings";

// gql
import { HOME_THEY_TRUST } from "gql/queries/home";

// jss styles
import homeStyle from "assets/jss/homeStyle";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const useStyles = makeStyles(homeStyle);

const TheyTrust = () => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const { loading, error, data } = useQuery(HOME_THEY_TRUST);
  const classes = useStyles();

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4800,
    autoplaySpeed: 4800,
    cssEase: "linear",
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

  if (!data.home) {
    return <span>¡Revisar CMS!</span>;
  }

  const {
    home: { theyTrust },
  } = data;

  return (
    <div id="section-they-trust" className={classes.section}>
      <GridContainer justify="center">
        <SectionTitle
          icon={theyTrust.sectionIcon}
          legend={theyTrust.legend[`sectionLegendTitle${language}`]}
          title={theyTrust.title[`sectionTitle${language}`]}
          subTitle={theyTrust.subTitle[`sectionSubTitle${language}`]}
        >
          <div>
            <Carousel {...sliderSettings}>
              {theyTrust.brandSlider.map((brandImage) => {
                return (
                  <Image
                    key={brandImage.id}
                    src={`${apiUrl}${brandImage.url}`}
                    alt={brandImage.alternativeText}
                    // layout="responsive"
                    width={brandImage.width}
                    height={brandImage.height}
                  />
                );
              })}
            </Carousel>
          </div>
        </SectionTitle>
      </GridContainer>
    </div>
  );
};

export default TheyTrust;
