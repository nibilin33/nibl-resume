<template>
  <div class="content-bd">
    <div class="content-left">
      <section class="practice">
        <header class="section-hd">
          <span class="section-title-l"></span>
          <h2 class="section-title">工作经历</h2>
          <span class="section-title-r"></span>
        </header>
        <div class="section-bd">
          <JobItem company="Horizons" status="remote" time="2022.11.25 - now">
            <li class="project-1">
              <h3 class="project-name">
                <a href="#" target="_blank" title="Horizons"
                  >
                  Join
                  </a>
              </h3>
              <ol>
                <li class="project-2">
                  <div class="item-bd">
                    <div class="div-item">
                      <h3 class="project-des">【项目简介】</h3>
                      <p class="item-project-des">
                        提供一站式雇佣解决方案，同时负责薪酬发放的人力资源SaaS平台(<a href="https://app.joinhorizons.com/login">joinhorizons</a>)
                        
                      </p>
                    </div>
                 
                    <div class="div-item">
                      <h3 class="project-des">【工作方向】</h3>
                      <ul class="section-content">
                        <li>
                          <a href="https://join-ui.joinhorizons.com/">Join-UI</a> 组件库开发维护
                        </li>
                        <li>Join 管理端&用户端重构</li>
                      </ul>
                    </div>
                    <div class="div-item">
                      <h3 class="project-des">【技术】</h3>
                      <ul class="section-content">
                        <li>微前端集成，完成阶段性重构结果上线
                            <!-- <p class="item-project-des">
                            问题：线上问题都是通过问题描述单点排查，无法有效复现问题就无法定位问题    
                            <br />
                            解决方式: 利用indexDB存储日志同时通过边缘脚本获取请求的traceid作为日志轨迹关联依据<br />
                          </p> -->
                        </li>
                        <li>i18n一站式解决方案
                            <!-- <p class="item-project-des">
                            问题：线上问题都是通过问题描述单点排查，无法有效复现问题就无法定位问题    
                            <br />
                            解决方式: 利用indexDB存储日志同时通过边缘脚本获取请求的traceid作为日志轨迹关联依据<br />
                          </p> -->
                        </li>
                        <li>制定多端组件开发优化方案</li>
                        <li>Mock方案优化迁移</li>
                        <!-- <li>完善自动化Pipeline流程</li> -->
                      </ul>
                    </div>
                  </div>
                </li>
              </ol>
            </li>
          </JobItem>
        </div>
        <div class="section-bd">
          <JobItem company="开源社区" status="open">
            <li class="project-1">
              <h3 class="project-name">
                <a href="https://github.com/codepod-io/codepod" target="_blank" title="codepod"
                  >
                  Codepod
                  </a>
              </h3>
            </li>
          </JobItem>
        </div>
        <div class="section-bd">
          <JobItem company="阿里巴巴集团" time="2020.06.18 至 2022.05.20">
            <li class="project-1">
              <h3 class="project-name">
                <a href="" target="_blank" title=""
                  >淘宝数字虚拟
                  <!-- （2022.03 - 2022.05） -->
                </a>
              </h3>
              <ol>
                <li class="project-2">
                  <div class="item-bd">
                    <div class="div-item">
                      <h3 class="project-des">【业务概况】</h3>
                      <p class="item-project-des">
                        分为直充<span class="alias_light">（充值中心）</span
                        >，非充<span class="alias_light">（号卡，流量包）</span
                        >，互动<span class="alias_light">（薅羊毛）</span
                        >，B端侧商家运营平台，内部运营平台并且通过A/B实验助力用户增长   
                      </p>
                    </div>
                    <div class="div-item">
                      <h3 class="project-des">【技术】</h3>
                      <ul class="section-content">
                        <li>H5全链路日志
                            <!-- <p class="item-project-des">
                            问题：线上问题都是通过问题描述单点排查，无法有效复现问题就无法定位问题    
                            <br />
                            解决方式: 利用indexDB存储日志同时通过边缘脚本获取请求的traceid作为日志轨迹关联依据<br />
                          </p> -->
                        </li>
                        <li>基于边缘计算的个性化SSR
                            <!-- <p class="item-project-des">
                              问题：不同的人群标签对应不同的展示效果，SSR服务器压力大，导致白屏时间偏长  
                               <br />
                              解决方式: 通过边缘计算实现CDN动态策略缓存HTML，加速输出内容页面<br />
                          </p> -->
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ol>
            </li>
            <li class="project-1">
              <h3 class="project-name">
                <a href="" target="_blank" title=""
                  >蚂蚁IoT
                  </a
                >
              </h3>
              <ol>
                <li class="project-2">
                  <div class="item-bd">
                    <div class="div-item">
                      <h3 class="project-des">【简介】</h3>
                      <p class="item-project-des">
                        涵盖所有蚂蚁线下支付设备，中小商家里的支付宝盒，大型商场里的自助点餐机，扫脸付款设备等等<br />
                        支付设备的切入点是为了解决支付问题，除了支付场景之外，也有很多和内容运营相关的事情
                      </p>
                    </div>
                    <div class="div-item">
                      <h3 class="project-des">【工作方向】</h3>
                      <ul class="section-content">
                        <li>
                          日常IoT设备上动态化业务场景<span class="alias_light"
                            >（营销大促向）</span
                          >
                        </li>
                        <li>IoT营销类UIPaaS</li>
                        <li>刷脸相关的小程序应用/插件</li>
                        <li>多媒体：音视频通话，OCR小程序插件等</li>
                      </ul>
                    </div>
                    <div class="div-item">
                      <h3 class="project-des">【技术】</h3>
                      <ul class="section-content">
                        <li>
                          工程效能
                          <p class="item-project-des">
                            实现了对端调试工具，可视化操作，繁琐重复的手工流程自动化<br />
                            提供了桌面版本<span class="alias_light"
                              >（用python开发）</span
                            >和 vscode插件版本
                            <!-- 问题：整个开发调试排查流程更多依赖文档步骤和重复地命令行执行，效率低
                            <br />
                            解决方式: 实现了对端调试工具，可视化操作，繁琐重复的手工流程自动化<br />
                            提供了桌面版本<span class="alias_light"
                              >（用python开发）</span
                            >和 vscode插件版本 -->
                          </p>
                          <img
                            style="width: 200px"
                            @click="openImg"
                            src="https://nibilin33.github.io/nibl-resume/static/lique.webp"
                          />
                        </li>
                        <li>
                          IoT前端优化<span class="alias_light"
                            >（离线包->内部自研跨端容器）</span
                          >
                          <p class="item-project-des">
                            基于IoT内部的自研轻量跨端容器，主导方案框架设计，封装canvas渲染框架，一套代码构建多端产物，自动H5降级
                            <!-- 背景：IoT设备种类多，配置参差不齐，很多设备无法达到秒开的诉求<span
                              class="alias_light"
                              >（离线包方案）</span
                            >
                            <br />
                            问题：IoT内部做了自研轻量跨端容器，由于还不成熟的容器，UI层面支持能力弱，营销需要投入双倍人力产出h5版本和内部应用版本<br />
                            解决方式: 基于IoT内部的自研轻量跨端容器，主导方案框架设计，封装canvas渲染框架，一套代码构建多端产物，自动H5降级<br />
                           -->
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ol>
            </li>
          </JobItem>
          <JobItem
            company="厦门亿联网络技术股份有限公司"
            time="2017.06 至 2020.2.21"
          >
            <li class="project-1">
              <h3 class="project-name">
                <a href="" target="_blank" title="">UC</a>
              </h3>
              <ol>
                <li class="project-2">
                  <div class="item-bd">
                    <div class="div-item">
                      <h3 class="project-des">【项目简介】</h3>
                      <p class="item-project-des">
                        UC:企业统一通讯的解决方案，主要有设备管理，会议预约，PBX，短信网关，话题等功能<br />
                        <img
                            style="width: 400px"
                            @click="openImg"
                            src="https://nibilin33.github.io/nibl-resume/static/uc_2x.webp"
                        />
                        <!-- 管理端主要使用vue做前端，node做BFF层，
                        redis做缓存，nginx做反向代理服务器。<br /> -->
                        <!-- 用户端主要采用内嵌webview方式，主要有投票，问卷调查，公告，会议预约，PBX，短信网关，话题等功能 -->
                      </p>
                    </div>
                    <!-- <div class="div-item">
                      <h3 class="project-des">【个人职责】</h3>
                      <ul class="section-content">
                        <li>角色： 项目前端负责人</li>
                        <li>任务： 需求评审，任务分配，技术支持, 功能开发</li>
                      </ul>
                    </div> -->
                    <div class="div-item">
                      <h3 class="project-des">【主要业绩】</h3>
                      <p class="item-project-des">
                        - 主导项目重构和输出规范<br />
                        - 多彩、自动化测试解决方案<br />
                        - 利用Electron作为模拟工具，优化开发链，提高效率<br />
                        <!-- 在支撑正常的需求开发的同时，主导UC项目的重构。<br />
                        可以看到各种各样的编码风格，同时技术债务高台。<br />
                        于是我做了重构的整体考虑，输出规范，多彩解决方案，<br />
                        内嵌web优化方案，PC,移动逻辑UI抽离代码，<br />
                        引入了entity,adapter,interface的划分思路,<br />
                        自动化测试方案，重构后的更新策略等。<br />
                        同时也引入electron作为模拟工具。<br />
                        优化了整个开发链路，提高效率。<br /> -->
                      </p>
                    </div>
                    <div class="div-item">
                      <h3 class="project-des">【碰到过的问题】</h3>
                      <ul class="section-content">
                        <li>
                          性能优化<br />
                          1. 会议预约组件：从打开奔溃到秒开<br />
                          2. 组织架构树:4+s -> 1+s<br />
                          3. 内嵌webview加载慢: 离线资源包<br />
                        </li>
                        <li>内存泄漏 : 去循环引用，主动触发GC</li>
                        <li>高并发NG502: 压测分析，参数调优</li>
                        <li>H5混合开发跨部门联调效率低: electron 做模拟工具</li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ol>
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
          <h2 class="section-title">自我介绍</h2>
          <span class="section-title-r"></span>
        </header>
        <!--技能:WEB端开发-->
        <div class="section-bd">
          <div class="item">
            <img
              style="width: 100%"
              @click="openImg"
              src="https://nibilin33.github.io/nibl-resume/static/work.webp"
            />
          </div>
        </div>
      </section>
      <section class="skill">
        <header class="section-hd">
          <span class="section-title-l"></span>
          <h2 class="section-title">技能</h2>
          <span class="section-title-r"></span>
        </header>
        <!--技能:WEB端开发-->
        <div class="section-bd">
          <div class="item">
            <div class="item-bd">
              <ul class="section-content">
                <li>Javascript,Typescript,Html5,CSS</li>
                <li>React,Vue,小程序,Tailwindcss</li>
                <li>Webpack,Rollup,Vite</li>
                <li>Python,Node,Java,Shell,Serverless</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <!--奖项/证书-->
      <section class="prize">
        <header class="section-hd">
          <span class="section-title-l"></span>
          <h2 class="section-title">奖项/证书</h2>
          <span class="section-title-r"></span>
        </header>
        <div class="section-bd">
          <div class="item">
            <div class="item-bd">
              <ul class="section-content">
                <li>获得过国家奖学金</li>
                <li>多次获院一等奖学金</li>
                <li>专业排名均在前三</li>
                <li>CET6</li>
                <li>英语水平良好,雅思成绩7.0（2022.10的成绩）</li>
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
          <div class="item">
            <h2 style="font-weight: bold; line-height: 24px; margin-top: 10px">
              感谢在百忙之中阅读这份履历
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
  methods: {
    openImg(e) {
      const { target } = e;
      if (target.currentSrc) {
        window.open(target.currentSrc);
      }
    },
  },
};
</script>
