<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <section class="grid-services center-over-1920">
      <div
        class="columns is-vcentered is-centered is-multiline has-text-centered"
      >
        <div class="column is-12">
          <b-carousel
            :indicator="indicator"
            :arrow="arrow"
            :arrow-both="arrowBoth"
            :arrow-hover="arrowHover"
            :icon-pack="iconPack"
            :icon-prev="iconPrev"
            :icon-next="iconNext"
            :icon-size="iconSize"
            :autoplay="autoPlay"
            :interval="10000"
            :pause-hover="pauseHover"
          >
            <b-carousel-item v-for="(carousel, i) in carousel" :key="i">
              <section
                :class="`hero is-medium diapo has-text-white `"
                :style="{
                  backgroundImage: `url('${carousel.image.file.url}')`,
                }"
              >
                <div class="hero-body has-text-left">
                  <div class="columns is-multiline has-text-left">
                    <div class="column is-8 is-offset-1">
                      <h1 class="title has-text-white">{{ carousel.title }}</h1>
                    </div>
                    <br />
                    <div
                      class="column is-offset-1 is-half-desktop is-12-mobile content-24 content-16"
                    >
                      {{ carousel.description }}
                    </div>
                    <div
                      class="column column is-offset-1 is-half-desktop is-12-mobile content-16"
                      v-if="carousel.button.title"
                    >
                      <b-button
                        tag="a"
                        :href="carousel.button.link"
                        type="is-success"
                        class="button-service is-large"
                      >
                        <strong>{{ carousel.button.title }}</strong>
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
    </section>

    <services :services="$page.page.services" />

    <section class="section has-text-centered is-centered">
      <div class="columns is-multiline is-centered">
        <div class="column is-12">
          <h1 class="title has-text-primary">
            {{ $page.page.testimonialsSectionTitle }}
          </h1>
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
                      :src="$page.page.testimonials[0].url"
                      allowfullscreen
                    ></iframe>
                  </figure>
                </div>
                <div class="column is-12">
                  <h2 class="is-spaced has-text-primary">
                    {{ $page.page.testimonials[0].title }}
                  </h2>
                </div>
                <div class="column is-12 content-16">
                  {{ $page.page.testimonials[0].description }}
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
                      :src="$page.page.testimonials[1].url"
                      allowfullscreen
                    ></iframe>
                  </figure>
                </div>
                <div class="column is-12">
                  <h2 class="is-spaced has-text-primary">
                    {{ $page.page.testimonials[1].title }}
                  </h2>
                </div>
                <div class="column is-12 content-16">
                  {{ $page.page.testimonials[1].description }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section container has-text-centered is-centered">
      <h1 class="title has-text-primary">
        {{ $page.page.aboutSectionTitle }}
        {{ $page.page.aboutSection[0].country | Upper }}
      </h1>
      <br />
      <br />
      <Apropos :about="$page.page.aboutSection[0]" />
    </section>

    <section class="section container has-text-centered">
      <h1 class="title has-text-primary">{{ $page.page.statsSectionTitle }}</h1>
      <br />
      <br />
      <div class="columns is-variable is-3 is-multiline is-centered">
        <div class="column">
          <g-image
            :src="$page.page.stats[0].image.file.url"
            class="image-fit"
            fit="inside"
          />
          <h2 class="title">{{ $page.page.stats[0].title }}</h2>
          <h3 class="subtitle">
            {{ $page.page.stats[0].description }}
          </h3>
        </div>
        <div class="is-hidden-touch mt-6">
          <g-image src="~/assets/index/1.png" fit="inside" />
        </div>
        <div class="column">
          <g-image
            :src="$page.page.stats[1].image.file.url"
            class="image-fit"
            fit="inside"
          />
          <h2 class="title">{{ $page.page.stats[1].title }}</h2>
          <h3 class="subtitle">
            {{ $page.page.stats[1].description }}
          </h3>
        </div>
        <div class="is-hidden-touch mt-6">
          <g-image src="~/assets/index/2.png" fit="inside" />
        </div>
        <div class="column">
          <g-image
            :src="$page.page.stats[2].image.file.url"
            class="image-fit"
            fit="inside"
          />
          <h2 class="title">{{ $page.page.stats[2].title }}</h2>
          <h3 class="subtitle">
            {{ $page.page.stats[2].description }}
          </h3>
        </div>
        <div class="is-hidden-touch mt-6">
          <g-image src="~/assets/index/3.png" fit="inside" />
        </div>
        <div class="column">
          <g-image
            :src="$page.page.stats[3].image.file.url"
            class="image-fit"
            fit="inside"
          />
          <h2 class="title">{{ $page.page.stats[3].title }}</h2>
          <h3 class="subtitle">
            {{ $page.page.stats[3].description }}
          </h3>
        </div>
        <div class="is-hidden-touch mt-6">
          <g-image src="~/assets/index/4.png" fit="inside" />
        </div>
        <div class="column">
          <g-image
            :src="$page.page.stats[4].image.file.url"
            class="image-fit"
            fit="inside"
          />
          <h2 class="title">{{ $page.page.stats[4].title }}</h2>
          <h3 class="subtitle">
            {{ $page.page.stats[4].description }}
          </h3>
        </div>
      </div>
    </section>

    <section class="section container has-text-centered">
      <h1 class="title has-text-primary">
        {{ $page.page.partnersSectionTitle }}
      </h1>
      <br />
      <br />
      <Partner :partners="$page.page.partners.images" />
    </section>

    <section class="section container has-text-centered">
      <h1 class="title has-text-primary">{{ $page.page.feedsSectionTitle }}</h1>

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
                  <g-image :src="carousel.image.file.url" />
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

<page-query>
query Page($path: String! = "/index") {
  page: contentfulPage(path: $path) {
    id
    path
    title
    coverVideo {
      file {
        url
      }
    }
    carrouselBlock {
      indicator
      arrow
      arrowBoth
      arrowHover
      autoPlay
      pauseHover
      carrouselBlock {
        title
        image {
          file {
            url
          }
        }
        description
        button {
          title
          link
        }
        country
      }
    }
    services {
      title
      description
      coverImage {
        file {
          url
        }
      }
      button {
        title
        link
      }
      pictoBefore {
        file {
          url
        }
      }
      pictoAfter {
        file {
          url
        }
      }
    }
    testimonialsSectionTitle
    testimonials {
      title
      date
      url
      description
    }
    aboutSectionTitle
    aboutSection {
      title
      aboutSection {
        title
        image {
          title
          file {
            url
          }
          description
        }
        subtitle
        description
        button {
          title
          link
        }
      }
      team {
        title
        teamOne {
          file {
            url
          }
        }
        teamTwo {
          file {
            url
          }
        }
        teamThree {
          file {
            url
          }
        }
        teamFour {
          file {
            url
          }
        }
      }
      events {
        title
        events (order: DESC) {
          id
          title
          description
          date
          startTime
          endTime
          image {
            file {
              url
            }
          }
        }
      }
      country
    }
    statsSectionTitle
    stats {
      title
      image {
        file {
          url
        }
      }
      description
    }
    partnersSectionTitle
    partners {
      images {
        file {
          url
        }
      }
    }
    feedsSectionTitle
    feeds {
      title
      image {
        file {
          url
        }
      }
      source
      description
    }
  }

  countries: allContentfulListeFiliales {
    edges {
      node {
        countries
      }
    }
  }
}
</page-query>

<script>
import services from "~/components/services.vue";
import Partner from "~/components/Partner.vue";
import Apropos from "~/components/Apropos.vue";

export default {
  components: {
    services,
    Partner,
    Apropos,
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
      carousels: [],

      //Main carrousel

      arrow: false,
      arrowBoth: false,
      arrowHover: false,
      iconPack: "mdi",
      iconPrev: "arrow-left",
      iconNext: "arrow-right",
      iconSize: "",
      indicator: false,
      autoPlay: false,
      pauseHover: false,

      carousel: [],

      about: [],
    };
  },
  created() {
    this.checkCountry(this.isSubdomain("https://www.cm.studely.com"));
  },
  methods: {
    isSubdomain(url) {
      // IF THERE, REMOVE WHITE SPACE FROM BOTH ENDS
      url = url.replace(new RegExp(/^\s+/), ""); // START
      url = url.replace(new RegExp(/\s+$/), ""); // END

      // IF FOUND, CONVERT BACK SLASHES TO FORWARD SLASHES
      url = url.replace(new RegExp(/\\/g), "/");

      // IF THERE, REMOVES 'http://', 'https://' or 'ftp://' FROM THE START
      url = url.replace(new RegExp(/^http\:\/\/|^https\:\/\/|^ftp\:\/\//i), "");

      // IF THERE, REMOVES 'www.' FROM THE START OF THE STRING
      url = url.replace(new RegExp(/^www\./i), "");

      // REMOVE COMPLETE STRING FROM FIRST FORWARD SLASH ON
      url = url.replace(new RegExp(/\/(.*)/), "");

      // REMOVES '.??.??' OR '.???.??' FROM END - e.g. '.CO.UK', '.COM.AU'
      if (url.match(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i))) {
        url = url.replace(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i), "");

        // REMOVES '.??' or '.???' or '.????' FROM END - e.g. '.US', '.COM', '.INFO'
      } else if (url.match(new RegExp(/\.[a-z]{2,4}$/i))) {
        url = url.replace(new RegExp(/\.[a-z]{2,4}$/i), "");
      }
      return url;
    },

    checkCountry(url) {
      // CHECK TO SEE IF THERE IS A DOT '.' LEFT IN THE STRING

      if (url.match(new RegExp(/\./g)) ? true : false) {
        var subdomain = url.split(/\.(?=[^\.]+$)/)[0];

        var countries = this.$page.countries.edges[0].node.countries;

        var country = countries.filter((item) => item === subdomain);

        if (country.length > 0) {
          this.loadCountryData(subdomain);
        }
      }
    },

    loadCountryData(subdomain) {
      this.arrow = this.$page.page.carrouselBlock.arrow;
      this.arrowBoth = this.$page.page.carrouselBlock.arrowBoth;
      this.arrowHover = this.$page.page.carrouselBlock.arrowHover;
      this.indicator = this.$page.page.carrouselBlock.indicator;
      this.autoPlay = this.$page.page.carrouselBlock.autoPlay;
      this.pauseHover = this.$page.page.carrouselBlock.pauseHover;

      //filter carousel by domain

      var carousel = this.$page.page.carrouselBlock.carrouselBlock;
      this.carousel = carousel.filter((item) => item.country === subdomain);

      this.carousels = this.$page.page.feeds;

      //filter about by domain

      var about = this.$page.page.aboutSection;
      this.about = about.filter((item) => item.country === subdomain);
    },
  },
  filters: {
    // Filter definitions
    Upper(value) {
      const leftletter = value.substring(0, 1);
      const rightvalue = value.substring(1);
      return leftletter.toUpperCase() + rightvalue;
    },
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

.content-24 {
  font-size: 2em;
}

@media only screen and (max-width: 414px) {
  .content-24 {
    font-size: 1.5em;
  }

  .title {
    font-size: 2.2rem;
  }

  .button-service {
    font-size: 1em !important;
  }
}

.image-fit {
  width: 80px;
  height: 80px;
}
</style>
