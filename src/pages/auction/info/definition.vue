<template>
  <div class="custom-navbar-padding-right custom-navbar-padding-left">
    <div class="position-relative px-5 mt-5">
      <div class="d-flex">
        <p class="mb-0 navigation">{{ $t('auction_info') }}</p>
        <p class="mb-0 navigation">&nbsp;/&nbsp;</p>
        <p class="mb-0 navigation navigation-now">{{ $t('auction_definition') }}</p>
      </div>
      <p class="mb-0 general-title">{{ $t('auction_definition') }}</p>
    </div>

    <div class="p-5 w-100">
      <div class="mt-3 d-flex justify-content-center align-items-center w-100">
        <Transition name="definition-image1">
          <div class="w-50 d-inline-block" v-show="flag.definitionImage1Flag">
            <img src="@/assets/why_choose_us.png" width="100%"/>
          </div>
        </Transition>
        <Transition name="definition-title1">
          <div class="w-50 d-inline-block" v-show="flag.definitionTitle1Flag">
            <p class="mb-0 title-section">Apa itu <label class="custom-title">Lelang</label> ?</p>
            <p class="mb-0 content-section">
              Lelang adalah proses membeli dan menjual barang atau jasa dengan cara menawarkan kepada penawar, peserta lelang memberikan penawaran harga lebih tinggi, dan kemudian barang terjual kepada penawar harga tertinggi.
            </p>
          </div>
        </Transition>
      </div>

      <div class="mt-5 w-100">
        <Transition name="definition-title2">
          <p class="mb-0 title-section" v-show="flag.definitionTitle2Flag">Sejarah <label class="custom-title">Lelang</label> Indonesia</p>
        </Transition>
        <Transition name="definition-content2">
          <p class="mb-0 content-section" v-show="flag.definitionContent2Flag">
            Sejarah lelang di Indonesia dimulai oleh East India Company yang menyelenggarakan lelang untuk teh (1750) dah masih bertahan sampai sekarang di London. Ada juga lelang tembakau Indonesia yang masih bertahan di Bremen, Jerman. Sehingga dunia lelang sebenarnya tidak terlalu asing di Indonesia. Hanya saja keterbatasan pelaksanaan lelang saja yang membuat proses lelang di Indonesia tidak terlalu dikenal.

  Saat ini lelang di Indonesia digunakan sebagai alternatif penjualan kendaraan, property, dan komoditi. Pada dasarnya semua barang dapat dilakukan lelang. Ketika ada kebutuhan atas penjualan dengan cepat dan harga tertinggi dan atau penjualan dalam skala banyak, maka penjualan melalui lelang adalah cara yang paling tepat.
          </p>
        </Transition>
      </div>

      <div class="mt-5 w-100">
        <Transition name="definition-title3">
          <p class="mb-0 title-section" v-show="flag.definitionTitle3Flag">Pelaksanaan <label class="custom-title">Lelang</label></p>
        </Transition>
        <Transition name="definition-content3">
          <p class="mb-0 content-section" v-show="flag.definitionContent3Flag">
            Pelaksanaan lelang yang dilakukan biasanya saat ini adalah dengan menghadiri/datang ke tempat lelang, melakukan proses administrasi yang rumit, dan mengikuti pelaksanaan lelang di lokasi dengan konsep mengacungkan tangan/NPL (nomor peserta lelang) untuk menunjukkan keikutsertaannya.

  Legoas mengadakan lelang dengan berbasis digital membuat pelaksanaan lelang tidak dibatasi jarak dan waktu. Peserta lelang dapat melihat unit, mendaftar, dan mengikuti lelang melalui website dan atau mobile apps milik Legoas. Peserta dapat mengikuti lelang dimanapun dan tanpa mengganggu aktifitas utamanya untuk mendapatkan produk/barang sesuai keinginannya. Dengan system online ini pula lah, peserta tidak perlu diburu oleh waktu untuk hadir ke tempat lelang.
          </p>
        </Transition>
      </div>

      <div class="mt-5 w-100">
        <img src="@/assets/definition_bottom.png" width="100%"/>
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
      scrollY: 0,
      flag: {
        definitionImage1Flag: false,
        definitionTitle1Flag: false,
        definitionTitle2Flag: false,
        definitionContent2Flag: false,
        definitionTitle3Flag: false,
        definitionContent3Flag: false,
      },
      
    }
  },
  watch: {
    scrollY(val){
      this.flag.definitionImage1Flag = val >= this.base.responsive_scroll_threshold(0)
      this.flag.definitionTitle1Flag = val >= this.base.responsive_scroll_threshold(0)
      this.flag.definitionTitle2Flag = val >= this.base.responsive_scroll_threshold(0)
      this.flag.definitionContent2Flag = val >= this.base.responsive_scroll_threshold(0)
      this.flag.definitionTitle3Flag = val >= this.base.responsive_scroll_threshold(300)
      this.flag.definitionContent3Flag = val >= this.base.responsive_scroll_threshold(300)
    },
  },
  created(){
    this.base = new Base()
    window.addEventListener('scroll', this.handleScroll)
    this.scrollY = 1
  },
  methods: {
    handleScroll(){
      this.scrollY = window.scrollY
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
  // margin-bottom: 10rem !important;
  opacity: 0;
}
.definition-title2-enter-active, .definition-title2-leave-active,
.definition-title3-enter-active, .definition-title3-leave-active{
  transition: all 2s;
}
.definition-title2-leave-to, .definition-title2-enter,
.definition-title3-leave-to, .definition-title3-enter {
  margin-left: -10rem !important;
  opacity: 0;
}
.definition-content2-enter-active, .definition-content2-leave-active,
.definition-content3-enter-active, .definition-content3-leave-active{
  transition: all 2s;
}
.definition-content2-leave-to, .definition-content2-enter,
.definition-content3-leave-to, .definition-content3-enter {
  margin-left: 10rem !important;
  opacity: 0;
}
</style>
