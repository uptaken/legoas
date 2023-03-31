<template>
  <div class="custom-navbar-padding-right custom-navbar-padding-left d-flex flex-column align-items-center">
    <div class="footer-download-image1 text-left">
      <div class="position-relative" style="margin-top: 3.8rem;">
        <div class="d-flex">
          <p class="mb-0 navigation text-primary mr-3" @click="onGoBack()" style="cursor: pointer;"><font-awesome-icon icon="fa-solid fa-chevron-left"/></p>
          <p class="mb-0 navigation">{{ $t('product') }}</p>
          <p class="mb-0 navigation">&nbsp;/&nbsp;</p>
          <p class="mb-0 navigation navigation-now">{{ $t('detail_product') }}</p>
        </div>
      </div>

      <div class="" style="padding-top: 5.6rem; padding-bottom: 11.5rem;">
        <div class="row">
          <Transition name="definition-image1">
            <div class="col-12 col-lg-6 detail-product-main-card-left" v-show="flag.detailProductImage1Flag">
              <div id="detail-product-image" :style="{height: detail_product_image_height > 0 ? (detail_product_image_height + 'px') : 'auto'}" class=" text-center">
                <Transition name="detail-product-image">
                  <img :src="selected_image" style="height: 17.25rem" v-show="image_flag"/>
                </Transition>
              </div>
              <div class="mt-2" v-if="product.arr_image.length > 1">
                <VueSlickCarousel v-bind="slick_setting">
                  <div v-for="(image, index) in product.arr_image" :key="'image' + index" 
                    class="image-slick p-1"
                    @click="onSelectedImage(index)">
                    <img :src="image" style="" class="image-slick-item"/>
                  </div>
                </VueSlickCarousel>
              </div>
            </div>
          </Transition>

          <Transition name="definition-title1">
            <div class="col-12 col-lg-6 mt-5 mt-lg-0 detail-product-main-card-right" v-show="flag.detailProductContent1Flag">
              <div class="h-100 d-flex flex-column justify-content-center align-items-start">
                <div class="px-5 py-2 detail-product-type d-inline-block">{{ product.type }}</div>
                <p class="detail-product-title mb-0 mt-3">{{ product.title }}</p>
                <div class="d-flex align-items-center mt-4">
                  <img src="@/assets/map_icon.png" style="width: .8rem;"/>
                  <p class="ml-1 mb-0 detail-product-info">{{ product.place }}</p>
                </div>
                <p class="detail-product-info mb-0 mt-3">{{ product.seller.address }}</p>
                <p class="mb-0 detail-product-price" style="margin-top: 1.25rem;">Rp. {{ product.price.toLocaleString(base.locale_string) }}</p>
                <div class="detail-product-call d-flex align-items-center" @click="onCallSeller" style="margin-top: 2.1rem; padding: .8rem 2.7rem;">
                  <img src="@/assets/call.png" style="width: 1rem;"/>
                  <p class="ml-2 mb-0 detail-product-call-text">{{ $t('call_more') }}</p>
                </div>
              </div>
            </div>
          </Transition>
        </div>

        <Transition name="definition-content2">
          <div v-show="flag.detailProductDetail1Flag" style="margin-bottom: 15.5rem;">
            <ul class="nav nav-pills detail-product-nav" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="info-tab" data-toggle="tab" data-target="#info" type="button" role="tab" aria-controls="info" aria-selected="true">{{ $t("info_product") }}</button>
              </li>
              <li class="nav-item" :class="{'d-none': product.product_type === 'bulk'}" role="presentation">
                <button class="nav-link" id="description-tab" data-toggle="tab" data-target="#description" type="button" role="tab" aria-controls="description" aria-selected="false">{{ $t("description") }}</button>
              </li>
              <li class="nav-item" :class="{'d-none': product.product_type === 'bulk'}" role="presentation">
                <button class="nav-link" id="document-tab" data-toggle="tab" data-target="#document" type="button" role="tab" aria-controls="document" aria-selected="false">{{ $t("document_product") }}</button>
              </li>
              <li class="nav-item" :class="{'d-none': product.product_type === 'bulk'}" role="presentation">
                <button class="nav-link" id="notes-tab" data-toggle="tab" data-target="#notes" type="button" role="tab" aria-controls="notes" aria-selected="false">{{ $t("notes") }}</button>
              </li>
            </ul>
            <div class="tab-content" style="padding: 3.1rem 5rem;" id="myTabContent">
              <div class="tab-pane fade show active" id="info" role="tabpanel" aria-labelledby="info-tab">
                <div v-if="product.product_type === 'bulk'" class="d-flex flex-column justify-content-center align-items-center w-100">
                  <img src="@/assets/bulk_product.png" style="width: 22rem;"/>
                  <p class="mb-0 detail-product-description mt-5">Download PDF dibawah ini, untuk mengetahui informasi lebih akan Produk terlelang</p>
                  <div class="px-5 py-3 detail-product-call d-flex align-items-center mt-4" @click="onCallSeller" style="margin-top: 2.1rem;">
                    <img src="@/assets/icon_download.png" style="width: 1rem;"/>
                    <p class="ml-2 mb-0 detail-product-call-text">{{ $t('download_pdf') }}</p>
                  </div>
                </div>

                <div v-else>
                  <div class="row" v-if="product.arr_info != null && product.arr_info.length > 0">
                    <div class="col-12 col-lg-6" v-for="(info, index) in product.arr_info" :key="'info' + index">
                      <div class="d-flex justify-content-between detail-product-info-item">
                        <p class="mb-0">{{ info.name }}:</p>
                        <p class="mb-0">{{ info.value }}</p>
                      </div>
                    </div>
                  </div>
                  <div v-else>
                    <p class="mb-0 text-center">No Information</p>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade detail-product-description" id="description" role="tabpanel" aria-labelledby="description-tab">
                <div v-if="product.description != null && product.description !== ''">
                  <div v-html="product.description"></div>
                </div>
                <div v-else>
                  <p class="mb-0 text-center">No Information</p>
                </div>
              </div>
              <div class="tab-pane fade" id="document" role="tabpanel" aria-labelledby="document-tab">
                <div class="row" v-if="product.arr_document != null && product.arr_document.length > 0">
                  <div class="col-12 col-lg-4 mt-3 mt-lg-0" v-for="(document, index) in product.arr_document" :key="'document' + index">
                    <img :src="document.image" width="100%"/>
                    <p class="mb-0 mt-2 detail-product-document-name">{{ document.name }}</p>
                  </div>
                </div>
                <div v-else>
                  <p class="mb-0 text-center detail-product-description">No Information</p>
                </div>
              </div>
              <div class="tab-pane fade detail-product-description" id="notes" role="tabpanel" aria-labelledby="notes-tab">
                <div v-if="product.notes != null && product.notes !== ''">
                  <div v-html="product.notes"></div>
                </div>
                <div v-else>
                  <p class="mb-0 text-center">No Information</p>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script>
import Base from '@/utils/base';

export default {
  components: {
  },
  data(){
    return{
      base: null,
      arr_factor: [false, ],
      id: '',
      selected_image: "",
      selected_image_index: -1,
      detail_product_image_height: 0,
      image_flag: false,
      product: {
        id: "",
        image: null,
        product_type: '',
        title: "",
        seller: {
          name: "",
        },
        type: "",
        place: "",
        price: 0,
        arr_image: [],
        arr_info: [],
        arr_document: [],
        description: '',
        notes: '',
      },
      slick_setting: {
        dots: true,
        arrows: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        touchThreshold: 4,
      },
      flag: {
        detailProductImage1Flag: false,
        detailProductContent1Flag: false,
        detailProductDetail1Flag: false,
      },
      scrollY: 0,
    }
  },
  watch: {
    arr_factor(val){
      this.$emit('onChangeArrFactor', val)
      this.manage_start_animation()
    },
    scrollY(){
      this.manage_start_animation()
    },
    selected_image_index(val){
      var context = this
      if(this.image_flag){
        this.image_flag = false
        setTimeout(() => {
          context.selected_image = this.product.arr_image[val]
          context.image_flag = true
        }, 500)
      }
      else
        this.image_flag = true
    }
  },
  created(){
    this.base = new Base()
    window.addEventListener('scroll', this.handleScroll)
    this.scrollY = 1
    this.selected_image_index = 0
    var context = this
    setTimeout(() => {
      context.detail_product_image_height = window.$('#detail-product-image').innerHeight()
    }, 1000)

    this.id = this.$route.query.id
    // var product = window.localStorage.getItem('product')
    // this.product = JSON.parse(product)
    // this.selected_image = this.product.arr_image[0]
    this.get_product_detail()
  },
  methods: {
    onGoBack(){
      window.history.back()
    },
    handleScroll(){
      this.scrollY = window.scrollY
    },
    manage_start_animation(){
      this.flag.detailProductImage1Flag = this.base.check_start_animation(this.scrollY, this.flag.detailProductImage1Flag, this.arr_factor, 0)
      this.flag.detailProductContent1Flag = this.base.check_start_animation(this.scrollY, this.flag.detailProductContent1Flag, this.arr_factor, 0)
      this.flag.detailProductDetail1Flag = this.base.check_start_animation(this.scrollY, this.flag.detailProductDetail1Flag, this.arr_factor, 50)
    },
    onSelectedImage(index){
      this.selected_image_index = index
    },
    onCallSeller(){

    },
    async get_product_detail(){
      this.isLoading = true

      var data = {
        param: {
          AuctionLotId: this.$route.query.id
        }
      }
      var response = await this.base.request(this.base.url_api2 + `/DetailLotUnit`, "post", data)
      this.$set(this.arr_factor, 0, true)

      if(response != null){
        if(response.data != null){
          response.data.id = response.data.idlot
          var arr_image = []
          var flag = false
          for(let x in response.data.physicalimages){
            arr_image.push(response.data.physicalimages[x])
            if(!flag){
              response.data.image = response.data.imageuri != null ? response.data.imageuri : response.data.physicalimages[x]
              flag = true
            }
          }
          response.data.arr_image = arr_image
          response.data.place = response.data.wrhcity
          response.data.title = response.data.unitname
          response.data.type = response.data.categoryname
          response.data.price = response.data.baseprice
          
          response.data.seller = {
            name: "",
          }
          // response.data.notes = null
          response.data.arr_info = []
          for(let x in response.data.specunit){
            response.data.arr_info.push({
              name: x,
              value: response.data.specunit[x],
            })
          }

          this.product = response.data
          this.selected_image = arr_image.length > 0 ? arr_image[0] : null
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
  .detail-product-nav{
    overflow-x: scroll;
  }
  .detail-product-info-item{
    padding: 0;
  }
}
@media only screen and (min-width: 960px) {
  .detail-product-nav{
    overflow-x: none;
  }
  .detail-product-info-item{
    padding: 0 2.8rem;
  }
  .detail-product-main-card-left{
    padding-right: 1.5rem;
  }
  .detail-product-main-card-right{
    padding-left: 1.5rem;
  }
}

.detail-product-type{
  background-color: $primary;
  border-radius: .8rem;
  color: $white;
  font-size: 1rem;
  line-height: 100%;
  text-align: center;
}
.detail-product-call{
  background-color: $dark;
  color: $white;
  text-align: center;
  border-radius: .8rem;
  cursor: pointer;
}
.detail-product-call-text{
  font-size: .8rem;
  line-height: 100%;
}
.detail-product-title{
  color: $black;
  font-family: poppins-bold;
  font-size: 1.6rem;
  line-height: 120%;
}
.detail-product-info{
  color: $gray6;
  font-size: 1rem;
  line-height: 150%;
}
.detail-product-price{
  color: $primary;
  font-size: 1.5rem;
  line-height: 120%;
  font-family: poppins-bold;
}
.detail-product-nav{
  background-color: $cyan1;
  border-radius: 1rem;
  margin-top: 5.5rem;
  padding: 1rem 2.6rem;
  flex-wrap: nowrap;
  align-items: center;
}
.detail-product-nav .nav-link{
  color: $black2;
  font-family: poppins-regular;
  background-color: transparent;
  text-transform: uppercase;
  padding-left: 2rem !important;
  padding-right: 2rem !important;
}
.detail-product-nav .nav-link.active{
  color: $primary;
  font-family: poppins-bold;
  background-color: transparent;
  text-transform: uppercase;
  padding-left: 2rem !important;
  padding-right: 2rem !important;
}
.image-slick-item{
  width: 100%; 
  height: 100%;
  display: inline-block !important;
}
.image-slick{
  text-align: center;
  cursor: pointer;
}
.detail-product-description{
  font-size: .8rem;
  color: $gray6;
}
.detail-product-document-name{
  color: $black2;
  font-size: 1rem;
}
.detail-product-image-enter-active, .detail-product-image-leave-active{
  transition: all .5s;
}
.detail-product-image-leave-to, .detail-product-image-enter {
  opacity: 0;
}
</style>
