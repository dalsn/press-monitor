<template>
  <section class="pt-4 lg:pt-12">
    <div class="pb-5 mb-2 md:mb-16 mx-auto py-6 lg:py-1 px-2 md:px-10 xl:px-16">
      <p class="flex text-xl md:text-2xl text-transpurple mb-2 md:mb-4">
        <CalendarIcon class="md:mt-1 mr-2" />
        <span>Upcoming Corruption Cases</span>
      </p>
      <div class="pt-5 pb-2">
        <div class="mx-auto">
          <form method="GET" class="mb-4" @submit.prevent="search()">
            <div
              class="h-full flex bg-white rounded-lg justify-between items-center shadow-md"
            >
              <label
                for="search-text"
                class="flex w-2/3 md:w-3/4 items-center ml-2"
              >
                <input
                  id="search-text"
                  class="h-12 focus:outline-none pl-1 w-full"
                  type="text"
                  placeholder="Search database"
                  v-model="q"
                />
              </label>
              <div class="w-1/3 md:w-1/4 px-2">
                <button
                  type="submit"
                  class="text-center md:px-4 text-white rounded md:font-semibold bg-transpurple focus:outline-none text-sm w-full py-2"
                >
                  SEARCH
                </button>
              </div>
            </div>
          </form>
          <div class="flex flex-col lg:grid grid-cols-3 gap-4 mb-4">
            <div
              class="h-full flex bg-white rounded-lg justify-between items-center shadow-md"
            >
              <label
                for="filter-date"
                class="flex w-full items-center mx-2 px-2"
              >
                <input
                  id="filter-date"
                  class="h-12 focus:outline-none w-full"
                  type="text"
                  placeholder="Filter list"
                  v-model="date"
                />
              </label>
            </div>
            <div class="h-full flex bg-white rounded-lg shadow-md">
              <label for="search-dropdown" class="flex w-full items-center">
                <select
                  id="search-dropdown"
                  class="h-12 w-full mx-2 focus:outline-none"
                  placeholder="Filter by state"
                  v-model="state"
                  @change="filter('state')"
                >
                  <option value="">Filter by state</option>
                  <option
                    :value="state.name"
                    v-for="(state, key) in states"
                    :key="key"
                    >{{ state.name }}</option
                  >
                </select>
              </label>
            </div>
            <div class="h-full flex bg-white rounded-lg shadow-md">
              <label for="search-dropdown" class="flex w-full items-center">
                <select
                  id="search-dropdown"
                  class="h-12 w-full mx-2 focus:outline-none"
                  placeholder="Filter by state"
                  v-model="agency"
                  @change="filter('agency')"
                >
                  <option value="">Filter by agency</option>
                  <option
                    :value="agency.shortname"
                    v-for="(agency, key) in agencies"
                    :key="key"
                    >{{ agency.name }}</option
                  >
                </select>
              </label>
            </div>
          </div>
          <!-- <div class="h-full flex bg-white rounded-lg justify-between items-center shadow-md">
                        <label
                            for="search-text"
                            class="flex w-full items-center mx-2 px-2"
                        >
                            <input
                                id="search-text"
                                class="h-12 focus:outline-none w-full"
                                type="text"
                                placeholder="Filter by name"
                            />
                        </label>
                    </div> -->
        </div>
      </div>
      <div class="pt-3" v-show="temp_list.length > 0">
        <div class="w-full">
          <table class="table w-full">
            <thead class="bg-light">
              <tr class="text-left">
                <th width="25%">Accused Person/Defendant</th>
                <th width="20%">Alleged Offence</th>
                <th width="30%">Presiding Judge and Designated Court</th>
                <th width="10%">Prosecuting Agency</th>
                <th width="15%">Date of Sitting</th>
              </tr>
            </thead>
            <tbody>
              <tr class="text-md" v-for="(c, key) in temp_list" :key="key">
                <td class="bg-hero lg:hidden p-4 text-md">
                  {{ c.lead_defendant.name }}
                  <span v-show="c.lead_defendant.designation"
                    >({{ c.lead_defendant.designation }})</span
                  >
                  {{ c.defendants_desc }}
                </td>
                <td class="hidden lg:table-cell">
                  {{ c.lead_defendant.name }}
                  <span v-show="c.lead_defendant.designation"
                    >({{ c.lead_defendant.designation }})</span
                  >
                  {{ c.defendants_desc }}
                </td>
                <td data-th="Alleged Offence">
                  {{ c.amount }}
                  <br v-if="c.amount" />
                  {{ c.type }}
                </td>
                <td data-th="Presiding Judge and Designated Court">
                  {{ c.judge.name }}, {{ c.court.name }},
                  {{ c.court.state.name }}
                </td>
                <td data-th="Prosecuting Agency">{{ c.agency.shortname }}</td>
                <td data-th="Date of Sitting">{{ c.update.next_sitting }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div
        class="h-64 flex items-center justify-center"
        v-if="temp_list.length < 1"
      >
        <h4 class="text-2xl">{{ message }}</h4>
      </div>
      <div class="mt-4 algolia flex justify-end">
        <img
          alt="Search by Algolia"
          src="@/assets/images/vectors/search-by-algolia.svg"
          class="h-5"
        />
      </div>
    </div>
    <Footer className="bg-hero" />
  </section>
</template>

<script>
import Footer from "../components/partials/Footer";
import axios from "axios";

export default {
  components: {
    Footer
  },
  data() {
    return {
      cause_list: [],
      temp_list: [],
      isLoading: true,
      fullPage: false,
      message: "Loading...",
      q: "",
      filterQuery: "",
      date: "",
      agency: "",
      state: "",
      states: [],
      agencies: [],
      searchAction: false
    };
  },
  created() {
    this.getStates();
    this.getAgencies();
    this.getAll();
  },
  watch: {
    date() {
      this.filter("date");
    },
    filterQuery() {
      this.filter();
    }
  },
  methods: {
    getAll() {
      this.isLoading = true;
      axios
        .get(window.host + "/api/cause-list")
        .then(response => {
          if (response.data) {
            this.cause_list = response.data;
          }
          this.temp_list = this.cause_list;
          if (this.temp_list.length < 1)
            this.message = "No upcoming cases recorded";
          this.isLoading = false;
          this.searchAction = false;
        })
        .catch(e => {
          console.error(e);
          this.isLoading = false;
        });
    },
    search() {
      this.clearFilters();

      if (this.q.trim().length < 1) {
        this.reset();
        this.getAll();
        return;
      }

      this.isLoading = true;
      axios
        .get(window.host + "/api/cause-list/search?q=" + this.q)
        .then(response => {
          this.cause_list = [];
          if (response.data) this.cause_list = response.data;
          this.temp_list = this.cause_list;

          if (this.temp_list.length < 1) this.message = "No cases found!";
          this.isLoading = false;
          this.searchAction = true;
        })
        .catch(e => {
          console.error(e);
          this.isLoading = false;
        });
    },

    filter(field = "") {
      let q = "";
      let vm = this;
      switch (field) {
        case "state":
          q = vm.state.trim().toLowerCase();
          this.temp_list = this.cause_list.filter(function(item) {
            return item.court.state.name.toLowerCase().includes(q);
          });
          break;
        case "agency":
          q = vm.agency.trim().toLowerCase();
          this.temp_list = this.cause_list.filter(function(item) {
            return (
              item.agency.shortname.toLowerCase().includes(q) ||
              item.agency.name.toLowerCase().includes(q)
            );
          });
          break;
        case "date":
          q = vm.date.trim().toLowerCase();
          this.temp_list = this.cause_list.filter(function(item) {
            return item.update.next_sitting.toLowerCase().includes(q);
          });
          break;
        default:
          q = vm.filterQuery.trim().toLowerCase();
          this.temp_list = this.cause_list.filter(function(item) {
            return (
              item.update.next_sitting.toLowerCase().includes(q) ||
              item.agency.shortname.toLowerCase().includes(q) ||
              item.agency.name.toLowerCase().includes(q) ||
              item.court.state.name.toLowerCase().includes(q) ||
              item.lead_defendant.name.toLowerCase().includes(q) ||
              item.judge.name.toLowerCase().includes(q) ||
              item.type.toLowerCase().includes(q)
            );
          });
      }
      if (this.temp_list.length < 1) this.message = "No record found!";
    },

    getStates() {
      axios
        .get(window.host + "/api/states")
        .then(response => {
          if (response.data) {
            this.states = response.data;
          }
        })
        .catch(e => {
          console.error(e);
        });
    },

    getAgencies() {
      axios
        .get(window.host + "/api/agencies")
        .then(response => {
          if (response.data) {
            this.agencies = response.data;
          }
        })
        .catch(e => {
          console.error(e);
        });
    },

    reset() {
      this.cause_list = [];
      this.temp_list = [];
    },

    clearFilters() {
      this.state = "";
      this.agency = "";
      this.date = "";
    }
  }
};
</script>
