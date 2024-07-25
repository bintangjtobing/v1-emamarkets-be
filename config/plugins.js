module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "nodemailer", // Use Nodemailer as the email provider
      providerOptions: {
        host: env("SMTP_HOST", "smtp.example.com"),
        port: env("SMTP_PORT", 587),
        auth: {
          user: env("SMTP_USERNAME"),
          pass: env("SMTP_PASSWORD"),
        },
        // Additional Nodemailer options can be added here if needed
      },
      settings: {
        defaultFrom: env("SMTP_FROM", "hello@example.com"), // Default from address
        defaultReplyTo: env("SMTP_REPLYTO", "hello@example.com"), // Default reply-to address
        testAddress: env("SMTP_TEST_ADDRESS", "test@example.com"), // Test address (optional)
      },
    },
    logger: {
      debug: console.log,
      info: console.info,
      warn: console.warn,
      error: console.error,
    },
  },
  seo: {
    enabled: true,
  },
  // ...
});
