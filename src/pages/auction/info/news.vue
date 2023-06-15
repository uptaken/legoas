<template>
  <div class="custom-navbar-padding-right custom-navbar-padding-left text-center">
    <div class="content-container text-left">
      <div class="position-relative" style="margin-top: 3.8rem;">
        <div class="d-flex">
          <p class="mb-0 navigation">{{ $t('auction_info') }}</p>
          <p class="mb-0 navigation">&nbsp;/&nbsp;</p>
          <p class="mb-0 navigation navigation-now">{{ $t('auction_news') }}</p>
        </div>
        <p class="mb-0 general-title">{{ $t('auction_news') }}</p>
      </div>

      <div class="w-100" style="padding-top: 5.1rem; padding-bottom: 17.8rem;">
        <Transition name="news-title">
          <div class="" v-show="flag.newsTitleFlag">
            <p class="mb-0 news-date">{{ $t('news') + " " + date.format('DD MMMM YYYY') }}</p>
            <p class="mb-0 news-title mt-3">{{ title }}</p>
          </div>
        </Transition>

        <Transition name="news-image">
          <div class="" style="margin-top: 3.6rem;" v-show="flag.newsImageFlag && image != null">
            <img :src="image" width="100%"/>
          </div>
        </Transition>

        <Transition name="news-content">
          <div class="mx-0 m-md-5" style="margin-top: 4.5rem;" v-show="flag.newsContentFlag" v-html="content"></div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script>
import Base from '@/utils/base';
import moment from 'moment';

import Image from '@/assets/definition_bottom.jpg';
import Image1 from '@/assets/news_table.png';

export default {
  components: {
  },
  data(){
    return{
      base: null,
      scrollY: 0,
      arr_factor: [false, ],
      flag: {
        newsImageFlag: false,
        newsTitleFlag: false,
        newsContentFlag: false,
      },
      date: moment(),
      title: "Jadwal Lelang LEGOAS Januari - Maret 2023",
      image: Image,
      content: `
        <p class="news-content">PT. DIGITAL SARANA LEGOAS bekerjasama dengan pejabat lelang kelas II, mengadakan LELANG SUKARELA secara ONLINE (OPEN BIDDING) puluhan unit barang bergerak berbagai merk dan tipe.Terbuka untuk umum dan dapat diikuti oleh siapapun.</p>

        <div>
          <img src="${Image1}" width="100%"/>
        </div>

        <div class="news-content">
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
        </div>
      `,
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

    this.get_news_info()
  },
  methods: {
    handleScroll(){
      this.scrollY = window.scrollY
    },
    manage_start_animation(){
      this.flag.newsTitleFlag = this.base.check_start_animation(this.scrollY, this.flag.newsTitleFlag, this.arr_factor, 0)
      this.flag.newsImageFlag = this.base.check_start_animation(this.scrollY, this.flag.newsImageFlag, this.arr_factor, 0)
      this.flag.newsContentFlag = this.base.check_start_animation(this.scrollY, this.flag.newsContentFlag, this.arr_factor, 0)
    },
    async get_news_info(){
      var response = await this.base.request(this.base.url_api + "/news?num_data=1&is_publish=1&type=latest")
      this.$set(this.arr_factor, 0, true)

      if(response != null){
        if(response.status === "success"){
          this.title = response.data.title
          this.content = response.data.content
          this.image = response.data.file_name != null ? this.base.host + "/media/news?file_name=" + response.data.file_name : null
          this.date = moment(response.data.publish_at_format, 'YYYY-MM-DD')
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
.news-date{
  color: $gray5;
  letter-spacing: .2rem;
  line-height: 100%;
  text-transform: uppercase;
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
.news-title-enter-active, .news-title-leave-active,
.news-image-enter-active, .news-image-leave-active,
.news-content-enter-active, .news-content-leave-active{
  transition: all 2s;
}
.news-title-leave-to, .news-title-enter,
.news-image-leave-to, .news-image-enter,
.news-content-leave-to, .news-content-enter {
  transform: translateY(-10rem);
  opacity: 0;
}
</style>
