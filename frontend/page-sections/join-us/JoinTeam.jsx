// Dependencies
import { useQuery } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// context
import { useSettings } from "context/Settings";

// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import RenderHTML from "components/HTML/RenderHTML";
import Badge from "components/Badge/Badge";

// gql
import { JOIN_US_TEAM_QUERY } from "gql/queries/join-us";

import joinUsStyle from "assets/jss/joinUsStyle";

const useStyles = makeStyles(joinUsStyle);

const JoinTeam = () => {
  const {
    defaultSettings: { language },
  } = useSettings();

  const { loading, error, data } = useQuery(JOIN_US_TEAM_QUERY);
  const classes = useStyles();

  if (loading) {
    return null;
  }

  if (!data.joinUs) {
    return <span>¡Revisar CMS!</span>;
  }

  if (error) {
    return (
      <span>
        Error:
        {JSON.stringify(error)}
      </span>
    );
  }

  const {
    joinUs: { joinTeam },
  } = data;

  const tags = [
    { name: "Agosto", id: "1" },
    { name: "Desarrollo Full Stack", id: "2" },
  ];

  return (
    <div id="section-joinTeam" className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={9} className={classes.textCenter}>
          <h2 className={classes.title}>
            {joinTeam.title[`sectionTitle${language}`]}
          </h2>
          <RenderHTML
            html={joinTeam.introductoryText[`introductoryText${language}`]}
            className={classes.introductoryText}
          />
          <div className={classes.featuresSection} />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={9} md={9} className={classes.marginAuto}>
          <div className={classes.tagsFlex}>
            <div className={classes.tagsJustify}>
              Tags:{" "}
              {tags.map((tag) => (
                <Badge key={tag.id} color="primary">
                  <span className={classes.tag}>{tag.name}</span>
                </Badge>
              ))}
            </div>
            <div>
              <p className={classes.lengthText}>Vacantes publicadas 15</p>
            </div>
          </div>
          <hr />
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default JoinTeam;
