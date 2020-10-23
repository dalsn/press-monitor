<template>
  <section class="flex bg-transblue font-serif pl-24 pt-10 pb-10 pr-24">
    <div class="left w-full flex justif-center items-center text-black ">
      <div class="text-wrapper">
        <span class="text-28 leading-34">Looking at years with over</span>
        <h1 class="text-72 font-bold leading-88">100 cases</h1>
        <p class="text-31 max-w-sm leading-38 pr-10">
          over years between 2016 and Mar 25, 2020
        </p>
      </div>
    </div>
    <div class="right w-full bg-white ">
      <div class="chart-wrapper mt-5 p-5 ">
        <bar-chart :chartdata="chartdata" :options="options"></bar-chart>
      </div>
    </div>
  </section>
</template>

<script>
import BarChart from "../Charts/BarChart";
export default {
  name: "Timeline",
  data() {
    return {
      chartdata: {
        backgroundColor: "Red",
        labels: ["2016", "2017", "2018", "2019", "2020"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: [
              "#4E9CC2",
              "#73BD96",
              "#BACF53",
              "#E7863C",
              "#DE593F"
            ],
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF",
            data: [155, 185, 290, 782, 142]
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
              },
              display: false
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
      }
    };
  },
  components: {
    BarChart
  }
};
</script>

<style scoped></style>
