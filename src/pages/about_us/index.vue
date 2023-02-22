<template>
  <div class="custom-navbar-padding-right custom-navbar-padding-left">
    <div class="position-relative px-5 mt-5">
      <p class="m-0 general-title">{{ $t('about_us') }}</p>
    </div>

    <div class="p-5 w-100">
      <div class="mt-3">
        <Transition name="about-us-title1">
          <p class="mb-0 title-section" v-show="flag.aboutUsTitle1Flag">{{ $t('our_story') }}</p>
        </Transition>
        <Transition name="about-us-content1">
          <p class="mb-0 mt-5 content-section" v-show="flag.aboutUsContent1Flag">Berdiri dari tahun 2018, <label class="custom-title">LEGOAS</label> merupakan perusahaan yang berdiri dalam bidang lelang, yang melayani jasa pelelalngan barang anda. </p>
        </Transition>
        <Transition name="about-us-image1">
          <img src="@/assets/about_us_top.png" width="100%" class="mt-5" v-show="flag.aboutUsImage1Flag"/>
        </Transition>
      </div>

      <div class="mt-5">
        <Transition name="about-us-title2">
          <p class="mb-0 title-section" v-show="flag.aboutUsTitle2Flag">{{ $t('trusting_legoas') }}</p>
        </Transition>
        <Transition name="about-us-content2" >
          <p class="mb-0 mt-5 content-section" v-show="flag.aboutUsContent2Flag"><label class="custom-title">LEGOAS</label> memiliki ijin operasional Balai Lelang yang disahkan melalui Keputusan Menteri Keuangan no 28/KM.6/2018. Dalam hal ini, <label class="custom-title">LEGOAS</label> menjadi perusahaan yang berada dalam naungan pemerintah sehingga peserta tidak perlu khawatir atas kredibilitas <label class="custom-title">LEGOAS</label> karena sebagai peserta lelang juga dilindungi haknya oleh Negara. Dengan masuknya <label class="custom-title">LEGOAS</label> dalam pengawasan negara, maka kewajiban dari <label class="custom-title">LEGOAS</label> juga dalam pelaksanaan lelang dan termasuk memeriksa keabsahan kepemilikan barang tersebut sehingga peserta tidak perlu dikhawatirkan dalam keabsahan kepemilikan tersebut.</p>
        </Transition>

        <Transition name="about-us-image2">
          <div class="card trust-card mt-5" v-show="flag.aboutUsImage2Flag">
            <div class="card-body p-5">
              <div class="row">
                <div class="col-6 col-lg-3 d-flex align-items-center flex-column mt-3 mt-lg-0" v-for="(trust, index) in arr_trust" :key="'trust' + index">
                  <img :src="trust.image" style="width: 3rem; height: 3rem;"/>
                  <p class="mb-0 custom-title text-center mt-2">{{ trust.title }}</p>
                  <p class="mb-0 text-center">{{ trust.content }}</p>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>

      <div class="mt-5">
        <Transition name="about-us-title3">
          <p class="mb-0 title-section" v-show="flag.aboutUsTitle3Flag">{{ $t('our_team') }}</p>
        </Transition>

        <Transition name="about-us-image3">
          <div class="row mt-5" v-show="flag.aboutUsImage3Flag">
            <div class="col-6 col-lg-3 d-flex flex-column mt-3 mt-lg-0" v-for="(team, index) in arr_team" :key="'team' + index">
              <img :src="team.image" width="100%"/>
              <p class="mb-0 team-role mt-2">{{ team.role }}</p>
              <p class="mb-0 team-name">{{ team.name }}</p>
            </div>
          </div>
        </Transition>
      </div>

      <div class="mt-5 text-center">
        <img src="@/assets/about_us_bottom.png" class="my-5 w-100" style="max-width: 36rem;"/>
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
      scrollY: 0,
      flag: {
        aboutUsTitle1Flag: false,
        aboutUsImage1Flag: false,
        aboutUsContent1Flag: false,
        aboutUsTitle2Flag: false,
        aboutUsImage2Flag: false,
        aboutUsContent2Flag: false,
        aboutUsTitle3Flag: false,
        aboutUsImage3Flag: false,
        aboutUsContent3Flag: false,
      },
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
  watch: {
    scrollY(val){
      this.flag.aboutUsTitle1Flag = val >= this.base.responsive_scroll_threshold(0)
      this.flag.aboutUsImage1Flag = val >= this.base.responsive_scroll_threshold(0)
      this.flag.aboutUsContent1Flag = val >= this.base.responsive_scroll_threshold(0)
      this.flag.aboutUsTitle2Flag = val >= this.base.responsive_scroll_threshold(0)
      this.flag.aboutUsImage2Flag = val >= this.base.responsive_scroll_threshold(0)
      this.flag.aboutUsContent2Flag = val >= this.base.responsive_scroll_threshold(0)
      this.flag.aboutUsTitle3Flag = val >= this.base.responsive_scroll_threshold(800)
      this.flag.aboutUsImage3Flag = val >= this.base.responsive_scroll_threshold(800)
      this.flag.aboutUsContent3Flag = val >= this.base.responsive_scroll_threshold(800)
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
.about-us-title1-enter-active, .about-us-title1-leave-active,
.about-us-title2-enter-active, .about-us-title2-leave-active,
.about-us-title3-enter-active, .about-us-title3-leave-active{
  transition: all 2s;
}
.about-us-title1-leave-to, .about-us-title1-enter,
.about-us-title2-leave-to, .about-us-title2-enter,
.about-us-title3-leave-to, .about-us-title3-enter {
  margin-left: -10rem !important;
  opacity: 0;
}
.about-us-content1-enter-active, .about-us-content1-leave-active,
.about-us-content2-enter-active, .about-us-content2-leave-active,
.about-us-content3-enter-active, .about-us-content3-leave-active{
  transition: all 2s;
}
.about-us-content1-leave-to, .about-us-content1-enter,
.about-us-content2-leave-to, .about-us-content2-enter,
.about-us-content3-leave-to, .about-us-content3-enter {
  margin-left: 10rem !important;
  opacity: 0;
}
.about-us-image1-enter-active, .about-us-image1-leave-active,
.about-us-image2-enter-active, .about-us-image2-leave-active,
.about-us-image3-enter-active, .about-us-image3-leave-active{
  transition: all 2s;
}
.about-us-image1-leave-to, .about-us-image1-enter,
.about-us-image2-leave-to, .about-us-image2-enter,
.about-us-image3-leave-to, .about-us-image3-enter {
  // margin-left: 10rem !important;
  opacity: 0;
}
</style>
