<template>
  <div class="custom-navbar-padding-right custom-navbar-padding-left text-center">
    <div class="content-container text-left">
      <div class="position-relative" style="margin-top: 3.8rem;">
        <p class="m-0 general-title">{{ $t('search_product') }}</p>
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
                    <input class="form-control home-search-input" v-model="search"/>
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
              <p class="mb-0 content-content">Menampilkan 1.500 Produk Mobil<br/>di Jakarta Barat</p>
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
          <div class="row" style="margin-top: 2.5rem;">
            <div v-for="(product, index) in arr_product" :key="index" class="col-12 col-lg-4 mb-4" @click="toDetail(index)" style="cursor: pointer;">
              <RecommendationItem :data="product" :index="index" :total_data="arr_product.length"/>
            </div>
          </div>

          <div class="custom-pagination-container">
            <CustomPagination :total_page="total_page" :current_page="current_page" @next_action="next_action" @previous_action="previous_action" @select_page="select_page"/>
          </div>
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
      arr_factor: [false, ],
      total_page: 10,
      current_page: 1,
      start_data: 1,
      end_data: 10,
      total_data: 2000,
      model: {},
      sort: '',
      location_id: '',
      product_type_id: '',
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
      arr_product: [
        {
          id: "1",
          image: ProductImage1,
          product_type: "normal",
          title: "WULING CORTEZ 1.5 S T LUX",
          seller: {
            name: "Amanah Decoration supplier interior Dan exsterior",
            address: "Jl. Semenanjung Utara No. 212 A, Jakarta Utara No. Telp 08123129, 0821321322 ",
            phone: "0821321322",
          },
          type: "MOBIL",
          place: "Jakarta Utara",
          price: 147000000,
          arr_image: [ProductImage1, ProductImage1, ProductImage1, ProductImage1],
          arr_info: [
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
          ],
          arr_document: [
            {
              image: ProductImage1,
              name: "KTP",
            },
            {
              image: ProductImage1,
              name: "SIM",
            },
          ],
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
          notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
        },
        {
          id: "1",
          image: ProductImage2,
          product_type: "normal",
          title: "WULING CORTEZ 1.5 S T LUX",
          seller: {
            name: "Amanah Decoration supplier interior Dan exsterior",
            address: "Jl. Semenanjung Utara No. 212 A, Jakarta Utara No. Telp 08123129, 0821321322 ",
            phone: "0821321322",
          },
          type: "MOBIL",
          place: "Jakarta Utara",
          price: 147000000,
          arr_image: [ProductImage2, ProductImage1, ProductImage3, ProductImage2],
          arr_info: [
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
          ],
          arr_document: [
            {
              image: ProductImage2,
              name: "KTP",
            },
            {
              image: ProductImage2,
              name: "SIM",
            },
          ],
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
          notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
        },
        {
          id: "1",
          image: ProductImage3,
          product_type: "bulk",
          title: "WULING CORTEZ 1.5 S T LUX",
          seller: {
            name: "Amanah Decoration supplier interior Dan exsterior",
            address: "Jl. Semenanjung Utara No. 212 A, Jakarta Utara No. Telp 08123129, 0821321322 ",
            phone: "0821321322",
          },
          type: "MOBIL",
          place: "Jakarta Utara",
          price: 147000000,
          arr_image: [ProductImage3, ProductImage3, ProductImage3, ProductImage3],
          arr_info: [
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
          ],
          arr_document: [
            {
              image: ProductImage3,
              name: "KTP",
            },
            {
              image: ProductImage3,
              name: "SIM",
            },
          ],
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
          notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
        },
        {
          id: "1",
          image: ProductImage1,
          product_type: "bulk",
          title: "WULING CORTEZ 1.5 S T LUX",
          seller: {
            name: "Amanah Decoration supplier interior Dan exsterior",
            address: "Jl. Semenanjung Utara No. 212 A, Jakarta Utara No. Telp 08123129, 0821321322 ",
            phone: "0821321322",
          },
          type: "MOBIL",
          place: "Jakarta Utara",
          price: 147000000,
          arr_image: [ProductImage1, ProductImage1, ProductImage1, ProductImage1],
          arr_info: [
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
          ],
          arr_document: [
            {
              image: ProductImage1,
              name: "KTP",
            },
            {
              image: ProductImage1,
              name: "SIM",
            },
          ],
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
          notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
        },
        {
          id: "1",
          image: ProductImage2,
          product_type: "normal",
          title: "WULING CORTEZ 1.5 S T LUX",
          seller: {
            name: "Amanah Decoration supplier interior Dan exsterior",
            address: "Jl. Semenanjung Utara No. 212 A, Jakarta Utara No. Telp 08123129, 0821321322 ",
            phone: "0821321322",
          },
          type: "MOBIL",
          place: "Jakarta Utara",
          price: 147000000,
          arr_image: [ProductImage2, ProductImage2, ProductImage2, ProductImage2],
          arr_info: [
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
          ],
          arr_document: [
            {
              image: ProductImage2,
              name: "KTP",
            },
            {
              image: ProductImage2,
              name: "SIM",
            },
          ],
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
          notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
        },
        {
          id: "1",
          image: ProductImage3,
          product_type: "normal",
          title: "WULING CORTEZ 1.5 S T LUX",
          seller: {
            name: "Amanah Decoration supplier interior Dan exsterior",
            address: "Jl. Semenanjung Utara No. 212 A, Jakarta Utara No. Telp 08123129, 0821321322 ",
            phone: "0821321322",
          },
          type: "MOBIL",
          place: "Jakarta Utara",
          price: 147000000,
          arr_image: [ProductImage3, ProductImage3, ProductImage3, ProductImage3],
          arr_info: [
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
          ],
          arr_document: [
            {
              image: ProductImage3,
              name: "KTP",
            },
            {
              image: ProductImage3,
              name: "SIM",
            },
          ],
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
          notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
        },
        {
          id: "1",
          image: ProductImage1,
          product_type: "normal",
          title: "WULING CORTEZ 1.5 S T LUX",
          seller: {
            name: "Amanah Decoration supplier interior Dan exsterior",
            address: "Jl. Semenanjung Utara No. 212 A, Jakarta Utara No. Telp 08123129, 0821321322 ",
            phone: "0821321322",
          },
          type: "MOBIL",
          place: "Jakarta Utara",
          price: 147000000,
          arr_image: [ProductImage1, ProductImage1, ProductImage1, ProductImage1],
          arr_info: [
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
          ],
          arr_document: [
            {
              image: ProductImage1,
              name: "KTP",
            },
            {
              image: ProductImage1,
              name: "SIM",
            },
          ],
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
          notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
        },
        {
          id: "1",
          image: ProductImage2,
          product_type: "normal",
          title: "WULING CORTEZ 1.5 S T LUX",
          seller: {
            name: "Amanah Decoration supplier interior Dan exsterior",
            address: "Jl. Semenanjung Utara No. 212 A, Jakarta Utara No. Telp 08123129, 0821321322 ",
            phone: "0821321322",
          },
          type: "MOBIL",
          place: "Jakarta Utara",
          price: 147000000,
          arr_image: [ProductImage2, ProductImage2, ProductImage2, ProductImage2],
          arr_info: [
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
          ],
          arr_document: [
            {
              image: ProductImage2,
              name: "KTP",
            },
            {
              image: ProductImage2,
              name: "SIM",
            },
          ],
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
          notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
        },
        {
          id: "1",
          image: ProductImage3,
          product_type: "normal",
          title: "WULING CORTEZ 1.5 S T LUX",
          seller: {
            name: "Amanah Decoration supplier interior Dan exsterior",
            address: "Jl. Semenanjung Utara No. 212 A, Jakarta Utara No. Telp 08123129, 0821321322 ",
            phone: "0821321322",
          },
          type: "MOBIL",
          place: "Jakarta Utara",
          price: 147000000,
          arr_image: [ProductImage3, ProductImage3, ProductImage3, ProductImage3],
          arr_info: [
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
            {
              name: "kondisi",
              value: "bagus",
            },
          ],
          arr_document: [
            {
              image: ProductImage3,
              name: "KTP",
            },
            {
              image: ProductImage3,
              name: "SIM",
            },
          ],
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
          notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
        },
      ],
    }
  },
  watch: {
    arr_factor(val){
      this.$emit('onChangeArrFactor', val)
    },
  },
  created(){
    this.base = new Base()

    if(this.$route.query.search != null){
      this.search = this.$route.query.search
      this.location_id = this.$route.query.location_id
      this.product_type_id = this.$route.query.product_type_id
    }
    this.arr_factor = [true,]
  },
  methods: {
    toDetail(index){
      var product = this.arr_product[index]
      
      window.localStorage.setItem('product', JSON.stringify(product))
      window.location.href = "/product/detail?id=" + product.id
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
      if(this.location_id === "")
        this.base.show_error(this.$t('location_empty'))
      else if(this.product_type_id === "")
        this.base.show_error(this.$t('product_type_empty'))
      else if(this.search === "")
        this.base.show_error(this.$t('name_empty'))
      else{
        location.href = `/search?location_id=${this.location_id}&product_type_id=${this.product_type_id}&search=${this.search}`
      }
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
    async get_product(){
      var response = await this.base.request(this.base.url_api + `/product?is_publish=1&city_id=${this.location_id}&product_type_id=${this.product_type_id}&search=${this.search}&sort=${this.sort}`)

      if(response != null){
        if(response.status === "success"){
          for(let product of response.data){
            product.image = this.base.host + "/media/product?file_name=" + product.file_name
            product.place = product.city.name
            product.title = product.name
            product.type = product.product_type.name
            product.seller.name = product.vendor
          }
          this.arr_product = response.data
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
