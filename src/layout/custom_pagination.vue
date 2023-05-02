<template>
  <div class="d-flex justify-content-center">
    <div class="custom-navigation-card shadow-sm" :class="{'disabled': current_page == 1}" @click="previous_action">
      <font-awesome-icon icon="fa-solid fa-chevron-left" class="custom-navigation-arrow" :class="{'disabled': current_page == 1}"/>
    </div>

    <div class="mx-3">
      <div v-if="total_page < 6" class="d-flex">
        <div class="custom-navigation-card shadow-sm" :class="{'active': current_page == x}" v-for="x in total_page" :key="'customNavigation' + x" @click="select_page(x)">
          <p class="mb-0 custom-navigation-text">{{ x }}</p>
        </div>
      </div>
      <div v-else class="d-flex">
        <div class="custom-navigation-card shadow-sm" :class="{'active': current_page == x}" v-for="x in (current_page == bottom_threshold ? bottom_threshold + 1 : bottom_threshold)" :key="'customNavigation' + x" @click="select_page(x)">
          <p class="mb-0 custom-navigation-text">{{ x }}</p>
        </div>
        
        <div class="custom-navigation-card disabled shadow-sm" v-if="arr_current_page[0] > bottom_threshold + 1 || arr_current_page.length == 0">
          <p class="mb-0 custom-navigation-text">...</p>
        </div>
        
        <div class="custom-navigation-card shadow-sm" :class="{'active': current_page == x}" v-for="x in arr_current_page" :key="'customNavigation' + x" @click="select_page(x)">
          <p class="mb-0 custom-navigation-text">{{ x }}</p>
        </div>

        <div class="custom-navigation-card disabled shadow-sm" v-if="arr_current_page[arr_current_page.length - 1] < total_page - arr_reverse[0] - 1">
          <p class="mb-0 custom-navigation-text">...</p>
        </div>

        <div class="custom-navigation-card shadow-sm" :class="{'active': current_page == total_page - reverse}" v-for="(reverse) in arr_reverse" :key="'customNavigation' + (total_page - reverse)" @click="select_page(total_page - reverse)">
          <p class="mb-0 custom-navigation-text">{{ total_page - reverse }}</p>
        </div>
      </div>
    </div>

    <div class="custom-navigation-card shadow-sm" :class="{'disabled': current_page == total_page}" @click="next_action">
      <font-awesome-icon icon="fa-solid fa-chevron-right" class="custom-navigation-arrow" :class="{'disabled': current_page == total_page}"/>
    </div>
  </div>
</template>

<script>
export default {
  props: ['total_page', 'current_page', ],
  data(){
    return{
      arr_reverse: [],
      arr_current_page: [],
      bottom_threshold: 2,
      top_threshold: 2,
    }
  },
  watch: {
    total_page(){
      this.manage_arr_reverse()
    },
    current_page(val){
      var arr_current_page = []
      if(val > this.bottom_threshold && val < this.total_page - this.top_threshold + 1){
        if(val > this.bottom_threshold + 1)
          arr_current_page.push(val - 1)
        arr_current_page.push(val)
        if(val < this.total_page - this.top_threshold)
          arr_current_page.push(val + 1)
      }
      this.arr_current_page = arr_current_page

      this.manage_arr_reverse()
    },
  },
  created(){
    for(let x = 1; x >= 0; x--)
      this.arr_reverse.push(x)
  },
  methods: {
    manage_arr_reverse(){
      var arr_reverse = []
      for(let x = (this.current_page == this.total_page - this.top_threshold + 1 ? this.top_threshold : this.top_threshold - 1); x >= 0; x--)
        arr_reverse.push(x)
      this.arr_reverse = arr_reverse
    },
    previous_action(){
      if(this.current_page > 1)
        this.$emit('previous_action')
    },
    next_action(){
      if(this.current_page < this.total_page)
        this.$emit('next_action')
    },
    select_page(x){
      this.$emit('select_page', x)
    }
  }
}
</script>

<style lang="scss">
.custom-navigation-arrow{
  color: $gray15;
  font-size: .8rem;
}
.custom-navigation-arrow.disabled{
  color: $gray14;
}
.custom-navigation-card{
  background-color: white;
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid $gray2;
  color: $gray16;
  font-size: .8rem;
}
.custom-navigation-card.active{
  background-color: $primary;
  border: 1px solid $primary;
  color: $gray4;
  cursor: default;
}
.custom-navigation-card.disabled{
  cursor: default;
}
// .custom-navigation-text{
//   color: $gray16;
//   font-size: .8rem;
// }
</style>