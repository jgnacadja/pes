<template>
  <div class="columns is-12 event">
    <div class="column is-3">
      <div class="column content-view content-view-day is-paddingless">
        {{ event.date | day }}
      </div>
      <div class="column content-view is-paddingless">
        {{ event.date | month }}
      </div>
    </div>
    <div class="">
      <div class="cal-separator"></div>
    </div>
    <div class="column has-text-left is-7 content-view-body">
      <div class="column is-paddingless content-view-hour">
        {{ event.starthour }} - {{ event.endhour }}
      </div>
      <div class="column is-paddingless content-view-title">
        {{ event.title }}
      </div>
      <div class="column is-paddingless content-view-description">
        {{ event.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      default: () => [],
    },
    isSelected: {
      type: Number,
      default: 0,
    },
  },
  created() {},
  filters: {
    // Filter definitions
    day(value) {
      var days = ["01", "02", "03", "04", "04", "05", "06", "07", "08", "09"];

      if (new Date(value).getDate() < 10) {
        return days[new Date(value).getDate()];
      } else {
        return new Date(value).getDate();
      }
    },
    month(value) {
      var months = [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre",
      ];

      return months[new Date(value).getMonth()];
    },
  },
  methods: {
    selectDate(date) {
      this.$emit("selectDate", date);
    },
  },
};
</script>

<style lang="scss" scoped>
.content-view {
  color: #1b66a9;
  font-size: 1em;
  font-weight: bold;
  margin-top: 1ex;
}

.content-view-hour {
  color: #1b66a9;
}

.content-view-description {
  color: #1b66a9;
  font-size: 14px;
}

.content-view-day {
  color: #1b66a9;
  font-size: 2em;
}

.cal-separator {
  margin-top: 3.5ex;
  margin-left: -1.5em;
  border-left: 1.2ex solid #1b66a9;
  height: 5em;
}

.content-view-title {
  font-weight: bold;
  color: #1b66a9;
}

.content-view-body {
  margin-top: 1.5em;
}

.event {
  border-bottom: 1px solid #1b66a9;
}
</style>