'use strict';
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

 const DEFAULT_FROM = process.env.DEFAULT_FROM || 'cmulato@interware.com.mx'
 const DEFAULT_REPLY_TO = process.env.DEFAULT_REPLY_TO || 'cmulato@interware.com.mx'



module.exports = {
    sendEmail: async (data, filename, content ) => {
        const emailTemplate = {
          subject: 'Iw Robot - Contacto',
          text: `Prueba interWare Robot!`,
          html: `<p>Nombre: <%= data.nombre %></p>
          <p>E-mail: <%= data.email %></p>
          <p>Empresa: <%= data.empresa %></p>
          <p>Necesidades de automatización: <%= data.automatizacion %></p>.`,
        };

        if (content) {
          await strapi.plugins.email.services.email.sendTemplatedEmail({
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
          await strapi.plugins.email.services.email.sendTemplatedEmail({
            to: "israel.lopez@interware.com.mx"
          },
            emailTemplate,
            { data }
          );
        }

        return {menssage: "Email sent"}
    }
};
