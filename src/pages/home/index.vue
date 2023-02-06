<template>
  <div class="">
    <div class="position-relative d-flex flex-column align-items-center px-5">
      <img src="@/assets/home_banner.png" width="100%"/>
      <div class="" style="width: 90%; margin-top: -4rem">
        <div class="card ">
          <div class="card-body p-3">
            <p>{{ $t("search_auction") }}</p>
            <div class="row">
              <div class="col-3">
                <div class="form-group">
                  <label>{{ $t("location") }}</label>
                  <Select2 v-model="location" 
                    :options="arr_location" 
                    @change="onLocationChanged($event)" 
                    @select="onLocationSelect($event)" />
                </div>
              </div>

              <div class="col-3 d-flex">
                <div class="vertical"></div>
                <div class="form-group ml-3 flex-fill">
                  <label>{{ $t("brand") }}</label>
                  <Select2 v-model="brand" 
                    :options="arr_brand" 
                    @change="onBrandChanged($event)" 
                    @select="onBrandSelect($event)" />
                </div>
              </div>

              <div class="col-3 d-flex">
                <div class="vertical"></div>
                <div class="form-group ml-3 flex-fill">
                  <label>{{ $t("model") }}</label>
                  <Select2 v-model="model" 
                    :options="arr_model" 
                    @change="onModelChanged($event)" 
                    @select="onModelSelect($event)" />
                </div>
              </div>

              <div class="col-3">
                <button class="btn btn-lg btn-dark w-100">{{ $t("search") }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="p-5">
      <div v-for="(brand, index) in arr_car_brand" :key="index" class="d-inline-block text-center" :style="{width: (100 / arr_car_brand.length) + '%'}">
        <img :src="brand" />
      </div>
    </div>

    <div class="p-5">
      <p class="m-0 why-title text-center">{{ $t("recommendation") }}</p>
      <p class="m-0 why-title2 text-center">{{ $t("recommendation_list") }}</p>

      <div class="mt-3 d-flex justify-content-center">
        <div v-for="(car, index) in arr_car" :key="index" class="mr-3" style="width: 200rem;">
          <CarItem :data="car" :index="index" :total_data="arr_car.length"/>
        </div>
      </div>
    </div>

    <WhyChooseUs/>

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

import CarItem from '@/pages/auction/component/car_item.vue'
import TestimonyItem from '@/pages/home/component/testimony_item.vue'
import WhyChooseUs from '@/pages/home/component/why_choose_us.vue'

export default {
  components: {
    'CarItem': CarItem,
    'TestimonyItem': TestimonyItem,
    'WhyChooseUs': WhyChooseUs,
  },
  data(){
    return{
      base: null,
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
      location: {},
      brand: {},
      model: {},
      arr_location: [
        {
          id: "1",
          text: "Jakarta",
        },
        {
          id: "2",
          text: "Surabaya",
        },
      ],
      arr_brand: [
        {
          id: "1",
          text: "Volkswagen",
        },
        {
          id: "2",
          text: "Nissan",
        },
        {
          id: "3",
          text: "Mazda",
        },
      ],
      arr_model: [
        {
          id: "1",
          text: "Type S",
        },
        {
          id: "2",
          text: "Type A",
        },
      ],
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
      arr_car_brand: [Audi, BMW, Ford, Ford, Mazda, Mercedes, Nissan, Volkswagen,]
    }
  },
  mounted(){
    this.base = new Base()
  },
  methods: {
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
