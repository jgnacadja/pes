<template>
  <b-navbar :type="typeNavbar" class="navbar-style">
    <template slot="brand">
      <div
        class="has-background-white columns is-marginless is-paddingless is-variable is-mobile is-vcentered is-centered is-hidden-desktop home-brand-slot-mobile"
      >
        <div class="column is-narrow home-brand-slot-column-mobile">
          <g-link to="/">
            <figure class="">
              <g-image src="~/assets/logo-990.svg" fit="inside" />
            </figure>
          </g-link>
        </div>
      </div>
      <div
        class="has-background-white columns is-marginless is-paddingless is-variable is-mobile is-vcentered is-centered is-hidden-touch home-brand-slot"
      >
        <div class="column is-narrow home-brand-slot-column">
          <g-link to="/">
            <figure class="">
              <g-image
                class="studbrand"
                src="~/assets/logo-990.svg"
                fit="inside"
              />
            </figure>
          </g-link>
        </div>
      </div>
    </template>

    <template slot="start" wrapper-class="column is-12">
      <div class="is-hidden-desktop">
        <b-navbar-dropdown
          label="Qui sommes-nous?"
          class="column is-mega"
          collapsible
        >
          <div class="columns is-multiline">
            <div class="column is-3-desktop is-0-mobile"></div>
            <div class="column is-2-desktop is-12-mobile">
              <b-navbar-item
                tag="g-link"
                class="subitemchild"
                to="/etudier-en-france/"
                >Studely France</b-navbar-item
              >

              <b-navbar-item tag="g-link" class="subitemchild" to=""
                >Studely Cameroun</b-navbar-item
              >
              <b-navbar-item tag="g-link" class="subitemchild" to=""
                >Nos médias</b-navbar-item
              >
            </div>
          </div>
        </b-navbar-dropdown>

        <b-navbar-dropdown
          label="Nos services"
          class="column is-mega"
          collapsible
        >
          <div class="columns is-multiline">
            <div class="column is-3-desktop is-0-mobile"></div>

            <div class="column is-2-desktop is-12-mobile">
              <b-navbar-item
                tag="g-link"
                to="/nos-services/ma-caution-bancaire/"
                class="subitemchild"
                >Ma caution bancaire</b-navbar-item
              >
              <b-navbar-item
                tag="g-link"
                to="/nos-services/mon-logement/"
                class="subitemchild"
                >Mon logement étudiant</b-navbar-item
              >
              <b-navbar-item
                tag="g-link"
                class="subitemchild"
                to="/nos-services/mon-compte-bancaire/"
                >Mon compte bancaire</b-navbar-item
              >
              <b-navbar-item
                tag="g-link"
                to="/nos-services/mon-assurance/"
                class="subitemchild"
                >Mon assurance</b-navbar-item
              >
            </div>
          </div>
        </b-navbar-dropdown>

        <b-navbar-dropdown
          label="Etudier en France"
          class="column is-mega"
          collapsible
        >
          <div class="columns is-multiline">
            <div class="column is-3-desktop is-0-mobile"></div>
            <div class="column is-2-desktop is-12-mobile">
              <b-navbar-item
                tag="g-link"
                to="/etudier-en-france/"
                class="subitemchild"
                >Etudier en France</b-navbar-item
              >
              <b-navbar-item tag="g-link" to="/parents/" class="subitemchild"
                >Nos conseils</b-navbar-item
              >
              <b-navbar-item tag="g-link" to="/parents/" class="subitemchild"
                >Parents</b-navbar-item
              >
            </div>
          </div>
        </b-navbar-dropdown>

        <b-navbar-dropdown
          label="Nos partenaires"
          class="column is-mega"
          collapsible
        >
          <div class="columns is-multiline">
            <div class="column is-3-desktop is-0-mobile"></div>
            <div class="column is-2-desktop is-12-mobile">
              <b-navbar-item
                tag="g-link"
                class="subitemchild"
                to="/partenaires/ecole/"
                >Nos écoles partenaires</b-navbar-item
              >
              <b-navbar-item
                tag="g-link"
                class="subitemchild"
                to="/partenaires/immobilier/"
                >Partenaires immobiliers</b-navbar-item
              >
              <b-navbar-item
                tag="g-link"
                class="subitemchild"
                to="/partenaires/banque-assurance/"
                >Banques & institutions financières</b-navbar-item
              >
            </div>
          </div>
        </b-navbar-dropdown>

        <b-navbar-dropdown
          label="Contactez-nous"
          class="column is-mega"
          collapsible
        >
          <div class="columns is-multiline">
            <div class="column is-3-desktop is-0-mobile"></div>
            <div class="column is-2-desktop is-12-mobile">
              <b-navbar-item
                tag="g-link"
                class="subitemchild is-mega-menu-title"
                to=""
                >Service client</b-navbar-item
              >
              <b-navbar-item
                tag="g-link"
                to=""
                class="subitemchild is-mega-menu-title"
                >Devenir partenaire</b-navbar-item
              >
              <b-navbar-item
                tag="g-link"
                to="/on-recrute/"
                class="subitemchild is-mega-menu-title"
                >Carrières</b-navbar-item
              >
            </div>
          </div>
        </b-navbar-dropdown>
      </div>

      <div
        class="columns is-variable is-mobile is-vcentered is-mobile has-text-white is-hidden-touch"
      >
        <div class="column">
          <div
            class="columns is-variable is-mobile is-vcentered is-centered is-marginless iswrapping"
          >
            <b-navbar-dropdown
              label="Qui sommes-nous?"
              class="column is-medium submenuitem"
              collapsible
            >
              <div class="columns is-multiline">
                <div class="column is-2-desktop is-12-mobile">
                  <b-navbar-item
                    class="subitemchild"
                    tag="g-link"
                    to="/etudier-en-france/"
                    >Studely France</b-navbar-item
                  >

                  <b-navbar-item class="subitemchild" tag="g-link" to=""
                    >Studely Cameroun</b-navbar-item
                  >
                  <b-navbar-item class="subitemchild" tag="g-link" to=""
                    >Nos médias</b-navbar-item
                  >
                </div>
              </div>
            </b-navbar-dropdown>

            <b-navbar-dropdown
              label="Nos services"
              class="column is-medium submenuitem"
              collapsible
            >
              <div class="columns is-multiline">
                <div class="column is-2-desktop is-12-mobile">
                  <b-navbar-item
                    class="subitemchild"
                    tag="g-link"
                    to="/nos-services/ma-caution-bancaire/"
                    >Ma caution bancaire</b-navbar-item
                  >
                  <b-navbar-item
                    class="subitemchild"
                    tag="g-link"
                    to="/nos-services/mon-logement/"
                    >Mon logement étudiant</b-navbar-item
                  >
                  <b-navbar-item
                    class="subitemchild"
                    tag="g-link"
                    to="/nos-services/mon-compte-bancaire/"
                    >Mon compte bancaire</b-navbar-item
                  >
                  <b-navbar-item
                    class="subitemchild"
                    tag="g-link"
                    to="/nos-services/mon-assurance/"
                    >Mon assurance</b-navbar-item
                  >
                </div>
              </div>
            </b-navbar-dropdown>

            <b-navbar-dropdown
              label="Etudier en France"
              class="column is-medium submenuitem"
              collapsible
            >
              <div class="columns is-multiline">
                <div class="column is-2-desktop is-12-mobile">
                  <b-navbar-item
                    class="subitemchild"
                    tag="g-link"
                    to="/etudier-en-france/"
                    >Etudier en France</b-navbar-item
                  >
                  <b-navbar-item
                    class="subitemchild"
                    tag="g-link"
                    to="/parents/"
                    >Nos conseils</b-navbar-item
                  >
                  <b-navbar-item
                    class="subitemchild"
                    tag="g-link"
                    to="/parents/"
                    >Parents</b-navbar-item
                  >
                </div>
              </div>
            </b-navbar-dropdown>

            <b-navbar-dropdown
              label="Nos partenaires"
              class="column is-medium submenuitem"
              collapsible
            >
              <div class="columns is-multiline">
                <div class="column is-2-desktop is-12-mobile">
                  <b-navbar-item
                    class="subitemchild"
                    tag="g-link"
                    to="/partenaires/ecole/"
                    >Nos écoles partenaires</b-navbar-item
                  >
                  <b-navbar-item
                    class="subitemchild"
                    tag="g-link"
                    to="/partenaires/immobilier/"
                    >Partenaires immobiliers</b-navbar-item
                  >
                  <b-navbar-item
                    class="subitemchild"
                    tag="g-link"
                    to="/partenaires/banque-assurance/"
                    >Banques & institutions financières</b-navbar-item
                  >
                </div>
              </div>
            </b-navbar-dropdown>

            <b-navbar-dropdown
              label="Contactez-nous"
              class="column is-medium submenuitem"
              collapsible
            >
              <div class="columns is-multiline">
                <div class="column is-2-desktop is-12-mobile">
                  <b-navbar-item class="subitemchild" tag="g-link" to=""
                    >Service client</b-navbar-item
                  >
                  <b-navbar-item class="subitemchild" tag="g-link" to=""
                    >Devenir partenaire</b-navbar-item
                  >
                  <b-navbar-item
                    class="subitemchild"
                    tag="g-link"
                    to="/on-recrute/"
                    >Carrières</b-navbar-item
                  >
                </div>
              </div>
            </b-navbar-dropdown>
          </div>
        </div>
      </div>
    </template>

    <template slot="end">
      <div
        class="columns is-variable is-mobile is-centered has-text-centered has-background-success is-marginless is-paddingless"
      >
        <b-navbar-item class="subitemchild" href="https://espace.studely.com">
          <div
            class="columns is-multiline has-text-white is-marginless is-paddingless is-centered has-text-centered"
          >
            <div class="column is-narrow has-text-justified">
              <b-icon
                class="level-item-compte"
                pack="far"
                icon="user-circle"
                size="is-medium"
              />
              <br />
              <strong>Mon espace</strong>
            </div>
          </div>
        </b-navbar-item>
      </div>
    </template>
  </b-navbar>
</template>

<script scoped>
export default {
  data() {
    return {
      typeNavbar: "is-primary",
      typemedia: "is-white",
    };
  },
};
if (typeof window !== "undefined") {
  window.addEventListener("click", function (e) {
    var elements = document.getElementsByClassName("smooth-scroll-area-d");
    for (var i = 0; i < elements.length; i++) {
      //console.log(elements[i]);
      if (elements[i].contains(e.target)) {
      } else {
        elements[i].style.display = "none";
        //document.getElementById('searchform').reset();
        //document.getElementById('search-field').value = '';
      }
    }
  });
}
</script>

<style scoped lang="scss">
@import "../variables.scss";

.mon-espace {
  background-color: #48c774;
  //color: #185996 !important;
}

a.navbar-item:hover {
  background-color: #185996;
  //color: #185996 !important;
}

div.navbar-item.has-dropdown.is-mega.is-active {
  font-weight: 600;
  .is-mega-menu-title {
    font-weight: 600 !important;
  }
  .navbar-item {
    font-weight: 400;
  }
}

.sous-menu {
  padding-left: 21%;
}
.level-item-compte {
  margin-left: 2rem;
}
.level-item-filiale {
  margin-left: 1.5rem;
}

.navbar-item.is-mega {
  position: static;
  .is-mega-menu-title {
    margin-bottom: 0;
  }
}

.submenuitem {
  font-weight: bold;
}

.subitemchild {
  font-weight: lighter;
}

@media only screen and (min-width: 1024px) {
  .navbar.is-primary {
    height: 4em;
  }

  .studbrand {
    padding: 12%;
  }
  /* 
  .submenuitem {
    padding: 0% !important;
  } */

  .iswrapping {
    white-space: nowrap;
  }
}

@media only screen and (min-width: 769px) {
  .navbar-style {
    background-color: #1c66ac;
  }
}

@media only screen and (max-width: 1000px) {
  .menu {
    margin-left: unset;
  }
  .sous-menu {
    padding-left: unset;
  }
}

/* .header-search {
  -webkit-font-smoothing: antialiased;
  box-sizing: inherit;
  margin-left: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-right: 30px;
  display: block;
  margin-bottom: 0;
  font-size: 0.9rem;
  flex: 1;
  width: 90%;
} */

@media only screen and (min-width: 1024px) and (max-width: 1024px) {
  .social-medias {
    display: none;
  }

  .home-brand-slot-column {
    width: 15em !important;
  }

  .submenuitem {
    padding: 0px !important;
  }
}

@media only screen and (max-width: 1023px) {
  /*  .home-brand-slot {
    display: none !important;
  }
 */
  .home-brand-slot-mobile {
    width: 50%;
  }
}

@media only screen and (min-width: 1281px) {
  /* .home-brand-slot {
    display: none !important;
  } */

  .home-brand-slot-column {
    width: 18em;
  }
}

@media only screen and (max-width: 414px) {
  .home-brand-slot-column-mobile {
    width: 12em;
  }

  .subitemchild {
    font-weight: lighter !important;
  }
}

@media only screen and (min-width: 415px) and (max-width: 768px) {
  .home-brand-slot-column-mobile {
    width: 18em;
  }

  .subitemchild {
    font-weight: lighter !important;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1280px) {
  /* .navbar-brand {
    display: none !important;
  }

  .new-brand {
    display: none !important;
  } */

  .home-brand-slot-column {
    width: 10em;
  }
}

.missed-style {
  width: 15em;
}

.break-line {
  display: none;
}
@media only screen and (min-width: 1024px) and (max-width: 1280px) {
  .break-line {
    display: inline;
  }
}
</style>
