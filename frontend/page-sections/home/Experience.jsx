// Dependencies
import Link from "next/link";
import { useQuery } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

// core-components
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";
import RenderHTML from "~/components/HTML/RenderHTML";
import Button from "~/components/CustomButtons/Button";

// gql
import { HOME_OUR_EXPERIENCE_QUERY } from "~/gql/queries/home";

import homeStyle from "~/assets/jss/homeStyle";

const useStyles = makeStyles(homeStyle);

const Experience = () => {
  const { loading, error, data } = useQuery(HOME_OUR_EXPERIENCE_QUERY);
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
    home: { ourExperience },
  } = data;

  const BusinessLinesList = () =>
    ourExperience.businessListItems.map((listItem) => (
      <li key={listItem.id}>
        <div>
          <Icon>{listItem.materialIcon}</Icon>
          <Link href={listItem.path}>
            <a>{listItem.description}</a>
          </Link>
        </div>
      </li>
    ));

  return (
    <div id="section-experience">
      <GridContainer
        justify="center"
        alignItems="center"
        className={classes.sectionWithBackgroundColor}
      >
        <GridItem item xs={10} sm={8} md={4} lg={5}>
          <div className={classes.underlinedTitleContainer}>
            <h1>{ourExperience.underlinedTitle}</h1>
            <hr className={classes.divider} />
          </div>
          <RenderHTML
            html={ourExperience.introductoryText}
            className={classes.experienceDescription}
          />
        </GridItem>
        <GridItem xs={10} sm={8} md={4} lg={5}>
          <div className={classes.businessListContainer}>
            <div>
              <span className={classes.businessLinesTitle}>
                {ourExperience.businessListTitle}
              </span>
              <ul className={classes.businessFeed}>
                <BusinessLinesList />
              </ul>
            </div>
          </div>
          <Button
            onClick={(e) => e.preventDefault()}
            className={classes.floatRight}
            link
            round
          >
            {ourExperience.actionButton.label}
          </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default Experience;
