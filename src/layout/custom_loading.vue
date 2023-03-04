<template>
  <Transition name="custom-loading">
    <div class="position-fixed w-100 h-100 custom-loading-container" v-show="isShow">
      <div class="d-flex justify-content-center align-items-center h-100" >
        <img src="@/assets/image_logo.png"/>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: ['arr_factor', ],
  data(){
    return{
      isShow: true,
    }
  },
  watch: {
    arr_factor(){
      this.manage_arr_factor()
    }
  },
  created(){
    this.manage_arr_factor()
  },
  methods: {
    manage_arr_factor(){
      var counter = 0
      for(let factor of this.arr_factor){
        if(!factor)
          break
        counter++
      }
      if(this.arr_factor.length > 0 && counter == this.arr_factor.length)
        this.isShow = false
    }
  }
}
</script>

<style lang="scss">
.custom-loading-container{
  background-color: $white;
  top: 0;
  z-index: 10;
}
.custom-loading-enter-active, .custom-loading-leave-active{
  transition: all 2s;
}
.custom-loading-leave-to, .custom-loading-enter {
  opacity: 0;
}
</style>