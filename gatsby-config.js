module.exports = {
  siteMetadata: {
    title: `Rants and Chants`,
    name: `Samyeak`,
    siteUrl: `https://rant.samyeak.com.np`,
    description: `This is my personal blog where I rant and chant my life mantras.`,
    hero: {
      heading: `Hello, I'm Samyeak, and this is where I spill my beans and what not.`,
      maxWidth: 800,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/samyeakmhj`,
      },
      {
        name: `github`,
        url: `https://github.com/samyeak`,
      },
      // {
      //   name: `instagram`,
      //   url: `https://instagram.com/narative.co`,
      // },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/samyeak/`,
      }
      // {
      //   name: `dribbble`,
      //   url: `https://dribbble.com/narativestudio`,
      // },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
