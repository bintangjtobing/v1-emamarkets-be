export default ({ env }) => ({
  email: {
    logger: {
      debug: console.log,
      info: console.info,
      warn: console.warn,
      error: console.error,
    },
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.example.com"),
        port: env("SMTP_PORT", 587),
        auth: {
          user: env("SMTP_USERNAME"),
          pass: env("SMTP_PASSWORD"),
        },
      },
      settings: {
        defaultFrom: env("SMTP_FROM", "hello@example.com"),
        defaultReplyTo: env("SMTP_REPLYTO", "hello@example.com"),
      },
    },
  },
});
