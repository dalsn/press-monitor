<template>
  <div
    class="flex shadow-lg rounded-lg px-5 py-4 md:pt-8 md:pb-4 mb-8 border case-card"
    :class="className"
  >
    <div>
      <div class="flex items-center">
        <hr class="border-2 w-1/6" />
        <p class="text-lg md:text-2xl px-3 leading-tight">
          <router-link :to="offenceUrl(caseFile.type_id)">{{
            caseFile.type
          }}</router-link>
        </p>
      </div>
      <p class="text-lg md:text-xl lg:text-2xl my-4">
        <router-link :to="'cases/' + caseFile.slug">{{
          caseFile.title
        }}</router-link>
      </p>
      <p class="text-sm md:text-lg mb-1">
        <strong>Prosecuting Agency:</strong> {{ caseFile.agency.name }}
      </p>
      <p class="text-sm md:text-lg mb-4">
        <strong>Prosecuting Judge:</strong> {{ caseFile.judge.name }}
      </p>
      <div class="flex items-center justify-between">
        <button
          class="text-sm md:text-md btn w-2/5"
          @click="gotoCase(caseFile.slug)"
        >
          Read More
        </button>
        <p class="text-right text-sm font-semibold">
          Status: {{ caseFile.status }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    className: [Object, String],
    caseFile: Object
  },
  name: "CaseCard",
  data() {
    return {};
  },
  computed: {
    offenceUrl() {
      return id => `/offence?pid=${id}`;
    }
  },
  methods: {
    gotoCase(slug) {
      this.$router.push(`/cases/${slug}`);
    }
  }
};
</script>
