<template>
  <div class="custom-navbar-padding-right custom-navbar-padding-left text-center">
    <div class="content-container text-left">
      <div class="position-relative" style="margin-top: 6.75rem;">
        <p class="m-0 general-title">{{ $t('about_us') }}</p>
      </div>

      <div class="w-100" style="padding-top: 4rem; padding-bottom: 11.8rem;">
        <div class="">
          <div v-for="(section, index) in arr_section" :key="'section' + index" :class="{'mt-5': index > 0}">
            <Transition name="about-us-title1">
              <p class="mb-0 title-section" v-show="flag.aboutUsTitle1Flag" v-html="section.title"></p>
            </Transition>
            <Transition name="about-us-content1">
              <p class="mb-0 mt-5 content-section" v-show="flag.aboutUsContent1Flag" v-html="section.content"></p>
            </Transition>
            <Transition name="about-us-image1">
              <img :src="section.image" width="100%" class="mt-5" v-show="flag.aboutUsImage1Flag"/>
            </Transition>
          </div>
        </div>

        <div class="" style="margin-top: 5.4rem;">
          <Transition name="about-us-title2">
            <p class="mb-0 title-section" v-show="flag.aboutUsTitle2Flag">{{ $t('trusting_legoas') }}</p>
          </Transition>
          <Transition name="about-us-content2" >
            <p class="mb-0 mt-5 content-section" v-show="flag.aboutUsContent2Flag"><label class="custom-title">LEGOAS</label> memiliki ijin operasional Balai Lelang yang disahkan melalui Keputusan Menteri Keuangan no 28/KM.6/2018. Dalam hal ini, <label class="custom-title">LEGOAS</label> menjadi perusahaan yang berada dalam naungan pemerintah sehingga peserta tidak perlu khawatir atas kredibilitas <label class="custom-title">LEGOAS</label> karena sebagai peserta lelang juga dilindungi haknya oleh Negara. Dengan masuknya <label class="custom-title">LEGOAS</label> dalam pengawasan negara, maka kewajiban dari <label class="custom-title">LEGOAS</label> juga dalam pelaksanaan lelang dan termasuk memeriksa keabsahan kepemilikan barang tersebut sehingga peserta tidak perlu dikhawatirkan dalam keabsahan kepemilikan tersebut.</p>
          </Transition>

          <Transition name="about-us-image2">
            <div class="card trust-card" style="margin-top: 6.5rem;" v-show="flag.aboutUsImage2Flag">
              <div class="card-body p-5">
                <div class="row">
                  <div class="col-6 col-lg-3 d-flex align-items-center flex-column mt-3 mt-lg-0" v-for="(trust, index) in arr_trust" :key="'trust' + index">
                    <img :src="trust.image" style="width: 3rem; height: 3rem;"/>
                    <p class="mb-0 custom-title text-center mt-2" v-html="trust.title"></p>
                    <p class="mb-0 text-center" v-html="trust.content"></p>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>

        <div class="" style="margin-top: 7rem;">
          <Transition name="about-us-title3">
            <p class="mb-0 title-section" v-show="flag.aboutUsTitle3Flag">{{ $t('our_team') }}</p>
          </Transition>

          <Transition name="about-us-image3">
            <div class="row mt-5" v-show="flag.aboutUsImage3Flag">
              <div class="col-6 col-lg-3 d-flex flex-column mt-3 mt-lg-0" v-for="(team, index) in arr_team" :key="'team' + index">
                <vue-skeleton-loader
                  width="100%"
                  height="10rem"
                  animation="fade"
                  v-show="!team.is_image_loaded"/>
                <img :src="team.image" @load="onImageLoad(index)" v-show="team.is_image_loaded" width="100%"/>
                <p class="mb-0 team-role mt-2">{{ team.role }}</p>
                <p class="mb-0 team-name">{{ team.name }}</p>
              </div>
            </div>
          </Transition>
        </div>

        <div class="text-center" style="margin-top: 10rem;">
          <img src="@/assets/about_us_bottom.png" class="my-5 w-100" style="max-width: 36rem;"/>
        </div>
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
import SectionImage from '@/assets/about_us_top.png'

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
          is_image_loaded: false,
          image: OurTeam1,
          role: "CEO LEGOAS",
          name: "Nama 1",
        },
        {
          id: "1",
          is_image_loaded: false,
          image: OurTeam2,
          role: "Guided Tour",
          name: "Nama 2",
        },
        {
          id: "1",
          is_image_loaded: false,
          image: OurTeam3,
          role: "Guided Tour",
          name: "Nama 3",
        },
        {
          id: "1",
          is_image_loaded: false,
          image: OurTeam3,
          role: "Guided Tour",
          name: "Nama 4",
        },
      ],
      arr_section: [
        {
          title: this.$t('our_story'),
          content: `Berdiri dari tahun 2018, <label class="custom-title">LEGOAS</label> merupakan perusahaan yang berdiri dalam bidang lelang, yang melayani jasa pelelalngan barang anda.`,
          image: SectionImage,
        },
      ],
    }
  },
  watch: {
    scrollY(val){
      this.flag.aboutUsTitle1Flag = this.flag.aboutUsTitle1Flag || (!this.flag.aboutUsTitle1Flag && val >= this.base.responsive_scroll_threshold(0))
      this.flag.aboutUsImage1Flag = this.flag.aboutUsImage1Flag || (!this.flag.aboutUsImage1Flag && val >= this.base.responsive_scroll_threshold(0))
      this.flag.aboutUsContent1Flag = this.flag.aboutUsContent1Flag || (!this.flag.aboutUsContent1Flag && val >= this.base.responsive_scroll_threshold(0))
      this.flag.aboutUsTitle2Flag = this.flag.aboutUsTitle2Flag || (!this.flag.aboutUsTitle2Flag && val >= this.base.responsive_scroll_threshold(0))
      this.flag.aboutUsImage2Flag = this.flag.aboutUsImage2Flag || (!this.flag.aboutUsImage2Flag && val >= this.base.responsive_scroll_threshold(0))
      this.flag.aboutUsContent2Flag = this.flag.aboutUsContent2Flag || (!this.flag.aboutUsContent2Flag && val >= this.base.responsive_scroll_threshold(0))
      this.flag.aboutUsTitle3Flag = this.flag.aboutUsTitle3Flag || (!this.flag.aboutUsTitle3Flag && val >= this.base.responsive_scroll_threshold(800))
      this.flag.aboutUsImage3Flag = this.flag.aboutUsImage3Flag || (!this.flag.aboutUsImage3Flag && val >= this.base.responsive_scroll_threshold(800))
      this.flag.aboutUsContent3Flag = this.flag.aboutUsContent3Flag || (!this.flag.aboutUsContent3Flag && val >= this.base.responsive_scroll_threshold(800))
    },
  },
  created(){
    this.base = new Base()
    window.addEventListener('scroll', this.handleScroll)
    this.scrollY = 1
  },
  methods: {
    onImageLoad(index){
      var team = this.arr_team[index]
      team.is_image_loaded = true
      this.$set(this.arr_team, index, team)
    },
    handleScroll(){
      this.scrollY = window.scrollY
    },
    async get_our_team_section(){
      var response = await this.base.request(this.base.url_api + "/our-team/all?is_publish=1")

      if(response != null){
        if(response.status === "success"){
          for(let our_team of response.data){
            our_team.image = this.base.host + "/media/section/our_team?file_name=" + our_team.file_name
            our_team.name = our_team.title
          }
          this.arr_team = response.data
        }
        else
          this.base.show_error(response.message)
      }
      else
        this.base.show_error(this.$t('server_error'))
    },
    async get_about_us_section(){
      var response = await this.base.request(this.base.url_api + "/section/about-us/all?is_publish=1")

      if(response != null){
        if(response.status === "success"){
          for(let about_us of response.data){
            about_us.image = this.base.host + "/media/section/about_us?file_name=" + about_us.file_name
          }
          this.arr_section = response.data
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
  transform: translateX(-10rem);
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
  transform: translateX(10rem);
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
