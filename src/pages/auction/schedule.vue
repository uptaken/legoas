<template>
  <div class="">
    <div class="position-relative px-5 mt-5 ml-5">
      <p class="m-0 general-title">{{ $t('auction_schedule') }}</p>
    </div>

    <div class="p-5 p-lg-5">
      <div class="mt-5 px-5">
        <div class="row">
          <div class="col-6 d-flex align-items-center">
            <p class="mb-0 content-content">Terdapat 10 Jadwal Lelang</p>
          </div>
          <div class="col-6 d-flex align-items-center justify-content-end">
            <p class="mb-0 content-content">Filter</p>
            <Select2 v-model="sort"
              class="ml-3" 
              :options="arr_sort" 
              :settings="{width: '10rem',}"
              @change="onSortChanged($event)" 
              @select="onSortSelect($event)" />
          </div>
        </div>
        <div style="margin-top: 5rem">
          <div v-for="(group_auction, index) in arr_group_auction" :key="'group' + index" class="mb-5">
            <AuctionGroupItem :data="group_auction"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Base from '@/utils/base';
import moment from 'moment';

import ScheduleImage from '@/assets/schedule_image.png';

import AuctionGroupItem from '@/pages/auction/component/auction_group_item.vue'

export default {
  components: {
    'AuctionGroupItem': AuctionGroupItem,
  },
  data(){
    return{
      base: null,
      start_data: 1,
      end_data: 10,
      total_data: 2000,
      model: {},
      sort: {},
      arr_sort: [
        {
          id: "1",
          text: this.$t("newest"),
        },
        {
          id: "2",
          text: this.$t("oldest"),
        },
      ],
      arr_model: [
        {
          id: "1",
          text: "Type S",
        },
        {
          id: "2",
          text: "Type A",
        },
      ],
      arr_group_auction: [
        {
          date: moment(),
          arr: [
            {
              id: "1",
              image: ScheduleImage,
              title: "Lelang MOBIL Kota Administrasi Jakarta Barat",
              date: moment(),
              open_house_date: moment(),
              start_time: moment(),
              end_time: "Selesai",
            },
            {
              id: "1",
              image: ScheduleImage,
              title: "Lelang MOBIL Kota Administrasi Jakarta Barat",
              date: moment(),
              open_house_date: moment(),
              start_time: moment(),
              end_time: "Selesai",
            },
          ]
        },
        {
          date: moment().add(1, 'days'),
          arr: [
            {
              id: "1",
              image: ScheduleImage,
              title: "Lelang MOBIL Kota Administrasi Jakarta Barat",
              date: moment(),
              open_house_date: moment(),
              start_time: moment(),
              end_time: "Selesai",
            },
            {
              id: "1",
              image: ScheduleImage,
              title: "Lelang MOBIL Kota Administrasi Jakarta Barat",
              date: moment(),
              open_house_date: moment(),
              start_time: moment(),
              end_time: "Selesai",
            },
          ]
        },
      ],
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

</style>
