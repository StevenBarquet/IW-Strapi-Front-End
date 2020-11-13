'use strict';
const fs = require('fs');
const { parseMultipartData } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

// module.exports = {
//     send: async (ctx) => {
//         const {to, subject, html, files} = ctx.request.body
//         return await strapi.services.email.sendEmail(to, subject, html, files )
//     }
// };

module.exports = {
  send: async (ctx) => {
    const { data } = ctx.request.body

    if (ctx.is('multipart')) {
        // parse the multipart data, you will need to send file as files.files key
        // and some random json object in the data key
        const { files } = parseMultipartData(ctx);

        // convert the local tmp file to a buffer
        const content = fs.readFileSync(files.files.path).toString('base64');
        const filename= files.files.name

        try {
          const response = await strapi.services.email.sendEmail(data, filename, content)

          return response
        } catch(err) {
          console.log("Error: ", err)
          return ctx.badRequest(error.toString());
        }

      } else {
        try {
          const response = await strapi.services.email.sendEmail(data)

          return response
        } catch(err) {
          console.log("Error: ", err)
          return ctx.badRequest(error.toString());
        }
      }
    },
  };
