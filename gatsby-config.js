module.exports = {
    siteMetadata: {
      description: "Personal page of Avinash",
      locale: "en",
      title: "Avinash",
    },
    plugins: [
      {
        resolve: "@wkocjan/gatsby-theme-intro",
        options: {
          basePath: "/",
          contentPath: "content/",
          showThemeLogo: true,
          theme: "classic",
        },
      },
    ],
  }
  