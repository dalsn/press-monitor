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
          <th v-for="column in columns" :key="column" class="w-auto pb-5">
            {{ column }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b text-left text-base text-transpurple">
          <td class="w-auto pt-3 pb-5">Emmanuel Amakom & 4 Others</td>
          <td class="w-auto pt-3 pb-5 flex flex-col">
            <OffenceTag class="bg-red-600 rounded self-start">Fraud</OffenceTag
            ><span>N15,200,000.00</span>
          </td>
          <td class="w-auto pt-3 pb-5">Hon. Justice I.B. Gafai</td>
          <td class="w-auto pt-3 pb-5">Federal High Court, Awka, Anambra</td>
          <td class="w-auto pt-3 pb-5">EFCC</td>
          <td class="w-autos pt-3 pb-5">28 June 2020</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import OffenceTag from "@/components/UIElements/OffenceTag";
export default {
  name: "CaseTable",
  props: {
    columns: Array
  },

  components: { OffenceTag }
};
</script>

<style scoped></style>
