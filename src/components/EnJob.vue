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
                  >Taobao Digital Virtual（2022.03 - 2022.05）</a
                >
              </h3>
              <ol>
                <li class="project-2">
                  <div class="item-bd">
                    <div class="div-item">
                      <h3 class="project-des">【Business Overview】</h3>
                      <p class="item-project-des">
                        including direct charging (recharge centre), <br/>
                        non-charging (number card, traffic pack), interactive (wool pulling), <br/>
                        B-side merchant operation platform, internal operation platform,<br/>
                        and through A/B experiments to help user growth   <br/>
                      </p>
                    </div>
                    <div class="div-item">
                      <h3 class="project-des">【Techniques】</h3>
                      <ul class="section-content">
                        <li>H5 full-link log
                            <p class="item-project-des">
                            Problem：Online problems are identified through a single point in the problem description <br/>
                            and cannot be located if the problem cannot be effectively reproduced <br/>
                            Solution: Using indexDB to store logs and an edge script to <br/>
                            get the traceid of the request as a basis for log trace correlation<br />
                          </p>
                        </li>
                        <li>Personalised SSR based on edge computing
                            <p class="item-project-des">
                              Problem：Different crowd tags correspond to different display effects, <br />
                              SSR server pressure, resulting in long white screen time 
                               <br />
                              Solution: Using edge computing to realize CDN's dynamic policy caching of HTML,<br />
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
                  >Ant IoT（2020.06 - 2022.03）</a
                >
              </h3>
              <ol>
                <li class="project-2">
                  <div class="item-bd">
                    <div class="div-item">
                      <h3 class="project-des">【Business Overview】</h3>
                      <p class="item-project-des">
                        Covering all Ant offline payment devices, Alipay boxes in small and medium-sized merchants, <br />
                        self-service ordering machines in large shopping malls, face-sweeping payment devices, etc.<br />
                        The entry point for payment devices is to solve the payment problems, <br />
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
                            Problem：The entire development and debugging process relies on documentation <br />
                            and repetitive command line execution, which is inefficient
                            <br />
                            Solution: realizing end-to-end debugging tools, <br />
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
                            Background：There are many different types of IoT devices with varying configurations, <br />
                            many of which cannot meet the requirement of second turn-on<span
                              class="alias_light"
                              >（Offline package）</span
                            >
                            <br />
                            Problem：self-developed container is not yet mature, UI level support ability is weak, <br />
                            marketing need to invest double manpower output h5 version and internal application version<br />
                            Solution: realizing a set of code to build multi-end product and automatic H5 downgrade,leading the design of the solution framework
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
                            style="width: 200px"
                            @click="openImg"
                            src="https://nibilin33.github.io/nibl-resume/static/uc_2x.webp"
                        />
                      </p>
                    </div>
                    <div class="div-item">
                      <h3 class="project-des">【Duties】</h3>
                      <ul class="section-content">
                        <li>Role： Project front-end leader</li>
                        <li>Tasks： Requirements review, task allocation, technical support, functional development</li>
                      </ul>
                    </div>
                    <div class="div-item">
                      <h3 class="project-des">【Main Job Details】</h3>
                      <p class="item-project-des">
                        - Lead project refactoring and output specifications<br />
                        - Multi-skin, automated testing solutions<br />
                        - Using electron as a simulation tool to optimise the development chain and increase efficiency<br />
                      </p>
                    </div>
                    <div class="div-item">
                      <h3 class="project-des">【Techniques】</h3>
                      <ul class="section-content">
                        <li>
                          High Performance<br />        
                          1. Conference booking component：From runaway to second open<br />
                          2. Tree components:4+s -> 1+s<br />
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
                <li>Javascript,Html5,CSS</li>
                <li>React,Vue,Miniprogram</li>
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
