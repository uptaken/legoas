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
            <ScheduleMonth :month="month" :week_num="week_num" :calendarIsLoading="calendarIsLoading" @previous_action="schedule_previous_action" @next_action="schedule_next_action" :arr_group_auction="arr_calendar"/>
          </div>

          <div class="row schedule-filter-card">
            <div class="col-6 d-flex align-items-center">
              <p class="mb-0 content-content">Terdapat {{ total_data.toLocaleString(base.locale_string) }} Jadwal Lelang</p>
            </div>
            <div class="col-6 d-flex align-items-center justify-content-end">
              <p class="mb-0 content-content">Sort</p>
              <Select2 v-model="sort"
                class="ml-3" 
                :options="arr_sort" 
                :settings="{width: '10rem',}"
                @select="onSortSelect($event)" />
            </div>
          </div>
          <div style="margin-top: 5rem">
            <div v-if="!isLoading">
              <div v-if="arr_group_auction.length > 0">
                <div v-for="(group_auction, index) in arr_group_auction" :key="'group' + index" style="margin-bottom: 6.25rem;">
                  <AuctionGroupItem :data="group_auction"/>
                </div>
              </div>
              <div v-else class="d-flex justify-content-center align-items-center" style="height: 20rem; margin-bottom: 20rem;">
                <p>{{ $t('no_data_found') }}</p>
              </div>
            </div>
            <div v-else class="d-flex justify-content-center align-items-center" style="height: 20rem; margin-bottom: 20rem;">
              <img src="@/assets/image_logo.png"/>
            </div>
          </div>

          <div class="custom-pagination-container" v-show="arr_group_auction.length > 0">
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

import NoImage from '@/assets/no_image.png';

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
      total_page: 1,
      current_page: 1,
      start_data: 1,
      end_data: 10,
      total_data: 0,
      model: {},
      sort: 'newest',
      isLoading: true,
      calendarIsLoading: true,
      num_data: 10,
      arr_sort: [
        {
          id: "newest",
          text: this.$t("newest"),
        },
        {
          id: "oldest",
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
      arr_calendar: [],
      arr_group_auction: [
        // {
        //   date: moment(),
        //   arr: [
        //     {
        //       id: "1",
        //       image: ScheduleImage,
        //       title: "Lelang MOBIL Kota Administrasi Jakarta Barat",
        //       date: moment(),
        //       open_house_date: moment(),
        //       start_time: moment(),
        //       end_time: "Selesai",
        //     },
        //     {
        //       id: "1",
        //       image: ScheduleImage,
        //       title: "Lelang MOBIL Kota Administrasi Jakarta Barat",
        //       date: moment(),
        //       open_house_date: moment(),
        //       start_time: moment(),
        //       end_time: "Selesai",
        //     },
        //   ]
        // },
        // {
        //   date: moment().add(1, 'days'),
        //   arr: [
        //     {
        //       id: "1",
        //       image: ScheduleImage,
        //       title: "Lelang MOBIL Kota Administrasi Jakarta Barat",
        //       date: moment(),
        //       open_house_date: moment(),
        //       start_time: moment(),
        //       end_time: "Selesai",
        //     },
        //     {
        //       id: "1",
        //       image: ScheduleImage,
        //       title: "Lelang MOBIL Kota Administrasi Jakarta Barat",
        //       date: moment(),
        //       open_house_date: moment(),
        //       start_time: moment(),
        //       end_time: "Selesai",
        //     },
        //   ]
        // },
      ],
    }
  },
  watch: {
    arr_factor(val){
      this.$emit('onChangeArrFactor', val)
    },
    current_page(){
      var context = this
      window.scrollTo(0, 600)
      setTimeout(() => {
        context.get_schedule()
      }, 100)
    },
    sort(){
      this.get_schedule()
    },
  },
  created(){
    this.base = new Base()
    // this.week_num = Math.floor(moment().format('D') / 7)
    this.manage_week_num()

    // this.arr_factor = [true,]
    this.get_schedule()
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
    onSortSelect(val){
      this.sort = val.id
    },
    schedule_previous_action(){
      this.week_num = this.week_num - 1
      this.month.subtract(7, 'days')
      this.manage_week_num()
    },
    schedule_next_action(){
      this.week_num = this.week_num + 1
      this.month.add(7, 'days')
      this.manage_week_num()
    },
    async get_schedule(){
      
      this.isLoading = true
      this.arr_group_auction = []
      var data = {
        param: {
          length: 10,
          sortby: 'eventdate',
          sortdir: this.sort === "newest" ? "desc" : "asc",
          start: this.current_page,
          searchStartEventDate: "",
          searchEndEventDate: "",
        }
      }
      var response = await this.base.request(this.base.url_api2 + `/SearchEventActive`, "post", data)
      this.$set(this.arr_factor, 0, true)
      this.isLoading = false
      

      if(response != null){
        var arr_group_auction = []
        for(let auction of response.data){
          var index = -1
          var auction_date = moment(auction.eventDate)
          for(let x in arr_group_auction){
            if(arr_group_auction[x].date.format('YYYY-MM-DD') === auction_date.format('YYYY-MM-DD')){
              index = x
              break
            }
          }

          auction.title = auction.eventCode
          auction.image = auction.default_img != null ? auction.default_img : NoImage
          auction.no_image = auction.default_img == null
          auction.date = auction_date
          auction.open_house_date = moment(auction.openHouseDate)
          auction.start_time = moment(auction.eventStarttime, 'HH:mm')

          if(index > -1)
            arr_group_auction[index].arr.push(auction)
          else
            arr_group_auction.push({
              date: auction_date,
              arr: [auction,],
            })
        }
        this.arr_group_auction = arr_group_auction
        this.total_page = response.pageTotal > 0 ? response.pageTotal : 1
        this.total_data = response.recordsFiltered
      }
      else
        this.base.show_error(this.$t('server_error'))
    },
    async get_calendar(){
      this.arr_calendar = []
      this.calendarIsLoading = true
      var data = {
        param: {
          searchStartEventDate: this.month.clone().format('DD/MM/YYYY'),
          searchEndEventDate: this.month.clone().add(1, 'week').format('DD/MM/YYYY'),
        }
      }
      var response = await this.base.request(this.base.url_api2 + `/EventWithUnitType`, "post", data)
      this.calendarIsLoading = false

      if(response != null){
        if(response.status_code === "00"){
          if(response.data != null){
            for(let group_auction of response.data){
              group_auction.date = moment(group_auction.tgllelang, 'DD/MM/YYYY')
              var arr = []
              for(let category of group_auction.category){
                arr.push({
                  title: category.nama,
                  id: category.kode,
                })
              }
              group_auction.arr = arr
            }
            this.arr_calendar = response.data
          }
        }
        else
          this.base.show_error(response.status_message)
      }
      else
        this.base.show_error(this.$t('server_error'))
    },
    manage_week_num(){
      // var start_date = this.month.clone().startOf('week')
      // console.log(this.week_num)
      // var end_date = this.month.clone().endOf('week')
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
        counter_date = this.month.clone().startOf('week')
        if(counter_date.isSame(this.month.clone().endOf('week'), 'month'))
          this.week_num = 1
      }
      else if(this.week_num == -1){
        counter_date = this.month.clone().startOf('week')
        total_week = 0
        
        if(counter_date.isSame(counter_date.clone().add(7, 'd'), 'month')){
          var temp = this.month.clone().startOf('month').startOf('week')
          if(!temp.isSame(this.month.clone(), 'month'))
            temp.add(7, 'days')
          console.log(temp.format('DD/MM/YYYY'))
          while(temp.isBefore(this.month.clone().endOf('month'))){
            if(temp.isSame(this.month.clone(), 'month'))
              total_week++
            if(temp <= this.month && temp.clone().add(7, 'days') >= this.month)
              break
            temp.add(7, 'days')
          }
        }
        else{
          counter_date.startOf('month')
          var last_month = counter_date.clone().endOf('month')
          counter_date.startOf('week')
          if(!last_month.isSame(counter_date, 'month'))
            counter_date.add(7, 'days')
            
          while(counter_date.isBefore(last_month.clone().endOf('month'))){
            if(counter_date.isSame(last_month.clone(), 'month'))
              total_week++
            counter_date.add(7, 'days')
          }
        }
        this.week_num = total_week
        
      }
      this.get_calendar()
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
  margin-bottom: 15.5rem;
}
.schedule-filter-card{
  margin-top: 9rem;
}
</style>
