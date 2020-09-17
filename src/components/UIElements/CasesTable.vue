<template>
  <section class="pr-5 font-serif w-full mt-8">
    <table class="table-auto w-full">
      <thead>
        <tr
          class="text-left border-b text-sm font-normal text-transgray700 leading-20"
        >
          <th class="w-auto pb-5">Accused Person/Defendent</th>
          <th class="w-auto pb-5">Alleged Offence</th>
          <th class="w-auto pb-5">Presiding Judge</th>
          <th class="w-auto pb-5">Court</th>
          <th class="w-auto  pb-5">Agency</th>
          <th class="w-auto pb-5">Date of sitting</th>
          <!--                <th v-for="column in columns" :key="column" class="w-auto pb-5">-->
          <!--                  {{ column }}-->
          <!--                </th>-->
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="data in filteredData"
          :key="data.key"
          class="border-b text-left text-base text-transpurple"
        >
          <td class="w-auto pt-3 pb-5">{{ data.accused }}</td>
          <td class="w-auto  pt-3 pb-5 flex flex-col">
            <OffenceTag
              :class="{
                'bg-fraud': data.offense === 'Fraud',
                'bg-bribery': data.offense === 'Bribery',
                'bg-ml': data.offense === 'Money Laundering'
              }"
              class="rounded self-start"
              >{{ data.offense }}</OffenceTag
            ><span>{{ data.amount }}</span>
          </td>
          <td class="w-auto pt-3 pb-5">{{ data.presidingJudge }}</td>
          <td class=" pt-3 pb-5 ">
            {{ data.court }}
          </td>
          <td class=" pt-3 w-10 mr-5 pb-5">{{ data.agency }}</td>
          <td class="w-autos pt-3 pb-5">{{ data.date }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import OffenceTag from "@/components/UIElements/OffenceTag";
export default {
  name: "CasesTable",
  components: { OffenceTag },
  props: {
    filteredData: Array
  }
};
</script>

<style scoped></style>
