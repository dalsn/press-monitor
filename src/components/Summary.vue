<template>
  <section class="h-auto font-serif px-2 py-12 md:px-10 xl:px-16">
    <div class="overflow-y-hidden xl:grid xl:grid-cols-2 xl:gap-x-4">
      <!-- <div
        class="py-4 px-6 h-auto border rounded-lg flex flex-col items-center my-4 shadow-md lg:grid lg:grid-cols-6 lg:gap-x-12 lg:items-center"
      > -->
      <div
        v-show="no_of_cases > 0"
        class="py-4 px-6 h-auto border rounded-lg flex flex-col my-4 shadow-md lg:col-span-1"
      >
        <div class="text-center">
          <h1 class="text-lg text-transpurple font-bold mb-4">
            Total Court Cases
          </h1>
          <img class="mb-4 mx-auto" src="../assets/svg/staticon.svg" alt="" />
          <p class="mx-auto text-5xl font-bold -mt-24 mb-6">
            {{ no_of_cases }}
          </p>
        </div>
        <p class="text-md text-transpurple font-bold mt-4 mb-2">
          Top Four Crimes
        </p>
        <div class="statistics text-stat">
          <div
            v-for="(offence, key) in offences"
            :key="key"
            class="stat grid grid-cols-3 items-center row-gap-2 md:gap-x-6 md:text-lg mb-2"
          >
            <div class="title text-transpurple">{{ offence.name }}</div>
            <div class="number justify-self-center text-transgray400">
              {{ offence.cases_count }}
            </div>
            <svg
              class="svg-content"
              viewBox="0 0 107 5"
              preserveAspectRatio="xMinYMin meet"
            >
              <rect
                x="0.712646"
                y="1.43283"
                width="100"
                height="2.80597"
                rx="1.40299"
                fill="#E7E6EF"
              />
              <rect
                x="0.712646"
                y="0.731354"
                :width="(offence.cases_count/no_of_cases) * 100"
                height="4.20896"
                rx="2.10448"
                :fill="bar_colors[key]"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        class="chart px-6 py-4 my-8 lg:my-4 col-span-8 border rounded-lg shadow-md lg:col-span-1"
      >
        <p class="text-lg text-transpurple font-bold mb-4 text-center"
          >Cases by States</p
        >
        <p class="text-md text-transpurple text-left"
          >Top Five States</p
        >
        <div class="chart-wrapper mt-5">
          <bar-chart :chartdata="chartdata" :options="options"></bar-chart>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BarChart from "./Charts/BarChart";
import axios from "axios";

export default {
  name: "Summary",
  data() {
    return {
      offences: [],
      state_counts: [],
      no_of_cases: 0,
      bar_colors: [
        "#070241",
        "#58B72B",
        "#F2994A",
        "#8676FF"
      ]
    };
  },
  components: {
    BarChart
  },
  computed: {
    counts() {
      return this.state_counts.map(a => a.cases_count);
    },
    names() {
      return this.state_counts.map(a => a.name);
    },
    chartdata() {
      return {
        labels: this.names,
        datasets: [
          {
            label: "Cases by State",
            backgroundColor: [
              "#070241",
              "#58B72B",
              "#F2994A",
              "#66C9E8",
              "#35D3B7",
              "#BCC924"
            ],
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF",
            data: this.counts
          }
        ]
      };
    },
    options() {
      return {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }
          ]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true,
          mode: "single",
          callbacks: {
            label: function(tooltipItems) {
              return tooltipItems.yLabel;
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        height: 200
      };
    }
  },
  mounted() {
    this.getSummary();
    this.getCasesCount();
    this.getStatesCount();
  },
  methods: {
    getSummary() {
      axios.get(`${window.host}/api/offences/4`).then(response => {
        if (response.data) {
          this.offences = Object.keys(response.data).map(i => response.data[i]);
          this.offences.sort((a, b) => {
            return b.cases_count - a.cases_count;
          });
        }
      });
    },
    getStatesCount() {
      axios.get(`${window.host}/api/statescount/5`).then(response => {
        if (response.data) {
          this.state_counts = response.data;
        }
      });
    },
    getCasesCount() {
      axios.get(`${window.host}/api/casescount`).then(response => {
        if (response.data) {
          this.no_of_cases = response.data.no_of_cases;
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.svg-container {
  display: inline-block;
  position: relative;
  vertical-align: middle;
  overflow: hidden;

  .svg-content {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
