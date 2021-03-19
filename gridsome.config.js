
const sourceFilesystem = require("./plugin.sourceFilesystem");
const blogFilesystem = require("./plugin.blogFilesystem");

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: "Impulse",
    siteDescription:
        "Un dispositif de la chambre de commerce et d'industrie du BENIN",

    plugins: [sourceFilesystem, blogFilesystem],
    templates: {
        Category: "/category/:title",
        Form: "/form/:title",
        Post: "/blog/:title"
    },
};
