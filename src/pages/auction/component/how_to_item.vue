<template>
  <div class="">
    <div class="d-flex align-items-center">
      <img src="@/assets/how_to_icon.png" style="width: 6rem;"/>
      <p class="mb-0 ml-2 section-title" v-html="title"></p>
    </div>

    <div class="row mx-3">
      <div class="col-12 col-lg-6">
        <div class="d-flex" v-for="x in Math.ceil(arr.length / 2)" :class="{'mt-5': x > 0}" :key="'participantOdd' + x">
          <p class="mb-0 content-number">{{ ('0' + (x)).slice(-2) }}</p>
          <div class="ml-3">
            <p class="mb-0 content-title">{{ arr[x - 1].title }}</p>
            <p class="mb-0 content-content">{{ arr[x - 1].content }}</p>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-6">
        <div class="d-flex" v-for="x in Math.floor(arr.length / 2)" :class="{'mt-5': x > 0}" :key="'participantEven' + x">
          <p class="mb-0 content-number">{{ ('0' + (Math.ceil(arr.length / 2) + x)).slice(-2) }}</p>
          <div class="ml-2">
            <p class="mb-0 content-title">{{ arr[Math.ceil(arr.length / 2) + x - 1].title }}</p>
            <p class="mb-0 content-content">{{ arr[Math.ceil(arr.length / 2) + x - 1].content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Base from '@/utils/base';

export default {
  props: ["arr", "title",],
  components: {
  },
  data(){
    return{
      base: null,
    }
  },
  created(){
    this.base = new Base()
  },
  methods: {
    
  }
}
</script>

<style lang="scss">
.content-number{
  font-size: 1.8rem;
  color: $primary;
  font-family: poppins-bold;
}
.content-title{
  font-size: 1.2rem;
  font-family: poppins-bold;
}
.content-content{
  color: $gray6;
}
</style>
