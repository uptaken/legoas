<template>
  <div class="card d-inline-block text-left h-100 flex-grow-1 recommendation-card" style="border-radius: .8rem;">
    <div class="card-body p-0 w-100 h-100 d-flex flex-column justify-content-between">
      <div>
        <div class="px-1 pt-1 text-center">
          <vue-skeleton-loader
            width="100%"
            height="100%"
            animation="fade"
            v-show="!is_image_loaded"/>
          <img :src="data.image" class="" @load="onImageLoad()" v-show="is_image_loaded" style="height: 10rem;"/>
        </div>
        <div class="mt-3 mx-3">
          <div class="px-3 py-2 rounded-pill recommendation-type d-inline-block">{{ data.type }}</div>
          <p class="recommendation-title mb-0 mt-1">{{ data.title }}</p>
          <p class="recommendation-info  m-0">{{ data.seller.name }}</p>
        </div>
      </div>

      <div style="bottom: 0;" class="position-relative mt-2">
        <div class="d-flex align-items-center mt-1 mx-3">
          <img src="@/assets/map_icon.png" style="width: 1rem;"/>
          <p class="ml-1 mb-0 recommendation-info">{{ data.place }}</p>
        </div>

        <div class="horizontal my-2"></div>

        <div class="mx-3 my-2">
          <p class="m-0 base-price">{{ $t('base_price') }}</p>
          <p class="m-0 recommendation-price">Rp. {{ data.price.toLocaleString(base.locale_string) }}</p>
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
@media only screen and (max-width: 960px) {
  .recommendation-card{
    width: 100%;
  }
}
@media only screen and (min-width: 960px) {
  .recommendation-card{
    width: $content-width-per-item;
    max-width: 100%;
  }
}

.recommendation-type{
  background-color: $primary;
  color: $white;
  font-size: .5rem;
  line-height: .5rem;
}
.recommendation-title{
  font-family: poppins-bold;
  font-size: 1rem;
  text-transform: uppercase;
}
.recommendation-info{
  font-size: .7rem;
  color: $gray6;
}
.recommendation-price{
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
  width: 100%;
  height: 1px;
}
</style>
