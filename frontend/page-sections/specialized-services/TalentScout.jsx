// Dependencies
import { useQuery } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import RenderHTML from "components/HTML/RenderHTML";
import CustomInput from "components/CustomInput/CustomInput";

// context
import { useSettings } from "context/Settings";

// gql
import { SPECIALIZED_SERVICES_TALENT_SCOUT_QUERY } from "gql/queries/specialized-services";

// jss styles
import homeStyle from "assets/jss/homeStyle";

const useStyles = makeStyles(homeStyle);

const SectionAboutUs = () => {
  const {
    defaultSettings: { language },
  } = useSettings();
  const { loading, error, data } = useQuery(
    SPECIALIZED_SERVICES_TALENT_SCOUT_QUERY
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

  if (!data.specializedService) {
    return <span>¡Revisar CMS!</span>;
  }

  const {
    specializedService: { talentScout },
  } = data;

  return (
    <div
      id="section-talent-scout"
      className={classes.sectionWithBackgroundColor}
    >
      <GridContainer justify="center">
        <GridItem md={4}>
          <h3>{talentScout[`talentScoutTitle${language}`]}</h3>
          <RenderHTML
            html={talentScout[`talentScoutIntroduction${language}`]}
          />
        </GridItem>
        <GridItem md={4}>
          <CustomInput />
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default SectionAboutUs;
