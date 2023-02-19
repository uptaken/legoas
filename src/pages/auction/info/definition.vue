<template>
  <div class="container">
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
        <div class="w-50 d-inline-block">
          <img src="@/assets/why_choose_us.png" width="100%"/>
        </div>
        <div class="w-50 d-inline-block">
          <p class="mb-0 title-section">Apa itu <label class="custom-title">Lelang</label> ?</p>
          <p class="mb-0 content-section">
            Lelang adalah proses membeli dan menjual barang atau jasa dengan cara menawarkan kepada penawar, peserta lelang memberikan penawaran harga lebih tinggi, dan kemudian barang terjual kepada penawar harga tertinggi.
          </p>
        </div>
      </div>

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
    }
  },
  created(){
    this.base = new Base()
  },
  methods: {
    
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
</style>
