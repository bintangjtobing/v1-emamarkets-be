module.exports = ({ env }) => ({
  config: {
    favicon:
      "https://res.cloudinary.com/dnsekavtx/image/upload/v1721929185/Logo_04_d5aad709ac.svg",
  },
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
    promoteEE: env.bool("FLAG_PROMOTE_EE", true),
  },
});
