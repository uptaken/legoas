<template>
  <div class="card d-inline-block text-left w-100 h-100 article-card" style="">
    <div class="card-body p-0 w-100 h-100 d-flex flex-column justify-content-between">
      <div>
        <div class="px-1 pt-1">
          <img :src="data.image" class="" style="width: 100%"/>
        </div>
        <div class="mt-3 mx-3">
          <div class="d-flex align-items-center">
            <img src="@/assets/clock_icon.png" style="width: 1.1rem;"/>
            <p class="ml-2 mb-0 recommendation-info">{{ data.date.format('DD MMMM YYYY') }}</p>
          </div>

          <p class="recommendation-title mb-0 mt-1">{{ data.title }}</p>
          <p class="recommendation-info  m-0">{{ data.description }}</p>
        </div>
      </div>

      <div style="bottom: 0;" class="position-relative mt-2">
        <div class="mx-3 mb-3">
          <a href="" style="font-size: .7rem;">{{ $t("view_more") }}</a>
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
.article-card{
  border-radius: 1rem;
  border-color: $gray2;
}
</style>
