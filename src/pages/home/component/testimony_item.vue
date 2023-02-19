<template>
  <div class="card text-left card-testimony"
    :class="{'ml-3': index != null && index > 0}"
    style="margin-top: 2rem;">
    <div class="card-body p-0 w-100 d-flex align-items-stretch">
      <div class="position-relative">
        <img :src="data.image" class="" style="width: 10rem"/>
        <img src="@/assets/quote.png" class="position-absolute" style="right: -2rem; top: -2rem"/>
      </div>
      <div class="d-flex flex-column justify-content-between" style="margin-left: 2rem;">
        <div>
          <p class="testimony-title">{{ data.testimony }}</p>
          <p class="testimony-info">{{ data.testimony_description }}</p>
        </div>

        <div>
          <p class="testimony-user-title">{{ data.testimony_user }}</p>
          <p class="testimony-user-info">{{ data.testimony_user_description }}</p>
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
