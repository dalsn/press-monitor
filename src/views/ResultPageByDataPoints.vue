<template>
  <div class="font-serif flex flex-wrap">
    <h5
      class="md:hidden text-center mx-auto font-bold text-xl text-transpurple my-8"
    >
      Welcome to our data portal
    </h5>
    <aside class="w-full md:w-1/4 bg-transpurple px-6 py-4 text-white">
      <p>Filter Parameters</p>
      <hr class="my-4">

      <p>State</p>
      <tags-input class="rounded-lg" only-existing-tags="true" add-tags-on-comma="true" add-tags-on-blur="true" typeahead="true" typeahead-style="dropdown" :typeahead-url="url"></tags-input>

      <hr class="my-2">

      <p>Agency</p>
      <tags-input class="rounded-lg" only-existing-tags="true" add-tags-on-comma="true" add-tags-on-blur="true" typeahead="true" typeahead-style="dropdown" :typeahead-url="url"></tags-input>

      <hr class="my-2">

      <p>Crime</p>
      <tags-input class="rounded-lg" only-existing-tags="true" add-tags-on-comma="true" add-tags-on-blur="true" typeahead="true" typeahead-style="dropdown" :typeahead-url="url"></tags-input>

      <hr class="my-2">

      <p>Court</p>
      <tags-input class="rounded-lg" only-existing-tags="true" add-tags-on-comma="true" add-tags-on-blur="true" typeahead="true" typeahead-style="dropdown" :typeahead-url="url"></tags-input>

      <hr class="my-2">

      <p>Judge</p>
      <tags-input class="rounded-lg" only-existing-tags="true" add-tags-on-comma="true" add-tags-on-blur="true" typeahead="true" typeahead-style="dropdown" :typeahead-url="url"></tags-input>

    </aside>

    <main class="bg-hero w-full md:w-3/4 md:pt-2">
      <!-- <h3
        class="hidden md:block text-center font-bold text-3xl text-transpurple mb-8"
      >
        Welcome to our data portal
      </h3> -->

      <div class="hidden md:flex items-center h-10 px-4">
        <h2 class="text-lg font-medium truncate mr-5">Data Portal</h2>
        <a href="" class="ml-auto flex text-theme-1 dark:text-theme-10">
          <RefreshCcwIcon class="mr-3" /> Reload Data
        </a>
      </div>

      <div class="entry-points pt-4 w-full bg-gray-200 md:my-4 mb-4 px-4">
        <p class="mb-4">Filters</p>
        <div
          class="flex flex-wrap"
        >
          <StatePill
            :class="{ 'bg-pill': !selectedLocationCategory.includes(state) }"
            class="mr-4 bg-selected rounded-full mb-4"
            v-for="(state, i) in mockState"
            :key="i"
            ><span>{{ state }}</span></StatePill
          >
        </div>
      </div>

      <section class="h-auto md:my-4">

        <div class="grid grid-cols-12 gap-6 mt-5 px-6 mb-4">
          <div class="col-span-12 sm:col-span-6 xl:col-span-3">
            <div class="report-box zoom-in">
              <div class="box p-5">
                <div class="flex">
                  <ShoppingCartIcon class="report-box__icon text-theme-10" />
                  <div class="ml-auto">
                    <Tippy
                      tag="div"
                      class="report-box__indicator bg-theme-9 cursor-pointer"
                      content="33% Higher than last month"
                    >
                      33% <ChevronUpIcon class="w-4 h-4" />
                    </Tippy>
                  </div>
                </div>
                <div class="text-3xl font-bold leading-8 mt-6">4.510</div>
                <div class="text-base text-gray-600 mt-1">Item Sales</div>
              </div>
            </div>
          </div>
          <div class="col-span-12 sm:col-span-6 xl:col-span-3">
            <div class="report-box zoom-in">
              <div class="box p-5">
                <div class="flex">
                  <CreditCardIcon class="report-box__icon text-theme-11" />
                  <div class="ml-auto">
                    <Tippy
                      tag="div"
                      class="report-box__indicator bg-theme-6 cursor-pointer"
                      content="2% Lower than last month"
                    >
                      2% <ChevronDownIcon class="w-4 h-4" />
                    </Tippy>
                  </div>
                </div>
                <div class="text-3xl font-bold leading-8 mt-6">3.521</div>
                <div class="text-base text-gray-600 mt-1">New Orders</div>
              </div>
            </div>
          </div>
          <div class="col-span-12 sm:col-span-6 xl:col-span-3">
            <div class="report-box zoom-in">
              <div class="box p-5">
                <div class="flex">
                  <MonitorIcon class="report-box__icon text-theme-12" />
                  <div class="ml-auto">
                    <Tippy
                      tag="div"
                      class="report-box__indicator bg-theme-9 cursor-pointer"
                      content="12% Higher than last month"
                    >
                      12% <ChevronUpIcon class="w-4 h-4" />
                    </Tippy>
                  </div>
                </div>
                <div class="text-3xl font-bold leading-8 mt-6">2.145</div>
                <div class="text-base text-gray-600 mt-1">Total Products</div>
              </div>
            </div>
          </div>
          <div class="col-span-12 sm:col-span-6 xl:col-span-3">
            <div class="report-box zoom-in">
              <div class="box p-5">
                <div class="flex">
                  <UserIcon class="report-box__icon text-theme-9" />
                  <div class="ml-auto">
                    <Tippy
                      tag="div"
                      class="report-box__indicator bg-theme-9 cursor-pointer"
                      content="22% Higher than last month"
                    >
                      22% <ChevronUpIcon class="w-4 h-4" />
                    </Tippy>
                  </div>
                </div>
                <div class="text-3xl font-bold leading-8 mt-6">152.000</div>
                <div class="text-base text-gray-600 mt-1">Unique Visitor</div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex flex-col items-center lg:px-6 px-2">
          <div class="w-full mb-4 max-w-full bg-white rounded-lg shadow-md">
            <div class="flex flex-col items-center p-4 border-b border-gray-200 dark:border-dark-5">
              <h2 class="font-medium text-base mr-auto">Vertical Bar Chart</h2>
            </div>
            <div class="py-4 px-4 lg:px-6">
              <BarChart :chartdata="chartdata" :options="options"></BarChart>
            </div>
          </div>
        </div>
        <div class="w-full flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 items-center gap-4 lg:px-6 px-2">
          <div class="w-full mb-4 max-w-full bg-white rounded-lg shadow-md">
            <div class="flex flex-col items-center p-4 border-b border-gray-200 dark:border-dark-5">
              <h2 class="font-medium text-base mr-auto">Vertical Bar Chart</h2>
            </div>
            <div class="py-4 px-4 lg:px-6">
              <BarChart :chartdata="chartdata" :options="options"></BarChart>
            </div>
          </div>
          <div class="w-full mb-4 max-w-full bg-white rounded-lg shadow-md">
            <div class="flex flex-col items-center p-4 border-b border-gray-200 dark:border-dark-5">
              <h2 class="font-medium text-base mr-auto">Vertical Bar Chart</h2>
            </div>
            <div class="py-4 px-4 lg:px-6">
              <BarChart :chartdata="chartdata" :options="options"></BarChart>
            </div>
          </div>
          <div class="w-full mb-4 max-w-full bg-white rounded-lg shadow-md">
            <div class="flex flex-col items-center p-4 border-b border-gray-200 dark:border-dark-5">
              <h2 class="font-medium text-base mr-auto">Vertical Bar Chart</h2>
            </div>
            <div class="py-4 px-4 lg:px-6">
              <BarChart :chartdata="chartdata" :options="options"></BarChart>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer className="bg-white" />
  </div>
</template>

<script>

import tableData from "@/data/mockData";
import BarChart from "@/components/Charts/BarChart";
import TagsInput from '@/components/UIElements/TagsInput';
import StatePill from "@/components/UIElements/StatePill";
import Footer from "@/components/partials/Footer";

export default {
  name: "ResultPageByDataPoints",
  created() {
    this.gridData = tableData;
  },
  mounted() {
    this.url = "http://example.com"
  },
  components: { BarChart, TagsInput, StatePill, Footer },
  data: () => {
    return {
      activeParameter: "location",
      selectedLocationCategory: [],
      selectedEntityCategory: [],
      selectedPersonaCategory: [],
      selectedCrimeCategory: [],
      selectedAgencyCategory: [],
      gridData: [],
      url: "http://example.com",
      mockState: ["Lagos", "Kogi", "Ekiti", "Abia", "Kaduna", "Kano", "Adamawa", "Bauchi"],
      mockCourt: [
        "Federal High Court, Awka, Anambra",
        "Federal High Court, Abuja, FCT",
        "Federal High Court, Barnawa Kaduna"
      ],
      mockJudge: [
        "Hon. Justice I.B. Gafai",
        "Hon. Justice U. Abiola",
        "Hon. Justice M.A Olayinka"
      ],
      mockCrime: ["Money Laundering", "Fraud", "Bribery"],
      mockAgency: ["ICPC", "EFCC"],
      dropdownParameters: [
        {
          id: "location",
          title: "Location",
          dropMenu: "Select State"
        },
        {
          id: "entity",
          title: "Entity",
          dropMenu: "Court"
        },
        {
          id: "persona",
          title: "Persona",
          dropMenu: "Judges"
        },
        {
          id: "crime",
          title: "Crime",
          dropMenu: "Select type"
        },
        {
          id: "enforcement",
          title: "Enforcement",
          dropMenu: "Agency"
        }
      ],
      columns: [
        "Accused Person/Defendent",
        "Alleged Offence",
        "Presiding Judge",
        "Court",
        "Agency",
        "Date of sittings"
      ],
      chartdata: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [{
            label: "Html Template",
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            data: [0, 200, 250, 200, 500, 450, 850, 1050],
            backgroundColor: "#3160D8"
        }, {
            label: "VueJs Template",
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            data: [0, 300, 400, 560, 320, 600, 720, 850],
            backgroundColor: "#BCBABA"
        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    fontSize: "12",
                    fontColor: "#777777"
                },
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
                ticks: {
                    fontSize: "12",
                    fontColor: "#777777",
                    callback: function(value) {
                        return "$" + value;
                    }
                },
                gridLines: {
                    color: "#D8D8D8",
                    zeroLineColor: "#D8D8D8",
                    borderDash: [2, 2],
                    zeroLineBorderDash: [2, 2],
                    drawBorder: false
                }
            }]
        }
    }
    };
  },
  methods: {
    addToLocation(value) {
      !this.selectedLocationCategory.includes(value)
        ? this.selectedLocationCategory.push(value)
        : "";
    },
    addToEntity(value) {
      !this.selectedEntityCategory.includes(value)
        ? this.selectedEntityCategory.push(value)
        : "";
    },
    addToPersona(value) {
      !this.selectedPersonaCategory.includes(value)
        ? this.selectedPersonaCategory.push(value)
        : "";
    },
    addToCrime(value) {
      !this.selectedCrimeCategory.includes(value)
        ? this.selectedCrimeCategory.push(value)
        : "";
    },
    addToAgency(value) {
      !this.selectedAgencyCategory.includes(value)
        ? this.selectedAgencyCategory.push(value)
        : "";
    },
    removeItemFromSelectedCategory(type, value) {
      if (type === "location") {
        const indexToRemove = this.selectedLocationCategory.indexOf(value);
        console.log(indexToRemove);
        this.selectedLocationCategory.splice(indexToRemove, 1);
      }
      if (type === "entity") {
        const indexToRemove = this.selectedEntityCategory.indexOf(value);
        console.log(indexToRemove);
        this.selectedEntityCategory.splice(indexToRemove, 1);
      }
      if (type === "persona") {
        const indexToRemove = this.selectedPersonaCategory.indexOf(value);
        console.log(indexToRemove);
        this.selectedPersonaCategory.splice(indexToRemove, 1);
      }
      if (type === "crime") {
        const indexToRemove = this.selectedCrimeCategory.indexOf(value);
        console.log(indexToRemove);
        this.selectedCrimeCategory.splice(indexToRemove, 1);
      }
      if (type === "agency") {
        const indexToRemove = this.selectedAgencyCategory.indexOf(value);
        console.log(indexToRemove);
        this.selectedAgencyCategory.splice(indexToRemove, 1);
      }
    }
  },
  computed: {
    filteredData: function() {
      let filterKey = this.filterQuery;
      let data = this.gridData;
      if (filterKey) {
        data.sort((a, b) => {
          a = a[filterKey];
          b = b[filterKey];
          return a === b ? 0 : a > b ? 1 : -1;
        });
      }
      return data;
    }
  }
};
</script>

<style scoped></style>
