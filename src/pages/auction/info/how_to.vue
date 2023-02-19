<template>
  <div class="">
    <div class="container position-relative px-5 mt-5">
      <div class="d-flex">
        <p class="mb-0 navigation">{{ $t('auction_info') }}</p>
        <p class="mb-0 navigation">&nbsp;/&nbsp;</p>
        <p class="mb-0 navigation navigation-now">{{ $t('auction_how_to') }}</p>
      </div>
      <p class="mb-0 general-title">{{ $t('auction_how_to') }}</p>
    </div>

    <div class="w-100">
      <div class="container pt-5 px-5">
        <p class="mb-0 how-to-title">{{ $t('watch_how_to_video') }}</p>
      </div>

      <div class="container px-5 mt-5">
        <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
      </div>

      <div class="participant-container">
        <HowToItem :title='`<label class="text-primary">` + $t("participant") + `</label> ` + $t("auction")' :arr="arr_participant"/>
      </div>

      <div class="seller-container">
        <HowToItem :title='`<label class="text-primary">` + $t("seller") + `</label> ` + $t("product")' :arr="arr_seller"/>
      </div>
    </div>
  </div>
</template>

<script>
import Base from '@/utils/base';
import moment from 'moment';

import HowToItem from '@/pages/auction/component/how_to_item.vue'

export default {
  components: {
    'HowToItem': HowToItem,
  },
  data(){
    return{
      base: null,
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
  created(){
    this.base = new Base()
  },
  methods: {
    
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
  padding: 5rem 8.5rem;
  margin-top: -3rem;
}
.seller-container{
  padding: 5rem 8.5rem;
}
</style>
