<template>
  <section class="font-serif w-full bg-transblue pl-16 pt-12 pb-10 pr-16">
    <h1 class="text-transpurple font-bold text-48 text-center leading-73">
      Corruption in the public sector
    </h1>
    <div class="svg mt-20 svg ">
      <horizontal-bar
        class="text-white "
        :chartdata="chartdata"
        :options="options"
      ></horizontal-bar>
    </div>
  </section>
</template>

<script>
import HorizontalBar from "../Charts/HorizontalBar";

export default {
  name: "PublicSector",
  data() {
    return {
      chartdata: {
        labels: [
          "Money laundering",
          "Fraud",
          "Illegal Dealing of oil Products",
          "Money laundering",
          "Stealing",
          "Forgery",
          "Scam",
          "Impersonation"
        ],
        datasets: [
          {
            label: "Data One",
            backgroundColor: [
              "#1E6CE0",
              "#1E6CE0",
              "#1E6CE0",
              "#1E6CE0",
              "#1E6CE0",
              "#1E6CE0",
              "#1E6CE0",
              "#1E6CE0"
            ],
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF",
            data: ["638", "348", "113", "66", "63", "47", "44", "27"]
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
                display: false
              },
              barPercentage: 0.9
            }
          ],
          xAxes: [
            {
              display: false,
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
              return tooltipItems.xLabel;
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
    HorizontalBar
  }
};
</script>

<style scoped>
section {
  .svg {
    width: 100vw;
  }
}
</style>
