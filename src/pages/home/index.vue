<template>
  <div class="">
    <div class="position-relative d-flex flex-column align-items-center px-5">
      <img src="@/assets/Download.png" width="100%"/>
      <div class="" style="width: 90%; margin-top: -4rem">
        <div class="card ">
          <div class="card-body p-3">
            <p>{{ $t("search_auction") }}</p>
            <div class="row">
              <div class="col-3">
                <div class="form-group">
                  <label>{{ $t("location") }}</label>
                  <select class="form-control"></select>
                </div>
              </div>

              <div class="col-3 d-flex">
                <div class="vertical"></div>
                <div class="form-group ml-3">
                  <label>{{ $t("brand") }}</label>
                  <select class="form-control"></select>
                </div>
              </div>

              <div class="col-3 d-flex">
                <div class="vertical"></div>
                <div class="form-group ml-3">
                  <label>{{ $t("model") }}</label>
                  <select class="form-control"></select>
                </div>
              </div>

              <div class="col-3">
                <button class="btn btn-lg btn-dark">{{ $t("search") }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="p-5">
      <div v-for="(brand, index) in arr_brand" :key="index" class="d-inline-block text-center" :style="{width: (100 / arr_brand.length) + '%'}">
        <img :src="brand" />
      </div>
    </div>

    <div class="p-5 why-container">
      <div class="row">
        <div class="col-12 col-lg-6"></div>
        <div class="col-12 col-lg-6">
          <p class="m-0 why-title">{{ $t("why_choose_us") }}</p>
          <p class="m-0 why-title2 mt-2">{{ $t("auction_center_with") }}</p>
          <p class="m-0 text-primary why-title2">{{ $t("first_e_auction") }}</p>
          <div class="mt-4">
            <div class="d-flex">
              <img/>
              <div>
                <p class="m-0 why-breakdown-title">{{ $t("why_choose_us1_title") }}</p>
                <p class="m-0 why-breakdown-description">{{ $t("why_choose_us1_desc") }}</p>
              </div>
            </div>

            <div class="d-flex mt-3">
              <img/>
              <div>
                <p class="m-0 why-breakdown-title">{{ $t("why_choose_us2_title") }}</p>
                <p class="m-0 why-breakdown-description">{{ $t("why_choose_us2_desc") }}</p>
              </div>
            </div>

            <div class="d-flex mt-3">
              <img/>
              <div>
                <p class="m-0 why-breakdown-title">{{ $t("why_choose_us3_title") }}</p>
                <p class="m-0 why-breakdown-description">{{ $t("why_choose_us3_desc") }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Base from '@/utils/base';

import Audi from '@/assets/Audi.png';
import BMW from '@/assets/BMW.png';
import Ford from '@/assets/Ford.png';
import Mazda from '@/assets/Mazda.png';
import Mercedes from '@/assets/Mercedes Benz.png';
import Nissan from '@/assets/Nissan.png';
import Volkswagen from '@/assets/Volkswagen.png';

export default {
  data(){
    return{
      base: null,
      arr_brand: [Audi, BMW, Ford, Ford, Mazda, Mercedes, Nissan, Volkswagen,]
    }
  },
  mounted(){
    this.base = new Base()
  },
  methods:{
  }
}
</script>

<style lang="scss">
.vertical{
  background-color: $gray2;
  width: 1px;
  height: 100%;
}
.why-container{
  background-color: $gray4;
}
.why-title{
  font-family: poppins-light;
  color: $gray5;
}
.why-title2{
  font-family: poppins-medium;
}
.why-breakdown-title{
  font-family: poppins-bold;
}
.why-breakdown-description{
  font-family: poppins-regular;
  color: $gray6;
}
</style>
