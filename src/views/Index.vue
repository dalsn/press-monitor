<template>
  <div class="home">
    <Hero />
    <!--    <div class="dump">-->
    <!--      <div-->
    <!--        @click="activeParamenter = 'entity'"-->
    <!--        :class="activeParamenter === 'entity' ? 'opacity-1' : 'opacity-50'"-->
    <!--        class="Entity  text-transpurple  cursor-pointer "-->
    <!--      >-->
    <!--        <h1-->
    <!--          :class="-->
    <!--            activeParamenter === 'entity'-->
    <!--              ? 'border-transpurple'-->
    <!--              : 'border-transgray900'-->
    <!--          "-->
    <!--          class="text-base pl-10 mb-4  pb-2 font-medium leading-19 border-b"-->
    <!--        >-->
    <!--          Entity-->
    <!--        </h1>-->
    <!--        <div class="entity inline-flex items-center pl-10 pr-10">-->
    <!--          <h1 class="text-lg  font-normal leading-22 mr-2">-->
    <!--            Court-->
    <!--          </h1>-->
    <!--          <svg-->
    <!--            width="13"-->
    <!--            height="8"-->
    <!--            viewBox="0 0 13 8"-->
    <!--            fill="none"-->
    <!--            xmlns="http://www.w3.org/2000/svg"-->
    <!--          >-->
    <!--            <path-->
    <!--              d="M5.66016 7.19531C5.90625 7.44141 6.31641 7.44141 6.5625 7.19531L11.8945 1.89062C12.1406 1.61719 12.1406 1.20703 11.8945 0.960938L11.2656 0.332031C11.0195 0.0859375 10.6094 0.0859375 10.3359 0.332031L6.125 4.54297L1.88672 0.332031C1.61328 0.0859375 1.20312 0.0859375 0.957031 0.332031L0.328125 0.960938C0.0820312 1.20703 0.0820312 1.61719 0.328125 1.89062L5.66016 7.19531Z"-->
    <!--              fill="#070241"-->
    <!--            />-->
    <!--          </svg>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div-->
    <!--        @click="activeParamenter = 'persona'"-->
    <!--        :class="activeParamenter === 'persona' ? 'opacity-1' : 'opacity-50'"-->
    <!--        class="Persona cursor-pointer   text-transpurple "-->
    <!--      >-->
    <!--        <h1-->
    <!--          :class="-->
    <!--            activeParamenter === 'persona'-->
    <!--              ? 'border-transpurple'-->
    <!--              : 'border-transgray900'-->
    <!--          "-->
    <!--          class="text-base pl-10 mb-4  pb-2 font-medium leading-19 border-b"-->
    <!--        >-->
    <!--          Persona-->
    <!--        </h1>-->
    <!--        <div class="persona inline-flex items-center pl-10 pr-10">-->
    <!--          <h1 class="text-lg  font-normal leading-22 mr-2">-->
    <!--            Judges-->
    <!--          </h1>-->
    <!--          <svg-->
    <!--            width="13"-->
    <!--            height="8"-->
    <!--            viewBox="0 0 13 8"-->
    <!--            fill="none"-->
    <!--            xmlns="http://www.w3.org/2000/svg"-->
    <!--          >-->
    <!--            <path-->
    <!--              d="M5.66016 7.19531C5.90625 7.44141 6.31641 7.44141 6.5625 7.19531L11.8945 1.89062C12.1406 1.61719 12.1406 1.20703 11.8945 0.960938L11.2656 0.332031C11.0195 0.0859375 10.6094 0.0859375 10.3359 0.332031L6.125 4.54297L1.88672 0.332031C1.61328 0.0859375 1.20312 0.0859375 0.957031 0.332031L0.328125 0.960938C0.0820312 1.20703 0.0820312 1.61719 0.328125 1.89062L5.66016 7.19531Z"-->
    <!--              fill="#070241"-->
    <!--            />-->
    <!--          </svg>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div-->
    <!--        @click="activeParamenter = 'crime'"-->
    <!--        :class="activeParamenter === 'crime' ? 'opacity-1' : 'opacity-50'"-->
    <!--        class="Crime cursor-pointer text-transpurple "-->
    <!--      >-->
    <!--        <h1-->
    <!--          :class="-->
    <!--            activeParamenter === 'crime'-->
    <!--              ? 'border-transpurple'-->
    <!--              : 'border-transgray900'-->
    <!--          "-->
    <!--          class="text-base mb-4 pl-10 pb-2 font-medium leading-19 border-b"-->
    <!--        >-->
    <!--          Crime-->
    <!--        </h1>-->
    <!--        <div class="crime pl-10 pr-10 flex justify-start items-center">-->
    <!--          <h1 class="text-lg   font-normal leading-22 mr-2">-->
    <!--            Select type-->
    <!--          </h1>-->
    <!--          <svg-->
    <!--            width="13"-->
    <!--            height="8"-->
    <!--            viewBox="0 0 13 8"-->
    <!--            fill="none"-->
    <!--            xmlns="http://www.w3.org/2000/svg"-->
    <!--          >-->
    <!--            <path-->
    <!--              d="M5.66016 7.19531C5.90625 7.44141 6.31641 7.44141 6.5625 7.19531L11.8945 1.89062C12.1406 1.61719 12.1406 1.20703 11.8945 0.960938L11.2656 0.332031C11.0195 0.0859375 10.6094 0.0859375 10.3359 0.332031L6.125 4.54297L1.88672 0.332031C1.61328 0.0859375 1.20312 0.0859375 0.957031 0.332031L0.328125 0.960938C0.0820312 1.20703 0.0820312 1.61719 0.328125 1.89062L5.66016 7.19531Z"-->
    <!--              fill="#070241"-->
    <!--            />-->
    <!--          </svg>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div-->
    <!--        @click="activeParamenter = 'enforcement'"-->
    <!--        :class="activeParamenter === 'enforcement' ? 'opacity-1' : 'opacity-50'"-->
    <!--        class="Enforcement  cursor-pointer text-transpurple "-->
    <!--      >-->
    <!--        <h1-->
    <!--          :class="-->
    <!--            activeParamenter === 'enforcement'-->
    <!--              ? 'border-transpurple'-->
    <!--              : 'border-transgray900'-->
    <!--          "-->
    <!--          class="text-base mb-4 pb-2 pl-10 font-medium leading-19 border-b "-->
    <!--        >-->
    <!--          Enforcement-->
    <!--        </h1>-->
    <!--        <div class="enforcement pl-10 pr-10 inline-flex items-center">-->
    <!--          <h1 class="text-lg  font-normal leading-22 mr-2">-->
    <!--            Agency-->
    <!--          </h1>-->
    <!--          <svg-->
    <!--            width="13"-->
    <!--            height="8"-->
    <!--            viewBox="0 0 13 8"-->
    <!--            fill="none"-->
    <!--            xmlns="http://www.w3.org/2000/svg"-->
    <!--          >-->
    <!--            <path-->
    <!--              d="M5.66016 7.19531C5.90625 7.44141 6.31641 7.44141 6.5625 7.19531L11.8945 1.89062C12.1406 1.61719 12.1406 1.20703 11.8945 0.960938L11.2656 0.332031C11.0195 0.0859375 10.6094 0.0859375 10.3359 0.332031L6.125 4.54297L1.88672 0.332031C1.61328 0.0859375 1.20312 0.0859375 0.957031 0.332031L0.328125 0.960938C0.0820312 1.20703 0.0820312 1.61719 0.328125 1.89062L5.66016 7.19531Z"-->
    <!--              fill="#070241"-->
    <!--            />-->
    <!--          </svg>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script>
// @ is an alias to /src

import Hero from "@/components/Hero";
export default {
  name: "Index",
  components: { Hero }
};
</script>
