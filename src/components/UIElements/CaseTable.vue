<template>
  <section class="pr-5 font-serif">
    <table class="table-fixed w-full">
      <thead>
        <tr
          class="text-left border-b text-sm font-normal text-transgray700 leading-20"
        >
          <!--          <th class="w-auto pb-5">Accused Person/Defendent</th>-->
          <!--          <th class="w-auto pb-5">Alleged Offence</th>-->
          <!--          <th class="w-auto pb-5">Presiding Judge</th>-->
          <!--          <th class="w-auto pb-5">Court</th>-->
          <!--          <th class="w-auto pb-5">Agency</th>-->
          <!--          <th class="w-auto pb-5">Date of sitting</th>-->
          <th
            @click="sortBy(key)"
            v-for="key in columns"
            :key="key"
            class="w-auto pb-5"
          >
            {{ key }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="entry in filteredData"
          :key="entry"
          class="border-b text-left text-base text-transpurple"
        >
          <td v-for="key in columns" :key="key" class="w-auto pt-3 pb-5">
            {{ entry[key] }}
          </td>
          <!--          <td class="w-auto pt-3 pb-5">Emmanuel Amakom & 4 Others</td>-->
          <!--          <td class="w-auto pt-3 pb-5 flex flex-col">-->
          <!--            <OffenceTag class="bg-red-600 rounded self-start">Fraud</OffenceTag-->
          <!--            ><span>N15,200,000.00</span>-->
          <!--          </td>-->
          <!--          <td class="w-auto pt-3 pb-5">Hon. Justice I.B. Gafai</td>-->
          <!--          <td class="w-auto pt-3 pb-5">Federal High Court, Awka, Anambra</td>-->
          <!--          <td class="w-auto pt-3 pb-5">EFCC</td>-->
          <!--          <td class="w-autos pt-3 pb-5">28 June 2020</td>-->
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
// import OffenceTag from "@/components/UIElements/OffenceTag";
export default {
  name: "CaseTable",
  data() {
    let sortOrders = {};
    this.columns.forEach(function(key) {
      sortOrders[key] = 1;
    });
    return {
      sortKey: "",
      sortOrders: sortOrders
    };
  },
  props: {
    columns: Array,
    data: Array,
    filterKey: String
  },

  components: {},
  methods: {
    sortBy(key) {
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * 1;
    }
  },
  computed: {
    filteredData: () => {
      let sortKey = this.sortKey;
      let filterKey = this.filterKey && this.filterKey.toLowerCase();
      let order = this.sortOrders[sortKey] || 1;
      let data = this.data;
      if (filterKey) {
        data = data.filter(function(row) {
          return Object.keys(row).some(function(key) {
            return (
              String(row[key])
                .toLowerCase()
                .indexOf(filterKey) > -1
            );
          });
        });
      }
      if (sortKey) {
        data = data.slice().sort(function(a, b) {
          a = a[sortKey];
          b = b[sortKey];
          return (a === b ? 0 : a > b ? 1 : -1) * order;
        });
      }
      return data;
    }
  }
};
</script>

<style scoped></style>
