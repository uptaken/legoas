<template>
  <div class="text-center">
    <div class="custom-navbar-padding-right custom-navbar-padding-left">
      <a href="https://legoas.page.link/aplikasi" target="__blank">
        <div class="footer-download-image px-0 px-md-0">
          <img src="@/assets/download_app_section2.png" class="footer-download-image1 d-none d-md-inline-block" />
          <img src="@/assets/download_app_section_mobile2.png" class="footer-download-image1 d-inline-block d-md-none"/>
        </div>
      </a>
    </div>
    <div class="footer-container text-left px-0 px-md-0" style="">
      <div class="custom-navbar-padding-right custom-navbar-padding-left footer-content-card">
        <div class="footer-download-image1 d-inline-block text-left">
          <div class="row " style="">
            <div class="col-12 col-md-3">
              <img src="@/assets/logo_new.png" style="width: 8rem;"/>
              <p class="mt-3 footer-content" v-html="address"></p>
              <!-- <p class="footer-content">120121</p> -->
              <div class="d-flex align-items-center">
                <font-awesome-icon icon="fa-solid fa-phone" />
                <p style="cursor: pointer;" @click="onClickPhone" class="mb-0 ml-3 phone-number" v-html="phone"></p>
              </div>
            </div>

            <div class="col-6 col-md-2 d-flex flex-column mt-3 mt-md-0">
              <p class="footer-title">{{ $t("app_name") }}</p>
              <a href="/about-us" class="footer-link">{{ $t("about_us") }}</a>
              <a href="/schedule" class="mt-3 footer-link">{{ $t("auction_schedule") }}</a>
              <a href="/location" class="mt-3 footer-link">{{ $t("auction_location") }}</a>
              <a href="https://wa.me/+6281283228292" class="mt-3 footer-link">{{ $t("contact_us") }}</a>
            </div>

            <div class="col-6 col-md-2 d-flex flex-column mt-3 mt-md-0">
              <p class="footer-title">{{ $t("auction_info") }}</p>
              <a href="/definiton" class="footer-link">{{ $t("auction_definition") }}</a>
              <a href="/how-to" class="mt-3 footer-link">{{ $t("auction_how_to") }}</a>
              <a href="/rules" class="mt-3 footer-link">{{ $t("auction_rules") }}</a>
              <a href="/news" class="mt-3 footer-link">{{ $t("auction_news") }}</a>
            </div>

            <div class="col-6 col-md-2 d-flex flex-column mt-3 mt-md-0">
              <p class="footer-title">{{ $t("join_app") }}</p>
              <a href="/sell" class="footer-link">{{ $t("sell") }}</a>
              <a href="https://lelang.legoas.co.id/Auction/Bidder/Register" target="__blank" class="mt-3 footer-link">{{ $t("registration") }}</a>
              <a href="https://lelang.legoas.co.id/Auction/Bidder/Register" target="__blank" class="mt-3 footer-link">{{ $t("login") }}</a>
            </div>

            <div class="col-6 col-md-3 mt-3 mt-md-0">
              <p class="footer-title">{{ $t("follow_us") }}</p>
              <div class="d-flex">
                <a href="https://www.facebook.com/legoasindonesia" style="color: black;"><font-awesome-icon icon="fa-brands fa-facebook"  size="lg"/></a>
                <!-- <a href="/" style="color: black;"><font-awesome-icon icon="fa-brands fa-twitter" class="ml-3" size="lg"/></a> -->
                <a href="https://www.linkedin.com/company/legoas" style="color: black;"><font-awesome-icon icon="fa-brands fa-linkedin" class="ml-3" size="lg"/></a>
                <a href="https://www.instagram.com/legoas.onlineauction" style="color: black;"><font-awesome-icon icon="fa-brands fa-instagram" class="ml-3" size="lg"/></a>
                <a href="https://www.tiktok.com/@legoas.indonesia?_t=8byEaj10VH8&_r=1" style="color: black;"><font-awesome-icon icon="fa-brands fa-tiktok" class="ml-3" size="lg"/></a>
              </div>
            </div>

            
          </div>

          <div class="mt-5">
            <div class="horizontal-footer"></div>
          </div>

          <div class="mt-3 text-center footer-content custom-navbar-padding-right custom-navbar-padding-left">
            Copyright 2023 © Legoas, All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Base from '@/utils/base';

export default {
  components: {
  },
  data(){
    return{
      base: null,
      scrollY: 0,
      arr_factor: [false, ],
      address: '',
      phone: '',
    }
  },
  created(){
    this.base = new Base()
    window.addEventListener('scroll', this.handleScroll)
    this.scrollY = 1

    this.get_setting()
  },
  methods: {
    onClickPhone(){
      location.href = 'tel:' + this.phone
    },
    async get_setting(){
      var response = await this.base.request(this.base.url_api + "/setting")
      this.$set(this.arr_factor, 1, true)

      if(response != null){
        if(response.status === "success"){
          for(let setting of response.data){
            if(setting.key === "address")
              this.address = setting.value
            else if(setting.key === "phone")
              this.phone = setting.value
          }
        }
        else
          this.base.show_error(response.message)
      }
      else
        this.base.show_error(this.$t('server_error'))
    },
  }
}
</script>

<style lang="scss">
@media only screen and (max-width: 960px) {
  .footer-content-card{
    margin-top: 7rem;
    text-align: center;
  }
  .footer-download-image{
    margin: 0;
  }
  .footer-download-image1{
    width: 100%;
  }
  .footer-container{
    background-color: $gray2;
    margin-top: -5rem; 
    padding-top: 1rem; 
    padding-bottom: 3rem;
  }
}
@media only screen and (min-width: 960px) and (max-width: 1517px) {
  .footer-content-card{
    margin-top: 12rem; 
    text-align: center;
  }
  .footer-download-image{
    text-align: center;
  }
  .footer-download-image1{
    width: $content-width;
  }
  .footer-container{
    background-color: $gray2;
    margin-top: -10rem; 
    padding-top: 3rem; 
    padding-bottom: 3rem;
  }
}
@media only screen and (min-width: 1517px) {
  .footer-content-card{
    margin-top: 12rem; 
    text-align: center;
  }
  .footer-download-image{
    text-align: center;
  }
  .footer-download-image1{
    width: $content-width;
  }
  .footer-container{
    background-color: $gray2;
    margin-top: -10rem; 
    padding-top: 3rem; 
    padding-bottom: 3rem;
  }
}



.horizontal-footer{
  background-color: $gray3;
  height: 1px;
}
.phone-number{
  font-family: poppins-bold;
  font-size: .8rem;
}
.footer-link{
  text-decoration: none;
  font-size: .8rem;
  color: $black;
}
.footer-title{
  font-family: poppins-medium;
  font-size: 1rem;
  color: $black;
}
.footer-content{
  font-size: .8rem;
}
</style>