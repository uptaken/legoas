<template>
  <div class="custom-navbar-padding-right custom-navbar-padding-left d-flex flex-column align-items-center">
    <div class="footer-download-image1 text-left">
      <div class="position-relative" style="margin-top: 3.8rem;">
        <p class="m-0 general-title">{{ location_id === "all" && product_type_id === "all" && search === "" ? $t('all_product') : $t('search_product') }}</p>
      </div>

      <div class="" style="padding-top: 6rem; padding-bottom: 11.5rem;">
        <div class="card border-0 search-card">
            <div class="card-body" style="padding: 2.5rem 2.75rem;">
              <div class="row">
                <div class="col-12 col-lg-3 pr-3">
                  <div class="form-group mb-0">
                    <label class="search-label">{{ $t("location") }}</label>
                    <Select2 v-model="location_id"
                      :settings="{width: '100%', height: '100%',}"
                      :options="arr_location"  
                      @select="onLocationSelect($event)" />
                  </div>
                </div>

                <div class="col-12 col-lg-3 d-flex pr-3 pl-3 pl-lg-0">
                  <div class="vertical d-none d-lg-block"></div>
                  <div class="form-group mb-0 ml-0 ml-lg-3 flex-fill mt-3 mt-lg-0">
                    <label class="search-label">{{ $t("product_type") }}</label>
                    <Select2 v-model="product_type_id" 
                      :options="arr_product_type" 
                      :settings="{width: '100%', height: '100%',}" 
                      @select="onProductTypeSelect($event)" />
                  </div>
                </div>

                <div class="col-12 col-lg-3 d-flex pr-3 pl-3 pl-lg-0">
                  <div class="vertical d-none d-lg-block"></div>
                  <div class="form-group mb-0 ml-0 ml-lg-3 flex-fill mt-3 mt-lg-0">
                    <label class="search-label">{{ $t("name") }}</label>
                    <input class="form-control home-search-input" v-model="search" @keyup="checkEnter" />
                  </div>
                </div>

                <div class="col-12 col-lg-3 d-flex align-items-end">
                  <button class="btn py-2 px-5 btn-dark home-search-button mt-3 mt-lg-0" @click="search_action">{{ $t("search") }}</button>
                </div>
              </div>
            </div>
          </div>

        <div class="" style="margin-top: 3.1rem;">
          <div class="row">
            <div class="col-6 d-flex align-items-center">
              <p class="mb-0 content-content" v-show="arr_product.length > 0">Menampilkan {{ arr_product.length.toLocaleString(base.locale_string) }} Produk <label v-show="product_type_id != '' && product_type_id != 'all'">{{ selected_product_type.text }}</label><br/><label v-show="location_id != '' && location_id != 'all'">di {{ selected_location.text }}</label></p>
            </div>
            <div class="col-6 d-flex align-items-center justify-content-end">
              <p class="mb-0 content-content mr-3 mr-lg-5">Filter</p>
              <div class="d-block">
                <Select2 v-model="sort"
                  class="" 
                  :options="arr_sort" 
                  :settings="{width: '10rem',}"
                  @select="onSortSelect($event)" />
              </div>
            </div>
          </div>
          
          <div class="" style="margin-top: 2.5rem;">
            <div v-if="!isLoading">
              <div v-if="arr_product.length > 0">
                <div class="row">
                  <div v-for="(product, index) in arr_product" :key="index" class="col-6 col-lg-4 mb-4" @click="toDetail(index)" style="cursor: pointer;">
                    <RecommendationItem :data="product" :index="index" :total_data="arr_product.length"/>
                  </div>
                </div>
              </div>
              <div v-else class="d-flex justify-content-center" style="margin-bottom: 15.5rem;">
                <p>{{ $t('search_product_not_available') }}</p>
              </div>
            </div>
            <div v-else class="d-flex justify-content-center align-items-center" style="height: 20rem">
              <img src="@/assets/image_logo.png"/>
            </div>
          </div>

          <div class="custom-pagination-container" v-show="arr_product.length > 0">
            <CustomPagination :total_page="total_page" :current_page="current_page" @next_action="next_action" @previous_action="previous_action" @select_page="select_page"/>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Base from '@/utils/base';

// import ProductImage1 from '@/assets/product_image1.png';
// import ProductImage2 from '@/assets/product_image2.png';
// import ProductImage3 from '@/assets/product_image3.png';

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
      arr_factor: [false, false, false, ],
      total_page: 10,
      current_page: 1,
      start_data: 1,
      end_data: 10,
      total_data: 2000,
      model: {},
      sort: 'newest',
      location_id: '',
      product_type_id: '',
      selected_product_type: {},
      selected_location: {},
      isLoading: true,
      search: "",
      arr_sort: [
        {
          id: "newest",
          text: this.$t("newest"),
        },
        {
          id: "oldest",
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
      // arr_product: [
      //   {
      //     id: "1",
      //     image: ProductImage1,
      //     product_type: "normal",
      //     title: "WULING CORTEZ 1.5 S T LUX",
      //     seller: {
      //       name: "Amanah Decoration supplier interior Dan exsterior",
      //       address: "Jl. Semenanjung Utara No. 212 A, Jakarta Utara No. Telp 08123129, 0821321322 ",
      //       phone: "0821321322",
      //     },
      //     type: "MOBIL",
      //     place: "Jakarta Utara",
      //     price: 147000000,
      //     arr_image: [ProductImage1, ProductImage1, ProductImage1, ProductImage1],
      //     arr_info: [
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //     ],
      //     arr_document: [
      //       {
      //         image: ProductImage1,
      //         name: "KTP",
      //       },
      //       {
      //         image: ProductImage1,
      //         name: "SIM",
      //       },
      //     ],
      //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
      //     notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
      //   },
      //   {
      //     id: "1",
      //     image: ProductImage2,
      //     product_type: "normal",
      //     title: "WULING CORTEZ 1.5 S T LUX",
      //     seller: {
      //       name: "Amanah Decoration supplier interior Dan exsterior",
      //       address: "Jl. Semenanjung Utara No. 212 A, Jakarta Utara No. Telp 08123129, 0821321322 ",
      //       phone: "0821321322",
      //     },
      //     type: "MOBIL",
      //     place: "Jakarta Utara",
      //     price: 147000000,
      //     arr_image: [ProductImage2, ProductImage1, ProductImage3, ProductImage2],
      //     arr_info: [
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //     ],
      //     arr_document: [
      //       {
      //         image: ProductImage2,
      //         name: "KTP",
      //       },
      //       {
      //         image: ProductImage2,
      //         name: "SIM",
      //       },
      //     ],
      //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
      //     notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
      //   },
      //   {
      //     id: "1",
      //     image: ProductImage3,
      //     product_type: "bulk",
      //     title: "WULING CORTEZ 1.5 S T LUX",
      //     seller: {
      //       name: "Amanah Decoration supplier interior Dan exsterior",
      //       address: "Jl. Semenanjung Utara No. 212 A, Jakarta Utara No. Telp 08123129, 0821321322 ",
      //       phone: "0821321322",
      //     },
      //     type: "MOBIL",
      //     place: "Jakarta Utara",
      //     price: 147000000,
      //     arr_image: [ProductImage3, ProductImage3, ProductImage3, ProductImage3],
      //     arr_info: [
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //     ],
      //     arr_document: [
      //       {
      //         image: ProductImage3,
      //         name: "KTP",
      //       },
      //       {
      //         image: ProductImage3,
      //         name: "SIM",
      //       },
      //     ],
      //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
      //     notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
      //   },
      //   {
      //     id: "1",
      //     image: ProductImage1,
      //     product_type: "bulk",
      //     title: "WULING CORTEZ 1.5 S T LUX",
      //     seller: {
      //       name: "Amanah Decoration supplier interior Dan exsterior",
      //       address: "Jl. Semenanjung Utara No. 212 A, Jakarta Utara No. Telp 08123129, 0821321322 ",
      //       phone: "0821321322",
      //     },
      //     type: "MOBIL",
      //     place: "Jakarta Utara",
      //     price: 147000000,
      //     arr_image: [ProductImage1, ProductImage1, ProductImage1, ProductImage1],
      //     arr_info: [
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //     ],
      //     arr_document: [
      //       {
      //         image: ProductImage1,
      //         name: "KTP",
      //       },
      //       {
      //         image: ProductImage1,
      //         name: "SIM",
      //       },
      //     ],
      //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
      //     notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
      //   },
      //   {
      //     id: "1",
      //     image: ProductImage2,
      //     product_type: "normal",
      //     title: "WULING CORTEZ 1.5 S T LUX",
      //     seller: {
      //       name: "Amanah Decoration supplier interior Dan exsterior",
      //       address: "Jl. Semenanjung Utara No. 212 A, Jakarta Utara No. Telp 08123129, 0821321322 ",
      //       phone: "0821321322",
      //     },
      //     type: "MOBIL",
      //     place: "Jakarta Utara",
      //     price: 147000000,
      //     arr_image: [ProductImage2, ProductImage2, ProductImage2, ProductImage2],
      //     arr_info: [
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //     ],
      //     arr_document: [
      //       {
      //         image: ProductImage2,
      //         name: "KTP",
      //       },
      //       {
      //         image: ProductImage2,
      //         name: "SIM",
      //       },
      //     ],
      //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
      //     notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
      //   },
      //   {
      //     id: "1",
      //     image: ProductImage3,
      //     product_type: "normal",
      //     title: "WULING CORTEZ 1.5 S T LUX",
      //     seller: {
      //       name: "Amanah Decoration supplier interior Dan exsterior",
      //       address: "Jl. Semenanjung Utara No. 212 A, Jakarta Utara No. Telp 08123129, 0821321322 ",
      //       phone: "0821321322",
      //     },
      //     type: "MOBIL",
      //     place: "Jakarta Utara",
      //     price: 147000000,
      //     arr_image: [ProductImage3, ProductImage3, ProductImage3, ProductImage3],
      //     arr_info: [
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //     ],
      //     arr_document: [
      //       {
      //         image: ProductImage3,
      //         name: "KTP",
      //       },
      //       {
      //         image: ProductImage3,
      //         name: "SIM",
      //       },
      //     ],
      //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
      //     notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
      //   },
      //   {
      //     id: "1",
      //     image: ProductImage1,
      //     product_type: "normal",
      //     title: "WULING CORTEZ 1.5 S T LUX",
      //     seller: {
      //       name: "Amanah Decoration supplier interior Dan exsterior",
      //       address: "Jl. Semenanjung Utara No. 212 A, Jakarta Utara No. Telp 08123129, 0821321322 ",
      //       phone: "0821321322",
      //     },
      //     type: "MOBIL",
      //     place: "Jakarta Utara",
      //     price: 147000000,
      //     arr_image: [ProductImage1, ProductImage1, ProductImage1, ProductImage1],
      //     arr_info: [
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //     ],
      //     arr_document: [
      //       {
      //         image: ProductImage1,
      //         name: "KTP",
      //       },
      //       {
      //         image: ProductImage1,
      //         name: "SIM",
      //       },
      //     ],
      //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
      //     notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
      //   },
      //   {
      //     id: "1",
      //     image: ProductImage2,
      //     product_type: "normal",
      //     title: "WULING CORTEZ 1.5 S T LUX",
      //     seller: {
      //       name: "Amanah Decoration supplier interior Dan exsterior",
      //       address: "Jl. Semenanjung Utara No. 212 A, Jakarta Utara No. Telp 08123129, 0821321322 ",
      //       phone: "0821321322",
      //     },
      //     type: "MOBIL",
      //     place: "Jakarta Utara",
      //     price: 147000000,
      //     arr_image: [ProductImage2, ProductImage2, ProductImage2, ProductImage2],
      //     arr_info: [
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //     ],
      //     arr_document: [
      //       {
      //         image: ProductImage2,
      //         name: "KTP",
      //       },
      //       {
      //         image: ProductImage2,
      //         name: "SIM",
      //       },
      //     ],
      //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
      //     notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
      //   },
      //   {
      //     id: "1",
      //     image: ProductImage3,
      //     product_type: "normal",
      //     title: "WULING CORTEZ 1.5 S T LUX",
      //     seller: {
      //       name: "Amanah Decoration supplier interior Dan exsterior",
      //       address: "Jl. Semenanjung Utara No. 212 A, Jakarta Utara No. Telp 08123129, 0821321322 ",
      //       phone: "0821321322",
      //     },
      //     type: "MOBIL",
      //     place: "Jakarta Utara",
      //     price: 147000000,
      //     arr_image: [ProductImage3, ProductImage3, ProductImage3, ProductImage3],
      //     arr_info: [
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //       {
      //         name: "kondisi",
      //         value: "bagus",
      //       },
      //     ],
      //     arr_document: [
      //       {
      //         image: ProductImage3,
      //         name: "KTP",
      //       },
      //       {
      //         image: ProductImage3,
      //         name: "SIM",
      //       },
      //     ],
      //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
      //     notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
      //   },
      // ],
      arr_product: [],
      num_data: 9,
    }
  },
  watch: {
    arr_factor(val){
      console.log(val)
      this.$emit('onChangeArrFactor', val)
    },
    current_page(){
      this.get_product()
    },
    sort(){
      this.get_product()
    },
  },
  created(){
    this.base = new Base()

    if(this.$route.query.search != null){
      this.search = this.$route.query.search
      this.location_id = this.$route.query.location_id === "" ? "all" : this.$route.query.location_id
      this.product_type_id = this.$route.query.product_type_id === "" ? "all" : this.$route.query.product_type_id
    }

    this.get_product_type()
    this.get_location()
    this.get_product()
  },
  methods: {
    toDetail(index){
      var product = this.arr_product[index]
      
      window.localStorage.setItem('product', JSON.stringify(product))
      window.location.href = "/product/detail?id=" + product.idlot
    },
    checkEnter(e){
      if (e.keyCode === 13)
        this.search_action()
    },
    onLocationSelect(val){
      this.location_id = val.id
    },
    onProductTypeSelect(val){
      this.product_type_id = val.id
    },
    onSortSelect(val){
      this.sort = val.id
    },
    search_action(){
      // if(this.location_id === "")
      //   this.base.show_error(this.$t('location_empty'))
      // else if(this.product_type_id === "")
      //   this.base.show_error(this.$t('product_type_empty'))
      // if(this.search === "")
      //   this.base.show_error(this.$t('name_empty'))
      // else{
        location.href = `/search?location_id=${this.location_id === "all" ? "" : this.location_id}&product_type_id=${this.product_type_id === "all" ? "" : this.product_type_id}&search=${this.search}`
      // }
    },
    next_action(){
      this.current_page = this.current_page + 1
    },
    previous_action(){
      this.current_page = this.current_page - 1
    },
    select_page(page){
      this.current_page = page
    },
    async get_product_type(){
      var response = await this.base.request(this.base.url_api2 + "/ListCategory")
      this.$set(this.arr_factor, 0, true)

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

            if(product_type.id === this.product_type_id)
              this.selected_product_type = product_type
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
      this.$set(this.arr_factor, 1, true)

      if(response != null){
        if(response.status_code === "00"){
          var arr_location = [
            {
              id: 'all',
              text: this.$t('all_location'),
            },
          ]
          for(let location of response.data){
            var temp = {
              id: location,
              text: location,
            }
            arr_location.push(temp)

            if(temp.id === this.location_id)
              this.selected_location = temp
          }
          this.arr_location = arr_location
        }
        else
          this.base.show_error(response.status_message)
      }
      else
        this.base.show_error(this.$t('server_error'))
    },
    async get_product(){
      this.isLoading = true
      this.arr_product = []
      window.scrollTo(0, 250)

      var data = {
        param: {
          searchLocation: this.location_id === "all" ? "" : this.location_id,
          searchCategory: this.product_type_id === "all" ? "" : this.product_type_id,
          searchKey: this.search,
          length: this.num_data,
          sort: this.sort,
          start: this.current_page * this.num_data,
          searchStartEventDate: "",
          searchEndEventDate: "",
          sortby: "eventdate",
          sortdir: this.sort === "newest" ? "desc" : "asc"
        }
      }
      var response = await this.base.request(this.base.url_api2 + `/SearchUnit`, "post", data)
      this.$set(this.arr_factor, 2, true)
      this.isLoading = false

      if(response != null){
        if(response.data != null){
          for(let product of response.data){
            product.id = product.idlot
            product.image = product.imageuri
            product.place = product.wrhcity
            product.title = product.unitname
            product.type = product.categoryname
            product.price = product.baseprice
            product.arr_image = [
              product.imageuri,
            ]
            product.seller = {
              name: "",
            }
            product.notes = null
            product.arr_info = []
            for(let x in product.specunit){
              product.arr_info.push({
                name: x,
                value: product.specunit[x],
              })
            }
          }
          this.arr_product = response.data
          this.total_page = response.pageTotal
          this.total_data = response.recordsFiltered
        }
        else
          this.base.show_error(response.status_message)
      }
      else
        this.base.show_error(this.$t('server_error'))
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
