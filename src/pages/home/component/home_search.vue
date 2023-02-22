<template>
  <div class="d-flex flex-column align-items-center ">
    <div class="home-top w-100 pb-5 custom-navbar-padding-left">
      <div class="d-flex align-items-center mt-3 mt-lg-0">
        <div class="w-50 d-inline-block mr-3">
          <Transition name="banner-home-title" >
            <p class="m-0" v-show="banner_flag" style="font-size: 3.5rem; line-height: 5rem; font-family: poppins-medium;" v-html="selected_banner.title"></p>
          </Transition>
          <Transition name="banner-home-title" >
            <p class="m-0 banner-subtitle mt-3" v-show="banner_flag">{{ selected_banner.subtitle }}</p>
          </Transition>

          <div class="mt-5 d-flex">
            <font-awesome-icon icon="fa-solid fa-chevron-left" class="navigation-arrow mr-3" v-show="selected_banner_index > 0" @click="onBannerNavigationClick('previous')"/>
            <div class="d-flex ">
              <div class="rounded-circle banner-dots" 
                :class="{'ml-4': index > 0, 'active': selected_banner_index == index}" 
                v-for="(banner, index) in arr_banner" 
                :key="'banner'+index"
                @click="onBannerDotClick(index)"></div>
            </div>
            <font-awesome-icon icon="fa-solid fa-chevron-right" class="navigation-arrow ml-3" v-show="selected_banner_index < arr_banner.length - 1" @click="onBannerNavigationClick('next')"/>
          </div>
        </div>

        <div class="w-50 d-inline-block ml-3">
          <Transition name="banner-home-image" >
            <img :src="selected_banner.image" class="" width="100%" v-show="banner_flag"/>
          </Transition>
        </div>
      </div>
    </div>

    <!-- <Transition name="home-search"> -->
      <div class="home-search-card" style="width: 70%; " v-show="homeSearchFlag">
        <div class="card border-0 shadow-sm">
          <div class="card-body p-3">
            <p class="home-search-title">{{ $t("search_auction") }}</p>
            <div class="row">
              <div class="col-12 col-lg-3">
                <div class="form-group">
                  <label class="home-search-label">{{ $t("location") }}</label>
                  <Select2 v-model="location"
                    :settings="{width: '100%',}"
                    :options="arr_location" 
                    @change="onLocationChanged($event)" 
                    @select="onLocationSelect($event)" />
                </div>
              </div>

              <div class="col-12 col-lg-3 d-flex">
                <div class="vertical d-none d-lg-block"></div>
                <div class="form-group ml-0 ml-lg-3 flex-fill">
                  <label class="home-search-label">{{ $t("product_type") }}</label>
                  <Select2 v-model="product_type" 
                    :options="arr_product_type" 
                    :settings="{width: '100%',}"
                    @change="onProductTypeChanged($event)" 
                    @select="onProductTypeSelect($event)" />
                </div>
              </div>

              <div class="col-12 col-lg-3 d-flex">
                <div class="vertical d-none d-lg-block"></div>
                <div class="form-group ml-0 ml-lg-3 flex-fill">
                  <label class="home-search-label">{{ $t("name") }}</label>
                  <input class="form-control home-search-input" v-model="search" :placeholder="$t('input_product')"/>
                </div>
              </div>

              <div class="col-12 col-lg-3 d-flex align-items-center">
                <button class="btn btn-lg btn-dark w-100 w-lg-75 home-search-button" @click="search">{{ $t("search") }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    <!-- </Transition> -->
  </div>
</template>

<script>
import Base from '@/utils/base';

import MazdaCar from '@/assets/mazda_car.png'
import Underline from '@/assets/underline.png'

export default {
  props: ['homeBannerFlag', 'homeSearchFlag', ],
  data(){
    return{
      base: null,
      banner_flag: false,
      search: "",
      selected_banner_index: -1,
      selected_banner: {},
      arr_banner: [
        {
          title: `
            Jadikan<br/>
            Lelang <label class="m-0 banner-title-custom1 position-relative">Mudah<img src="${Underline}" class="position-absolute" style="bottom: 0; left: 2rem; width: 14rem;"/></label><br/>
            & Terpercaya
          `,
          subtitle: 'Get a car wherever and whenever you need it with your iOS or Android device.',
          image: MazdaCar,
        },
        {
          title: `
            Jadikan<br/>
            Lelang <label class="m-0 banner-title-custom1 position-relative">Mudah<img src="${Underline}" class="position-absolute" style="bottom: 0; left: 2rem; width: 14rem;"/></label><br/>
            & Terpercaya
          `,
          subtitle: 'Get a car wherever and whenever you need it with your iOS or Android device.',
          image: MazdaCar,
        },
        {
          title: `
            Jadikan<br/>
            Lelang <label class="m-0 banner-title-custom1 position-relative">Mudah<img src="${Underline}" class="position-absolute" style="bottom: 0; left: 2rem; width: 14rem;"/></label><br/>
            & Terpercaya
          `,
          subtitle: 'Get a car wherever and whenever you need it with your iOS or Android device.',
          image: MazdaCar,
        },
      ],
      arr_location: [
        {
          id: "1",
          text: "Jakarta",
        },
        {
          id: "2",
          text: "Surabaya",
        },
      ],
      arr_product_type: [
        {
          id: "1",
          text: "Volkswagen",
        },
        {
          id: "2",
          text: "Nissan",
        },
        {
          id: "3",
          text: "Mazda",
        },
      ],
      location: {},
      product_type: {},
    }
  },
  watch: {
    selected_banner_index(val){
      this.selected_banner = this.arr_banner[val]

      var context = this
      if(this.banner_flag){
        this.banner_flag = false
        setTimeout(() => {
          context.banner_flag = true
        }, 1000)
      }
      else
        this.banner_flag = true
    }
  },
  created(){
    this.base = new Base()

    this.selected_banner_index = 0
    this.selected_banner = this.arr_banner[0]
  },
  methods:{
    search_action(){

    },
    onBannerDotClick(index){
      this.selected_banner_index = index
    },
    onBannerNavigationClick(type){
      this.selected_banner_index = type == "next" ? this.selected_banner_index + 1 : this.selected_banner_index - 1
    }
  }
}
</script>

<style lang="scss">
@media only screen and (max-width: 960px) {
  .home-search-card{
    margin-top: -2rem;
  }
}
@media only screen and (min-width: 960px) {
  .home-search-card{
    margin-top: -2rem;
  }
}

.home-top{
  background-color: $gray1;
}
.navigation-arrow{
  color: $primary;
  cursor: pointer;
}
.banner-title-custom1{
  color: $primary;
}
.banner-subtitle{
  color: $gray6;
}
.banner-dots.active{
  width: 1rem; 
  height: 1rem;
  background-color: $primary;
  cursor: pointer;
}
.banner-dots{
  width: 1rem; 
  height: 1rem;
  background-color: $white;
  cursor: pointer;
}
.home-search-label{
  font-family: poppins-bold;
  font-size: 1rem;
}
.home-search-title{
  font-family: poppins-bold;
  font-size: 1.2rem;
  color: $blue2;
}
.home-search-button{
  font-family: poppins-bold;
}
.home-search-input, .select2-container .select2-selection--single, .select2-container--open .select2-dropdown--below, .select2-container--open .select2-dropdown--above{
  background-color: $gray12;
  border: none;
}
.select2-search__field{
  background-color: $white;
  border: none !important;
}
.home-search-input::placeholder{
  color: $gray14;
}
.banner-home-title-enter-active, .banner-home-title-leave-active{
  transition: all 1s;
}
.banner-home-title-leave-to, .banner-home-title-enter {
  margin-left: -10rem !important;
  opacity: 0;
}
.banner-home-image-enter-active, .banner-home-image-leave-active{
  transition: all 1s;
}
.banner-home-image-leave-to, .banner-home-image-enter {
  margin-right: -10rem !important;
  opacity: 0;
}
</style>
