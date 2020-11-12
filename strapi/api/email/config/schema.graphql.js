module.exports = {
    definition: `
    type Email {
      to: String
      html: String
      subject: String
      content: String
      filename: String
    }

    input EmailInput {
      to: String
      html: String
      subject: String
      content: String
      filename: String
    }  
   `,
    mutation: `
    sendEmail(input: EmailInput): Email
  `,
    resolver: {
        Mutation: {
            sendEmail: {
              description: 'send email',
              resolverOf: 'application::email.email.send',
              resolver: (_, {input}) => {
                const {to, subject, html, filename, content } = input;

                if(content){
                   return strapi.api.email.services.email.sendEmail(to, subject, html, filename, content)    
                }else {
                  return strapi.api.email.services.email.sendEmail(to, subject, html)    
                }

              },
              }
          }
    },
  }