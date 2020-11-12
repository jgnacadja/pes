<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <section class="grid-services center-over-1920">
      <div
        class="columns is-vcentered is-centered is-multiline has-text-centered"
      >
        <div class="column is-12 is-marginless is-paddingless">
          <b-carousel
            :arrow="arrow"
            :arrow-both="arrowBoth"
            :arrow-hover="arrowHover"
            :icon-pack="iconPack"
            :icon-prev="iconPrev"
            :icon-next="iconNext"
            :icon-size="iconSize"
            :autoplay="true"
            :interval="10000"
            :pause-hover="false"
          >
            <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
              <section
                :class="`hero is-medium diapo has-text-white `"
                :style="{ backgroundImage: `url('${carousel.image}')` }"
              >
                <div class="hero-body has-text-left">
                  <div class="columns is-multiline has-text-left">
                    <div class="column is-8 is-offset-1">
                      <h1 class="title has-text-white">{{ carousel.title }}</h1>
                    </div>
                    <br />
                    <div
                      class="column is-offset-1 is-half-desktop is-12-mobile content-16"
                    >
                      {{ carousel.description }}
                    </div>
                    <div
                      class="column column is-offset-1 is-half-desktop is-12-mobile content-16"
                      v-if="carousel.button"
                    >
                      <b-button
                        tag="a"
                        :href="carousel.link"
                        type="is-success"
                        class="button-service is-large"
                      >
                        <strong>{{ carousel.button }}</strong>
                      </b-button>
                    </div>
                  </div>
                </div>
              </section>
            </b-carousel-item>
          </b-carousel>
        </div>
      </div>
      <!--tablet -->
      <div
        class="columns is-multiline is-centered is-mobile is-hidden-mobile is-hidden-desktop"
      >
        <div class="column is-10-desktop">
          <div class="columns is-multiline is-centered is-gapless is-mobile">
            <div class="column is-3-desktop is-4-mobile">
              <div class="columns is-multiline is-centered">
                <div class="column is-12 is-paddingless ligne1">
                  <g-image class="ligne-3" src="~/assets/index/1e-ligne.svg" />
                </div>
              </div>
            </div>
            <div class="column is-1 is-4-mobile">
              <div class="columns is-multiline is-vcentered">
                <div class="column is-12"></div>
              </div>
            </div>
            <div class="column is-3-desktop is-4-mobile is-paddingless">
              <div class="columns is-multiline is-centered">
                <div class="column is-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--desktop -->
      <div class="columns is-multiline is-centered is-mobile is-hidden-touch">
        <div class="column is-10-desktop">
          <div class="columns is-multiline is-centered is-gapless is-mobile">
            <div class="column is-3-desktop is-4-mobile">
              <div class="columns is-multiline is-centered">
                <div class="column is-12 is-paddingless ligne1">
                  <g-image class="ligne-3" src="~/assets/index/1e-ligne.svg" />
                </div>
              </div>
            </div>
            <div class="column is-1 is-4-mobile">
              <div class="columns is-multiline is-vcentered">
                <div class="column is-12"></div>
              </div>
            </div>
            <div class="column is-3-desktop is-4-mobile is-paddingless">
              <div class="columns is-multiline is-centered">
                <div class="column is-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <services />
    </section>

    <section class="section has-text-centered is-centered">
      <div class="columns is-multiline is-centered">
        <div class="column is-12">
          <h1 class="title has-text-primary">Témoignages</h1>
        </div>
        <div class="column is-12 is-hidden-mobile"></div>
        <div class="column is-12 is-hidden-mobile"></div>
        <div class="column is-10-desktop is-12-mobile">
          <div class="columns is-multiline is-centered">
            <div class="column is-3-desktop is-12-mobile">
              <div class="columns is-multiline is-centered">
                <div class="column is-12 temoignage-etudiant">
                  <figure class="image is-3by2">
                    <iframe
                      class="has-ratio"
                      src="https://www.youtube.com/embed/YAx6zsqTpbU"
                      allowfullscreen
                    ></iframe>
                  </figure>
                </div>
                <div class="column is-12">
                  <h2 class="is-spaced has-text-primary">Étudiants</h2>
                </div>
                <div class="column is-12 content-16">
                  « L'accompagnement a été très bénéfique tout au long de la
                  procédure... »
                </div>
              </div>
            </div>
            <div class="column is-1 is-hidden-mobile">
              <div class="columns is-multiline is-vcentered">
                <div class="column is-12"></div>
                <div class="column is-12"></div>
                <div class="column is-12"></div>
                <div class="column is-12"></div>
                <div class="column is-12">
                  <figure class="image">
                    <g-image
                      class="link-etu-parent"
                      src="~/assets/index/ligne-etudiant-parent.svg"
                      fit="inside"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div class="column is-3-desktop is-12-mobile">
              <div class="columns is-multiline is-centered">
                <div class="column is-12 temoignage-parent">
                  <figure class="image is-3by2">
                    <iframe
                      class="has-ratio"
                      src="https://www.youtube.com/embed/75BRir3-0Ho"
                      allowfullscreen
                    ></iframe>
                  </figure>
                </div>
                <div class="column is-12">
                  <h2 class="is-spaced has-text-primary">Parents</h2>
                </div>
                <div class="column is-12 content-16">
                  « Tous les documents présentés par Studely étaient vérifiés et
                  vérifiables »
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section container has-text-centered">
      <h1 class="title has-text-primary">Studely, en quelques chiffres</h1>
      <br />
      <br />
      <div class="columns is-variable is-3 is-multiline is-centered">
        <div class="column is-2">
          <g-image src="~/assets/index/chiffres-cles/4000_1.svg" fit="inside" />
          <h2 class="title">+4000</h2>
          <h3 class="subtitle">
            étudiants
            <br />accompagnés
          </h3>
        </div>
        <div class="column is-2">
          <g-image src="~/assets/index/chiffres-cles/91.svg" fit="inside" />
          <h2 class="title">91%</h2>
          <h3 class="subtitle">
            de projets d'études
            <br />concrétisés
          </h3>
        </div>
        <div class="column is-2">
          <g-image src="~/assets/index/chiffres-cles/15.svg" fit="inside" />
          <h2 class="title">15</h2>
          <h3 class="subtitle">
            pays où nous
            <br />sommes présents
          </h3>
        </div>
        <div class="column is-2">
          <g-image src="~/assets/index/chiffres-cles/50.svg" fit="inside" />
          <h2 class="title">+50</h2>
          <h3 class="subtitle">
            collaborateurs
            <br />dans le monde
          </h3>
        </div>
        <div class="column is-2">
          <g-image src="~/assets/index/chiffres-cles/30M.svg" fit="inside" />
          <h2 class="title">+30M</h2>
          <h3 class="subtitle">
            de fonds
            <br />d'étudiants gérés
          </h3>
        </div>
      </div>
    </section>

    <section class="section container has-text-centered">
      <h1 class="title has-text-primary">Ils nous font confiance</h1>
      <br />
      <br />
      <Partner />
    </section>

    <section class="section container has-text-centered">
      <h1 class="title has-text-primary">Ils parlent de nous</h1>

      <b-carousel
        :icon-pack="iconPack"
        :icon-size="iconSize"
        :pause-hover="pauseHover"
      >
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
          <section :class="`hero is-medium`">
            <section class="section container">
              <div class="columns is-desktop is-vcentered">
                <div class="column is-3">
                  <g-image :src="carousel.image" />
                </div>
                <div class="column">
                  <h2 class="subtitle">
                    <blockquote>"{{ carousel.description }}"</blockquote>
                  </h2>
                  <span class="signature is-pulled-right">
                    {{ carousel.source }}
                  </span>
                </div>
              </div>
            </section>
          </section>
        </b-carousel-item>
      </b-carousel>
    </section>
  </Layout>
</template>

<script>
import services from "~/components/services.vue";
import Partner from "~/components/Partner.vue";

export default {
  components: {
    services,
    Partner,
  },
  metaInfo: {
    title: "Studely : Etudier en France en toute sérénité !",
  },
  data() {
    return {
      isImageModalActive: false,
      isCardModalActive: false,
      iconPack: "fas",
      iconSize: "is-large",
      pauseHover: false,
      carousels: [
        {
          description:
            "Simplification, coûts moindres, meilleure intégration dans le pays d’accueil… Cette appli de Fintech est très prometteuse pour de nombreux étudiants africains !",
          source: "Jury du Prix Challenge Digital Africa 2017",
          image: "/index-carousel-images/digital-africa.jpg",
        },
        {
          description:
            "Votre équipe est motivée, complémentaire et compétente, avec des expériences passées dans les domaines couverts par le projet",
          source: "Ninon Duval, Bond'innov (Janvier 2018)",
          image: "/index-carousel-images/bondinnov.jpg",
        },
        {
          description:
            "Première plateforme spécialiste de la caution bancaire pour étudiants internationaux qui souhaitent poursuivre leurs études en France.",
          source: "Jury du Prix Challenge Digital Africa 2017",
          image: "/index-carousel-images/RFI.jpg",
        },
        {
          description: "Studely, meilleur promoteur des études à l’étranger",
          source: "Matin Libre (Octobre 2018)",
          image: "/index-carousel-images/matin-libre.jpg",
        },
        {
          description:
            "Studely aide les étudiants africains à étudier à l’étranger",
          source: "Actu Cameroun (Juillet 2019)",
          image: "/index-carousel-images/actu-cameroun.jpg",
        },
      ],

      //Main carrousel

      arrow: true,
      arrowBoth: false,
      arrowHover: false,
      iconPack: "mdi",
      iconPrev: "arrow-left",
      iconNext: "arrow-right",
      iconSize: "",
      carousels: [
        {
          title: "L'art de vivre à la Française",
          color: "info",
          image: "/etudier-en-france/1.jpg",
          description:
            " Etudier en France c’est aller à la rencontre de « l’art de vivre à la française ». Une occasion pour les étudiants internationaux de découvrir une gastronomie mondialement reconnue, un patrimoine plein d’histoire et de profiter d’une offre culturelle riche et variée qui feront de votre séjour étudiant une expérience unique.",
          button: "J'y souscris",
          link: "https://espace.studely.com",
        },
        {
          title:
            "Une vie étudiante attractive dans un environnement international",
          color: "success",
          image: "/etudier-en-france/2.jpg",
          description:
            "L’enseignement supérieur français séduit de nombreux étudiants internationaux venus du monde entier, favorisant des rencontres uniques, multiculturelles et hautement enrichissantes.",
        },

        {
          title: "L'excellence de l'offre de formations en France",
          color: "warning",
          image: "/etudier-en-france/3.jpg",
          description:
            "La France est mondialement reconnue pour la qualité de son enseignement supérieur. Elle est la première destination étudiante francophone au monde.",
        },
        {
          title: "L’environnement favorable à la recherche et à l’innovation",
          color: "info",
          image: "/etudier-en-france/4.jpg",
          description:
            "Les étudiants peuvent compter sur un cadre privilégié pour mener à bien leurs projets innovants et profiter d'un réseau de recherche mondial et d’enseignants prisés.",
        },
        {
          title:
            "L'approfondissement d'une langue internationale : le français",
          color: "success",
          image: "/etudier-en-france/5.jpg",
          description:
            "Vous ne le saviez peut-être pas mais la langue française est la 5ème langue la plus parlée dans le monde, ainsi que le plus apprise après l’anglais. Elle est également la 3ème langue des affaires et la 2ème langue d’information internationale selon l'Organisation internationale de la Francophonie (OIF). Alors, pourquoi attendre venir étudier en France ?",
        },
      ],
    };
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.diapo {
  min-height: 40em;
  background-size: cover;
}

.title {
  font-size: 3rem;
}

.content-16 {
  font-size: 1.5em;
}
</style>
