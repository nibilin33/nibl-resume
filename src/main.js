import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import { message, getLanguage } from "./i18n";
import "./main.scss";
const language = getLanguage();
const i18n = createI18n({
  messages: message,
  locale: language,
  fallbackLocal: language
});
const app = createApp(App);
app.use(i18n);
app.mount("#app");
