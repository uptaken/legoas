<template>
  <div class="p-5 why-container">
    <div class="row" style="margin: 0 10rem;">
      <div class="col-12 col-lg-6"></div>
      <div class="col-12 col-lg-6">
        <p class="m-0 why-title">{{ $t("why_choose_us") }}</p>
        <p class="m-0 why-title2 mt-2">{{ $t("auction_center_with") }}</p>
        <p class="m-0 text-primary why-title2">{{ $t("first_e_auction") }}</p>
        <div class="mt-4">
          <div class="d-flex">
            <img/>
            <div>
              <p class="mb-0 why-breakdown-title">{{ $t("why_choose_us1_title") }}</p>
              <p class="mb-0 why-breakdown-description">{{ $t("why_choose_us1_desc") }}</p>
            </div>
          </div>

          <div class="d-flex mt-4">
            <img/>
            <div>
              <p class="mb-0 why-breakdown-title">{{ $t("why_choose_us2_title") }}</p>
              <p class="mb-0 why-breakdown-description">{{ $t("why_choose_us2_desc") }}</p>
            </div>
          </div>

          <div class="d-flex mt-4">
            <img/>
            <div>
              <p class="mb-0 why-breakdown-title">{{ $t("why_choose_us3_title") }}</p>
              <p class="mb-0 why-breakdown-description">{{ $t("why_choose_us3_desc") }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Base from '@/utils/base';

export default {
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
  font-family: poppins-bold;
}
.why-breakdown-description{
  font-family: poppins-regular;
  color: $gray6;
  margin-top: .5rem;
}
</style>