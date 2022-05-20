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
                <a href="" target="_blank" title="">数字虚拟</a>
              </h3>
              <ol>
                <li class="project-2">
                  <div class="item-bd">
                    <div class="div-item">
                        <h3 class="project-des">【简介】</h3>
                        <p class="item-project-des">
                        </p>
                    </div>
                      <div class="div-item">
                        <h3 class="project-des">【主要业绩】</h3>
                        <p class="item-project-des">
                             
                        </p>
                    </div>
                  </div>
                </li>
              </ol>
            </li>
            <li class="project-1">
              <h3 class="project-name">
                <a href="" target="_blank" title="">IoT</a>
              </h3>
              <ol>
                <li class="project-2">
                  <div class="item-bd">
                    <div class="div-item">
                        <h3 class="project-des">【简介】</h3>
                        <p class="item-project-des">
                        </p>
                    </div>
                      <div class="div-item">
                        <h3 class="project-des">【主要业绩】</h3>
                        <p class="item-project-des">
                             
                        </p>
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
                          UC:企业统一通讯的解决方案，包含管理端和用户端（PC,移动端）。<br/>
                          管理端主要使用vue做前端，node做BFF层，
                          redis做缓存，nginx做反向代理服务器。<br/>
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
                            在支撑正常的需求开发的同时，引导UC项目的重构。由于UC是很多人经手过，代码量非常庞大，<br/>    
                            可以看到各种各样的编码风格，同时技术债务高台。于是我做了重构的整体考虑，<br/>    
                            输出规范，多彩解决方案，内嵌web优化方案，
                            PC,移动逻辑UI抽离代码，<br/> 
                            引入了entity,adapter,interface的划分思路,<br/>             
                            自动化测试方案，<br/>    
                            重构后的更新策略等。<br/>    
                            同时也引入electron作为模拟工具。<br/>        
                            优化了整个开发链路，提高了整体效率。<br/>     
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
                <li>Python,Java</li>
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
