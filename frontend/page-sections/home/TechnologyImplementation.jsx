// Dependencies
import getConfig from "next/config";
import { useQuery } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core-components
import SectionTitle from "components-sections/SectionTitle";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

// context
import { useSettings } from "context/Settings";

// gql
import { HOME_TECHNOLOGY_IMPLEMENTATION_QUERY } from "gql/queries/home";

// jss styles
import homeStyle from "assets/jss/homeStyle";

const useStyles = makeStyles(homeStyle);
const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const TechnologyImplementation = () => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const { loading, error, data } = useQuery(
    HOME_TECHNOLOGY_IMPLEMENTATION_QUERY
  );
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
    home: { technologyImplementation },
  } = data;

  return (
    <div id="section-partners" className={classes.section}>
      <GridContainer justify="center">
        <SectionTitle
          title={technologyImplementation.title[`sectionTitle${language}`]}
          subTitle={
            technologyImplementation.subtitle[`sectionSubTitle${language}`]
          }
        >
          <GridContainer
            justify="center"
            className={`${classes.section} ${classes.margin5Rem}`}
          >
            <GridItem xs={6} sm={6} md={5}>
              <img
                src={`${apiUrl}${technologyImplementation.scrum.url}`}
                alt={technologyImplementation.scrum.alternativeText}
              />
              <GridItem xs={12} sm={8} md={3}>
                <h1 className={classes.technologyTitle}>
                  {
                    technologyImplementation.titleIconScrum[
                      `sectionTitle${language}`
                    ]
                  }
                </h1>
              </GridItem>
            </GridItem>
            <GridItem xs={10} sm={6} md={2}>
              <img
                src={`${apiUrl}${technologyImplementation.devOps.url}`}
                alt={technologyImplementation.scrum.alternativeText}
              />
              <GridItem xs={12} sm={12} md={12} style={{ marginTop: "1.9rem" }}>
                <h1 className={classes.technologyTitle}>
                  {
                    technologyImplementation.titleIconDevOps[
                      `sectionTitle${language}`
                    ]
                  }
                </h1>
              </GridItem>
            </GridItem>
          </GridContainer>
        </SectionTitle>
      </GridContainer>
    </div>
  );
};

export default TechnologyImplementation;
