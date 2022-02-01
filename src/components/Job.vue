<template>
  <div class="content-bd">
    <div class="content-left">
      <section class="practice">
        <header class="section-hd">
          <span class="section-title-l"></span>
          <h2 class="section-title">项目经历</h2>
          <span class="section-title-r"></span>
        </header>
        <div class="section-bd">
          <JobItem company="蚂蚁金服（杭州）" time="2020.06.18 至今" />
          <JobItem
            company="厦门亿联网络技术股份有限公司"
            time="2017.06 至 2020.2.21"
          >
            <li class="project-1">
              <h3 class="project-name">
                <a href="" target="_blank" title="">UC</a>
              </h3>
            </li>
          </JobItem>
          <!--经历:在校-->
          <div class="item">
            <header class="item-hd">
              <h3 class="item-name">厦门亿联网络技术股份有限公司</h3>
              <span class="item-time">2016.12.16 ~ 2017.04</span>
              <a class="btn item-more" href="" title="">在校</a>
            </header>
            <div class="item-bd"></div>
          </div>
        </div>
      </section>
    </div>
    <div class="content-right">
      <section class="skill">
        <header class="section-hd">
          <span class="section-title-l"></span>
          <h2 class="section-title">技能</h2>
          <span class="section-title-r"></span>
        </header>
        <div class="section-bd"></div>
      </section>
      <!--奖项/证书-->
      <section class="prize">
        <header class="section-hd">
          <span class="section-title-l"></span>
          <h2 class="section-title">奖项/证书</h2>
          <span class="section-title-r"></span>
        </header>
        <div class="section-bd">
          <!--技能:WEB后端开发-->
          <div class="item">
            <div class="item-bd">
              <ul class="section-content">
                <li>获得过国家奖学金</li>
                <li>多次获院一等奖学金</li>
                <li>专业排名均在前三</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!--致谢-->
      <section class="thanks">
        <header class="section-hd">
          <span class="section-title-l"></span>
          <h2 class="section-title">致谢</h2>
          <span class="section-title-r"></span>
        </header>
        <div class="section-bd">
          <!--技能:WEB后端开发-->
          <div class="item">
            <h2 style="font-weight: bold; line-height: 24px; margin-top: 10px">
              感谢您在百忙之中阅读这份履历，希望有荣幸能为公司效力！再次致以我最诚挚的谢意！！
            </h2>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import JobItem from "./JobItem.vue";
export default {
  name: "JobInfo",
  components: {
    JobItem,
  },
};
</script>
