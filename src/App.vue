<template>
  <div>
    <!-- header -->
    <header class="header">
      <div class="logo">
        <router-link :to="{path:'/'}"><!-- <img src="./assets/images/logo_new.png"> --></router-link>
      </div>
      <nav class="header-left-nav">
        <router-link :to="{path:'/course/list'}">课程</router-link>
        <router-link :to="{path:'/workway'}">职业路径</router-link>
        <router-link :to="{path:'/list'}">实战</router-link>
        <router-link :to="{path:'/wenda'}">猿问</router-link>
        <router-link :to="{path:'/article'}">手记</router-link>
      </nav>
      <div class="header-search" :class="{focus:isfocus}" @click="onFacus">
        <input type="text" name="">
        <div class="header-search-tags">
          <a href=""><span>前端入门</span></a>
          <a href=""><span>Java入门</span></a>
        </div>
        <div class="search-button">
          <button><i class="fa fa-search"></i></button>
        </div>
        <ul class="search-result">
          <li>11</li>
          <li>22</li>
          <li>33</li>
          <li>44</li>
          <li>55</li>
        </ul>
      </div>
      <ul class="login-area">
        <li class="app-load">
          <a href="">下载APP</a>
          <div class="app-load-box">
            <img src="./assets/images/appload.png">
            <div>
              <p>扫描下载慕课网APP</p>
              <a href="">
                <i class="fa fa-apple fa-lg"></i>
                <span>App Store 下载</span>
              </a>
              <a href="">
                <i class="fa fa-android fa-lg"></i>
                <span>Android 下载</span>
              </a>
            </div>
          </div>
        </li>
        <li class="shop-cart">
          <a href="" class="shop-cart-icon">
            <i class="fa fa-shopping-cart"></i>
            <span>购物车</span>
          </a>
          <div class="my-cart">
            <div class="cart-title clearflex">
              <h2 class="left">我的购物车</h2>
              <h5 class="right">
                已加入<span class="incart-num">0</span>门课程
              </h5>
            </div>
            <div class="cart-wrap">
              <div class="clear-cart">
                <i class="fa fa-shopping-cart"></i>
                <h3>购物车里空空如也</h3>
                <p>快去这里选购你中意的课程</p>
                <a href="">实战课程</a>
                <a href="">职业路径</a>
              </div>
            </div>
            <div class="cart-bottom clearflex">
              <a href="" class="left go-order">我的订单中心</a>
              <a href="" class="right go-cart">去购物车</a>
            </div>
          </div>
        </li>
        <li class="remind-wrap">
          <i class="msg"></i>
          <a href=""><i class="fa fa-bell fa-lg"></i></a>
        </li>
        <!-- <li><a href="">登录</a>/<a href="">注册</a></li> -->
        <li class="user-card">
          <a href="" class="user-card-item">
            <img src="./assets/images/user.jpg">
          </a>
          <div class="user-card-box">
            <div class="user-top">
              <a href="" class="left">
                <img src="./assets/images/user.jpg">
              </a>
              <div class="left">
                <p><a href="" class="user-name">繁星0123456789</a></p>
                <a href="">经验 <b>22056</b></a>
                <a href="">积分<b>0</b></a>
              </div>
            </div>
            <div class="user-content">
              <ul>
                <li class="left">
                  <a href="">
                    <i class="fa fa-indent"></i>
                    我的课程
                  </a>
                </li>
                <li class="left">
                  <a href="">
                    <i class="fa fa-indent"></i>
                    订单中心
                  </a>
                </li>
                <li class="left">
                  <a href="">
                    <i class="fa fa-indent"></i>
                    积分商城
                  </a>
                </li>
                <li class="left">
                  <a href="">
                    <i class="fa fa-cog"></i>
                    个人设置
                  </a>
                </li>
              </ul>
            </div>
            <div class="user-history">
              <div class="history-item">
                <span class="history-class-tit">带你入门Vue 2.0及案例开发</span>
                <span class="history-class-name">5-9vuex状态管理（原理）</span>
                <a href="" class="continue">继续</a>
                <i class="fa fa-clock-o"></i>
              </div>
            </div>
            <div class="user-bottom">
              <a href="" class="left">安全退出</a>
            </div>
          </div>
        </li>
      </ul>
    </header>
    <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <footer class="footer">  
      <div class="parcel">    
        <div class="foot-sns">
          <div>
            <a href="" class="weixin">
              <span></span>
            </a>
            <p>官方公众号</p>
          </div>
          <div>
            <a href="" class="weibo"></a>
            <p>官方微博</p>
          </div>
        </div>    
        <div class="footer-link">
          <a href="" title="企业合作">企业合作</a>      
          <a href="" title="人才招聘">人才招聘</a>      
          <a href="" title="联系我们">联系我们</a>      
          <a href="" title="讲师招募">讲师招募</a>      
          <a href="" title="常见问题">常见问题</a>      
          <a href="" title="意见反馈">意见反馈</a>      
          <a href="">慕课大学</a>      
          <a href="" title="友情链接">友情链接</a>    
        </div>        
        <div class="footer-copyright">     
          <p>©&nbsp;2017&nbsp;imooc.com&nbsp;&nbsp;京ICP备 13046642号-2</p>    
        </div>  
      </div>
    </footer>
    <div class="slide-nav">
      <ul>
        <li>
          <a href="">
            <i class=" fa fa-twitch"></i>
            <span>意见反馈</span>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fa fa-question-circle-o"></i>
            <span>常见问题</span>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fa fa-tablet"></i>
            <span>APP下载</span>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fa fa-commenting-o"></i>
            <span>官方微信</span>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fa fa-angle-up"></i>
            <span>返回顶部</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
    name: 'app',
    data () {
      return {
        isfocus:false
      }
    },
    methods: {
      onFacus () {
        this.isfocus = !this.isfocus
      }
    }
}
</script>

<style type="text/css">
  
</style>

