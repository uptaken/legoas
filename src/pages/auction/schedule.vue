<template>
  <div class="">
    <div class="position-relative d-flex flex-column align-items-center px-3 px-lg-5">
      <img src="@/assets/auction_schedule_banner.png" width="100%"/>
    </div>

    <div class="p-5 p-lg-5 m-0 m-lg-5">
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="d-flex align-items-center">
            <p class=" mb-0">{{ $t("filter") }}</p>

            <div class="form-group ml-3 mb-0" style="width: 10rem">
              <Select2 v-model="sort" 
                :options="arr_sort" 
                @change="onSortChanged($event)" 
                @select="onSortSelect($event)" />
            </div>

            <div class="form-group ml-3 mb-0" style="width: 10rem">
              <Select2 v-model="model" 
                :options="arr_model" 
                @change="onModelChanged($event)" 
                @select="onModelSelect($event)" />
            </div>

            <button class="btn btn-outline-primary ml-3">{{ $t("reset_filter") }}</button>
          </div>
        </div>

        <div class="col-12 col-lg-6 mt-3 mt-lg-0">
          <div class="d-lg-flex justify-content-end align-items-center">
            <p class="m-0">{{ start_data }}-{{ end_data }} {{ $t('of') }} {{ total_data }}</p>
          </div>
        </div>
      </div>

      <div class="mt-3 d-flex justify-content-center">
        <div class="row">
          <div v-for="(car, index) in arr_car" :key="index" class="col-12 col-lg-4 mb-3">
            <a href="#">
              <CarItem :data="car" :index="index" :total_data="arr_car.length"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Base from '@/utils/base';

import Audi from '@/assets/Audi.png';

import CarItem from '@/pages/auction/component/car_item.vue'

export default {
  components: {
    'CarItem': CarItem,
  },
  data(){
    return{
      base: null,
      start_data: 1,
      end_data: 10,
      total_data: 2000,
      model: {},
      sort: {},
      arr_sort: [
        {
          id: "1",
          text: this.$t("newest"),
        },
        {
          id: "2",
          text: this.$t("oldest"),
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
  methods: {
    
  }
}
</script>

<style lang="scss">

</style>
