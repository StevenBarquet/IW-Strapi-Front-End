// Dependencies
import { gql } from "@apollo/client";

export const ARTICLES_QUERY = gql`
  query Articles($where: JSON, $limit: Int, $start: Int, $sort: String) {
    articles(where: $where, limit: $limit, start: $start, sort: $sort) {
      id
      content
      createdAt
      tags {
        id
        name
      }
      user {
        name
        lastName
        description
        linkedin
        alt
        image {
          url
        }
      }
      category {
        id
        name
      }
      Seo {
        metaTitle
        metaDescription
        shareImage {
          alt
          image {
            alternativeText
            url
          }
        }
      }
    }
  }
`;

export const TEAMS_QUERY = gql`
  query teams {
    teams {
      _id
      name
      lastName
      description
      specialty {
        name
      }
      facebook
      linkedin
      image {
        alternativeText
        url
      }
    }
  }
`;

export const ARTICLE_CATEGORY_QUERY = gql`
  query category($id: ID!) {
    category(id: $id) {
      id
      name
      articles {
        id
        content
        tags {
          id
          name
        }
        user {
          name
          lastName
          description
          linkedin
          alt
          image {
            url
          }
        }
        category {
          id
          name
        }
        Seo {
          metaTitle
          metaDescription
          shareImage {
            alt
            image {
              alternativeText
              url
            }
          }
        }
      }
    }
  }
`;

export const BLOGSEO_QUERY = gql`
  query BlogSeo {
    blog {
      Seo {
        metaTitle
        metaDescription
        shareImage {
          alt
          image {
            url
          }
        }
      }
    }
  }
`;

export const CATEGORIES_QUERY = gql`
  query categories {
    categories {
      id
      name
      articles {
        id
      }
    }
  }
`;

export const TAGS_QUERY = gql`
  query tags($limit: Int) {
    tags(limit: $limit) {
      id
      name
    }
  }
`;
