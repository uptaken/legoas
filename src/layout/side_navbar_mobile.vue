<template>
  <div class="navbar-collapse pt-5 pt-md-0 d-block d-md-none" :class="{'button-toggle': isNavbarToggle}" id="sideNavbarToggle">
    <ul class="list-group navbar-side">
      <li class="list-group-item nav-item" style="border-top: none;">
        <a class="nav-link" :class="{'active': currentRoute === '/'}" href="/">{{ $t("home") }}</a>
      </li>
      <li class="list-group-item nav-item">
        <a class="nav-link" :class="{'active': currentRoute === '/schedule'}" href="/schedule">{{ $t("auction_schedule") }}</a>
      </li>
      <li class="list-group-item nav-item dropdown nav-dropdown p-0">
        <!-- <a class="nav-link" href="/definiton">{{ $t("auction_info") }}</a> -->
        <div>
          <a class="nav-link m-3" 
            :class="{'active': currentRoute === '/definiton' || currentRoute === '/how-to' || currentRoute === '/rules' || currentRoute === '/news' || currentRoute === '/article'}" 
            href="#sideNavCollapse" 
            role="button" 
            data-toggle="collapse" 
            aria-expanded="false">
            <div class="d-flex align-items-center">
              {{ $t("auction_info") }}
              <font-awesome-icon icon="fa-solid fa-chevron-down" class="nav-arrow ml-2"/>
            </div>
          </a>
          <div class="collapse" id="sideNavCollapse">
            <ul class="list-group navbar-side mt-3">
              <a class="list-group-item px-5" :class="{'active': currentRoute === '/definiton'}" href="/definiton">{{ $t("auction_definition") }}</a>
              <a class="list-group-item px-5" :class="{'active': currentRoute === '/how-to'}" href="/how-to">{{ $t("auction_how_to") }}</a>
              <a class="list-group-item px-5" :class="{'active': currentRoute === '/rules'}" href="/rules">{{ $t("auction_rules") }}</a>
              <a class="list-group-item px-5" :class="{'active': currentRoute === '/news'}" href="/news">{{ $t("auction_news") }}</a>
              <a class="list-group-item px-5" style="border-bottom: none;" :class="{'active': currentRoute === '/article'}" href="/article">{{ $t("article") }}</a>
            </ul>
          </div>
        </div>
      </li>
      <li class="list-group-item nav-item">
        <a class="nav-link" :class="{'active': currentRoute === '/location'}" href="/location">{{ $t("auction_location") }}</a>
      </li>
      <li class="list-group-item nav-item">
        <a class="nav-link" :class="{'active': currentRoute === '/about-us'}" href="/about-us">{{ $t("about_us") }}</a>
      </li>
      <li class="list-group-item nav-item">
        <a class="nav-link" :class="{'active': currentRoute === '/sell'}" href="/sell">{{ $t("sell") }}</a>
      </li>
      <li class="list-group-item nav-item dropdown nav-dropdown p-0" v-for="(level1, index1) in arr_custom_navbar" :key="'level1' + index1">
        <!-- <a class="nav-link" href="/definiton">{{ $t("auction_info") }}</a> -->
        <div v-if="level1.arr.length == 0">
          <a class="nav-link" :class="{'active': currentRoute.includes('/custom*')}" @click="onRedirectLevel1(index1)" :href="'/custom/' + level1.id_frontend">{{ level1.name }}</a>
        </div>

        <div v-else>
          <a class="nav-link m-3" 
            :class="{'active': currentRoute.includes('/custom*')}" 
            :href="'#sideNavCollapseCustomLevel1' + index1" 
            @click="onLevel1Clicked(index1)"
            role="button" 
            data-toggle="collapse" 
            aria-expanded="false">
            <div class="d-flex align-items-center">
              {{ level1.name }}
              <font-awesome-icon icon="fa-solid fa-chevron-down" class="nav-arrow ml-2"/>
            </div>
          </a>
          <div class="collapse" :id="'sideNavCollapseCustomLevel1' + index1">
            <ul class="list-group navbar-side mt-3">
              <div v-if="level1.arr.length == 0">
                <a class="list-group-item px-5" :class="{'active': currentRoute.includes('/custom*')}" @click="onRedirectLevel2(index1, index2)" :href="'/custom/' + level2.id_frontend">{{ level2.name }}</a>
              </div>

              <div class="list-group-item px-5" v-else>
                <div v-for="(level2, index2) in level1.arr" :key="'level2' + index2">
                  <a class="nav-link m-3" 
                    :class="{'active': currentRoute.includes('/custom*')}" 
                    :href="'#sideNavCollapseCustomLevel2' + index2" 
                    @click="onLevel2Clicked(index1, index2)"
                    role="button" 
                    data-toggle="collapse" 
                    aria-expanded="false">
                    <div class="d-flex align-items-center">
                      {{ level2.name }}
                      <font-awesome-icon icon="fa-solid fa-chevron-down" class="nav-arrow ml-2"/>
                    </div>
                  </a>
                  <div class="collapse" :id="'sideNavCollapseCustomLevel2' + index2">
                    <ul class="list-group navbar-side mt-3">
                      <a class="list-group-item px-5" v-for="(level3, index3) in level1.arr" :key="'level3' + index3" @click="onRedirectLevel3(index1, index2, index3)" :class="{'active': currentRoute.includes('/custom*')}" :href="'/custom/' + level3.id_frontend">{{ level3.name }}</a>
                    </ul>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </li>
      <li class="list-group-item nav-item">
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
</template>

<script>
import Base from '@/utils/base'
export default{
  props: ['isNavbarToggle', ],
  data(){
    return{
      base: null,
      currentRoute: '/',
      arr_custom_navbar: [],
    }
  },
  watch: {
  },
  created(){
    this.base = new Base()
    this.currentRoute = this.$router.currentRoute.path

    this.get_navbar()
  },
  methods: {
    onLevel1Clicked(index1){
      // window.$('#custom_level1' + index1).dropdown('toggle')
    
      var arr = JSON.parse(JSON.stringify(this.arr_custom_navbar))
      arr[index1].is_show = !arr[index1].is_show
      this.arr_custom_navbar = arr
    },
    onLevel2Clicked(index1, index2){
      var arr = JSON.parse(JSON.stringify(this.arr_custom_navbar))
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
@media (max-width: 992px) {
  .navbar-collapse {
    position: fixed;
    z-index: 1;
    top: 0;
    left: -75%;
    padding-bottom: 3rem;
    width: 75%;
    height: 100%;
    background-color: $white;
  }

  .navbar-collapse {
    left: -75%;
    transition: left 500ms ease-in-out;
  }

  .navbar-collapse.button-toggle {
    left: 0;
    transition: left 500ms ease-in-out;
  }
}
.navbar-side{
  border-radius: 0;
}
.navbar-side .list-group-item{
  border-right: none;
  border-left: none;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>
