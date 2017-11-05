// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'font-awesome/css/font-awesome.css'
import VRouter from 'vue-router'
import WorkWay from './components/workway'
import IndexPage from './components/indexPage'
import CourseList from './components/list'
import WenDa from './components/wenda'
import Recommend from './components/wenda/recommend'
import New from './components/wenda/new'
import Issue from './components/wenda/issue'
import Waitreply from './components/wenda/waitreply'
import Article from './components/article'
import Hot from './components/hot'
import ArticleNew from './components/new'
import Vuex from 'vuex'
import VueResource from 'vue-resource'


Vue.use(VRouter)
Vue.use(VueResource)
// Vue.use(Vuex)
	
let router = new VRouter ({
	mode: 'history',
	routes:[
		{
			path: '/',
			component: IndexPage
		},
		{
			path: '/list',
			component: CourseList,
			name: 'list'
		},
		{
			path: '/workway',
			component: WorkWay
		},
		{
			path: '/wenda',
			component: WenDa,
			children: [
				{
					path: 'recommend',
					component: Recommend
				},
				{
					path: 'new',
					component: New
				},
				{
					path: 'issue',
					component: Issue
				},
				{
					path: 'waitreply',
					component: Waitreply
				}
			]
		},
		{
			path: '/article',
			component: Article,
			children:[
				{
					path:'/',
					component:Hot,
					children: [
						{
							path:'hot',
							component:Hot,
						}
					]
				},
				{
					path:'hot/:pageId',
					component:Hot,
					name:'hot'
				},
				{
					path:'new',
					component: ArticleNew
				}
			]
		},
	]
})


// let store = new Vuex.Store({
// 	state: {
// 		totalPrice: 0
// 	},
// 	mutations: {
// 		increment (state, price){
// 			state.totalPrice += price
// 		},
// 		decrement (state, price) {
// 			state.totalPrice -= price
// 		}
// 	}
// })


/*Vue.config.productionTip = false*/

/* eslint-disable no-new */
new Vue ({
	el: '#app',
	router,
	// store,
	template: '<App/>',
	components: {App}
})
