<template>
  <div class="columns is-12 event is-mobile">
    <div class="column is-3 mobile-position">
      <div class="column content-view content-view-day is-paddingless">
        {{ event.date | day }}
      </div>
      <div class="column content-view is-paddingless">
        {{ event.date | month }}
      </div>
    </div>
    <div class="is-hidden-desktop">
      <div class="cal-separator"></div>
    </div>
    <div class="is-hidden-touch">
      <div class="cal-separator" v-if="event.image === null"></div>
      <g-image
        class="image-event"
        v-if="event.image"
        :src="event.image.file.url"
      ></g-image>
    </div>
    <div class="column has-text-left is-7 content-view-body">
      <div class="column is-paddingless content-view-hour">
        {{ event.startTime | format }} - {{ event.endTime | format }}
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
import moment from "moment";

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
    format(value) {
      var time = moment(String(value)).format("HH:mm");
      return time;
    },
    day(value) {
      var days = ["01", "02", "03", "04", "04", "05", "06", "07", "08", "09"];
      var date = moment(String(value)).format("YYYY/MM/DD");
      if (new Date(date).getDate() < 10) {
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
      var date = moment(String(value)).format("YYYY/MM/DD");
      return months[new Date(date).getMonth()];
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

.image-event {
  width: 5em;
  margin-left: -3ex;
  height: 6em;
  margin-top: 2ex;
  margin-right: 4ex;
}

@media only screen and (max-width: 768px) {
  .mobile-position {
    margin-top: 1.5em;
    margin-left: 0.5em;
  }

  .image-event {
    display: none;
  }

  .content-view {
    font-size: 0.8em;
  }

  .content-view-day {
    color: #1b66a9;
    font-size: 0.8em;
  }

  .content-view-description {
    color: #1b66a9;
    font-size: 0.8em;
  }

  .content-view-title {
    font-weight: bold;
    color: #1b66a9;
    font-size: 0.8em;
  }

  .content-view {
    color: #1b66a9;
    font-size: 0.8em;
    font-weight: bold;
    margin-top: 1ex;
  }

  .cal-separator {
    margin-top: 3.8ex;
    margin-left: 1em;
    border-left: 1.2ex solid #1b66a9;
    height: 4em;
  }
}
</style>