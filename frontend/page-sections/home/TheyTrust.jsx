// Dependencies
import getConfig from "next/config";
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "~/components/Grid/GridContainer";
import SectionTitle from "~/components-sections/SectionTitle";

import homeSectionStyles from "~/assets/jss/homeSectionStyles";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const useStyles = makeStyles(homeSectionStyles);

const TheyTrust = ({ sectionTheyTrust: { header, brandSlider } }) => {
  const classes = useStyles();

  const LogoSlider = () =>
    brandSlider.map((svgLogo) => {
      return (
        <img
          key={svgLogo._id}
          src={`${apiUrl}${svgLogo.sliderImage.url}`}
          alt={svgLogo.alt}
        />
      );
    });

  return (
    <div id="section-they-trust" className={classes.section}>
      <GridContainer justify="center">
        <SectionTitle
          icon={{ url: header.titleIcon.url, alt: "They trust section" }}
          title={header.title}
          subTitle={header.subTitle}
          introduction={header.introduction}
        >
          <div className="wrapperCompanySlider">
            <div className="brandSlider">
              <div className="logoSlider">
                <LogoSlider />
              </div>
              <div className="logoSlider">
                <LogoSlider />
              </div>
            </div>
          </div>
        </SectionTitle>
      </GridContainer>
    </div>
  );
};

TheyTrust.defaultProps = {
  sectionTheyTrust: {
    header: {
      titleIcon: {
        url: "",
      },
      title: "",
      subTitle: "",
      introduction: "",
    },
    brandSlider: [],
  },
};

TheyTrust.propTypes = {
  sectionTheyTrust: PropTypes.shape({
    header: PropTypes.shape({
      titleIcon: PropTypes.shape({
        url: PropTypes.string,
      }),
      title: PropTypes.string,
      subTitle: PropTypes.string,
      introduction: PropTypes.string,
    }),
    brandSlider: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string,
        alt: PropTypes.string,
        sliderImage: PropTypes.shape({
          url: PropTypes.string,
        }),
      })
    ),
  }),
};

export default TheyTrust;
