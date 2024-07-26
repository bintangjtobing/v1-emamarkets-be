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
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {
          folder: "upload_from_be_strapi",
          use_filename: true,
          unique_filename: false,
        },
        delete: {},
      },
    },
  },
  // ...
});
