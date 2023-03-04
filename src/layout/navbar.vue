<template>
  <div>
    <div class="navbar navbar-expand-lg custom-navbar-padding d-flex justify-content-between align-items-center w-100" style="z-index: 10; top: 0" :class="customClass">
      <a class="navbar-brand" href="/">
        <img src="@/assets/image_logo.png" style="width: 8rem;"/>
      </a>
      <button class="navbar-toggler border-0" type="button" @click="onNavbarToggle" >
        <span class="navbar-toggler-icon"></span>
      </button>


      <div class="d-none d-lg-block" id="navbarToggle">
        <ul class="navbar-nav ml-auto mt-5 mt-lg-0">
          <li class="d-flex align-items-center nav-item active">
            <a class="nav-link" :class="{'active': currentRoute === '/'}" href="/">{{ $t("home") }}</a>
          </li>
          <li class="d-flex align-items-center nav-item">
            <a class="nav-link" :class="{'active': currentRoute === '/schedule'}" href="/schedule">{{ $t("auction_schedule") }}</a>
          </li>
          <li class="d-flex align-items-center nav-item dropdown nav-dropdown">
            <!-- <a class="nav-link" href="/definiton">{{ $t("auction_info") }}</a> -->
            <div>
              <a class="nav-link dropdown-toggle" 
                :class="{'active': currentRoute === '/definiton' || currentRoute === '/how-to' || currentRoute === '/rules' || currentRoute === '/news' || currentRoute === '/article'}" 
                href="#" 
                role="button" 
                data-toggle="dropdown" 
                aria-expanded="false">
                <div class="d-flex align-items-center">
                  {{ $t("auction_info") }}
                  <font-awesome-icon icon="fa-solid fa-chevron-down" class="nav-arrow ml-2"/>
                </div>
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" :class="{'active': currentRoute === '/definiton'}" href="/definiton">{{ $t("auction_definition") }}</a>
                <a class="dropdown-item" :class="{'active': currentRoute === '/how-to'}" href="/how-to">{{ $t("auction_how_to") }}</a>
                <a class="dropdown-item" :class="{'active': currentRoute === '/rules'}" href="/rules">{{ $t("auction_rules") }}</a>
                <a class="dropdown-item" :class="{'active': currentRoute === '/news'}" href="/news">{{ $t("auction_news") }}</a>
                <a class="dropdown-item" :class="{'active': currentRoute === '/article'}" href="/article">{{ $t("article") }}</a>
              </div>
            </div>
          </li>
          <li class="d-flex align-items-center nav-item">
            <a class="nav-link" :class="{'active': currentRoute === '/location'}" href="/location">{{ $t("auction_location") }}</a>
          </li>
          <li class="d-flex align-items-center nav-item">
            <a class="nav-link" :class="{'active': currentRoute === '/about-us'}" href="/about-us">{{ $t("about_us") }}</a>
          </li>
          <li class="d-flex align-items-center nav-item">
            <a class="nav-link" :class="{'active': currentRoute === '/sell'}" href="/sell">{{ $t("sell") }}</a>
          </li>
          <li class="d-flex align-items-center nav-item">
            <div class="nav-link">
              <a class="btn btn-primary text-white px-3" href="/">{{ $t("register") }}</a>
            </div>
          </li>
        </ul>
      </div>

      <!-- <div class="d-flex align-items-center navbar-header">
        <a href="/">{{ $t("home") }}</a>
        <a class="ml-4" href="/schedule">{{ $t("auction_schedule") }}</a>
        <a class="ml-4" href="/definiton">{{ $t("auction_info") }}</a>
        <a class="ml-4" href="/">{{ $t("auction_location") }}</a>
        <a class="ml-4" href="/">{{ $t("about_us") }}</a>
        <button class="btn btn-primary ml-4" href="/">{{ $t("register") }}</button>
      </div> -->
    </div>
  </div>
</template>

<script>
import Base from '@/utils/base'
export default{
  props: ['scrollY', ],
  data(){
    return{
      base: null,
      currentRoute: '/',
      customClass: 'navbar-home-gray1',
      isNavbarToggle: false,
    }
  },
  watch: {
    isNavbarToggle(val){
      console.log(val)
      this.$emit('onNavbarToggle', val)
    },
    scrollY(val){
      console.log(val)
      if(this.currentRoute === '/'){
        if(val < this.base.responsive_scroll_threshold(500))
          this.customClass = 'navbar-home-gray1'
        else if(val >= this.base.responsive_scroll_threshold(500) && val < this.base.responsive_scroll_threshold(1200))
          this.customClass = 'navbar-home-white'
        else if(val >= this.base.responsive_scroll_threshold(1200) && val < this.base.responsive_scroll_threshold(1700))
          this.customClass = 'navbar-home-gray4'
        else
          this.customClass = 'navbar-home-white'
      }
      else if(this.currentRoute === '/how-to'){
        if(val < this.base.responsive_scroll_threshold(600))
          this.customClass = 'navbar-home-white'
        else if(val >= this.base.responsive_scroll_threshold(600) && val < this.base.responsive_scroll_threshold(2000))
          this.customClass = 'navbar-home-gray4'
        else
          this.customClass = 'navbar-home-white'
      }
      else
        this.customClass = 'navbar-home-white'
    }
  },
  created(){
    this.base = new Base()
    this.currentRoute = this.$router.currentRoute.path
    this.customClass = this.currentRoute === '/' ? 'navbar-home-normal-gray1' : 'navbar-home-normal-white'
  },
  methods: {
    onNavbarToggle(){
      this.isNavbarToggle = !this.isNavbarToggle
    },
    logout(){
      localStorage.removeItem('token')
      location.href = "/auth/login"
    },
  }
}
</script>

<style lang="scss">
@media only screen and (min-width: 960px) {
  .nav-dropdown:hover .dropdown-menu{
    display: block;
  }
}

.navbar-header *{
  font-family: poppins-bold;
}
.navbar-header a, .list-group a{
  text-decoration: none;
  color: $black;
}
.navbar-header button{
  border-radius: .5rem;
}
.navbar-home-normal-gray1{
  background-color: $gray1;
}
.navbar-home-normal-white{
  background-color: $white;
}
.navbar-home-gray1{
  transition: all 1s;
  background-color: $navbar-gray1;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
}
.navbar-home-white{
  transition: all 1s;
  background-color: $navbar-white;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
}
.navbar-home-gray4{
  transition: all 1s;
  background-color: $navbar-gray4;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
}

.nav-dropdown .dropdown-toggle::after{
  display: none;
}
.nav-dropdown .dropdown-item, .nav-arrow{
  color: $black;
  font-family: poppins-medium;
  font-size: .8rem;
}
.nav-link{
  color: $black;
  font-family: poppins-medium;
}
.nav-link.active{
  color: $primary !important;
  font-family: poppins-bold;
}
.nav-dropdown .dropdown-item.active{
  background-color: $primary !important;
  font-size: .8rem;
  color: $white !important;
  font-family: poppins-bold;
}
.nav-link{
  padding-left: 1rem !important;
  padding-right: 1rem !important;
}
</style>
