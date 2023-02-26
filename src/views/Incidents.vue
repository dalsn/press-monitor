<template>
  <section class="pt-4 lg:pt-12">
    <div class="pb-5 mb-2 md:mb-16 mx-auto py-6 lg:py-1 px-2 md:px-10 xl:px-16">
      <p class="flex text-xl md:text-2xl text-transpurple mb-2 md:mb-4">
        <CalendarIcon class="md:mt-1 mr-2" />
        <span>Incidents</span>
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
                  v-model="arresting_agency"
                  @change="filter('agency')"
                >
                  <option value="">Filter by arresting agency</option>
                  <option
                    :value="agency.shortname"
                    v-for="(agency, key) in agencies"
                    :key="key"
                    >{{ agency.name }}</option
                  >
                </select>
              </label>
            </div>
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
                  placeholder="Filter by date"
                  v-model="date"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <IncidentsList :list="temp_list" />
      <div
        class="h-64 flex items-center justify-center"
        v-if="isLoading"
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
import IncidentsList from "../components/IncidentsList";
import axios from "axios";

export default {
  components: {
    Footer,
    IncidentsList,
  },
  data() {
    return {
      incidents: [],
      temp_list: [],
      isLoading: true,
      fullPage: false,
      message: "Loading...",
      q: "",
      filterQuery: "",
      date: "",
      arresting_agency: "",
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
      this.message = "Loading...";
      axios
        .get(window.host + "/api/press-monitor/incidents")
        .then(response => {
          if (response.data) {
            this.incidents = response.data.arrests;
          }
          console.log("Incidents: ", this.incidents)
          this.temp_list = this.incidents;
          if (this.temp_list.length < 1)
            this.message = "No incidents recorded";
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

      this.message = "Loading...";
      this.isLoading = true;
      axios
        .get(window.host + "/api/press-monitor/incidents/search?q=" + this.q)
        .then(response => {
          this.incidents = [];
          if (response.data) this.incidents = response.data.arrests;
          this.temp_list = this.incidents;
          this.isLoading = false;
          this.searchAction = true;

          this.message = "No incidents found!";
        })
        .catch(e => {
          console.error(e);
          this.message = "An error was encountered.";
          this.isLoading = false;
        });
    },

    filter(field = "") {
      let q = "";
      let vm = this;
      switch (field) {
        case "state":
          q = vm.state.trim().toLowerCase();
          this.temp_list = this.incidents.filter(function(item) {
            return item.state.name.toLowerCase().includes(q);
          });
          break;
        case "agency":
          q = vm.arresting_agency.trim().toLowerCase();
          this.temp_list = this.incidents.filter(function(item) {
            return (
              item.arresting_agency.shortname.toLowerCase().includes(q) ||
              item.arresting_agency.name.toLowerCase().includes(q)
            );
          });
          break;
        case "date":
          q = vm.date.trim().toLowerCase();
          this.temp_list = this.incidents.filter(function(item) {
            return item.date_of_arrest.toLowerCase().includes(q);
          });
          break;
        default:
          q = vm.filterQuery.trim().toLowerCase();
          this.temp_list = this.incidents.filter(function(item) {
            return (
              item.date_of_arrest.toLowerCase().includes(q) ||
              item.arresting_agency.shortname.toLowerCase().includes(q) ||
              item.arresting_agency.name.toLowerCase().includes(q) ||
              item.state.name.toLowerCase().includes(q) ||
              item.party.name.toLowerCase().includes(q)
            );
          });
      }
      if (this.temp_list.length < 1) this.message = "No incidents found!";
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
        .get(window.host + "/api/press-monitor/arresting-agencies")
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
      this.incidents = [];
      this.temp_list = [];
    },

    clearFilters() {
      this.state = "";
      this.arresting_agency = "";
      this.date = "";
    }
  }
};
</script>
