import plugin_gridsome_plugin_google_analytics_8 from "/home/rintio_pc1/Documents/studely-filliale/node_modules/@gridsome/plugin-google-analytics/gridsome.client.js"
import plugin_klaro_gridsome_9 from "/home/rintio_pc1/Documents/studely-filliale/node_modules/klaro-gridsome/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_google_analytics_8,
    options: {"id":"UA-97386485-1"}
  },
  {
    run: plugin_klaro_gridsome_9,
    options: {"privacyPolicy":"/mentions-legales/","cookieName":"consent","cookieExpiresAfterDays":365,"lang":"fr","translations":{"en":{"consentModal":{"description":"Here you can see and customize the information that we collect about you."},"googleAnalytics":{"description":"Website analytics powered by Google Analytics, allowing us to see how visitors use our website."},"crisp":{"description":"Chat widget & collecting of visitor statistics"},"purposes":{"analytics":"Analytics","livechat":"Livechat"}},"fr":{"consentModal":{"description":"Ici, vous pouvez voir et personnaliser les informations que nous recueillons à votre sujet."},"googleAnalytics":{"description":"L'analyse des sites web par Google Analytics, qui nous permet de voir comment les visiteurs utilisent notre site web."},"crisp":{"description":"Connaissance du client"},"purposes":{"analytics":"Gestion de traffic","livechat":"Chat"}}},"apps":[{"name":"googleAnalytics","default":true,"title":"Google Analytics","purposes":["analytics"],"cookies":["_ga","_gcl_au","_gid","_gat"],"required":false,"optOut":true,"onlyOnce":false},{"name":"crisp","title":"Crisp","default":true,"purposes":["livechat"]}]}
  }
]
