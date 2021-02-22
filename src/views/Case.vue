<template>
  <section class="pt-6 lg:pt-16">
    <div class="px-3 md:px-10 xl:px-16">
      <div
        v-if="
          !isLoading &&
            Object.keys(caseFile).length > 0 &&
            caseFile.constructor === Object
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
            <p class="text-xl p-2 pl-2 ml-2">{{ caseFile.type }}</p>
          </div>
        </div>
        <div class="mx-auto my-10 max-w-2/3">
          <h2 class="text-2xl lg:text-4xl text-center">
            <strong>{{ caseFile.title }}</strong>
          </h2>
        </div>
        <div class="lg:grid lg:grid-cols-2 gap-6">
          <div class="w-full order-1 mb-16">
            <div class="flex mb-2 items-start">
              <img
                alt="Humans"
                src="@/assets/images/vectors/accused.svg"
                class="img-fluid info-icon"
              />
              <p
                class="pl-2 info-detail"
                :class="{ 'pt-3': caseFile.defendants.desc }"
              >
                <span class="info-title">{{
                  caseFile.lead_defendant.name
                }}</span>
                <br />
                <span class="size-sm"
                  ><small>{{ caseFile.defendants_desc }}</small></span
                >
              </p>
            </div>
            <div class="flex mb-2 items-start">
              <img
                alt="Money bag"
                src="@/assets/images/vectors/amount.svg"
                class="img-fluid info-icon"
              />
              <p
                class="pl-2 info-detail"
                :class="{ 'pt-3': caseFile.offence_desc }"
              >
                <span class="info-title">{{
                  caseFile.amount ? caseFile.amount : caseFile.type
                }}</span>
                <br />
                <span
                  v-if="caseFile.amount && caseFile.offence_desc"
                  class="size-sm"
                  ><small>{{ caseFile.offence_desc }}</small></span
                >
              </p>
            </div>
            <div v-if="caseFile && caseFile.description" class="flex mb-2 items-start">
              <img
                alt="File summary"
                src="@/assets/images/vectors/summary.svg"
                class="img-fluid info-icon"
              />
              <p
                class="pl-2 info-detail pt-3 text-justify"
              >
                <span class="info-title">Case Summary</span>
                <br />
                <span
                  class="size-sm"
                  ><small>{{ caseFile.description }}</small></span
                >
              </p>
            </div>
            <div class="flex mb-2 items-start">
              <img
                alt="Calendar"
                src="@/assets/images/vectors/date.svg"
                class="img-fluid info-icon"
              />
              <p class="pt-3 pl-2 info-detail">
                <template v-if="caseFile.days">
                  <span class="info-title">{{ caseFile.days }}</span> <br />
                  <span class="size-sm">
                    <small>
                      {{
                        (caseFile.update && caseFile.update.end_year) || caseFile.hasEnded
                          ? "Day(s) case lasted in court"
                          : "Day(s) since arraignment"
                      }}
                    </small>
                  </span>
                </template>
                <template v-else-if="caseFile.years">
                  <span class="info-title">{{ caseFile.years }}</span> <br />
                  <span class="size-sm">
                    <small>
                      {{
                        (caseFile.update && caseFile.update.end_year) || caseFile.hasEnded
                          ? "Year(s) case lasted in court"
                          : "Year(s) since arraignment"
                      }}
                    </small>
                  </span>
                </template>
                <template v-else>
                  <span class="info-title">{{ caseFile.days }}</span> <br />
                  <span class="size-sm">
                    <small>
                      {{
                        (caseFile.update && caseFile.update.end_year) || caseFile.hasEnded
                          ? "Day(s) case lasted in court"
                          : "Day(s) since arraignment"
                      }}
                    </small>
                  </span>
                </template>
              </p>
            </div>
            <div
              v-if="caseFile && caseFile.update"
              class="flex mb-2 items-start"
            >
              <img
                alt="Gavel"
                src="@/assets/images/vectors/decision.svg"
                class="img-fluid info-icon"
              />
              <p class="pt-3 pl-2 info-detail text-justify">
                <span class="info-title">Case Update</span> <br />
                <span class="size-sm"
                  ><small>{{ caseFile.update.court_decision }}</small></span
                >
              </p>
            </div>
            <div v-if="caseFile && caseFile.next_sitting" class="flex mb-2 items-start">
              <img
                alt="calendar"
                src="@/assets/images/vectors/date.svg"
                class="img-fluid info-icon"
              />
              <p
                class="pl-2 info-detail pt-3"
              >
                <span class="info-title">Date of Next Sitting</span>
                <br />
                <span
                  class="size-sm"
                  ><small>{{ caseFile.next_sitting }}</small></span
                >
              </p>
            </div>
            <div
              v-if="caseFile && caseFile.judge"
              class="flex mb-2 items-start"
            >
              <img
                alt="Court house"
                src="@/assets/images/vectors/judge.svg"
                class="img-fluid info-icon"
              />
              <p class="pt-3 pl-2 info-detail">
                <span class="info-title">{{ caseFile.judge.name }}</span> <br />
                <span class="size-sm"
                  ><small
                    >{{ caseFile.court.name }},
                    {{ caseFile.court.state.name }}</small
                  ></span
                >
              </p>
            </div>
            <div v-if="caseFile.update" class="flex mb-2 items-start">
              <img
                alt="Legislation"
                src="@/assets/images/vectors/acja.svg"
                class="img-fluid info-icon"
              />
              <p class="pt-3 pl-2 info-detail text-justify">
                <span class="info-title"
                  >ACJA/ACJL Compliance
                  <br />
                  <small>
                    <strong v-if="caseFile.update && caseFile.update.compliance == 3"
                      >(violated)</strong
                    >
                    <strong v-else-if="caseFile.update && caseFile.update.compliance == 1"
                      >(complied)</strong
                    >
                    <strong v-else>(not applicable)</strong>
                  </small>
                </span>
                <template v-if="caseFile.update && caseFile.update.note">
                  <br />
                  <span class="size-sm"
                    ><small>{{ caseFile.update ? caseFile.update.note : "" }}</small></span
                  >
                </template>
              </p>
            </div>
            <div class="hidden lg:block my-5">
              <a
                class="flex justify-center btn rounded-lg w-full p-4 bg-transpurple text-white"
                :href="url + '/export/' + case_slug"
                target="_blank"
                rel="noreferrer noopener"
                >Download Case Summary</a
              >
            </div>
          </div>
          <div class="w-full mb-12">
            <div class="case-info">
              <div class="card">
                <div class="text-white bg-transpurple px-8 py-6 text-lg rounded-t-lg">
                  <strong>Case Information</strong>
                </div>
                <div class="card-body bg-light p-0">
                  <div class="info">
                    {{ caseFile.lead_defendant.name }}
                    {{ caseFile.defendants_desc }}
                  </div>
                  <div class="title bg-white">
                    <strong>Presiding Judge & Designated Court</strong>
                  </div>
                  <div class="info">
                    {{ caseFile.judge.name }}, {{ caseFile.court.name }},
                    {{ caseFile.court.state.name }}
                  </div>
                  <div class="title bg-white">
                    <strong>Nature and Number of Charges</strong>
                  </div>
                  <div class="info">
                    {{ caseFile.charge }}
                  </div>
                  <div class="title bg-white">
                    <strong>Date of 1st Arraignment</strong>
                  </div>
                  <div class="info">
                    {{ caseFile.date_of_arraignment }}
                  </div>
                  <div class="title bg-white">
                    <strong>Summary of Case</strong>
                  </div>
                  <div class="info text-justify">
                    {{ caseFile.description }}
                  </div>
                  <div class="title bg-white">
                    <strong
                      >Defendant(s) and Plea entered on Arraignment</strong
                    >
                  </div>
                  <div class="info">
                    <div
                      v-for="(defendant, key) in caseFile.defendants"
                      :key="key"
                    >
                      {{ key + 1 }}. {{ defendant.name }}
                      <small v-if="defendant.designation"
                        >({{ defendant.designation }})</small
                      >
                      – <strong>{{ defendant.pivot.plea }}</strong>
                    </div>
                  </div>
                  <div class="title bg-white">
                    <strong>Defence Counsel(s)</strong>
                  </div>
                  <div class="info">
                    <div v-if="caseFile.counsels.length < 1">
                      No defence counsel
                    </div>
                    <template v-else>
                      <div
                        v-for="(counsel, key) in caseFile.counsels"
                        :key="key"
                      >
                        {{ key + 1 }}. {{ counsel.name }}
                        <small v-if="counsel.designation"
                          >({{ counsel.designation }})</small
                        >
                      </div>
                    </template>
                  </div>
                  <div class="title bg-white">
                    <strong>Prosecuting Agency</strong>
                  </div>
                  <div class="info">
                    {{ caseFile.agency.name }}
                  </div>
                  <div class="title bg-white">
                    <strong>Prosecutor(s) </strong>
                  </div>
                  <div class="info">
                    <div v-if="caseFile.prosecutors.length < 1">
                      No prosecutors recorded
                    </div>
                    <template v-else>
                      <div
                        v-for="(prosecutor, key) in caseFile.prosecutors"
                        :key="key"
                      >
                        {{ key + 1 }}. {{ prosecutor.name }}
                        <small v-if="prosecutor.designation"
                          >({{ prosecutor.designation }})</small
                        >
                      </div>
                    </template>
                  </div>
                  <div class="title bg-white">
                    <strong>Status of Case</strong>
                  </div>
                  <div class="info">
                    {{ caseFile.status }}
                  </div>
                  <div class="title bg-white">
                    <strong v-if="caseFile.status.toLowerCase() == 'decided'"
                      >Decision</strong
                    >
                    <strong v-else>Stage of Trial</strong>
                  </div>
                  <div class="info">
                    {{ caseFile.stage }}
                  </div>
                  <div class="title bg-white">
                    <strong>Length of Trial</strong>
                  </div>
                  <div class="info">
                    {{
                      caseFile.days
                        ? caseFile.days + " day(s)"
                        : caseFile.years + " year(s)"
                    }}
                  </div>
                  <template
                    v-if="
                      caseFile.status.toLowerCase() != 'decided' &&
                        caseFile.update
                    "
                  >
                    <div class="title bg-white">
                      <strong>Case Update</strong>
                    </div>
                    <div class="info text-justify">
                      {{ caseFile.update ? caseFile.update.court_decision : "" }}
                    </div>
                  </template>
                  <div v-if="caseFile.update" class="title bg-white">
                    <strong>ACJA/ACJL Compliance</strong>
                  </div>
                  <div v-if="caseFile.update" class="info text-justify">
                    {{
                      caseFile.update && parseInt(caseFile.update.compliance) == 3
                        ? "Violated"
                        : caseFile.update && parseInt(caseFile.update.compliance) == 1
                        ? "Complied"
                        : "Not Applicable"
                    }}
                    {{ caseFile.update && caseFile.update.note ? "-" + caseFile.update.note : "" }}
                  </div>
                  <template v-if="caseFile.status.toLowerCase() == 'decided'">
                    <div class="title bg-white">
                      <strong>Court Decision</strong>
                    </div>
                    <div class="info text-justify">
                      {{
                        caseFile.update ? caseFile.update.court_decision : "Nil"
                      }}
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:hidden mb-12">
          <a
            class="flex justify-center btn rounded-lg w-full p-4 bg-transpurple text-white"
            :href="url + '/export/' + case_slug"
            target="_blank"
            rel="noreferrer noopener"
            >Download Case Summary</a
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
    this.getCase();
  },
  data() {
    return {
      case_slug: "",
      caseFile: {},
      message: "No Case Found!",
      url: window.host,
      isLoading: true
    };
  },
  methods: {
    getCase() {
      this.case_slug = this.$route.params.slug;
      axios
        .get(`${window.host}/api/case/${this.case_slug}`)
        .then(response => {
          if (response.data) {
            this.caseFile = response.data;
            this.isLoading = false;
          } else {
            this.message = "No Case Found!";
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
