<template>
  <div class="single-date__calendar-month-header">
    <div class="single-date__arrow left" @click="toggleMonth(-1)">
      <b-icon pack="fas" icon="long-arrow-alt-left" size="is-large" />
    </div>
    <div class="single-date__year">{{ fullMonth }}.{{ year }}</div>
    <div class="single-date__arrow right" @click="toggleMonth(1)">
      <b-icon pack="fas" icon="long-arrow-alt-right" size="is-large" />
    </div>
  </div>
</template>

<script>
const MONTHS = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];
export default {
  props: {
    year: {
      type: Number,
      default: () => 1970,
    },
    month: {
      type: Number,
      default: () => 0,
    },
  },
  computed: {
    fullMonth() {
      return MONTHS[this.month];
    },
  },
  methods: {
    toggleMonth(direction) {
      this.$emit("toggleMonth", direction);
    },
  },
};
</script>

<style lang="scss" scoped>
b-icon {
  color: #1968ad;
}

.single-date__calendar-month-header {
  padding: 15px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px 10px 0 0;
  align-items: center;
  color: #1968ad;
  border-bottom: 3px solid #1b66a9;

  .single-date__year {
    font-weight: 900;
    font-size: 3em;
    text-transform: capitalize;
  }
  .single-date__arrow {
    cursor: pointer;
  }
}

@media only screen and (max-width: 768px) {
  .single-date__year {
    font-weight: 900;
    font-size: 2em !important;
    text-transform: capitalize;
  }
}
</style>