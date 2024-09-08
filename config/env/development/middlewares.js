module.exports = [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
          "media-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      origin: ["*"],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
      headers: ["Content-Type", "Authorization", "Origin", "Accept"],
      keepHeaderOnError: true,
    },
  },
  {
    name: "strapi::poweredBy",
    config: {
      poweredBy:
        "EMA Markets Development Marketing Division - Empower. Magnify. Achieve. 2024",
    },
  },
  "strapi::query",
  "strapi::body",
  "strapi::session",
  {
    name: "strapi::favicon",
    config: {
      path: "https://res.cloudinary.com/dnsekavtx/image/upload/v1721929185/Logo_04_d5aad709ac.svg",
    },
  },
  "strapi::public",
];
