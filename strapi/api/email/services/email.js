'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

 const DEFAULT_FROM = process.env.DEFAULT_FROM || 'cmulato@interware.com.mx'
 const DEFAULT_REPLY_TO = process.env.DEFAULT_REPLY_TO || 'cmulato@interware.com.mx'



module.exports = {
    sendEmail: async (to, subject, html, filename, content ) => {
        console.log("filename", filename);
        console.log("content", content);
        strapi.log.info("services.email.sendEmail Sending email")
        if (content) {
          strapi.plugins['email'].services.email.send({
            to,
            from: DEFAULT_FROM,
            replyTo: DEFAULT_REPLY_TO,
            subject,
            html,
            attachments:[
                {
                  filename,
                  content
                }
            ],
          });
        } else {
          strapi.plugins['email'].services.email.send({
            to,
            from: DEFAULT_FROM,
            replyTo: DEFAULT_REPLY_TO,
            subject,
            html,
          });
        }
        
          strapi.log.info("services.email.sendEmail Email sent")
          return {menssage: "Email sent"}
    }
};
