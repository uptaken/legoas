<template>
  <div class="">
    <p class="car-title">{{ data.date.format('DD.MM.YYYY') + " - " + data.date.format('dddd') }}</p>
    <div class="horizontal my-3"></div>
    <div>
      <div v-for="(auction, index) in data.arr" :key="'auction_group' + index" class="mb-3">
        <!-- <a href="#"> -->
          <AuctionItem :data="auction" />
        <!-- </a> -->
      </div>
    </div>
  </div>
</template>

<script>
import Base from '@/utils/base';

import AuctionItem from '@/pages/auction/component/auction_item.vue'

export default {
  props: ['data', ],
  components: {
    'AuctionItem': AuctionItem,
  },
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
.horizontal{
  background-color: $gray2;
}
</style>
