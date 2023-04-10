<template>
  <div class="card d-inline-block text-left h-100 flex-grow-1 recommendation-card" @click="$emit('onClick')" style="border-radius: .8rem; cursor: pointer;">
    <div class="card-body p-0 w-100 h-100 d-flex flex-column justify-content-between">
      <div>
        <div class="px-1 pt-1 text-center">
          <vue-skeleton-loader
            width="100%"
            height="100%"
            animation="fade"
            v-show="!is_image_loaded"/>
          <div class="container-rec-image">
            <img :src="data.image" class="" @load="onImageLoad()" v-show="is_image_loaded"/>
          </div>
        </div>
        <div class="mt-3 mx-3">
          <div class="px-3 py-2 rounded-pill recommendation-type d-inline-block">
            <div class="d-flex align-items-center justify-content-center">
              <p class="mb-0" style="line-height: 100%; font-size: 0.7rem; margin-top: .2rem;">{{ data.type }}</p>
            </div>
          </div>
          <p class="recommendation-title mb-0 mt-1">{{ data.title }}</p>
          <p class="recommendation-info  m-0">{{ data.seller.name }}</p>
          <div class="d-flex align-items-center mt-1">
            <img src="@/assets/map_icon.png" style="width: 1rem;"/>
            <p class="ml-1 mb-0 recommendation-info">{{ data.place }}</p>
          </div>
        </div>
      </div>

      <div style="bottom: 0;" class="position-relative mt-2">
        

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
  font-size: .7rem;
  line-height: .7rem;
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
.container-rec-image {
  position: relative;
  width: 100%; /* The size you want */
}
.container-rec-image:after {
  content: "";
  display: block;
  padding-bottom: 100%; /* The padding depends on the width, not on the height, so with a padding-bottom of 100% you will get a square */
}

.container-rec-image img {
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
</style>
