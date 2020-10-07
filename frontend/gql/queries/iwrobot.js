import { gql } from "@apollo/client";

export const IWROBOT_QUERY = gql`
  query iwRobot {
    iwRobot {
      id
      Automatizacion {
        id
        header {
          title
          titleIcon {
            url
          }
          subTitle
          introduction
        }
      }
    }
  }
`;
