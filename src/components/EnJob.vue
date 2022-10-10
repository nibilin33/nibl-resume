<template>
  <div class="content-bd">
    <div class="content-left">
      <section class="practice">
        <header class="section-hd">
          <span class="section-title-l"></span>
          <h2 class="section-title">Working experience</h2>
          <span class="section-title-r"></span>
        </header>
        <div class="section-bd">
          <JobItem company="Alibaba Group" time="2020.06.18 - 2022.05.20">
            <li class="project-1">
              <h3 class="project-name">
                <a href="" target="_blank" title=""
                  >Digital Virtual</a
                >
              </h3>
              <ol>
                <li class="project-2">
                  <div class="item-bd">
                    <div class="div-item">
                      <h3 class="project-des">【Business Overview】</h3>
                      <p class="item-project-des">
                        including direct charging (recharge centre), <br/>
                        non-charging (number card, traffic pack), Interactive games (Wool-gathering), <br/>
                        B-side merchant operation platform, Internal operation platform,<br/>
                        and through A/B experiments to help user growth   <br/>
                      </p>
                    </div>
                    <div class="div-item">
                      <h3 class="project-des">【Techniques】</h3>
                      <ul class="section-content">
                        <li>H5 full-link log
                            <p class="item-project-des">
                            <b>Problem:</b> Online problems were identified through a single point in the problem description <br/>
                            and couldnot be located if the problem couldnot be effectively reproduced <br/>
                            <b>Solution: </b> Used indexDB to store logs and an edge script to <br/>
                            get the traceid of the request as a basis for log trace correlation<br />
                          </p>
                        </li>
                        <li>Personalised SSR based on edge computing
                            <p class="item-project-des">
                              <b>Problem:</b> Different crowd tags correspond to different display effects, <br />
                              SSR server pressure, resulting in long white screen time 
                               <br />
                              <b>Solution:</b> Used edge computing to realize CDN's dynamic policy caching of HTML,<br />
                              accelerating output content<br />
                          </p>
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
                  >IoT</a>
              </h3>
              <ol>
                <li class="project-2">
                  <div class="item-bd">
                    <div class="div-item">
                      <h3 class="project-des">【Business Overview】</h3>
                      <p class="item-project-des">
                        Covering all Ant offline payment devices,  <br />
                        The payment devices is to solve the payment problems, <br />
                        and there are many things related to content operations beyond the payment scenario <br />
                      </p>
                    </div>
                    <div class="div-item">
                      <h3 class="project-des">【Job Details】</h3>
                      <ul class="section-content">
                        <li>
                          Dynamic business scenarios on IoT devices
                        </li>
                        <li>IoT Marketing UIPaaS</li>
                        <li>Face recognition miniprograms/plugins</li>
                        <li>WebRTC，OCR plugins</li>
                      </ul>
                    </div>
                    <div class="div-item">
                      <h3 class="project-des">【Techniques】</h3>
                      <ul class="section-content">
                        <li>
                          Dev tools
                          <p class="item-project-des">
                            <b>Problem:</b> The entire development and debugging process relied on documentation <br />
                            and repetitive command line execution, which was inefficient
                            <br />
                            <b>Solution: </b>realized end-to-end debugging tools, <br />
                            visual operation and automation of monotonous and repetitive manual processes,<br />
                            providing desktop version<span class="alias_light"
                              >（Developed in python）</span
                            >and Vscode plugin version  
                          </p>
                          <img
                            style="width: 200px"
                            @click="openImg"
                            src="https://nibilin33.github.io/nibl-resume/static/lique.webp"
                          />
                        </li>
                        <li>
                          IoT front-end optimisation<span class="alias_light"
                            >（Offline package->In-house self-developed cross-end container）</span
                          >
                          <p class="item-project-des">
                            <b>Background:</b> There were many different types of IoT devices with varying configurations, <br />
                            many of which couldnot meet the requirement of second turn-on<span
                              class="alias_light"
                              >（Offline package）</span
                            >
                            <br />
                            <b>Problem:</b> self-developed container was not yet mature, UI level support ability was weak, <br />
                            marketing need to invest double manpower output h5 version and internal application version<br />
                            <b>Solution: </b> realizing a set of code to build multi-end product and automatic H5 downgrade,leading the design of the solution framework
                            <br />
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
            company="Yealink"
            time="2017.06 - 2020.2.21"
          >
            <li class="project-1">
              <h3 class="project-name">
                <a href="" target="_blank" title="">UC</a>
              </h3>
              <ol>
                <li class="project-2">
                  <div class="item-bd">
                    <div class="div-item">
                      <h3 class="project-des">【Project】</h3>
                      <p class="item-project-des">
                        UC: Enterprise communications solution, including management and user side (PC, mobile)<br />
                        The user side adopts the inline webview method, <br />
                        with functions such as polling, questionnaire, announcement, <br />
                        meeting booking, PBX, SMS gateway, topics, etc.<br />
                        <img
                            style="width: 400px"
                            @click="openImg"
                            src="https://nibilin33.github.io/nibl-resume/static/uc_2x.webp"
                        />
                      </p>
                    </div>
                    <div class="div-item">
                      <h3 class="project-des">【Duties】</h3>
                      <ul class="section-content">
                        <li>Role：  principal of the front-end project</li>
                        <li>Tasks： Requirements review, task allocation, technical support, functional development</li>
                      </ul>
                    </div>
                    <div class="div-item">
                      <h3 class="project-des">【Main Job Details】</h3>
                      <p class="item-project-des">
                        - Lead project refactoring and output specifications<br />
                        - Multi-skin, automated testing solutions<br />
                        - Used Electron as a simulation tool to optimise the development chain and increase efficiency<br />
                      </p>
                    </div>
                    <div class="div-item">
                      <h3 class="project-des">【Techniques】</h3>
                      <ul class="section-content">
                        <li>
                          High Performance<br />        
                          1. Conference booking component：From runaway to second open<br />
                          2. Tree components: from 4+seconds to 1+seconds<br />
                          3. Slow loading inline webview: offline package<br />
                        </li>
                        <li>Memory leak : De-cyclic references, active GC triggers</li>
                        <li>High concurrency NG502: Compression analysis, parameter tuning</li>
                        <li>Inefficient cross-departmental interfacing for H5 hybrid development: electron as a simulation tool</li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ol>
            </li>
          </JobItem>
        </div>
      </section>
    </div>
    <div class="content-right">
      <!-- <section class="skill">
        <header class="section-hd">
          <span class="section-title-l"></span>
          <h2 class="section-title">Self introduction</h2>
          <span class="section-title-r"></span>
        </header>
        <div class="section-bd">
          <div class="item">
            <img
              style="width: 100%"
              @click="openImg"
              src="https://nibilin33.github.io/nibl-resume/static/work.webp"
            />
          </div>
        </div>
      </section> -->
      <section class="skill">
        <header class="section-hd">
          <span class="section-title-l"></span>
          <h2 class="section-title">Skills</h2>
          <span class="section-title-r"></span>
        </header>
        <!--技能:WEB端开发-->
        <div class="section-bd">
          <div class="item">
            <div class="item-bd">
              <ul class="section-content">
                <li>Javascript,Typescript,Html5,CSS</li>
                <li>Vue,React,Miniprogram</li>
                <li>Webpack,Rollup</li>
                <li>Python,Node,Java,Shell</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <!--奖项/证书-->
      <section class="prize">
        <header class="section-hd">
          <span class="section-title-l"></span>
          <h2 class="section-title">Awards / Certificates</h2>
          <span class="section-title-r"></span>
        </header>
        <div class="section-bd">
          <div class="item">
            <div class="item-bd">
              <ul class="section-content">
                <li>Received a national scholarship</li>
                <li>Professional ranking in the top three</li>
                <li>Having taken IELTS test（English level intermediate）</li>
              </ul>
            </div>
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
