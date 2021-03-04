<template>
  <section class="section background-orange has-text-white">
    <div class="columns is-multiline has-text-centered is-centered">
      <div class="column is-3">
        <div class="columns is-multiline">
          <div class="column is-12">
            <span style="font-size: 3em"><em class="fas fa-desktop"></em></span>
          </div>
          <div class="column is-12 is-size-6">
            <!-- text  -->
            +{{entreprise}} entreprises accompagnées
          </div>
        </div>
      </div>
      <div class="column is-3">
        <div class="columns is-multiline">
          <div class="column is-12">
            <span style="font-size: 3em"><em class="fas fa-users"></em></span>
          </div>
          <div class="column is-12 is-size-6">
            <!-- text  -->
            +{{employe}} employés bénéficiaires
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  props: {},
  created() {},
  data () {
    return {
      entreprise: 0,
      employe: 0
    }
  },
  async mounted () {
    try {
      var userId = 'user_awurVWpPY1ipKOSkoyWx0';
      var accessToken = '51b9c536531862f2bed1d4d69a7fedd8'; 
      
      const results = await axios.get(
        'https://api.emailjs.com/api/v1.1/history?user_id='+userId+'&accessToken='+accessToken
      );

      this.entreprise = results.data.rows.length;
      this.employe = this.entreprise * 10;
      
    } catch (error) {
      console.log(error)
    }
  }
};
</script>

<style scoped lang="scss">
@import "../variables.scss";

.background-orange {
  background-color: $secondary-color;
}
</style>