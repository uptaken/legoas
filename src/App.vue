<template>
  <div id="app" v-if="!this.$route.path.match(/\/auth*/g)">
    <div id="content">
      <navbar/>
      <div class="">
        <router-view/>
      </div>
    </div>
    <footer1/>
  </div>
  <div v-else>
    <router-view/>
  </div>
</template>

<script>
import footer1 from './layout/footer'
import navbar from './layout/navbar'

export default {
  components: {
    footer1, navbar,
  },
  created(){
    // if(sessionStorage.message != null){
    //   this.$toasted.show(sessionStorage.message)
    //   sessionStorage.removeItem('message')
    // }
  },
  mounted(){
    // if(!this.$route.path.match(/\/auth*/g))
    //   this.get_profile()
  },
  methods:{
  }
}
</script>

<style lang="scss">
@media only screen and (max-width: 576px) {
  html, body{
    font-size: 12px;
  }
  .custom-navbar-padding{
    padding: 1.5rem 3rem;
  }
  .custom-navbar-padding-right{
    padding-right: 1rem;
  }
  .custom-navbar-padding-left{
    padding-left: 1rem;
  }
}
@media only screen and (min-width: 576px) and (max-width: 960px) {
  html, body{
    font-size: 12px;
  }
  .custom-navbar-padding{
    padding: 1.5rem 3rem;
  }
  .custom-navbar-padding-right{
    padding-right: 3rem;
  }
  .custom-navbar-padding-left{
    padding-left: 3rem;
  }
}
@media only screen and (min-width: 960px) {
  html, body{
    font-size: 16px;
  }
  .custom-navbar-padding{
    padding: 1.5rem 10rem;
  }
  .custom-navbar-padding-right{
    padding-right: 10rem;
  }
  .custom-navbar-padding-left{
    padding-left: 10rem;
  }
}

html, body{
  font-family: poppins-regular;
  
}
.general-title{
  font-family: poppins-bold;
  font-size: 2rem;
}
.navigation{
  color: $gray8;
}
.navigation.navigation-now{
  font-family: poppins-medium;
  text-decoration: underline;
}
.select2-container .select2-selection--single {
  height: 2.3rem;
}
.select2-selection__arrow {
  height: 100% !important;
}
.select2-selection__rendered {
  height: 100% !important;
  display: flex !important;
  align-items: center;
  line-height: 100% !important;
}
</style>