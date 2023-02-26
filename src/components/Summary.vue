<template>
  <section class="h-auto font-serif px-2 py-12 md:px-10 xl:px-16">
    <div class="overflow-y-hidden">
      <div>
        <h2 class="text-3xl font-medium truncate mr-3">Incidents Location</h2>
        <div class="box mt-3">
          <div>
            Click the marker to see location details.
          </div>
          <ReportMap class="report-maps w-full mt-5 bg-gray-200 rounded-md" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ReportMap from "./ReportMap.vue";
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
    ReportMap
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

.report-maps {
  height: 620px;
}
</style>
