<template>
  <section class="font-serif bg-stages pl-16 pt-12 pb-10">
    <h1 class="text-transpurple font-bold text-48 text-center leading-73">
      Stages of Cases
    </h1>
    <div class="svg mt-1 w-full flex justify-centers items-centers">
      <div class="chart-wrapper mt-5 p-5 mx-auto text-whit ">
        <bar-chart
          class="text-white"
          style="width: 500px"
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
  name: "Stages",
  data() {
    return {
      chartdata: {
        backgroundColor: "Red",
        labels: ["2016", "2017", "2018", "2019", "2020"],
        datasets: [
          {
            label: "Case Decided",
            backgroundColor: [
              "#5CBE93",
              "#5CBE93",
              "#5CBE93",
              "#5CBE93",
              "#5CBE93"
            ],
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF",
            data: [47, 45, 77, 438, 44]
          }
        ]
      },
      options: {
        title: {
          display: true
          // text: "Custom Chart Title"
        },
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
                fontSize: 18,
                fontColor: "#070241",
                fontFamily: "Inter"
              },
              gridLines: {
                display: false
              }
            }
          ]
        },
        legend: {
          display: true
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
        maintainAspectRatio: true,
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
