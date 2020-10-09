// Dependencies
import { useQuery } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core-components
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";
import RenderHTML from "~/components/HTML/RenderHTML";
import SectionTitle from "~/components-sections/SectionTitle";
import Card from "~/components/Card/Card";
import CardBody from "~/components/Card/CardBody";
import CardHeader from "~/components/Card/CardHeader";
import Button from "~/components/CustomButtons/Button";

// gql
import { ROBOT_PLANSFORYOU_QUERY } from "~/gql/queries/robot";

import robotStyles from "~/assets/jss/robotStyles";

const useStyles = makeStyles(robotStyles);

const PlansForYou = () => {
  const { loading, error, data } = useQuery(ROBOT_PLANSFORYOU_QUERY);
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

  const {
    robot: { plansForYou },
  } = data;

  return (
    <div id="section-plansForYou" className={classes.section}>
      <GridContainer justify="center">
        <SectionTitle
          icon={plansForYou.sectionIcon}
          legend={plansForYou.legend.sectionLegendTitle}
          title={plansForYou.title.sectionTitle}
        >
          <GridContainer className={classes.margimTop7rem}>
            {plansForYou.cardsPlans.map((item, index) => {
              return (
                <GridItem xs={12} sm={12} md={6} lg={4} key={item.id}>
                  {index !== 1 && <br />}
                  <Card pricing className={classes.margimTop4rem}>
                    <CardHeader className={classes.cardPosition} image plain>
                      <div className={classes.backgroundContainer}>
                        <p className={classes.textBackground}>
                          {item.sectionTitle}
                        </p>
                      </div>
                    </CardHeader>
                    <CardBody pricing plain>
                      <h1 className={classes.cardTitle}>
                        {item.sectionSubTitle}
                      </h1>
                      <RenderHTML
                        className={classes.textDescription6rem}
                        html={item.description}
                      />
                    </CardBody>
                  </Card>
                </GridItem>
              );
            })}
          </GridContainer>
          <br />
          <GridContainer justify="center">
            <Button color="behance" round>
              {plansForYou.actionButton.label}
            </Button>
          </GridContainer>
        </SectionTitle>
      </GridContainer>
    </div>
  );
};

export default PlansForYou;
