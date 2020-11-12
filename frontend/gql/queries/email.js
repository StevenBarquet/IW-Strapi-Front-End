import { gql } from "@apollo/client";

const FORM_EMAIL_QUERY = gql`
  mutation sendEmail($input: EmailInput) {
    sendEmail(input: $input) {
      to
      html
      subject
      content
      filename
    }
  }
`;

export { FORM_EMAIL_QUERY };
