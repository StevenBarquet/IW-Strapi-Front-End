import { gql } from "@apollo/client";

const JOIN_US_HEADER_QUERY = gql`
  query Header {
    joinUs {
      header {
        image {
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

const JOIN_US_TEAM_QUERY = gql`
  query joinTeam {
    joinUs {
      joinTeam {
        title {
          sectionTitle
          sectionTitle_en
        }
        introductoryText {
          introductoryText
          introductoryText_en
        }
      }
    }
  }
`;

export { JOIN_US_HEADER_QUERY, JOIN_US_TEAM_QUERY };
