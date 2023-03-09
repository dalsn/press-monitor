<template>
  <section class="h-auto font-serif px-2 py-12 md:px-10 xl:px-16">
    <div class="overflow-y-hidden xl:grid xl:grid-cols-2 xl:gap-x-4">
      <!-- <div
        class="py-4 px-6 h-auto border rounded-lg flex flex-col items-center my-4 shadow-md lg:grid lg:grid-cols-6 lg:gap-x-12 lg:items-center"
      > -->
      <!-- <div
        class="h-auto px-6 flex flex-col my-4 lg:col-span-1"
      > -->
      <div
        class="px-6 h-auto flex flex-col my-4 lg:col-span-1"
      >
        <div class="flex-1">
          <h2 class="text-lg lg:text-2xl font-medium truncate mr-3">Incidents Location</h2>
          <div class="box mt-8">
            <!-- <div>
              Hover to see more details.
            </div> -->
            <SimpleMap class="w-full bg-white rounded-md" :locations="with_incidents" />
          </div>
        </div>
      </div>
      <!-- <div
        class="chart px-6 h-auto flex flex-col my-4 lg:col-span-1"
      > -->
      <div
        class="chart px-6 mt-16 mb-8 lg:my-4 col-span-8 lg:col-span-1 flex flex-col items-stretch"
      >
        <h2 class="text-lg lg:text-2xl font-medium truncate mr-3">Top 5 Incident Types</h2>
        <div class="box mt-8">
          <div class="chart-wrapper">
            <BarChart :chartdata="chartdata" :options="options" :styles="{height: `455px`, position: `relative`}"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import ReportMap from "./ReportMap.vue";
import SimpleMap from "./SimpleMap.vue";
import BarChart from "./Charts/BarChart.vue";
import axios from "axios";

export default {
  name: "Summary",
  data() {
    return {
      offences: [],
      state_counts: [],
      offence_counts: [],
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
    // ReportMap,
    SimpleMap,
    BarChart
  },
  computed: {
    counts() {
      return this.top_five.map(a => a.incidents_count);
    },
    names() {
      return this.top_five.map(a => a.name);
    },
    top_five() {
      return this.offence_counts.slice(0, 5);
    },
    with_incidents() {
      let states = this.state_counts.filter(state => state.incidents_count > 0);
      return states.map(state => {
        return { ...state, description: `Incident${state.incidents_count > 1 ? 's' : ''}: ${state.incidents_count}` };
      })
    },
    chartdata() {
      return {
        labels: this.names,
        datasets: [
          {
            label: "Incidents by Type",
            backgroundColor: [
              "#669599",
              "#E07A5F",
              "#7EBBC8",
              "#B0829D",
              "#63729A",
              "#98C9CD"
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
        maintainAspectRatio: false
      };
    }
  },
  mounted() {
    this.getStatesCount();
    this.getOffencesCount();
  },
  methods: {
    getStatesCount() {
      axios.get(`${window.host}/api/press-monitor/statescount`).then(response => {
        if (response.data) {
          this.state_counts = response.data;
        }
      });
    },
    getOffencesCount() {
      axios.get(`${window.host}/api/press-monitor/offencescount`).then(response => {
        if (response.data) {
          this.offence_counts = response.data;
        }
      });
    },
  }
};
</script>

<style scoped lang="scss">
</style>
