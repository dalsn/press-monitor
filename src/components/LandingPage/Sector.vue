<template>
  <section class="font-serif bg-transpurple pl-16 pt-10 pb-10">
    <h1 class="text-white font-bold text-48 text-center leading-73">
      Sector and Number of Cases
    </h1>
    <div class="svg mt-20 flex justify-center items-center">
      <div class="chart-wrapper mt-5 p-5 text-whit ">
        <bar-chart
          class="text-white"
          :chartdata="chartdata"
          :options="options"
        ></bar-chart>
      </div>
    </div>
  </section>
</template>

<script>
import BarChart from "../Charts/BarChart";
export default {
  name: "Sector",
  data() {
    return {
      chartdata: {
        backgroundColor: "Red",
        labels: ["Private", "Public"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#BACF53", "#DE593F"],
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF",
            data: [1444, 285]
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
              display: false
            }
          ],
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontSize: 30,
                fontColor: "#FFFFFF",
                fontFamily: "Inter"
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
        height: 200,
        backgroundColor: "red"
      }
    };
  },
  components: {
    BarChart
  }
};
</script>

<style scoped></style>
