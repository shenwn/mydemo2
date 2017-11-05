<template>
  <div>
   <div class="page">
      <span class="disabled" v-if="nowPage == 1">首页</span>
      <a v-if="nowPage > 1" @click="gotoPage(1)">首页</a>
      <span class="disabled" v-if="nowPage == 1">上一页</span>
      <a v-if="nowPage > 1" @click="gotoPage(prevPage)">上一页</a>
      <a  v-for="page in pageList" class="page-tag" :class="{active: nowPage==page}" @click="gotoPage(page)">{{page}}</a>
      <span class="disabled" v-if="nowPage == totalPage">下一页</span>
      <a v-if="nowPage < totalPage" @click="gotoPage(nextPage)">下一页</a>
      <span class="disabled" v-if="nowPage == totalPage">尾页</span>
      <a v-if="nowPage < totalPage" @click="gotoPage(totalPage)">尾页</a>
   </div>
      
  </div>
</template>

<script type="text/javascript">
  export default {
    props:{
      showPages: {
        type: Number,
        default: 7
      }
    },
    created (){
      this.getList(1,this.showPages)
    },
    data (){
      return {
        nowPage: 1,
        pageList: [],
        totalPage : 100,
        isFirst : false
      }
    },
    computed: {
      prevPage () {
        if(this.nowPage <= 1){
          return 1
        }else{
          return this.nowPage  - 1
        }
      },
      nextPage () {
        if(this.nowPage >= this.totalPage){
          return this.totalPage
        }else{
          return this.nowPage + 1
        }
      }
    },
    watch: {
      nowPage () {
        this.runPage ()
        this.$emit('nowPage',this.nowPage) //把page传递给父组件
      }
    },
    methods: {
      gotoPage (page) {
        return this.nowPage = page
      },
      //渲染页码
      getList(start,len) {
        let list = []
        for(let i=0; i<len; i++){
          list[i] = start + i
        }
        return this.pageList = list
      },
      //根据当前页码改变跳转页码
      runPage (){ 
        let arv = Math.floor(this.showPages/2)
        if(this.nowPage <= arv){
          this.getList(1,this.showPages)
        }
        else if (this.nowPage > arv && this.nowPage <= this.totalPage-arv){
          this.getList(this.nowPage-arv,this.showPages)
        }
        else{
          this.getList(this.totalPage-this.showPages+1,this.showPages)
        }
      }
      
    }
  }
</script>

<style type="text/css" scoped>
.page{
  margin-top: 35px;
  text-align: center;
}
.page a {
  display: inline-block;
  text-align: center;
  font-size: 14px;
  min-width: 24px;
  line-height: 32px;
  padding: 0 4px;
  margin: 0 8px;
  border-radius: 16px;
  color: #4d555d;
  cursor: pointer;
}
.page span{
  height: 32px;
  color: #c8cdd2;
}
span.disabled{
  padding: 0 4px;
    min-width: 24px;
    line-height: 32px;
    font-size: 14px;
    display: inline-block;
    text-align: center;
}
.page .page-tag:hover{
  background: #d9dde1;
  color: #4d555d;
}
.page .page-tag.active {
  background: #4d555d;
  color: #fff;
}
</style>