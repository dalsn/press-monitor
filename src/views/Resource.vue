<template>
  <section class="pt-4 lg:pt-12">
    <div class="pb-5 mb-2 md:mb-32 mx-auto px-2 md:px-10 xl:px-16 py-6 lg:py-1">
      <div class="flex text-xl md:text-2xl text-transpurple mb-6">
        <ArchiveIcon class="md:mt-1 mr-2" /> <strong>Frequently Asked Questions</strong>
      </div>
      <hr class="my-8" />
      <VueFaqAccordion
      active-color="#5E72E4"
      border-color="#070241"
      font-color="#070241"
      :items="faqs"
      />
    </div>
    <Footer className="bg-hero" />
  </section>
</template>

<script>
import Footer from "../components/partials/Footer";
import VueFaqAccordion from 'vue-faq-accordion';

export default {
  components: {
    Footer,
    VueFaqAccordion
  },
  data() {
    return {
      host: `${window.host}`,
      faqs: [
        {
          title: "What is Civic Space Watch?",
          value: "The Civic Space Watch is an independent project supported by the American Bar Association Center for Human Rights, which tracks incidents of violations and criminalization of freedoms and rights of activists, journalists, and citizens to promote and safeguard civil liberties and democratic values in Nigeria. The project aims to provide insights and data for evidence-based reporting, research and advocacy against the shrinking civic space."
        },
        {
          title: "What incidents does the project track?",
          value: "The project tracks various incidents related to the violations of freedoms and rights of activists, journalists, and citizens in Nigeria. These include the right to freedom from arbitrary arrest, right to freedom from forced disappearance, right to freedom from the death penalty, right to freedom from extrajudicial execution, right to freedom from torture and ill-treatment, right to assembly and association, right to opinion and expression, right to participate in government, and right to freedom of religion and belief."
        },
        {
          title: "Who is referred to as an activist or journalist under the project?",
          value: "An activist is a person who campaigns to bring about social and developmental change in communities, whilst a journalist is a trained professional or citizen-blogger who collects, investigates, and reports news and events in Nigeria through traditional media outlets such as newspapers, magazines, radio, television, as well as online media outlets, or by online posting/reporting on social media platforms, blogs, or personal websites to share perspectives, opinions, and experiences that safeguard democratic values and civil liberties."
        },
        {
          title: "What is the process of tracking the incidents?",
          value: "TransparencIT identifies incidents related to the freedoms and rights of activists, journalists and citizens through its sentinels and reportage and collects field-based data on the incidents using a monitoring template. All data collected is thoroughly reviewed and uploaded onto the project dashboard, which serves as a hub of information on the country’s state of civic space."
        },
        {
          title: "How can I use the Civic Space Watch dashboard?",
          value: "The dashboard helps you to stay informed about the state of civic space in Nigeria. It provides a centralized source of information on incidents of violations of the rights and freedoms of activists, journalists and citizens. This information can be used to advocate against the shrinking civic space, facilitate research and policy reforms, and build the capacities of civic space actors. It can also be used to hold government officials and law enforcement agencies accountable for any violations."
        },
        {
          title: "Who funds the project?",
          value: "The project is primarily funded by the American Bar Association's Center for Human Rights."
        },
        {
          title: "Can I cite information from the dashboard?",
          value: "Yes, the information in the dashboard can be used for advocacy, research or reporting on the civic space in Nigeria, provided that the information is properly attributed to the source."
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.faq-wrapper {
  max-width: 100% !important;
  width: 100% !important;
}
</style>
