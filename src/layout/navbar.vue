<template>
  <div class="d-flex justify-content-between align-items-center py-4 px-5">
    <img src="@/assets/image_logo.png"/>

    <div class="d-flex align-items-center navbar-header">
      <a href="/">{{ $t("home") }}</a>
      <a class="ml-4" href="/schedule">{{ $t("auction_schedule") }}</a>
      <a class="ml-4" href="/definiton">{{ $t("auction_info") }}</a>
      <a class="ml-4" href="/">{{ $t("auction_location") }}</a>
      <a class="ml-4" href="/">{{ $t("about_us") }}</a>
      <button class="btn btn-primary ml-4" href="/">{{ $t("register") }}</button>
    </div>
  </div>
</template>

<script>
import Base from '@/utils/base'
export default{
  data(){
    return{
      base: null,
    }
  },
  created(){
    this.base = Base
  },
  methods: {
    logout(){
      localStorage.removeItem('token')
      location.href = "/auth/login"
    },
  }
}
</script>

<style lang="scss">
.navbar-header *{
  font-family: poppins-bold;
}
.navbar-header a{
  text-decoration: none;
  color: $black;
}
.navbar-header button{
  border-radius: .5rem;
}
</style>
