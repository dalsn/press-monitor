<template>
  <div class="">
    <Hero />
    <Summary />
    <section class="bg-hero py-8">
      <div class="px-4 mx-auto lg:px-12 lg:w-3/5 mb-16">
        <h2 class="text-center text-3xl font-semibold text-transpurple mb-8">
          Recent Cases
        </h2>
        <CaseSummaryCard :caseFile="cases[index]" />

        <div class="flex md:w-1/3 mx-auto mt-6 justify-between">
          <button
            class="btn bg-white text-transpurple shadow-lg px-2 border items-center"
            @click="changeCase('prev')"
          >
            <ChevronLeftIcon class="w-8 h-8" />
          </button>
          <button
            class="btn bg-white text-transpurple shadow-lg px-2 border items-center"
            @click="changeCase('next')"
          >
            <ChevronRightIcon class="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
    <section class="flex flex-col mt-8 py-16">
      <div
        class="px-2 mx-auto md:px-10 xl:px-16 md:grid md:grid-cols-2 xl:grid-cols-3 lg:gap-6 gap-4"
      >
        <CaseCard
          v-for="(c, key) in cases"
          :caseFile="c"
          :key="key"
          :className="{ active: index == key }"
        />
      </div>
      <button
        class="btn mx-4 md:mx-auto mt-12 border border-transpurple xl:w-1/6 md:w-1/3 p-3 rounded-full hover:shadow-xl"
        @click="gotoCases"
      >
        View All Cases
      </button>
    </section>
    <Footer className="bg-hero" />
  </div>
</template>

<script>
// @ is an alias to /src

import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import CaseSummaryCard from "@/components/UIElements/CaseSummaryCard";
import CaseCard from "@/components/UIElements/CaseCard";
import Footer from "@/components/partials/Footer";
import axios from "axios";

export default {
  name: "Index",
  components: { Hero, Summary, CaseSummaryCard, CaseCard, Footer },
  data() {
    return {
      cases: [],
      index: 0
    };
  },
  mounted() {
    this.getRecentCases();
  },
  methods: {
    gotoCases() {
      this.$router.push("/cases");
    },
    getRecentCases() {
      axios.get(`${window.host}/api/recent-cases`).then(response => {
        if (response.data) {
          this.cases = response.data.cases;
          this.startTimer();
          // if (this.cases.length > 0) {
          //   this.active_case = this.cases[this.index];
          // }
        }
      });
    },
    changeCase(direction) {
      if (this.cases.length < 1) return;

      switch (direction) {
        case "prev":
          this.index--;
          if (this.index < 0) {
            this.index = this.cases.length - 1;
          }
          break;
        case "next":
        default:
          this.index++;
          if (this.index > this.cases.length - 1) {
            this.index = 0;
          }
      }
      this.stopTimer();
      this.startTimer();
    },
    startTimer() {
      this.timer = setTimeout(() => {
        this.changeCase("next");
      }, 20000);
    },
    stopTimer() {
      clearTimeout(this.timer);
    }
  }
};
</script>
