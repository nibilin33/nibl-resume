<template>
       <div class="item">
            <header class="item-hd">
              <h3 class="item-name">西安绿豆芽信息科技有限公司(西安)</h3>
              <span class="item-time">2018.01 至 2020.02</span>
              <a
                class="btn item-more"
                href="https://baike.baidu.com/item/%E8%A5%BF%E5%AE%89%E7%BB%BF%E8%B1%86%E8%8A%BD%E4%BF%A1%E6%81%AF%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8"
                target="_blank"
                title="点击查看->西安绿豆芽信息科技有限公司百度百科"
                >工作</a
              >
            </header>
            <ol class="item-project">
              <li class="project-1">
                <h3 class="project-name">
                  <a
                    href="http://www.bitchang.com"
                    target="_blank"
                    title="点击进入->币厂交易所首页"
                    >数字货币交易所</a
                  >
                </h3>
                <ol>
                  <li class="project-2">
                    <div class="item-bd">
                      <h3 class="project-name-2">交易所后端</h3>
                      <div class="div-item">
                        <h3 class="project-des">【项目简介】</h3>
                        <p class="item-project-des">
                          该项目为数字货币交易所，为用户提供便捷的数字资产交易系统，包括币币交易、法币交易、行情查看等主要功能。后端开发语言采用Java，主要采用Spring
                          boot + Hibernate
                          JPA作为后端基础服务框架；项目后端服务主要包含：API网关、JWT用户认证、去中心化钱包的资金管理、交易系统、交易订单撮合引擎、WebSocket
                          K线数据分发服务以及钱包系统（区块链链上操作）等多项服务组成。
                        </p>
                      </div>
                      <div class="div-item">
                        <h3 class="project-des">【工作职责】</h3>
                        <ul class="section-content">
                          <li>
                            负责项目框架搭建以及疑难问题解决，为项目成员提供开发思路
                          </li>
                          <li>
                            主导整个项目正常开发流程，研究了高可用、高并发服务器的架构设计（keepalived+nginx+haproxy）
                          </li>
                          <li>
                            对常用数据进行缓存处理（Redis），并对[撮合引擎]系统进行了架构设计，采用Redis内存撮合、Rabbit
                            MQ消息队列异步入库实现高性能撮合系统，从而实现撮合引擎弹性伸缩
                          </li>
                          <li>
                            针对Redis可能出现脏读的问题可以采用消息队列处理，消除多线程同一时间操作同一Redis数据的脏读问题；或可以通过Redis锁解决高并发的脏读问题（不推荐，可能会造成无效等待）
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li class="project-2">
                    <div class="item-bd">
                      <h3 class="project-name-2">交易所前端</h3>
                      <div class="div-item">
                        <h3 class="project-des">【项目简介】</h3>
                        <p class="item-project-des">
                          该项目前端开发框架采用目前市面流行的Vue.js框架与Element
                          UI
                          2.0。K线、行情等数据全通过websocket进行数据传输，解决了大量数据通过http请求造成服务端压力过大的问题，也保证了数据的时效性；K线图表采用国外TradingView工具，高效且专业的解决企业在数据图表绘制的问题；在应用数据存储上采用vuex实现多页面数据共享。
                        </p>
                      </div>
                      <div class="div-item">
                        <h3 class="project-des">【工作职责】</h3>
                        <ul class="section-content">
                          <li>
                            负责项目框架搭建以及疑难问题解决，为项目成员提供开发思路
                          </li>
                          <li>
                            主导整个项目正常开发流程，研究K线渲染组件TradingView的使用与原理
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li class="project-2">
                    <div class="item-bd">
                      <h3 class="project-name-2">以太坊智能合约开发</h3>
                      <div class="div-item">
                        <h3 class="project-des">【项目简介】</h3>
                        <p class="item-project-des">
                          以太坊的智能合约并非现实中常见的合同，而是存在区块链上，可以被触发执行的一段程序代码，这些代码实现了某种预定的规则，是存在于以太坊执行环境中的“自治代理”。智能合约是在以太坊虚拟机上运行的应用程序。
                        </p>
                      </div>
                      <div class="div-item">
                        <h3 class="project-des">【工作职责】</h3>
                        <ul class="section-content">
                          <li>
                            在法律允许或不触犯法律的条件下，负责公司在数字货币、智能合约开发上的需求
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li class="project-2">
                    <div class="item-bd">
                      <h3 class="project-name-2">交易所APP开发</h3>
                      <div class="div-item">
                        <h3 class="project-des">【项目简介】</h3>
                        <p class="item-project-des">
                          该项目移动APP端采用Java进行原生Android
                          APP开发，项目主要涉及网络请求、底层框架设计、WebSocket、KLine图表绘制、实时交易处理展示等功能。
                        </p>
                      </div>
                      <div class="div-item">
                        <h3 class="project-des">【工作职责】</h3>
                        <ul class="section-content">
                          <li>
                            负责Android端APP基础框架搭建，采用xUtils进行网络请求
                          </li>
                          <li>websocket进行实时数据传输，与服务端建立长链接</li>
                          <li>K线图表采用MPAndroidChart库做二次开发。</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ol>
              </li>
              <li class="project-1">
                <h3 class="project-name">
                  <a
                    href="http://www.bitchang.com"
                    target="_blank"
                    title="点击进入->数字货币钱包"
                    >数字货币钱包</a
                  >
                </h3>
                <ol>
                  <li class="project-2">
                    <div class="item-bd">
                      <h3 class="project-name-2">钱包APP</h3>
                      <div class="div-item">
                        <h3 class="project-des">【项目简介】</h3>
                        <p class="item-project-des">
                          该项目是一款加密数字货币钱包项目，为用户提供区块链数字货币钱包功能，包含：转账、收付款、资产查看、合约挖矿、共振等功能。主要涉及区块链链上交易发起及获取链上数据、合约挖矿订单等操作，可通过对应公链提供的API进行功能开发或通过JSON
                          RPC进行开发。
                        </p>
                      </div>
                      <div class="div-item">
                        <h3 class="project-des">【工作职责】</h3>
                        <ul class="section-content">
                          <li>负责项目框架搭建以及链上交互开发</li>
                          <li>
                            通过公链提供API以及JSON
                            RPC文档实现数字货币转账、充提币、钱包创建等逻辑
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ol>
              </li>
              <li class="project-1">
                <h3 class="project-name">
                  <a
                    href="http://www.ledianyun.com/"
                    target="_blank"
                    title="点击进入->乐店云商城系统"
                    >乐店云商城系统</a
                  >
                </h3>
                <ol>
                  <li class="project-2">
                    <div class="item-bd">
                      <h3 class="project-name-2">后台开发(PHP)</h3>
                      <div class="div-item">
                        <h3 class="project-des">【项目简介】</h3>
                        <p class="item-project-des">
                          <a
                            href="https://baike.baidu.com/item/%E4%B9%90%E5%BA%97%E4%BA%91"
                            target="_blank"
                            title="点击查看->乐店云百度百科"
                            >乐店云</a
                          >是一个专门为商户提供新零售智慧店铺解决方案的<a
                            href="https://www.ledianyun.com/"
                            target="_blank"
                            title="乐店云官网"
                            >一站式小程序生成平台</a
                          >。项目主要采用PHP+Phalcon+Mysql框架，包含分销、砍价、拼团等营销以及基础的商城功能。
                        </p>
                      </div>
                      <div class="div-item">
                        <h3 class="project-des">【工作职责】</h3>
                        <ul class="section-content">
                          <li>
                            负责拼团功能开发，该功能主要涉及用户与用户共同下单逻辑，需要保证在库存无误的情况下，实现多用户订单的提交与交易的正常进行
                          </li>
                          <li>负责官网的开发以及官网搜索引擎优化</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ol>
              </li>
            </ol>
          </div>
</template>