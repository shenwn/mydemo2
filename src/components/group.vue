<template>
  <div>
    <div class="cato-nav-box">
      <a v-for="(item, index) in tabs" :class="{cur: index==curTab}" @click="toggleBtn(index,item.url)">{{item.con}}</a>
    </div>
    <div class="skill-nav-box">
      <a v-for="(item , i) in tabs[curTab].child" :class="{on : item.childQuery==curTabCon}" @click="toggleCon(item.childQuery)">{{item.childCon}}</a>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data (){
      return {
        reqQuery: [],
        curTab: 0,
        curTabCon : '',
        tabs: [
          {
            url: '',
            con: '全部',
            child: [
              {
                childQuery: '',
                childCon : '不限'
              },
              {
                childQuery: 'html',
                childCon : 'HTML/CSS'
              },
              {
                childQuery: 'javascript',
                childCon : 'JavaScript'
              },
              {
                childQuery: 'html5',
                childCon : 'Html5'
              },
              {
                childQuery: 'css3',
                childCon : 'CSS3'
              },
              {
                childQuery: 'jquery',
                childCon : 'jQuery'
              },
              {
                childQuery: 'nodejs',
                childCon : 'Node.js'
              },
              {
                childQuery: 'angularjs',
                childCon : 'AngularJS'
              },
              {
                childQuery: 'reactjs',
                childCon : 'React.JS'
              },
              {
                childQuery: 'vuejs',
                childCon : 'Vue.js'
              },
              {
                childQuery: 'webapp',
                childCon : 'WebApp'
              },
              {
                childQuery: 'thinkphp',
                childCon : 'ThinkPHP'
              },
              {
                childQuery: 'php',
                childCon : 'PHP'
              },
              {
                childQuery: 'yii',
                childCon : 'Yii'
              },
              {
                childQuery: 'java',
                childCon : 'Java'
              },
              {
                childQuery: 'springboot',
                childCon : 'SpringBoot'
              },
              {
                childQuery: 'python',
                childCon : 'Python'
              },{
                childQuery: 'cplusplus',
                childCon : 'C++'
              },
              {
                childQuery: 'algorithm',
                childCon : '算法'
              },
              {
                childQuery: 'android',
                childCon : 'Android'
              },
              {
                childQuery: 'ios',
                childCon : 'iOS'
              },
              {
                childQuery: 'mysql',
                childCon : 'MySQL'
              },
              {
                childQuery: 'mongodb',
                childCon : 'MongoDB'
              },
              {
                childQuery: 'bigdata',
                childCon : '大数据'
              },
              {
                childQuery: 'test',
                childCon : '测试'
              },
              {
                childQuery: 'linux',
                childCon : 'Linux'
              },
              {
                childQuery: 'machine',
                childCon : '机器学习'
              },
              {
                childQuery: 'deep',
                childCon : '深度学习'
              }
            ]
          },
          {
            url: 'fe',
            con: '前端开发',
            child: [
              {
                childQuery: '',
                childCon : '不限'
              },
              {
                childQuery: 'html',
                childCon : 'HTML/CSS'
              },
              {
                childQuery: 'javascript',
                childCon : 'JavaScript'
              },
              {
                childQuery: 'html5',
                childCon : 'Html5'
              },
              {
                childQuery: 'css3',
                childCon : 'CSS3'
              },
              {
                childQuery: 'jquery',
                childCon : 'jQuery'
              },
              {
                childQuery: 'nodejs',
                childCon : 'Node.js'
              },
              {
                childQuery: 'angularjs',
                childCon : 'AngularJS'
              },
              {
                childQuery: 'reactjs',
                childCon : 'React.JS'
              },
              {
                childQuery: 'vuejs',
                childCon : 'Vue.js'
              },
              {
                childQuery: 'webapp',
                childCon : 'WebApp'
              }
            ]
          },
          {
            url: 'be',
            con: '后端开发',
            child: [
              {
                childQuery: '',
                childCon : '不限'
              },
              {
                childQuery: 'thinkphp',
                childCon : 'ThinkPHP'
              },
              {
                childQuery: 'php',
                childCon : 'PHP'
              },
              {
                childQuery: 'yii',
                childCon : 'Yii'
              },
              {
                childQuery: 'java',
                childCon : 'Java'
              },
              {
                childQuery: 'springboot',
                childCon : 'SpringBoot'
              },
              {
                childQuery: 'python',
                childCon : 'Python'
              },{
                childQuery: 'cplusplus',
                childCon : 'C++'
              },
              {
                childQuery: 'algorithm',
                childCon : '算法'
              }
            ]
          },
          {
            url: 'mobile',
            con: '移动开发',
            child: [
              {
                childQuery: '',
                childCon : '不限'
              },
              {
                childQuery: 'android',
                childCon : 'Android'
              },
              {
                childQuery: 'ios',
                childCon : 'iOS'
              }
            ]
          },
          {
            url: 'data',
            con: '数据库',
            child: [
              {
                childQuery: '',
                childCon : '不限'
              },
              {
                childQuery: 'mysql',
                childCon : 'MySQL'
              },
              {
                childQuery: 'mongodb',
                childCon : 'MongoDB'
              }
            ]
          },
          {
            url: 'cb',
            con: '云计算&大数据',
            child: [
              {
                childQuery: '',
                childCon : '不限'
              },
              {
                childQuery: 'bigdata',
                childCon : '大数据'
              }
            ]
          },
          {
            url: 'op',
            con: '运维&测试',
            child: [
              {
                childQuery: '',
                childCon : '不限'
              },
              {
                childQuery: 'test',
                childCon : '测试'
              },
              {
                childQuery: 'linux',
                childCon : 'Linux'
              }
            ]
          },
          {
            url: 'ai',
            con: '人工智能',
            child: [
              {
                childQuery: '',
                childCon : '不限'
              },
              {
                childQuery: 'machine',
                childCon : '机器学习'
              },
              {
                childQuery: 'deep',
                childCon : '深度学习'
              }
            ]
          }
        ],
        group:[
          {
            name: '0',
            content: ''
          },
          {
            name: 'fe',
            content:['html','javascript','html5','css3','jquery','nodejs','angularjs','reactjs','vuejs','webapp']
          },
          {
            name: 'be',
            content:['php','thinkphp','yii','java','springboot','python','cplusplus','algorithm']
          },
          {
            name: 'mobile',
            content:['android','ios']
          },
          {
            name: 'data',
            content:['mysql','mongodb']
          },
          {
            name: 'cb',
            content:['bigdata']
          },
          {
            name: 'op',
            content:['test','linux']
          },
          {
            name: 'ai',
            content: ['machine','deep']
          }
        ]
      }
    },
    methods: {
      toggleBtn (i,query) {
        let type = 'c=' + query
        
        let index = this.checkQuery('[$c=.]', this.reqQuery)
        console.log(index)
        if(index === false){
          this.reqQuery.push(type)
        }else{
          this.reqQuery[index] = type
        }
          this.curTabCon = ''

        return this.curTab = i
      },
      toggleCon (query) {
        let type = 'c=' + query

        let index = this.checkQuery('[$c=.]', this.reqQuery)
        console.log(index)
        if(index === false){
          this.reqQuery.push(type)
        }else{
          this.reqQuery[index] = type
        }
        
        for(let j=0; j < this.group.length; j++) {
          for(let k in this.group[j].content){
            if(this.group[j].content[k] == query){
              console.log(query,k)
              this.curTab = j
            }
          }
        }
        return this.curTabCon = query
      },
      checkQuery (arg, array) {
        for(let i=0; i < array.length; i++) {
          let reg = new RegExp(arg,'g')
          if(reg.test(array[i])){
            return i
          }
        }
        return false
      }
    },
    mounted(){
      document.title = "IT职业路径_编程学习路线_开发学习路径-慕课网职业路径"
    }
  }
</script>

