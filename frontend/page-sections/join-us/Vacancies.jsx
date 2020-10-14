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
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import Pagination from "components/Pagination/Pagination";

// gql
import { JOIN_US_VACANCIES_QUERY } from "gql/queries/join-us";

import joinUsStyle from "assets/jss/joinUsStyle";

const useStyles = makeStyles(joinUsStyle);

const JoinTeam = () => {
  const {
    defaultSettings: { language },
  } = useSettings();

  const { loading, error, data } = useQuery(JOIN_US_VACANCIES_QUERY, {
    variables: {
      where: { tags: { id_nin: ["5f5145f3955f97000dd62822"] } },
      limit: 4,
      sort: "createdAt:desc",
    },
  });
  const classes = useStyles();

  if (loading) {
    return null;
  }

//   if (!data.joinUs) {
//     return <span>¡Revisar CMS!</span>;
//   }

  if (error) {
    return (
      <span>
        Error:
        {JSON.stringify(error)}
      </span>
    );
  }

//   const {
//     joinUs: { joinTeam },
//   } = data;

  const tags = [
    { name: "Agosto", id: "1" },
    { name: "Desarrollo Full Stack", id: "2" },
  ];

  return (
    <div id="section-joinTeam" className={classes.section}>
      <GridContainer>
        <GridItem
          xs={12}
          sm={11}
          md={9}
          className={`${classes.marginAuto} ${classes.displayNone}`}
        >
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
              <p className={classes.lengthText}>
                {language !== "_en"
                  ? "Vacantes publicadas "
                  : "Posted vacancies "}
                {joinTeam.cardVacant.length}
              </p>
            </div>
          </div>
          <hr />
        </GridItem>
      </GridContainer>
      <GridContainer item xs={12} sm={12} md={9} className={classes.marginAuto}>
        {/* {joinTeam.cardVacant.map((item) => {
          return (
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={classes.marginAuto}
              key={item.id}
            >
              <Card>
                <CardBody>
                  <GridItem
                    xs={12}
                    sm={12}
                    md={12}
                    className={classes.tagsFlexEnd}
                  >
                    {item.tags.map((tag) => (
                      <Badge key={tag.id} color="primary">
                        <span className={classes.tag}>
                          {tag[`name${language}`]}
                        </span>
                      </Badge>
                    ))}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={8}>
                    <h3 className={classes.titleVacante}>
                      {item[`nameVancant${language}`]}
                    </h3>
                    <hr className={classes.dividerGreen} />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <p>
                      <strong>{language !== "_en" ? "Edad: " : "Age: "}</strong>
                      {item[`age${language}`]}
                    </p>
                    <p>
                      <strong>{language !== "_en" ? "Sexo: " : "Sex: "}</strong>
                      {item[`sex${language}`]}
                    </p>
                    <p className={classes.mlText}>
                      <strong>
                        {language !== "_en" ? "Escolaridad: " : "Scholarship: "}
                      </strong>
                      <br />
                      {item[`scholarship${language}`]}
                    </p>
                    <p className={classes.mbText}>
                      <strong>
                        {language !== "_en"
                          ? "Zona de trabajo: "
                          : "Work zone: "}
                      </strong>
                      <br />
                      <span className={classes.boldText}>
                        {item[`workZone${language}`]}
                      </span>
                    </p>
                    <p>
                      <strong>
                        {language !== "_en"
                          ? "Requisitos Específicos: "
                          : "Specific requirements:: "}
                      </strong>
                    </p>
                    <RenderHTML
                      html={item[`specificRequirements${language}`]}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={7}>
                    <div className={classes.dividerSmall} />
                    <p className={classes.contactText}>
                      {language !== "_en" ? "Contacto: " : "Contact: "}
                      {item.contact}
                    </p>
                  </GridItem>
                </CardBody>
              </Card>
            </GridItem>
          );
        })} */}
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={10}>
          <div className={classes.floatRight}>
            <Pagination
              pages={[
                {
                  text: "Previous",
                  onClick: () => {},
                },
                {
                  text: "Next",
                  onClick: () => {},
                },
              ]}
            />
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default JoinTeam;
