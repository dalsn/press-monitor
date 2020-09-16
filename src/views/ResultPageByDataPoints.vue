<template>
  <section class="bg-hero font-serif">
    <header
      class="pb-12 bg-white relative overflow-y-hidden pt-37  pl-16 pr-12"
    >
      <div class="text pt-5 md:pt-8 lg:pt-5 text-center md:text-center ">
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
      <div class="form-group"></div>
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
export default {
  name: "ResultPageByDataPoints",
  components: { CaseTable, TableSummary, TableTitle },
  data: () => {
    return {
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
