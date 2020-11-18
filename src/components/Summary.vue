<template>
  <section class="h-auto font-serif px-4 py-12 md:p-12">
    <div class="overflow-y-hidden lg:grid lg:grid-cols-2 lg:gap-x-4">
      <!-- <div
        class="py-4 px-6 h-auto border rounded-lg flex flex-col items-center my-4 shadow-md lg:grid lg:grid-cols-6 lg:gap-x-12 lg:items-center"
      > -->
      <div
        class="py-4 px-6 h-auto border rounded-lg flex flex-col items-center my-4 shadow-md items-center lg:col-span-1"
      >
        <div class="text-center">
          <h1 class="text-lg text-transpurple font-bold mb-8">
            Total Court Cases
          </h1>
          <img class="mb-8 mx-auto" src="../assets/svg/staticon.svg" alt="" />
        </div>
        <div class="statistics text-stat">
          <div
            class="stat grid grid-cols-3 items-center row-gap-2 md:gap-x-12 md:text-lg"
          >
            <div class="title text-transpurple">Fraud</div>
            <div class="number justify-self-center text-transgray400">
              724
            </div>
            <svg
              class="svg-content"
              viewBox="0 0 107 5"
              preserveAspectRatio="xMinYMin meet"
            >
              <rect
                x="0.712646"
                y="1.43283"
                width="106"
                height="2.80597"
                rx="1.40299"
                fill="#E7E6EF"
              />
              <rect
                x="0.712646"
                y="0.731354"
                width="90"
                height="4.20896"
                rx="2.10448"
                fill="#8676FF"
              />
            </svg>

            <div class="title text-transpurple">Cybercrime/fraud</div>
            <div class="number justify-self-center text-transgray400">
              370
            </div>
            <svg
              class="svg-content"
              viewBox="0 0 107 5"
              preserveAspectRatio="xMinYMin meet"
            >
              <rect
                x="0.712646"
                y="1.05972"
                width="106"
                height="2.80597"
                rx="1.40298"
                fill="#E7E6EF"
              />
              <rect
                x="0.712646"
                y="0.358215"
                width="46"
                height="4"
                rx="2"
                fill="#FFBA69"
              />
            </svg>

            <div class="title text-transpurple">
              Money laundering
            </div>
            <div class="number justify-self-center text-transgray400">
              151
            </div>
            <svg
              class="svg-content"
              viewBox="0 0 107 5"
              preserveAspectRatio="xMinYMin meet"
            >
              <rect
                x="0.712646"
                y="1.05969"
                width="106"
                height="2.80597"
                rx="1.40298"
                fill="#E7E6EF"
              />
              <rect
                x="0.712646"
                y="0.358215"
                width="20"
                height="4"
                rx="2"
                fill="#27AE60"
              />
            </svg>

            <div class="title text-transpurple">
              Illegal oil dealing
            </div>
            <div class="number justify-self-center text-transgray400">
              116
            </div>
            <svg
              class="svg-content"
              viewBox="0 0 107 5"
              preserveAspectRatio="xMinYMin meet"
            >
              <rect
                x="0.712646"
                y="1.05969"
                width="106"
                height="2.80597"
                rx="1.40298"
                fill="#E7E6EF"
              />
              <rect
                x="0.712646"
                y="0.358215"
                width="13"
                height="4"
                rx="2"
                fill="#56CCF2"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        class="chart px-6 py-4 my-8 lg:my-4 col-span-8 border rounded-lg text-center shadow-md lg:col-span-1"
      >
        <span class="text-lg text-transpurple font-bold mb-8"
          >Cases by State</span
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
