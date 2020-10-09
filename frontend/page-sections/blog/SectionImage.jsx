/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import getConfig from "next/config";
import { useQuery } from "@apollo/client";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";
import Card from "~/components/Card/Card";
import CardAvatar from "~/components/Card/CardAvatar";
import CardBody from "~/components/Card/CardBody";
import CardFooter from "~/components/Card/CardFooter";

// gql
import { TEAMS_QUERY } from "~/gql/queries/blog";

import teamsStyle from "~/assets/jss/blogPostsPageStyle/teamsStyle";

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

const useStyles = makeStyles(teamsStyle);

const SectionTeams = () => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(TEAMS_QUERY);

  if (loading) {
    return null;
  }

  if (error) {
    return (
      <h1>
        Error:
        {JSON.stringify(error)}
      </h1>
    );
  }

  const { teams } = data;

  return (
    <div className="cd-section">
      <div className={classes.team}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}
            >
              <h2 className={classes.title}>Nuestros Expertos</h2>
            </GridItem>
          </GridContainer>
          <GridContainer>
            {teams &&
              teams.map((team) => {
                return (
                  <GridItem key={team._id} xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            src={`${apiUrl}${team.image.url}`}
                            alt={team.url}
                            className={classes.img}
                          />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>
                          {team.name} {team.lastName}
                        </h4>
                        <p className={classes.description}>
                          {team.description}
                        </p>
                      </CardBody>
                      <CardFooter profile className={classes.justifyContent}>
                        <div className={classes.redes}>
                          <ul className={classes.socialButtons}>
                            <li>
                              <span
                                className="fa-stack"
                                style={{ verticalAlign: "top" }}
                              >
                                <a href={team.linkedin} target="blank">
                                  <i
                                    className="far fa-circle fa-stack-2x"
                                    aria-hidden="true"
                                  />
                                  <i
                                    className="fab fa-linkedin-in fa-stack-1x"
                                    aria-hidden="true"
                                  />
                                </a>
                              </span>
                            </li>
                            <li>
                              <span
                                className="fa-stack"
                                style={{ verticalAlign: "top" }}
                              >
                                <a href={team.facebook} target="blank">
                                  <i
                                    className="far fa-circle fa-stack-2x"
                                    aria-hidden="true"
                                  />
                                  <i
                                    className="fab fa-facebook-f fa-stack-1x"
                                    aria-hidden="true"
                                  />
                                </a>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </CardFooter>
                    </Card>
                  </GridItem>
                );
              })}
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

export default SectionTeams;
