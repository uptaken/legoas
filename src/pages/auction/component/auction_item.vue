<template>
  <div class="card w-100" style="border: none;">
    <div class="card-body p-0">
      <div class="row">
        <div class="col-4">
          <vue-skeleton-loader
            width="100%"
            height="10rem"
            animation="fade"
            v-show="!is_image_loaded"/>
          <img :src="data.image" class="" @load="onImageLoad()" v-show="is_image_loaded" style="width: 100%; height: 15rem; border-radius: 1rem; object-position: center;" :style="{'objectFit': data.no_image ? 'cover' : 'cover'}"/>
        </div>
        <div class="col-8">
          <p class="car-title">{{ data.title }}</p>

          <div>
            <div class="d-flex align-items-center">
              <img src="@/assets/schedule_calendar.png" style="width: 1.1rem;"/>
              <p class="ml-3 mb-0 car-info">{{ $t('auction_date') + " " + data.date.format('DD MMMM YYYY') }}</p>
            </div>

            <div class="d-flex align-items-center mt-1">
              <img src="@/assets/schedule_home.png" style="width: 1.1rem;"/>
              <p class="ml-3 mb-0 car-info">{{ $t('open_house') + " " + data.open_house_date.format('DD MMMM YYYY') }}</p>
            </div>

            <div class="d-flex align-items-center mt-1">
              <img src="@/assets/schedule_clock.png" style="width: 1.1rem;"/>
              <p class="ml-3 mb-0 car-info">{{ data.start_time.format('HH:mm') + (data.end_time != null ? " - " + data.end_time : "") }}</p>
            </div>
          </div>

          <button class="btn px-3 py-2 recommendation-type d-inline-block mt-3">
            <div class="d-flex align-items-center">
              <img src="@/assets/schedule_button.png" class="mr-3" style="width: 1rem; height: 1rem;"/>{{ $t('lot_list') }}
            </div>
          </button>
        </div>
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
      is_image_loaded: false,
    }
  },
  created(){
    this.base = new Base()
  },
  methods:{
    onImageLoad(){
      this.is_image_loaded = true
    },
  }
}
</script>

<style lang="scss">
.car-title{
  font-family: poppins-bold;
  font-size: 1rem;
  line-height: 100%;
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
a p{
  text-decoration: none;
}
</style>
