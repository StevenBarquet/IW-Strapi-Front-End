// Dependencies
import getConfig from "next/config";
import { useQuery } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core-components
import GridContainer from "components/Grid/GridContainer";
import SectionTitle from "components-sections/SectionTitle";
import GridItem from "components/Grid/GridItem";
import RenderHTML from "components/HTML/RenderHTML";

// context
import { useSettings } from "context/Settings";

// gql
import { SW_FACTORY_BENEFITS_QUERY } from "gql/queries/software-factory";

// jss styles
import softwareFactoryStyle from "assets/jss/softwareFactoryStyle";

const useStyles = makeStyles(softwareFactoryStyle);

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const Benefits = () => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const { loading, error, data } = useQuery(SW_FACTORY_BENEFITS_QUERY);
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

  if (!data.softwareFactory) {
    return <span>¡Revisar CMS!</span>;
  }

  const {
    softwareFactory: { benefits },
  } = data;

  return (
    <div id="section-benefits" className={classes.section}>
      <GridContainer justify="center">
        <SectionTitle
          icon={benefits.sectionIcon}
          title={benefits.title[`sectionTitle${language}`]}
        >
          <>
            <GridContainer justify="center">
              {benefits.sectionImages.map((image) => (
                <GridItem
                  xs={4}
                  sm={1}
                  md={1}
                  style={{ margin: "2rem" }}
                  key={image.id}
                >
                  <img
                    src={`${apiUrl}${image.url}`}
                    alt={image.alternativeText}
                    className={classes.imageBenefits}
                  />
                </GridItem>
              ))}
            </GridContainer>
            <RenderHTML
              html={benefits.introductoryText[`introductoryText${language}`]}
              className={classes.swDescription}
            />
          </>
        </SectionTitle>
      </GridContainer>
    </div>
  );
};

export default Benefits;
