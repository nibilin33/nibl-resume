<template>
  <div>
    <div class="head">
      <div>
        <a class="download-pdf" href="https://www.sejda.com/html-to-pdf"
          >PDF</a
        >
        <router-link to="/">Chinese Version</router-link>
      </div>
      <p class="last-modified">last modified 2023.2</p>
    </div>
    <main>
      <BaseInfo />
      <JobInfo />
    </main>
  </div>
</template>

<script>
import BaseInfo from "../components/BaseInfo.vue";
import JobInfo from "../components/EnJob.vue";
import { getLanguage } from "../i18n";

export default {
  name: "Resume",
  components: {
    BaseInfo,
    JobInfo,
  },
  mounted(){
    const language = getLanguage();
    this.$i18n.locale = language;
  },
  methods: {
    downloadPdf() {
      alert(this.$t("message.unrealized"));
    },
  },
};
</script>
