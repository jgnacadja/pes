/* eslint-disable no-console */
<template>
  <div id="single-date" class="single-date__calendar-view">
    <div>
      <CalendarHeader :year="year" :month="month" @toggleMonth="toggleMonth" />
    </div>

    <div>
      <div v-for="ev in currentEvents" :key="ev.description">
        <Event :event="ev" :is-selected="isSelected" />
      </div>
    </div>
  </div>
</template>

<script>
import CalendarHeader from "~/components/calendar/CalendarHeader.vue";
import Event from "~/components/calendar/Event.vue";

export default {
  components: {
    CalendarHeader,
    Event,
  },
  props: {
    date: {
      type: Object,
      default: () => null,
    },
    firstDayOfWeek: {
      type: Number,
      default: 0,
      validator: (value) => value >= 0 && value <= 6,
    },
  },
  data() {
    return {
      year: 0,
      month: 0,
      todayDate: 0,
      todayYear: 0,
      todayMonth: 0,
      selectedDate: null,
      weekStartDay: 0,
      months: [
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
      ],
      events: [
        {
          date: "2020/10/01",
          starthour: "13:00",
          endhour: "15:00",
          title: "Portes Ouvertes",
          description: "Questions à aborder : Logement",
        },
        {
          date: "2020/01/10",
          starthour: "15:00",
          endhour: "18:00",
          title: "Salon étudiant",
          description: "Toutes les questions",
        },
        {
          date: "2020/11/10",
          starthour: "13:00",
          endhour: "15:00",
          title: "Journée d'information",
          description: "Spécial",
        },
        {
          date: "2020/11/25",
          starthour: "13:00",
          endhour: "15:00",
          title: "Journée d'information",
          description: "Spécial enfants",
          image: "/index/event.jpg",
        },
        {
          date: "2020/11/06",
          starthour: "13:00",
          endhour: "15:00",
          title: "Journée d'information",
          description: "Jeunes dynamiques",
        },
      ],
      currentEvents: [],
    };
  },
  computed: {
    numDays() {
      return new Date(this.year, this.month + 1, 0).getDate();
    },

    isCurrentMonth() {
      return this.todayMonth === this.month;
    },
    isCurrentYear() {
      return this.todayYear === this.year;
    },
    isSelected() {
      if (this.selectedDate) {
        return this.selectedDate.year === this.year &&
          this.selectedDate.month === this.month
          ? this.selectedDate.date
          : 0;
      }
      return 0;
    },
  },
  watch: {
    date(val) {
      this.setDate(val);
    },
  },
  created() {
    const date = new Date();

    this.year = this.mostRecentYear();
    this.month = this.mostRecentMonth();

    this.todayDate = date.getDate();
    this.todayYear = date.getFullYear();
    this.todayMonth = date.getMonth();

    this.weekStartDay =
      this.firstDayOfWeek >= 0 && this.firstDayOfWeek <= 6
        ? this.firstDayOfWeek
        : 0;

    this.currentYearEvents(this.mostRecentYear(), this.mostRecentMonth());
  },
  methods: {
    mostRecentYear() {
      var recentYearEvent = this.events.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      )[0];
      return new Date(recentYearEvent.date).getFullYear();
    },

    mostRecentMonth() {
      var recentYearEvent = this.events.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      )[0];
      return new Date(recentYearEvent.date).getMonth();
    },

    currentYearEvents(currentY, currentM) {
      var currentEventsByYear = this.events.filter(
        ({ date }) => new Date(date).getFullYear() === currentY
      );

      this.currentEvents = currentEventsByYear.filter(
        ({ date }) => new Date(date).getMonth() === currentM
      );
    },
    generateDatesInWeek(startDate, startDay, numDays) {
      const datesInWeek = new Array(7).fill(0);
      for (let i = 0; i < numDays; i += 1) {
        datesInWeek[startDay + i] = startDate + i;
      }
      return datesInWeek;
    },
    toggleMonth(direction) {
      let newMonth = this.month + Number(direction);
      let newYear = this.year;
      if (newMonth < 0) {
        newMonth = 11;
        newYear -= 1;
      }
      if (newMonth > 11) {
        newMonth = 0;
        newYear += 1;
      }
      if (newYear >= 1970) {
        this.month = newMonth;
        this.year = newYear;
        this.currentYearEvents(this.year, this.month);
      }
    },
    selectDate(date) {
      if (date) {
        this.selectedDate = {
          year: this.year,
          month: this.month,
          date,
        };
        this.$emit("selectDate", this.selectedDate);
      }
    },
    setDate(date) {
      this.year = date.year;
      this.month = date.month;
      this.selectedDate = this.date;
    },
  },
};
</script>

<style lang="scss" scoped>
#single-date {
  font-family: "Lato", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 27em;
}

.single-date__calendar-view {
  max-width: 100%;
  background-color: white;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
  color: #0d1e44;
}
</style>