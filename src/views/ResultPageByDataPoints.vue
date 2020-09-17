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
            :class="{ 'bg-pill': !selectedLocationCategory.includes(state) }"
            class="mr-4  bg-selected rounded-full mb-5"
            v-for="(state, i) in mockState"
            :key="i"
            ><span @click="addToLocation(state)">{{ state }}</span></StatePill
          >
        </div>

        <div
          v-show="activeParamenter === 'entity'"
          class="state-wrapper   flex flex-wrap ml-pillspacing  mr-pillright"
        >
          <StatePill
            :class="{ 'bg-pill': !selectedEntityCategory.includes(court) }"
            class="mr-4  bg-selected rounded-full mb-5"
            @click="() => console.log('working')"
            v-for="(court, i) in mockCourt"
            :key="i"
          >
            <span @click="addToEntity(court)">{{ court }}</span>
          </StatePill>
        </div>

        <div
          v-show="activeParamenter === 'persona'"
          class="state-wrapper   flex flex-wrap ml-pillspacing  mr-pillright"
        >
          <StatePill
            :class="{ 'bg-pill': !selectedPersonaCategory.includes(judge) }"
            class="mr-4  bg-selected rounded-full mb-5"
            v-for="(judge, i) in mockJudge"
            :key="i"
          >
            <span @click="addToPersona(judge)">{{ judge }}</span>
          </StatePill>
        </div>

        <div
          v-show="activeParamenter === 'crime'"
          class="state-wrapper   flex flex-wrap ml-pillspacing  mr-pillright"
        >
          <StatePill
            :class="{ 'bg-pill': !selectedCrimeCategory.includes(crime) }"
            class="mr-4  bg-selected rounded-full mb-5"
            v-for="(crime, i) in mockCrime"
            :key="i"
          >
            <span @click="addToCrime(crime)">{{ crime }}</span>
          </StatePill>
        </div>

        <div
          v-show="activeParamenter === 'enforcement'"
          class="state-wrapper   flex flex-wrap ml-pillspacing  mr-pillright"
        >
          <StatePill
            :class="{ 'bg-pill': !selectedAgencyCategory.includes(agency) }"
            class="mr-4  bg-selected rounded-full mb-5"
            v-for="(agency, i) in mockAgency"
            :key="i"
          >
            <span @click="addToAgency(agency)">{{ agency }}</span>
          </StatePill>
        </div>
      </div>
      <div
        v-show="activeParamenter === 'location'"
        class="selected-points   pb-8 w-full bg-entrypoint h-auto pl-pillspacing  pr-pillright"
      >
        <div
          v-show="selectedLocationCategory.length > 0"
          class="title w-full inline-flex flex-wrap text-white pt-4 border-t  "
        >
          <span class="text-sm opacity-50"> Select Category:</span>
          <div
            class="state-wrapper  ml-5 flex flex-wrap ml-pillspacings  mr-pillrights"
          >
            <StatePill
              class="mr-4  bg-pill rounded-full mb-5"
              v-for="(state, i) in selectedLocationCategory"
              :key="i"
              ><span class="mr-2">{{ state }}</span>
              <span
                @click="removeItemFromSelectedCategory('location', state)"
                class="bg-entrypoint rounded-full"
                ><svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.2371 3.50733C11.5182 3.78405 11.5218 4.2363 11.2451 4.51745L8.74038 7.06231L11.2852 9.56806C11.5664 9.84478 11.57 10.297 11.2933 10.5782C11.0166 10.8593 10.5643 10.8629 10.2832 10.5862L7.73829 8.08046L5.23255 10.6263C4.95583 10.9075 4.50358 10.9111 4.22243 10.6344C3.94127 10.3576 3.93768 9.90539 4.2144 9.62423L6.72014 7.07836L4.17428 4.57363C3.89312 4.29691 3.88953 3.84466 4.16625 3.56351C4.44297 3.28236 4.89522 3.27876 5.17637 3.55549L7.72224 6.06021L10.227 3.51536C10.5037 3.23421 10.9559 3.23061 11.2371 3.50733Z"
                    fill="white"
                  />
                </svg> </span
            ></StatePill>
          </div>
        </div>
      </div>
      <div
        v-show="activeParamenter === 'entity'"
        class="selected-points   pb-8 w-full bg-entrypoint h-auto pl-pillspacing  pr-pillright"
      >
        <div
          v-show="selectedEntityCategory.length > 0"
          class="title w-full inline-flex flex-wrap text-white pt-4 border-t  "
        >
          <span class="text-sm opacity-50"> Select Category:</span>
          <div
            class="state-wrapper  ml-5 flex flex-wrap ml-pillspacings  mr-pillrights"
          >
            <StatePill
              class="mr-4  bg-pill rounded-full mb-5"
              v-for="(state, i) in selectedEntityCategory"
              :key="i"
              ><span class="mr-2">{{ state }}</span>
              <span
                @click="removeItemFromSelectedCategory('entity', state)"
                class="bg-entrypoint rounded-full"
                ><svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.2371 3.50733C11.5182 3.78405 11.5218 4.2363 11.2451 4.51745L8.74038 7.06231L11.2852 9.56806C11.5664 9.84478 11.57 10.297 11.2933 10.5782C11.0166 10.8593 10.5643 10.8629 10.2832 10.5862L7.73829 8.08046L5.23255 10.6263C4.95583 10.9075 4.50358 10.9111 4.22243 10.6344C3.94127 10.3576 3.93768 9.90539 4.2144 9.62423L6.72014 7.07836L4.17428 4.57363C3.89312 4.29691 3.88953 3.84466 4.16625 3.56351C4.44297 3.28236 4.89522 3.27876 5.17637 3.55549L7.72224 6.06021L10.227 3.51536C10.5037 3.23421 10.9559 3.23061 11.2371 3.50733Z"
                    fill="white"
                  />
                </svg> </span
            ></StatePill>
          </div>
        </div>
      </div>
      <div
        v-show="activeParamenter === 'persona'"
        class="selected-points   pb-8 w-full bg-entrypoint h-auto pl-pillspacing  pr-pillright"
      >
        <div
          v-show="selectedPersonaCategory.length > 0"
          class="title w-full inline-flex flex-wrap text-white pt-4 border-t  "
        >
          <span class="text-sm opacity-50"> Select Category:</span>
          <div
            class="state-wrapper  ml-5 flex flex-wrap ml-pillspacings  mr-pillrights"
          >
            <StatePill
              class="mr-4  bg-pill rounded-full mb-5"
              v-for="(state, i) in selectedPersonaCategory"
              :key="i"
              ><span class="mr-2">{{ state }}</span>
              <span
                @click="removeItemFromSelectedCategory('persona', state)"
                class="bg-entrypoint rounded-full"
                ><svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.2371 3.50733C11.5182 3.78405 11.5218 4.2363 11.2451 4.51745L8.74038 7.06231L11.2852 9.56806C11.5664 9.84478 11.57 10.297 11.2933 10.5782C11.0166 10.8593 10.5643 10.8629 10.2832 10.5862L7.73829 8.08046L5.23255 10.6263C4.95583 10.9075 4.50358 10.9111 4.22243 10.6344C3.94127 10.3576 3.93768 9.90539 4.2144 9.62423L6.72014 7.07836L4.17428 4.57363C3.89312 4.29691 3.88953 3.84466 4.16625 3.56351C4.44297 3.28236 4.89522 3.27876 5.17637 3.55549L7.72224 6.06021L10.227 3.51536C10.5037 3.23421 10.9559 3.23061 11.2371 3.50733Z"
                    fill="white"
                  />
                </svg> </span
            ></StatePill>
          </div>
        </div>
      </div>
      <div
        v-show="activeParamenter === 'crime'"
        class="selected-points   pb-8 w-full bg-entrypoint h-auto pl-pillspacing  pr-pillright"
      >
        <div
          v-show="selectedCrimeCategory.length > 0"
          class="title w-full inline-flex flex-wrap text-white pt-4 border-t  "
        >
          <span class="text-sm opacity-50"> Select Category:</span>
          <div
            class="state-wrapper  ml-5 flex flex-wrap ml-pillspacings  mr-pillrights"
          >
            <StatePill
              class="mr-4  bg-pill rounded-full mb-5"
              v-for="(state, i) in selectedCrimeCategory"
              :key="i"
              ><span class="mr-2">{{ state }}</span>
              <span
                @click="removeItemFromSelectedCategory('crime', state)"
                class="bg-entrypoint rounded-full"
                ><svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.2371 3.50733C11.5182 3.78405 11.5218 4.2363 11.2451 4.51745L8.74038 7.06231L11.2852 9.56806C11.5664 9.84478 11.57 10.297 11.2933 10.5782C11.0166 10.8593 10.5643 10.8629 10.2832 10.5862L7.73829 8.08046L5.23255 10.6263C4.95583 10.9075 4.50358 10.9111 4.22243 10.6344C3.94127 10.3576 3.93768 9.90539 4.2144 9.62423L6.72014 7.07836L4.17428 4.57363C3.89312 4.29691 3.88953 3.84466 4.16625 3.56351C4.44297 3.28236 4.89522 3.27876 5.17637 3.55549L7.72224 6.06021L10.227 3.51536C10.5037 3.23421 10.9559 3.23061 11.2371 3.50733Z"
                    fill="white"
                  />
                </svg> </span
            ></StatePill>
          </div>
        </div>
      </div>
      <div
        v-show="activeParamenter === 'enforcement'"
        class="selected-points   pb-8 w-full bg-entrypoint h-auto pl-pillspacing  pr-pillright"
      >
        <div
          v-show="selectedAgencyCategory.length > 0"
          class="title w-full inline-flex flex-wrap text-white pt-4 border-t  "
        >
          <span class="text-sm opacity-50"> Select Category:</span>
          <div
            class="state-wrapper  ml-5 flex flex-wrap ml-pillspacings  mr-pillrights"
          >
            <StatePill
              class="mr-4  bg-pill rounded-full mb-5"
              v-for="(state, i) in selectedAgencyCategory"
              :key="i"
              ><span class="mr-2">{{ state }}</span>
              <span
                @click="removeItemFromSelectedCategory('agency', state)"
                class="bg-entrypoint rounded-full"
                ><svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.2371 3.50733C11.5182 3.78405 11.5218 4.2363 11.2451 4.51745L8.74038 7.06231L11.2852 9.56806C11.5664 9.84478 11.57 10.297 11.2933 10.5782C11.0166 10.8593 10.5643 10.8629 10.2832 10.5862L7.73829 8.08046L5.23255 10.6263C4.95583 10.9075 4.50358 10.9111 4.22243 10.6344C3.94127 10.3576 3.93768 9.90539 4.2144 9.62423L6.72014 7.07836L4.17428 4.57363C3.89312 4.29691 3.88953 3.84466 4.16625 3.56351C4.44297 3.28236 4.89522 3.27876 5.17637 3.55549L7.72224 6.06021L10.227 3.51536C10.5037 3.23421 10.9559 3.23061 11.2371 3.50733Z"
                    fill="white"
                  />
                </svg> </span
            ></StatePill>
          </div>
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
        <CasesTable :filtered-data="filteredData" />
      </div>
    </main></section
></template>

<script>
import TableTitle from "@/components/UIElements/TableTitle";
import TableSummary from "@/components/UIElements/TableSummary";

import StatePill from "@/components/UIElements/StatePill";

import tableData from "@/data/mockData";
import CasesTable from "@/components/UIElements/CasesTable";
export default {
  name: "ResultPageByDataPoints",
  created() {
    this.gridData = tableData;
  },
  components: { CasesTable, StatePill, TableSummary, TableTitle },
  data: () => {
    return {
      activeParamenter: "location",
      selectedLocationCategory: [],
      selectedEntityCategory: [],
      selectedPersonaCategory: [],
      selectedCrimeCategory: [],
      selectedAgencyCategory: [],
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
    addToLocation(value) {
      !this.selectedLocationCategory.includes(value)
        ? this.selectedLocationCategory.push(value)
        : "";
    },
    addToEntity(value) {
      !this.selectedEntityCategory.includes(value)
        ? this.selectedEntityCategory.push(value)
        : "";
    },
    addToPersona(value) {
      !this.selectedPersonaCategory.includes(value)
        ? this.selectedPersonaCategory.push(value)
        : "";
    },
    addToCrime(value) {
      !this.selectedCrimeCategory.includes(value)
        ? this.selectedCrimeCategory.push(value)
        : "";
    },
    addToAgency(value) {
      !this.selectedAgencyCategory.includes(value)
        ? this.selectedAgencyCategory.push(value)
        : "";
    },
    removeItemFromSelectedCategory(type, value) {
      if (type === "location") {
        const indexToRemove = this.selectedLocationCategory.indexOf(value);
        console.log(indexToRemove);
        this.selectedLocationCategory.splice(indexToRemove, 1);
      }
      if (type === "entity") {
        const indexToRemove = this.selectedEntityCategory.indexOf(value);
        console.log(indexToRemove);
        this.selectedEntityCategory.splice(indexToRemove, 1);
      }
      if (type === "persona") {
        const indexToRemove = this.selectedPersonaCategory.indexOf(value);
        console.log(indexToRemove);
        this.selectedPersonaCategory.splice(indexToRemove, 1);
      }
      if (type === "crime") {
        const indexToRemove = this.selectedCrimeCategory.indexOf(value);
        console.log(indexToRemove);
        this.selectedCrimeCategory.splice(indexToRemove, 1);
      }
      if (type === "agency") {
        const indexToRemove = this.selectedAgencyCategory.indexOf(value);
        console.log(indexToRemove);
        this.selectedAgencyCategory.splice(indexToRemove, 1);
      }
    }
  },
  computed: {
    filteredData: function() {
      let filterKey = this.filterQuery;
      let data = this.gridData;
      if (filterKey) {
        data.sort((a, b) => {
          a = a[filterKey];
          b = b[filterKey];
          return a === b ? 0 : a > b ? 1 : -1;
        });
      }
      return data;
    }
  }
};
</script>

<style scoped></style>
