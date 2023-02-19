<template>
  <div class="navbar navbar-expand-lg d-flex justify-content-between align-items-center py-4 px-5">
    <a class="navbar-brand" href="/">
      <img src="@/assets/image_logo.png" />
    </a>
    <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>


    <div class="collapse navbar-collapse" id="navbarToggle">
      <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
        <li class="d-flex align-items-center nav-item active">
          <a class="nav-link" href="/">{{ $t("home") }}</a>
        </li>
        <li class="d-flex align-items-center nav-item">
          <a class="nav-link" href="/schedule">{{ $t("auction_schedule") }}</a>
        </li>
        <li class="d-flex align-items-center nav-item">
          <a class="nav-link" href="/definiton">{{ $t("auction_info") }}</a>
        </li>
        <li class="d-flex align-items-center nav-item">
          <a class="nav-link" href="/location">{{ $t("auction_location") }}</a>
        </li>
        <li class="d-flex align-items-center nav-item">
          <a class="nav-link" href="/about-us">{{ $t("about_us") }}</a>
        </li>
        <li class="d-flex align-items-center nav-item">
          <a class="nav-link" href="/">{{ $t("sell") }}</a>
        </li>
        <li class="d-flex align-items-center nav-item">
          <div class="nav-link">
            <a class="btn btn-primary text-white px-3" href="/">{{ $t("register") }}</a>
          </div>
        </li>
      </ul>
    </div>

    <!-- <div class="d-flex align-items-center navbar-header">
      <a href="/">{{ $t("home") }}</a>
      <a class="ml-4" href="/schedule">{{ $t("auction_schedule") }}</a>
      <a class="ml-4" href="/definiton">{{ $t("auction_info") }}</a>
      <a class="ml-4" href="/">{{ $t("auction_location") }}</a>
      <a class="ml-4" href="/">{{ $t("about_us") }}</a>
      <button class="btn btn-primary ml-4" href="/">{{ $t("register") }}</button>
    </div> -->
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
