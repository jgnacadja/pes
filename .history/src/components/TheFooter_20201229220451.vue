<template>
  <footer class="footer_PE">
    <div class="container">
      <ul class="footer__links">
        <li class="marianne">
          <figure class="image">
            <g-image
              src="~/assets/logo/logo-ccib.png"
              alt="Chambre de commerce et d'industrie du BENIN"
              class="navbar__logo"
              fit="inside"
            />
          </figure>
        </li>
      </ul>
      <ul class="footer__links">
        <li class="title">
          <g-image
            src="~/assets/logo/impulse.png"
            alt="Impulse: Place des entreprises"
            class="navbar__domain"
            fit="inside"
          />
        </li>
        <li class="beta-link">
          <a href="https://beta.gouv.fr/startups/place-des-entreprises"
            >Accélérateur du développement des PME</a
          >
        </li>
        <li class="social-network">
          <a
            target="_blank"
            rel="noopener"
            href="https://github.com/jgnacadja/pes"
            ><i aria-hidden="true" class="fab fa-github"></i>
            <span class="visually-hidden">Github</span>
          </a>
        </li>
      </ul>
      <ul class="footer__links">
        <li><a href="/cgu">Conditions d’utilisation</a></li>
        <li>
          <a href="/mentions_d_information">Mentions d&#39;information</a>
        </li>
        <li><a href="/mentions_legales">Mentions légales</a></li>
        <li><a href="/stats">Statistiques</a></li>
        <li><a href="https://www.numerique.gouv.fr/dinum/">DINUM</a></li>
      </ul>
    </div>
  </footer>
</template>
<script type="text/javascript" src="https://app.mailjet.com/statics/js/iframeResizer.min.js"></script>
<script>
export default {
  data() {
    return {
      isLoading: false,
      bfieldStyle: "",
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      email: "",
      ListeID: process.env.GRIDSOME_MAILJET_LIST_ID,
      form: {
        type: "",
      },
      message: "",
      bclass: "is-size-7",
    };
  },
  mounted() {
    //console.log(process.env.GRIDSOME_MAILJET_LIST_ID);
    var url = location.href; // = location.href
    var parts = url.split("/").slice(2);
    //console.log("/* ... */");

    if (parts[1] !== "404") {
      document.getElementById("footer").style.cssText =
        "position: relative !important";
    }
  },
  methods: {
    checkForm: function (e) {
      this.message = "";
      this.bfieldStyle = "";

      if (this.email === "") {
        this.message = "Votre email est requis";
        this.bclass = "is-size-7 has-text-danger";
        this.bfieldStyle = "is-marginless";
      } else if (!this.reg.test(this.email) && this.email !== "") {
        this.message = "Taper une adresse mail valide";
        this.bclass = "is-size-7 has-text-danger";
        this.bfieldStyle = "is-marginless";
      } else {
        this.message = "";
      }
      //console.log(this.message);

      if (this.message === "") {
        this.isLoading = true;
        let email = this.email;

        var axios = require("axios");

        var data = JSON.stringify({
          mail: this.email,
          list_id: process.env.GRIDSOME_MAILJET_LIST_ID,
          user: process.env.GRIDSOME_MAILJET_USER,
          pwd: process.env.GRIDSOME_MAILJET_PASS,
          contact_url: process.env.GRIDSOME_MAILJET_API_CONTACT,
          mail_list_url: process.env.GRIDSOME_MAILJET_API_LIST_RECIPIENT,
          is_excluded_from_campaigns:
            process.env.GRIDSOME_MAILJET_IS_EXCLUDED_FROM_CAMPAIGNS,
          is_unsubscribed: process.env.GRIDSOME_MAILJET_IS_UNSUBSCRIBED,
        });

        var config = {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          url: process.env.GRIDSOME_MAILJET_API_SERVICE,
          data: data,
        };

        axios(config)
          .then((res) => {
            this.isLoading = false;
            //console.log(res)
            switch (res.data.code) {
              case 400: {
                this.message = "Vous êtes déjà abonné !";
                this.bclass = "is-size-7 has-text-danger";
                this.bfieldStyle = "is-marginless";
                break;
              }
              case 401: {
                this.message =
                  "Quelque chose s'est mal passer ! Merci de réessayer";
                this.bclass = "is-size-7 has-text-danger";
                this.bfieldStyle = "is-marginless";
                break;
              }
              default: {
                this.message = "Vous êtes maintenant abonné à Studely";
                this.bclass = "is-size-7 has-text-white";
                this.bfieldStyle = "is-marginless";
              }
            }
          })
          .catch((error) => {
            this.isLoading = false;
            this.message = error;
            this.bclass = "is-size-7 has-text-danger";
            this.bfieldStyle = "is-marginless";
          });
      }
      e.preventDefault();
    },
  },
};
</script>

<style scoped lang="scss">
</style>
