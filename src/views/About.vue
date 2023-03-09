<template>
  <section class="pt-16 md:pt-24">
    <div class="px-2 md:px-10 xl:px-16">
      <div class="container mx-auto lg:mb-12">
        <div class="flex flex-col lg:grid grid-cols-2 gap-6">
          <div class="items-center">
            <h1
              class="text-3xl mb-6 text-transpurple font-semibold"
            >
              <u>About</u>
            </h1>
            <p class="text-xl text-justify mb-4">
              The Press Freedom Monitor project tracks incidents of attack, arrest, detention and trial of journalists or citizen bloggers reporting around Nigeria’s 2023 elections to provide insights into the violations of rights and criminalization of journalism; offer data to use for evidence-based reporting of abuse of journalists during, before and after the election; and ensure a fair trial for arrested journos.
            </p>
          </div>
          <div class="pl-12 text-right">
            <!-- <img
              alt="Scales of justice"
              class="justice" style="height: 40rem;"
              src="@/assets/images/vectors/press_freedom.svg"
            /> -->
            <h1 class="text-xl md:text-3xl font-semibold text-transpurple mb-6"><u>Contact Us</u></h1>
            <ul>
              <li class="mb-4 md:text-2xl">tips@transparencit.com</li>
              <li class="mb-4 md:text-2xl">info@transparencit.com</li>
            </ul>
            <div class="pt-4">
              <h1 class="text-xl md:text-3xl font-semibold text-transpurple mb-4"><u>Partners</u></h1>
              <div class="text-xl pb-8 mb-4 md:mb-0">
                <p class="text-right">American Bar Association Center for Human Rights</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer className="bg-hero" />
  </section>
</template>

<script>
import Footer from "../components/partials/Footer";
import axios from "axios";

export default {
  components: {
    Footer
  },
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
      isLoading: false
    };
  },
  methods: {
    sendMail() {
      this.isLoading = true;
      axios
        .post(`${window.host}/api/contact`, {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message
        })
        .then(response => {
          if (response.data) {
            window.toastr.success(`Sent! ${response.data.message}`);
            this.name = "";
            this.email = "";
            this.subject = "";
            this.message = "";
          } else {
            window.toastr.error("Unable to send message. Try again.");
          }
          this.isLoading = false;
        })
        .catch(error => {
          window.toastr.error(error.response.data.message);
          this.isLoading = false;
        });
    }
  }
};
</script>

<style scoped>
</style>