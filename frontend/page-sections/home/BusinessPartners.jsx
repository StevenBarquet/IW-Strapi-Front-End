// Dependencies
import { useQuery } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core-components
import SectionTitle from "~/components-sections/SectionTitle";
import GridContainer from "~/components/Grid/GridContainer";
import RotatingCard from "~/components-sections/RotatingCard";

// gql
import { HOME_BUSINESS_PARTNERS } from "~/gql/queries/home";

import homeSectionStyles from "~/assets/jss/homeSectionStyles";

const useStyles = makeStyles(homeSectionStyles);

const BusinessPartners = () => {
  const { loading, error, data } = useQuery(HOME_BUSINESS_PARTNERS);
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
    home: { businessPartners },
  } = data;

  // const BusinessPartnersCards = () =>
  //   businessPartnersCards.map((businessCard) => (
  //     <RotatingCard key={businessCard._id} cardContent={businessCard} />
  //   ));

  return (
    <div id="section-partners" className={classes.section}>
      <GridContainer justify="center">
        <SectionTitle
          icon={businessPartners.sectionIcon}
          legend={businessPartners.legend.sectionLegendTitle}
          title={businessPartners.title.sectionTitle}
          subTitle={businessPartners.subTitle.sectionSubTitle}
        >
          {/* <BusinessPartnersCards /> */}
          <div />
        </SectionTitle>
      </GridContainer>
    </div>
  );
};

export default BusinessPartners;
