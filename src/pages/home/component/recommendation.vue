<template>
  <div class="custom-navbar-padding-right custom-navbar-padding-left my-5 d-inline-block w-100 text-center">
    <div style="width: 100%;">
      <Transition name="recommendation-title1">
        <p class="m-0 why-title text-center" v-show="recommendationTitle1Flag">{{ $t("recommendation") }}</p>
      </Transition>
      <Transition name="recommendation-title2">
        <p class="mb-0 why-title2 text-center mt-3" v-show="recommendationTitle2Flag">{{ $t("recommendation_list") }}</p>
      </Transition>
    </div>

    <Transition name="recommendation-title1">
      <div v-show="recommendationTitle1Flag" v-if="arr_car.length > 0" class="testimony-slick text-left d-inline-block" style="margin-top: 3.375rem; ">
        <div class="position-relative mx-5 mx-lg-0">
          <div class="custom-navigation-card shadow-sm position-absolute recommendation-slick-left" style="z-index: 1; top: 50%;" @click="previous_action">
            <font-awesome-icon icon="fa-solid fa-chevron-left" class="custom-navigation-arrow"/>
          </div>
          <div>
            <VueSlickCarousel v-bind="slick_setting" ref="carousel">
              <div v-for="(car, index) in arr_car" :key="index" class="px-1 px-lg-0">
                <RecommendationItem :data="car" @onClick="toDetail(index)" :index="index" :total_data="arr_car.length" />
              </div>
            </VueSlickCarousel>
          </div>
          <div class="custom-navigation-card shadow-sm position-absolute recommendation-slick-right" style="z-index: 1; top: 50%;" @click="next_action">
            <font-awesome-icon icon="fa-solid fa-chevron-right" class="custom-navigation-arrow"/>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import Base from '@/utils/base';

import RecommendationItem from '@/pages/home/component/recommendation_item.vue'

import NoImage from '@/assets/no_image.png';
// import ProductImage1 from '@/assets/product_image1.png';
// import ProductImage2 from '@/assets/product_image2.png';
// import ProductImage3 from '@/assets/product_image3.png';

export default {
  components: {
    'RecommendationItem': RecommendationItem,
  },
  props: ['recommendationTitle1Flag', 'recommendationTitle2Flag', ],
  data(){
    return{
      base: null,
      slick_setting: {
        dots: true,
        arrows: false,
        focusOnSelect: true,
        infinite: true,
        rows: 1,
        speed: 500,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 100,
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              touchThreshold: 100,
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      },
      arr_car: [
        // {
        //   id: "1",
        //   image: ProductImage1,
        //   title: "WULING CORTEZ 1.5 S T LUX",
        //   seller: {
        //     name: "Amanah Decoration supplier interior Dan exsterior",
        //     address: "Jl. Semenanjung Utara No. 212 A, Jakarta Utara No. Telp 08123129, 0821321322 ",
        //     phone: "0821321322",
        //   },
        //   type: "MOBIL",
        //   place: "Jakarta Utara",
        //   price: 147000000,
        //   arr_image: [ProductImage1, ProductImage1, ProductImage1, ProductImage1],
        //   arr_info: [
        //     {
        //       name: "kondisi",
        //       value: "bagus",
        //     },
        //     {
        //       name: "kondisi",
        //       value: "bagus",
        //     },
        //     {
        //       name: "kondisi",
        //       value: "bagus",
        //     },
        //     {
        //       name: "kondisi",
        //       value: "bagus",
        //     },
        //     {
        //       name: "kondisi",
        //       value: "bagus",
        //     },
        //     {
        //       name: "kondisi",
        //       value: "bagus",
        //     },
        //   ],
        //   arr_document: [
        //     {
        //       image: ProductImage1,
        //       name: "KTP",
        //     },
        //     {
        //       image: ProductImage1,
        //       name: "SIM",
        //     },
        //   ],
        //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
        //   notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
        // },
        // {
        //   id: "1",
        //   image: ProductImage2,
        //   title: "WULING CORTEZ 1.5 S T LUX",
        //   seller: {
        //     name: "Amanah Decoration supplier interior Dan exsterior",
        //     address: "Jl. Semenanjung Utara No. 212 A, Jakarta Utara No. Telp 08123129, 0821321322 ",
        //     phone: "0821321322",
        //   },
        //   type: "MOBIL",
        //   place: "Jakarta Utara",
        //   price: 147000000,
        //   arr_image: [ProductImage2, ProductImage1, ProductImage3, ProductImage2],
        //   arr_info: [
        //     {
        //       name: "kondisi",
        //       value: "bagus",
        //     },
        //     {
        //       name: "kondisi",
        //       value: "bagus",
        //     },
        //     {
        //       name: "kondisi",
        //       value: "bagus",
        //     },
        //     {
        //       name: "kondisi",
        //       value: "bagus",
        //     },
        //     {
        //       name: "kondisi",
        //       value: "bagus",
        //     },
        //     {
        //       name: "kondisi",
        //       value: "bagus",
        //     },
        //   ],
        //   arr_document: [
        //     {
        //       image: ProductImage2,
        //       name: "KTP",
        //     },
        //     {
        //       image: ProductImage2,
        //       name: "SIM",
        //     },
        //   ],
        //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
        //   notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
        // },
        // {
        //   id: "1",
        //   image: ProductImage3,
        //   title: "WULING CORTEZ 1.5 S T LUX",
        //   seller: {
        //     name: "Amanah Decoration supplier interior Dan exsterior",
        //     address: "Jl. Semenanjung Utara No. 212 A, Jakarta Utara No. Telp 08123129, 0821321322 ",
        //     phone: "0821321322",
        //   },
        //   type: "MOBIL",
        //   place: "Jakarta Utara",
        //   price: 147000000,
        //   arr_image: [ProductImage3, ProductImage3, ProductImage3, ProductImage3],
        //   arr_info: [
        //     {
        //       name: "kondisi",
        //       value: "bagus",
        //     },
        //     {
        //       name: "kondisi",
        //       value: "bagus",
        //     },
        //     {
        //       name: "kondisi",
        //       value: "bagus",
        //     },
        //     {
        //       name: "kondisi",
        //       value: "bagus",
        //     },
        //     {
        //       name: "kondisi",
        //       value: "bagus",
        //     },
        //     {
        //       name: "kondisi",
        //       value: "bagus",
        //     },
        //   ],
        //   arr_document: [
        //     {
        //       image: ProductImage3,
        //       name: "KTP",
        //     },
        //     {
        //       image: ProductImage3,
        //       name: "SIM",
        //     },
        //   ],
        //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
        //   notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus urna et pharetra pharetra massa massa ultricies mi. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst. Platea dictumst vestibulum rhoncus est. Hac habitasse platea dictumst quisque. Aliquam purus sit amet luctus venenatis lectus magna. Urna cursus eget nunc scelerisque viverra mauris in. Interdum varius sit amet mattis vulputate. Sed nisi lacus sed viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Tempor nec feugiat nisl pretium. Libero id faucibus nisl tincidunt eget nullam. Eu mi bibendum neque egestas congue quisque egestas diam in.',
        // },
      ],
      isLoading: true,
    }
  },
  watch: {
    arr_car(val){
      this.$emit('onChangeArr', val)

      // if(val.length > 0)
      //   setTimeout(() => {
      //     window.$('button.slick-prev')
      //     window.$('button.slick-prev').html(`
      //       <p class="slick-nav mb-0" style="height: 2rem; width: 2rem">
      //         <
      //       </p>
      //     `)
      //     window.$('button.slick-next').html(`
      //       <p class="slick-nav mb-0" style="height: 2rem; width: 2rem">
      //         >
      //       </p>
      //     `)
      //   }, 1000)
      
    },
    isLoading(val){
      this.$emit("onLoading", val, 3)
    },
  },
  created(){
    this.base = new Base()

    this.get_product()

    
  },
  methods:{
    toDetail(index){
      var product = this.arr_car[index]
      
      window.localStorage.setItem('product', JSON.stringify(product))
      window.location.href = "/product/detail?id=" + product.idlot
    },
    previous_action(){
      this.$refs.carousel.prev()
    },
    next_action(){
      this.$refs.carousel.next()
    },
    async get_product(){
      var response = await this.base.request(this.base.url_api2 + `/RecomUnit`)
      this.isLoading = false

      if(response != null){
        if(response.status_code === "00"){
          for(let product of response.data){
            product.id = product.idlot
            product.image = product.imageuri != null ? product.imageuri : NoImage
            product.no_image = product.imageuri == null
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
          this.arr_car = response.data

          
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
@media only screen and (max-width: 960px) {
  .recommendation-slick-left{
    left: -3rem;
  }
  .recommendation-slick-right{
    right: -3rem;
  }
}
@media only screen and (min-width: 960px) {
  .recommendation-slick-left{
    left: -4rem;
  }
  .recommendation-slick-right{
    right: -4rem;
  }
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
// button.slick-prev:before, button.slick-next:before {
//   background-color: red !important;
// }
.slick-nav{
  color: $gray15 !important;
}
// .testimony-slick .slick-prev::before, .testimony-slick .slick-next::before{
  // color: white !important;
  // background-color: $gray15 !important;
  // font-size: 2rem;
  // content: none;
  
// }

// .testimony-slick .slick-prev, .testimony-slick .slick-next{
//   // background-color: white !important;
//   background: white !important;
//   // color: white !important;
//   width: auto;
//   height: auto;
  
// }
.testimony-slick .slick-prev{
  margin-left: -2rem;
}
.testimony-slick .slick-next{
  margin-right: -2rem;
}
</style>
