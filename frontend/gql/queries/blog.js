// Dependencies
import { gql } from "@apollo/client";

const BLOG_HEADER_QUERY = gql`
  query Header {
    blog {
      header {
        small_image {
          url
          alternativeText
        }
        medium_image {
          url
          alternativeText
        }
        large_image {
          url
          alternativeText
        }
        title
        title_en
      }
    }
  }
`;

const BLOG_ARTICLES_QUERY = gql`
  query Articles($where: JSON, $limit: Int, $start: Int, $sort: String) {
    articles(where: $where, limit: $limit, start: $start, sort: $sort) {
      id
      content
      content_en
      created_at
      tags {
        id
        name
      }
      user {
        name
        lastName
        description
        description_en
        linkedin
        shereImage {
          url
          alternativeText
        }
      }
      category {
        id
        name
      }
      seo {
        metaTitle
        metaTitle_en
        metaDescription
        metaDescription_en
        shareImage {
          url
          alternativeText
        }
      }
    }
  }
`;

const BLOG_CATEGORIES_QUERY = gql`
  query categories {
    categories {
      id
      name
      name_en
    }
  }
`;

const BLOG_TEAMS_QUERY = gql`
  query Teams {
    teams {
      id
      name
      lastName
      description
      description_en
      specialty {
        name
        name_en
      }
      facebook
      linkedin
      shereImage {
        url
        alternativeText
      }
    }
  }
`;

const BLOG_TAGS_QUERY = gql`
  query Tags {
    tagsBlogs {
      id
      name
      name_en
    }
  }
`;

export {
  BLOG_HEADER_QUERY,
  BLOG_ARTICLES_QUERY,
  BLOG_CATEGORIES_QUERY,
  BLOG_TEAMS_QUERY,
  BLOG_TAGS_QUERY,
};

// export const ARTICLES_QUERY = gql`
//   query Articles($where: JSON, $limit: Int, $start: Int, $sort: String) {
//     articles(where: $where, limit: $limit, start: $start, sort: $sort) {
//       id
//       content
//       createdAt
//       tags {
//         id
//         name
//       }
//       user {
//         name
//         lastName
//         description
//         linkedin
//         alt
//         image {
//           url
//         }
//       }
//       category {
//         id
//         name
//       }
//       Seo {
//         metaTitle
//         metaDescription
//         shareImage {
//           alt
//           image {
//             alternativeText
//             url
//           }
//         }
//       }
//     }
//   }
// `;

// export const ARTICLE_CATEGORY_QUERY = gql`
//   query category($id: ID!) {
//     category(id: $id) {
//       id
//       name
//       articles {
//         id
//         content
//         tags {
//           id
//           name
//         }
//         user {
//           name
//           lastName
//           description
//           linkedin
//           alt
//           image {
//             url
//           }
//         }
//         category {
//           id
//           name
//         }
//         Seo {
//           metaTitle
//           metaDescription
//           shareImage {
//             alt
//             image {
//               alternativeText
//               url
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// export const BLOGSEO_QUERY = gql`
//   query BlogSeo {
//     blog {
//       Seo {
//         metaTitle
//         metaDescription
//         shareImage {
//           alt
//           image {
//             url
//           }
//         }
//       }
//     }
//   }
// `;

// export const CATEGORIES_QUERY = gql`
//   query categories {
//     categories {
//       id
//       name
//       articles {
//         id
//       }
//     }
//   }
// `;

// export const TAGS_QUERY = gql`
//   query tags($limit: Int) {
//     tags(limit: $limit) {
//       id
//       name
//     }
//   }
// `;
