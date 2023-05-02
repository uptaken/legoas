<template>
  <div class="card text-left card-testimony "
    :class="{'ml-3': index != null && index > 0}"
    style="">
    <div class="card-body p-0 w-100 d-flex align-items-stretch" style="height: 8.5rem;">
      <div class="position-relative h-100">
        <vue-skeleton-loader
          width="100%"
          height="100%"
          animation="fade"
          v-show="!is_image_loaded"/>
        <img :src="data.image" @load="onImageLoad()" v-show="is_image_loaded" class="testimony-item-image h-100"/>
        <img src="@/assets/quote.png" class="testimony-quote-image position-absolute" style=""/>
      </div>
      <div class="d-flex flex-column justify-content-between h-100 mr-3" style="margin-left: 2rem;">
        <div class="">
          <p class="testimony-title" v-html="data.testimony"></p>
          <p class="testimony-info" style="max-height: 2.1rem; overflow: hidden; max-width: 14.5rem;" v-html="data.testimony_description"></p>
        </div>

        <div class="">
          <p class="testimony-user-title" v-html="data.testimony_user"></p>
          <p class="testimony-user-info" v-html="data.testimony_user_description"></p>
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
@media only screen and (max-width: 720px) {
  .testimony-item-image{
    width: 12rem;
  }
  .card-testimony{
    margin-top: 2rem; 
    padding: 0 1rem;
  }
  .testimony-quote-image{
    right: -1rem; 
    top: -1rem;
    width: 3rem;
    height: 3rem;
  }
}
@media only screen and (min-width: 720px) and (max-width: 1517px) {
  .testimony-item-image{
    width: 12rem;
  }
  .card-testimony{
    margin-top: 2rem; 
    padding: 0;
  }
  .testimony-quote-image{
    right: -1.5rem; 
    top: -1.5rem;
    width: 3rem;
    height: 3rem;
  }
}
@media only screen and (min-width: 1517px) {
  .testimony-item-image{
    width: 12rem;
  }
  .card-testimony{
    margin-top: 2rem; 
    padding: 0;
  }
  .testimony-quote-image{
    right: -1.5rem; 
    top: -1.5rem;
    width: 3rem;
    height: 3rem;
  }
}

.testimony-title{
  font-size: 1rem;
  margin-bottom: 0;
  font-family: poppins-bold;
}
.testimony-info{
  font-size: .7rem;
  color: $gray6;
  margin-bottom: 0;
}
.testimony-user-title{
  font-size: 1rem;
  margin-bottom: 0;
  color: $primary;
  font-family: poppins-bold;
}
.testimony-user-info{
  font-size: .7rem;
  color: $gray6;
  margin-bottom: 0;
}
.card-testimony{
  border: none;
}
</style>
