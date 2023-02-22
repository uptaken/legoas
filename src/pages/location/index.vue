<template>
  <div class="custom-navbar-padding-right custom-navbar-padding-left">
    <Transition name="location-title1">
      <div class="position-relative px-5 mt-5" v-show="flag.locationTitle1Flag">
        <p class="mb-0 general-title ml-5">{{ $t('auction_location') }}</p>
      </div>
    </Transition>

    <div class="p-5 w-100">
      <div class="mt-3">
        <div class="row">
          <div class="col-12 col-lg-6">
            <div class="ml-5">
              <Transition name="location-title2">
                <p class="mb-0 info-title" v-show="flag.locationTitle2Flag">Kunjungi Legoas, PT Digital Sarana Legoas <label class="custom-title">Lokasi Lelang di Jakarta</label></p>
              </Transition>

              <div class="mt-3">
                <Transition name="location-title3">
                  <p class="mb-0 info-title" v-show="flag.locationTitle3Flag">{{ $t('address') }}</p>
                </Transition>
                <Transition name="location-content3">
                  <p class="mb-0 mt-1 content-section" v-show="flag.locationContent3Flag">Jl. Meruya Selatan N0. 12 RT 08 RW 04 Kel. Meruya Utara Kec. Kembangan Jakarta Barat 11620 Indonesia</p>
                </Transition>
              </div>

              <div class="mt-3">
                <Transition name="location-title4">
                  <p class="mb-0 info-title" v-show="flag.locationTitle4Flag">{{ $t('email') }}</p>
                </Transition>
                <Transition name="location-content4">
                  <p class="mb-0 mt-1 content-section" v-show="flag.locationContent4Flag">cs@legoas.co.id</p>
                </Transition>
              </div>

              <div class="mt-3">
                <Transition name="location-title5">
                  <p class="mb-0 info-title" v-show="flag.locationTitle5Flag">{{ $t('phone') }}</p>
                </Transition>
                <Transition name="location-content5">
                  <p class="mb-0 mt-1 content-section" v-show="flag.locationContent5Flag">021-12312-2312</p>
                </Transition>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-6 mt-5 mt-lg-0">
            <Transition name="location-content6">
              <div v-show="flag.locationContent6Flag">
                <div class="d-flex justify-content-center">
                  <div class="position-relative" style="width: 12rem;">
                    <img src="@/assets/location1.png" class="position-absolute" style="width: 8rem; left: 5rem; z-index: -1"/>
                    <div class="p-1 bg-white rounded" style="margin-top: 5rem; width: 8rem;">
                      <img src="@/assets/location2.png" width="100%"/>
                    </div>
                  </div>

                  <div class="position-relative">
                    <img src="@/assets/location3.png" class="" style="width: 8rem; margin-left: 5rem;"/>
                    <div class="position-absolute bg-white rounded" style="top: 5rem;">
                      <img src="@/assets/location4.png"  style="width: 8rem;"/>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>

      <div class="mt-5 text-center">
        <iframe
          width="100%"
          height="316"
          style="border:0"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAGvT7vk9EkzIusHwBSKXGc-bYsp1vLrAs
            &q=Space+Needle,Seattle+WA">
        </iframe>
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
      this.flag.locationTitle1Flag = val >= this.base.responsive_scroll_threshold(0)
      this.flag.locationContent1Flag = val >= this.base.responsive_scroll_threshold(0)
      this.flag.locationTitle2Flag = val >= this.base.responsive_scroll_threshold(0)
      this.flag.locationContent2Flag = val >= this.base.responsive_scroll_threshold(0)
      this.flag.locationTitle3Flag = val >= this.base.responsive_scroll_threshold(0)
      this.flag.locationContent3Flag = val >= this.base.responsive_scroll_threshold(0)
      this.flag.locationTitle4Flag = val >= this.base.responsive_scroll_threshold(0)
      this.flag.locationContent4Flag = val >= this.base.responsive_scroll_threshold(0)
      this.flag.locationTitle5Flag = val >= this.base.responsive_scroll_threshold(0)
      this.flag.locationContent5Flag = val >= this.base.responsive_scroll_threshold(0)
      this.flag.locationTitle6Flag = val >= this.base.responsive_scroll_threshold(0)
      this.flag.locationContent6Flag = val >= this.base.responsive_scroll_threshold(0)
    },
  },
  created(){
    this.base = new Base()
    window.addEventListener('scroll', this.handleScroll)
    this.scrollY = 1
  },
  methods: {
    handleScroll(){
      this.scrollY = window.scrollY
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
  margin-left: -10rem !important;
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
  margin-left: 10rem !important;
  opacity: 0;
}
</style>
