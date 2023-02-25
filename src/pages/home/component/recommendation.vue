<template>
  <div class="m-5 d-inline-block" style="width: 70%;">
    <div style="width: 100%; height: 3.6rem;">
      <Transition name="recommendation-title1">
        <p class="m-0 why-title text-center" v-show="recommendationTitle1Flag">{{ $t("recommendation") }}</p>
      </Transition>
      <Transition name="recommendation-title2">
        <p class="mb-0 why-title2 text-center mt-2" v-show="recommendationTitle2Flag">{{ $t("recommendation_list") }}</p>
      </Transition>
    </div>

    <div class="d-flex justify-content-center" style="margin-top: 3.375rem;">
      <div class="row">
        <div v-for="(car, index) in arr_car" :key="index" class="col-12 col-lg-4 mt-3 mt-lg-0">
          <RecommendationItem :data="car" :index="index" :total_data="arr_car.length" />
        </div>
      </div>
    </div>
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
  methods:{
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
  margin-left: -10rem !important;
  opacity: 0;
}
.recommendation-title2-enter-active, .recommendation-title2-leave-active{
  transition: all 2s;
}
.recommendation-title2-leave-to, .recommendation-title2-enter {
  margin-right: -10rem !important;
  opacity: 0;
}
</style>
