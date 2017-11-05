<template>
  <div>
    <!-- 实战推荐 -->
    <section class="container-types clearflex" v-for="(item,index) in course" :class="index%2==0?'bg000':'bgfff'">
      <div class="parcel">
        <p class="types-title" v-html="course[index].typesTitle">
        </p>
        <div class="types-content">
          <a href="##" class="ad-box clearflex" v-for="ad in course[index].ad">
            <div class="adsense-box">
              <h3>{{ad.title}}</h3>
              <p>{{ad.content}}</p>
            </div>
          </a>
          <div class="course-card-container" v-for="card in course[index].courseCard">
            <a href="">
              <img :src="card.img">
              <div class="course-stat" v-if="card.courseStat">
                NEW
              </div>
              <div class="course-card-content">
                <h3>{{card.classTitle}}</h3>
                <div class="course-label">
                  <span v-for="lable in card.courseLabel">{{lable}}</span>
                </div>
                <div class="course-card-info">
                  <span v-for="info in card.courseCardInfo">{{info}}</span>
                  <span>
                    <i class="fa fa-user-o"></i>
                    {{card.viewPeople}}
                  </span>
                  <span class="course-star-box right" v-show="!card.isFree">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </span>
                </div>
                <div class="course-card-price">
                  {{card.courseCardPrice}}
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>  
    </section>
  </div>
</template>
<script type="text/javascript">
  export default {
    props:{
      course:{
        type: Array,
        default: []
      }
    },
    data () {
      return {
        hello: 'I am a login!',
      }
    }
  }
</script>