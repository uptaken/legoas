<template>
  <div class="p-5">
    <Transition name="recommendation-title1">
      <p class="m-0 why-title text-center" v-show="recommendationTitle1Flag">{{ $t("recommendation") }}</p>
    </Transition>
    <Transition name="recommendation-title2">
      <p class="m-0 why-title2 text-center" v-show="recommendationTitle2Flag">{{ $t("recommendation_list") }}</p>
    </Transition>

    <div class="mt-3 d-flex justify-content-center">
      <div v-for="(car, index) in arr_car" :key="index" style="width: 200rem;">
        <CarItem :data="car" :index="index" :total_data="arr_car.length"/>
      </div>
    </div>
  </div>
</template>

<script>
import Base from '@/utils/base';

import CarItem from '@/pages/auction/component/car_item.vue'

import Audi from '@/assets/Audi.png';

export default {
  components: {
    'CarItem': CarItem,
  },
  props: ['recommendationTitle1Flag', 'recommendationTitle2Flag', ],
  data(){
    return{
      base: null,
      arr_car: [
        {
          id: "1",
          image: Audi,
          title: "WULING CORTEZ 1.5 S T LUX",
          odometer: "21,921 km",
          year: "2019",
          transmission: "Manual",
          place: "Jakarta Utara",
          price: 147000000,
        },
        {
          id: "1",
          image: Audi,
          title: "WULING CORTEZ 1.5 S T LUX",
          odometer: "21,921 km",
          year: "2019",
          transmission: "Manual",
          place: "Jakarta Utara",
          price: 147000000,
        },
        {
          id: "1",
          image: Audi,
          title: "WULING CORTEZ 1.5 S T LUX",
          odometer: "21,921 km",
          year: "2019",
          transmission: "Manual",
          place: "Jakarta Utara",
          price: 147000000,
        },
      ],
    }
  },
  created(){
    this.base = new Base()
  },
  methods:{
  }
}
</script>

<style lang="scss">
.why-title{
  font-family: poppins-light;
  color: $gray5;
}
.why-title2{
  font-family: poppins-medium;
  font-size: 2rem;
  line-height: 110%;
}

.recommendation-title1-enter-active, .recommendation-title1-leave-active{
  transition: all 2s;
}
.recommendation-title1-leave-to, .recommendation-title1-enter {
  margin-left: -10rem !important;
  opacity: 0;
}
.recommendation-title2-enter-active, .recommendation-title2-leave-active{
  transition: all 2s;
}
.recommendation-title2-leave-to, .recommendation-title2-enter {
  margin-right: -10rem !important;
  opacity: 0;
}
</style>
