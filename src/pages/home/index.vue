<template>
  <div class="">
    <div id="home-search">
      <HomeSearch :homeBannerFlag="flag.homeBanner" 
        :homeSearchFlag="flag.homeSearch"
        @onLoading="(isLoading, index) => $set(arr_factor, index, !isLoading)"/>
    </div>

    <div class="text-center" id="recommendation" style="margin-top: 5rem; margin-bottom: 8rem;">
      <Recommendation :recommendationTitle1Flag="flag.recommendationTitle1" 
        :recommendationTitle2Flag="flag.recommendationTitle2" 
        @onChangeArr="(arr)  => onChangeRecommendationArr(arr)" 
        @onLoading="(isLoading, index) => $set(arr_factor, index, !isLoading)"/>
    </div>

    <WhyChooseUs
      :whyChooseTitle1Flag="flag.whyChooseTitle1"
      :whyChooseTitle2Flag="flag.whyChooseTitle2"
      :whyChooseUs1Flag="flag.whyChooseUs1"
      :whyChooseUs2Flag="flag.whyChooseUs2"
      :whyChooseUs3Flag="flag.whyChooseUs3"/>

    <div class="text-center" style="margin-top: 6.5rem; margin-bottom: 11.5rem;">
      <Testimony :testimonyTitle1Flag="flag.testimonyTitle1" 
        :testimonyTitle2Flag="flag.testimonyTitle2"
        @onLoading="(isLoading, index) => $set(arr_factor, index, !isLoading)"/>
    </div>

    <div class="custom-navbar-padding-right custom-navbar-padding-left" style="margin-top: 6.5rem; margin-bottom: 6.5rem;">
      <Article :articleTitle1Flag="flag.articleTitle1" 
        :articleTitle2Flag="flag.articleTitle2"
        @onLoading="(isLoading, index) => $set(arr_factor, index, !isLoading)"/>
    </div>

    
  </div>
</template>

<script>
import Base from '@/utils/base';

import Audi from '@/assets/Audi.png';
import BMW from '@/assets/BMW.png';
import Ford from '@/assets/Ford.png';
import Mazda from '@/assets/Mazda.png';
import Mercedes from '@/assets/Mercedes Benz.png';
import Nissan from '@/assets/Nissan.png';
import Volkswagen from '@/assets/Volkswagen.png';

import HomeSearch from '@/pages/home/component/home_search.vue'
import Recommendation from '@/pages/home/component/recommendation.vue'
import Testimony from '@/pages/home/component/testimony.vue'
import Article from '@/pages/home/component/article.vue'
import WhyChooseUs from '@/pages/home/component/why_choose_us.vue'

export default {
  components: {
    'HomeSearch': HomeSearch,
    'Recommendation': Recommendation,
    'Testimony': Testimony,
    'Article': Article,
    'WhyChooseUs': WhyChooseUs,
  },
  data(){
    return{
      base: null,
      flag: {
        homeBanner: false,
        homeSearch: false,
        recommendationTitle1: false,
        recommendationTitle2: false,
        testimonyTitle1: false,
        testimonyTitle2: false,
        articleTitle1: false,
        articleTitle2: false,
        whyChooseTitle1: false,
        whyChooseTitle2: false,
        whyChooseUs1: false,
        whyChooseUs2: false,
        whyChooseUs3: false,
      },
      arr_factor: [false, false, false, false, ],
      arr_car_brand: [Audi, BMW, Ford, Ford, Mazda, Mercedes, Nissan, Volkswagen,],
      arr_recommendation: [],
      scrollY: 0,
    }
  },
  watch: {
    arr_factor(val){
      this.$emit('onChangeArrFactor', val)
      this.manage_start_animation()
    },
    scrollY(){
      this.manage_start_animation()
    },
  },
  created(){
    this.base = new Base()
    window.addEventListener('scroll', this.handleScroll)
    this.scrollY = 1
		
		console.log('testajdklajdlkjalksjdl')
  },
  methods: {
    handleScroll(){
      console.log(window.scrollY)
      this.scrollY = window.scrollY
    },
    manage_start_animation(){
      this.flag.homeBanner = this.base.check_start_animation(this.scrollY, this.flag.homeBanner, this.arr_factor, 0)
      this.flag.homeSearch = this.base.check_start_animation(this.scrollY, this.flag.homeSearch, this.arr_factor, 0)

      var whyChooseImage = window.$('#home-search').innerHeight() - 600
      this.flag.recommendationTitle1 = this.base.check_start_animation(this.scrollY, this.flag.recommendationTitle1, this.arr_factor, 200, whyChooseImage)
      this.flag.recommendationTitle2 = this.base.check_start_animation(this.scrollY, this.flag.recommendationTitle2, this.arr_factor, 200, whyChooseImage)

      whyChooseImage += window.$('#recommendation').innerHeight() - 600
      this.flag.whyChooseTitle1 = this.base.check_start_animation(this.scrollY, this.flag.whyChooseTitle1, this.arr_factor, 1100, whyChooseImage)
      this.flag.whyChooseTitle2 = this.base.check_start_animation(this.scrollY, this.flag.whyChooseTitle2, this.arr_factor, 1100, whyChooseImage)
      this.flag.whyChooseUs1 = this.base.check_start_animation(this.scrollY, this.flag.whyChooseUs1, this.arr_factor, 1150, whyChooseImage)
      this.flag.whyChooseUs2 = this.base.check_start_animation(this.scrollY, this.flag.whyChooseUs2, this.arr_factor, 1200, whyChooseImage)
      this.flag.whyChooseUs3 = this.base.check_start_animation(this.scrollY, this.flag.whyChooseUs3, this.arr_factor, 1250, whyChooseImage)
      this.flag.testimonyTitle1 = this.base.check_start_animation(this.scrollY, this.flag.testimonyTitle1, this.arr_factor, 1100, whyChooseImage)
      this.flag.testimonyTitle2 = this.base.check_start_animation(this.scrollY, this.flag.testimonyTitle2, this.arr_factor, 1100, whyChooseImage)
      this.flag.articleTitle1 = this.base.check_start_animation(this.scrollY, this.flag.articleTitle1, this.arr_factor, 1500, whyChooseImage)
      this.flag.articleTitle2 = this.base.check_start_animation(this.scrollY, this.flag.articleTitle2, this.arr_factor, 1500, whyChooseImage)
    },
    onChangeRecommendationArr(arr){
      this.arr_recommendation = arr
    },
    search(){
      this.flag = !this.flag
    },
    onLocationChanged(val){
      console.log(val);
    },
    onLocationSelect({id, text}){
      console.log({id, text})
    },
    onBrandChanged(val){
      console.log(val);
    },
    onBrandSelect({id, text}){
      console.log({id, text})
    },
    onModelChanged(val){
      console.log(val);
    },
    onModelSelect({id, text}){
      console.log({id, text})
    },
  }
}
</script>

<style lang="scss">
.vertical{
  background-color: $gray2;
  width: 1px;
  height: 100%;
}
.slick-prev:before, .slick-next:before {
  background-color: $black !important;
}
.slick-dots {
  bottom: -5rem;
}
.slick-dots button:before {
  color: $gray8 !important; /* color of dots */
  font-size: .8rem !important;
  opacity: 1 !important;
}
.slick-dots .slick-active button:before {
  color: $primary !important;
  font-size: .8rem !important;
  opacity: 1 !important;
}
</style>
