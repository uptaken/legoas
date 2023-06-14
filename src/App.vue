<template>
  <div id="app" v-if="!this.$route.path.match(/\/auth*/g)">
    <img src="@/assets/background_schedule.png" class="position-absolute" style="right: 0; z-index: -1;"/>
    <div id="content">
      <div>
        <navbar @onNavbarToggle="onNavbarToggle"/>
      </div>
      <Transition name="navbar-fixed">
        <div class="position-fixed w-100" style="z-index: 1; top: 0" v-show="flag.navbar">
          <navbar :scrollY="scrollY" @onNavbarToggle="onNavbarToggle"/>
        </div>
      </Transition>
      <side-navbar-mobile :isNavbarToggle="isNavbarToggle" style=""/>
      <div class="">
        
        <router-view @onChangeArrFactor="(arr) => onChangeArrFactor(arr)"/>
      </div>
    </div>
    <footer1 v-show="this.$route.path != '/sell'"/>

    <custom-loading :arr_factor="arr_factor"/>
    <please-wait-modal/>
  </div>
  <div v-else>
    <router-view/>
  </div>
</template>

<script>
import Base from '@/utils/base'

import footer1 from './layout/footer'
import navbar from './layout/navbar'
import SideNavbarMobile from './layout/side_navbar_mobile'
import CustomLoading from '@/layout/custom_loading'
import PleaseWaitModal from '@/layout/please_wait_modal.vue'

export default {
  components: {
    footer1, navbar, 
    'side-navbar-mobile': SideNavbarMobile,
    'custom-loading': CustomLoading,
    'please-wait-modal': PleaseWaitModal,
  },
  data(){
    return{
      base: null,
      scrollY: 0,
      flag: {
        navbar: false,
      },
      isNavbarToggle: false,
      arr_factor: [],
    }
  },
  watch: {
    scrollY(val){
      // console.log(this.base.responsive_scroll_threshold(500))
      this.flag.navbar = val >= this.base.responsive_scroll_threshold(200)
    },
  },
  created(){
    this.base = new Base()
    window.addEventListener('scroll', this.handleScroll)
    this.scrollY = 1

    const last_version = localStorage.getItem('version')
    if(last_version == null || (last_version != null && last_version !== this.base.app_version)){
      localStorage.setItem('version', this.base.app_version)
      window.location.reload(true);
    }
  },
  methods:{
    onChangeArrFactor(arr){
      this.arr_factor = arr
    },
    onNavbarToggle(){
      this.isNavbarToggle = !this.isNavbarToggle
    },
    handleScroll(){
      this.scrollY = window.scrollY
    },
  }
}
</script>

<style lang="scss">
@media only screen and (max-width: 576px) {
  html, body{
    font-size: 12px;
  }
  .custom-navbar-padding{
    padding: 1.8rem 2rem;
  }
  .custom-navbar-padding-right{
    padding-right: 2rem;
  }
  .custom-navbar-padding-left{
    padding-left: 2rem;
  }
  .content-container{
    width: 100%;
    padding: 0;
  }
}
@media only screen and (min-width: 576px) and (max-width: 960px) {
  html, body{
    font-size: 12px;
  }
  .custom-navbar-padding{
    padding: 1.8rem 3rem;
  }
  .custom-navbar-padding-right{
    padding-right: 3rem;
  }
  .custom-navbar-padding-left{
    padding-left: 3rem;
  }
  .content-container{
    width: 100%;
    padding: 0 1rem;
  }
}
@media only screen and (min-width: 960px) and (max-width: 1517px) {
  html, body{
    font-size: 16px;
  }
  .custom-navbar-padding{
    padding: 1.8rem 10rem;
  }
  .custom-navbar-padding-right{
    padding-right: 10rem;
  }
  .custom-navbar-padding-left{
    padding-left: 10rem;
  }
  .content-container{
    width: $content-width;
    display: inline-block;
  }
}
@media only screen and (min-width: 1517px) {
  html, body{
    font-size: 18px;
  }
  .custom-navbar-padding{
    padding: 1.8rem 10rem;
  }
  .custom-navbar-padding-right{
    padding-right: 10rem;
  }
  .custom-navbar-padding-left{
    padding-left: 10rem;
  }
  .content-container{
    width: $content-width;
    display: inline-block;
  }
}

html, body{
  font-family: poppins-regular;
  overflow-x: hidden;
}
// table *{
//   border: inherit;
// }
table p{
  margin: 0;
}
.form-control{
  height: 3rem;
}
button:focus{
  outline:none !important;
  box-shadow: none !important;
  border: none !important;
}
.general-title{
  font-family: poppins-bold;
  font-size: 2rem;
  text-transform: uppercase;
}
.general-subtitle{
  font-family: poppins-regular;
  font-size: 1.8rem;
}
.navigation{
  color: $gray8;
}
.navigation.navigation-now{
  font-family: poppins-medium;
  // text-decoration: underline;
  text-transform: uppercase;
}
.select2-container .select2-selection--single {
  height: 2.3rem;
}
.select2-selection__arrow {
  height: 100% !important;
}
.select2-selection__rendered {
  height: 100% !important;
  display: flex !important;
  align-items: center;
  line-height: 100% !important;
}
.select2-results{
  z-index: 1;
  background-color: white;
}
.navbar-fixed-enter-active, .navbar-fixed-leave-active{
  transition: all .5s;
}
.navbar-fixed-leave-to, .navbar-fixed-enter {
  margin-top: -10rem;
  opacity: 0;
}

.ql-size-small {
  font-size: 1.2rem !important;
}
.ql-size-large {
  font-size: 4.5rem !important;
}
.ql-size-huge {
  font-size: 5.25rem !important;
}

.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {
  content: 4.5rem !important;
}

.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {
  content: 5.25rem !important;
}


.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {
  font-size: 4.5rem !important;
}

.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {
  font-size: 5.25rem !important;
}
.form-control:focus{
  border: 1px solid $gray13;
  box-shadow: none;
}
.form-control, .select2-results__option{
  font-size: 1rem;
}
.select2-selection__rendered{
  padding-top: .2rem;
  font-size: 1rem;
}
</style>