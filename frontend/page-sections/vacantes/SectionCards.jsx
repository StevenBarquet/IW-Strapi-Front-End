/* eslint-disable react/jsx-one-expression-per-line */
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core-components
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";
import Card from "~/components/Card/Card";
import CardBody from "~/components/Card/CardBody";
import CardFooter from "~/components/Card/CardFooter";
import Button from "~/components/CustomButtons/Button";
import Pagination from "~/components/Pagination/Pagination";

import SectionsCardsStyle from "~/assets/jss/vacantesPageStyle/SectionsCardsStyle";

const useStyles = makeStyles(SectionsCardsStyle);

const SectionCards = () => {
  const classes = useStyles();

  const arrayVacantes = [
    {
      id: 1,
      title: "Desarrollador Front End",
      Edad: "Indistinto",
      Sexo: "Indistinto",
      Escolaridad: "Ing. En Sistemas, Computación, Informática o afín.",
      ZonaTrabajo: "Zona Sur CDMX",
      RequisitosEspecíficos:
        "Amplia experiencia en desarrollo frontend principalmente con React, Angular, CSS, SASS, LESS, STYLUS, GIT, Jquery, Pruebas unitarias.",
      Contacto: "slopez@interware.com.mx",
    },
    {
      id: 2,
      title: "Desarrollador Front End",
      Edad: "Indistinto",
      Sexo: "Indistinto",
      Escolaridad: "Ing. En Sistemas, Computación, Informática o afín.",
      ZonaTrabajo: "Zona Sur CDMX",
      RequisitosEspecíficos:
        "Amplia experiencia en desarrollo frontend principalmente con React, Angular, CSS, SASS, LESS, STYLUS, GIT, Jquery, Pruebas unitarias.",
      Contacto: "slopez@interware.com.mx",
    },
    {
      id: 3,
      title: "Desarrollador Front End",
      Edad: "Indistinto",
      Sexo: "Indistinto",
      Escolaridad: "Ing. En Sistemas, Computación, Informática o afín.",
      ZonaTrabajo: "Zona Sur CDMX",
      RequisitosEspecíficos:
        "Amplia experiencia en desarrollo frontend principalmente con React, Angular, CSS, SASS, LESS, STYLUS, GIT, Jquery, Pruebas unitarias.",
      Contacto: "slopez@interware.com.mx",
    },
    {
      id: 4,
      title: "Desarrollador Front End",
      Edad: "Indistinto",
      Sexo: "Indistinto",
      Escolaridad: "Ing. En Sistemas, Computación, Informática o afín.",
      ZonaTrabajo: "Zona Sur CDMX",
      RequisitosEspecíficos:
        "Amplia experiencia en desarrollo frontend principalmente con React, Angular, CSS, SASS, LESS, STYLUS, GIT, Jquery, Pruebas unitarias.",
      Contacto: "slopez@interware.com.mx",
    },
  ];

  return (
    <div className="cd-section">
      <div className={classes.pricing}>
        <div className={classes.container}>
          <GridContainer>
            {arrayVacantes.map((item) => {
              return (
                <GridItem xs={12} sm={4} md={6}>
                  <GridItem
                    xs={12}
                    sm={7}
                    md={7}
                    className={`${classes.mlAuto} ${classes.mrAuto}`}
                  >
                    <Card className={classes.cardRotate}>
                      <div>
                        <CardBody className={classes.cardBodyRotate}>
                          <div className={classes.backContainer}>
                            <div className={classes.titleContainer}>
                              <h3>{item.title}</h3>
                              <hr className={classes.divider} />
                            </div>
                            <div className={classes.backSolutionsList}>
                              <p>
                                <strong>Nombre:</strong> {item.Edad}
                              </p>
                              <p>
                                <strong>Sexo:</strong> {item.Sexo}
                              </p>
                              <p className={classes.mlText}>
                                <strong> Escolaridad:</strong>
                                <br />
                                {item.Escolaridad}
                              </p>
                              <p className={classes.mbText}>
                                <strong>Zona de trabajo:</strong>
                                <br />
                                <span className={classes.boldText}>
                                  {item.ZonaTrabajo}
                                </span>
                              </p>
                              <p>
                                <strong> Requisitos Específicos:</strong>
                                <br />
                                {item.RequisitosEspecíficos}
                              </p>
                              <div className={classes.dividerSmall} />
                              <p className={classes.boldText}>
                                contacto: {item.Contacto}
                              </p>
                            </div>
                          </div>
                        </CardBody>
                        <CardFooter>
                          <div className={classes.backFooterContainer}>
                            <Button color="primary" round onClick={() => {}}>
                              Postúlate Ahora
                            </Button>
                          </div>
                        </CardFooter>
                      </div>
                    </Card>
                  </GridItem>
                </GridItem>
              );
            })}
          </GridContainer>
          <div className={classes.justifyContentEnd}>
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
        </div>
      </div>
    </div>
  );
};

export default SectionCards;
