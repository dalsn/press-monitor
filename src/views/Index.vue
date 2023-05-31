<template>
  <div class="">
    <Hero />
    <Summary />
    <section class="bg-hero py-8">
      <div class="px-4 mx-auto lg:px-12 mb-16">
        <h2 class="text-center text-3xl font-semibold text-transpurple mb-8">
          Latest Incidents
        </h2>
        <IncidentsList :list="incidents" />
        <router-link
          to="/incidents"
          class="flex justify-center btn sm:mx-auto mt-8 border border-transpurple xl:w-1/4 sm:w-1/3 w-full p-3 rounded-full hover:shadow-lg disabled:opacity-75"
        >
          View All Incidents
        </router-link>
      </div>
    </section>
    <Footer className="bg-white" />
  </div>
</template>

<script>
// @ is an alias to /src

import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import IncidentsList from "@/components/IncidentsList";
// import CaseCard from "@/components/UIElements/CaseCard";
import Footer from "@/components/partials/Footer";
import axios from "axios";

export default {
  name: "Index",
  components: { Hero, Summary, IncidentsList, Footer },
  data() {
    return {
      incidents: [],
      index: 0
    };
  },
  mounted() {
    this.getRecentIncidents();
  },
  methods: {
    gotoIncidents() {
      this.$router.push("/incidents");
    },
    getRecentIncidents() {
      axios.get(`${window.host}/api/press-monitor/recent-incidents`).then(response => {
        if (response.data) {
          this.incidents = response.data.arrests;
        }
      });
    }
  }
};
</script>
