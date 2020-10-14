import { gql } from "@apollo/client";

const ROBOT_HEADER_QUERY = gql`
  query Header {
    robot {
      header {
        small_image {
          id
          url
          alternativeText
        }
        medium_image {
          id
          url
          alternativeText
        }
        large_image {
          id
          url
          alternativeText
        }
        title
        title_en
      }
    }
  }
`;

const ROBOT_FUNTIONING_QUERY = gql`
  query Funtioning {
    robot {
      funtioning {
        id
        header {
          small_images {
            id
            url
            alternativeText
          }
          medium_images {
            id
            url
            alternativeText
          }
          large_images {
            id
            url
            alternativeText
          }
          caption
          caption_en
        }
        title {
          sectionTitle
          sectionTitle_en
        }
        introductoryText {
          introductoryText
          introductoryText_en
        }
        urlYoutube
      }
    }
  }
`;

const ROBOT_BENEFITS_QUERY = gql`
  query Benefits {
    robot {
      benefits {
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
        InfoArea {
          id
          sectionIcon {
            url
            alternativeText
          }
          title
          title_en
          descriptionTexts
          descriptionTexts_en
        }
      }
    }
  }
`;

const ROBOT_FORM_QUERY = gql`
  query Form {
    robot {
      form {
        sectionIcon {
          url
          alternativeText
        }
        title {
          sectionTitle
          sectionTitle_en
        }
        subtitle {
          sectionSubTitle
          sectionSubTitle_en
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

const ROBOT_PLANSFORYOU_QUERY = gql`
  query PlansForYou {
    robot {
      plansForYou {
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
        cardsPlans {
          id
          sectionTitle
          sectionTitle_en
          sectionSubTitle
          sectionSubTitle_en
          description
          description_en
        }
        actionButton {
          label
          label_en
        }
      }
    }
  }
`;

export {
  ROBOT_HEADER_QUERY,
  ROBOT_FUNTIONING_QUERY,
  ROBOT_BENEFITS_QUERY,
  ROBOT_FORM_QUERY,
  ROBOT_PLANSFORYOU_QUERY,
};
