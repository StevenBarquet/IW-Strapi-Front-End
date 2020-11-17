'use strict';
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

 const DEFAULT_FROM = process.env.DEFAULT_FROM || 'cmulato@interware.com.mx'
 const DEFAULT_REPLY_TO = process.env.DEFAULT_REPLY_TO || 'cmulato@interware.com.mx'



module.exports = {
    sendEmail: async (page, data, filename, content ) => {
        let emailTemplate = {}

        switch (page) {
          case "ServiciosEspecializados":
            emailTemplate = {
              subject: 'Servicios Especializados - Cotización',
              text: `Solicita una cotización`,
              html: `<p>Nombre: <%= data.name %></p>
              <p>E-mail: <%= data.email %></p>
              <p>Empresa: <%= data.company %></p>
              <p>Teléfono: <%= data.telephone %></p>
              <p>Indica tu necesidad: <%= data.description %></p>.`,
            };
            
            break;
            case "robotIW":
              emailTemplate = {
                subject: 'Iw Robot - Contacto',
                text: `Prueba interWare Robot!`,
                html: `<p>Nombre: <%= data.nombre %></p>
                <p>E-mail: <%= data.email %></p>
                <p>Empresa: <%= data.empresa %></p>
                <p>Necesidades de automatización: <%= data.automatizacion %></p>.`,
              };
              break;
            case "vacantes":
                emailTemplate = {
                  subject: 'Vacantes - Postularse',
                  text: `Postularse`,
                  html: `<p>Nombre: <%= data.name %></p>
                  <p>Apellidos: <%= data.apellidos %></p>
                  <p>Edad: <%= data.edad %></p>
                  <p>Telefono celular/casa: <%= data.celular %></p>
                  <p>Localidad Municipio o Acaldia: <%= data.localidad %></p>
                  <p>E-mail: <%= data.email %></p>
                  <p>Empresa: <%= data.company %></p>
                  <p>Link para descargar: <%= data.linkPDF %></p>.`,
                };
                break;

            case "boletin":
              emailTemplate = {
                  subject: 'Blog - Boletín',
                  text: `Boletín Interware`,
                  html: `<p>Inscríbete a nuestro boletín: <%= data.inscribete %></p>`,
              };
              break
          default:
            break;
        }

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
            to: "cmulato@interware.com.mx"
          },
            emailTemplate,
            { data }
          );
        }

        return {menssage: "Email sent"}
    }
};
