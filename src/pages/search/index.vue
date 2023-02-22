<template>
  <div class="custom-navbar-padding-right custom-navbar-padding-left">
    <div class="position-relative px-5 mt-5 ml-5">
      <p class="m-0 general-title">{{ $t('search_product') }}</p>
    </div>

    <div class="p-5 p-lg-5 m-0 m-lg-5">
      <div class="card border-0 search-card">
          <div class="card-body p-3">
            <div class="row">
              <div class="col-12 col-lg-3">
                <div class="form-group">
                  <label class="search-label">{{ $t("location") }}</label>
                  <Select2 v-model="location"
                    :settings="{width: '100%', height: '100%',}"
                    :options="arr_location" 
                    @change="onLocationChanged($event)" 
                    @select="onLocationSelect($event)" />
                </div>
              </div>

              <div class="col-12 col-lg-3 d-flex">
                <div class="vertical d-none d-lg-block"></div>
                <div class="form-group ml-0 ml-lg-3 flex-fill">
                  <label class="search-label">{{ $t("product_type") }}</label>
                  <Select2 v-model="product_type" 
                    :options="arr_product_type" 
                    :settings="{width: '100%', height: '100%',}"
                    @change="onProductTypeChanged($event)" 
                    @select="onProductTypeSelect($event)" />
                </div>
              </div>

              <div class="col-12 col-lg-3 d-flex">
                <div class="vertical d-none d-lg-block"></div>
                <div class="form-group ml-0 ml-lg-3 flex-fill">
                  <label class="search-label">{{ $t("name") }}</label>
                  <input class="form-control" v-model="search"/>
                </div>
              </div>

              <div class="col-12 col-lg-3 d-flex align-items-center justify-content-center">
                <button class="btn btn-lg btn-dark w-100 w-lg-75 home-search-button" @click="search">{{ $t("search") }}</button>
              </div>
            </div>
          </div>
        </div>

      <div class="mt-5 px-5">
        <div class="row">
          <div class="col-6 d-flex align-items-center">
            <p class="mb-0 content-content">Menampilkan 1.500 Produk Mobil<br/>di Jakarta Barat</p>
          </div>
          <div class="col-6 d-flex align-items-center justify-content-end">
            <p class="mb-0 content-content">Filter</p>
            <Select2 v-model="sort"
              class="ml-4" 
              :options="arr_sort" 
              :settings="{width: '10rem',}"
              @change="onSortChanged($event)" 
              @select="onSortSelect($event)" />
          </div>
        </div>
        <div class="row mt-5">
          <div v-for="(car, index) in arr_car" :key="index" class="col-12 col-lg-4 mb-3">
            <a href="#">
              <RecommendationItem :data="car" :index="index" :total_data="arr_car.length"/>
            </a>
          </div>
        </div>

        <div class="custom-pagination-container">
          <CustomPagination :total_page="total_page" :current_page="current_page" @next_action="next_action" @previous_action="previous_action" @select_page="select_page"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Base from '@/utils/base';

import ProductImage1 from '@/assets/product_image1.png';
import ProductImage2 from '@/assets/product_image2.png';
import ProductImage3 from '@/assets/product_image3.png';

import RecommendationItem from '@/pages/home/component/recommendation_item.vue'
import CustomPagination from '@/layout/custom_pagination.vue'

export default {
  components: {
    'RecommendationItem': RecommendationItem,
    'CustomPagination': CustomPagination,
  },
  data(){
    return{
      base: null,
      total_page: 10,
      current_page: 1,
      start_data: 1,
      end_data: 10,
      total_data: 2000,
      model: {},
      sort: {},
      location: {},
      product_type: {},
      search: "",
      arr_sort: [
        {
          id: "1",
          text: this.$t("newest"),
        },
        {
          id: "2",
          text: this.$t("oldest"),
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
      arr_car: [
        {
          id: "1",
          image: ProductImage1,
          title: "WULING CORTEZ 1.5 S T LUX",
          seller: {
            name: "Amanah Decoration supplier interior Dan exsterior",
          },
          type: "MOBIL",
          place: "Jakarta Utara",
          price: 147000000,
        },
        {
          id: "1",
          image: ProductImage2,
          title: "Ban Bridgestone Ecopia 195/65 R15",
          seller: {
            name: "Ban Bridgestone Ecopia 195/65 R15",
          },
          type: "BAN",
          place: "Jakarta Utara",
          price: 147000000,
        },
        {
          id: "1",
          image: ProductImage3,
          title: "Orient Titanium Sliderule Automatic Caliber 469",
          seller: {
            name: "Amanah Decoration supplier interior Dan exsterior",
          },
          type: "JAM TANGAN",
          place: "Jakarta Utara",
          price: 147000000,
        },
        {
          id: "1",
          image: ProductImage1,
          title: "WULING CORTEZ 1.5 S T LUX",
          seller: {
            name: "Amanah Decoration supplier interior Dan exsterior",
          },
          type: "MOBIL",
          place: "Jakarta Utara",
          price: 147000000,
        },
        {
          id: "1",
          image: ProductImage2,
          title: "Ban Bridgestone Ecopia 195/65 R15",
          seller: {
            name: "Ban Bridgestone Ecopia 195/65 R15",
          },
          type: "BAN",
          place: "Jakarta Utara",
          price: 147000000,
        },
        {
          id: "1",
          image: ProductImage3,
          title: "Orient Titanium Sliderule Automatic Caliber 469",
          seller: {
            name: "Amanah Decoration supplier interior Dan exsterior",
          },
          type: "JAM TANGAN",
          place: "Jakarta Utara",
          price: 147000000,
        },
        {
          id: "1",
          image: ProductImage1,
          title: "WULING CORTEZ 1.5 S T LUX",
          seller: {
            name: "Amanah Decoration supplier interior Dan exsterior",
          },
          type: "MOBIL",
          place: "Jakarta Utara",
          price: 147000000,
        },
        {
          id: "1",
          image: ProductImage2,
          title: "Ban Bridgestone Ecopia 195/65 R15",
          seller: {
            name: "Ban Bridgestone Ecopia 195/65 R15",
          },
          type: "BAN",
          place: "Jakarta Utara",
          price: 147000000,
        },
        {
          id: "1",
          image: ProductImage3,
          title: "Orient Titanium Sliderule Automatic Caliber 469",
          seller: {
            name: "Amanah Decoration supplier interior Dan exsterior",
          },
          type: "JAM TANGAN",
          place: "Jakarta Utara",
          price: 147000000,
        },
      ],
    }
  },
  created(){
    this.base = new Base()
  },
  methods: {
    next_action(){
      this.current_page = this.current_page + 1
    },
    previous_action(){
      this.current_page = this.current_page - 1
    },
    select_page(page){
      this.current_page = page
    },
  }
}
</script>

<style lang="scss">
.search-card{
  background-color: $gray4;
  border-radius: 1rem;
}
.search-label{
  color: $gray10;
  font-family: poppins-bold;
}
.content-content{
  color: $gray8;
}
.custom-pagination-container{
  margin-top: 7rem;
}
</style>
