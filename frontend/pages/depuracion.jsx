// nodejs library that concatenates classes
import classNames from "classnames";
import dynamic from "next/dynamic";
// @material-ui/icons
import AttachFile from "@material-ui/icons/AttachFile";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// layout
import withLayout from "~/layouts/main";

// styles
import GridItem from "~/components/Grid/GridItem";
import Button from "~/components/CustomButtons/Button";
import Badge from "~/components/Badge/Badge";
import Checkbox from "~/components/CustomCheckbox/Checkbox";
import CustomInput from "~/components/CustomInput/CustomInput";
import CustomFileInput from "~/components/CustomFileInput/CustomFileInput";
import DateTime from "~/components/DateTime/DateTime";

import sectionTextStyle from "~/assets/jss/blogPostsPageStyle/sectionTextStyle.js";

const SectionPricing = dynamic(import("~/page-sections/robot/SectionPricing"));

const useStyles = makeStyles(sectionTextStyle);

const Depuracion = () => {
  const classes = useStyles();

  return (
    <>
      <div style={{ margin: "10rem" }}>
        <Button color="primary" round>
          Depuracion
        </Button>
        <Badge color="primary">
          <span> Hola</span>
        </Badge>
        <Checkbox
          label="Certe, inquam, pertinax non quo ignorare vos arbitrer, sed et caritatem, quae sunt vitae dicta sunt, explicabo nemo enim ad respondendum reddidisti quorum nihil ut ratione intellegi posse et via procedat oratio."
          handleClick={() => {}}
          inputProps={{
            id: "f1",
            name: "f1",
          }}
          value="f1"
        />
        <GridItem xs={12} sm={4} md={3}>
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
        <GridItem xs={12} sm={4} md={3}>
          <DateTime
            labelText="Fecha de solicitud"
            id="fecha"
            name="fecha"
            onChange={() => {}}
            value=""
          />
        </GridItem>
        <GridItem xs={12} sm={4} md={3}>
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
        </GridItem>
        <SectionPricing />
        <div className={classes.iframeContainer}>
          <iframe
            height="250"
            src="https://www.youtube.com/embed/IN6QnLpVEPI?ref=creativetim"
            frameBorder="0"
            allow="encrypted-media"
            allowFullScreen=""
            title="Tesla"
          />
        </div>
      </div>
    </>
  );
};

export default withLayout(Depuracion);
