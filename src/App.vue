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
@media only screen and (max-width: 960px) {
  html, body{
    font-size: 12px;
  }
}
@media only screen and (min-width: 960px) {
  html, body{
    font-size: 16px;
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
</style>