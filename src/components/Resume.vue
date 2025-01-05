<template>
  <div>
    <div class="head">
      <div>
        <a class="download-pdf" href="https://www.sejda.com/html-to-pdf"
          >PDF</a
        >
        <router-link to="/en">English Verison</router-link>
      </div>
      <p class="last-modified">最后更新于2025年1月</p>
    </div>
    <main>
      <BaseInfo />
      <JobInfo />
    </main>
  </div>
</template>

<script>
import BaseInfo from "./BaseInfo.vue";
import JobInfo from "./Job.vue";

export default {
  name: "Resume",
  components: {
    BaseInfo,
    JobInfo,
  },
  methods: {
    downloadPdf() {
      alert(this.$t("message.unrealized"));
    },
  },
};
</script>
