module.exports = {
    definition: `
    type Email {
      data: JSON
      content: String
      filename: String
      page: String
    }

    input EmailInput {
      data: JSON
      content: String
      filename: String
      page: String
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
                const {data, filename, content, page } = input;

                if(content){
                   return strapi.api.email.services.email.sendEmail(page, data, filename, content)    
                }else {
                  return strapi.api.email.services.email.sendEmail(page, data)    
                }

              },
              }
          }
    },
  }