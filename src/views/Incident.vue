<template>
  <section class="pt-6 lg:pt-16">
    <div class="flex justify-center mx-auto md:w-4/5 px-3 md:px-10 xl:px-16">
      <div
        v-if="
          !isLoading &&
            Object.keys(incident).length > 0 &&
            incident.constructor === Object
        "
        class="mb-8"
      >
        <div class="mb-5">
          <div class="flex items-center">
            <div class="rounded-full shadow-lg bg-transpurple p-3">
              <img
                alt="Scale of justice"
                src="@/assets/images/vectors/scale.svg"
                class="h-30"
              />
            </div>
            <p class="text-xl p-2 pl-2 ml-2">{{ incident.offence.name }}</p>
          </div>
        </div>
        <div class="mx-auto my-10 max-w-2/3">
          <h2 class="text-xl lg:text-2xl text-center">
            <strong>{{ incident.title }}</strong>
          </h2>
        </div>
        <div class="lg:grid lg:grid-cols-1 gap-6">
          <div class="w-full mb-12">
            <div class="case-info">
              <div class="card">
                <div class="text-white bg-transpurple px-8 py-6 text-xl rounded-t-lg">
                  <strong>Incident Details</strong>
                </div>
                <div class="card-body bg-light p-0">
                  <div class="title bg-white">
                    <strong>Target(s)</strong>
                  </div>
                  <div class="info">
                    {{ incident.party.name }}
                  </div>
                  <div class="title bg-white">
                    <strong>Arresting Agency</strong>
                  </div>
                  <div class="info">
                    {{ incident.arresting_agency.name }}
                  </div>
                  <div class="title bg-white">
                    <strong>Location</strong>
                  </div>
                  <div class="info">
                    {{ incident.address }}
                  </div>
                  <div class="title bg-white">
                    <strong>State</strong>
                  </div>
                  <div class="info">
                    {{ incident.state.name }}
                  </div>
                  <div class="title bg-white">
                    <strong>Date of Incident</strong>
                  </div>
                  <div class="info">
                    {{ incident.date_of_arrest }}
                  </div>
                  <div class="title bg-white">
                    <strong>Circumstances around the incident</strong>
                  </div>
                  <div class="info text-justify">
                    {{ incident.circumstances }}
                  </div>
                  <div v-if="incident.update" class="title bg-white">
                    <strong>Incident Status</strong>
                  </div>
                  <div v-if="incident.update" class="info text-justify">
                    {{ incident.update }}
                  </div>
                  <div v-if="incident.source" class="title bg-white">
                    <strong>Source</strong>
                  </div>
                  <div v-if="incident.source" class="info text-justify">
                    <a :href="incident.source">{{ incident.source }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden mb-12">
          <a
            class="flex justify-center btn rounded-lg w-full p-4 bg-transpurple text-white"
            :href="url + '/export/' + incident_slug"
            target="_blank"
            rel="noreferrer noopener"
            >Download Incident Summary</a
          >
        </div>
      </div>
      <div v-else-if="isLoading" class="h-64 flex items-center justify-center">
        <h4 class="text-2xl">Loading...</h4>
      </div>
      <div v-else class="h-64 flex items-center justify-center">
        <h4 class="text-2xl">{{ message }}</h4>
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
  mounted() {
    this.getIncident();
  },
  data() {
    return {
      incident_slug: "",
      incident: {},
      message: "No Incident Found!",
      url: window.host,
      isLoading: true
    };
  },
  methods: {
    getIncident() {
      this.incident_slug = this.$route.params.slug;
      axios
        .get(`${window.host}/api/press-monitor/incident/${this.incident_slug}`)
        .then(response => {
          if (response.data) {
            this.incident = response.data;
            this.isLoading = false;
          } else {
            this.message = "No Incident Found!";
          }
        })
        .catch(e => {
          console.error(e);
          this.isLoading = false;
        });
    }
  }
};
</script>

<style>
.info {
  @apply text-lg p-3 text-transpurple;
}
.title {
  @apply text-transpurple p-3;
}
.info-icon {
  max-width: 40%;
}
.info-detail {
  line-height: 1em !important;
  align-self: center !important;
}
.info-title {
  font-weight: 700;
}
@media screen and (min-width: 376px) and (max-width: 469px) {
  .info-detail {
    /*padding-top:1.8em !important;*/
    font-size: 0.95em;
  }
}

@media screen and (min-width: 470px) and (max-width: 767px) {
  .info-detail {
    /*padding-top:2em !important;*/
    font-size: 1.1em;
  }
}

@media screen and (min-width: 992px) {
  .info-detail {
    /*padding-top:1.6em !important;*/
    font-size: 1.2em;
  }
}
</style>
