<template>
  <div class="">
    <div class="custom-navbar-padding-right custom-navbar-padding-left text-center">
      <div class="content-container text-left">
        <div class="position-relative" style="margin-top: 3.8rem;">
          <div class="">
            <div class="d-flex">
              <p class="mb-0 navigation">{{ $t('auction_info') }}</p>
              <p class="mb-0 navigation">&nbsp;/&nbsp;</p>
              <p class="mb-0 navigation navigation-now">{{ $t('auction_how_to') }}</p>
            </div>
            <p class="mb-0 general-title">{{ $t('auction_how_to') }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="w-100" style="margin-top: 7rem; margin-bottom: 14rem;">
      <div class="custom-navbar-padding-right custom-navbar-padding-left text-center" v-show="url_video !== '' && url_video != null">
        <div class="content-container text-left">
          <p class="mb-0 how-to-title">{{ $t('watch_how_to_video') }}</p>
        </div>
      </div>

      <div class="custom-navbar-padding-right custom-navbar-padding-left text-center mt-5" v-show="url_video !== '' && url_video != null" :class="{'d-none': url_video == null || url_video == ''}">
        <div class="content-container text-left">
          <div class="">
            <iframe  width="420" height="315" style="max-width: 100%;" :src="url_video"></iframe>
          </div>
        </div>
      </div>

      <div class="participant-container" id="participant-container">
        <div class="custom-navbar-padding-right custom-navbar-padding-left text-center">
          <div class="content-container text-left">
            <HowToItem :title='`<label class="text-primary">` + $t("participant") + `</label> ` + $t("auction")' :arr="arr_participant" :howToTitle1Flag="flag.howToParticipantTitle1Flag" :image="image_participant"/>
          </div>
        </div>
      </div>

      <div class="seller-container">
        <div class="custom-navbar-padding-right custom-navbar-padding-left text-center">
          <div class="content-container text-left">
            <HowToItem :title='`<label class="text-primary">` + $t("seller") + `</label> ` + $t("product")' :arr="arr_seller" :howToTitle1Flag="flag.howToSellerTitle1Flag" :image="image_seller"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Base from '@/utils/base';
import moment from 'moment';

import HowToItem1 from '@/assets/how_to_icon.png'
import HowToItem2 from '@/assets/how_to_icon_2.png'
import HowToItem from '@/pages/auction/component/how_to_item.vue'
// import { url } from 'inspector';

export default {
  components: {
    'HowToItem': HowToItem,
  },
  data(){
    return{
      base: null,
      scrollY: 0,
      arr_factor: [false, false, ],
      url_video: '',
      image_participant: HowToItem1,
      image_seller: HowToItem2,
      flag: {
        howToParticipantTitle1Flag: false,
        howToSellerTitle1Flag: false,
      },
      date: moment(),
      title: "Jadwal Lelang LEGOAS Januari - Maret 2023",
      arr_participant: [
        {
          id: "1",
          title: "Media Lelang",
          content: "Seluruh proses pra lelang dan pelaksanaan lelang Legoas sepenuhnya menggunakan mobile apps dan atau website legoas. Sebelum menjadi anggota, peserta harus menyetujui syarat dan ketentuan Legoas.",
        },
        {
          id: "1",
          title: "Jadwal Lelang",
          content: "Peserta dapat melihat jadwal lelang yang akan ditampilkan oleh legoas melalui media website, mobile apps, atau surat kabar.",
        },
        {
          id: "1",
          title: "Daftar Lot",
          content: "Sebelum dilakukan lelang, maka Legoas akan mengeluarkan daftar barang/produk yang akan dilelang dengan jadwal tertentu. Peserta lelang dapat mencari informasi dan memanfaatkan daftar lot ini untuk mendapatkan seluruh informasi dan kondisi pada unit/produk yang diingini.",
        },
        {
          id: "1",
          title: "Melihat Unit",
          content: "Sebelum mengikuti lelang, calon peserta dapat melihat barang/unit yang dilelang sewaktu Open house berjalan pada jam kerja sesuai informasi yang tertera pada setiap jadwal lelang. Akan tetapi biasanya open house dilakukan 2 hari sebelum pelaksanaan lelang. Informasi dan penailain kendaraan juga dapat diperoleh peserta lelang dengan mengakses melalui mobile apps dan atau website Legoas. Penilaian dan keterangan yang ada merupakan informasi. Peserta diharapkan dapat melakukan pengecekan kembali atas unit yang diminati.",
        },
        {
          id: "1",
          title: "Pendaftaran keanggotaan",
          content: `Pendaftaran keanggotaan
Jika ada barang/produk yang diminati, maka calon peserta dapat mendaftar terlebih dahulu sebagai peserta lelang dengan melakukan proses pendaftaran di website dan mob apps legoas dan membayar kewajiban atas paket keanggotaan yang diingini.`,
        },
        {
          id: "1",
          title: "Paket Silver",
          content: "Sangat cocok bagi peserta yang memiliki rencana hanya membeli 1 unit kendaraan dan atau dibawah 5 unit. Selain tidak memberatkan dalam jumlah uang jaminan, kebutuhan ini memang diperuntukkan bagi Anda yang merencanakan memiliki unit untuk digunakan sendiri.",
        },
        {
          id: "1",
          title: "Paket Platinum",
          content: "Dipersembahkan bagi pelanggan loyal LEGOAS yang membutuhkan flexibilitas dalam membeli dalam jumlah banyak dan atau rutin dalam pembelian setiap bulannya.",
        },
        {
          id: "1",
          title: "Cara mengikuti lelang",
          content: "Ketika sudah menjadi peserta lelang, maka peserta dapat masuk kedalam lelang yang diingini/dituju sesuai jadwal yang sudah diinformasikan. Ketika Lelang dimulai, rasakan sensasi dalam mengikuti lelang.",
        },
        {
          id: "1",
          title: "Peserta menang lelang",
          content: "Ketika sudah menjadi peserta lelang, maka peserta dapat masuk kedalam lelang yang diingini/dituju sesuai jadwal yang sudah diinformasikan. Ketika Lelang dimulai, rasakan sensasi dalam mengikuti lelang.",
        },
        {
          id: "1",
          title: "Peserta tidak menang lelang",
          content: "Bagi peserta yang tidak memenangkan barang/produk yang diinginkan di lelang bersangkutan. Maka dapat melakukan request untuk pengembalian uang deposit tanpa dikenakan biaya sama sekali atau tetap menggunakan keanggotaan dan paket yang dimiliki untuk mengikuti lelang-lelang yang akan datang.",
        },
      ],
      arr_seller: [
        {
          id: "1",
          title: "Download Apps",
          content: "penjual barang/unit dapat mendownload mobile apps legoas penjual dapat melakukan pendaftaran sesuai dengan langkah-langkah yang sudah disiapkan di mobile apps.",
        },
        {
          id: "1",
          title: "Penjual melakukan persetujuan",
          content: "atas term & condition yang berlaku bagi penjual termasuk fee yang dikenakan. ketika tim legoas sudah melakukan approval untuk kondisi unit dan surat-surat resmi, maka penjual dapat memilih waktu yang ditentukan serta harga dasar unit tersebut.",
        },
        {
          id: "1",
          title: "Jika unit penjual terjual",
          content: "melalui lelang maka penjual akan ditransfer nilai unit/barang sesuai harga terbentuk max 5 hari setelah hari lelang dan dikurangi biaya yang dikenakan serta di transfer ke rekening sesuai data sewaktu pendaftaran.",
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

    this.get_how_to_info()
    this.get_how_to_section('participant')
    this.get_how_to_section('seller')
  },
  methods: {
    handleScroll(){
      this.scrollY = window.scrollY
    },
    manage_start_animation(){
      this.flag.howToParticipantTitle1Flag = this.base.check_start_animation(this.scrollY, this.flag.howToParticipantTitle1Flag, this.arr_factor, 10)
      this.flag.howToSellerTitle1Flag = this.base.check_start_animation(this.scrollY, this.flag.howToSellerTitle1Flag, this.arr_factor, 1000, this.flag.howToParticipantTitle1Flag ? window.$('#participant-container').innerHeight() - 800 : 1000)
    },
    async get_how_to_info(){
      var response = await this.base.request(this.base.url_api + "/info?is_publish=1&type=how_to")
      this.$set(this.arr_factor, 0, true)

      if(response != null){
        if(response.status === "success"){
          this.url_video = response.data.url_video
        }
        else
          this.base.show_error(response.message)
      }
      else
        this.base.show_error(this.$t('server_error'))
    },
    async get_how_to_section(type = "participant"){
      var response = await this.base.request(this.base.url_api + "/section/how-to/all?is_publish=1&type=" + type)
      this.$set(this.arr_factor, 1, true)

      if(response != null){
        if(response.status === "success"){
          // for(let how_to of response.data){
          //   how_to.image = this.base.host + "/media/section/how_to?file_name=" + how_to.file_name
          // }
          if(type === "participant")
            this.arr_participant = response.data
          else if(type === "seller")
            this.arr_seller = response.data
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
.how-to-date{
  color: $gray5;
}
.how-to-title{
  font-family: poppins-medium;
  font-size: 2rem;
}
.how-to-content{
  color: $gray6;

}
.content-number{
  font-size: 1.8rem;
  color: $primary;
  font-family: poppins-bold;
}
.content-title{
  font-size: 1.2rem;
  font-family: poppins-bold;
}
.content-content{
  color: $gray6;
}
.section-title{
  font-size: 2rem;
}
.participant-container{
  background-color: $gray4;
  padding-top: 9rem;
  padding-bottom: 10rem;
  margin-top: -3rem;
}
.seller-container{
  padding-top: 9rem;
  padding-bottom: 9rem;
}
</style>
