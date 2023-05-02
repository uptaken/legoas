<template>
  <div class="card w-100" style="border: none;">
    <div class="card-body p-0">
      <div class="row">
        <div class="col-12 col-md-4">
          <vue-skeleton-loader
            width="100%"
            height="10rem"
            animation="fade"
            v-show="!is_image_loaded"/>
          <div class="container-image">
            <img :src="data.image" class="" @load="onImageLoad()" v-show="is_image_loaded" style="" :style="{'objectFit': data.no_image ? 'cover' : 'cover'}"/>
          </div>
        </div>
        <div class="col-12 col-md-8 mt-3 mt-md-0">
          <p class="car-title">{{ data.title }}</p>

          <div>
            <div class="d-flex align-items-center">
              <img src="@/assets/schedule_calendar.png" style="width: 1.1rem;"/>
              <p class="ml-3 mb-0 ">{{ $t('auction_date') + " " + data.date.format('DD MMMM YYYY') }}</p>
            </div>

            <div class="d-flex align-items-center mt-1">
              <img src="@/assets/schedule_home.png" style="width: 1.1rem;"/>
              <p class="ml-3 mb-0 ">{{ $t('open_house') + " " + data.open_house_date.format('DD MMMM YYYY') }}</p>
            </div>

            <div class="d-flex align-items-center mt-1">
              <img src="@/assets/schedule_clock.png" style="width: 1.1rem;"/>
              <p class="ml-3 mb-0 ">{{ data.start_time.format('HH:mm') + (data.end_time != null ? " - " + data.end_time : "") }}</p>
            </div>
          </div>

          <button class="btn px-3 py-2 recommendation-type d-inline-block mt-3" @click="onClickLot()">
            <div class="d-flex align-items-center">
              <img src="@/assets/schedule_button.png"  class="mr-3" style="width: 1rem; height: 1rem;"/>
              <p class="mb-0" style="line-height: 100%; margin-top: .2rem;">{{ $t('lot_list') }}</p>
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
    onClickLot(){
      window.localStorage.setItem('auction_data', JSON.stringify(this.data))
      window.location.href = `/search?AuctionEventId=${this.data.eventId}`
    },
  }
}
</script>

<style lang="scss">
// @media only screen and (max-width: 720px) {
//   .container-image-auction{
//     height: 15rem;
//     width: 100%;
//   }
// }
// @media only screen and (min-width: 720px) {
//   .container-image-auction{
//     height: 15rem;
//     width: 100%;
//   }
// }
.container-image-auction {
  position: relative;
  width: 100%; /* The size you want */
  // padding-top: 100%;
  aspect-ratio: 4 / 3;
}
.container-image-auction img {
  position: absolute; /* Take your picture out of the flow */
  top: 0;
  bottom: 0;
  left: 0;
  right: 0; /* Make the picture taking the size of it's parent */
  width: 100%; /* This if for the object-fit */
  height: 100%; /* This if for the object-fit */
  object-fit: cover; /* Equivalent of the background-size: cover; of a background-image */
  object-position: center;
  border-radius: 1rem;
}
.container-image-auction img{
  height: 100%;
  width: 100%;
  border-radius: 1rem;

}
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
