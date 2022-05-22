<template>
  <Resume />
</template>

<script>
import Resume from "./components/Resume.vue";
import {
  getLanguage
} from './i18n';
export default {
  name: "App",
  components: {
    Resume,
  },
  mounted() {
    console.log("mounted",getLanguage());
  },
};
</script>
