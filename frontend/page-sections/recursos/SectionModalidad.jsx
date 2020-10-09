import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "~/components/Grid/GridContainer";
import GridItem from "~/components/Grid/GridItem";
import Button from "~/components/CustomButtons/Button";
import RotatingCard from "~/components-sections/home/RotatingCard";

import imgRH from "~/assets/img/rh.png";
import bannerCarrucel from "~/assets/img/bannerCarrucel.png";

// Style
import postularFormStyle from "~/assets/jss/postularPageStyle/postularFormStyle.js";

const useStyles = makeStyles(postularFormStyle);

const SectionModalidad = () => {
  const classes = useStyles();
  const settings = {
    autoplay: true,
    dots: true,
    lazyLoad: "ondemand",
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
  };

  const listItems = [
    {
      __typename: "ComponentHomeSectionsBusinessPartnersCard",
      _id: "5f2c8ac60b2883008b7df74d",
      cardFront: {
        __typename: "ComponentHomeSectionsCardFront",
        cardTitle: "SOFTWARE",
        brandClient: "Silver Partner",
        brandDescription: "15 años de alianza",
        brandLogo: {
          __typename: "UploadFile",
          caption: "",
          url: "/uploads/IBM_6a4745d099.png",
        },
      },
      cardBack: {
        __typename: "ComponentHomeSectionsCardBack",
        cardTitle: "Soluciones IBM",
        brandList: [
          {
            __typename: "ComponentPageListItems",
            _id: "5f2c8ac60b2883008b7df752",
            listItemIcon: "check",
            listIconDescription: "<p>Big Data</p>",
          },
          {
            __typename: "ComponentPageListItems",
            _id: "5f2c8ac60b2883008b7df753",
            listItemIcon: "check",
            listIconDescription: "<p>Mejoras en Rendimiento</p>",
          },
          {
            __typename: "ComponentPageListItems",
            _id: "5f2c8ac60b2883008b7df754",
            listItemIcon: "check",
            listIconDescription: "<p>Agilidad y escalabilidad</p>",
          },
          {
            __typename: "ComponentPageListItems",
            _id: "5f2c8ac60b2883008b7df755",
            listItemIcon: "check",
            listIconDescription: "<p>Big Data</p>",
          },
          {
            __typename: "ComponentPageListItems",
            _id: "5f2c8ac60b2883008b7df756",
            listItemIcon: "check",
            listIconDescription: "<p>Another one</p>",
          },
        ],
        cardActioner: "Asesoria personalizada",
      },
    },
  ];

  const PartnersCards = () =>
    listItems.map((businessCard) => (
      <RotatingCard key={businessCard._id} cardContent={businessCard} />
    ));
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
              <h2 className={classes.title}>Atracción de talento Interware</h2>
              <p>
                Contamos con amplia experiencia eb ek proceso de selección y
                reclutamiento de talento para tu empresa
              </p>
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <PartnersCards />
          </GridContainer>
          <GridContainer className={classes.mtText7rem}>
            <GridItem xs={12} sm={10} md={6}>
              <h1 className={classes.title}>Habla con un experto.</h1>
              <Button
                onClick={(e) => e.preventDefault()}
                className={classes.btonSearch}
                round
                color="primary"
              >
                Contáctanos
              </Button>
            </GridItem>
            <GridItem xs={12} sm={10} md={6}>
              <img
                style={{
                  width: "100%",
                  display: "block",
                }}
                src={imgRH}
                alt="..."
              />
            </GridItem>
          </GridContainer>
          <GridContainer className={classes.mtText7rem}>
            <GridItem
              xs={12}
              sm={12}
              md={12}
              className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}
            >
              <h2 className={classes.title}>Recluta a los mejores</h2>
              <p>
                Te apoyamos en tu búsqueda, con eficientes herramientas de
                seleccion de candidatos
              </p>
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
        </div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <img
              style={{
                width: "100%",
                display: "block",
              }}
              src={bannerCarrucel}
              alt="..."
              className="slick-image"
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

export default SectionModalidad;
