<template>
  <div class="custom-navbar-padding-right custom-navbar-padding-left text-center">
    <div class="content-container text-left">
      <div class="position-relative " style="margin-top: 3.8rem;">
        <div class="d-flex">
          <p class="mb-0 navigation">{{ $t('auction_info') }}</p>
          <p class="mb-0 navigation">&nbsp;/&nbsp;</p>
          <p class="mb-0 navigation navigation-now">{{ $t('auction_definition') }}</p>
        </div>
        <p class="mb-0 general-title">{{ $t('auction_definition') }}</p>
      </div>

      <div class="w-100">
        <div class="mt-3 w-100">
          <div class="row">
            <Transition name="definition-image1">
              <div class="col-12 col-md-6" v-show="flag.definitionImage1Flag">
                <div class="d-flex justify-content-center align-items-center">
                  <img :src="image" width="100%"/>
                </div>
              </div>
            </Transition>
            <Transition name="definition-title1">
              <div class="col-12 col-md-6" v-show="flag.definitionTitle1Flag" >
                <div class="d-flex flex-column justify-content-center h-100 mt-3 mt-md-0" v-html="content"></div>
              </div>
            </Transition>
          </div>
        </div>

        <div style="margin-top: 9rem">
          <div class="w-100" :style="{marginTop: '3.3rem'}" v-html="definition_section_content"></div>
          <!-- <div class="w-100" :style="{marginTop: index > 0 ? '3.3rem' : 0}" v-for="(section, index) in arr_section" :key="'section' + index">
            <Transition name="definition-content2">
              <div v-html="section.content" v-show="flag.definitionContent2Flag"></div>
            </Transition>
            <Transition name="definition-title2">
              <p class="mb-0 title-section" v-show="flag.definitionTitle2Flag" v-html="section.title"></p>
            </Transition>
            <Transition name="definition-content2">
              <p class="mb-0 content-section" v-show="flag.definitionContent2Flag"  v-html="section.content"></p>
            </Transition>
          </div> -->
        </div>

        <div class="w-100" style="margin-top: 5.6rem; margin-bottom: 16rem;">
          <img src="@/assets/definition_bottom.png" width="100%"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Base from '@/utils/base';

import Image from '@/assets/why_choose_us.png'

export default {
  components: {
  },
  data(){
    return{
      base: null,
      scrollY: 0,
      arr_factor: [false, false, ],
      title: ``,
      content: `
      <p class="mb-0 title-section">Apa itu <label class="custom-title">Lelang</label> ?</p>
      <p class="mb-0 content-section">Lelang adalah proses membeli dan menjual barang atau jasa dengan cara menawarkan kepada penawar, peserta lelang memberikan penawaran harga lebih tinggi, dan kemudian barang terjual kepada penawar harga tertinggi.</p>
      `,
      image: Image,
      flag: {
        definitionImage1Flag: false,
        definitionTitle1Flag: false,
        definitionTitle2Flag: false,
        definitionContent2Flag: false,
        definitionTitle3Flag: false,
        definitionContent3Flag: false,
      },
      definition_section_content: `
        <div class="mt-5 w-100">
          <p class="mb-0 title-section">Sejarah <label class="custom-title">Lelang</label> Indonesia</p>
          <p class="mb-0 content-section">
          Sejarah lelang di Indonesia dimulai oleh East India Company yang menyelenggarakan lelang untuk teh (1750) dah masih bertahan sampai sekarang di London. Ada juga lelang tembakau Indonesia yang masih bertahan di Bremen, Jerman. Sehingga dunia lelang sebenarnya tidak terlalu asing di Indonesia. Hanya saja keterbatasan pelaksanaan lelang saja yang membuat proses lelang di Indonesia tidak terlalu dikenal.

          Saat ini lelang di Indonesia digunakan sebagai alternatif penjualan kendaraan, property, dan komoditi. Pada dasarnya semua barang dapat dilakukan lelang. Ketika ada kebutuhan atas penjualan dengan cepat dan harga tertinggi dan atau penjualan dalam skala banyak, maka penjualan melalui lelang adalah cara yang paling tepat.
          </p>
        </div>

        <div class="mt-5 w-100">
          <p class="mb-0 title-section">Pelaksanaan <label class="custom-title">Lelang</label></p>
          <p class="mb-0 content-section">
          Pelaksanaan lelang yang dilakukan biasanya saat ini adalah dengan menghadiri/datang ke tempat lelang, melakukan proses administrasi yang rumit, dan mengikuti pelaksanaan lelang di lokasi dengan konsep mengacungkan tangan/NPL (nomor peserta lelang) untuk menunjukkan keikutsertaannya.

          Legoas mengadakan lelang dengan berbasis digital membuat pelaksanaan lelang tidak dibatasi jarak dan waktu. Peserta lelang dapat melihat unit, mendaftar, dan mengikuti lelang melalui website dan atau mobile apps milik Legoas. Peserta dapat mengikuti lelang dimanapun dan tanpa mengganggu aktifitas utamanya untuk mendapatkan produk/barang sesuai keinginannya. Dengan system online ini pula lah, peserta tidak perlu diburu oleh waktu untuk hadir ke tempat lelang.
          </p>
        </div>
      `,
      arr_section: [
        {
          title: ``,
          content: `
          <p class="mb-0 title-section">Sejarah <label class="custom-title">Lelang</label> Indonesia</p>
          <p class="mb-0 content-section">
          Sejarah lelang di Indonesia dimulai oleh East India Company yang menyelenggarakan lelang untuk teh (1750) dah masih bertahan sampai sekarang di London. Ada juga lelang tembakau Indonesia yang masih bertahan di Bremen, Jerman. Sehingga dunia lelang sebenarnya tidak terlalu asing di Indonesia. Hanya saja keterbatasan pelaksanaan lelang saja yang membuat proses lelang di Indonesia tidak terlalu dikenal.

          Saat ini lelang di Indonesia digunakan sebagai alternatif penjualan kendaraan, property, dan komoditi. Pada dasarnya semua barang dapat dilakukan lelang. Ketika ada kebutuhan atas penjualan dengan cepat dan harga tertinggi dan atau penjualan dalam skala banyak, maka penjualan melalui lelang adalah cara yang paling tepat.
          </p>
          `,
        },
        {
          title: ``,
          content: `
          <p class="mb-0 title-section">Pelaksanaan <label class="custom-title">Lelang</label></p>
          <p class="mb-0 content-section">
          Pelaksanaan lelang yang dilakukan biasanya saat ini adalah dengan menghadiri/datang ke tempat lelang, melakukan proses administrasi yang rumit, dan mengikuti pelaksanaan lelang di lokasi dengan konsep mengacungkan tangan/NPL (nomor peserta lelang) untuk menunjukkan keikutsertaannya.

          Legoas mengadakan lelang dengan berbasis digital membuat pelaksanaan lelang tidak dibatasi jarak dan waktu. Peserta lelang dapat melihat unit, mendaftar, dan mengikuti lelang melalui website dan atau mobile apps milik Legoas. Peserta dapat mengikuti lelang dimanapun dan tanpa mengganggu aktifitas utamanya untuk mendapatkan produk/barang sesuai keinginannya. Dengan system online ini pula lah, peserta tidak perlu diburu oleh waktu untuk hadir ke tempat lelang.
          </p>
          `,
        },
      ],
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
  },
  created(){
    this.base = new Base()
    window.addEventListener('scroll', this.handleScroll)
    this.scrollY = 1

    this.get_definition_info()
    this.get_definition_section2()
  },
  methods: {
    handleScroll(){
      this.scrollY = window.scrollY
    },
    manage_start_animation(){
      this.flag.definitionImage1Flag = this.base.check_start_animation(this.scrollY, this.flag.definitionImage1Flag, this.arr_factor, 0)
      this.flag.definitionTitle1Flag = this.base.check_start_animation(this.scrollY, this.flag.definitionTitle1Flag, this.arr_factor, 0)
      this.flag.definitionTitle2Flag = this.base.check_start_animation(this.scrollY, this.flag.definitionTitle2Flag, this.arr_factor, 0)
      this.flag.definitionContent2Flag = this.base.check_start_animation(this.scrollY, this.flag.definitionContent2Flag, this.arr_factor, 0)
      this.flag.definitionTitle3Flag = this.base.check_start_animation(this.scrollY, this.flag.definitionTitle3Flag, this.arr_factor, 300)
      this.flag.definitionContent3Flag = this.base.check_start_animation(this.scrollY, this.flag.definitionContent3Flag, this.arr_factor, 300)
    },
    async get_definition_info(){
      var response = await this.base.request(this.base.url_api + "/info?is_publish=1&type=definition")
      this.$set(this.arr_factor, 0, true)

      if(response != null){
        if(response.status === "success"){
          this.title = response.data.title
          this.content = response.data.content
          this.image = this.base.host + "/media/info?file_name=" + response.data.file_name
        }
        else
          this.base.show_error(response.message)
      }
      else
        this.base.show_error(this.$t('server_error'))
    },
    async get_definition_section(){
      var response = await this.base.request(this.base.url_api + "/section/definition/all?is_publish=1")
      this.$set(this.arr_factor, 1, true)

      if(response != null){
        if(response.status === "success"){
          // for(let definition of response.data){
          //   definition.image = this.base.host + "/media/section/definition?file_name=" + definition.file_name
          // }
          this.arr_section = response.data
        }
        else
          this.base.show_error(response.message)
      }
      else
        this.base.show_error(this.$t('server_error'))
    },
    async get_definition_section2(){
      var response = await this.base.request(this.base.url_api + "/info?is_publish=1&type=definition_section")
      this.$set(this.arr_factor, 1, true)

      if(response != null){
        if(response.status === "success"){
          this.definition_section_content = response.data.content
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
.custom-title{
  color: $primary;
}
.title-section{
  font-size: 2rem;
  font-family: poppins-medium;
}
.content-section{
  color: $gray6;
}
.definition-title1-enter-active, .definition-title1-leave-active{
  transition: all 2s;
}
.definition-title1-leave-to, .definition-title1-enter {
  margin-top: -10rem !important;
  opacity: 0;
}
.definition-image1-enter-active, .definition-image1-leave-active{
  transition: all 2s;
}
.definition-image1-leave-to, .definition-image1-enter {
  transform: translateY(10rem);
  opacity: 0;
}
.definition-title2-enter-active, .definition-title2-leave-active,
.definition-title3-enter-active, .definition-title3-leave-active{
  transition: all 2s;
}
.definition-title2-leave-to, .definition-title2-enter,
.definition-title3-leave-to, .definition-title3-enter {
  transform: translateX(10rem);
  opacity: 0;
}
.definition-content2-enter-active, .definition-content2-leave-active,
.definition-content3-enter-active, .definition-content3-leave-active{
  transition: all 2s;
}
.definition-content2-leave-to, .definition-content2-enter,
.definition-content3-leave-to, .definition-content3-enter {
  transform: translateX(10rem);
  opacity: 0;
}
</style>
