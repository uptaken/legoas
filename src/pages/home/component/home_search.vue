<template>
  <div class="position-relative d-flex flex-column align-items-center px-5">
    <Transition name="home-banner">
      <img src="@/assets/home_banner.png" width="100%" v-show="homeBannerFlag"/>
    </Transition>

    <Transition name="home-search">
      <div class="" style="width: 90%; margin-top: -4rem" v-show="homeSearchFlag">
        <div class="card ">
          <div class="card-body p-3">
            <p>{{ $t("search_auction") }}</p>
            <div class="row">
              <div class="col-3">
                <div class="form-group">
                  <label>{{ $t("location") }}</label>
                  <Select2 v-model="location" 
                    :options="arr_location" 
                    @change="onLocationChanged($event)" 
                    @select="onLocationSelect($event)" />
                </div>
              </div>

              <div class="col-3 d-flex">
                <div class="vertical"></div>
                <div class="form-group ml-3 flex-fill">
                  <label>{{ $t("brand") }}</label>
                  <Select2 v-model="brand" 
                    :options="arr_brand" 
                    @change="onBrandChanged($event)" 
                    @select="onBrandSelect($event)" />
                </div>
              </div>

              <div class="col-3 d-flex">
                <div class="vertical"></div>
                <div class="form-group ml-3 flex-fill">
                  <label>{{ $t("model") }}</label>
                  <Select2 v-model="model" 
                    :options="arr_model" 
                    @change="onModelChanged($event)" 
                    @select="onModelSelect($event)" />
                </div>
              </div>

              <div class="col-3">
                <button class="btn btn-lg btn-dark w-100" @click="search">{{ $t("search") }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import Base from '@/utils/base';

export default {
  props: ['homeBannerFlag', 'homeSearchFlag', ],
  data(){
    return{
      base: null,
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
      arr_brand: [
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
      arr_model: [
        {
          id: "1",
          text: "Type S",
        },
        {
          id: "2",
          text: "Type A",
        },
      ],
      location: {},
      brand: {},
      model: {},
    }
  },
  created(){
    this.base = new Base()
  },
  methods:{
    search(){

    },
  }
}
</script>

<style lang="scss">
.home-banner-enter-active, .home-banner-leave-active{
  transition: all 2s;
}
.home-banner-leave-to, .home-banner-enter {
  margin-top: -10rem !important;
  margin-left: -10rem !important;
  opacity: 0;
}
.home-search-enter-active, .home-search-leave-active{
  transition: all 2s;
}
.home-search-leave-to, .home-search-enter {
  margin-bottom: -10rem !important;
  margin-right: -10rem !important;
  opacity: 0;
}
</style>
