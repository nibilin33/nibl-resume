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
          <JobItem company="阿里巴巴集团" time="2020.06.18 至 2022.05.20">
            <li class="project-1">
              <h3 class="project-name">
                <a href="" target="_blank" title="">淘宝数字虚拟（2022.03 - 2022.05）</a>
              </h3>
              <ol>
                <li class="project-2">
                  <div class="item-bd">
                    <div class="div-item">
                      <h3 class="project-des">【业务概况】</h3>
                      <p class="item-project-des">分为直充<span class="alias_light">（充值中心）</span>，非充<span class="alias_light">（号卡，流量包）</span>，互动<span class="alias_light">（薅羊毛）</span>，B端侧商家运营平台，内部运营平台</p>
                    </div>
                    <div class="div-item">
                      <h3 class="project-des">【技术】</h3>
                        <ul class="section-content">
                        <li>H5全链路日志 </li>
                        <li>基于边缘计算的个性化SSR </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ol>
            </li>
            <li class="project-1">
              <h3 class="project-name">
                <a href="" target="_blank" title="">蚂蚁IoT（2020.06 - 2022.03）</a>
              </h3>
              <ol>
                <li class="project-2">
                  <div class="item-bd">
                    <div class="div-item">
                      <h3 class="project-des">【简介】</h3>
                      <p class="item-project-des">
                        涵盖所有蚂蚁线下支付设备，中小商家里的支付宝盒，大型商场里的自助点餐机，扫脸付款设备等等<br/>
                        支付设备的切入点是为了解决支付问题，除了支付场景之外，也有很多和内容运营相关的事情
                        </p>       
                    </div>
                    <div class="div-item">
                      <h3 class="project-des">【工作内容】</h3>
                      <ul class="section-content">
                        <li>日常IoT设备上动态化业务场景<span class="alias_light">（营销大促向）</span></li>
                        <li>IoT营销类UIPaaS</li>
                        <li>移动端刷脸相关的小程序应用/插件</li>
                        <li>移动端音视频通话，OCR小程序插件</li>
                      </ul>
                    </div>
                    <div class="div-item">
                      <h3 class="project-des">【技术】</h3>
                        <ul class="section-content">
                        <li>工程效能
                          <p class="item-project-des">
                            实现了对端调试工具，可视化操作，繁琐重复的手工流程自动化<br/>
                            提供了桌面版本<span class="alias_light">（用python开发）</span>和 vscode插件版本
                          </p> 
                        </li>
                        <li>IoT前端性能优化<span class="alias_light">（离线包->内部自研跨端容器）</span>
                          <p class="item-project-des">
                            主导方案框架设计，底层基于Skia能力，封装渲染框架，同时支持一套代码构建多端产物<br/>
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
                        UC:企业统一通讯的解决方案，包含管理端和用户端（PC,移动端）。<br />
                        管理端主要使用vue做前端，node做BFF层，
                        redis做缓存，nginx做反向代理服务器。<br />
                        用户端主要采用内嵌webview方式，主要有投票，问卷调查，公告，会议预约，PBX，短信网关，话题等功能
                      </p>
                    </div>
                    <div class="div-item">
                      <h3 class="project-des">【个人职责】</h3>
                      <ul class="section-content">
                        <li>角色： 项目前端负责人</li>
                        <li>任务： 需求评审，任务分配，技术支持, 功能开发</li>
                      </ul>
                    </div>
                    <div class="div-item">
                      <h3 class="project-des">【主要业绩】</h3>
                      <p class="item-project-des">
                        在支撑正常的需求开发的同时，主导UC项目的重构。<br />
                        可以看到各种各样的编码风格，同时技术债务高台。<br />
                        于是我做了重构的整体考虑，输出规范，多彩解决方案，<br />
                        内嵌web优化方案，PC,移动逻辑UI抽离代码，<br />
                        引入了entity,adapter,interface的划分思路,<br />
                        自动化测试方案，重构后的更新策略等。<br />
                        同时也引入electron作为模拟工具。<br />
                        优化了整个开发链路，提高效率。<br />
                      </p>
                    </div>
                    <div class="div-item">
                      <h3 class="project-des">【碰到过的问题】</h3>
                      <ul class="section-content">
                        <li>内存泄漏 : 去循环引用，主动触发GC</li>
                        <li>上万的组织树展示: 可视区间</li>
                        <li>内嵌web加载慢: 离线资源包</li>
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
          <h2 class="section-title">技能</h2>
          <span class="section-title-r"></span>
        </header>
        <!--技能:WEB端开发-->
        <div class="section-bd">
          <div class="item">
            <div class="item-bd">
              <ul class="section-content">
                <li>Javascript,Html5,CSS</li>
                <li>React,Vue,小程序</li>
                <li>Webpack,Rollup</li>
                <li>Python,Java,Shell</li>
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
};
</script>
