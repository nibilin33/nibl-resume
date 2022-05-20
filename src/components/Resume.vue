<template>
  <div>
    <div class="head">
      <a class="download-pdf" href="http://www.baidu.com">下载 PDF</a>
      <p class="last-modified">最后更新于2022年5月</p>
    
    </div>
    <main>
      <BaseInfo/>
      <JobInfo/>
    </main>
  </div>
</template>

<script>
import BaseInfo from './BaseInfo.vue';
import JobInfo from './Job.vue';

export default {
  name: "Resume",
  components:{
    BaseInfo,
    JobInfo
  }
};
</script>
