<template>
  <div class="custom-navbar-padding-right custom-navbar-padding-left text-center">
    <div class="content-container text-left">
      <div class="position-relative" style="margin-top: 3.8rem;">
        <div class="d-flex">
          <p class="mb-0 navigation">{{ $t('auction_info') }}</p>
          <p class="mb-0 navigation">&nbsp;/&nbsp;</p>
          <p class="mb-0 navigation navigation-now">{{ $t('auction_rules') }}</p>
        </div>
        <p class="mb-0 general-title">{{ $t('auction_rules') }}</p>
      </div>

      <div class="w-100" style="margin-top: 4.5rem; margin-bottom: 15rem;">
        <Transition name="rules-image">
          <div class="w-100" v-show="flag.rulesImageFlag">
            <img src="@/assets/definition_bottom.png" width="100%"/>
          </div>
        </Transition>

        <Transition name="rules-title">
          <div class="px-0 px-md-5 w-100" style="margin: 3.75rem 0;" v-show="flag.rulesTitleFlag">
            <p class="mb-0 last-updated">{{ $t('updated') + " " + last_updated_at.format('DD MMMM YYYY') }}</p>
          </div>
        </Transition>
        
        <Transition name="rules-content">
          <div class="accordion" id="accordionExample" v-show="flag.rulesContentFlag" style="margin-bottom: 40rem;">
            <div :id="'heading' + index" v-for="(rules, index) in arr_rules" :key="'rules' + index">
              <div class="card custom-card">
                <div class="card-body p-0">
                  <div class="px-5 py-3 position-relative">
                    <img :src="rules.image" class="position-absolute" style="left: -1rem; width: 2rem; height: 2rem;"/>
                    <button class="btn p-0 w-100 text-left collapse-title" type="button" data-toggle="collapse" :data-target="'#collapse' + index" aria-expanded="false" :aria-controls="'collapse' + index" @click="onClickHeader(index)">
                      <p class="mb-0" style="padding-top: .2rem; line-height: 1;">{{ rules.title }}</p>
                    </button>
                  </div>
                </div>
              </div>

              <div :id="'collapse' + index" class="collapse multi-collapse" :class="{'show': index == 0}" :aria-labelledby="'heading' + index" style="margin: 5.6rem 5.6rem;" data-parent="#accordionExample" v-html="rules.content">
                
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
import moment from 'moment';

import Image from '@/assets/definition_bottom.png';
import ImageCar from '@/assets/car.png';

export default {
  components: {
  },
  data(){
    return{
      base: null,
      scrollY: 0,
      arr_factor: [false, ],
      flag: {
        rulesImageFlag: false,
        rulesTitleFlag: false,
        rulesContentFlag: false,
      },
      image: Image,
      last_updated_at: moment(),
      arr_rules: [
        {
          id: "1",
          title: this.$t("definition"),
          content: `
          <div class="">
                <p class="mb-0 content-title">Definisi Lelang di Legoas</p>
                <p class="mb-0 content-content mt-3">
                  Mobile aplikasi LEGOAS adalah aplikasi milik PT. Digital Sarana Legoas (�LEGOAS�) yang dapat didownload melalui situs web resmi LEGOAS maupun media distribusi aplikasi/software resmi yang ditunjuk dan digunakan LEGOAS yang dimiliki oleh mobile operating system yang terdapat di handphone pelanggan untuk melakukan proses pendaftaran, pembelian token, hingga pelaksanaan lelang.
  Situs web LEGOAS adalah layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id
  Peserta Lelang adalah personal yang telah mendaftar melalui aplikasi dan website LEGOAS sesuai dengan persyaratan dan kewajiban yang telah ditentukan. Sesuai Syarat dan Ketentuan, Peserta Lelang akan mendapatkan 1 (satu) akun yang terdaftar dalam situs dan aplikasi mobile LEGOAS (�Akun Peserta Lelang�). Untuk mengikuti lelang maka peserta lelang harus melakukan kewajibannya dalam memilih paket keanggotaan yang diingini. Dengan pendaftaran tersebut dan melewati tahap pemilihan paket keanggotaan maka Peserta Lelang dapat mengikuti proses lelang melalui aplikasi dan website Legoas.
  Situs web LEGOAS adalah layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id.
  Token adalah hak peserta lelang berupa deposito sebagai jaminan keikutsertaan peserta lelang dan dapat dikembalikan (refund) jika tidak menang atau kewajiban sebagai pemenang telah dipenuhi. Token pada umumnya disebut dengan Nomor Peserta Lelang pada pelaksanaan lelang secara umum. 1 Token hanya untuk memenangkan 1 unit kendaraan.
  Biaya administrasi adalah kewajiban dari peserta lelang yang harus dipenuhi hanya kepada peserta lelang memenangkan unit/produk yang diingini. Besaran uang administrasi sebesar Rp. 1.400.000 per unit kendaraan mobil dan sebesar Rp. 300.000 per unit kendaraan sepeda motor atau disesuaikan dengan masa-masa jika promosi. Biaya administrasi selalu diinformasikan pada lelang yang akan dipilih.
  Penawaran LEGOAS adalah semua pengajuan harga pada penjualan melalui lelang secara onsite dan atau online yang dilakukan oleh LEGOAS melalui aplikasi mobile dan situs web LEGOAS.
  Pemenang Lelang adalah peserta lelang yang telah mengajukan harga tertinggi atas produk/barang yang dilelang hingga masa lelang atas Lot tersebut berakhir.
  Lelang LEGOAS adalah seluruh proses dan pelaksanaan lelang yang dilakukan oleh LEGOAS penyelenggara lelang melalui aplikasi mobile dan situs web LEGOAS secara terbuka, telah melalui persyaratan penyelenggaraan lelang di Indonesia.
  GRADE kendaraan adalah sertifikasi yang dilakukan oleh tim LEGOAS atas unit yang dilelang untuk menunjukkan kondisi kendaraan secara keseluruhan dan dinilai atas body, interior, surat, kondisi global mesin dan bagian bawah kendaraan.
  Situs web LEGOAS adalah layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id.
  Penitip Lelang adalah pemilik barang yang sah dan telah setuju untuk menitipkan assetnya untuk dilelang melalui LEGOAS sesuai dengan kesepakatan yang telah disetujui keduabelah pihak menyangkut hak dan kewajiban.
                </p>
              </div>
          `,
        },
        {
          id: "1",
          title: this.$t("general_usement"),
          content: `
          <div class="">
                <p class="mb-0 content-title">Definisi Lelang di Legoas</p>
                <p class="mb-0 content-content mt-3">
                  Mobile aplikasi LEGOAS adalah aplikasi milik PT. Digital Sarana Legoas (�LEGOAS�) yang dapat didownload melalui situs web resmi LEGOAS maupun media distribusi aplikasi/software resmi yang ditunjuk dan digunakan LEGOAS yang dimiliki oleh mobile operating system yang terdapat di handphone pelanggan untuk melakukan proses pendaftaran, pembelian token, hingga pelaksanaan lelang.
  Situs web LEGOAS adalah layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id
  Peserta Lelang adalah personal yang telah mendaftar melalui aplikasi dan website LEGOAS sesuai dengan persyaratan dan kewajiban yang telah ditentukan. Sesuai Syarat dan Ketentuan, Peserta Lelang akan mendapatkan 1 (satu) akun yang terdaftar dalam situs dan aplikasi mobile LEGOAS (�Akun Peserta Lelang�). Untuk mengikuti lelang maka peserta lelang harus melakukan kewajibannya dalam memilih paket keanggotaan yang diingini. Dengan pendaftaran tersebut dan melewati tahap pemilihan paket keanggotaan maka Peserta Lelang dapat mengikuti proses lelang melalui aplikasi dan website Legoas.
  Situs web LEGOAS adalah layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id.
  Token adalah hak peserta lelang berupa deposito sebagai jaminan keikutsertaan peserta lelang dan dapat dikembalikan (refund) jika tidak menang atau kewajiban sebagai pemenang telah dipenuhi. Token pada umumnya disebut dengan Nomor Peserta Lelang pada pelaksanaan lelang secara umum. 1 Token hanya untuk memenangkan 1 unit kendaraan.
  Biaya administrasi adalah kewajiban dari peserta lelang yang harus dipenuhi hanya kepada peserta lelang memenangkan unit/produk yang diingini. Besaran uang administrasi sebesar Rp. 1.400.000 per unit kendaraan mobil dan sebesar Rp. 300.000 per unit kendaraan sepeda motor atau disesuaikan dengan masa-masa jika promosi. Biaya administrasi selalu diinformasikan pada lelang yang akan dipilih.
  Penawaran LEGOAS adalah semua pengajuan harga pada penjualan melalui lelang secara onsite dan atau online yang dilakukan oleh LEGOAS melalui aplikasi mobile dan situs web LEGOAS.
  Pemenang Lelang adalah peserta lelang yang telah mengajukan harga tertinggi atas produk/barang yang dilelang hingga masa lelang atas Lot tersebut berakhir.
  Lelang LEGOAS adalah seluruh proses dan pelaksanaan lelang yang dilakukan oleh LEGOAS penyelenggara lelang melalui aplikasi mobile dan situs web LEGOAS secara terbuka, telah melalui persyaratan penyelenggaraan lelang di Indonesia.
  GRADE kendaraan adalah sertifikasi yang dilakukan oleh tim LEGOAS atas unit yang dilelang untuk menunjukkan kondisi kendaraan secara keseluruhan dan dinilai atas body, interior, surat, kondisi global mesin dan bagian bawah kendaraan.
  Situs web LEGOAS adalah layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id.
  Penitip Lelang adalah pemilik barang yang sah dan telah setuju untuk menitipkan assetnya untuk dilelang melalui LEGOAS sesuai dengan kesepakatan yang telah disetujui keduabelah pihak menyangkut hak dan kewajiban.
                </p>
              </div>
          `,
        },
        {
          id: "1",
          title: this.$t("auction_participant"),
          content: `
          <div class="">
                <p class="mb-0 content-title">Definisi Lelang di Legoas</p>
                <p class="mb-0 content-content mt-3">
                  Mobile aplikasi LEGOAS adalah aplikasi milik PT. Digital Sarana Legoas (�LEGOAS�) yang dapat didownload melalui situs web resmi LEGOAS maupun media distribusi aplikasi/software resmi yang ditunjuk dan digunakan LEGOAS yang dimiliki oleh mobile operating system yang terdapat di handphone pelanggan untuk melakukan proses pendaftaran, pembelian token, hingga pelaksanaan lelang.
  Situs web LEGOAS adalah layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id
  Peserta Lelang adalah personal yang telah mendaftar melalui aplikasi dan website LEGOAS sesuai dengan persyaratan dan kewajiban yang telah ditentukan. Sesuai Syarat dan Ketentuan, Peserta Lelang akan mendapatkan 1 (satu) akun yang terdaftar dalam situs dan aplikasi mobile LEGOAS (�Akun Peserta Lelang�). Untuk mengikuti lelang maka peserta lelang harus melakukan kewajibannya dalam memilih paket keanggotaan yang diingini. Dengan pendaftaran tersebut dan melewati tahap pemilihan paket keanggotaan maka Peserta Lelang dapat mengikuti proses lelang melalui aplikasi dan website Legoas.
  Situs web LEGOAS adalah layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id.
  Token adalah hak peserta lelang berupa deposito sebagai jaminan keikutsertaan peserta lelang dan dapat dikembalikan (refund) jika tidak menang atau kewajiban sebagai pemenang telah dipenuhi. Token pada umumnya disebut dengan Nomor Peserta Lelang pada pelaksanaan lelang secara umum. 1 Token hanya untuk memenangkan 1 unit kendaraan.
  Biaya administrasi adalah kewajiban dari peserta lelang yang harus dipenuhi hanya kepada peserta lelang memenangkan unit/produk yang diingini. Besaran uang administrasi sebesar Rp. 1.400.000 per unit kendaraan mobil dan sebesar Rp. 300.000 per unit kendaraan sepeda motor atau disesuaikan dengan masa-masa jika promosi. Biaya administrasi selalu diinformasikan pada lelang yang akan dipilih.
  Penawaran LEGOAS adalah semua pengajuan harga pada penjualan melalui lelang secara onsite dan atau online yang dilakukan oleh LEGOAS melalui aplikasi mobile dan situs web LEGOAS.
  Pemenang Lelang adalah peserta lelang yang telah mengajukan harga tertinggi atas produk/barang yang dilelang hingga masa lelang atas Lot tersebut berakhir.
  Lelang LEGOAS adalah seluruh proses dan pelaksanaan lelang yang dilakukan oleh LEGOAS penyelenggara lelang melalui aplikasi mobile dan situs web LEGOAS secara terbuka, telah melalui persyaratan penyelenggaraan lelang di Indonesia.
  GRADE kendaraan adalah sertifikasi yang dilakukan oleh tim LEGOAS atas unit yang dilelang untuk menunjukkan kondisi kendaraan secara keseluruhan dan dinilai atas body, interior, surat, kondisi global mesin dan bagian bawah kendaraan.
  Situs web LEGOAS adalah layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id.
  Penitip Lelang adalah pemilik barang yang sah dan telah setuju untuk menitipkan assetnya untuk dilelang melalui LEGOAS sesuai dengan kesepakatan yang telah disetujui keduabelah pihak menyangkut hak dan kewajiban.
                </p>
              </div>
          `,
        },
        {
          id: "1",
          title: this.$t("auction_winner"),
          content: `
          <div class="">
                <p class="mb-0 content-title">Definisi Lelang di Legoas</p>
                <p class="mb-0 content-content mt-3">
                  Mobile aplikasi LEGOAS adalah aplikasi milik PT. Digital Sarana Legoas (�LEGOAS�) yang dapat didownload melalui situs web resmi LEGOAS maupun media distribusi aplikasi/software resmi yang ditunjuk dan digunakan LEGOAS yang dimiliki oleh mobile operating system yang terdapat di handphone pelanggan untuk melakukan proses pendaftaran, pembelian token, hingga pelaksanaan lelang.
  Situs web LEGOAS adalah layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id
  Peserta Lelang adalah personal yang telah mendaftar melalui aplikasi dan website LEGOAS sesuai dengan persyaratan dan kewajiban yang telah ditentukan. Sesuai Syarat dan Ketentuan, Peserta Lelang akan mendapatkan 1 (satu) akun yang terdaftar dalam situs dan aplikasi mobile LEGOAS (�Akun Peserta Lelang�). Untuk mengikuti lelang maka peserta lelang harus melakukan kewajibannya dalam memilih paket keanggotaan yang diingini. Dengan pendaftaran tersebut dan melewati tahap pemilihan paket keanggotaan maka Peserta Lelang dapat mengikuti proses lelang melalui aplikasi dan website Legoas.
  Situs web LEGOAS adalah layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id.
  Token adalah hak peserta lelang berupa deposito sebagai jaminan keikutsertaan peserta lelang dan dapat dikembalikan (refund) jika tidak menang atau kewajiban sebagai pemenang telah dipenuhi. Token pada umumnya disebut dengan Nomor Peserta Lelang pada pelaksanaan lelang secara umum. 1 Token hanya untuk memenangkan 1 unit kendaraan.
  Biaya administrasi adalah kewajiban dari peserta lelang yang harus dipenuhi hanya kepada peserta lelang memenangkan unit/produk yang diingini. Besaran uang administrasi sebesar Rp. 1.400.000 per unit kendaraan mobil dan sebesar Rp. 300.000 per unit kendaraan sepeda motor atau disesuaikan dengan masa-masa jika promosi. Biaya administrasi selalu diinformasikan pada lelang yang akan dipilih.
  Penawaran LEGOAS adalah semua pengajuan harga pada penjualan melalui lelang secara onsite dan atau online yang dilakukan oleh LEGOAS melalui aplikasi mobile dan situs web LEGOAS.
  Pemenang Lelang adalah peserta lelang yang telah mengajukan harga tertinggi atas produk/barang yang dilelang hingga masa lelang atas Lot tersebut berakhir.
  Lelang LEGOAS adalah seluruh proses dan pelaksanaan lelang yang dilakukan oleh LEGOAS penyelenggara lelang melalui aplikasi mobile dan situs web LEGOAS secara terbuka, telah melalui persyaratan penyelenggaraan lelang di Indonesia.
  GRADE kendaraan adalah sertifikasi yang dilakukan oleh tim LEGOAS atas unit yang dilelang untuk menunjukkan kondisi kendaraan secara keseluruhan dan dinilai atas body, interior, surat, kondisi global mesin dan bagian bawah kendaraan.
  Situs web LEGOAS adalah layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id.
  Penitip Lelang adalah pemilik barang yang sah dan telah setuju untuk menitipkan assetnya untuk dilelang melalui LEGOAS sesuai dengan kesepakatan yang telah disetujui keduabelah pihak menyangkut hak dan kewajiban.
                </p>
              </div>
          `,
        },
        {
          id: "1",
          title: this.$t("term_payment"),
          content: `
          <div class="">
                <p class="mb-0 content-title">Definisi Lelang di Legoas</p>
                <p class="mb-0 content-content mt-3">
                  Mobile aplikasi LEGOAS adalah aplikasi milik PT. Digital Sarana Legoas (�LEGOAS�) yang dapat didownload melalui situs web resmi LEGOAS maupun media distribusi aplikasi/software resmi yang ditunjuk dan digunakan LEGOAS yang dimiliki oleh mobile operating system yang terdapat di handphone pelanggan untuk melakukan proses pendaftaran, pembelian token, hingga pelaksanaan lelang.
  Situs web LEGOAS adalah layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id
  Peserta Lelang adalah personal yang telah mendaftar melalui aplikasi dan website LEGOAS sesuai dengan persyaratan dan kewajiban yang telah ditentukan. Sesuai Syarat dan Ketentuan, Peserta Lelang akan mendapatkan 1 (satu) akun yang terdaftar dalam situs dan aplikasi mobile LEGOAS (�Akun Peserta Lelang�). Untuk mengikuti lelang maka peserta lelang harus melakukan kewajibannya dalam memilih paket keanggotaan yang diingini. Dengan pendaftaran tersebut dan melewati tahap pemilihan paket keanggotaan maka Peserta Lelang dapat mengikuti proses lelang melalui aplikasi dan website Legoas.
  Situs web LEGOAS adalah layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id.
  Token adalah hak peserta lelang berupa deposito sebagai jaminan keikutsertaan peserta lelang dan dapat dikembalikan (refund) jika tidak menang atau kewajiban sebagai pemenang telah dipenuhi. Token pada umumnya disebut dengan Nomor Peserta Lelang pada pelaksanaan lelang secara umum. 1 Token hanya untuk memenangkan 1 unit kendaraan.
  Biaya administrasi adalah kewajiban dari peserta lelang yang harus dipenuhi hanya kepada peserta lelang memenangkan unit/produk yang diingini. Besaran uang administrasi sebesar Rp. 1.400.000 per unit kendaraan mobil dan sebesar Rp. 300.000 per unit kendaraan sepeda motor atau disesuaikan dengan masa-masa jika promosi. Biaya administrasi selalu diinformasikan pada lelang yang akan dipilih.
  Penawaran LEGOAS adalah semua pengajuan harga pada penjualan melalui lelang secara onsite dan atau online yang dilakukan oleh LEGOAS melalui aplikasi mobile dan situs web LEGOAS.
  Pemenang Lelang adalah peserta lelang yang telah mengajukan harga tertinggi atas produk/barang yang dilelang hingga masa lelang atas Lot tersebut berakhir.
  Lelang LEGOAS adalah seluruh proses dan pelaksanaan lelang yang dilakukan oleh LEGOAS penyelenggara lelang melalui aplikasi mobile dan situs web LEGOAS secara terbuka, telah melalui persyaratan penyelenggaraan lelang di Indonesia.
  GRADE kendaraan adalah sertifikasi yang dilakukan oleh tim LEGOAS atas unit yang dilelang untuk menunjukkan kondisi kendaraan secara keseluruhan dan dinilai atas body, interior, surat, kondisi global mesin dan bagian bawah kendaraan.
  Situs web LEGOAS adalah layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id.
  Penitip Lelang adalah pemilik barang yang sah dan telah setuju untuk menitipkan assetnya untuk dilelang melalui LEGOAS sesuai dengan kesepakatan yang telah disetujui keduabelah pihak menyangkut hak dan kewajiban.
                </p>
              </div>
          `,
        },
        {
          id: "1",
          title: this.$t("intellectual_property"),
          content: `
          <div class="">
                <p class="mb-0 content-title">Definisi Lelang di Legoas</p>
                <p class="mb-0 content-content mt-3">
                  Mobile aplikasi LEGOAS adalah aplikasi milik PT. Digital Sarana Legoas (�LEGOAS�) yang dapat didownload melalui situs web resmi LEGOAS maupun media distribusi aplikasi/software resmi yang ditunjuk dan digunakan LEGOAS yang dimiliki oleh mobile operating system yang terdapat di handphone pelanggan untuk melakukan proses pendaftaran, pembelian token, hingga pelaksanaan lelang.
  Situs web LEGOAS adalah layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id
  Peserta Lelang adalah personal yang telah mendaftar melalui aplikasi dan website LEGOAS sesuai dengan persyaratan dan kewajiban yang telah ditentukan. Sesuai Syarat dan Ketentuan, Peserta Lelang akan mendapatkan 1 (satu) akun yang terdaftar dalam situs dan aplikasi mobile LEGOAS (�Akun Peserta Lelang�). Untuk mengikuti lelang maka peserta lelang harus melakukan kewajibannya dalam memilih paket keanggotaan yang diingini. Dengan pendaftaran tersebut dan melewati tahap pemilihan paket keanggotaan maka Peserta Lelang dapat mengikuti proses lelang melalui aplikasi dan website Legoas.
  Situs web LEGOAS adalah layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id.
  Token adalah hak peserta lelang berupa deposito sebagai jaminan keikutsertaan peserta lelang dan dapat dikembalikan (refund) jika tidak menang atau kewajiban sebagai pemenang telah dipenuhi. Token pada umumnya disebut dengan Nomor Peserta Lelang pada pelaksanaan lelang secara umum. 1 Token hanya untuk memenangkan 1 unit kendaraan.
  Biaya administrasi adalah kewajiban dari peserta lelang yang harus dipenuhi hanya kepada peserta lelang memenangkan unit/produk yang diingini. Besaran uang administrasi sebesar Rp. 1.400.000 per unit kendaraan mobil dan sebesar Rp. 300.000 per unit kendaraan sepeda motor atau disesuaikan dengan masa-masa jika promosi. Biaya administrasi selalu diinformasikan pada lelang yang akan dipilih.
  Penawaran LEGOAS adalah semua pengajuan harga pada penjualan melalui lelang secara onsite dan atau online yang dilakukan oleh LEGOAS melalui aplikasi mobile dan situs web LEGOAS.
  Pemenang Lelang adalah peserta lelang yang telah mengajukan harga tertinggi atas produk/barang yang dilelang hingga masa lelang atas Lot tersebut berakhir.
  Lelang LEGOAS adalah seluruh proses dan pelaksanaan lelang yang dilakukan oleh LEGOAS penyelenggara lelang melalui aplikasi mobile dan situs web LEGOAS secara terbuka, telah melalui persyaratan penyelenggaraan lelang di Indonesia.
  GRADE kendaraan adalah sertifikasi yang dilakukan oleh tim LEGOAS atas unit yang dilelang untuk menunjukkan kondisi kendaraan secara keseluruhan dan dinilai atas body, interior, surat, kondisi global mesin dan bagian bawah kendaraan.
  Situs web LEGOAS adalah layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id.
  Penitip Lelang adalah pemilik barang yang sah dan telah setuju untuk menitipkan assetnya untuk dilelang melalui LEGOAS sesuai dengan kesepakatan yang telah disetujui keduabelah pihak menyangkut hak dan kewajiban.
                </p>
              </div>
          `,
        },
        {
          id: "1",
          title: this.$t("change_term_condition"),
          content: `
          <div class="">
                <p class="mb-0 content-title">Definisi Lelang di Legoas</p>
                <p class="mb-0 content-content mt-3">
                  Mobile aplikasi LEGOAS adalah aplikasi milik PT. Digital Sarana Legoas (�LEGOAS�) yang dapat didownload melalui situs web resmi LEGOAS maupun media distribusi aplikasi/software resmi yang ditunjuk dan digunakan LEGOAS yang dimiliki oleh mobile operating system yang terdapat di handphone pelanggan untuk melakukan proses pendaftaran, pembelian token, hingga pelaksanaan lelang.
  Situs web LEGOAS adalah layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id
  Peserta Lelang adalah personal yang telah mendaftar melalui aplikasi dan website LEGOAS sesuai dengan persyaratan dan kewajiban yang telah ditentukan. Sesuai Syarat dan Ketentuan, Peserta Lelang akan mendapatkan 1 (satu) akun yang terdaftar dalam situs dan aplikasi mobile LEGOAS (�Akun Peserta Lelang�). Untuk mengikuti lelang maka peserta lelang harus melakukan kewajibannya dalam memilih paket keanggotaan yang diingini. Dengan pendaftaran tersebut dan melewati tahap pemilihan paket keanggotaan maka Peserta Lelang dapat mengikuti proses lelang melalui aplikasi dan website Legoas.
  Situs web LEGOAS adalah layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id.
  Token adalah hak peserta lelang berupa deposito sebagai jaminan keikutsertaan peserta lelang dan dapat dikembalikan (refund) jika tidak menang atau kewajiban sebagai pemenang telah dipenuhi. Token pada umumnya disebut dengan Nomor Peserta Lelang pada pelaksanaan lelang secara umum. 1 Token hanya untuk memenangkan 1 unit kendaraan.
  Biaya administrasi adalah kewajiban dari peserta lelang yang harus dipenuhi hanya kepada peserta lelang memenangkan unit/produk yang diingini. Besaran uang administrasi sebesar Rp. 1.400.000 per unit kendaraan mobil dan sebesar Rp. 300.000 per unit kendaraan sepeda motor atau disesuaikan dengan masa-masa jika promosi. Biaya administrasi selalu diinformasikan pada lelang yang akan dipilih.
  Penawaran LEGOAS adalah semua pengajuan harga pada penjualan melalui lelang secara onsite dan atau online yang dilakukan oleh LEGOAS melalui aplikasi mobile dan situs web LEGOAS.
  Pemenang Lelang adalah peserta lelang yang telah mengajukan harga tertinggi atas produk/barang yang dilelang hingga masa lelang atas Lot tersebut berakhir.
  Lelang LEGOAS adalah seluruh proses dan pelaksanaan lelang yang dilakukan oleh LEGOAS penyelenggara lelang melalui aplikasi mobile dan situs web LEGOAS secara terbuka, telah melalui persyaratan penyelenggaraan lelang di Indonesia.
  GRADE kendaraan adalah sertifikasi yang dilakukan oleh tim LEGOAS atas unit yang dilelang untuk menunjukkan kondisi kendaraan secara keseluruhan dan dinilai atas body, interior, surat, kondisi global mesin dan bagian bawah kendaraan.
  Situs web LEGOAS adalah layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id.
  Penitip Lelang adalah pemilik barang yang sah dan telah setuju untuk menitipkan assetnya untuk dilelang melalui LEGOAS sesuai dengan kesepakatan yang telah disetujui keduabelah pihak menyangkut hak dan kewajiban.
                </p>
              </div>
          `,
        },
        {
          id: "1",
          title: this.$t("force_majeur"),
          content: `
          <div class="">
                <p class="mb-0 content-title">Definisi Lelang di Legoas</p>
                <p class="mb-0 content-content mt-3">
                  Mobile aplikasi LEGOAS adalah aplikasi milik PT. Digital Sarana Legoas (�LEGOAS�) yang dapat didownload melalui situs web resmi LEGOAS maupun media distribusi aplikasi/software resmi yang ditunjuk dan digunakan LEGOAS yang dimiliki oleh mobile operating system yang terdapat di handphone pelanggan untuk melakukan proses pendaftaran, pembelian token, hingga pelaksanaan lelang.
  Situs web LEGOAS adalah layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id
  Peserta Lelang adalah personal yang telah mendaftar melalui aplikasi dan website LEGOAS sesuai dengan persyaratan dan kewajiban yang telah ditentukan. Sesuai Syarat dan Ketentuan, Peserta Lelang akan mendapatkan 1 (satu) akun yang terdaftar dalam situs dan aplikasi mobile LEGOAS (�Akun Peserta Lelang�). Untuk mengikuti lelang maka peserta lelang harus melakukan kewajibannya dalam memilih paket keanggotaan yang diingini. Dengan pendaftaran tersebut dan melewati tahap pemilihan paket keanggotaan maka Peserta Lelang dapat mengikuti proses lelang melalui aplikasi dan website Legoas.
  Situs web LEGOAS adalah layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id.
  Token adalah hak peserta lelang berupa deposito sebagai jaminan keikutsertaan peserta lelang dan dapat dikembalikan (refund) jika tidak menang atau kewajiban sebagai pemenang telah dipenuhi. Token pada umumnya disebut dengan Nomor Peserta Lelang pada pelaksanaan lelang secara umum. 1 Token hanya untuk memenangkan 1 unit kendaraan.
  Biaya administrasi adalah kewajiban dari peserta lelang yang harus dipenuhi hanya kepada peserta lelang memenangkan unit/produk yang diingini. Besaran uang administrasi sebesar Rp. 1.400.000 per unit kendaraan mobil dan sebesar Rp. 300.000 per unit kendaraan sepeda motor atau disesuaikan dengan masa-masa jika promosi. Biaya administrasi selalu diinformasikan pada lelang yang akan dipilih.
  Penawaran LEGOAS adalah semua pengajuan harga pada penjualan melalui lelang secara onsite dan atau online yang dilakukan oleh LEGOAS melalui aplikasi mobile dan situs web LEGOAS.
  Pemenang Lelang adalah peserta lelang yang telah mengajukan harga tertinggi atas produk/barang yang dilelang hingga masa lelang atas Lot tersebut berakhir.
  Lelang LEGOAS adalah seluruh proses dan pelaksanaan lelang yang dilakukan oleh LEGOAS penyelenggara lelang melalui aplikasi mobile dan situs web LEGOAS secara terbuka, telah melalui persyaratan penyelenggaraan lelang di Indonesia.
  GRADE kendaraan adalah sertifikasi yang dilakukan oleh tim LEGOAS atas unit yang dilelang untuk menunjukkan kondisi kendaraan secara keseluruhan dan dinilai atas body, interior, surat, kondisi global mesin dan bagian bawah kendaraan.
  Situs web LEGOAS adalah layanan yang dapat diakses secara langsung oleh Peserta melalui telepon selular (handphone atau tablet) dengan alamat www.legoas.co.id.
  Penitip Lelang adalah pemilik barang yang sah dan telah setuju untuk menitipkan assetnya untuk dilelang melalui LEGOAS sesuai dengan kesepakatan yang telah disetujui keduabelah pihak menyangkut hak dan kewajiban.
                </p>
              </div>
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

    this.get_rules_info()
    this.get_rules_list()
  },
  methods: {
    handleScroll(){
      this.scrollY = window.scrollY
    },
    onClickHeader(index){
      // console.log(index)
      // var scrollTo = this.base.responsive_scroll_threshold(580) - this.base.responsive_scroll_threshold(115)
      // for(let x = 0; x <= index; x++)
      //   scrollTo += this.base.responsive_scroll_threshold(94)
      window.scrollTo(0, this.base.responsive_scroll_threshold(700))
      // window.$('#accordionExample').on('shown.bs.collapse', () => {
      //   console.log('test')
      //   document.getElementById('heading'+index).scrollIntoView()
      // })
      setTimeout(() => {
        document.getElementById('heading'+index).scrollIntoView()
      }, 700)
      
    },
    manage_start_animation(){
      this.flag.rulesTitleFlag = this.base.check_start_animation(this.scrollY, this.flag.rulesTitleFlag, this.arr_factor, 0)
      this.flag.rulesImageFlag = this.base.check_start_animation(this.scrollY, this.flag.rulesImageFlag, this.arr_factor, 0)
      this.flag.rulesContentFlag = this.base.check_start_animation(this.scrollY, this.flag.rulesContentFlag, this.arr_factor, 0)
    },
    async get_rules_info(){
      var response = await this.base.request(this.base.url_api + "/info?is_publish=1&type=rules")
      this.$set(this.arr_factor, 0, true)

      if(response != null){
        if(response.status === "success"){
          this.image = this.base.host + "/media/info?file_name=" + response.data.file_name
          this.last_updated_at = moment(response.data.updated_at_format, 'YYYY-MM-DD')
        }
        else
          this.base.show_error(response.message)
      }
      else
        this.base.show_error(this.$t('server_error'))
    },
    async get_rules_list(){
      var response = await this.base.request(this.base.url_api + "/rules/all?is_publish=1")
      this.$set(this.arr_factor, 1, true)

      if(response != null){
        if(response.status === "success"){
          for(let rules of response.data){
            rules.image = rules.file_name != null ? this.base.host + "/media/rules?file_name=" + rules.file_name : ImageCar
            rules.title = rules.name
          }
          this.arr_rules = response.data
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
.last-updated{
  color: $gray5;
  letter-spacing: .2rem;
  line-height: 100%;
  text-transform: uppercase;
}
.custom-card{
  border: none;
  background-color: $cyan1;
  margin-bottom: 2rem;
}
.collapse-title{
  color: $cyan2;
  font-size: 1.2rem;
  font-family: poppins-medium;
}
.content-title{
  font-size: 2rem;
  font-family: poppins-medium;
}
.content-content{
  color: $gray6;
}
.rules-title-enter-active, .rules-title-leave-active,
.rules-image-enter-active, .rules-image-leave-active,
.rules-content-enter-active, .rules-content-leave-active{
  transition: all 2s;
}
.rules-title-leave-to, .rules-title-enter,
.rules-image-leave-to, .rules-image-enter,
.rules-content-leave-to, .rules-content-enter {
  transform: translateY(-10rem);
  opacity: 0;
}
</style>
