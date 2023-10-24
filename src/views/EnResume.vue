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
      <BaseInfo :isEnglish="true"/>
      <div class="resume-page">
        <div class="resume-wrapper">
          <h2>CAREER OBJECTIVE</h2>
          <p> Becoming a Front-end architect, leveraging my skills and experience in Front-end development to design and implement the architecture of complex Front-end applications. <br/>
             I have a deep understanding of HTML, CSS, JavaScript, and modern Front-end frameworks like React, and I am experienced in software architecture and design patterns.</p>
        </div>
        <div class="resume-wrapper">
          <h2>WORK EXPERIENCE</h2>
          <p>&nbsp;</p>
          <!-- <h4>Senior Front-End Engineer </h4> -->
          <h6>Mainto Group | March 2023 - Present / China,On-site </h6>
          <ul>
            <li>Successfully maintained and reconstructed the himo miniprogram, a multi-platform application, resulting in a 30% increase in user engagement and a 20% increase in overall performance.</li>
            <li>Responsible for improving infrastructure, such as implemented Continuous Integration and Continuous Deployment (CICD) pipelines, reducing downtime by 45% and increasing efficiency by 25%.</li>
            <li>Formulated and enforced regulations and best practices for infrastructure management and security, resulting in a 50% reduction in security incidents.</li>
            <li>Led the technological innovation, selection, and design of new business solutions, resulting in a 15% reduction in costs and a 10% increase in revenue.</li>
            <li>Optimized existing business solutions to improve efficiency and reduce costs, resulting in a 20% increase in productivity.</li>
          </ul>
          <p>&nbsp;</p>
          <h6>Horizons | Nov 2022 - March 2023 / China,Remote </h6>
          <ul>
            <li>Integrated a micro-front-end solution quickly to complete periodic application refactoring and launch, improving the maintainability and scalability of the application.</li>
            <li>Maintained and developed the component library, improving component reusability and development efficiency.</li>
          </ul>
          <p>&nbsp;</p>
          <!-- 2020.06.18 - 2022.05.20 -->
          <h6>Alibaba Group | Jun 2020 - May 2022  / China,On-site</h6>
          <ul>
            <li>Responsible for daily business iteration (marketing and membership direction) on IoT devices and developing mini-programs/plugins for facial recognition and multimedia on mobile devices.</li>
            <li>Developed and utilized debugging tools to improve debugging and troubleshooting efficiency.</li>
            <li>Optimized performance by implementing a personalized SSR based on edge computing.</li>
          </ul>
          <p>&nbsp;</p>
          <!-- 2017.06 - 2020.2.21 -->
          <h6>Yealink | Jun 2017 - March 2020  / China,On-site</h6>
          <ul>
            <li>Optimized performance, improving application load time from crashing to under one second.</li>
            <li>Led project refactoring and output standardization, resulting in a 30% increase in development efficiency.</li>
            <li>Developed a colorful and automated testing solution, improving testing efficiency by 50%.</li>
            <li>Utilized Electron as a simulation tool to optimize the development chain, resulting in a 20% increase in productivity.</li>
          </ul>
        </div>
        <div class="resume-wrapper">
          <h2>KEY SKILLS</h2>
          <h6>Web Application Development</h6>
          <h6>React.js / Vue.js / Uniapp / Tailwindcss</h6>
          <h6>Webpack,Rollup,Vite</h6>
          <h6>Python,Node,Shell,Serverless</h6>
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