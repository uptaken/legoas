<template>
  <div class="custom-navbar-padding-right custom-navbar-padding-left text-center">
    <div class="content-container text-left">
      <Transition name="location-title1">
        <div class="position-relative " style="margin-top: 6.75rem;" v-show="flag.locationTitle1Flag">
          <p class="mb-0 general-title">{{ $t('auction_location') }}</p>
        </div>
      </Transition>

      <div class="w-100" style="padding-top: 4.5rem; padding-bottom: 10rem;">
        <div class="">
          <div class="row">
            <div class="col-12 col-lg-6">
              <div class="">
                <Transition name="location-title2">
                  <p class="mb-0 info-title1" v-show="flag.locationTitle2Flag" v-html="title"></p>
                </Transition>

                <div class="mt-5">
                  <Transition name="location-title3">
                    <p class="mb-0 info-title" v-show="flag.locationTitle3Flag">{{ $t('address') }}</p>
                  </Transition>
                  <Transition name="location-content3">
                    <p class="mb-0 mt-1 content-section" v-show="flag.locationContent3Flag" v-html="address"></p>
                  </Transition>
                </div>

                <div class="mt-4">
                  <Transition name="location-title4">
                    <p class="mb-0 info-title" v-show="flag.locationTitle4Flag">{{ $t('email') }}</p>
                  </Transition>
                  <Transition name="location-content4">
                    <p class="mb-0 mt-1 content-section" v-show="flag.locationContent4Flag" v-html="email"></p>
                  </Transition>
                </div>

                <div class="mt-4">
                  <Transition name="location-title5">
                    <p class="mb-0 info-title" v-show="flag.locationTitle5Flag">{{ $t('phone') }}</p>
                  </Transition>
                  <Transition name="location-content5">
                    <p class="mb-0 mt-1 content-section" v-show="flag.locationContent5Flag" v-html="phone"></p>
                  </Transition>
                </div>
              </div>
            </div>

            <div class="col-12 col-lg-6 mt-5 mt-lg-0">
              <Transition name="location-content6">
                <div v-show="flag.locationContent6Flag">
                  <div class="d-flex justify-content-center">
                    <div class="position-relative" style="width: 12rem;">
                      <vue-skeleton-loader
                        width="8rem"
                        height="8rem"
                        animation="fade"
                        v-show="!arr_image[0].is_image_loaded"/>
                      <img :src="arr_image[0].image" @load="onImageLoad(0)" v-show="arr_image[0].is_image_loaded" class="position-absolute" style="width: 8rem; left: 5rem; z-index: -1"/>
                      <div class="p-1 bg-white rounded" style="margin-top: 5rem; width: 8rem;">
                        <vue-skeleton-loader
                          width="8rem"
                          height="8rem"
                          animation="fade"
                          v-show="!arr_image[1].is_image_loaded"/>
                        <img :src="arr_image[1].image" @load="onImageLoad(1)" v-show="arr_image[1].is_image_loaded" width="100%"/>
                      </div>
                    </div>

                    <div class="position-relative">
                      <vue-skeleton-loader
                        width="8rem"
                        height="8rem"
                        animation="fade"
                        v-show="!arr_image[2].is_image_loaded"/>
                      <img :src="arr_image[2].image" class="" @load="onImageLoad(2)" v-show="arr_image[2].is_image_loaded" style="width: 8rem; margin-left: 5rem;"/>
                      <div class="position-absolute bg-white rounded" style="top: 5rem;">
                        <vue-skeleton-loader
                          width="8rem"
                          height="8rem"
                          animation="fade"
                          v-show="!arr_image[3].is_image_loaded"/>
                        <img :src="arr_image[3].image" @load="onImageLoad(3)" v-show="arr_image[3].is_image_loaded" style="width: 8rem;"/>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>

        <div class=" text-center" style="margin-top: 7.6rem;">
          <iframe
            width="100%"
            height="316"
            style="border:0"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            :src="`https://www.google.com/maps/embed/v1/place?key=AIzaSyAGvT7vk9EkzIusHwBSKXGc-bYsp1vLrAs
              &q=${latitude},${longitude}`">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Base from '@/utils/base';

import Image1 from '@/assets/location1.png';
import Image2 from '@/assets/location2.png';
import Image3 from '@/assets/location3.png';
import Image4 from '@/assets/location4.png';

export default {
  components: {
  },
  data(){
    return{
      base: null,
      scrollY: 0,
      title: `Kunjungi Legoas, PT Digital Sarana Legoas <label class="custom-title">Lokasi Lelang di Jakarta</label>`,
      address: `Jl. Meruya Selatan N0. 12 RT 08 RW 04 Kel. Meruya Utara Kec. Kembangan Jakarta Barat 11620 Indonesia`,
      email: `cs@legoas.co.id`,
      phone: `021-12312-2312`,
      latitude: -7.2940871,
      longitude: 112.648735,
      arr_image: [
        {
          id: "1",
          is_image_loaded: false,
          image: Image1,
        },
        {
          id: "1",
          is_image_loaded: false,
          image: Image2,
        },
        {
          id: "1",
          is_image_loaded: false,
          image: Image3,
        },
        {
          id: "1",
          is_image_loaded: false,
          image: Image4,
        },
      ],
      flag: {
        locationTitle1Flag: false,
        locationContent1Flag: false,
        locationTitle2Flag: false,
        locationContent2Flag: false,
        locationTitle3Flag: false,
        locationContent3Flag: false,
        locationTitle4Flag: false,
        locationContent4Flag: false,
        locationTitle5Flag: false,
        locationContent5Flag: false,
        locationTitle6Flag: false,
        locationContent6Flag: false,
      },
    }
  },
  watch: {
    scrollY(val){
      this.flag.locationTitle1Flag = this.flag.locationTitle1Flag || (!this.flag.locationTitle1Flag && val >= this.base.responsive_scroll_threshold(0))
      this.flag.locationContent1Flag = this.flag.locationContent1Flag || (!this.flag.locationContent1Flag && val >= this.base.responsive_scroll_threshold(0))
      this.flag.locationTitle2Flag = this.flag.locationTitle2Flag || (!this.flag.locationTitle2Flag && val >= this.base.responsive_scroll_threshold(0))
      this.flag.locationContent2Flag = this.flag.locationContent2Flag || (!this.flag.locationContent2Flag && val >= this.base.responsive_scroll_threshold(0))
      this.flag.locationTitle3Flag = this.flag.locationTitle3Flag || (!this.flag.locationTitle3Flag && val >= this.base.responsive_scroll_threshold(0))
      this.flag.locationContent3Flag = this.flag.locationContent3Flag || (!this.flag.locationContent3Flag && val >= this.base.responsive_scroll_threshold(0))
      this.flag.locationTitle4Flag = this.flag.locationTitle4Flag || (!this.flag.locationTitle4Flag && val >= this.base.responsive_scroll_threshold(0))
      this.flag.locationContent4Flag = this.flag.locationContent4Flag || (!this.flag.locationContent4Flag && val >= this.base.responsive_scroll_threshold(0))
      this.flag.locationTitle5Flag = this.flag.locationTitle5Flag || (!this.flag.locationTitle5Flag && val >= this.base.responsive_scroll_threshold(0))
      this.flag.locationContent5Flag = this.flag.locationContent5Flag || (!this.flag.locationContent5Flag && val >= this.base.responsive_scroll_threshold(0))
      this.flag.locationTitle6Flag = this.flag.locationTitle6Flag || (!this.flag.locationTitle6Flag && val >= this.base.responsive_scroll_threshold(0))
      this.flag.locationContent6Flag = this.flag.locationContent6Flag || (!this.flag.locationContent6Flag && val >= this.base.responsive_scroll_threshold(0))
    },
  },
  created(){
    this.base = new Base()
    window.addEventListener('scroll', this.handleScroll)
    this.scrollY = 1

    this.get_setting()
  },
  methods: {
    onImageLoad(index){
      var image = this.arr_image[index]
      image.is_image_loaded = true
      this.$set(this.arr_image, index, image)
    },
    handleScroll(){
      this.scrollY = window.scrollY
    },
    async get_image(){
      var response = await this.base.request(this.base.url_api + "/location/media?is_publish=1")

      if(response != null){
        if(response.status === "success"){
          var arr_image = []
          for(let image of response.data){
            arr_image.push(this.base.host + "/media/location?file_name=" + image.file_name)
          }
          this.arr_image = arr_image
        }
        else
          this.base.show_error(response.message)
      }
      else
        this.base.show_error(this.$t('server_error'))
    },
    async get_location_info(){
      var response = await this.base.request(this.base.url_api + "/info?is_publish=1&type=location")

      if(response != null){
        if(response.status === "success"){
          this.title = response.data.title
        }
        else
          this.base.show_error(response.message)
      }
      else
        this.base.show_error(this.$t('server_error'))
    },
    async get_setting(){
      var response = await this.base.request(this.base.url_api + "/setting")

      if(response != null){
        if(response.status === "success"){
          for(let setting of response.data){
            if(setting.key === "address")
              this.address = setting.value
            else if(setting.key === "email")
              this.email = setting.value
            else if(setting.key === "phone")
              this.phone = setting.value
            else if(setting.key === "latitude")
              this.latitude = setting.value
            else if(setting.key === "longitude")
              this.longitude = setting.value
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
.custom-title{
  color: $primary;
  font-family: poppins-bold;
}
.trust-card{
  background-color: $gray9;
  border: none;
}
.title-section{
  font-size: 2rem;
  font-family: poppins-medium;
}
.info-title{
  font-family: poppins-medium;
}
.info-title1{
  font-size: 2rem;
  line-height: 120%;
  font-family: poppins-medium;
}
.content-section{
  color: $gray6;
}
.team-role{
  color: $black1;
}
.team-name{
  color: $black1;
  font-family: poppins-bold;
}
.location-title1-enter-active, .location-title1-leave-active,
.location-title2-enter-active, .location-title2-leave-active,
.location-title3-enter-active, .location-title3-leave-active,
.location-title4-enter-active, .location-title4-leave-active,
.location-title5-enter-active, .location-title5-leave-active,
.location-title6-enter-active, .location-title6-leave-active{
  transition: all 2s;
}
.location-title1-leave-to, .location-title1-enter,
.location-title2-leave-to, .location-title2-enter,
.location-title3-leave-to, .location-title3-enter,
.location-title4-leave-to, .location-title4-enter,
.location-title5-leave-to, .location-title5-enter,
.location-title6-leave-to, .location-title6-enter {
  transform: translateX(-10rem);
  opacity: 0;
}
.location-content1-enter-active, .location-content1-leave-active,
.location-content2-enter-active, .location-content2-leave-active,
.location-content3-enter-active, .location-content3-leave-active,
.location-content4-enter-active, .location-content4-leave-active,
.location-content5-enter-active, .location-content5-leave-active,
.location-content6-enter-active, .location-content6-leave-active{
  transition: all 2s;
}
.location-content1-leave-to, .location-content1-enter,
.location-content2-leave-to, .location-content2-enter,
.location-content3-leave-to, .location-content3-enter,
.location-content4-leave-to, .location-content4-enter,
.location-content5-leave-to, .location-content5-enter,
.location-content6-leave-to, .location-content6-enter {
  transform: translateX(10rem);
  opacity: 0;
}
</style>
