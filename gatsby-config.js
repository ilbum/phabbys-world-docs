module.exports = {
  pathPrefix: '/phabbys-world-docs',
  siteMetadata: {
    siteUrl: 'https://phabbysworld.com', // TODO update this
    title: "Phabby's World Documentation",
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `books`,
        path: `${__dirname}/mdx/books`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `docs`,
        path: `${__dirname}/mdx/docs`,
      },
    },
  ],
};
