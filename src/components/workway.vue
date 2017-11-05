<template>
  <div>
    <div class="program-banner">
      <div class="banner-header">
        <h2 class="tit">成长   因陪伴不再孤独</h2>
          <div class="top-desc-box xlearflex">
            <p class="desc-item big-desc-item">课程体系化</p>
            <em class="desc-line">/</em>
            <p class="desc-item">问答作业1V1</p>
            <em class="desc-line">/</em>
            <p class="desc-item">学练测一体</p>
            <em class="desc-line">/</em>
            <p class="desc-item">视频不限期</p>
            <em class="desc-line">/</em>
            <p class="desc-item big-desc-item">服务随开随用</p>
          </div>
      </div>
      <div class="tab-nav clearflex">
        <a href="./" data-type="all" class="navitem active">
          <i class="navicon all"></i>
          <span class="navtext">全部职业路径</span>
          <div class="navbot"></div>
        </a>
        
        <a href="./?c=fe" data-type="fe" class="navitem ">
                <i class="navicon fe"></i>
          <span class="navtext">Web前端攻城狮</span>
          <div class="navbot"></div>
        </a>
            
        <a href="/?c=java" data-type="java" class="navitem ">
                <i class="navicon java"></i>
          <span class="navtext">Java攻城狮</span>
          <div class="navbot"></div>
        </a>
        
        <a href="/?c=android" data-type="android" class="navitem ">
                <i class="navicon android"></i>
          <span class="navtext">Android攻城狮</span>
          <div class="navbot"></div>
        </a>

        <a href="/?c=php" data-type="php" class="navitem ">
                <i class="navicon php"></i>
          <span class="navtext">PHP攻城狮</span>
          <div class="navbot"></div>
        </a>
        
        <a href="/?c=ios" data-type="ios" class="navitem ">
                <i class="navicon ios"></i>
          <span class="navtext">iOS攻城狮</span>
          <div class="navbot"></div>
        </a>
      </div>
      <div class="plan-list-wrap"></div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data (){
      return {
        classList: [
          {
            path: '/',
            type: 'all',
            name: '全部职业路径',
          }
        ]
      }
    },
    mounted(){
      document.title = "IT职业路径_编程学习路线_开发学习路径-慕课网职业路径"
    }
  }
</script>

<style type="text/css">
  .program-banner {
    width: 100%;
    height: 300px;
    box-sizing: border-box;
    position: relative;
    background: #cdf;
  }
  .banner-header{
    width: 100%;
    position: absolute;
    top: 64px;
  }
  .program-banner .tit {
    font-size: 36px;
    color: #fff;
    line-height: 36px;
    text-align: center;
    text-shadow: 0px 4px 8px rgba(7, 17, 27, 0.4);
    letter-spacing: 4px;
    margin-bottom: 26px;
    font-weight: bold;
  }
  .program-banner .top-desc-box {
    margin: 0 auto;
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 1px;
    line-height: 20px;
    text-align: center;
  }
  .program-banner .top-desc-box .desc-item {
    font-weight: normal;
    display: inline-block;
  }
  .program-banner .tab-nav {
    position: absolute;
    width: 1152px;
    height: 120px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0px 8px 16px rgba(7, 17, 27, 0.1);
    left: 50%;
    bottom: -60px;
    margin-left: -576px;
    padding: 20px 36px 0;
    z-index: 10;
    box-sizing: border-box;
  }
  .program-banner .navitem {
    float: left;
    width: 108px;
    height: 100px;
    text-align: center;
    cursor: pointer;
    position: relative;
    margin: 0 36px;
  }
  .program-banner .navitem:hover .navicon {
    margin-top: -4px;
  }
  .program-banner .navitem .navicon {
    display: block;
    width: 48px;
    height: 48px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2px;
    transition: .1s all linear;
    margin-top: 0;
    background-size: cover;
  }
  .program-banner .navitem {
    float: left;
    width: 108px;
    height: 100px;
    text-align: center;
    cursor: pointer;
    position: relative;
    margin: 0 36px;
  }
  .program-banner .navitem .navicon.all {
    background-image: url(../../static/img/all_icon.png);
    background-position: 0 0;
  }
  .program-banner .navitem .navicon.fe {
    background-image: url(../../static/img/web_icon.png);
  }
  .program-banner .navitem .navicon.java {
    background-image: url(../../static/img/java_icon.png);
  }
  .program-banner .navitem .navicon.android {
    background-image: url(../../static/img/android_icon.png);
  }
  .program-banner .navitem .navicon.php {
    background-image: url(../../static/img/php_icon.png);
  }
  .program-banner .navitem .navicon.ios {
    background-image: url(../../static/img/ios_icon.png);
  }
  .program-banner .navitem .navbot {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    /*display: none;*/
    height: 2px;
    background-color: #f01414;
    line-height: 0;
    overflow: hidden;
  }

</style>