<template>
  <section class="pt-16 md:pt-24">
    <div class="px-2 md:px-10 xl:px-16">
      <div class="container mx-auto mb-12">
        <div class="flex flex-col lg:grid grid-cols-2 gap-6">
          <div class="items-center">
            <h1
              class="text-2xl mb-6 text-transpurple font-semibold md:text-3xl xl:text-4xl"
            >
              We monitor and provide information on Corruption Cases in Nigeria
            </h1>
            <p class="text-justify mb-4">
              Corruption Cases Database is a project of
              <a
                class="text-link"
                href="//transparencit.com"
                target="_blank"
                rel="noreferrer noopener"
                >TransparencIT</a
              >
              funded and supported by
              <a
                class="text-link"
                href="//trustafrica.org"
                target="_blank"
                rel="noreferrer noopener"
                >TrustAfrica</a
              >
              and
              <a
                class="text-link"
                href="//www.gov.uk/government/organisations/department-for-international-development"
                target="_blank"
                rel="noreferrer noopener"
                >UK Department for International Development</a
              >
              to monitor corruption cases in Nigeria. The aim is to ensure
              compliance to extant laws, reduce delays, improve efficiency,
              achieve speedy trial and conclusion of cases. The project also
              promotes judicial accountability and enhances citizens’
              participation in judicial processes by sensitizing and empowering
              them with information on judicial proceedings in a simplified and
              appealing format.
            </p>
            <p class="text-justify mb-4">
              The corruption cases database provides information that helps
              citizens to map trends and patterns of prosecution, offences,
              locations, length of trial, status of cases and the extent of
              compliance with the Administration of Criminal Justice Act/Laws by
              stakeholders.
            </p>
            <p class="text-justify">
              The project also assesses the performance of key elements of the
              justice system which could serve as a vehicle to open justice,
              promote judicial reforms and uphold rights of fair hearings in
              court.
            </p>
          </div>
          <div class="hidden lg:block lg:mx-auto lg:my-auto">
            <img
              alt="Scales of justice"
              class="object-scale-down justice"
              src="../assets/images/vectors/justice.svg"
            />
          </div>
        </div>
        <div class="md:flex justify-between pt-5">
          <div class="py-8 mb-4 md:mb-0">
            <img
              alt="TransparencIT logo"
              class="object-scale-down h-16"
              src="@/assets/images/vectors/site-logo.svg"
            />
          </div>
          <div class="py-8">
            <img
              alt="TrustAfrica logo"
              class="object-scale-down h-16"
              src="@/assets/images/trustafrica.png"
            />
          </div>
          <div class="py-8">
            <img
              alt="DFID logo"
              class="object-scale-down h-16"
              src="@/assets/images/dfid.png"
            />
          </div>
        </div>
      </div>
      <div class="pt-8 pb-16 md:mb-24">
        <div class="mx-auto md:w-5/6 lg:w-2/3">
          <h5 class="text-lg md:text-xl text-center py-3">
            Send us a message, we would respond within 24hrs
          </h5>
        </div>
        <div class="md:w-5/6 lg:w-2/3 mx-auto">
          <div class="shadow-lg bg-light rounded">
            <div class="p-4 md:p-8">
              <form method="POST" @submit.prevent="sendMail">
                <div class="md:grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label for="name">Name</label>
                    <div
                      class="flex mb-4 bg-white rounded justify-between items-center shadow-md"
                    >
                      <label for="name" class="flex w-full items-center m-2">
                        <input
                          v-model="name"
                          required
                          id="name"
                          class="h-8 focus:outline-none pl-1 w-full"
                          type="text"
                          placeholder="Enter your name"
                        />
                      </label>
                    </div>
                  </div>
                  <div>
                    <label for="email">Email</label>
                    <div
                      class="flex mb-4 bg-white rounded justify-between items-center shadow-md"
                    >
                      <label for="email" class="flex w-full items-center m-2">
                        <input
                          v-model="email"
                          required
                          id="email"
                          class="h-8 focus:outline-none pl-1 w-full"
                          type="email"
                          placeholder="Enter your email"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <label for="subject">Subject</label>
                <div
                  class="flex mb-4 bg-white rounded justify-between items-center shadow-md"
                >
                  <label for="subject" class="flex w-full items-center m-2">
                    <input
                      v-model="subject"
                      required
                      id="subject"
                      class="h-8 focus:outline-none pl-1 w-full"
                      type="text"
                      placeholder="Enter the subject"
                    />
                  </label>
                </div>
                <label for="message">Message</label>
                <div
                  class="flex bg-white rounded justify-between items-center shadow-md"
                >
                  <label for="message" class="flex w-full items-center m-2">
                    <textarea
                      v-model="message"
                      rows="3"
                      placeholder="Enter your message..."
                      name="message"
                      id="message"
                      value=""
                      class="w-full focus:outline-none py-2 px-1"
                    ></textarea>
                  </label>
                </div>
                <button
                  type="submit"
                  class="w-full mt-4 p-2 bg-transpurple text-white rounded shadow-md hover:shadow-lg"
                  :disabled="isLoading"
                >
                  {{ isLoading ? "Sending..." : "Send" }}
                </button>
              </form>
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
