<template>
  <div>
    <div class="container clearflex">
      <div class="left wenda-main">
        <div class="wd-top-slogan">
          <span>程序员自己的问答社区</span>
          <a class="js-quiz" href="javascript:void(0);">我要提问</a>
        </div>
        <div class="nav">
          <router-link active-class="active" :to="{path:'/wenda/recommend'}">推荐</router-link>
          <router-link active-class="active" :to="{path:'/wenda/new'}">最新</router-link>
          <router-link active-class="active" :to="{path:'/wenda/waitreply'}">等待回答</router-link>
          <router-link active-class="active" :to="{path:'/wenda/issue'}">话题</router-link>

          <div class="switch-box">
            <span>只显示关注内容</span>
            <div class="switch js-switch" :class="{on:isHide}">
                <div class="fill">
                    <div class="outer"></div>
                </div>
                <div class="inner"></div>              
            </div>   
          </div>
        </div>
        <ul class="recommend">
          <li>
            <a href="http://www.imooc.com/wenda/issue" class="recommend-tag canlink">本期话题<i class="fa fa-angle-right"></i></a>
            <a href="http://www.imooc.com/wenda/issuedetail/21" class="recommend-link" data-ast="yuanwenindex_1_1251" target="_blank" title="【挨踢狗吐槽大会】是时候说说 #挨踢狗们の国庆假期#了">【挨踢狗吐槽大会】是时候说说 #挨踢狗们の国庆假期#了</a>
          </li>
        </ul>
       
        <div>
          <router-view></router-view>
          111
        </div>

      </div>
      <div class="right wenda-slider">
        <div class="user-about">
          <div class="user-info">
            <div class="user-pic">
              <a href="/u/2580259/bbs">
                <img src="//img3.mukewang.com/5649dfd600015f3901000100-100-100.jpg" alt="繁星0123456789">
              </a>
            </div>
            <div class="user-name">
              <a href="/u/2580259/bbs">繁星0123456789</a>
            </div>
            <div class="integral-info clearifx">
              <a href="/u/2580259/credit" class="integral">积分：0</a>
              <a href="/mall/index" class="integral-mall">积分商城</a>
            </div>
          </div><!--.user-info end-->
          <div class="user-action">
            <span class="ques"><a href="/u/2580259/bbs">提问</a><!-- <i></i>--></span>
            <span class="reply"><a href="/u/2580259/bbs?sort=reply">回答</a></span>
            <span class="follow"><a href="/u/2580259/bbs?sort=follow">关注</a></span>
          </div><!--.user-action end-->
        </div><!-- .user-about end -->

        <div class="my-follow-class">
          <h3>我关注的分类 <span class="js-open">+</span></h3>
          <div class="tag-box clearflex">
            <a href="/wenda/51">测试</a>
          </div><!--.tag-box end-->
        </div><!-- .my-follow-class end -->

        <div class="recommend-class">
          <div class="title clearflex">
            <h3>推荐分类</h3>
            <span class="all-cls">全部分类</span>
          </div><!--title end-->
          <ul class="cls-list">
            <li>
              <div class="class-info">
                <div class="class-icon">
                  <a href="/wenda/14" target="_blank">
                    <img src="http://img.mukewang.com/59e96f4f0001379302400240.jpg" alt="Html5">
                  </a>
                </div><!--.class-icon end-->
                <h4><a href="/wenda/14" target="_blank">Html5</a></h4>
                <p class="follow-person">24950人关注</p>
                <a href="javascript:void(0)" data-tag-id="14" class="follow">关注</a>
              </div><!--.class-info end-->
              <div class="desc">HTML5它的综合性功能可助网页设计者和开发者们一臂之力，使他们在开...</div>
            </li><!--li end-->
            <li>
              <div class="class-info">
                <div class="class-icon">
                  <a href="/wenda/5" target="_blank">
                    <img src="http://img.mukewang.com/59e96ff90001ab0402400240.jpg" alt="Html/CSS">
                  </a>
                </div><!--.class-icon end-->
                <h4><a href="/wenda/5" target="_blank">Html/CSS</a></h4>
                <p class="follow-person">60031人关注</p>
                <a href="javascript:void(0)" data-tag-id="5" class="follow">关注</a>
              </div><!--.class-info end-->
              <div class="desc">html是HyperText Mark-up Language的简称...</div>
            </li><!--li end-->
            <li>
              <div class="class-info">
                <div class="class-icon">
                  <a href="/wenda/20" target="_blank">
                    <img src="http://img.mukewang.com/59e96ef70001954402400240.jpg" alt="Linux">
                  </a>
                </div><!--.class-icon end-->
                <h4><a href="/wenda/20" target="_blank">Linux</a></h4>
                <p class="follow-person">15753人关注</p>
                <a href="javascript:void(0)" data-tag-id="20" class="follow">关注</a>
              </div><!--.class-info end-->
              <div class="desc">Linux是一套免费使用和自由传播的类Unix操作系统，是一个基于P...</div>
            </li><!--li end-->
          </ul><!--.cls-list end-->
        </div><!-- .recommend-class end -->
        
        <div class="advertisement">
          <a href="http://www.imooc.com/wenda/issuedetail/21" data-ast="yuanwenindexright_1_871">
            <img src="http://img.mukewang.com/59c89eaf0001c76302800100.jpg" alt="【挨踢狗吐槽大会】">
          </a>
        </div>

        <div class="hot-ques">
          <h3 class="title">热门问题</h3>
          <ul>
            <li>
              <p class="content"><a target="_blank" href="/wenda/detail/378090">编程对配置到底需不需要高配</a></p>
              <div class="info-bar clearflex">
                <a target="_blank" href="/wenda/detail/378090" class="answer-num">3 回答</a>
                <a target="_blank" href="/wenda/detail/378090" class="follow-num">0 关注</a>
                <a target="_blank" href="/wenda/51" class="from">来自 测试</a>
              </div>
            </li>
            <li>
              <p class="content"><a target="_blank" href="/wenda/detail/377692">请问各位大神新手入门学哪种比较好，学什么课程</a></p>
              <div class="info-bar clearflex">
                <a target="_blank" href="/wenda/detail/377692" class="answer-num">2 回答</a>
                <a target="_blank" href="/wenda/detail/377692" class="follow-num">0 关注</a>
                <a target="_blank" href="/wenda/51" class="from">来自 测试</a>
              </div>
            </li>
            <li>
              <p class="content"><a target="_blank" href="/wenda/detail/381067">现在慕课网上面回答问题都需要审核之后才能发布么？</a></p>
              <div class="info-bar clearflex">
                <a target="_blank" href="/wenda/detail/381067" class="answer-num">1 回答</a>
                <a target="_blank" href="/wenda/detail/381067" class="follow-num">0 关注</a>
                <a target="_blank" href="/wenda/51" class="from">来自 测试</a>
              </div>
            </li>
            <li>
              <p class="content"><a target="_blank" href="/wenda/detail/378045">tcp基本套接字编程流程中的绑定bind()是绑定什么？</a></p>
              <div class="info-bar clearflex">
                <a target="_blank" href="/wenda/detail/378045" class="answer-num">1 回答</a>
                <a target="_blank" href="/wenda/detail/378045" class="follow-num">0 关注</a>
                <a target="_blank" href="/wenda/51" class="from">来自 测试</a>
              </div>
            </li>
          </ul><!--ul end-->
        </div>

        <div class="leifeng-sort">
          <h3 class="title clearflex">
            <span class="left">回答雷锋榜</span>
            <span class="leifeng-tab js-leifeng-tab">一周</span>
            <span class="leifeng-tab js-leifeng-tab active">今日</span>
          </h3>
    
          <div class="leifeng-tab-box leifeng-day js-leifeng-tab-box">
            <ul class="">
              <li>
                <div class="ranking first">1</div>
                <div class="user-pic">
                  <a target="_blank" href="/u/3677826/bbs">
                    <img src="//img.mukewang.com/54584f9d0001219b02200220-100-100.jpg" title="cxxyjsj">
                  </a>
                </div><!--.user-pic end-->
                <div class="user-name">
                  <a target="_blank" href="/u/3677826/bbs">cxxyjsj</a>
                </div><!--.user-name end-->
                <div class="user-info clearflex">
                  <span class="role">JAVA开发工程师</span>
                  <span class="answer-num">13回答</span>
                </div><!--.user-info end-->
              </li>
              <li>
                <div class="ranking second">2</div>
                <div class="user-pic">
                  <a target="_blank" href="/u/1166363/bbs">
                    <img src="//img2.mukewang.com/54584f6100019caf02200220-100-100.jpg" title="onemoo">
                  </a>
                </div><!--.user-pic end-->
                <div class="user-name">
                  <a target="_blank" href="/u/1166363/bbs">onemoo</a>
                </div><!--.user-name end-->
                <div class="user-info clearflex">
                  <span class="role">其它</span>
                  <span class="answer-num">7回答</span>
                </div><!--.user-info end-->
              </li>
              <li>
                <div class="ranking third">3</div>
                <div class="user-pic">
                    <a target="_blank" href="/u/2002034/bbs">
                        <img src="//img.mukewang.com/598ce33b0001b96202720353-100-100.jpg" title="木柘">
                    </a>
                </div><!--.user-pic end-->
                <div class="user-name">
                    <a target="_blank" href="/u/2002034/bbs">木柘</a>
                </div><!--.user-name end-->
                <div class="user-info clearflex">
                    <span class="role">学生</span>
                    <span class="answer-num">5回答</span>
                </div><!--.user-info end-->
              </li>
              <li>
                <div class="ranking ">4</div>
                <div class="user-pic">
                    <a target="_blank" href="/u/2969049/bbs">
                        <img src="//img2.mukewang.com/images/unknow-160.png" title="一讯">
                    </a>
                </div><!--.user-pic end-->
                <div class="user-name">
                    <a target="_blank" href="/u/2969049/bbs">一讯</a>
                </div><!--.user-name end-->
                <div class="user-info clearflex">
                    <span class="role">PHP开发工程师</span>
                    <span class="answer-num">5回答</span>
                </div><!--.user-info end-->
              </li>
              <li>
                <div class="ranking ">5</div>
                <div class="user-pic">
                    <a target="_blank" href="/u/288892/bbs">
                        <img src="//img3.mukewang.com/53fd8c2900013aeb01000100-100-100.jpg" title="长路行">
                    </a>
                </div><!--.user-pic end-->
                <div class="user-name">
                    <a target="_blank" href="/u/288892/bbs">长路行</a>
                </div><!--.user-name end-->
                <div class="user-info clearflex">
                    <span class="role">学生</span>
                    <span class="answer-num">4回答</span>
                </div><!--.user-info end-->
              </li>
              <li>
                <div class="ranking ">6</div>
                <div class="user-pic">
                    <a target="_blank" href="/u/5837330/bbs">
                        <img src="//img.mukewang.com/54584dc4000118d302200220-100-100.jpg" title="慕侠0496534">
                    </a>
                </div><!--.user-pic end-->
                <div class="user-name">
                    <a target="_blank" href="/u/5837330/bbs">慕侠0496534</a>
                </div><!--.user-name end-->
                <div class="user-info clearflex">
                    <span class="role"></span>
                    <span class="answer-num">3回答</span>
                </div><!--.user-info end-->
              </li>
              <li>
                <div class="ranking ">7</div>
                <div class="user-pic">
                    <a target="_blank" href="/u/2385756/bbs">
                        <img src="//img4.mukewang.com/56026b610001732d01000100-100-100.jpg" title="Joffe">
                    </a>
                </div><!--.user-pic end-->
                <div class="user-name">
                    <a target="_blank" href="/u/2385756/bbs">Joffe</a>
                </div><!--.user-name end-->
                <div class="user-info clearflex">
                    <span class="role">Web前端工程师</span>
                    <span class="answer-num">2回答</span>
                </div><!--.user-info end-->
              </li>
              <li>
                <div class="ranking ">8</div>
                <div class="user-pic">
                    <a target="_blank" href="/u/4499997/bbs">
                        <img src="//img2.mukewang.com/583d2ab20001050406400640-100-100.jpg" title="习惯受伤">
                    </a>
                </div><!--.user-pic end-->
                <div class="user-name">
                    <a target="_blank" href="/u/4499997/bbs">习惯受伤</a>
                </div><!--.user-name end-->
                <div class="user-info clearflex">
                    <span class="role">全栈工程师</span>
                    <span class="answer-num">2回答</span>
                </div><!--.user-info end-->
              </li>
              <li>
                <div class="ranking ">9</div>
                <div class="user-pic">
                    <a target="_blank" href="/u/249799/bbs">
                        <img src="//img4.mukewang.com/53d7a86e00014bc701000100-100-100.jpg" title="lahm">
                    </a>
                </div><!--.user-pic end-->
                <div class="user-name">
                    <a target="_blank" href="/u/249799/bbs">lahm</a>
                </div><!--.user-name end-->
                <div class="user-info clearflex">
                    <span class="role">学生</span>
                    <span class="answer-num">2回答</span>
                </div><!--.user-info end-->
              </li>
              <li>
                <div class="ranking ">10</div>
                <div class="user-pic">
                    <a target="_blank" href="/u/2238089/bbs">
                        <img src="//img4.mukewang.com/55c6e96100011da901000100-100-100.jpg" title="心似平原走马易放难收">
                    </a>
                </div><!--.user-pic end-->
                <div class="user-name">
                    <a target="_blank" href="/u/2238089/bbs">心似平原走马易放...</a>
                </div><!--.user-name end-->
                <div class="user-info clearflex">
                    <span class="role">学生</span>
                    <span class="answer-num">2回答</span>
                </div><!--.user-info end-->
              </li>
            </ul>
            <div class="lyleif" style="display: none;"><span class="js-lyleif">显示另外5个雷锋</span></div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script type="text/javascript">
  export default {
    data (){
      return {
        isHide: false,

      }
    }
  }
</script>

<style type="text/css" scoped>
  .container{
    width: 1152px;
    margin: 40px auto 0;
  }
  .wenda-main{
    width: 776px;
    padding: 0 0 48px;
    margin-right: 48px;
  }
  .wd-top-slogan {
    margin-bottom: 4px;
    height: 96px;
    width: 100%;
    padding: 24px;
    box-sizing: border-box;
  }
  .wd-top-slogan span {
    float: left;
    line-height: 48px;
    display: inline-block;
    font-size: 24px;
    color: #07111B;
    letter-spacing: 3px;
  }
  a.js-quiz{
    width: 137px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    background-color: #f01414;
    color: #fff;
    float: right;
    font-size: 16px;
    border-radius: 4px;
  }
  .nav {
    padding: 24px;
    border-bottom: 1px solid #D9DDE1;
  }
  .nav a {
    font-size: 16px;
    color: #93999F;
    line-height: 20px;
    text-align: left;
    margin-right: 50px;
  }
  .nav a.active{
    color: #f01414;
  }
  .nav .switch-box {
    float: right;
    position: relative;
    font-size: 12px;
    color: #93999F;
    line-height: 20px;
  }
  .nav .switch-box .switch {
    float: right;
    cursor: pointer;
    margin-left: 20px;
    position: relative;
    width: 40px;
    height: 20px;
    overflow: hidden;
  }
  .switch-box .switch .fill {
    background: rgba(147,153,159,.4);
    border-radius: 3px;
    margin-top: 7px;
    height: 6px;
    overflow: hidden;
  }
  .switch-box .switch .fill .outer {
    margin-left: -20px;
    width: 40px;
    height: 6px;
    border-radius: 3px;
    background: #fcd0d0;
  }
  .switch-box .switch .inner {
    position: absolute;
    box-sizing: border-box;
    top: 0;
    left: 0;
    height: 20px;
    border: 2px solid #93999F;
    width: 20px;
    background: #fff;
    border-radius: 100%;
  }
  .switch-box .switch.on .inner {
    left: 20px;
    border-color: #f01414;
  }
  .recommend {
    width: 100%;
  }
  .recommend li {
    width: 100%;
    margin-top: 4px;
    padding: 20px 24px;
    background: rgba(0,140,200,.06);
    border-radius: 4px;
    font-size: 14px;
    line-height: 24px;
    box-sizing: border-box;
  }
  .recommend li a, .recommend li span {
    display: inline-block;
  }
  .recommend li .recommend-tag {
    margin-right: 12px;
    padding: 0 12px;
    font-size: 12px;
    color: #FFF;
    line-height: 24px;
    background: rgba(0,140,200,.6);
    border-radius: 12px;
  }
  .recommend li .canlink:hover, .recommend li .canlink:hover i {
    color: #008CC8;
  }
  .recommend li .recommend-link {
    color: #008CC8;
  }


  .wenda-slider{
    width: 328px;
  }
  .user-about {
    padding: 20px;
    background-color: #f3f3f3;
    margin-bottom: 30px;
  }
  .user-about .user-info {
    position: relative;
    padding-left: 50px;
    border-bottom: 1px solid #d0d6d9;
    padding-bottom: 20px;
  }
  .user-info .user-pic {
    position: absolute;
    left: 0;
    top: 0;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    overflow: hidden;
  }
  .user-info .user-pic a, .user-info .user-pic img {
    display: block;
    height: 100%;
  }
  .user-pic img {
    display: block;
    height: 100%;
  }
  .user-info .integral-info, .user-info .user-name {
    height: 20px;
    overflow: hidden;
  }
  .user-name a {
    font-size: 14px;
    color: #14191e;
    line-height: 20px;
    text-align: left;
  }
  .user-info .integral-info a {
    font-size: 12px;
    line-height: 20px;
    color: #787d82;
  }
  .user-info .integral-info a:hover{
    color: #14191e;
  }
  .user-info .integral-info .integral {
    float: left;
  }
  .integral-info .integral-mall {
    float: right;
    text-align: right;
  }
  .user-about .user-action {
    margin-top: 20px;
    overflow: hidden;
  }
  .user-about .user-action span {
    position: relative;
    font-size: 14px;
    color: #14191e;
    line-height: 20px;
    padding: 0 10px;
    width: 33%;
    float: left;
    text-align: center;
    box-sizing: border-box;
  }
  .user-about .user-action span a{
    color: #14191e;
  }
  .user-about .user-action span a:hover{
    color: #f01414;
  }
  .my-follow-class{
    margin-bottom: 30px;
  }
  .my-follow-class h3 {
    position: relative;
    height: 20px;
    padding-bottom: 15px;
    font-size: 16px;
    text-align: left;
    color: #14191e;
    line-height: 20px;
    border-bottom: 1px solid #d0d6d9;
    margin-bottom: 10px;
  }
  .my-follow-class h3 span {
    position: absolute;
    right: 0;
    top: 0;
    width: 20px;
    height: 20px;
    color: #999da1;
    font-size: 20px;
    cursor: pointer;
  }
  .my-follow-class h3 span:hover{
    color: #f01414;
  }
  .my-follow-class .tag-box a {
    float: left;
    margin-right: 5px;
    margin-bottom: 5px;
    height: 28px;
    padding: 0 10px;
    border: 1px solid #d0d6d9;
    font-size: 14px;
    color: #787d82;
    text-align: center;
    line-height: 28px;
    cursor: pointer;
  }
  .my-follow-class .tag-box a:hover {
    color: #14191e;
    border-color: #98a1a6;
    background-color: #EDF1F2;
  }
  .recommend-class{
    margin-bottom: 35px;
  }
  .recommend-class .title {
    height: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #d0d6d9;
  }
  .recommend-class .title h3 {
    float: left;
    line-height: 20px;
    text-align: left;
    color: #14191e;
    font-size: 16px;
  }
  .recommend-class .title span {
    float: right;
    line-height: 20px;
    text-align: right;
    color: #787d82;
    font-size: 14px;
    cursor: pointer;
  }
  .recommend-class .title span:hover {
    color: #14191e;
  }
  .recommend-class .cls-list li {
    margin-top: 24px;
  }
  .cls-list .class-info {
    position: relative;
    padding: 0 50px;
  }
  .cls-list .class-info .class-icon {
    position: absolute;
    left: 0;
    top: 0;
    width: 36px;
    height: 36px;
    overflow: hidden;
  }
  .class-info .class-icon a, .recommend-class .cls-list .class-info .class-icon img {
    display: block;
    height: 100%;
  }
  .cls-list .class-info h4 {
    height: 18px;
  }
  .cls-list .class-info h4 a {
    line-height: 18px;
    color: #14191e;
    font-size: 16px;
    text-align: left;
    font-weight: 600;
  }
  .cls-list .class-info .follow-person {
    height: 18px;
    line-height: 18px;
    color: #b5b9bc;
    font-size: 12px;
    text-align: left;
  }
  .cls-list .class-info .follow {
    position: absolute;
    right: 0;
    top: 3px;
    padding: 0 10px;
    height: 28px;
    line-height: 28px;
    font-size: 14px;
    color: #787d82;
    text-align: center;
    border: 1px solid #d0d6d9;
    overflow: hidden;
    cursor: pointer;
  }
  .cls-list .class-info .follow:hover {
    border-color: #98a1a6;
    color: #14191e;
  }
  .cls-list .desc {
    color: #787d82;
    line-height: 24px;
    font-size: 14px;
    margin-top: 10px;
    word-break: break-all;
  }
  .advertisement {
    overflow: hidden;
  }
  .advertisement{
    margin-bottom: 30px;
  }
  .advertisement a {
    display: block;
  }
  .advertisement img {
    display: block;
    width: 100%;
    height: 100%;
  }
  .hot-ques {
    margin-bottom: 30px;
  }
  .hot-ques .title {
    font-size: 16px;
    color: #14191e;
    padding-bottom: 15px;
    border-bottom: 1px solid #d0d6d9;
  }
  .hot-ques li {
    padding: 15px 0;
    border-bottom: 1px solid #edf1f2;
  }
  .hot-ques li .content a {
    font-size: 14px;
    color: #14191e;
    word-wrap: break-word;
  }
  .hot-ques li .info-bar {
    height: 20px;
    margin-top: 7px;
    overflow: hidden;
  }
  .hot-ques li .info-bar a {
    float: left;
    font-size: 12px;
    line-height: 20px;
    color: #b5b9bc;
  }
  .info-bar .answer-num {
    margin-right: 30px;
  }
  .hot-ques li .info-bar .from {
    float: right;
  }
  .leifeng-sort .title {
    font-size: 16px;
    color: #14191e;
    height: 40px;
    border-bottom: 1px solid #d0d6d9;
    text-align: left;
    line-height: 20px;
  }
  .leifeng-sort .title span{
    font-size: 16px;
  }
  .leifeng-sort .title .leifeng-tab {
    cursor: pointer;
    font-size: 14px;
    float: right;
    height: 39px;
    border-bottom: 2px solid transparent;
    margin-left: 25px;
  }
  .leifeng-sort .title .leifeng-tab.active {
    border-color: #f01414;
  }
  .leifeng-sort .title .leifeng-tab:hover {
    color: #f01414;
  }
  .leifeng-sort li {
    position: relative;
    padding-left: 90px;
    margin-top: 30px;
  }
  .leifeng-sort .ranking {
    position: absolute;
    left: 0;
    top: 7px;
    width: 30px;
    padding-left: 10px;
    font-size: 18px;
    line-height: 20px;
    text-align: left;
    color: #b5b9bc;
  }
  .leifeng-sort .ranking.first {
    color: #f8b551;
  }
  .leifeng-sort .user-pic {
    position: absolute;
    left: 40px;
    top: 0;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    overflow: hidden;
  }
  .leifeng-sort .ranking.second {
    color: #787d82;
  }
  .leifeng-sort .ranking.third {
    color: #ec6941;
  }
  .leifeng-sort .user-info, .leifeng-sort .user-name {
    height: 20px;
    overflow: hidden;
  }
  .leifeng-sort .user-name a {
    font-size: 14px;
    font-weight: 600;
    color: #787d92;
    line-height: 20px;
    text-align: left;
  }
  .leifeng-sort .user-name a:hover {
    color: #14191e;
  }
  .leifeng-sort .user-info span {
    font-size: 12px;
    color: #b5b9bc;
    line-height: 20px;
    text-align: left;
  }
  .user-info .answer-num {
    float: right;
    text-align: right;
  }
</style>