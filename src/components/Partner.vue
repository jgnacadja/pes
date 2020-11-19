<template>
  <div class="columns is-variable is-2 is-vcentered is-centered">
    <b-carousel-list
      :data="partenaires.slides"
      :arrow="partenaires.arrow"
      :has-drag="partenaires.drag"
      :has-grayscale="partenaires.gray"
      :has-opacity="partenaires.opacity"
      :refresh="partenaires.refresh"
      :icon-pack="partenaires.iconPack"
      :icon-size="partenaires.iconSize"
      :autoplay="true"
      :interval="10000"
      :pause-hover="false"
      style="box-shadow: unset"
    >
      <template slot="item" slot-scope="props">
        <div class="column is-6-desktop is-12-mobile">
          <figure class="image is-square">
            <g-image :src="props.list.image" fit="inside" />
          </figure>
        </div>
      </template>
    </b-carousel-list>
  </div>
</template>

<script>
export default {
  props: {
    partners: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isImageModalActive: false,
      isCardModalActive: false,
      iconPack: "fas",
      iconSize: "is-large",
      pauseHover: false,
      partenaires: {
        refresh: true,
        arrow: true,
        drag: true,
        gray: false,
        opacity: false,
        values: "3",
        repeat: true,
        iconPack: "fas",
        iconSize: "is-large",
        perList: 4,
        slides: [],
      },
    };
  },
  mounted() {
    this.getPartners();
  },
  methods: {
    getPartners() {
      let items = [];

      let partners = this.partners;
      partners.forEach(function (item) {
        let objet = {
          image: item.file.url,
        };
        items.push(objet);
      });

      this.partenaires.slides = items;
    },
  },
};
</script>
<style scoped lang="scss">
@import "../variables.scss";
</style>