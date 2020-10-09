// Dependencies
import getConfig from "next/config";
import { useQuery } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "~/components/Grid/GridContainer";
import SectionTitle from "~/components-sections/SectionTitle";

// context
import { useSettings } from "~/context/Settings";

// gql
import { HOME_THEY_TRUST } from "~/gql/queries/home";

// jss styles
import homeStyle from "~/assets/jss/homeStyle";

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

  const LogoSlider = () =>
    theyTrust.brandSlider.map((brandImage) => {
      return (
        <img
          key={brandImage.id}
          src={`${apiUrl}${brandImage.url}`}
          alt={brandImage.alternativeText}
        />
      );
    });

  return (
    <div id="section-they-trust" className={classes.section}>
      <GridContainer justify="center">
        <SectionTitle
          icon={theyTrust.sectionIcon}
          legend={theyTrust.legend[`sectionLegendTitle${language}`]}
          title={theyTrust.title[`sectionTitle${language}`]}
          subTitle={theyTrust.subTitle[`sectionSubTitle${language}`]}
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

export default TheyTrust;
