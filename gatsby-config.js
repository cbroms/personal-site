const path = require(`path`);

module.exports = {
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-netlify-cms`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/projects`,
                name: "markdown-pages"
            }
        },
        `gatsby-transformer-remark`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: ["gatsby-remark-copy-linked-files"]
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 800,
                            linkImagesToOriginal: false,
                            backgroundColor: "transparent"
                        }
                    },
                    `gatsby-remark-static-images`
                ]
            }
        },
        {
            resolve: `gatsby-plugin-favicon`,
            options: {
                logo: "./src/favicon.png",

                appName: null,
                appDescription: null,
                lang: "en-US",
                background: "#ededed",
                theme_color: "#104eb1",
                display: "standalone",
                start_url: "/"
            }
        },
        `gatsby-plugin-offline`
    ]
};
