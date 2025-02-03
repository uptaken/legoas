<template>
  <div>
    <div class="navbar navbar-expand-md custom-navbar-padding d-flex justify-content-between align-items-center w-100" style="top: 0;" :class="customClass" :style="{background: currentRoute !== '/' ? 'transparent' : ''}">
      <a class="navbar-brand" href="/">
        <img src="@/assets/logo_new.png" style="width: 8rem;"/>
      </a>
      <button class="navbar-toggler border-0" type="button" @click="onNavbarToggle" >
        <font-awesome-icon icon="fa-solid fa-bars" class="ml-3" size="lg"/>
      </button>


      <div class="d-none d-md-block" id="navbarToggle" >
        <ul class="navbar-nav ml-auto mt-5 mt-md-0" >
          <li class="d-flex align-items-center nav-item active">
            <a class="nav-link" :class="{'active': currentRoute === '/'}" href="/" >{{ $t("home") }}</a>
          </li>
          <li class="d-flex align-items-center nav-item">
            <a class="nav-link" :class="{'active': currentRoute === '/schedule'}" href="/schedule" >{{ $t("auction_schedule") }}</a>
          </li>
          <li class="d-flex align-items-center nav-item dropdown nav-master-dropdown">
            <!-- <a class="nav-link" href="/definiton">{{ $t("auction_info") }}</a> -->
            <div class="nav-dropdown">
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
                <!-- <div class="dropright">
                  <a class="dropdown-item dropdown-toggle" 
                    href="#" 
                    role="button" 
                    data-toggle="dropdown" 
                    aria-expanded="false">{{ $t("test") }}</a>

                  <div class="dropdown-menu">
                    <a class="dropdown-item" :class="{'active': currentRoute === '/definiton'}" href="/definiton" >{{ $t("auction_definition") }}</a>
                    <a class="dropdown-item" :class="{'active': currentRoute === '/how-to'}" href="/how-to" >{{ $t("auction_how_to") }}</a>
                    <a class="dropdown-item" :class="{'active': currentRoute === '/rules'}" href="/rules" >{{ $t("auction_rules") }}</a>
                    <a class="dropdown-item" :class="{'active': currentRoute === '/news'}" href="/news" >{{ $t("auction_news") }}</a>
                    <a class="dropdown-item" :class="{'active': currentRoute === '/article'}" href="/article" >{{ $t("article") }}</a>
                  </div>
                </div> -->
                <a class="dropdown-item" :class="{'active': currentRoute === '/definiton'}" href="/definiton" >{{ $t("auction_definition") }}</a>
                <a class="dropdown-item" :class="{'active': currentRoute === '/how-to'}" href="/how-to" >{{ $t("auction_how_to") }}</a>
                <a class="dropdown-item" :class="{'active': currentRoute === '/rules'}" href="/rules" >{{ $t("auction_rules") }}</a>
                <a class="dropdown-item" :class="{'active': currentRoute === '/news'}" href="/news" >{{ $t("auction_news") }}</a>
                <a class="dropdown-item" :class="{'active': currentRoute === '/article'}" href="/article" >{{ $t("article") }}</a>
              </div>
            </div>
          </li>
          <li class="d-flex align-items-center nav-item dropdown nav-master-dropdown" v-for="(level1, index1) in arr_custom_navbar" :key="'level1' + index1">
            <div v-if="level1.arr.length == 0">
              <a class="nav-link" :class="{'active': currentRoute.includes('/custom*')}" @click="onRedirectLevel1(index1)" :href="'/custom/' + level1.id_frontend" >{{ level1.name }}</a>
            </div>
            <div v-else>
              <div class="nav-dropdown" :id="'custom_level1' + index1">
                <a class="nav-link dropdown-toggle" 
                  :class="{'active': currentRoute.includes('/custom*')}"
                  href="#" 
                  @click="onLevel1Clicked(index1)"
                  role="button" >
                  <div class="d-flex align-items-center">
                    {{ level1.name }}
                    <font-awesome-icon icon="fa-solid fa-chevron-down" class="nav-arrow ml-2"/>
                  </div>
                </a>
                <div class="dropdown-menu" :class="{'show': level1.is_show,}" :id="'custom_level1_menu' + index1">
                  <div v-for="(level2, index2) in level1.arr" :key="'level2' + index2">
                    <div v-if="level2.arr.length == 0">
                      <a class="dropdown-item" :class="{'active': currentRoute.includes('/custom*')}" @click="onRedirectLevel2(index1, index2)" :href="'/custom/' + level2.id_frontend" >{{ level2.name }}</a>
                    </div>
                    <div v-else>
                      <div class="dropright" :id="'custom_level2' + index1 + index2">
                        <a class="dropdown-item dropdown-toggle" 
                          href="#" 
                          role="button"
                          @click="onLevel2Clicked(index1, index2)" >
                          <div class="d-flex align-items-center justify-content-between">
                            {{ level2.name }}
                            <font-awesome-icon icon="fa-solid fa-chevron-right" class="nav-arrow ml-2"/>
                          </div>
                        </a>

                        <div class="dropdown-menu" :class="{'show': level2.is_show,}" :id="'custom_level2_menu' + index1 + index2">
                          <a class="dropdown-item" v-for="(level3, index3) in level2.arr" :key="'level3' + index3" :class="{'active': currentRoute.includes('/custom*')}" @click="onRedirectLevel3(index1, index2, index3)" :href="'/custom/' + level3.id_frontend" >{{ level3.name }}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="d-flex align-items-center nav-item">
            <a class="nav-link" :class="{'active': currentRoute === '/location'}" href="/location" >{{ $t("auction_location") }}</a>
          </li>
          <li class="d-flex align-items-center nav-item">
            <a class="nav-link" :class="{'active': currentRoute === '/about-us'}" href="/about-us" >{{ $t("about_us") }}</a>
          </li>
          <li class="d-flex align-items-center nav-item">
            <a class="nav-link" :class="{'active': currentRoute === '/sell'}" href="/sell" >{{ $t("sell") }}</a>
          </li>
          <li class="d-flex align-items-center nav-item">
            <div class="nav-link">
              <a class="btn btn-primary text-white px-3 py-0" target="__blank" href="https://lelang.legoas.co.id/Auction/Bidder/Register" >
                <div class="d-flex align-items-center justify-content-center" style="height: 2.5rem;">
                  <p class="mb-0" style="line-height: 100%; font-size: 1rem; margin-top: .2rem;">{{ $t("register") }}</p>
                </div>
              </a>
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
      arr_custom_navbar: [],
    }
  },
  watch: {
    isNavbarToggle(val){
      console.log(val)
      this.$emit('onNavbarToggle', val)
    },
    scrollY(val){
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
      else{
        this.customClass = 'navbar-home-white'
      }
    },
    arr_custom_navbar(val){
      for(let x in val){
        if(val[x].is_show)
          window.$('#custom_level1_menu' + x).addClass('show')
        else
          window.$('#custom_level1_menu' + x).removeClass('show')
        for(let y in val[x].arr){
          if(val[x].arr[y].is_show)
            window.$('#custom_level2_menu' + y).addClass('show')
          else{
            console.log(window.$('#custom_level2_menu' + y))
            window.$('#custom_level2_menu' + y).removeClass('show')
          }
        }
      }
    },
  },
  created(){
    this.base = new Base()
    this.currentRoute = this.$router.currentRoute.path
    this.customClass = this.currentRoute === '/' ? 'navbar-home-normal-gray1' : 'navbar-home-normal-white'

    this.get_navbar()
  },
  methods: {
    onNavbarToggle(){
      this.isNavbarToggle = !this.isNavbarToggle
    },
    logout(){
      localStorage.removeItem('token')
      location.href = "/auth/login"
    },
    onLevel1Clicked(index1){
      // window.$('#custom_level1' + index1).dropdown('toggle')

      var arr = JSON.parse(JSON.stringify(this.arr_custom_navbar))
			for(let x in arr){
				if(x != index1){
					arr[x].is_show = false
					for(let temp1 of arr[x].arr)
						temp1.is_show = false
				}
			}
			
      arr[index1].is_show = !arr[index1].is_show
      this.arr_custom_navbar = arr
    },
    onLevel2Clicked(index1, index2){
      var arr = JSON.parse(JSON.stringify(this.arr_custom_navbar))
			for(let x in arr[index1].arr){
				if(x != index2)
					arr[index1].arr[x].is_show = false
			}
      arr[index1].arr[index2].is_show = !arr[index1].arr[index2].is_show
      this.arr_custom_navbar = arr
    },
    onRedirectLevel1(index1){
      window.localStorage.setItem('custom_navbar_level1', JSON.stringify(this.arr_custom_navbar[index1]))
      window.localStorage.setItem('custom_navbar_level2', JSON.stringify({}))
      window.localStorage.setItem('custom_navbar_level3', JSON.stringify({}))
    },
    onRedirectLevel2(index1, index2){
      window.localStorage.setItem('custom_navbar_level1', JSON.stringify(this.arr_custom_navbar[index1]))
      window.localStorage.setItem('custom_navbar_level2', JSON.stringify(this.arr_custom_navbar[index1].arr[index2]))
      window.localStorage.setItem('custom_navbar_level3', JSON.stringify({}))
    },
    onRedirectLevel3(index1, index2, index3){
      window.localStorage.setItem('custom_navbar_level1', JSON.stringify(this.arr_custom_navbar[index1]))
      window.localStorage.setItem('custom_navbar_level2', JSON.stringify(this.arr_custom_navbar[index1].arr[index2]))
      window.localStorage.setItem('custom_navbar_level3', JSON.stringify(this.arr_custom_navbar[index1].arr[index2].arr[index3]))
    },
    async get_navbar(){
      var response = await this.base.request(this.base.url_api + "/navbar/level1/all")

      if(response != null){
        if(response.status === "success"){
          for(let level1 of response.data){
            level1.id_frontend = level1.name.replace(' ', '_').toLowerCase()
            level1.is_show = false
            level1.arr = level1.navbar_level2
            for(let level2 of level1.arr){
              level2.id_frontend = level2.name.replace(' ', '_').toLowerCase()
              level2.is_show = false
              level2.arr = level2.navbar_level3
              for(let level3 of level2.arr){
                level3.id_frontend = level3.name.replace(' ', '_').toLowerCase()
                level3.is_show = false
              }
            }
          }
          this.arr_custom_navbar = response.data
        }
        else
          this.base.show_error(response.message)
      }
      // else
      //   this.base.show_error(this.$t('server_error'))
    },
  }
}
</script>

<style lang="scss">
@media only screen and (max-width: 960px) {
  .nav-link{
    padding-left: .5rem !important;
    padding-right: .5rem !important;
  }
}
@media only screen and (min-width: 960px) {
  .nav-master-dropdown:hover>.nav-dropdown>.dropdown-menu{
    display: block;
  }
  .nav-link{
    padding-left: 1rem !important;
    padding-right: 1rem !important;
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

</style>
