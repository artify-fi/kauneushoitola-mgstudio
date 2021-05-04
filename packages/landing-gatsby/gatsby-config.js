module.exports = {
  siteMetadata: {
    author: `Art Bachmann`,
    publisher: `hakukonestudio artify`,
    title: `Kauneushoitola MG Studio Malminkartano, Helsinki`,
    description: `Kauneushoitolasta MG Studio saat monipuolista palvelua, joka on tarkoitettu juuri Sinulle! MG Studion tiimi koostuu kauneus- ja hyvinvointialojen asiantuntijoista, joiden käsissä saat levähtää turvallisesti ja rentoutua arjen keskellä. `,
    titleTemplate: `%s |MG Studio: Helsinki`,
    siteUrl: `https://kauneushoitola-mgstudio-malminkartano.netlify.app/`,
    twitterUsername: `@mgstudio`,
    image: `logo.jpg`,
  },
  plugins: [
    `gatsby-plugin-mdx`,
    'gatsby-plugin-react-leaflet',
    `gatsby-remark-images`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: false, // Breaks styles if not set to false
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `common`,
        path: `../common/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `../common/src/data/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ff3f66`,
        theme_color: `#ff3f66`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
          `/offline-plugin-app-shell-fallback`,
        ],
        createLinkInHead: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://kauneushoitola-mgstudio-malminkartano.netlify.app/',
        sitemap:
          'https://kauneushoitola-mgstudio-malminkartano.netlify.app/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://kauneushoitola-mgstudio-malminkartano.netlify.app/`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: 'UA-180499768-1',
    //   },
    // },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Great Vibes`,
              variants: [`400`],
            },
            {
              family: `Open Sans`,
              variants: [`300`, `400`, `500`, `600`, `700`],
            },
            {
              family: `Raleway`,
              variants: [`300`, `400`, `500`, `600`],
            },

            {
              family: `Playfair Display`,
              variants: [`300`, `400`, `400i`, `700`, `500`, `600`, `700i`],
            },
          ],
        },
      },
    },
  ],
};
