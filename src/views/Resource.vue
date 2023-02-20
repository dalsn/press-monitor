<template>
  <section class="pt-4 lg:pt-12">
    <div class="pb-5 mb-2 md:mb-32 mx-auto px-2 md:px-10 xl:px-16 py-6 lg:py-1">
      <div class="flex text-xl md:text-2xl text-transpurple mb-6">
        <ArchiveIcon class="md:mt-1 mr-2" /> <strong>Frequently Asked Questions</strong>
        <!-- <span class="pl-2"><small> - Download</small> </span> -->
      </div>
      <hr class="my-8" />
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
      acjafiles: [],
      judgements: [],
      filterAcja: "",
      filterJudg: "",
      current_page_acja: 1,
      current_page_judg: 1,
      page_size: 5,
      host: `${window.host}`
    };
  },
  mounted() {
    this.getFiles();
  },
  computed: {
    sortedAcja() {
      let array = this.acjafiles;
      if (this.filterAcja == "")
        array = this.acjafiles;
      if (this.filterAcja != "") {
        array = array.filter((acja) => {
          let q = this.filterAcja.trim().toLowerCase();
          return acja.filename.toLowerCase().includes(q);
        });
      }
      return array;
    },
    filteredAcja() {
      return this.sortedAcja.filter((row, index) => {
        let start = (this.current_page_acja - 1) * this.page_size;
        let end = this.current_page_acja * this.page_size;
        if(index >= start && index < end) return true;
      });
    },
    totalAcjaPages() {
      return Math.ceil(this.acjafiles.length / this.page_size) ?? 0;
    },
    sortedJudg() {
      let array = this.judgements;
      if (this.filterJudg == "")
        array = this.judgements;
      if (this.filterJudg != "") {
        array = array.filter((judg) => {
          let q = this.filterJudg.trim().toLowerCase();
          return judg.filename.toLowerCase().includes(q);
        });
      }
      return array;
    },
    filteredJudg() {
      return this.sortedJudg.filter((row, index) => {
        let start = (this.current_page_judg - 1) * this.page_size;
        let end = this.current_page_judg * this.page_size;
        if(index >= start && index < end) return true;
      });
    },
    totalJudgPages() {
      return Math.ceil(this.judgements.length / this.page_size) ?? 0;
    }
  },
  methods: {
    getFiles() {
      axios.get(`${window.host}/api/resources`).then(response => {
        if (response.data) {
          this.acjafiles = response.data.acjaFiles;
          this.judgements = response.data.judgementFiles;
        }
      });
    },
    gotoPageAcja(index) {
      if (this.current_page_acja == index || index == "...") return;

      this.current_page_acja = index;
    },
    nextPageAcja() {
      if (this.current_page_acja < this.totalAcjaPages) {
        this.current_page_acja++;
      }
    },
    prevPageAcja() {
      if (this.current_page_acja > 1) {
        this.current_page_acja--;
      }
    },
    gotoPageJudg(index) {
      if (this.current_page_judg == index || index == "...") return;

      this.current_page_judg = index;
    },
    nextPageJudg() {
      if (this.current_page_judg < this.totalJudgPages) {
        this.current_page_judg++;
      }
    },
    prevPageJudg() {
      if (this.current_page_judg > 1) {
        this.current_page_judg--;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-btn {
  @apply text-xs font-semibold flex w-8 h-8 mx-1 p-2 rounded-full items-center justify-center leading-tight relative border border-solid border-transpurple bg-white text-transpurple shadow-lg;
}
.active {
  @apply bg-transpurple text-white;
}
.disabled {
  @apply bg-light border-0 text-white;
  cursor: initial;
}
</style>
