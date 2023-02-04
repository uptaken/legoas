<template>
  <div class="card text-left card-testimony"
    :class="{'ml-3': index != null && index > 0}" >
    <div class="card-body p-0 w-100">
      <div class="mt-3 mx-3">
        <img :src="data.image" class="" style="width: 100%"/>
      </div>
      <div class="mt-3 mx-3">
        <p class="testimony-title">{{ data.testimony }}</p>
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
.testimony-title{
  font-size: 1rem;
  color: $white;
}
.card-testimony{
  background-color: $primary;
}
</style>
