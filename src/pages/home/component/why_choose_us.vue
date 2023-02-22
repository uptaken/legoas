<template>
  <div class="py-5 why-container custom-navbar-padding-right custom-navbar-padding-left">
    <div class="row mx-5" >
      <div class="col-12 col-lg-6">
        <div style="width: 100%; height: 100%;" class="d-flex align-items-center">
          <img src="@/assets/why_choose_us.png" width="100%"/>
        </div>
      </div>
      <div class="col-12 col-lg-6 mt-5 mt-lg-0">
        <Transition name="why-choose-title1">
          <p class="m-0 why-title" v-show="whyChooseTitle1Flag">{{ $t("why_choose_us") }}</p>
        </Transition>
        <Transition name="why-choose-title2">
          <div v-show="whyChooseTitle2Flag">
            <p class="m-0 why-title2 mt-2">{{ $t("auction_center_with") }}</p>
            <p class="m-0 text-primary why-title2">{{ $t("first_e_auction") }}</p>
          </div>
        </Transition>
        <div class="mt-4">
          <Transition name="why-choose-us1">
            <div v-show="whyChooseUs1Flag">
              <div class="d-flex">
                <div style="width: 2.75rem; height: 2.75rem;">
                  <img src="@/assets/why_choose_us1.png" width="100%"/>
                </div>
                <div class="ml-4">
                  <p class="mb-0 why-breakdown-title">{{ $t("why_choose_us1_title") }}</p>
                  <p class="mb-0 why-breakdown-description">{{ $t("why_choose_us1_desc") }}</p>
                </div>
              </div>
            </div>
          </Transition>

          <Transition name="why-choose-us1">
            <div v-show="whyChooseUs2Flag">
              <div class="d-flex mt-4">
                <div style="width: 2.75rem; height: 2.75rem;">
                  <img src="@/assets/why_choose_us2.png" width="100%"/>
                </div>
                <div class="ml-4">
                  <p class="mb-0 why-breakdown-title">{{ $t("why_choose_us2_title") }}</p>
                  <p class="mb-0 why-breakdown-description">{{ $t("why_choose_us2_desc") }}</p>
                </div>
              </div>
            </div>
          </Transition>

          <Transition name="why-choose-us1">
            <div v-show="whyChooseUs3Flag">
              <div class="d-flex mt-4">
                <div style="width: 2.75rem; height: 2.75rem;">
                  <img src="@/assets/why_choose_us3.png" width="100%"/>
                </div>
                <div class="ml-4">
                  <p class="mb-0 why-breakdown-title">{{ $t("why_choose_us3_title") }}</p>
                  <p class="mb-0 why-breakdown-description">{{ $t("why_choose_us3_desc") }}</p>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Base from '@/utils/base';

export default {
  props: [
    "whyChooseTitle1Flag",
    "whyChooseTitle2Flag",
    "whyChooseUs1Flag",
    "whyChooseUs2Flag",
    "whyChooseUs3Flag",
  ],
  data(){
    return{
      base: null,
    }
  },
  mounted(){
    this.base = new Base()
  },
  methods: {
  }
}
</script>

<style lang="scss">
.why-container{
  background-color: $gray4;
}
.why-title{
  font-family: poppins-light;
  color: $gray5;
}
.why-title2{
  font-family: poppins-medium;
  font-size: 2rem;
  line-height: 110%;
}
.why-breakdown-title{
  font-size: 1.2rem;
  font-family: poppins-bold;
}
.why-breakdown-description{
  font-family: poppins-regular;
  color: $gray6;
  font-size: .8rem;
  margin-top: .5rem;
}

.why-choose-title1-enter-active, .why-choose-title1-leave-active{
  transition: all 2s;
}
.why-choose-title1-leave-to, .why-choose-title1-enter {
  margin-left: -10rem !important;
  opacity: 0;
}
.why-choose-title2-enter-active, .why-choose-title2-leave-active{
  transition: all 2s;
}
.why-choose-title2-leave-to, .why-choose-title2-enter {
  margin-left: -10rem !important;
  opacity: 0;
}
.why-choose-us1-enter-active, .why-choose-us1-leave-active{
  transition: all 2s;
}
.why-choose-us1-leave-to, .why-choose-us1-enter {
  margin-left: 10rem !important;
  opacity: 0;
}
</style>