<template>
  <div class="">
    <div>
      <HomeSearch :homeBannerFlag="flag.homeBanner" 
        :homeSearchFlag="flag.homeSearch"
        @onLoading="(isLoading, index) => $set(arr_factor, index, !isLoading)"/>
    </div>

    <div class="custom-navbar-padding-right custom-navbar-padding-left" style="margin-top: 5rem; margin-bottom: 2.3rem;">
      <Recommendation :recommendationTitle1Flag="flag.recommendationTitle1" :recommendationTitle2Flag="flag.recommendationTitle2"/>
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
      arr_factor: [false, false, false, ],
      arr_car_brand: [Audi, BMW, Ford, Ford, Mazda, Mercedes, Nissan, Volkswagen,],
      scrollY: 0,
    }
  },
  watch: {
    arr_factor(val){
      this.$emit('onChangeArrFactor', val)
    },
    scrollY(val){
      // console.log(this.base.responsive_scroll_threshold(500))
      this.flag.homeBanner = this.flag.homeBanner || (!this.flag.homeBanner && val >= this.base.responsive_scroll_threshold(0))
      this.flag.homeSearch = this.flag.homeSearch || (!this.flag.homeSearch && val >= this.base.responsive_scroll_threshold(0))
      this.flag.recommendationTitle1 = this.flag.recommendationTitle1 || (!this.flag.recommendationTitle1 && val >= this.base.responsive_scroll_threshold(200))
      this.flag.recommendationTitle2 = this.flag.recommendationTitle2 || (!this.flag.recommendationTitle2 && val >= this.base.responsive_scroll_threshold(200))
      var whyChooseImage = 900
      this.flag.whyChooseTitle1 = this.flag.whyChooseTitle1 || (!this.flag.whyChooseTitle1 && val >= this.base.responsive_scroll_threshold(1100, whyChooseImage))
      this.flag.whyChooseTitle2 = this.flag.whyChooseTitle2 || (!this.flag.whyChooseTitle2 && val >= this.base.responsive_scroll_threshold(1100, whyChooseImage))
      this.flag.whyChooseUs1 = this.flag.whyChooseUs1 || (!this.flag.whyChooseUs1 && val >= this.base.responsive_scroll_threshold(1150, whyChooseImage))
      this.flag.whyChooseUs2 = this.flag.whyChooseUs2 || (!this.flag.whyChooseUs2 && val >= this.base.responsive_scroll_threshold(1200, whyChooseImage))
      this.flag.whyChooseUs3 = this.flag.whyChooseUs3 || (!this.flag.whyChooseUs3 && val >= this.base.responsive_scroll_threshold(1250, whyChooseImage))
      this.flag.testimonyTitle1 = this.flag.testimonyTitle1 || (!this.flag.testimonyTitle1 && val >= this.base.responsive_scroll_threshold(2000, whyChooseImage))
      this.flag.testimonyTitle2 = this.flag.testimonyTitle2 || (!this.flag.testimonyTitle2 && val >= this.base.responsive_scroll_threshold(2000, whyChooseImage))
      this.flag.articleTitle1 = this.flag.articleTitle1 || (!this.flag.articleTitle1 && val >= this.base.responsive_scroll_threshold(2400, whyChooseImage))
      this.flag.articleTitle2 = this.flag.articleTitle2 || (!this.flag.articleTitle2 && val >= this.base.responsive_scroll_threshold(2400, whyChooseImage))
    },
  },
  created(){
    this.base = new Base()
    window.addEventListener('scroll', this.handleScroll)
    this.scrollY = 1
  },
  methods: {
    handleScroll(){
      
      this.scrollY = window.scrollY
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
