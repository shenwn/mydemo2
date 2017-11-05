<template>
  <div>
    <div v-for="(item,index) in hotArticle">
      <div class="article-lwrap">
         <h2 class="article-item-title">
           <a href="">{{item.title}}</a>
         </h2>
         <div class="item-text clearflex">
           <div class="item-img left" left>
             <a href=""><img :src=item.img></a>
           </div>
           <p class="item-bd">
             {{item.content}}
           </p>
           <div class="item-bottom clearflex">
             <div class="left left-info">
               <a href="" class="publisher-name">{{item.author}}</a>
             </div>
             <div class="right right-info">
               <span class="looked">{{item.look}}浏览</span>
               <span class="recom">{{item.recom}}推荐</span>
               <span class="judge">{{item.judge}}评论</span>
             </div>
           </div>
         </div>
     </div>
    </div>
    <page @nowPage="gotoPage" :show-pages="7"></page>
  </div>
</template>

<script type="text/javascript">
  import page from './page'
  export default {
    components: {
      page
    },
    data (){
      return {
        limit: 15,
        pages: 100,
        list: [],
        cur: 1,
        hot: 'hot',
        hotArticle:[
          {
            title:'Android开发者2017年最值得关注的25个库',
            img:require('../assets/images/article-item-img-1.jpg'),
            author:'fengsehn',
            content:'2017年最值得关注的25个Android库 这是在2017年发布的25个最好的Android开发库的列表。所有这些都值得尝试 。 以下不是排名顺序。 让我们开始吧！ 1.Lottie 这个库能够解析 Adobe After Effects 并且把他们渲染到手机上。在Google应用市场上，也有相应的demo。这个库被超过7500github使用者关注。 Github链接：https://gith...',
            look:'1619',
            recom:'10',
            judge:'2'
          },
          {
            title:'Android开发者2017年最值得关注的25个库',
            img:require('../assets/images/article-item-img-1.jpg'),
            author:'fengsehn',
            content:'2017年最值得关注的25个Android库 这是在2017年发布的25个最好的Android开发库的列表。所有这些都值得尝试 。 以下不是排名顺序。 让我们开始吧！ 1.Lottie 这个库能够解析 Adobe After Effects 并且把他们渲染到手机上。在Google应用市场上，也有相应的demo。这个库被超过7500github使用者关注。 Github链接：https://gith...',
            look:'1619',
            recom:'10',
            judge:'2'
          },
          {
            title:'Android开发者2017年最值得关注的25个库',
            img:require('../assets/images/article-item-img-1.jpg'),
            author:'fengsehn',
            content:'2017年最值得关注的25个Android库 这是在2017年发布的25个最好的Android开发库的列表。所有这些都值得尝试 。 以下不是排名顺序。 让我们开始吧！ 1.Lottie 这个库能够解析 Adobe After Effects 并且把他们渲染到手机上。在Google应用市场上，也有相应的demo。这个库被超过7500github使用者关注。 Github链接：https://gith...',
            look:'1619',
            recom:'10',
            judge:'2'
          },
          {
            title:'Android开发者2017年最值得关注的25个库',
            img:require('../assets/images/article-item-img-1.jpg'),
            author:'fengsehn',
            content:'2017年最值得关注的25个Android库 这是在2017年发布的25个最好的Android开发库的列表。所有这些都值得尝试 。 以下不是排名顺序。 让我们开始吧！ 1.Lottie 这个库能够解析 Adobe After Effects 并且把他们渲染到手机上。在Google应用市场上，也有相应的demo。这个库被超过7500github使用者关注。 Github链接：https://gith...',
            look:'1619',
            recom:'10',
            judge:'2'
          },
          {
            title:'Android开发者2017年最值得关注的25个库',
            img:require('../assets/images/article-item-img-1.jpg'),
            author:'fengsehn',
            content:'2017年最值得关注的25个Android库 这是在2017年发布的25个最好的Android开发库的列表。所有这些都值得尝试 。 以下不是排名顺序。 让我们开始吧！ 1.Lottie 这个库能够解析 Adobe After Effects 并且把他们渲染到手机上。在Google应用市场上，也有相应的demo。这个库被超过7500github使用者关注。 Github链接：https://gith...',
            look:'1619',
            recom:'10',
            judge:'2'
          },
          {
            title:'Android开发者2017年最值得关注的25个库',
            img:require('../assets/images/article-item-img-1.jpg'),
            author:'fengsehn',
            content:'2017年最值得关注的25个Android库 这是在2017年发布的25个最好的Android开发库的列表。所有这些都值得尝试 。 以下不是排名顺序。 让我们开始吧！ 1.Lottie 这个库能够解析 Adobe After Effects 并且把他们渲染到手机上。在Google应用市场上，也有相应的demo。这个库被超过7500github使用者关注。 Github链接：https://gith...',
            look:'1619',
            recom:'10',
            judge:'2'
          },
          {
            title:'Android开发者2017年最值得关注的25个库',
            img:require('../assets/images/article-item-img-1.jpg'),
            author:'fengsehn',
            content:'2017年最值得关注的25个Android库 这是在2017年发布的25个最好的Android开发库的列表。所有这些都值得尝试 。 以下不是排名顺序。 让我们开始吧！ 1.Lottie 这个库能够解析 Adobe After Effects 并且把他们渲染到手机上。在Google应用市场上，也有相应的demo。这个库被超过7500github使用者关注。 Github链接：https://gith...',
            look:'1619',
            recom:'10',
            judge:'2'
          },
          {
            title:'Android开发者2017年最值得关注的25个库',
            img:require('../assets/images/article-item-img-1.jpg'),
            author:'fengsehn',
            content:'2017年最值得关注的25个Android库 这是在2017年发布的25个最好的Android开发库的列表。所有这些都值得尝试 。 以下不是排名顺序。 让我们开始吧！ 1.Lottie 这个库能够解析 Adobe After Effects 并且把他们渲染到手机上。在Google应用市场上，也有相应的demo。这个库被超过7500github使用者关注。 Github链接：https://gith...',
            look:'1619',
            recom:'10',
            judge:'2'
          },
          {
            title:'Android开发者2017年最值得关注的25个库',
            img:require('../assets/images/article-item-img-1.jpg'),
            author:'fengsehn',
            content:'2017年最值得关注的25个Android库 这是在2017年发布的25个最好的Android开发库的列表。所有这些都值得尝试 。 以下不是排名顺序。 让我们开始吧！ 1.Lottie 这个库能够解析 Adobe After Effects 并且把他们渲染到手机上。在Google应用市场上，也有相应的demo。这个库被超过7500github使用者关注。 Github链接：https://gith...',
            look:'1619',
            recom:'10',
            judge:'2'
          },
          {
            title:'Android开发者2017年最值得关注的25个库',
            img:require('../assets/images/article-item-img-1.jpg'),
            author:'fengsehn',
            content:'2017年最值得关注的25个Android库 这是在2017年发布的25个最好的Android开发库的列表。所有这些都值得尝试 。 以下不是排名顺序。 让我们开始吧！ 1.Lottie 这个库能够解析 Adobe After Effects 并且把他们渲染到手机上。在Google应用市场上，也有相应的demo。这个库被超过7500github使用者关注。 Github链接：https://gith...',
            look:'1619',
            recom:'10',
            judge:'2'
          },
          {
            title:'Android开发者2017年最值得关注的25个库',
            img:require('../assets/images/article-item-img-1.jpg'),
            author:'fengsehn',
            content:'2017年最值得关注的25个Android库 这是在2017年发布的25个最好的Android开发库的列表。所有这些都值得尝试 。 以下不是排名顺序。 让我们开始吧！ 1.Lottie 这个库能够解析 Adobe After Effects 并且把他们渲染到手机上。在Google应用市场上，也有相应的demo。这个库被超过7500github使用者关注。 Github链接：https://gith...',
            look:'1619',
            recom:'10',
            judge:'2'
          },
          {
            title:'Android开发者2017年最值得关注的25个库',
            img:require('../assets/images/article-item-img-1.jpg'),
            author:'fengsehn',
            content:'2017年最值得关注的25个Android库 这是在2017年发布的25个最好的Android开发库的列表。所有这些都值得尝试 。 以下不是排名顺序。 让我们开始吧！ 1.Lottie 这个库能够解析 Adobe After Effects 并且把他们渲染到手机上。在Google应用市场上，也有相应的demo。这个库被超过7500github使用者关注。 Github链接：https://gith...',
            look:'1619',
            recom:'10',
            judge:'2'
          },
          {
            title:'Android开发者2017年最值得关注的25个库',
            img:require('../assets/images/article-item-img-1.jpg'),
            author:'fengsehn',
            content:'2017年最值得关注的25个Android库 这是在2017年发布的25个最好的Android开发库的列表。所有这些都值得尝试 。 以下不是排名顺序。 让我们开始吧！ 1.Lottie 这个库能够解析 Adobe After Effects 并且把他们渲染到手机上。在Google应用市场上，也有相应的demo。这个库被超过7500github使用者关注。 Github链接：https://gith...',
            look:'1619',
            recom:'10',
            judge:'2'
          },
          {
            title:'Android开发者2017年最值得关注的25个库',
            img:require('../assets/images/article-item-img-1.jpg'),
            author:'fengsehn',
            content:'2017年最值得关注的25个Android库 这是在2017年发布的25个最好的Android开发库的列表。所有这些都值得尝试 。 以下不是排名顺序。 让我们开始吧！ 1.Lottie 这个库能够解析 Adobe After Effects 并且把他们渲染到手机上。在Google应用市场上，也有相应的demo。这个库被超过7500github使用者关注。 Github链接：https://gith...',
            look:'1619',
            recom:'10',
            judge:'2'
          },
          {
            title:'Android开发者2017年最值得关注的25个库',
            img:require('../assets/images/article-item-img-1.jpg'),
            author:'fengsehn',
            content:'2017年最值得关注的25个Android库 这是在2017年发布的25个最好的Android开发库的列表。所有这些都值得尝试 。 以下不是排名顺序。 让我们开始吧！ 1.Lottie 这个库能够解析 Adobe After Effects 并且把他们渲染到手机上。在Google应用市场上，也有相应的demo。这个库被超过7500github使用者关注。 Github链接：https://gith...',
            look:'1619',
            recom:'10',
            judge:'2'
          },
          {
            title:'Android开发者2017年最值得关注的25个库',
            img:require('../assets/images/article-item-img-1.jpg'),
            author:'fengsehn',
            content:'2017年最值得关注的25个Android库 这是在2017年发布的25个最好的Android开发库的列表。所有这些都值得尝试 。 以下不是排名顺序。 让我们开始吧！ 1.Lottie 这个库能够解析 Adobe After Effects 并且把他们渲染到手机上。在Google应用市场上，也有相应的demo。这个库被超过7500github使用者关注。 Github链接：https://gith...',
            look:'1619',
            recom:'10',
            judge:'2'
          },
          {
            title:'Android开发者2017年最值得关注的25个库',
            img:require('../assets/images/article-item-img-1.jpg'),
            author:'fengsehn',
            content:'2017年最值得关注的25个Android库 这是在2017年发布的25个最好的Android开发库的列表。所有这些都值得尝试 。 以下不是排名顺序。 让我们开始吧！ 1.Lottie 这个库能够解析 Adobe After Effects 并且把他们渲染到手机上。在Google应用市场上，也有相应的demo。这个库被超过7500github使用者关注。 Github链接：https://gith...',
            look:'1619',
            recom:'10',
            judge:'2'
          },
          {
            title:'Android开发者2017年最值得关注的25个库',
            img:require('../assets/images/article-item-img-1.jpg'),
            author:'fengsehn',
            content:'2017年最值得关注的25个Android库 这是在2017年发布的25个最好的Android开发库的列表。所有这些都值得尝试 。 以下不是排名顺序。 让我们开始吧！ 1.Lottie 这个库能够解析 Adobe After Effects 并且把他们渲染到手机上。在Google应用市场上，也有相应的demo。这个库被超过7500github使用者关注。 Github链接：https://gith...',
            look:'1619',
            recom:'10',
            judge:'2'
          },
          {
            title:'Android开发者2017年最值得关注的25个库',
            img:require('../assets/images/article-item-img-1.jpg'),
            author:'fengsehn',
            content:'2017年最值得关注的25个Android库 这是在2017年发布的25个最好的Android开发库的列表。所有这些都值得尝试 。 以下不是排名顺序。 让我们开始吧！ 1.Lottie 这个库能够解析 Adobe After Effects 并且把他们渲染到手机上。在Google应用市场上，也有相应的demo。这个库被超过7500github使用者关注。 Github链接：https://gith...',
            look:'1619',
            recom:'10',
            judge:'2'
          },
          {
            title:'Android开发者2017年最值得关注的25个库',
            img:require('../assets/images/article-item-img-1.jpg'),
            author:'fengsehn',
            content:'2017年最值得关注的25个Android库 这是在2017年发布的25个最好的Android开发库的列表。所有这些都值得尝试 。 以下不是排名顺序。 让我们开始吧！ 1.Lottie 这个库能够解析 Adobe After Effects 并且把他们渲染到手机上。在Google应用市场上，也有相应的demo。这个库被超过7500github使用者关注。 Github链接：https://gith...',
            look:'1619',
            recom:'10',
            judge:'2'
          },
          {
            title:'Android开发者2017年最值得关注的25个库',
            img:require('../assets/images/article-item-img-1.jpg'),
            author:'fengsehn',
            content:'2017年最值得关注的25个Android库 这是在2017年发布的25个最好的Android开发库的列表。所有这些都值得尝试 。 以下不是排名顺序。 让我们开始吧！ 1.Lottie 这个库能够解析 Adobe After Effects 并且把他们渲染到手机上。在Google应用市场上，也有相应的demo。这个库被超过7500github使用者关注。 Github链接：https://gith...',
            look:'1619',
            recom:'10',
            judge:'2'
          },
          {
            title:'Android开发者2017年最值得关注的25个库',
            img:require('../assets/images/article-item-img-1.jpg'),
            author:'fengsehn',
            content:'2017年最值得关注的25个Android库 这是在2017年发布的25个最好的Android开发库的列表。所有这些都值得尝试 。 以下不是排名顺序。 让我们开始吧！ 1.Lottie 这个库能够解析 Adobe After Effects 并且把他们渲染到手机上。在Google应用市场上，也有相应的demo。这个库被超过7500github使用者关注。 Github链接：https://gith...',
            look:'1619',
            recom:'10',
            judge:'2'
          },
          {
            title:'Android开发者2017年最值得关注的25个库',
            img:require('../assets/images/article-item-img-1.jpg'),
            author:'fengsehn',
            content:'2017年最值得关注的25个Android库 这是在2017年发布的25个最好的Android开发库的列表。所有这些都值得尝试 。 以下不是排名顺序。 让我们开始吧！ 1.Lottie 这个库能够解析 Adobe After Effects 并且把他们渲染到手机上。在Google应用市场上，也有相应的demo。这个库被超过7500github使用者关注。 Github链接：https://gith...',
            look:'1619',
            recom:'10',
            judge:'2'
          },
          {
            title:'Android开发者2017年最值得关注的25个库',
            img:require('../assets/images/article-item-img-1.jpg'),
            author:'fengsehn',
            content:'2017年最值得关注的25个Android库 这是在2017年发布的25个最好的Android开发库的列表。所有这些都值得尝试 。 以下不是排名顺序。 让我们开始吧！ 1.Lottie 这个库能够解析 Adobe After Effects 并且把他们渲染到手机上。在Google应用市场上，也有相应的demo。这个库被超过7500github使用者关注。 Github链接：https://gith...',
            look:'1619',
            recom:'10',
            judge:'2'
          },
          {
            title:'Android开发者2017年最值得关注的25个库',
            img:require('../assets/images/article-item-img-1.jpg'),
            author:'fengsehn',
            content:'2017年最值得关注的25个Android库 这是在2017年发布的25个最好的Android开发库的列表。所有这些都值得尝试 。 以下不是排名顺序。 让我们开始吧！ 1.Lottie 这个库能够解析 Adobe After Effects 并且把他们渲染到手机上。在Google应用市场上，也有相应的demo。这个库被超过7500github使用者关注。 Github链接：https://gith...',
            look:'1619',
            recom:'10',
            judge:'2'
          },
          {
            title:'Android开发者2017年最值得关注的25个库',
            img:require('../assets/images/article-item-img-1.jpg'),
            author:'fengsehn',
            content:'2017年最值得关注的25个Android库 这是在2017年发布的25个最好的Android开发库的列表。所有这些都值得尝试 。 以下不是排名顺序。 让我们开始吧！ 1.Lottie 这个库能够解析 Adobe After Effects 并且把他们渲染到手机上。在Google应用市场上，也有相应的demo。这个库被超过7500github使用者关注。 Github链接：https://gith...',
            look:'1619',
            recom:'10',
            judge:'2'
          },
          {
            title:'Android开发者2017年最值得关注的25个库',
            img:require('../assets/images/article-item-img-1.jpg'),
            author:'fengsehn',
            content:'2017年最值得关注的25个Android库 这是在2017年发布的25个最好的Android开发库的列表。所有这些都值得尝试 。 以下不是排名顺序。 让我们开始吧！ 1.Lottie 这个库能够解析 Adobe After Effects 并且把他们渲染到手机上。在Google应用市场上，也有相应的demo。这个库被超过7500github使用者关注。 Github链接：https://gith...',
            look:'1619',
            recom:'10',
            judge:'2'
          },
          {
            title:'Android开发者2017年最值得关注的25个库',
            img:require('../assets/images/article-item-img-1.jpg'),
            author:'fengsehn',
            content:'2017年最值得关注的25个Android库 这是在2017年发布的25个最好的Android开发库的列表。所有这些都值得尝试 。 以下不是排名顺序。 让我们开始吧！ 1.Lottie 这个库能够解析 Adobe After Effects 并且把他们渲染到手机上。在Google应用市场上，也有相应的demo。这个库被超过7500github使用者关注。 Github链接：https://gith...',
            look:'1619',
            recom:'10',
            judge:'2'
          }
        ]
      }
    },
    watch: {
      cur(val,old){
        // console.log(val,"新值")
        this.getPage()
      }
    },
     methods: {
      gotoPage (page) {
        this.cur = page
      },
      //获取数据ajax
      getPage () {
        let reqParams = {
          query: this.cur
        }
        // this.$http.post('/api/db.json', reqParams)
        // .then((res) => {
        //   this.tableData = res.data.list
        // }, (err) => {
        //   console.log(err)
        // })
      }
    }
  }
</script>

<style type="text/css" scoped>
  .article-lwrap{
    border-bottom: 1px solid #d9dde1;
    overflow: hidden;
  }
  .article-item-title{
    padding: 33px 0 7px; 
    line-height: 32px;
  }
  .article-item-title > a{
    line-height: 24px;
    font-size: 20px;
    font-weight: 700;
    color: #14191e;
  }
  .article-item-title > a:hover{
    color: #ec1500;
  }
  .item-text{
    padding-top: 7px;
    overflow: hidden;
  }
  .item-img{
    width: 210px;
    height: 130px;
    margin: 0 20px 0 0;
  }
  .item-img > a{
    display: block;
    width: 100%;
    height: 100%;
  }
  .item-img > a >img{
    width: 100%;
    height: 100%;
  }
  .item-bd{
    min-height: 140px;
    font-size: 14px;
    line-height: 28px;
    color: #787d82;
    margin-top: -5px;
  }
  .item-bd::after{
    content:"";
    display: block;
    clear: both;
  }
  .item-bottom{
    padding: 14px 0 25px;
    font-size: 14px;
    color: #93999f;
    line-height: 19px;
  }
  .left-info > a{
    margin-right: 10px;
  }
  .right-info > span{
    padding-left: 30px;
  }
  .page{
    margin: 25px 0 auto;
    clear: both;
    overflow: hidden;
    text-align: center;
  }
</style>