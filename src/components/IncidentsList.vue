<template>
  <div class="pt-3">
    <div class="w-full">
      <table class="table w-full" v-if="list.length > 0">
        <thead class="bg-light">
          <tr class="text-left">
            <th width="33%">Incident</th>
            <th width="33%">Incident Details</th>
            <th width="34%"></th>
          </tr>
        </thead>
        <tbody class="bg-white">
          <tr class="text-md" v-for="(c, key) in list" :key="key">
            <td class="bg-light lg:hidden p-4 text-md">
              <router-link :to="'incidents/' + c.slug"><u class="title">{{ c.title }}</u></router-link>
            </td>
            <td class="hidden lg:table-cell">
              <router-link :to="'incidents/' + c.slug"><u class="title">{{ c.title }}</u></router-link>
            </td>
            <td data-th="">
              <p v-if="c.party"><strong>Target(s):</strong> {{ c.party.name }}</p>
              <p v-if="c.date_of_arrest"><strong>Date of Incident:</strong> {{ c.date_of_arrest }}</p>
              <p v-if="c.address"><strong>Location:</strong> {{ c.address }}</p>
              <p v-if="c.state"><strong>State:</strong> {{ c.state.name }}</p>
            </td>
            <td data-th="">
              <!-- <ul><li v-for="(offence, index) in c.offences" :key="index">- {{ offence.name }}</li></ul> -->
              <p v-if="c.offence"><strong>Incident Type:</strong> {{ c.offence.name }}</p>
              <p v-if="c.arresting_agency"><strong>Assailant:</strong> {{ c.arresting_agency.name }}</p>
              <p v-if="c.update"><strong>Incident Status:</strong> {{ c.update }}</p>
              <!-- <p><strong>Were they briefed?:</strong> {{ c.briefed_on_arrest ? 'Yes' : 'No' }}</p>
              <p><strong>Was there a warrant?:</strong> {{ c.warrant ? 'Yes' : 'No' }}</p>
              <p><strong>Have they been charged?:</strong> {{ c.charged ? 'Yes' : 'No' }}</p> -->
              <!-- <p><strong>Were they tortured?:</strong> {{ c.tortured ? 'Yes' : 'No' }}</p> -->
            </td>
          </tr>
        </tbody>
      </table>
      <div
        class="h-64 flex items-center justify-center"
        v-else
      >
        <h4 class="text-2xl">There are no incidents recorded!</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IncidentList",
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
@media screen and (max-width: 992px) {
  td:not(:first-of-type) {
    padding-left: 15px;
    padding-bottom: 10px;
  }
}
.title {
  padding: 0 !important;
  &:hover {
    color: #1806e4;
  }
}
</style>
