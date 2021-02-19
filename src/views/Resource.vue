<template>
  <section class="pt-4 lg:pt-12">
    <div class="pb-5 mb-2 md:mb-16 mx-auto px-2 md:px-10 xl:px-16 py-6 lg:py-1">
      <div class="flex text-xl md:text-2xl text-transpurple mb-6">
        <ArchiveIcon class="md:mt-1 mr-2" /> <strong>Archives</strong>
        <span class="pl-2"><small> - Download</small> </span>
      </div>
      <div class="py-2">
        <p class="text-lg mb-8"><strong>Corruption Cases Database</strong></p>
        <a
          class="py-3 px-8 shadow-md rounded-lg hover:shadow-lg hover:bg-white hover:text-transpurple bg-transpurple text-white"
          :href="host + '/resources/database'"
          >Download CSV</a
        >
      </div>
      <hr class="my-8" />
      <div class="py-2" id="acja-table">
        <p class="text-lg text-transpurple font-semibold pb-2">
          <strong>Administration of Criminal Justice Act/Laws</strong>
        </p>
        <div v-if="acjafiles.length > 0">
          <div class="pt-5 pb-2">
            <div class="mx-auto">
              <div class="flex flex-col mb-4">
                <label>Search</label>
                <div
                  class="h-full flex bg-white rounded-lg justify-between items-center shadow-md lg:w-1/3"
                >
                  <label
                    for="filterAcja"
                    class="flex w-full items-center mx-2 px-2"
                  >
                    <input
                      v-model="filterAcja"
                      id="filterAcja"
                      class="h-12 focus:outline-none w-full"
                      type="text"
                      placeholder="Filter list"
                      @input="current_page_acja = 1"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <table class="table w-full" id="acja">
            <thead class="bg-light">
              <tr class="text-left">
                <th>Document</th>
                <th width="20%">File size</th>
                <th width="20%"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(doc, key) in filteredAcja" :key="key">
                <td class="bg-hero">{{ doc.filename }}</td>
                <td data-th="File size">{{ doc.size }}</td>
                <td data-th="Action">
                  <a
                    class="flex flex-row"
                    target="_blank"
                    rel="noreferrer noopener"
                    :href="doc.url"
                    download
                  >
                    <DownloadCloudIcon class="mr-3" /> Download
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- <div id="pagination"></div> -->
          <div v-show="totalAcjaPages > 1" class="py-6">
            <nav class="block">
              <ul class="flex justify-end pl-0 list-none flex-wrap">
                <li>
                  <button @click="prevPageAcja" class="first:ml-0 nav-btn" :class="{'disabled': current_page_acja == 1}">
                    Prev
                  </button>
                </li>
                <!-- <li v-for="(index) in totalAcjaPages" :key="index">
                  <button @click="gotoPageAcja(index)" class="first:ml-0 nav-btn" :class="{'active': current_page_acja == index}">
                    {{ index }}
                  </button>
                </li> -->
                <li v-for="(index) in paginate(current_page_acja, totalAcjaPages)" :key="index">
                  <button @click="gotoPageAcja(index)" class="first:ml-0 nav-btn" :class="{'active': current_page_acja == index, 'disabled': index == '...'}">
                    {{ index }}
                  </button>
                </li>
                <li>
                  <button @click="nextPageAcja" class="first:ml-0 nav-btn" :class="{'disabled': current_page_acja >= totalAcjaPages}">
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div v-else class="">
          <h6>No files available for download</h6>
        </div>
      </div>
      <!-- <div class="section pt-3 no-records">
                <h4>No records Available</h4>
            </div> -->
      <hr class="my-8" />
      <div class="py-2" id="judg-table">
        <p class="text-lg text-transpurple font-semibold pb-2">
          <strong>Judgments</strong>
        </p>
        <div v-if="judgements.length > 0">
          <div class="pt-5 pb-2">
            <div class="mx-auto">
              <div class="flex flex-col mb-4">
                <label>Search</label>
                <div
                  class="h-full flex bg-white rounded-lg justify-between items-center shadow-md lg:w-1/3"
                >
                  <label
                    for="filterJudg"
                    class="flex w-full items-center mx-2 px-2"
                  >
                    <input
                      v-model="filterJudg"
                      id="filterJudg"
                      class="h-12 focus:outline-none w-full"
                      type="text"
                      placeholder="Filter list"
                      @input="current_page_judg = 1"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <table class="table w-full" id="judg">
            <thead class="bg-light">
              <tr class="text-left">
                <th>Document</th>
                <th width="20%">File size</th>
                <th width="20%"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(doc, key) in filteredJudg" :key="key">
                <td class="bg-hero">{{ doc.filename }}</td>
                <td data-th="File size">{{ doc.size }}</td>
                <td data-th="Action">
                  <a
                    class="flex flex-row"
                    target="_blank"
                    rel="noreferrer noopener"
                    :href="doc.url"
                    download
                  >
                    <DownloadCloudIcon class="mr-3" /> Download
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- <div id="pagination"></div> -->
          <div v-show="totalJudgPages > 1" class="py-6">
            <nav class="block">
              <ul class="flex justify-end pl-0 list-none flex-wrap">
                <li>
                  <button @click="prevPageJudg" class="first:ml-0 nav-btn" :class="{'disabled': current_page_judg == 1}">
                    Prev
                  </button>
                </li>
                <li v-for="(index) in paginate(current_page_judg, totalJudgPages)" :key="index">
                  <button @click="gotoPageJudg(index)" class="first:ml-0 nav-btn" :class="{'active': current_page_judg == index, 'disabled': index == '...'}">
                    {{ index }}
                  </button>
                </li>
                <li>
                  <button @click="nextPageJudg" class="first:ml-0 nav-btn" :class="{'disabled': current_page_judg >= totalJudgPages}">
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div v-else class="">
          <h6>No files available for download</h6>
        </div>
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
