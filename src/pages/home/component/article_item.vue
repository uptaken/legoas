<template>
  <div class="card d-inline-block text-left h-100 article-card recommendation-card" @click="readMore()" style="cursor: pointer;">
    <div class="card-body p-0 w-100 h-100 d-flex flex-column justify-content-between">
      <div class="w-100">
        <div class="px-1 pt-1 text-center">
          <vue-skeleton-loader
            width="100%"
            height="100%"
            animation="fade"
            v-show="!is_image_loaded"/>
          <div class="container-image">
            <img :src="data.image" class="article-image" @load="onImageLoad()" v-show="is_image_loaded" style="width: 100%;"/>
          </div>
        </div>
        <div class="mt-3 px-3 w-100">
          <div class="d-flex align-items-center" v-if="data.date !== '' && data.date != null">
            <img src="@/assets/clock_icon.png" style="width: 1.1rem;"/>
            <p class="ml-2 mb-0 recommendation-info">{{ data.date.format('DD MMMM YYYY') }}</p>
          </div>

          <p class="recommendation-title mb-0 mt-1">{{ data.title }}</p>
          <p class="recommendation-info content-section m-0" v-html="data.description"></p>
        </div>
      </div>

      <div style="bottom: 0;" class="position-relative mt-2">
        <div class="mx-3 mb-3">
          <a href="#"  style="font-size: .7rem;">{{ $t("view_more") }}</a>
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
    readMore(){
      window.localStorage.setItem('article', JSON.stringify(this.data))
      window.location.href = "/article/detail?id=" + this.data.id
    },
  }
}
</script>

<style lang="scss">
// @media only screen and (max-width: 720px) {
//   .article-image{
//     height: 10rem;
//   }
// }
// @media only screen and (min-width: 720px) {
//   .article-image{
//     height: 10rem;
//   }
// }
.article-card{
  border-radius: 1rem;
  border-color: $gray2;
}
</style>
