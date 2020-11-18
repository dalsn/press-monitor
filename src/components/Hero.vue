<template>
  <header class="h-auto font-serif ">
    <div class="md:pb-12 md:pt-59 md:px-12 bg-hero relative overflow-y-hidden">
      <div class="text p-3 pt-10 md:pt-8 lg:pt-5 text-left">
        <h1
          class="font-bold md:leading-58 text-transpurple text-2xl md:text-5xl"
        >
          Find Information on <br>
          Corruption Cases in Nigeria
        </h1>
        <p class="text-17 leading-28  text-transgray200 pt-5">
          This is a central database to find details of ongoing <br class="hidden md:block"> and decided
          corruption cases in the country with <br class="hidden md:block"> simplified infographics.
        </p>
      </div>
      <div class="form-group md:w-3/5 xl:w-1/2 h-50 rounded-lg mt-10 md:mt-66 p-3">
        <form action="">
          <div class="h-full flex bg-white rounded-lg">
            <label for="search-text" class="flex w-1/2 items-center border-r ml-2">
              <div class="svg-container w-2 p-2">
                <svg viewBox="0 0 24 24" class="svg-content" preserveAspectRatio="xMinYMin meet">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.1355 23.2847L19.0688 17.9977C20.4941 16.1059 21.3518 13.7257 21.3518 11.1389C21.3518 4.997 16.5627 0 10.6766 0C4.78908 0 0 4.997 0 11.1389C0 17.2795 4.78908 22.2765 10.6766 22.2765C12.9829 22.2765 15.1155 21.4996 16.8637 20.1973L21.9783 25.5349C22.2765 25.8454 22.6664 26 23.0576 26C23.4475 26 23.8373 25.8454 24.1355 25.5349C24.7306 24.9139 24.7306 23.9071 24.1355 23.2847ZM3.0491 11.139C3.0491 6.75205 6.47162 3.18315 10.6766 3.18315C14.8816 3.18315 18.3014 6.75205 18.3014 11.139C18.3014 15.5259 14.8816 19.0934 10.6766 19.0934C6.47162 19.0934 3.0491 15.5259 3.0491 11.139Z"
                    fill="#BFC5D2"
                  />
                </svg>
              </div>
              <input id="search-text" class="h-12 focus:outline-none pl-1 md:pl-3 w-full" type="text" placeholder="Search by case name, crime etc"/>
            </label>
            <label for="search-dropdown" class="flex w-1/2 items-center ml-2">
              <div class="svg-container w-2 p-2">
                <svg viewBox="0 0 24 24" class="svg-content" preserveAspectRatio="xMinYMin meet">
                  <path fill="none" d="M0 0h24v24H0z"/>
                  <path
                    d="M2 5l7-3 6 3 6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 0 1-.697-.46V5zm14 14.395l4-1.714V5.033l-4 1.714v12.648zm-2-.131V6.736l-4-2v12.528l4 2zm-6-2.011V4.605L4 6.319v12.648l4-1.714z"
                    fill="#BFC5D2"
                  />
                </svg>
              </div>
              <select id="search-dropdown" class="h-12 w-full mx-2 focus:outline-none">
                <option value="">Abia</option>
                <option value="">Adamawa</option>
              </select>
            </label>
            <div class="hidden md:flex">
              <button type="submit" class=" text-white rounded-searchbutton bg-transpurple leading-24 focus:outline-none text-xl font-transsemibold w-full h-full">
                Search
              </button>
            </div>
          </div>
          <div class="my-3 h-full md:hidden">
            <button type="submit" class="text-white rounded-lg bg-transpurple focus:outline-none font-transsemibold w-full h-10">
              Search
            </button>
          </div>
        </form>
      </div>
      <!-- <div class="svg-container"> -->
        <img class="absolute md:w-2/5 right-0 bottom-0" src="../assets/svg/heroill.svg" alt=""/>
      <!-- </div> -->
    </div>
    <div class="pb-12 h-auto bg-white  pt-69 pl-74 pr-78s  pr-12">
      <div class="grid grid-cols-12 gap-5">
        <div
          class="card-left pb-62 h-auto shadow-2xl border rounded-lg pt-41 pl-45 pr-45 col-span-4 flex flex-col items-center"
        >
          <h1 class="text-lg text-transpurple font-bold leading-25 mb-25">
            Total Court Cases
          </h1>

          <img class="mb-644" src="../assets/svg/staticon.svg" alt="" />

          <div class="statistics text-stat">
            <div
              class="stat grid grid-cols-3 justify-between row-gap-2 items-center"
            >
              <div class="title  leading-17 text-transpurple">Fraud</div>
              <div class="number justify-self-center text-transgray400">
                724
              </div>
              <svg
                width="107"
                height="5"
                viewBox="0 0 107 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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

              <div class="title  leading-17 text-transpurple">
                Cybercrime/fraud
              </div>
              <div class="number text-transgray400 justify-self-center">
                370
              </div>
              <svg
                width="107"
                height="5"
                viewBox="0 0 107 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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

              <div class="title  leading-17 text-transpurple">
                Money laundering
              </div>
              <div class="number text-transgray400 justify-self-center">
                151
              </div>
              <svg
                width="107"
                height="5"
                viewBox="0 0 107 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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

              <div class="title  leading-17 text-transpurple">
                Illegal oil dealing
              </div>
              <div class="number text-transgray400 justify-self-center">
                116
              </div>
              <svg
                width="107"
                height="5"
                viewBox="0 0 107 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
          class="chart col-span-8 border shadow-xl rounded-lg pl-10 pr-10 pt-5"
        >
          <span class="text-sm leading-25 text-transpurple font-semibold pb-5 "
            >Case by state</span
          >
          <!--          <img class="pt-8 pl-5" src="../assets/svg/herochart.svg" alt="" />-->
          <div class="chart-wrapper mt-5">
            <bar-chart :chartdata="chartdata" :options="options"></bar-chart>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import BarChart from "./Charts/BarChart";
export default {
  name: "Hero",
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
header {
  form {
    input[type="text"] {
      &:focus {
        @apply outline-none;
        //border: 3px solid #070241;
      }

      &::placeholder {
        color: #b2b8c4;
      }
    }

    select {
      &:focus {
        @apply outline-none;
        //border: 3px solid #070241;
      }
    }
  }
}
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
