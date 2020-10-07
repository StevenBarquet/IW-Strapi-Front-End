import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";
import CustomInput from "~/components/CustomInput/CustomInput";
import Checkbox from "~/components/CustomCheckbox/Checkbox";
import Button from "~/components/CustomButtons/Button";

// Style
import postularFormStyle from "~/assets/jss/postularPageStyle/postularFormStyle.js";

const useStyles = makeStyles(postularFormStyle);

const SectionFormRH = () => {
  const classes = useStyles();
  return (
    <div className="cd-section">
      <div className={classes.pricing}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={10}
              md={10}
              className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}
            >
              <h2 className={classes.title}>Solicita una cotización</h2>
              <p>Primum igitur, quid aut odit aut in armatum hostem impetum.</p>
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={5} md={5}>
              <CustomInput
                labelText="Nombre completo"
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  rows: 6,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={5}>
              <CustomInput
                labelText="correo electronico:"
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  rows: 6,
                }}
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={5} md={6}>
              <CustomInput
                labelText="Empresa"
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  rows: 6,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={5}>
              <CustomInput
                labelText="Teléfono de contacto"
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  rows: 6,
                }}
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={5} md={12}>
              <CustomInput
                labelText="Indica tu necesidad (# de vacantes, descripción, rango salarial, etc)"
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  multiline: true,
                  rows: 6,
                }}
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={12}>
              <Checkbox
                label="Certe, inquam, pertinax non quo ignorare vos arbitrer, sed et caritatem, quae sunt vitae dicta sunt, explicabo nemo enim ad respondendum reddidisti quorum nihil ut ratione intellegi posse et via procedat oratio."
                handleClick={() => {}}
                inputProps={{
                  id: "f1",
                  name: "f1",
                }}
                value="f1"
              />
            </GridItem>
          </GridContainer>
          <GridContainer justify="center" className={classes.mtAuto}>
            <Button
              onClick={(e) => e.preventDefault()}
              className={classes.mtBton}
              round
              color="primary"
            >
              Contáctanos ahora
            </Button>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

export default SectionFormRH;
