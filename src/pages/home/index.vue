<template>
  <div class="">
    <div>
      <HomeSearch :homeBannerFlag="flag.homeBanner" 
        :homeSearchFlag="flag.homeSearch"/>
    </div>

    <div class="p-5">
      <div v-for="(brand, index) in arr_car_brand" :key="index" class="d-inline-block text-center" :style="{width: (100 / arr_car_brand.length) + '%'}">
        <img :src="brand" />
      </div>
    </div>

    <div>
      <Recommendation :recommendationTitle1Flag="flag.recommendationTitle1" :recommendationTitle2Flag="flag.recommendationTitle2"/>
    </div>

    <WhyChooseUs
      :whyChooseTitle1Flag="flag.whyChooseTitle1"
      :whyChooseTitle2Flag="flag.whyChooseTitle2"
      :whyChooseUs1Flag="flag.whyChooseUs1"
      :whyChooseUs2Flag="flag.whyChooseUs2"
      :whyChooseUs3Flag="flag.whyChooseUs3"/>

    <div class="p-5">
      <p class="m-0 why-title text-center">{{ $t("testimony") }}</p>
      <p class="m-0 why-title2 text-center">{{ $t("testimony_title") }}</p>

      <div class="my-5 mx-5">
        <VueSlickCarousel v-bind="slick_setting">
          <div v-for="(testimony, index) in arr_testimony" :key="index">
            <TestimonyItem :data="testimony" :index="index" :total_data="arr_testimony.length"/>
          </div>
        </VueSlickCarousel>
      </div>
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

import TestimonyItem from '@/pages/home/component/testimony_item.vue'
import HomeSearch from '@/pages/home/component/home_search.vue'
import Recommendation from '@/pages/home/component/recommendation.vue'
import WhyChooseUs from '@/pages/home/component/why_choose_us.vue'

export default {
  components: {
    'TestimonyItem': TestimonyItem,
    'HomeSearch': HomeSearch,
    'Recommendation': Recommendation,
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
        whyChooseTitle1: false,
        whyChooseTitle2: false,
        whyChooseUs1: false,
        whyChooseUs2: false,
        whyChooseUs3: false,
      },
      slick_setting: {
        dots: true,
        arrows: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        touchThreshold: 5
      },
      arr_testimony: [
        {
          id: "1",
          image: Audi,
          testimony: "Transaksi kedua saya di LEGOAS",
        },
        {
          id: "1",
          image: Audi,
          testimony: "Transaksi kedua saya di LEGOAS",
        },
        {
          id: "1",
          image: Audi,
          testimony: "Transaksi kedua saya di LEGOAS",
        },
        {
          id: "1",
          image: Audi,
          testimony: "Transaksi kedua saya di LEGOAS",
        },
      ],
      arr_car_brand: [Audi, BMW, Ford, Ford, Mazda, Mercedes, Nissan, Volkswagen,],
      scrollY: 0,
    }
  },
  watch: {
    scrollY(val){
      console.log(val)
      this.flag.homeBanner = val >= 0
      this.flag.homeSearch = val >= 0
      this.flag.recommendationTitle1 = val >= 500
      this.flag.recommendationTitle2 = val >= 500
      this.flag.whyChooseTitle1 = val >= 1100
      this.flag.whyChooseTitle2 = val >= 1100
      this.flag.whyChooseUs1 = val >= 1200
      this.flag.whyChooseUs2 = val >= 1300
      this.flag.whyChooseUs3 = val >= 1400
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

</style>
