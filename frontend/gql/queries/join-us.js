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
  query JoinTeam {
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
      joinTeam {
        title {
          sectionTitle
          sectionTitle_en
        }
        introductoryText {
          introductoryText
          introductoryText_en
        }
        cardVacant {
          id
          tags {
            id
            name
            name_en
          }
          nameVancant
          nameVancant_en
          age
          age_en
          sex
          sex_en
          scholarship
          scholarship_en
          workZone
          workZone_en
          specificRequirements
          specificRequirements_en
          contact
        }
      }
    }
  }
`;

const JOIN_US_SENDCV_QUERY = gql`
  query SendCV {
    joinUs {
      sendCV {
        underlinedTitle
        underlinedTitle_en
        introductoryText
        introductoryText_en
        actionButton {
          label
          label_en
        }
      }
    }
  }
`;

const JOIN_US_VACANCIES_QUERY = gql`
  query Vacancies($where: JSON, $limit: Int, $start: Int, $sort: String) {
    vacancies(where: $where, limit: $limit, start: $start, sort: $sort) {
      id
      tags {
        id
        name
        name_en
      }
      title
      title_en
      age
      age_en
      gender
      gender_en
      scholarship
      scholarship_en
      workZone
      workZone_en
      specificRequirements
      specificRequirements_en
      contact
    }
  }
`;

export {
  JOIN_US_HEADER_QUERY,
  JOIN_US_TEAM_QUERY,
  JOIN_US_SENDCV_QUERY,
  JOIN_US_VACANCIES_QUERY,
};
