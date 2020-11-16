<template>
  <div>
    <div class="columns is-12 main-box">
      <div class="column is-center-mobile ADN-g-image is-3">
        <g-image src="~/assets/index/leaders/leader-cameroun.png" />
      </div>
      <div class="column is-9 mt-6">
        <div class="columns is-12">
          <div class="column is-10 has-text-left">
            <div class="columns is-12 is-mobile">
              <div class="column is-10">
                <span class="title main-box-title"
                  >Un mot de notre directeur</span
                >
              </div>
              <div class="column extern-link is-2 mt-3">
                <b-icon
                  pack="fas"
                  icon="chevron-right"
                  size="is-large"
                  type="is-white"
                />
              </div>
            </div>
            <div class="column">
              <span class="title main-box-subtitle"
                >Arsenne Kapnang, Country Manager Cameroun</span
              >
            </div>
            <div class="column content-12">
              L’idée de poursuivre mes
              <span class="has-text-weight-bold">études à l’étranger</span>
              m’a toujours motivé, même si je savais que le défi était colossal.
              L’échéance approchant, j’ai réussi à trouver en moi, et grâce au
              soutien de mes proches, le
              <span class="has-text-weight-bold">courage</span> nécessaire pour
              franchir le pas, de l’idée à sa réalisation.
            </div>
            <div class="column content-12-link">
              <g-link>Lire Plus</g-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="columns is-12">
      <div class="column is-5 is-12-mobile main-box-left">
        <div class="columns is-12">
          <div class="column is-12 has-text-left">
            <div class="columns is-12 is-mobile">
              <div class="column is-10 mt-3">
                <span class="title main-box-title">Notre équipe</span>
              </div>
              <div class="column is-2 mt-3">
                <b-icon
                  pack="fas"
                  icon="chevron-right"
                  size="is-large"
                  type="is-white"
                />
              </div>
            </div>

            <div class="columns is-12 is-mobile">
              <div class="column is-6">
                <div class="column">
                  <g-image src="~/assets/index/teams/long_team.png" />
                </div>
                <div class="column">
                  <g-image src="~/assets/index/teams/short_team.png" />
                </div>
              </div>
              <div class="column is-6 ml-3">
                <div class="column">
                  <g-image src="~/assets/index/teams/short_team.png" />
                </div>
                <div class="column">
                  <g-image src="~/assets/index/teams/long_team.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-7 main-box-right">
        <div class="columns is-12">
          <div class="column is-12 has-text-left">
            <div class="column mt-2">
              <span class="title main-box-title">Découvrez notre agenda</span>
            </div>
            <div class="column">
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Calendar from "~/components/calendar/Calendar.vue";

export default {
  components: {
    Calendar,
  },
};
</script>
<style scoped lang="scss">
.main-box {
  background-color: #0e3b64;
}

.main-box-left {
  background-color: #3d8cd1;
}

.main-box-right {
  background-color: #1b66a9;
}

.main-box-title {
  font-size: 2em;
  color: white;
}

.main-box-subtitle {
  font-size: 1em;
  color: white;
}

.content-12 {
  color: white;
}

.extern-link {
  text-align: end;
  margin-left: 10%;
}

@media only screen and (max-width: 768px) {
  .extern-link {
    text-align: end;
    margin-left: -7%;
    margin-top: 0% !important;
  }
}

@media only screen and (max-width: 414px) {
  .is-center-mobile {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .adn-description {
    padding-left: unset;
    padding-top: 1em;
    padding-right: unset;
  }
}

.ADN-g-image {
  transform: translateY(10%);
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

