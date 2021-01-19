<template>
  <div class="overflow-y-hidden">
    <div
      class="chart px-6 py-4 h-auto text-center lg:col-span-1"
    >
      <span class="text-lg text-transpurple font-bold mb-8"
        >Top Five States</span
      >
      <div class="chart-wrapper mt-5">
        <bar-chart :chartdata="chartdata" :options="options"></bar-chart>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from "./Charts/BarChart";
export default {
  name: "Summary",
  data() {
    return {
      chartdata: {
        labels: ["Abuja", "Lagos", "Rivers", "Oyo", "Kaduna", "Enugu"],
        datasets: [
          {
            label: "Data One",
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
            data: [200, 280, 170, 210, 190, 160]
          }
        ]
      },
      options: {
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
              return "$" + tooltipItems.yLabel;
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        height: 200
      }
    };
  },
  components: {
    BarChart
  }
};
</script>

<style scoped lang="scss">
</style>
