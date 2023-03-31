<template>
  <div class="custom-navbar-padding-right custom-navbar-padding-left d-flex flex-column align-items-center">
    <Transition name="testimony-title1">
      <p class="m-0 why-title text-center" v-show="testimonyTitle1Flag">{{ $t("testimony") }}</p>
    </Transition>
    <Transition name="testimony-title2">
      <p class="mb-0 why-title2 text-center mt-3" v-show="testimonyTitle2Flag">{{ $t("testimony_title") }}</p>
    </Transition>

    <Transition name="testimony-content">
      <div v-show="testimonyTitle1Flag" class="testimony-slick" style="margin-top: 6rem; ">
        <div class="">
          <VueSlickCarousel v-bind="slick_setting">
            <div v-for="(testimony, index) in arr_testimony" :key="index">
              <TestimonyItem :data="testimony" :index="index" :total_data="arr_testimony.length" />
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import Base from '@/utils/base';

import TestimonyItem from '@/pages/home/component/testimony_item.vue'

import TestimonyImage from '@/assets/testimony.png';

export default {
  components: {
    'TestimonyItem': TestimonyItem,
  },
  props: ['testimonyTitle1Flag', 'testimonyTitle2Flag', ],
  data(){
    return{
      base: null,
      isLoading: true,
      slick_setting: {
        dots: true,
        arrows: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        touchThreshold: 5,
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]
      },
      arr_testimony: [
        {
          id: "1",
          image: TestimonyImage,
          testimony: "Transaksi kedua saya di LEGOAS",
          testimony_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
          testimony_user: "Jane Smith",
          testimony_user_description: "Pelanggan cabang Jakarta Utara",
        },
        {
          id: "1",
          image: TestimonyImage,
          testimony: "Transaksi kedua saya di LEGOAS",
          testimony_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
          testimony_user: "Jane Smith",
          testimony_user_description: "Pelanggan cabang Jakarta Utara",
        },
        {
          id: "1",
          image: TestimonyImage,
          testimony: "Transaksi kedua saya di LEGOAS",
          testimony_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
          testimony_user: "Jane Smith",
          testimony_user_description: "Pelanggan cabang Jakarta Utara",
        },
        {
          id: "1",
          image: TestimonyImage,
          testimony: "Transaksi kedua saya di LEGOAS",
          testimony_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
          testimony_user: "Jane Smith",
          testimony_user_description: "Pelanggan cabang Jakarta Utara",
        },
      ],
    }
  },
  watch: {
    isLoading(val){
      this.$emit("onLoading", val, 1)
    },
  },
  created(){
    this.base = new Base()
    this.get_testimony()
  },
  methods:{
    async get_testimony(){
      var response = await this.base.request(this.base.url_api + "/testimony/all?is_publish=1")
      this.isLoading = false

      if(response != null){
        if(response.status === "success"){
          for(let testimony of response.data){
            testimony.image = this.base.host + "/media/testimony?file_name=" + testimony.file_name
            testimony.testimony = testimony.title
            testimony.testimony_description = testimony.content
            testimony.testimony_user = testimony.user_name
            testimony.testimony_user_description = testimony.user_description
          }
          this.arr_testimony = response.data
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
@media only screen and (max-width: 960px) {
  .testimony-slick{
    width: 100%;
    padding: 0 .75rem;
  }
}
@media only screen and (min-width: 960px) {
  .testimony-slick{
    width: 57rem;
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

.testimony-title1-enter-active, .testimony-title1-leave-active{
  transition: all 2s;
}
.testimony-title1-leave-to, .testimony-title1-enter {
  transform: translateY(-10rem);
  opacity: 0;
}
.testimony-title2-enter-active, .testimony-title2-leave-active{
  transition: all 2s;
}
.testimony-title2-leave-to, .testimony-title2-enter {
  transform: translateY(-10rem);
  opacity: 0;
}
.testimony-content-enter-active, .testimony-content-leave-active{
  transition: all 2s;
}
.testimony-content-leave-to, .testimony-content-enter {
  transform: translateX(10rem);
  // margin-bottom: 5rem !important;
  opacity: 0;
}
</style>
