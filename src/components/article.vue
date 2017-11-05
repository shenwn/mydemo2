<template>
  <div>
    <div class="container clearflex">
      <div class="article-left left">
        <div class="ad-create">
          <span class="icon-close">×</span>
          <h3>用手记的方式，学习前沿流行技术</h3>
          <a href="" class="create-ques">创建手记</a>
        </div>
        <div class="article-ad-wrap clearflex">
          <div class="article-ad-img left">
            <a href="" class="article-ad-info">
              <span>【挨踢狗吐槽大会】 是时候说说 #挨踢狗们の国庆假期#了</span>
              </a>
            <img src="../assets/images/article-ad-img.jpg">
          </div>
          <div class="ad-font left">
            <div>
              <div class="ad-font-box">
                <h2>
                  <a href="">我遇到的前端面试题2017</a>
                </h2>
                <p class="ad-tag-box">
                  <a href="" class="ad-tag">Html/CSS</a>
                  <a href="" class="ad-tag">JavaScript</a>
                  <a href="" class="ad-tag">CSS3</a>
                </p>
              </div>
            </div>
            <div>
              <div class="ad-font-box">
                <h2>
                  <a href="">40个Java多线程问题总结</a>
                </h2>
                <p class="ad-tag-box">
                  <a href="" class="ad-tag">Java</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="article-tabs clearflex">
          <a href="">PHP</a>
          <a href="">JAVA</a>
          <a href="">Html/CSS</a>
          <a href="">Android</a>
          <a href="">CSS3</a>
          <a href="">iOS</a>
          <a href="">Html5</a>
          <a href="">Photoshop</a>
          <a href="">Mysql</a>
          <a @click="isShow = !isShow">
            更多
            <i class="fa"></i>
          </a>
          <div class="tag-pop-layer" v-if="isShow">
            <a href="">Node.js</a>
            <a href="">JavaScript</a>
            <a href="">Python</a>
            <a href="">JQuery</a>
            <a href="">Linux</a>
            <a href="">MongoDB</a>
            <a href="">AngularJS</a>
            <a href="">Maya</a>
            <a href="">Premiere</a>
            <a href="">云计算</a>
            <a href="">Bootstrap</a>
            <a href="">前端工具</a>
            <a href="">WebApp</a>
            <a href="">C</a>
            <a href="">Oracle</a>
            <a href="">C++</a>
            <a href="">Go</a>
            <a href="">Unity 3D</a>
            <a href="">Cocos2d-x</a>
            <a href="">大数据</a>
            <a href="">SQL Server</a>
            <a href="">C#</a>
            <a href="">数据结构</a>
            <a href="">ZBrush</a>
            <a href="">产品更新</a>
            <a href="">职场生活</a>
            <a href="">设计</a>
            <a href="">征文</a>
            <a href="">产品</a>
            <a href="">React.JS</a>
            <a href="">测试</a>
            <a href="">Vue.js</a>
            <a href="">Sass/Less</a>
            <a href="">Ruby</a>
          </div>
        </div>
        <div class="article-tool-bar clearflex">
          <router-link class="sort-item" active-class="active" :to="{path:'/article/hot'}">推荐</router-link>
          <router-link class="sort-item"  active-class="active" :to="{path:'/article/new'}">新上榜</router-link>
        </div>
        <router-view></router-view>
        
      </div>
      <div class="article-right right">
        <div class="new-ques">
          <a href="" class="write-ques">创建手记</a>
          <div class="ques-wrap">
            <div class="ques-info">
              <a href="" class="sharer-head"><img src="../assets/images/user.jpg""></a>
              <h3>
                <a href="">繁星0123456789</a>
              </h3>
            </div>
             <ul class="num-info">
               <li><a href="">手记<span>0</span></a></li>
               <li><a href="">评论<span>0</span></a></li>
               <li><a href="">推荐<span>0</span></a></li>
               <li><a href="">收藏<span>0</span></a></li>
             </ul> 
          </div>
        </div>
        <div class="remon-sharer">
          <h2 class="panel-hd">推荐作者</h2>
          <ul>
            <li>
              <a href="" class="publisher-hd">
                <img src="../assets/images/author-1.jpg">
              </a>
              <div class="remon-sharer-info">
                <a href="" class="publisher-name">fengsehng</a>
                <i class="great" title="认证作者"></i>
                <p class="publisher-sig">移动开发工程师</p>
              </div>
            </li>
            <li>
              <a href="" class="publisher-hd">
                <img src="../assets/images/author-1.jpg">
              </a>
              <div class="remon-sharer-info">
                <a href="" class="publisher-name">fengsehng</a>
                <i class="great" title="认证作者"></i>
                <p class="publisher-sig">移动开发工程师</p>
              </div>
            </li>
            <li>
              <a href="" class="publisher-hd">
                <img src="../assets/images/author-1.jpg">
              </a>
              <div class="remon-sharer-info">
                <a href="" class="publisher-name">fengsehng</a>
                <i class="great" title="认证作者"></i>
                <p class="publisher-sig">移动开发工程师</p>
              </div>
            </li>
            <li>
              <a href="" class="publisher-hd">
                <img src="../assets/images/author-1.jpg">
              </a>
              <div class="remon-sharer-info">
                <a href="" class="publisher-name">fengsehng</a>
                <i class="great" title="认证作者"></i>
                <p class="publisher-sig">移动开发工程师</p>
              </div>
            </li>
            <li>
              <a href="" class="publisher-hd">
                <img src="../assets/images/author-1.jpg">
              </a>
              <div class="remon-sharer-info">
                <a href="" class="publisher-name">fengsehng</a>
                <i class="great" title="认证作者"></i>
                <p class="publisher-sig">移动开发工程师</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="tag-vane">
          <h2 class="panel-hd">标签风向标</h2>
          <div class="tag-bd">
            <a href="" class="tag-detail">
              Java
              <span class="chapters">3681篇</span>
            </a>
            <a href="" class="tag-detail">
              Java
              <span class="chapters">3681篇</span>
            </a>
            <a href="" class="tag-detail">
              Java
              <span class="chapters">3681篇</span>
            </a>
            <a href="" class="tag-detail">
              Java
              <span class="chapters">3681篇</span>
            </a>
            <a href="" class="tag-detail">
              Java
              <span class="chapters">3681篇</span>
            </a>
            <a href="" class="tag-detail">
              Java
              <span class="chapters">3681篇</span>
            </a>
            <a href="" class="tag-detail">
              Java
              <span class="chapters">3681篇</span>
            </a>

            <a href="" class="tag-detail">
              Java
              <span class="chapters">3681篇</span>
            </a>
            <a href="" class="tag-detail">
              Java
              <span class="chapters">3681篇</span>
            </a><a href="" class="tag-detail">
              Java
              <span class="chapters">3681篇</span>
            </a>
          </div>
        </div>
        <div class="other-article">
          <h2 class="panel-hd">本月热门</h2>
          <ul>
            <li>
              <a href="">
                <h3>微信小程序ofo小黄车+thinkphp5.0打造全栈应用</h3>
              </a>
              <div class="show-box clearflex">
                <span class="left">4734浏览</span>
                <span class="left">58推荐</span>
                <span class="left">6评论</span>
              </div>
            </li>
            <li>
              <a href="">
                <h3>微信小程序ofo小黄车+thinkphp5.0打造全栈应用</h3>
              </a>
              <div class="show-box clearflex">
                <span class="left">4734浏览</span>
                <span class="left">58推荐</span>
                <span class="left">6评论</span>
              </div>
            </li>
            <li>
              <a href="">
                <h3>微信小程序ofo小黄车+thinkphp5.0打造全栈应用</h3>
              </a>
              <div class="show-box clearflex">
                <span class="left">4734浏览</span>
                <span class="left">58推荐</span>
                <span class="left">6评论</span>
              </div>
            </li>
            <li>
              <a href="">
                <h3>微信小程序ofo小黄车+thinkphp5.0打造全栈应用</h3>
              </a>
              <div class="show-box clearflex">
                <span class="left">4734浏览</span>
                <span class="left">58推荐</span>
                <span class="left">6评论</span>
              </div>
            </li>
            <li>
              <a href="">
                <h3>微信小程序ofo小黄车+thinkphp5.0打造全栈应用</h3>
              </a>
              <div class="show-box clearflex">
                <span class="left">4734浏览</span>
                <span class="left">58推荐</span>
                <span class="left">6评论</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="other-article">
          <h2 class="panel-hd">精选推荐</h2>
          <ul>
            <li>
              <a href="">
                <h3>微信小程序ofo小黄车+thinkphp5.0打造全栈应用</h3>
              </a>
              <div class="show-box clearflex">
                <span class="left">4734浏览</span>
                <span class="left">58推荐</span>
                <span class="left">6评论</span>
              </div>
            </li>
            <li>
              <a href="">
                <h3>微信小程序ofo小黄车+thinkphp5.0打造全栈应用</h3>
              </a>
              <div class="show-box clearflex">
                <span class="left">4734浏览</span>
                <span class="left">58推荐</span>
                <span class="left">6评论</span>
              </div>
            </li>
            <li>
              <a href="">
                <h3>微信小程序ofo小黄车+thinkphp5.0打造全栈应用</h3>
              </a>
              <div class="show-box clearflex">
                <span class="left">4734浏览</span>
                <span class="left">58推荐</span>
                <span class="left">6评论</span>
              </div>
            </li>
            <li>
              <a href="">
                <h3>微信小程序ofo小黄车+thinkphp5.0打造全栈应用</h3>
              </a>
              <div class="show-box clearflex">
                <span class="left">4734浏览</span>
                <span class="left">58推荐</span>
                <span class="left">6评论</span>
              </div>
            </li>
            <li>
              <a href="">
                <h3>微信小程序ofo小黄车+thinkphp5.0打造全栈应用</h3>
              </a>
              <div class="show-box clearflex">
                <span class="left">4734浏览</span>
                <span class="left">58推荐</span>
                <span class="left">6评论</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">

  export default {
    data (){
      return {
        isShow:false
      }
    }
  }
</script>

<style type="text/css" scoped>
  .container{
    width: 1200px;
    margin: 0 auto;
  }
  .article-left{
    width: 840px;
    margin: 40px 0 30px;
  }
  .article-right{
    width: 280px;
    margin-bottom: 70px;
  }
  .ad-create{
    width: 100%;
    height: 80px;
    line-height: 80px;
    position: relative;
    margin: 0 0 20px;
    background: url(../assets/images/creatbg.png) no-repeat;
    background-size: cover;
  }
  .ad-create .icon-close {
    position: absolute;
    top: 11px;
    right: 11px;
    font-size: 20px;
    color: #787d82;
    cursor: pointer;
    font-weight: 700;
  }
  .ad-create h3{
    font-size: 18px;
    color: #14191e;
    font-weight: 700;
    display: inline-block;
    padding: 0 20px 0 30px;
    width: 60%;
  }
  .ad-create .create-ques{
    font-size: 14px;
    color: #fff;
    display: inline-block;
    width: 100px;
    height: 40px;
    line-height: 40px;
    background-color: #f01400;
    text-align: center;
  }
  .ad-create .create-ques:hover {
    background-color: #ff6464;
    transition: all .3s;
  }
  .article-ad-img{
    width: 520px;
    height: 240px;
    position: relative;
  }
  .article-ad-img img{
    width: 100%;
    height: 100%;
  }
  .article-ad-info{
    position: absolute;
    bottom:0;
    width: 100%;
    box-sizing: border-box;
    z-index: 2;
    padding: 20px;
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.1),rgba(0,0,0,.2),rgba(0,0,0,.3),rgba(0,0,0,.4),rgba(0,0,0,.5));
  }
  .article-ad-info span{
    display: block;
    height: 30px;
    color: #fff;
    line-height: 30px;
    font-size: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 700;
  }
  .ad-font{
    width: 320px;
    height: 240px;
    background-color: #f3f5f7;
  }
  .ad-font > div{
    width: 280px;
    height: 120px;
    margin: 0 auto;
    position: relative;
  }
  .ad-font > div:first-of-type{
    border-bottom: 1px solid #b7bbbf;
  }
  .ad-font-box{
    position: absolute;
    top: 50%;
    margin-top: -27px;
  }
  .ad-font-box h2 a{
    display: block;
    width: 278px;
    overflow: hidden;
    white-space: nowrap;
    display: block;
    padding-right: 2px;
    color: #07111b;
    font-size: 18px;
    font-weight: 700;
    line-height: 30px;
    text-align: left;
  }
  .ad-font-box h2 a:hover{
    color: #f01400;
  }
  .ad-tag-box{
    width: 100%;
    overflow: hidden;
  }
  .ad-tag-box .ad-tag{
    line-height: 24px;
    font-size: 12px;
    color: #71777d;
    margin-right: 4px;
  }
  .ad-tag-box .ad-tag:hover{
    color: #07111b;
  }
  .article-tabs{
    margin-top: 20px;
    padding: 10px 0;
    margin-left: 5px;
  }
  .article-tabs a,.tag-pop-layer a{
    line-height: 30px;
    display: inline-block;
    padding: 0 10px;
    margin-right: 10px;
    font-size: 14px;
    color: #4d555d;
    background: #f3f5f7;
    margin-left: -5px;
    cursor: pointer;
  }
  .article-tabs a:hover,.tag-pop-layer a:hover{
    color: #4d555d;
    background: #d9dde1;
  }
  .tag-pop-layer a{
    margin: 10px 10px 0 -5px;
  }
  .article-tool-bar{
    margin-top: 10px;
    position: relative;
    border-bottom: 1px solid #b7bbbf;
  }
  .article-tool-bar .sort-item{
    font-size: 16px;
    color: #4d555d;
    margin: 0 49px -1px 0;
    line-height: 48px;
    display: inline-block;
    cursor: pointer;
  }
  .article-tool-bar .active{
    color: #f01414;
    border-bottom: 2px solid #f01400;
  }

  .article-right{
    width: 280px;
    margin-bottom: 70px;
  }
  .new-ques {
    margin: 40px 0 20px;
  }
  .write-ques{
    display: block;
    text-align: center;
    font-size: 18px;
    line-height: 56px;
    border: 2px solid #f01400;
    color: #f01400;
    margin-bottom: 20px;
  }
  .write-ques:hover{
    background: #f01400;
    color: #fff;
  }
  .ques-wrap{
    padding: 20px 20px 10px;
    background-color: #f5f7f9;
    min-height: 140px;
  }
  .ques-info{
    border-bottom: 1px solid #d9dde1;
    padding-bottom: 22px;
    position: relative;
  }
  .sharer-head{
    display: inline-block;
    width: 40px;
    height: 40px;
    position: absolute;
    top:0;
    left: 0;
  }
  .sharer-head > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .ques-info > h3 {
    width: 180px;
    line-height: 26px;
    padding-left: 56px;
  }
  .ques-info > h3 > a{
    display: inline-block;
    color: #14191e;
    font-size: 18px;
    max-width: 60%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .num-info > li{
    display: inline-block;
    width: 43%;
    line-height: 40px;
  }
  .num-info > li > a{
    color: #93999f;
  }
  .num-info > li > a > span{
    color: #4d555d;
    margin-left: 10px;
  }
  .remon-sharer ul > li{
    padding: 15px 0;
    position: relative;
    border-bottom: 1px solid #d9dde1;
  }
  .panel-hd{
    line-height: 58px;
    color:#14191e;
    border-bottom: 1px solid #b7bbbf;
    font-weight: 700;
    font-size: 16px;
  }
  .remon-sharer-info{
    padding: 0 50px 0 53px;
    font-size: 14px;
  }
  .publisher-hd{
    display: inline-block;
    position: absolute;
    top: 20px;
    left: 0;
  }
  .publisher-hd >img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  remon-sharer-info > .publisher-name{
    display: inline-block;
    font-size: 16px;
    max-width: 60%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #4d555d;
  }
  .publisher-name:hover{
    color: #f01414;
  }
  .publisher-sig{
    color: #93999f;
    margin-top: 4px;
    height: 21px;
  }
  .tag-vane{
    margin-bottom: 22px;
  }
  .tag-bd{
    margin-top: 10px;
  }
  .tag-detail{
    display: inline-block;
    padding: 0 10px;
    margin: 10px 10px 0 0;
    color: #4d555d;
    background-color: #f3f5f7;
    line-height: 30px;
  }
  .tag-detail:hover{
    background-color: #d9dde1;
  }
  .chapters{
    padding-left: 10px;
    color: #b5b9bc;
  }
  .other-article{
    margin-bottom: 20px;
  }
  .other-article > ul > li {
    border-bottom: 1px solid #d9dde1;
    max-height: 15em;
  }
  .other-article > ul > li > a {
    display: block;
  }
  .other-article > ul > li > a >h3{
    margin-top: 15px;
    font-size: 16px;
    color: #14191e;
    line-height: 24px;
    word-wrap: break-word;
    word-break: break-all;
  }
  .show-box{
    line-height: 20px;
    margin: 5px 0 15px;
  }
  .show-box >span{
    font-size: 12px;
    color: #b5b9bc;
    margin-right: 30px;
  }
</style>