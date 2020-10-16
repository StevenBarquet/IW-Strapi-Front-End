import { gql } from "@apollo/client";

const SPECIALIZED_SERVICES_HEADER_QUERY = gql`
  query SpecializedServicesHeader {
    specializedService {
      header {
        large_image {
          url
          alternativeText
        }
        medium_image {
          url
          alternativeText
        }
        small_image {
          url
          alternativeText
        }
        caption
        caption_en
      }
    }
  }
`;

const SPECIALIZED_SERVICES_TALENT_SCOUT_QUERY = gql`
  query SpecializedServicesHeader {
    specializedService {
      talentScout {
        talentScoutTitle
        talentScoutTitle_en
        talentScoutIntroduction
        talentScoutIntroduction_en
        talentScoutSearchField
        talentScoutSearchField_en
      }
    }
  }
`;

export {
  SPECIALIZED_SERVICES_HEADER_QUERY,
  SPECIALIZED_SERVICES_TALENT_SCOUT_QUERY,
};
