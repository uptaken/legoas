<template>
  <div class="card d-inline-block text-left w-100">
    <div class="card-body p-0 w-100">
      <div class="mt-3 mx-3">
        <img :src="data.image" class="" style="width: 100%"/>
      </div>
      <div class="mt-3 mx-3">
        <p class="car-title">{{ data.title }}</p>
        <div class="row">
          <div class="col-6">
            <div class="d-flex align-items-center">
              <img src="@/assets/road.png" style="width: 1.1rem;"/>
              <p class="ml-3 mb-0 car-info">{{ data.odometer }}</p>
            </div>

            <div class="d-flex align-items-center mt-1">
              <img src="@/assets/time.png" style="width: 1.1rem;"/>
              <p class="ml-3 mb-0 car-info">{{ data.year }}</p>
            </div>
          </div>
          <div class="col-6">
            <div class="d-flex align-items-center">
              <img src="@/assets/transmission.png" style="width: 1.1rem;"/>
              <p class="ml-3 mb-0 car-info">{{ data.transmission }}</p>
            </div>

            <div class="d-flex align-items-center mt-1">
              <img src="@/assets/map_icon.png" style="width: 1.1rem;"/>
              <p class="ml-3 mb-0 car-info">{{ data.place }}</p>
            </div>
          </div>
        </div>

        
      </div>

      <div class="horizontal my-3"></div>

      <div class="mx-3 my-2">
        <p class="m-0 base-price">{{ $t('base_price') }}</p>
        <p class="m-0 car-price">Rp. {{ data.price.toLocaleString(base.locale_string) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Base from '@/utils/base';

export default {
  props: ['data', 'index', 'total_data',],
  data(){
    return{
      base: null,
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
.car-title{
  font-family: poppins-bold;
  font-size: 1rem;
}
.car-info{
  font-size: .7rem;
  color: $gray6;
}
.car-price{
  color: $primary;
  font-family: poppins-bold;
  font-size: .9rem;
}
.base-price{
  color: $gray7;
  font-size: .6rem;
}
.horizontal{
  background-color: $gray2;
}
</style>
