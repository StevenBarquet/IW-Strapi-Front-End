// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core-components
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";
import Badge from "~/components/Badge/Badge";

import SectionCVStyle from "~/assets/jss/vacantesPageStyle/headerVacantes";

const useStyles = makeStyles(SectionCVStyle);

const SectionCV = () => {
  const classes = useStyles();

  const tags = [
    { name: "Agosto", id: "1" },
    { name: "Desarrollo Full Stack", id: "2" },
  ];

  return (
    <div className="cd-section">
      <div className={classes.pricing}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={5}
              md={5}
              className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}
            >
              <h3 className={classes.textRed}>VACANTES</h3>
              <h2 className={classes.title}>¡Integrate a nuestro Equipo!</h2>
              <p className={classes.textDescription}>
                Nuestras vacantes son actualizadas cada viernes, si te interesa
                alguna puedes postularte o enviar un correo con tus datos a
                <strong className={classes.textcolor}>
                  rrhh@interware.com.mx
                </strong>
              </p>
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem
              xs={12}
              sm={9}
              md={9}
              className={`${classes.mlAuto} ${classes.mrAuto} ${classes.mtAuto}`}
            >
              <div className={classes.tagsFlex}>
                <div className={classes.blogTags}>
                  Tags:{" "}
                  {tags.map((tag) => (
                    <Badge key={tag.id} color="primary">
                      <span className={classes.tag}>{tag.name}</span>
                    </Badge>
                  ))}
                </div>
                <div>
                  <p className={classes.vacantesText}>Vacantes publicadas 15</p>
                </div>
              </div>
              <hr />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

export default SectionCV;
