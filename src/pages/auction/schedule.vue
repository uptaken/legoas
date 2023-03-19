<template>
  <div class="">
    <div class="custom-navbar-padding-right custom-navbar-padding-left text-center" style="margin-top: 5rem;">
      <div class="content-container text-left">
        <p class="m-0 general-title">{{ $t('auction_schedule') }}</p>
      </div>
    </div>

    <div class="custom-navbar-padding-right custom-navbar-padding-left text-center">
      <div class="content-container text-left">
        <div class="mt-5">
          <div>
            <ScheduleMonth :month="month" :week_num="week_num" @previous_action="schedule_previous_action" @next_action="schedule_next_action" :arr_group_auction="arr_group_auction"/>
          </div>

          <div class="row schedule-filter-card">
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
            <div v-for="(group_auction, index) in arr_group_auction" :key="'group' + index" style="margin-bottom: 6.25rem;">
              <AuctionGroupItem :data="group_auction"/>
            </div>
          </div>

          <div class="custom-pagination-container">
            <CustomPagination :total_page="total_page" :current_page="current_page" @next_action="next_action" @previous_action="previous_action" @select_page="select_page"/>
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
import CustomPagination from '@/layout/custom_pagination.vue'
import ScheduleMonth from '@/pages/auction/component/schedule_month.vue'

export default {
  components: {
    'AuctionGroupItem': AuctionGroupItem,
    'CustomPagination': CustomPagination,
    'ScheduleMonth': ScheduleMonth,
  },
  data(){
    return{
      base: null,
      arr_factor: [false, ],
      month: moment(),
      week_num: -1,
      total_page: 10,
      current_page: 1,
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
  watch: {
    arr_factor(val){
      this.$emit('onChangeArrFactor', val)
    },
  },
  created(){
    this.base = new Base()
    // this.week_num = Math.floor(moment().format('D') / 7)
    this.manage_week_num()

    this.arr_factor = [true,]
  },
  methods: {
    next_action(){
      this.current_page = this.current_page + 1
    },
    previous_action(){
      this.current_page = this.current_page - 1
    },
    select_page(page){
      this.current_page = page
    },
    schedule_previous_action(){
      this.week_num = this.week_num - 1
      this.month = this.month.clone().subtract(1, 'week')
      this.manage_week_num()
    },
    schedule_next_action(){
      this.week_num = this.week_num + 1
      this.manage_week_num()
      this.month = this.month.clone().add(1, 'week')
    },
    async get_schedule(){
      var data = {
        param: {
          searchLocation: this.location_id,
          searchCategory: this.product_type_id,
          searchKey: this.search,
          length: 9,
          sort: this.sort,
          start: this.current_page,
          searchStartEventDate: "",
          searchEndEventDate: "",
        }
      }
      var response = await this.base.request(this.base.url_api2 + `/SearchUnit`, "post", data)
      this.$set(this.arr_factor, 2, true)

      if(response != null){
        if(response.status_code === "00"){
          for(let product of response.data){
            product.id = product.idlot
            product.image = product.imageuri
            product.place = product.wrhcity
            product.title = product.unitname
            product.type = product.categoryname
            product.price = product.baseprice
            product.arr_image = [
              product.imageuri,
            ]
            product.seller = {
              name: "",
            }
            product.notes = null
            product.arr_info = []
            for(let x in product.specunit){
              product.arr_info.push({
                name: x,
                value: product.specunit[x],
              })
            }
          }
          this.arr_product = response.data
        }
        else
          this.base.show_error(response.status_message)
      }
      else
        this.base.show_error(this.$t('server_error'))
    },
    manage_week_num(){
      // var start_date = this.month.clone().startOf('week')
      var end_date = this.month.clone().endOf('week')
      if(this.week_num == 0){
        var counter_date = this.month.clone().startOf('month').startOf('week')
        var total_week = 0
        while(counter_date.isBefore(this.month.clone().endOf('month'))){
          if(counter_date.isSame(this.month.clone(), 'month'))
            total_week++
          counter_date.add(7, 'days')
        }
        this.week_num = total_week
      }
      else if(this.week_num > 4){
        if(end_date.isAfter(this.month.clone().endOf('month'), 'day'))
          this.week_num = 1
      }
      else if(this.week_num == -1){
        counter_date = this.month.clone().startOf('month').startOf('week')
        total_week = 0
        while(counter_date.isBefore(this.month.clone().endOf('month'))){
          if(counter_date.isSame(this.month.clone(), 'month'))
            total_week++
          if(counter_date <= moment() && counter_date.clone().add(7, 'days') >= moment())
            break
          counter_date.add(7, 'days')
        }
        this.week_num = total_week
      }
    },
  }
}
</script>

<style lang="scss">
.home-search-input, .select2-container .select2-selection--single, .select2-container--open .select2-dropdown--below, .select2-container--open .select2-dropdown--above{
  background-color: $white;
  border: 1px solid $gray13;
}
.select2-search__field{
  background-color: $white;
  border: 1px solid $gray13 !important;
}
.custom-pagination-container{
  margin-top: 6rem;
  margin-bottom: 14.5rem;
}
.schedule-filter-card{
  margin-top: 9rem;
}
</style>
