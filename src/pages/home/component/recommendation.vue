<template>
  <div class="m-5 d-inline-block">
    <div style="width: 100%;">
      <Transition name="recommendation-title1">
        <p class="m-0 why-title text-center" v-show="recommendationTitle1Flag">{{ $t("recommendation") }}</p>
      </Transition>
      <Transition name="recommendation-title2">
        <p class="mb-0 why-title2 text-center mt-3" v-show="recommendationTitle2Flag">{{ $t("recommendation_list") }}</p>
      </Transition>
    </div>

    <Transition name="recommendation-title1">
      <div v-show="recommendationTitle1Flag">
        <div class="d-flex justify-content-center" style="margin-top: 3.375rem;">
          <div class="row">
            <div v-for="(car, index) in arr_car" :key="index" 
              class="col-12 col-lg-4 mt-3 mt-lg-0" 
              @click="toDetail(index)" 
              style="cursor: pointer;">
              <RecommendationItem :data="car" :index="index" :total_data="arr_car.length" />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import Base from '@/utils/base';

import RecommendationItem from '@/pages/home/component/recommendation_item.vue'

import ProductImage1 from '@/assets/product_image1.png';
import ProductImage2 from '@/assets/product_image2.png';
import ProductImage3 from '@/assets/product_image3.png';

export default {
  components: {
    'RecommendationItem': RecommendationItem,
  },
  props: ['recommendationTitle1Flag', 'recommendationTitle2Flag', ],
  data(){
    return{
      base: null,
      arr_car: [
        {
          id: "1",
          image: ProductImage1,
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
  created(){
    this.base = new Base()
  },
  methods:{
    toDetail(index){
      var product = this.arr_car[index]
      
      window.localStorage.setItem('product', JSON.stringify(product))
      window.location.href = "/product/detail?id=" + product.id
    },
    async get_product(){
      var response = await this.base.request(this.base.url_api + "/product?num_data=3&is_publish=1")

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
.why-title{
  font-family: poppins-light;
  color: $gray5;
}
.why-title2{
  font-family: poppins-medium;
  font-size: 2rem;
  line-height: 110%;
}

.recommendation-title1-enter-active, .recommendation-title1-leave-active{
  transition: all 2s;
}
.recommendation-title1-leave-to, .recommendation-title1-enter {
  transform: translateX(-10rem);
  opacity: 0;
}
.recommendation-title2-enter-active, .recommendation-title2-leave-active{
  transition: all 2s;
}
.recommendation-title2-leave-to, .recommendation-title2-enter {
  transform: translateX(10rem);
  opacity: 0;
}
</style>
