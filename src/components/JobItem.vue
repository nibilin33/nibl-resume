<template>
  <div class="item">
    <header class="item-hd">
      <h3 class="item-name">{{ company }}</h3>
      <span class="item-time">{{ time }}</span>
      <a class="btn item-more" href="" title="">{{ tag }}</a>
    </header>
    <ol class="item-project">
      <slot></slot>
    </ol>
  </div>
</template>
<script>
export default {
  name: "JobItem",
  props: {
    company: String,
    time: String,
    status: String,
  },
  data() {
    return {
      tag: this.status ? this.$t("message.school") : this.$t("message.work"),
    };
  },
};
</script>
