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
              'pl-10': dropdownMenu.id !== 'location'
            }"
            class="text-base  pb-2 mb-4 font-medium leading-19 transgray900 border-b"
          >
            {{ dropdownMenu.title }}
          </h1>
          <div
            :class="{
              'pl-10': dropdownMenu.id !== 'location'
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
      <div class="entry-points pt-8 pb-8 w-full bg-entrypoint h-40">
        <div
          v-show="activeParamenter === 'location'"
          class="state-wrapper flex pl-pillspacing pr-16"
        >
          <StatePill class="mr-4" v-for="(state, i) in mockState" :key="i">{{
            state
          }}</StatePill>
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
        <CaseTable :columns="columns" class="mt-8"></CaseTable>
      </div>
    </main></section
></template>

<script>
import TableTitle from "@/components/UIElements/TableTitle";
import TableSummary from "@/components/UIElements/TableSummary";
import CaseTable from "@/components/UIElements/CaseTable";
import StatePill from "@/components/UIElements/StatePill";
export default {
  name: "ResultPageByDataPoints",
  components: { StatePill, CaseTable, TableSummary, TableTitle },
  data: () => {
    return {
      activeParamenter: "location",
      mockState: ["Lagos", "Kogi", "Ekiti", "Abia"],
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
  }
};
</script>

<style scoped></style>
