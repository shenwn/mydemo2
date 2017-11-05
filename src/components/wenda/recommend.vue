<template>
  <div class="list">
   <p>hello</p>
   <p>hello</p>
   <p>hello</p>
   <p>hello</p>
   <p>hello</p>
  </div>
</template>

<script type="text/javascript">
  
export default {
  data (){
    return {
      hello : "hello"
    }
  },
  mounted () {
    console.log('hello')
  }
}
</script>
<style type="text/css">
  .list{
    width: 100px;
    height: 100px;
    background: #f00;
  }
</style>

