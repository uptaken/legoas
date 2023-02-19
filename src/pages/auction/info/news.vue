<template>
  <div class="container">
    <div class="position-relative px-5 mt-5">
      <div class="d-flex">
        <p class="mb-0 navigation">{{ $t('auction_info') }}</p>
        <p class="mb-0 navigation">&nbsp;/&nbsp;</p>
        <p class="mb-0 navigation navigation-now">{{ $t('auction_news') }}</p>
      </div>
      <p class="mb-0 general-title">{{ $t('auction_news') }}</p>
    </div>

    <div class="p-5 w-100">
      <div class="">
        <p class="mb-0 news-date">{{ $t('news') + " " + date.format('DD MMMM YYYY') }}</p>
        <p class="mb-0 news-title">{{ title }}</p>
      </div>

      <div class="mt-5">
        <img src="@/assets/definition_bottom.png" width="100%"/>
      </div>

      <div class="m-5">
        <p class="news-content">PT. DIGITAL SARANA LEGOAS bekerjasama dengan pejabat lelang kelas II, mengadakan LELANG SUKARELA secara ONLINE (OPEN BIDDING) puluhan unit barang bergerak berbagai merk dan tipe.Terbuka untuk umum dan dapat diikuti oleh siapapun.</p>

        <div>
          <img src="@/assets/news_table.png" width="100%"/>
        </div>

        <p class="news-content">
          Syarat & ketentuan lelang<br/>
          <ol>
            <li>Lelang dilakukan secara online melalui website www.legoas.co.id atau dengan mengunduh via google play dengan mencari kata 'legoas"</li>
            <li>Peserta harus menjadi member terlebih dahulu dan memilih paket uang jaminan berupa token agar dapat mengikuti lelang.</li>
            <li>
              Pilihan uang jaminan adalah sebagai berikut :
              <ol>
                <li>Rp. 2.000.000,- (Dua Juta Rupiah) untuk 1 lot mobi</li>
                <li>Rp. 1.000.000,- (Satu Juta Rupiah) untuk 1 lot motor</li>
                <li>Rp. 500.000,- (Lima Ratus Rupiah) untuk 1 lot non otomotif A</li>
                <li>Rp. 2.500.000,- (Dua Juta Lima Ratus Ribu Rupiah) untuk 1 lot non otomotif B</li>
                <li>Rp. 10.000.000,- (Sepuluh Juta Rupiah) untuk 1 lot non otomotif C</li>
                <li>Rp. 25.000.000,- (Dua Puluh Lima Juta Rupiah) untuk 1 lot non otomotif D</li>
                <li>Rp. 100.000.000,- (Seratus Juta Rupiah) untuk 1 lot non otomotif E</li>
              </ol>
            </li>
            <li>Barang dilelang dalam kondisi sebagaimana apa adanya. Peserta lelang dapat mengakses kondisi kendaraan melalui website dan mobile aplikasi LEGOAS dan yang terafiliasi.</li>
            <li>Penawaran dilakukan secara online dengan kenaikan harga yang sudah ditentukan.</li>
            <li>
              Pemenang lelang wajib membayar harga terbentuk dan uang administrasi dengan nilai sebagai berikut :
              <ol>
                <li>Rp. 2.000.000,- / unit mobil</li>
                <li>Rp. 300.000,- / unit motor</li>
                <li>2% dari Harga Terbentuk atau Minimal Rp. 300.000,- / unit non otomotif</li> 
                <li>2% dari Harga Terbentuk atau Minimal Rp. 300.000,- / unit non otomotif B</li>
                <li>2% dari Harga Terbentuk atau Minimal Rp. 300.000,- / unit non otomotif </li>
                <li>2% dari Harga Terbentuk atau Minimal Rp. 300.000,- / unit non otomotif D</li>
                <li>2% dari Harga Terbentuk atau Minimal Rp. 300.000,- / unit non otomotif E maksimum dibayarkan 3 hari kerja atau dianggap wanprestasi</li>
              </ol>
            </li>
          </ol>

          Selamat mencoba #LELANGBEBASRIBET
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Base from '@/utils/base';
import moment from 'moment';

export default {
  components: {
  },
  data(){
    return{
      base: null,
      date: moment(),
      title: "Jadwal Lelang LEGOAS Januari - Maret 2023",
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
.news-date{
  color: $gray5;
}
.news-title{
  font-family: poppins-medium;
  font-size: 2rem;
}
.news-content{
  color: $gray6;

}
ol{
  padding-left: 1rem;
}
</style>
