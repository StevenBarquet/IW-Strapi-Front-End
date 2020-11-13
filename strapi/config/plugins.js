module.exports = ({ env }) => ({
    email: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: env('SENDGRID_DEFAULT_FROM', 'cmulato@interware.com.mx'),
        defaultReplyTo: env('SENDGRID_DEFAULT_REPLY_TO', 'cmulato@interware.com.mx'),
      },
    },
  });
