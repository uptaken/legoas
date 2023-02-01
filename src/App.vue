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
html, body{
  font-family: poppins-regular;
}
</style>