<template>
  <section class="pt-4 lg:pt-12">
    <div class="pb-5 mb-2 md:mb-32 mx-auto px-2 md:px-10 xl:px-16 py-6 lg:py-1">
      <div class="flex text-xl md:text-2xl text-transpurple mb-6">
        <ArchiveIcon class="md:mt-1 mr-2" /> <strong>Frequently Asked Questions</strong>
      </div>
      <hr class="my-8" />
      <vsa-list>
        <template v-for="(faq, index) in faqs">
          <vsa-item :key="index">
            <vsa-heading>
              {{ faq.question }}
            </vsa-heading>

            <vsa-content>
              {{ faq.answer }}
            </vsa-content>
          </vsa-item>
        </template>
      </vsa-list>
    </div>
    <Footer className="bg-hero" />
  </section>
</template>

<script>
import Footer from "../components/partials/Footer";
import {
  VsaList,
  VsaItem,
  VsaHeading,
  VsaContent
} from 'vue-simple-accordion';
import 'vue-simple-accordion/dist/vue-simple-accordion.css';

export default {
  components: {
    Footer,
    VsaList,
    VsaItem,
    VsaHeading,
    VsaContent
  },
  data() {
    return {
      host: `${window.host}`,
      faqs: [
        {
          question: "What is press monitor?",
          answer: "The press monitor is an independent project supported by the American Bar Association's Center for Human Rights, which tracks the freedom of journalists and citizen bloggers reporting on Nigeria's 2023 elections. The project aims to provide insights into any attacks, arrests, detentions, and trials of journalists or citizen bloggers before, during, and after the election, to protect journos and promote just and fair trials."
        },
        {
          question: "What incidents does the project track?",
          answer: "The project tracks various incidents related to the freedom of journalists and citizen bloggers reporting on Nigeria's 2023 elections. These include arrests, assaults, attacks, seizures of equipment, restrictions on coverage, denial of access, and criminal charges against journalists or citizen bloggers in Nigeria."
        },
        {
          question: "Who is referred to as a journalist or citizen blogger under the project?",
          answer: "A journalist is a trained professional who collects, investigates, and reports news and events of Nigeria’s 2023 elections through traditional media outlets such as newspapers, magazines, radio, or television, as well as online media outlets, while a citizen-blogger is someone who engages in online posting or reporting on social media platforms, blogs, or personal websites to share perspectives, opinions, and experiences with a larger audience on the elections."
        },
        {
          question: "What is the process of tracking the incidents?",
          answer: "TransparencIT identifies incidents related to the freedom of journalists and citizen bloggers reporting on Nigeria's 2023 elections through its sentinels and collects field-based data on the incidents using a monitoring template. The organization collaborates with the media and legal practitioners and conducts desk research to identify and follow past incidents to report and document them. All data collected is thoroughly verified before being uploaded onto the project's database to ensure its accuracy and reliability. The database serves as a centralized source of information on incidents of arrests, assaults, attacks, seizures of equipment, restrictions on coverage, denial of access, and criminal charges against journalists or citizen bloggers in Nigeria."
        },
        {
          question: "How can I use the press monitor database?",
          answer: "The database helps you to stay informed about any threats to the freedom of journalists and citizen bloggers reporting on Nigeria's 2023 elections. It provides a centralized source of information on incidents of arrest, assault, attack, seizure of equipment, restrictions on coverage, denial of access, and criminal charges against journalists or citizen bloggers. This information can be used to advocate for greater press freedom and protections for journalists. It can also be used to hold government officials and law enforcement agencies accountable for any violations of press freedom or human rights. Additionally, the project database can serve as a resource for researchers, policymakers, and civil society organizations seeking to understand and address issues related to press freedom and the electoral process."
        },
        {
          question: "Who funds the project?",
          answer: "The project is primarily funded by the American Bar Association's Center for Human Rights."
        },
        {
          question: "Can I site information from the database?",
          answer: "Yes, the information in the database can be used for the purposes of research or reporting on journalism in Nigeria, provided that the information is properly attributed to the source."
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.vsa-item__trigger:focus, .vsa-item__trigger:hover {
  background-color: #070241 !important;
}
.vsa-list {
  max-width: 100% !important;
  width: 100% !important;
  border: none;
}
</style>
