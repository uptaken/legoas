<template>
  <div class="d-flex flex-column align-items-center ">
    <div class="home-top w-100 pb-5 custom-navbar-padding-left ">
      <div class="row mt-3 mt-lg-0 mr-0 pl-3 pl-lg-0">
        <div class="col-12 col-lg-6">
          <div class="d-flex flex-column justify-content-center h-100">
            <div id="banner-content" class="d-flex align-items-center" :style="{height: banner_content_height > 0 ? (banner_content_height + 'px') : 'auto'}">
              <div class="w-100">
                <Transition name="banner-home-title" >
                  <p class="mb-0 banner-content w-100" v-show="banner_flag" v-html="selected_banner.content"></p>
                </Transition>
                <!-- <Transition name="banner-home-title" >
                  <p class="m-0" v-show="banner_flag" style="font-size: 3.5rem; line-height: 5rem; font-family: poppins-medium;" v-html="selected_banner.title"></p>
                </Transition>
                <Transition name="banner-home-title" >
                  <p class="m-0 banner-subtitle mt-3" v-show="banner_flag" v-html="selected_banner.subtitle"></p>
                </Transition> -->
              </div>
            </div>

            <div class="mt-5 d-flex">
              <font-awesome-icon icon="fa-solid fa-chevron-left" class="navigation-arrow mr-3" :class="{'disabled': selected_banner_index == 0}" @click="onBannerNavigationClick('previous')"/>
              <div class="d-flex ">
                <div class="rounded-circle banner-dots" 
                  :class="{'ml-4': index > 0, 'active': selected_banner_index == index}" 
                  v-for="(banner, index) in arr_banner" 
                  :key="'banner'+index"
                  @click="onBannerDotClick(index)"></div>
              </div>
              <font-awesome-icon icon="fa-solid fa-chevron-right" class="navigation-arrow ml-3" :class="{'disabled': selected_banner_index == arr_banner.length - 1}" @click="onBannerNavigationClick('next')"/>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-6 pr-0" id="banner-image" :style="{height: banner_image_height > 0 ? (banner_image_height + 'px') : 'auto'}">
          <div class="d-flex flex-column justify-content-center h-100">
            <Transition name="banner-home-image" >
              <div v-show="banner_flag && selected_banner.image != null" class="w-100 text-right" style="height: 32rem;">
                <vue-skeleton-loader
                  width="100%"
                  height="100%"
                  animation="fade"
                  v-show="!is_image_loaded"/>
                <img :src="selected_banner.image" @load="onImageLoad()" v-show="is_image_loaded" class="" height="100%"/>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>

    <!-- <Transition name="home-search"> -->
      <div class="home-search-card custom-navbar-padding-left custom-navbar-padding-right" v-show="homeSearchFlag">
        <div class="card border-0 shadow-sm home-search-card1">
          <div class="card-body" style="padding: 1.8rem 2.1rem;">
            <p class="home-search-title">{{ $t("search_auction") }}</p>
            <div class="row">
              <div class="col-12 col-lg-3 ">
                <div class="form-group mb-0">
                  <label class="home-search-label">{{ $t("location") }}</label>
                  <Select2 v-model="location_id"
                    :settings="{width: '100%',}"
                    :options="arr_location" 
                    @select="onLocationSelect($event)" />
                </div>
              </div>

              <div class="col-12 col-lg-3 d-flex pl-lg-0">
                <div class="vertical d-none d-lg-block"></div>
                <div class="form-group mb-0 ml-0 ml-lg-3 flex-fill mt-4 mt-lg-0">
                  <label class="home-search-label">{{ $t("product_type") }}</label>
                  <Select2 v-model="product_type_id" 
                    :options="arr_product_type" 
                    :settings="{width: '100%',}"
                    @select="onProductTypeSelect($event)" />
                </div>
              </div>

              <div class="col-12 col-lg-3 d-flex pl-lg-0">
                <div class="vertical d-none d-lg-block"></div>
                <div class="form-group mb-0 ml-0 ml-lg-3 flex-fill mt-4 mt-lg-0">
                  <label class="home-search-label">{{ $t("name") }}</label>
                  <input class="form-control home-search-input" @keyup="checkEnter" v-model="search" :placeholder="$t('input_product')"/>
                </div>
              </div>

              <div class="col-12 col-lg-3 d-flex align-items-end">
                <button class="btn px-5 btn-dark home-search-button mt-4 mt-lg-0" @click="search_action">{{ $t("search") }}</button>
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
      banner_content_height: 0,
      banner_image_height: 0,
      search: "",
      selected_banner_index: -1,
      selected_banner: {},
      is_image_loaded: false,
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
      location_id: "all",
      product_type_id: "all",
      isLoading: true,
    }
  },
  watch: {
    selected_banner_index(val){
      var context = this
      if(this.banner_flag){
        this.banner_flag = false
        setTimeout(() => {
          context.selected_banner = this.arr_banner[val]
          context.banner_flag = true
        }, 1000)
      }
      else
        this.banner_flag = true
    },
    selected_banner(){
      this.is_image_loaded = false
    },
    isLoading(val){
      this.$emit("onLoading", val, 0)
    },
    is_image_loaded(val){
      if(val){
        this.banner_content_height = window.$('#banner-content').innerHeight()
        this.banner_image_height = window.$('#banner-image').innerHeight()
      }
    },
  },
  created(){
    this.base = new Base()

    this.selected_banner_index = 0
    this.selected_banner = this.arr_banner[0]

    this.get_banner()
    this.get_product_type()
    this.get_location()
  },
  methods:{
    checkEnter(e){
      if (e.keyCode === 13)
        this.search_action()
    },
    onImageLoad(){
      this.is_image_loaded = true
    },
    onLocationSelect(val){
      this.location_id = val.id
    },
    onProductTypeSelect(val){
      this.product_type_id = val.id
    },
    async get_product_type(){
      var response = await this.base.request(this.base.url_api2 + "/ListCategory")

      if(response != null){
        if(response.status_code === "00"){
          var arr_product_type = [
            {
              id: 'all',
              text: this.$t('all_product_type'),
            },
          ]
          for(let product_type of response.data){
            arr_product_type.push({
              id: product_type.kode,
              text: product_type.nama,
            })
          }
          this.arr_product_type = arr_product_type
        }
        else
          this.base.show_error(response.status_message)
      }
      else
        this.base.show_error(this.$t('server_error'))
    },
    async get_location(){
      var response = await this.base.request(this.base.url_api2 + "/ListLocation")

      if(response != null){
        if(response.status_code === "00"){
          var arr_location = [
            {
              id: 'all',
              text: this.$t('all_location'),
            },
          ]
          for(let location of response.data){
            arr_location.push({
              id: location,
              text: location,
            })
          }
          this.arr_location = arr_location
        }
        else
          this.base.show_error(response.status_message)
      }
      else
        this.base.show_error(this.$t('server_error'))
    },
    async get_banner(){
      var response = await this.base.request(this.base.url_api + "/banner/all?is_publish=1")
      this.isLoading = false

      if(response != null){
        if(response.status === "success"){
          for(let banner of response.data){
            banner.image = banner.file_name != null ? this.base.host + "/media/banner?file_name=" + banner.file_name : null
          }
          this.arr_banner = response.data

          this.selected_banner_index = 0
          this.selected_banner = this.arr_banner[0]
        }
        else
          this.base.show_error(response.message)
      }
      else
        this.base.show_error(this.$t('server_error'))
    },
    search_action(){
      // if(this.location_id === "")
      //   this.base.show_error(this.$t('location_empty'))
      // else if(this.product_type_id === "")
      //   this.base.show_error(this.$t('product_type_empty'))
      if(this.search === "")
        this.base.show_error(this.$t('name_empty'))
      else{
        location.href = `/search?location_id=${this.location_id === "all" ? "" : this.location_id}&product_type_id=${this.product_type_id === "all" ? "" : this.product_type_id}&search=${this.search}`
      }
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
    width: 100%;
  }
  .home-search-button{
    width: 100%;
    border-radius: 1rem;
  }
  .home-search-banner-container{
    width: 100%;
  }
  .banner-content span{
    font-size: 3rem  !important;
  }
}
@media only screen and (min-width: 960px) {
  .home-search-card{
    margin-top: -2rem;
    width: 90%;
  }
  .home-search-button{
    width: 100%;
    border-radius: 1rem;
  }
  .home-search-banner-container{
    width: 50%;
  }
  .banner-content span{
    font-size: 3rem !important;
  }
}

.home-search-card1{
  border-radius: 1rem;
}
.home-top{
  background-color: $gray1;
}
.navigation-arrow{
  color: $primary;
  cursor: pointer;
}
.navigation-arrow.disabled{
  color: $gray6;
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
  transition: all .5s;
}
.banner-dots{
  width: 1rem; 
  height: 1rem;
  background-color: $white;
  cursor: pointer;
  transition: all .5s;
}
.home-search-label{
  font-family: poppins-bold;
  font-size: .8rem;
}
.home-search-title{
  font-family: poppins-bold;
  font-size: 1.5rem;
  color: $blue2;
}
.home-search-button{
  font-family: poppins-bold;
  font-size: 1.1rem;
  height: 3rem;
}
.home-search-input, .select2-container .select2-selection--single, .select2-container--open .select2-dropdown--below, .select2-container--open .select2-dropdown--above{
  background-color: $gray12;
  border: none;
  height: 3rem;
  font-size: .8rem;
}
.select2-container{
  font-size: .8rem;
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
  transform: translateX(-10rem);
  opacity: 0;
}
.banner-home-image-enter-active, .banner-home-image-leave-active{
  transition: all 1s;
}
.banner-home-image-leave-to, .banner-home-image-enter {
  transform: translateX(10rem);
  opacity: 0;
}
.banner-content *{
  line-height: 120%;
  // width: 100%;
  display: inline-block;
  overflow-wrap: break-word;
}
.banner-content h1, .banner-content p{
  width: 100%;
}
</style>
