module.exports = {
  config: {
    head: {
      favicon:
        "https://res.cloudinary.com/dnsekavtx/image/upload/v1721929185/Logo_04_d5aad709ac.svg",
    },
    theme: {
      colors: {
        primary100: "#f6ecfc",
        primary200: "#e0c1f4",
        primary500: "#ac73e6",
        primary600: "#9736e8",
        primary700: "#8312d1",
        danger700: "#b72b1a",
      },
    },
    translations: {
      en: {
        "Auth.form.welcome.title": "Welcome to EMA Markets!",
        "Auth.form.welcome.subtitle": "Log in to your administrator account.",
        "Auth.form.register.subtitle":
          "Credentials are only used to authenticate in backend. All saved data will be stored in our database.",
      },
    },
    tutorials: false,
    notifications: { releases: false },
  },

  bootstrap() {},
};
