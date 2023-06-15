<template>
  <div class="custom-navbar-padding-right custom-navbar-padding-left text-center">
    <div class="content-container text-left">
      <div class="position-relative" style="margin-top: 6.75rem;">
        <p class="m-0 general-title">{{ $t('about_us') }}</p>
      </div>

      <div class="w-100" style="padding-top: 4rem; padding-bottom: 11.8rem;">
        <Transition name="about-us-title1">
          <div class="" v-show="flag.aboutUsTitle1Flag" id="about-us-content">
            <div class="mt-5" v-html="section_content"></div>
            <!-- <div v-for="(section, index) in arr_section" :key="'section' + index" :class="{'mt-5': index > 0}">
              <div >
                <p class="mb-0 title-section" v-show="flag.aboutUsTitle1Flag" v-html="section.title"></p>
                <p class="mb-0 mt-5 content-section" v-show="flag.aboutUsContent1Flag" v-html="section.content"></p>
                <img :src="section.image" width="100%" class="mt-5" v-show="flag.aboutUsImage1Flag && section.image != null"/>
              </div>
            </div> -->
          </div>
        </Transition>

        <div class="" style="margin-top: 5.4rem;" id="trust-container">
          <Transition name="about-us-title2">
            <p class="mb-0 title-section" v-show="flag.aboutUsTitle2Flag" v-html="trust_title"></p>
          </Transition>
          <Transition name="about-us-content2" >
            <p class="mb-0 mt-3 " id="trust-content" v-show="flag.aboutUsContent2Flag" v-html="trust_content"></p>
          </Transition>

          <Transition name="about-us-image2">
            <div class="card trust-card"  v-show="flag.aboutUsImage2Flag">
              <div class="card-body p-0 p-md-5">
                <div class="row">
                  <div class="col-6 col-md-3 d-flex align-items-center flex-column mt-3 mt-md-0" v-for="(trust, index) in arr_trust" :key="'trust' + index">
                    <img :src="trust.image" style="width: 6rem; height: 6rem;"/>
                    <div v-html="trust.title" class="mt-3 trust-list"></div>
                    
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
              <div class="col-6 col-md-3 d-flex flex-column mt-3 mt-md-0" v-for="(team, index) in arr_team" :key="'team' + index">
                <vue-skeleton-loader
                  width="100%"
                  height="10rem"
                  animation="fade"
                  v-show="!team.is_image_loaded"/>
                <img :src="team.image" @load="onImageLoad(index)" v-show="team.is_image_loaded" width="100%"/>
                <p class="mb-0 team-role mt-2">{{ team.roles }}</p>
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
      arr_factor: [false, false, false, false, ],
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
      trust_title: '',
      trust_content: '',
      arr_trust: [
        {
          id: "1",
          image: Wallet,
          title: `
            <p class="mb-0 custom-title text-center mt-2">Lelang Secara Aman</p>
            <p class="mb-0 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          `,
        },
        {
          id: "1",
          image: Wallet,
          title: `
            <p class="mb-0 custom-title text-center mt-2">Lelang Secara Aman</p>
            <p class="mb-0 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          `,
        },
        {
          id: "1",
          image: Wallet,
          title: `
            <p class="mb-0 custom-title text-center mt-2">Lelang Secara Aman</p>
            <p class="mb-0 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          `,
        },
        {
          id: "1",
          image: Wallet,
          title: `
            <p class="mb-0 custom-title text-center mt-2">Lelang Secara Aman</p>
            <p class="mb-0 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          `,
        },
      ],
      arr_team: [
        {
          id: "1",
          is_image_loaded: false,
          image: OurTeam1,
          roles: "CEO LEGOAS",
          name: "Nama 1",
        },
        {
          id: "1",
          is_image_loaded: false,
          image: OurTeam2,
          roles: "Guided Tour",
          name: "Nama 2",
        },
        {
          id: "1",
          is_image_loaded: false,
          image: OurTeam3,
          roles: "Guided Tour",
          name: "Nama 3",
        },
        {
          id: "1",
          is_image_loaded: false,
          image: OurTeam3,
          roles: "Guided Tour",
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
      section_content: "",
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

    this.get_about_us_section()
    this.get_our_team_section()
    this.get_trust_section()
    this.get_trust_info()
  },
  methods: {
    onImageLoad(index){
      var team = this.arr_team[index]
      team.is_image_loaded = true
      this.$set(this.arr_team, index, team)
    },
    manage_start_animation(){
      var context = this
      this.flag.aboutUsTitle1Flag = this.base.check_start_animation(this.scrollY, this.flag.aboutUsTitle1Flag, this.arr_factor, 0)
      this.flag.aboutUsImage1Flag = this.base.check_start_animation(this.scrollY, this.flag.aboutUsImage1Flag, this.arr_factor, 0)
      this.flag.aboutUsContent1Flag = this.base.check_start_animation(this.scrollY, this.flag.aboutUsContent1Flag, this.arr_factor, 0)

      setTimeout(() => {
        if(context.flag.aboutUsContent1Flag){
          var margin = window.$('#about-us-content').height()
          context.flag.aboutUsTitle2Flag = context.base.check_start_animation(context.scrollY, context.flag.aboutUsTitle2Flag, context.arr_factor, 0, margin - margin)
          context.flag.aboutUsContent2Flag = context.base.check_start_animation(context.scrollY, context.flag.aboutUsContent2Flag, context.arr_factor, 0, margin - 300)
          
          if(context.flag.aboutUsContent2Flag){
            context.flag.aboutUsImage2Flag = context.base.check_start_animation(context.scrollY, context.flag.aboutUsImage2Flag, context.arr_factor, 0, margin + window.$('#trust-content').innerHeight() - 300)

            if(context.flag.aboutUsImage2Flag){
              margin += window.$('#trust-container').innerHeight() - 950
              context.flag.aboutUsTitle3Flag = context.base.check_start_animation(context.scrollY, context.flag.aboutUsTitle3Flag, context.arr_factor, 800, margin)
              context.flag.aboutUsImage3Flag = context.base.check_start_animation(context.scrollY, context.flag.aboutUsImage3Flag, context.arr_factor, 800, margin)
              context.flag.aboutUsContent3Flag = context.base.check_start_animation(context.scrollY, context.flag.aboutUsContent3Flag, context.arr_factor, 800, margin)
            }
          }
        }
      }, 200)
      
    },
    handleScroll(){
      this.scrollY = window.scrollY
    },
    async get_trust_info(){
      var response = await this.base.request(this.base.url_api + "/info?is_publish=1&type=trust")
      this.$set(this.arr_factor, 3, true)

      if(response != null){
        if(response.status === "success"){
          this.trust_title = response.data.title
          this.trust_content = response.data.content
        }
        else
          this.base.show_error(response.message)
      }
      else
        this.base.show_error(this.$t('server_error'))
    },
    async get_our_team_section(){
      var response = await this.base.request(this.base.url_api + "/section/our-team/all?is_publish=1")
      this.$set(this.arr_factor, 1, true)

      if(response != null){
        if(response.status === "success"){
          for(let our_team of response.data){
            our_team.image = our_team.file_name != null ? this.base.host + "/media/section/our-team?file_name=" + our_team.file_name : null
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
    async get_trust_section(){
      var response = await this.base.request(this.base.url_api + "/section/trust/all?is_publish=1")
      this.$set(this.arr_factor, 2, true)

      if(response != null){
        if(response.status === "success"){
          for(let trust of response.data){
            trust.image = this.base.host + "/media/section/trust?file_name=" + trust.file_name
            trust.name = trust.title
          }
          this.arr_trust = response.data
        }
        else
          this.base.show_error(response.message)
      }
      else
        this.base.show_error(this.$t('server_error'))
    },
    async get_about_us_section(){
      var response = await this.base.request(this.base.url_api + "/info?is_publish=1&type=about_us_section")
      this.$set(this.arr_factor, 0, true)

      if(response != null){
        if(response.status === "success"){
          // for(let about_us of response.data){
          //   about_us.image = about_us.file_name != null ? this.base.host + "/media/section/about-us?file_name=" + about_us.file_name : null
          // }
          this.section_content = response.data.content
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
#about-us-content img{
  width: 100%;
  border-radius: 1rem;
}
.trust-list > p:nth-child(1){
  min-height: 100px;
  text-align: center;
}
.trust-list > p:nth-child(2){
  text-align: justify;
  text-align-last: center;
}
</style>
