<template>
	<div>
    <div class="banner" @mouseover="clearInv" @mouseout="runInv">
      <div class="banner-slide">
        <a :href="slides[nowIndex].href">
        	<img :src="slides[nowIndex].src">
        </a>
      </div>
      <a class="banner-left" @click="goto(preIndex)"><i class="fa fa-angle-left"></i></a>
      <a class="banner-right" @click="goto(nextIndex)"><i class="fa fa-angle-right"></i></a>
      <div class="banner-dots">
        <span :class="{active: index===nowIndex}" v-for="(item,index) in slides" @click="goto(index)"></span>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
	export default {
		props:{
			slides: {
				type: Array,
				default: []
			},
			inv: {
				type: Number,
				default: 1000
			}
		},
		data () {
			return {
				nowIndex: 0
			}
		},
		computed:{
			preIndex () {
				if(this.nowIndex === 0){
					return this.slides.length - 1
				}else{
					return this.nowIndex  - 1
				}
			},
			nextIndex () {
				if(this.nowIndex === this.slides.length - 1){
					return 0
				}else{
					return this.nowIndex + 1
				}
			}
		},
		methods: {
			goto (index) {
				return this.nowIndex = index
			},
			runInv () {
				this.invId = setInterval(()=>{
					this.goto(this.nextIndex)
				},this.inv)
			},
			clearInv () {
				clearInterval (this.invId)
			}
		},
		mounted () {
			this.runInv()
		}
	}
</script>

<style type="text/css" scoped>
</style>