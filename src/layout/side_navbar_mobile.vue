<template>
  <div class="navbar-collapse pt-5 pt-lg-0" :class="{'button-toggle': isNavbarToggle}" id="sideNavbarToggle">
    <ul class="list-group navbar-side">
      <li class="list-group-item nav-item" style="border-top: none;">
        <a class="nav-link" :class="{'active': currentRoute === '/'}" href="/">{{ $t("home") }}</a>
      </li>
      <li class="list-group-item nav-item">
        <a class="nav-link" :class="{'active': currentRoute === '/schedule'}" href="/schedule">{{ $t("auction_schedule") }}</a>
      </li>
      <li class="list-group-item nav-item dropdown nav-dropdown p-0">
        <!-- <a class="nav-link" href="/definiton">{{ $t("auction_info") }}</a> -->
        <div>
          <a class="nav-link m-3" 
            :class="{'active': currentRoute === '/definiton' || currentRoute === '/how-to' || currentRoute === '/rules' || currentRoute === '/news' || currentRoute === '/article'}" 
            href="#sideNavCollapse" 
            role="button" 
            data-toggle="collapse" 
            aria-expanded="false">
            <div class="d-flex align-items-center">
              {{ $t("auction_info") }}
              <font-awesome-icon icon="fa-solid fa-chevron-down" class="nav-arrow ml-2"/>
            </div>
          </a>
          <div class="collapse" id="sideNavCollapse">
            <ul class="list-group navbar-side mt-3">
              <a class="list-group-item px-5" :class="{'active': currentRoute === '/definiton'}" href="/definiton">{{ $t("auction_definition") }}</a>
              <a class="list-group-item px-5" :class="{'active': currentRoute === '/how-to'}" href="/how-to">{{ $t("auction_how_to") }}</a>
              <a class="list-group-item px-5" :class="{'active': currentRoute === '/rules'}" href="/rules">{{ $t("auction_rules") }}</a>
              <a class="list-group-item px-5" :class="{'active': currentRoute === '/news'}" href="/news">{{ $t("auction_news") }}</a>
              <a class="list-group-item px-5" style="border-bottom: none;" :class="{'active': currentRoute === '/article'}" href="/article">{{ $t("article") }}</a>
            </ul>
          </div>
        </div>
      </li>
      <li class="list-group-item nav-item">
        <a class="nav-link" :class="{'active': currentRoute === '/location'}" href="/location">{{ $t("auction_location") }}</a>
      </li>
      <li class="list-group-item nav-item">
        <a class="nav-link" :class="{'active': currentRoute === '/about-us'}" href="/about-us">{{ $t("about_us") }}</a>
      </li>
      <li class="list-group-item nav-item">
        <a class="nav-link" :class="{'active': currentRoute === '/sell'}" href="/sell">{{ $t("sell") }}</a>
      </li>
      <li class="list-group-item nav-item">
        <div class="nav-link">
          <a class="btn btn-primary text-white px-3" href="/">{{ $t("register") }}</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Base from '@/utils/base'
export default{
  props: ['isNavbarToggle', ],
  data(){
    return{
      base: null,
      currentRoute: '/',
    }
  },
  watch: {
  },
  created(){
    this.base = new Base()
    this.currentRoute = this.$router.currentRoute.path
  },
  methods: {
  }
}
</script>

<style lang="scss">
@media (max-width: 992px) {
  .navbar-collapse {
    position: fixed;
    z-index: 10;
    top: 0;
    left: -75%;
    padding-bottom: 3rem;
    width: 75%;
    height: 100%;
    background-color: $white;
  }

  .navbar-collapse {
    left: -75%;
    transition: left 500ms ease-in-out;
  }

  .navbar-collapse.button-toggle {
    left: 0;
    transition: left 500ms ease-in-out;
  }
}
.navbar-side{
  border-radius: 0;
}
.navbar-side .list-group-item{
  border-right: none;
  border-left: none;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>
