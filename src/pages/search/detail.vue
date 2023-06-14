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
            <div class="col-12 col-md-6 detail-product-main-card-left" v-show="flag.detailProductImage1Flag">
              <div id="detail-product-image" :style="{height: detail_product_image_height > 0 ? (detail_product_image_height + 'px') : 'auto'}" class=" text-center">
                <Transition name="detail-product-image">
                  <div class="container-selected-image">
                    <img :src="selected_image" v-show="image_flag" style="cursor: pointer;" @click="onClickImage(selected_image)"/>
                  </div>
                </Transition>
              </div>
              <div class="mt-2 w-100 d-flex align-items-center" v-if="product.arr_image.length > 1">
                <div class="custom-navigation-card shadow-sm recommendation-slick-left" style="cursor: pointer;" @click="previous_action">
                  <font-awesome-icon icon="fa-solid fa-chevron-left" class="custom-navigation-arrow"/>
                </div>
                <div class="mx-3" style="width: 75%;">
                  <VueSlickCarousel v-bind="slick_setting" ref="carousel">
                    <div v-for="(image, index) in product.arr_image" :key="'image' + index" 
                      class="image-slick p-1"
                      @click="onSelectedImage(index)">
                      <div class="container-image">
                        <img :src="image" style=""/>
                      </div>
                    </div>
                  </VueSlickCarousel>
                </div>
                <div class="custom-navigation-card shadow-sm recommendation-slick-right" style="cursor: pointer;" @click="next_action">
                  <font-awesome-icon icon="fa-solid fa-chevron-right" class="custom-navigation-arrow"/>
                </div>
              </div>
            </div>
          </Transition>

          <Transition name="definition-title1">
            <div class="col-12 col-md-6 mt-5 mt-md-0 detail-product-main-card-right" v-show="flag.detailProductContent1Flag">
              <div class="h-100 d-flex flex-column justify-content-center align-items-start">
                <div class="px-5 py-2 detail-product-type" v-show="product.type != null">
                  <p class="mb-0" style="line-height: 100%; font-size: 1rem; margin-top: .2rem;">{{ product.type }}</p>
                </div>
                <p class="detail-product-title mb-0 mt-3">{{ product.title }}</p>
                <p class="mb-0 detail-product-info" :class="{'d-none': product.unitgrade == null || product.unitgrade == '' || product.product_type === 'bulk'}">Unit Grade: {{ product.unitgrade }}</p>
                <div class="d-flex align-items-center mt-4">
                  <img src="@/assets/calendar_icon.png" style="width: .8rem;"/>
                  <p class="ml-2 mb-0 detail-product-info" style="margin-top: .2rem;">{{ product.eventstartdate }}</p>
                </div>
                <div class="d-flex align-items-center mt-1">
                  <img src="@/assets/clock_icon_bordered.png" style="width: .8rem;"/>
                  <p class="ml-2 mb-0 detail-product-info" style="margin-top: .2rem;">Pk. {{ product.eventstarttime }} WIB</p>
                </div>
                <div class="d-flex align-items-center mt-1">
                  <img src="@/assets/map_icon.png" style="width: .8rem;"/>
                  <p class="ml-2 mb-0 detail-product-info" style="margin-top: .2rem;">{{ product.place }}</p>
                </div>
                <p class="detail-product-info mb-0 mt-3">{{ product.wrhaddr }}</p>
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
              <li class="nav-item" :class="{'d-none': product.arr_section == null || (product.arr_section != null && product.arr_section.length == 0) || product.product_type === 'bulk'}" role="presentation">
                <button class="nav-link" id="section-tab" data-toggle="tab" data-target="#section" type="button" role="tab" aria-controls="section" aria-selected="false">{{ $t("section") }}</button>
              </li>
              <!-- <li class="nav-item" :class="{'d-none': product.product_type === 'bulk'}" role="presentation">
                <button class="nav-link" id="document-tab" data-toggle="tab" data-target="#document" type="button" role="tab" aria-controls="document" aria-selected="false">{{ $t("document_product") }}</button>
              </li> -->
              <li class="nav-item" :class="{'d-none': product.product_type === 'bulk'}" role="presentation">
                <button class="nav-link" id="notes-tab" data-toggle="tab" data-target="#notes" type="button" role="tab" aria-controls="notes" aria-selected="false">{{ $t("notes") }}</button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="info" role="tabpanel" aria-labelledby="info-tab">
                <div v-if="product.product_type === 'bulk'" class="d-flex flex-column justify-content-center align-items-center w-100">
                  <img src="@/assets/bulk_product.png" style="width: 22rem;"/>
                  <p class="mb-0 detail-product-description mt-5">Download PDF dibawah ini, untuk mengetahui informasi lebih akan Produk terlelang</p>
                  <div class="px-5 py-3 detail-product-call d-flex align-items-center mt-4" @click="onDownloadPDF" style="margin-top: 2.1rem;">
                    <img src="@/assets/icon_download.png" style="width: 1rem;"/>
                    <p class="ml-2 mb-0 detail-product-call-text" style="margin-top: .2rem;">{{ $t('download_pdf') }}</p>
                  </div>
                </div>

                <div v-else>
                  <div class="row" v-if="product.arr_info != null && product.arr_info.length > 0">
                    <div class="col-12 col-md-6" v-for="(info, index) in product.arr_info" :key="'info' + index">
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
              <div class="tab-pane fade" id="section" role="tabpanel" aria-labelledby="section-tab">
                <div class="row">
                  <div class="col-12 col-md-5 d-block d-md-none" v-if="product.urlCarInspectionResult != null && product.urlCarInspectionResult !== ''">
                    <!-- <p class="mb-0">{{ $t('inspection_result') }}</p> -->
                    <img :src="product.urlCarInspectionResult" style="width: 100%; cursor: pointer;" @click="onClickImage(product.urlCarInspectionResult)"/>
                  </div>

                  <div class="col-12" :class="{'col-md-7': product.urlCarInspectionResult != null && product.urlCarInspectionResult !== '', 'col-md-12': product.urlCarInspectionResult == null}" v-if="product.arr_section != null && product.arr_section.length > 0">
                    <div class="row">
                      <div class="col-6 col-md-4 mb-3" v-for="(section, index) in product.arr_section" :key="'section' + index">
                        <div class="section-breakdown-blue-card p-3 text-center" :class="{'first-section-breakdown-blue-card': index == 0, 'section-breakdown-blue-card': index > 0, }">
                          <p class="mb-0 section-description">{{ section.name }}</p>
                          <div class="mb-0 section-title d-inline-block">{{ section.value }}</div>
                        </div>
                        <!-- <div class="d-flex justify-content-between detail-product-section-item">
                          <p class="mb-0">{{ section.name }}:</p>
                          <p class="mb-0">{{ section.value }}</p>
                        </div> -->
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-6 col-md-4 mb-3" v-for="(legend, index) in arr_section_legend" :key="'sectionLegend' + index">
                        <div class="p-3 text-center section-legend-card" style="">
                          <p class="mb-0 section-legend-desc" style="margin-top: .2rem;"><span class="section-legend">{{ legend.id }}</span>: {{ legend.name }}</p>
                        </div>
                        <!-- <div class="d-flex justify-content-between detail-product-section-item">
                          <p class="mb-0">{{ section.name }}:</p>
                          <p class="mb-0">{{ section.value }}</p>
                        </div> -->
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-5 d-none d-md-block" v-if="product.urlCarInspectionResult != null && product.urlCarInspectionResult !== ''">
                    <!-- <p class="mb-0">{{ $t('inspection_result') }}</p> -->
                    <img :src="product.urlCarInspectionResult" style="width: 100%; cursor: pointer;" @click="onClickImage(product.urlCarInspectionResult)"/>
                  </div>
                  <!-- <div v-else>
                    <p class="mb-0 text-center">No Information</p>
                  </div> -->
                </div>
              </div>
              <div class="tab-pane fade" id="document" role="tabpanel" aria-labelledby="document-tab">
                <div class="row" v-if="product.arr_document != null && product.arr_document.length > 0">
                  <div class="col-12 col-md-4 mt-3 mt-md-0" v-for="(document, index) in product.arr_document" :key="'document' + index">
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
    <ImageDetailModal :selected_image="selected_image_detail" @onSelectedImage="(index) => onSelectedImage(index)"/>
  </div>
</template>

<script>
import Base from '@/utils/base';

import ImageDetailModal from '@/layout/image_detail_modal.vue';

export default {
  components: {
    'ImageDetailModal': ImageDetailModal,
  },
  data(){
    return{
      base: null,
      arr_factor: [false, ],
      id: '',
      selected_image: "",
      selected_image_detail: "",
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
      arr_section_legend: [
        {
          id: 'R',
          name: "Retak",
        },
        {
          id: 'P',
          name: "Pecah",
        },
        {
          id: 'B',
          name: "Baret",
        },
        {
          id: 'Y',
          name: "Penyok",
        },
        {
          id: 'K',
          name: "Karat",
        },
        {
          id: 'U',
          name: "Rusak",
        },
      ],
      slick_setting: {
        dots: false,
        arrows: false,
        focusOnSelect: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        touchThreshold: 4,
        // variableWidth: true,
        // centerMode: true,
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
    onClickImage(image){
      this.selected_image_detail = image
      window.$('#image_detail_modal').modal('show')
      // window.open(this.selected_image, "_blank")
    },
    previous_action(){
      this.$refs.carousel.prev()
    },
    next_action(){
      this.$refs.carousel.next()
    },
    onGoBack(){
      window.history.go(-1)
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
      window.location.href = "https://wa.me/+6281283228292"
    },
    async onDownloadPDF(){
      window.open(this.base.url_api2 + `/File/GetUnitInspectionResult/${this.$route.query.id}`, '_blank')
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
          response.data.product_type = response.data.unitcount > 1 ? 'bulk' : ''
          response.data.notes = response.data.notes != null ? response.data.notes.replace(/\n/g, "</br>").replace(/\\r/g, "</br>") : ''
          response.data.description = response.data.description != null ? response.data.description.replace(/\\n/g, "</br>").replace(/\\r/g, "</br>") : ''
          
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

          response.data.arr_section = []
          for(let x in response.data.sectionscore){
            response.data.arr_section.push({
              name: x,
              value: response.data.sectionscore[x],
            })
          }
          // console.log(response.data)

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
@media only screen and (max-width: 720px) {
  .detail-product-nav{
    overflow-x: scroll;
  }
  .detail-product-info-item{
    padding: 0;
  }
  .container-selected-image{
    position: relative;
    width: 100%;
    height: 15rem;
    display: inline-block;
  }
  .tab-content{
    padding: 3.1rem 0;
  }
  // .container-image {
  //   height: 12rem;
  // }
}
@media only screen and (min-width: 720px) {
  .detail-product-nav{
    overflow-x: none;
  }
  .detail-product-info-item{
    padding: 0 ;
  }
  .detail-product-main-card-left{
    padding-right: 1.5rem;
  }
  .detail-product-main-card-right{
    padding-left: 1.5rem;
  }
  .container-selected-image{
    position: relative;
    height: 20rem;
    width: 100%;
  }
  .tab-content{
    padding: 3.1rem 5rem;
  }
  // .container-image {
  //   height: 15rem;
  // }
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
  margin-top: .2rem;
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
.container-image {
  position: relative;
  width: 100%; /* The size you want */
  aspect-ratio: 4 / 3;
}
// .container-image:after {
//   content: "";
//   display: block;
//   padding-bottom: 100%; /* The padding depends on the width, not on the height, so with a padding-bottom of 100% you will get a square */
// }
.container-selected-image img{
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
}
.container-image img {
  position: absolute; /* Take your picture out of the flow */
  top: 0;
  bottom: 0;
  left: 0;
  right: 0; /* Make the picture taking the size of it's parent */
  width: 100%; /* This if for the object-fit */
  height: 100%; /* This if for the object-fit */
  object-fit: cover; /* Equivalent of the background-size: cover; of a background-image */
  object-position: center;
  border-radius: 1rem;
}
.image-slick-item{
  width: 100%; 
  height: 5rem;
  border-radius: 1rem;
  object-fit: cover;
  display: inline-block !important;
}
.image-slick{
  text-align: center;
  cursor: pointer;
}
.detail-product-description{
  font-size: 1rem;
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
.section-description{
  font-size: .5rem;
}
.section-title{
  line-height: 100%;
  padding-top: .2rem;
  font-family: poppins-bold;
}
.section-legend-card{
  border-radius: .8rem;
  border: 1px solid $gray18;
}
.section-legend{
  color: $red1;
}
.section-legend-desc{
  color: $gray18;
  font-size: .8rem;
}
.section-breakdown-blue-card{
  background-color: $blue3;
  color: $blue4;
  border-radius: .8rem;
}
.first-section-breakdown-blue-card{
  background-color: $blue4;
  color: $white;
  border-radius: .8rem;
}
</style>
