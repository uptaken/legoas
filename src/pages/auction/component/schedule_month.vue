<template>
  <div>
    <div class="d-flex justify-content-between">
      <div class="d-flex align-items-center">
        <p class="mb-0 month-week-title">{{ month.startOf('week').format('MMMM YYYY') }} | {{ $t('week') + ' ' + week_num }}</p>

        <div class="ml-5 d-flex">
          <div class="custom-navigation-card shadow-sm" @click="$emit('previous_action')">
            <font-awesome-icon icon="fa-solid fa-chevron-left" class="custom-navigation-arrow"/>
          </div>

          <div class="custom-navigation-card shadow-sm ml-3" @click="$emit('next_action')">
            <font-awesome-icon icon="fa-solid fa-chevron-right" class="custom-navigation-arrow"/>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5">
      <table class="table table-bordered">
        <tbody>
          <tr>
            <td :style="{width: (100 / 7) + '%'}">SUN</td>
            <td :style="{width: (100 / 7) + '%'}">MON</td>
            <td :style="{width: (100 / 7) + '%'}">TUE</td>
            <td :style="{width: (100 / 7) + '%'}">WED</td>
            <td :style="{width: (100 / 7) + '%'}">THU</td>
            <td :style="{width: (100 / 7) + '%'}">FRI</td>
            <td :style="{width: (100 / 7) + '%'}">SAT</td>
          </tr>
          <tr>
            <td v-for="(date, index) in arr_date" :key="'schedule' + index" style="height: 13rem;">
              <div class="d-flex flex-column justify-content-between h-100">
                {{ date.text }}
                <div>
                  <div v-for="(auction, index1) in date.arr_auction" :key="'auctionSchedule' + index1 + index" class="p-1 mt-2" :class="[auction.class_name]">{{ auction.title_format }}</div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Base from '@/utils/base';
import moment from 'moment';

export default {
  props: ["month", "week_num", 'arr_group_auction', ],
  components: {
  },
  data(){
    return{
      base: null,
      start_date: moment(),
      end_date: moment(),
      arr_date: [],
    }
  },
  watch: {
    month(){
      this.manage_arr_date()
    },
  },
  created(){
    this.base = new Base()
    this.manage_arr_date()
  },
  methods: {
    manage_arr_date(){
      var start_date = this.month.clone().startOf('week')
      // var end_date = this.month.endOf('week')

      var arr_date = []
      for(let x = 0; x < 7; x++){
        var arr_auction = []
        for(let group_auction of this.arr_group_auction){
          if(group_auction.date.isSame(start_date, 'day')){
            var y = 0
            for(let auction of group_auction.arr){
              var split = auction.title.split(' ')
              var index_until = 0
              for(let x in split){
                if(x < 2){
                  index_until += split[x].length
                  if(x < 1)
                    index_until++
                }
                else
                  break
              }
              auction.title_format = auction.title.substring(0, index_until)
              auction.class_name = y % 2 == 0 ? 'schedule-auction-green-card' : 'schedule-auction-blue-card'
              y++
            }
            arr_auction = group_auction.arr
            break
          }
        }

        arr_date.push({
          id: start_date.format('YYYY-MM-DD'),
          text: start_date.format('D'),
          arr_auction: arr_auction,
        })
        start_date.add(1, 'days')
      }
      this.arr_date = arr_date
    },
    previous_action(){

    },
    next_action(){

    },
  }
}
</script>

<style lang="scss">
.month-week-title{
  font-family: poppins-bold;
  color: $gray17;
}
.schedule-auction-green-card{
  background-color: $green1;
  color: $green2;
  border-radius: .4rem;
}
.schedule-auction-blue-card{
  background-color: $blue3;
  color: $blue4;
  border-radius: .4rem;
}
</style>
