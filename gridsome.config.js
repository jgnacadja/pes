// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config
//const contentful = require("./plugin.confentful");
// const googleAnalytics = require("./plugin.googleAnalytics");
// const klaro = require("./plugin.klaro");
const sourceFilesystem = require("./plugin.sourceFilesystem");
// const googleTM = require("./plugin.googleTM");

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Impulse",
  siteDescription:
    "Un dispositif de la chambre de commerce et d'industrie du BENIN",

  plugins: [sourceFilesystem],
  templates: {
    Category: "/category/:title",
  },
};
