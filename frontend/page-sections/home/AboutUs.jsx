// Dependencies
import { useQuery } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "~/components/Grid/GridContainer";
import Button from "~/components/CustomButtons/Button";
import RenderHTML from "~/components/HTML/RenderHTML";
import SectionTitle from "~/components-sections/SectionTitle";

// context
import { useSettings } from "~/context/Settings";

// gql
import { HOME_ABOUT_US_QUERY } from "~/gql/queries/home";

// jss styles
import homeStyle from "~/assets/jss/homeStyle";

const useStyles = makeStyles(homeStyle);

const SectionAboutUs = () => {
  const {
    defaultSettings: { languaje },
  } = useSettings();
  const { loading, error, data } = useQuery(HOME_ABOUT_US_QUERY);
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
    home: { aboutUs },
  } = data;

  return (
    <div id="section-about" className={classes.section}>
      <GridContainer justify="center">
        <SectionTitle
          legend={aboutUs.legend[`sectionLegendTitle${languaje}`]}
          title={aboutUs.title[`sectionTitle${languaje}`]}
        >
          <>
            <RenderHTML
              html={aboutUs.introductoryText[`introductoryText${languaje}`]}
              className={classes.textCenter}
            />
            <Button
              onClick={(e) => e.preventDefault()}
              className={classes.floatRight}
              link
              round
            >
              {aboutUs.actionButton[`label${languaje}`]}
            </Button>
          </>
        </SectionTitle>
      </GridContainer>
    </div>
  );
};

export default SectionAboutUs;
