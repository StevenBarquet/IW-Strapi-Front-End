// Dependencies
import dynamic from "next/dynamic";
import { useQuery } from "@apollo/client";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core-components
import SectionTitle from "~/components-sections/SectionTitle";
import GridContainer from "~/components/Grid/GridContainer";

// gql
import { HOME_BUSINESS_PARTNERS } from "~/gql/queries/home";

// jss styles
import homeStyle from "~/assets/jss/homeStyle";

// components
const SectionBusinessPartnersCards = dynamic(
  import("~/page-sections/home/BusinessPartnersCards")
);

const useStyles = makeStyles(homeStyle);

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

  return (
    <div id="section-partners" className={classes.section}>
      <GridContainer justify="center">
        <SectionTitle
          icon={businessPartners.sectionIcon}
          legend={businessPartners.legend.sectionLegendTitle}
          title={businessPartners.title.sectionTitle}
          subTitle={businessPartners.subTitle.sectionSubTitle}
        >
          <SectionBusinessPartnersCards />
        </SectionTitle>
      </GridContainer>
    </div>
  );
};

export default BusinessPartners;
