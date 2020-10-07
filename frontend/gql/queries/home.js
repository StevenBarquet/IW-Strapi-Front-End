// Dependencies
import { gql } from "@apollo/client";

const HOME_HEADER_QUERY = gql`
  query Header {
    home {
      header {
        images {
          id
          url
          alternativeText
        }
        caption
        caption_en
      }
    }
  }
`;

const HOME_ABOUT_US_QUERY = gql`
  query AboutUs {
    home {
      aboutUs {
        legend {
          sectionLegendTitle
          sectionLegendTitle_en
        }
        title {
          sectionTitle
          sectionTitle_en
        }
        introductoryText {
          introductoryText
          introductoryText_en
        }
        actionButton {
          label
          label_en
        }
      }
    }
  }
`;

const HOME_OUR_EXPERIENCE_QUERY = gql`
  query OurExperience {
    home {
      ourExperience {
        underlinedTitle
        underlinedTitle_en
        introductoryText
        introductoryText_en
        businessListTitle
        businessListTitle_en
        businessListItems {
          id
          materialIcon
          description
          description_en
          path
        }
        actionButton {
          label
          label_en
        }
      }
    }
  }
`;

const HOME_BUSINESS_PARTNERS = gql`
  query businessPartners {
    home {
      businessPartners {
        sectionIcon {
          url
          alternativeText
        }
        legend {
          sectionLegendTitle
          sectionLegendTitle_en
        }
        title {
          sectionTitle
          sectionTitle_en
        }
        subTitle {
          sectionSubTitle
          sectionSubTitle_en
        }
      }
    }
  }
`;

export {
  HOME_HEADER_QUERY,
  HOME_ABOUT_US_QUERY,
  HOME_OUR_EXPERIENCE_QUERY,
  HOME_BUSINESS_PARTNERS,
};
