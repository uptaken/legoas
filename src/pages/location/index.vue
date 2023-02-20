<template>
  <div class="container">
    <div class="position-relative px-5 mt-5">
      <p class="mb-0 general-title ml-5">{{ $t('auction_location') }}</p>
    </div>

    <div class="p-5 w-100">
      <div class="mt-3">
        <div class="row">
          <div class="col-12 col-lg-6">
            <div class="ml-5">
              <p class="mb-0 info-title">Kunjungi Legoas, PT Digital Sarana Legoas <label class="custom-title">Lokasi Lelang di Jakarta</label></p>

              <div class="mt-3">
                <p class="mb-0 info-title">{{ $t('address') }}</p>
                <p class="mb-0 mt-1 content-section">Jl. Meruya Selatan N0. 12 RT 08 RW 04 Kel. Meruya Utara Kec. Kembangan Jakarta Barat 11620 Indonesia</p>
              </div>

              <div class="mt-3">
                <p class="mb-0 info-title">{{ $t('email') }}</p>
                <p class="mb-0 mt-1 content-section">cs@legoas.co.id</p>
              </div>

              <div class="mt-3">
                <p class="mb-0 info-title">{{ $t('phone') }}</p>
                <p class="mb-0 mt-1 content-section">021-12312-2312</p>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-6 mt-5 mt-lg-0">
            <div class="d-flex justify-content-center">
              <div class="position-relative" style="width: 12rem;">
                <img src="@/assets/location1.png" class="position-absolute" style="width: 8rem; left: 5rem; z-index: -1"/>
                <div class="p-1 bg-white rounded" style="margin-top: 5rem; width: 8rem;">
                  <img src="@/assets/location2.png" width="100%"/>
                </div>
              </div>

              <div class="position-relative">
                <img src="@/assets/location3.png" class="" style="width: 8rem; margin-left: 5rem;"/>
                <div class="position-absolute bg-white rounded" style="top: 5rem;">
                  <img src="@/assets/location4.png"  style="width: 8rem;"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5 text-center">
        <iframe
          width="100%"
          height="316"
          style="border:0"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAGvT7vk9EkzIusHwBSKXGc-bYsp1vLrAs
            &q=Space+Needle,Seattle+WA">
        </iframe>
      </div>
    </div>
  </div>
</template>

<script>
import Base from '@/utils/base';

import Wallet from '@/assets/wallet.png'
import OurTeam1 from '@/assets/our_team1.png'
import OurTeam2 from '@/assets/our_team2.png'
import OurTeam3 from '@/assets/our_team3.png'

export default {
  components: {
  },
  data(){
    return{
      base: null,
      arr_trust: [
        {
          id: "1",
          image: Wallet,
          title: "Lelang Secara Aman",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        },
        {
          id: "1",
          image: Wallet,
          title: "Lelang Secara Aman",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        },
        {
          id: "1",
          image: Wallet,
          title: "Lelang Secara Aman",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        },
        {
          id: "1",
          image: Wallet,
          title: "Lelang Secara Aman",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        },
      ],
      arr_team: [
        {
          id: "1",
          image: OurTeam1,
          role: "CEO LEGOAS",
          name: "Nama 1",
        },
        {
          id: "1",
          image: OurTeam2,
          role: "Guided Tour",
          name: "Nama 2",
        },
        {
          id: "1",
          image: OurTeam3,
          role: "Guided Tour",
          name: "Nama 3",
        },
        {
          id: "1",
          image: OurTeam3,
          role: "Guided Tour",
          name: "Nama 4",
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
.custom-title{
  color: $primary;
  font-family: poppins-bold;
}
.trust-card{
  background-color: $gray9;
  border: none;
}
.title-section{
  font-size: 2rem;
  font-family: poppins-medium;
}
.info-title{
  font-family: poppins-medium;
}
.content-section{
  color: $gray6;
}
.team-role{
  color: $black1;
}
.team-name{
  color: $black1;
  font-family: poppins-bold;
}
</style>
