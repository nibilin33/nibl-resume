import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import { message } from "./i18n";
import "./main.scss";
const paths = location.pathname.split('/');
const lastItem = paths.pop();
const language = paths.length > 1 ? lastItem: 'cn';
const i18n = createI18n({
  messages: message,
  locale: language,
  useScope: 'global'
});
const app = createApp(App);
app.use(i18n);
app.mount("#app");
