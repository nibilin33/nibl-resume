<template>
  <Resume />
</template>

<script>
import Resume from "../components/Resume.vue";
import {
  getLanguage
} from '../i18n';
export default {
  name: "App",
  components: {
    Resume,
  },
  mounted() {
    const language = getLanguage();
    if(language === 'en') {
      alert('The English version is not finished yet😭')
    }
  },
};
</script>
