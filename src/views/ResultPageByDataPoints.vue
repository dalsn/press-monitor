<template>
  <section class="bg-hero font-serif">
    <header class=" bg-white relative overflow-y-hidden pt-37  ">
      <div
        class="text pl-16 pr-12 pt-5 md:pt-8 lg:pt-5 text-center md:text-center  "
      >
        <h1
          class="font-bold leading-loose md:leading-58 text-transpurple text-2xl md:text-5xl"
        >
          Welcome to our data portal
        </h1>
        <p class="text-17 leading-28  text-transgray500 pt-5">
          This is a central database to find details of ongoing and decided
          corruption
        </p>
        <p class="text-17 leading-28 text-transgray500">
          cases in the country with simplified infographics.
        </p>
      </div>
      <div
        class="form-group w-full mx-auto flex inline-flex justify-center items-center mt-16 mb-8"
      >
        <div
          v-for="dropdownMenu in dropdownParameters"
          :key="dropdownMenu.id"
          @click="activeParamenter = dropdownMenu.id"
          :class="{
            'opacity-50': activeParamenter !== dropdownMenu.id,
            '': dropdownMenu.id === 'crime',
            'w-32': dropdownMenu.id === 'entity'
          }"
          class="location self-start  text-transpurple cursor-pointer "
        >
          <h1
            :class="{
              'border-transpurple': activeParamenter === dropdownMenu.id,
              'pl-10s': dropdownMenu.id !== 'location'
            }"
            class="text-base  pb-2 mb-4 font-medium leading-19 transgray900 border-b"
          >
            {{ dropdownMenu.title }}
          </h1>
          <div
            :class="{
              'pl-10s': dropdownMenu.id !== 'location'
            }"
            class="state inline-flex items-center pr-10"
          >
            <h1 class="text-lg  font-normal leading-22 mr-2">
              {{ dropdownMenu.dropMenu }}
            </h1>
            <svg
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.66016 7.19531C5.90625 7.44141 6.31641 7.44141 6.5625 7.19531L11.8945 1.89062C12.1406 1.61719 12.1406 1.20703 11.8945 0.960938L11.2656 0.332031C11.0195 0.0859375 10.6094 0.0859375 10.3359 0.332031L6.125 4.54297L1.88672 0.332031C1.61328 0.0859375 1.20312 0.0859375 0.957031 0.332031L0.328125 0.960938C0.0820312 1.20703 0.0820312 1.61719 0.328125 1.89062L5.66016 7.19531Z"
                fill="#070241"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="entry-points pt-8 pb-8 w-full bg-entrypoint h-auto">
        <div
          v-show="activeParamenter === 'location'"
          class="state-wrapper   flex flex-wrap ml-pillspacing  mr-pillright"
        >
          <StatePill
            class="mr-4 mb-5"
            v-for="(state, i) in mockState"
            @click="addToSelectedTag(state)"
            :key="i"
            >{{ state }}</StatePill
          >
        </div>

        <div
          v-show="activeParamenter === 'entity'"
          class="state-wrapper   flex flex-wrap ml-pillspacing  mr-pillright"
        >
          <StatePill
            class="mr-4 mb-5"
            @click="() => console.log('working')"
            v-for="(court, i) in mockCourt"
            :key="i"
            >{{ court }}</StatePill
          >
        </div>

        <div
          v-show="activeParamenter === 'persona'"
          class="state-wrapper   flex flex-wrap ml-pillspacing  mr-pillright"
        >
          <StatePill
            class="mr-4 mb-5"
            v-for="(judge, i) in mockJudge"
            :key="i"
            >{{ judge }}</StatePill
          >
        </div>

        <div
          v-show="activeParamenter === 'crime'"
          class="state-wrapper   flex flex-wrap ml-pillspacing  mr-pillright"
        >
          <StatePill
            class="mr-4 mb-5"
            v-for="(crime, i) in mockCrime"
            :key="i"
            >{{ crime }}</StatePill
          >
        </div>

        <div
          v-show="activeParamenter === 'enforcement'"
          class="state-wrapper   flex flex-wrap ml-pillspacing  mr-pillright"
        >
          <StatePill
            class="mr-4 mb-5"
            v-for="(agency, i) in mockAgency"
            :key="i"
            >{{ agency }}</StatePill
          >
        </div>
      </div>
    </header>

    <h1
      class="text-2xl text-center font-transmedium py-4 text-transpurple leading-29"
    >
      All Selected data points
    </h1>

    <main class="bg-hero h-auto pl-16 pr-107 pb-10">
      <div
        class="table-section shadow border rounded mt-5 bg-white pt-5 pl-5 pb-10"
      >
        <TableTitle>Lagos Cases</TableTitle>
        <TableSummary class="mt-2"></TableSummary>
        <!--        <CaseTable :columns="columns" class="mt-8"></CaseTable>-->
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
                v-for="data in gridData"
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
      </div>
    </main>
  </section></template
>

<script>
import TableTitle from "@/components/UIElements/TableTitle";
import TableSummary from "@/components/UIElements/TableSummary";

import StatePill from "@/components/UIElements/StatePill";
import OffenceTag from "@/components/UIElements/OffenceTag";
import tableData from "@/data/mockData";
export default {
  name: "ResultPageByDataPoints",
  created() {
    this.gridData = tableData;
  },
  components: { OffenceTag, StatePill, TableSummary, TableTitle },
  data: () => {
    return {
      activeParamenter: "location",
      selectedCategory: [],
      gridData: [],
      mockState: ["Lagos", "Kogi", "Ekiti", "Abia"],
      mockCourt: [
        "Federal High Court, Awka, Anambra",
        "Federal High Court, Abuja, FCT",
        "Federal High Court, Barnawa Kaduna"
      ],
      mockJudge: [
        "Hon. Justice I.B. Gafai",
        "Hon. Justice U. Abiola",
        "Hon. Justice M.A Olayinka"
      ],
      mockCrime: ["Money Laundering", "Fraud", "Bribery"],
      mockAgency: ["ICPC", "EFCC"],
      dropdownParameters: [
        {
          id: "location",
          title: "Location",
          dropMenu: "Select State"
        },
        {
          id: "entity",
          title: "Entity",
          dropMenu: "Court"
        },
        {
          id: "persona",
          title: "Persona",
          dropMenu: "Judges"
        },
        {
          id: "crime",
          title: "Crime",
          dropMenu: "Select type"
        },
        {
          id: "enforcement",
          title: "Enforcement",
          dropMenu: "Agency"
        }
      ],
      columns: [
        "Accused Person/Defendent",
        "Alleged Offence",
        "Presiding Judge",
        "Court",
        "Agency",
        "Date of sittings"
      ]
    };
  },
  methods: {
    addToSelectedTag: state => {
      console.log(state);
    }
  }
};
</script>

<style scoped></style>
