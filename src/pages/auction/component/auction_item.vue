<template>
  <div class="card w-100" style="border: none;">
    <div class="card-body">
      <div class="row">
        <div class="col-4">
          <img :src="data.image" class="" style="width: 100%"/>
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
              <p class="ml-3 mb-0 car-info">{{ data.start_time.format('HH:MM') + " - " + data.end_time }}</p>
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
a p{
  text-decoration: none;
}
</style>
