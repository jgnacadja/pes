// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config
const contentful = require("./plugin.confentful");
const algolia = require("./plugin.algolia");
const googleAnalytics = require("./plugin.googleAnalytics");
const klaro = require("./plugin.klaro");
const sourceFilesystem = require("./plugin.sourceFilesystem");
const googleTM = require("./plugin.googleTM");

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Studely",
  siteDescription: "Premier service financier dédié aux étudiants en mobilité vers la France : justification des ressources financières, logement étudiant, compte bancaire, assurances complètes",

  plugins: [
    googleAnalytics,
    klaro,
  ],
};