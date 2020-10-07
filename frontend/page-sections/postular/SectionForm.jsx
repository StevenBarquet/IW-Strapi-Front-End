import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AttachFile from "@material-ui/icons/AttachFile";
// core components
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";
import CustomInput from "~/components/CustomInput/CustomInput";
import Select from "~/components/CustomSelect/Select";
import DateTime from "~/components/DateTime/DateTime";
import Button from "~/components/CustomButtons/Button";
import CustomFileInput from "~/components/CustomFileInput/CustomFileInput";

// Style
import postularFormStyle from "~/assets/jss/postularPageStyle/postularFormStyle.js";

const useStyles = makeStyles(postularFormStyle);

const SectionForm = () => {
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
              <h2 className={classes.title}>Postularse</h2>
              <p>
                Sed ut alterum aspernandum sentiamus alii autem, quibus ego
                assentior.
              </p>
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={5} md={5}>
              <CustomInput
                labelText="input"
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
              <Select
                id="usuario"
                name="usuario"
                label="Usuario de modificación"
                noOptionText="Usuario de modificación"
                value=""
                handleChange={() => {}}
                options={[]}
              />
            </GridItem>
          </GridContainer>
          <h3>Datos Personales</h3>
          <GridContainer>
            <GridItem xs={12} sm={5} md={4}>
              <CustomInput
                labelText="input"
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  rows: 6,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={4}>
              <CustomInput
                labelText="input"
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  rows: 6,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <DateTime
                labelText="Fecha de solicitud"
                id="fecha"
                name="fecha"
                onChange={() => {}}
                value=""
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={4}>
              <Select
                id="usuario"
                name="usuario"
                label="Usuario de modificación"
                noOptionText="Usuario de modificación"
                value=""
                handleChange={() => {}}
                options={[]}
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={7}>
              <CustomInput
                labelText="input"
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
          <h3>Datos de Contacto</h3>
          <GridContainer>
            <GridItem xs={12} sm={5} md={4}>
              <CustomInput
                labelText="input"
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  rows: 6,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={4}>
              <CustomInput
                labelText="input"
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  rows: 6,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={4}>
              <CustomInput
                labelText="input"
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
          <h3>Adjunta tu Curriculum Vitae</h3>
          <GridContainer>
            <GridItem xs={12} sm={4} md={5}>
              <CustomFileInput
                id="archivoCarga"
                value=""
                fileInputProps={{
                  id: "archivoCarga",
                  name: "archivoCarga",
                  accept:
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",
                  onChange: () => {},
                }}
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  placeholder: "Seleccionar archivo...",
                }}
                endButton={{
                  buttonProps: {
                    round: true,
                    color: "primary",
                    justIcon: true,
                    fileButton: true,
                  },
                  icon: <AttachFile />,
                }}
              />
              <p className={classes.colorText}>
                Formato Word o PDF, RTF peso menor a 2000 KB
              </p>
            </GridItem>
            <h3 className={classes.mtText}>ó</h3>
            <GridItem xs={12} sm={5} md={4} className={classes.marginTop}>
              <CustomInput
                labelText="Link para descargar"
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
          <GridContainer justify="center" className={classes.mtAuto}>
            <Button
              onClick={(e) => e.preventDefault()}
              className={classes.mtBton}
              round
              color="behance"
            >
              Enviar
            </Button>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

export default SectionForm;
