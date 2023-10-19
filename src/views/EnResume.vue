<template>
  <div>
    <div class="head">
      <div>
        <a class="download-pdf" href="https://www.sejda.com/html-to-pdf">PDF</a>
        <router-link to="/">Chinese Version</router-link>
      </div>
      <p class="last-modified">last modified 2023.10</p>
    </div>
    <main>
      <BaseInfo />
      <div class="resume-page">
        <div class="resume-wrapper">
          <h2>CAREER OBJECTIVE</h2>
          <p>Seeking a position as a software engineer in a company where I can utilize my skills and experience to
            improve the company's products and services.</p>
        </div>
        <div class="resume-wrapper">
          <h2>WORK EXPERIENCE</h2>
          <h4>Senior Front-End Engineer </h4>
          <h6>Mainto Group | March 2023 - Present </h6>
          <ul>
            <li>Successfully maintained and reconstructed the himo miniprogram, a multi-platform application, resulting in a 30% increase in user engagement and a 20% increase in overall performance.</li>
            <li>Responsible for improving infrastructure, such as implemented Continuous Integration and Continuous Deployment (CICD) pipelines, reducing downtime by 45% and increasing efficiency by 25%.</li>
            <li>Formulated and enforced regulations and best practices for infrastructure management and security, resulting in a 50% reduction in security incidents.</li>
            <li>Led the technological innovation, selection, and design of new business solutions, resulting in a 15% reduction in costs and a 10% increase in revenue.</li>
            <li>Optimized existing business solutions to improve efficiency and reduce costs, resulting in a 20% increase in productivity.</li>
          </ul>
     
        </div>
        <div class="resume-wrapper">
          <h2>KEY SKILLS</h2>
          <h3>Web Application Development</h3>
          <h3>React.js / Vue.js</h3>
          <h3>Front-End </h3>

          languages,libraries,frameworks,testing
        </div>
      </div>

    </main>
  </div>
</template>
<script>
import BaseInfo from "../components/BaseInfo.vue";
import { getLanguage } from "../i18n";

export default {
  name: "EnResume",
  components: {
    BaseInfo,
  },
  mounted() {
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