// Dependencies
import getConfig from "next/config";
import { useQuery } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "~/components/Grid/GridContainer";
import SectionTitle from "~/components-sections/SectionTitle";

// jss styles
import homeStyle from "~/assets/jss/homeStyle";

// gql
import { HOME_THEY_TRUST } from "~/gql/queries/home";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const useStyles = makeStyles(homeStyle);

const TheyTrust = () => {
  const { loading, error, data } = useQuery(HOME_THEY_TRUST);
  const classes = useStyles();

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
          legend={theyTrust.legend.sectionLegendTitle}
          title={theyTrust.title.sectionTitle}
          subTitle={theyTrust.subTitle.sectionSubTitle}
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
