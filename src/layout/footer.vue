<template>
  <div class="footer-container p-5">
    <div class="row">
      <div class="col-12 col-lg-3">
        <img src="@/assets/image_logo.png"/>
        <p class="mt-3">Alamat Legoas Indonesia<br/>120121</p>
        <div class="d-flex align-items-center">
          <font-awesome-icon icon="fa-solid fa-phone" />
          <p class="mb-0 ml-3 phone-number">+ 62 031 4784 372 12</p>
        </div>
      </div>

      <div class="col-6 col-lg-2 d-flex flex-column mt-3 mt-lg-0">
        <p class="footer-title">{{ $t("app_name") }}</p>
        <a href="/" class="footer-link">{{ $t("about_us") }}</a>
        <a href="/schedule" class="mt-3 footer-link">{{ $t("auction_schedule") }}</a>
        <a href="/" class="mt-3 footer-link">{{ $t("auction_location") }}</a>
        <a href="/" class="mt-3 footer-link">{{ $t("contact_us") }}</a>
      </div>

      <div class="col-6 col-lg-2 d-flex flex-column mt-3 mt-lg-0">
        <p class="footer-title">{{ $t("auction_info") }}</p>
        <a href="/definiton" class="footer-link">{{ $t("auction_definition") }}</a>
        <a href="/how-to" class="mt-3 footer-link">{{ $t("auction_how_to") }}</a>
        <a href="/" class="mt-3 footer-link">{{ $t("auction_rules") }}</a>
        <a href="/" class="mt-3 footer-link">{{ $t("auction_news") }}</a>
      </div>

      <div class="col-6 col-lg-2 d-flex flex-column mt-3 mt-lg-0">
        <p class="footer-title">{{ $t("join_app") }}</p>
        <a href="/" class="footer-link">{{ $t("sell_car") }}</a>
        <a href="/" class="mt-3 footer-link">{{ $t("registration") }}</a>
        <a href="/" class="mt-3 footer-link">{{ $t("login") }}</a>
      </div>

      <div class="col-6 col-lg-3 mt-3 mt-lg-0">
        <p class="footer-title">{{ $t("follow_us") }}</p>
        <div class="d-flex">
          <font-awesome-icon icon="fa-brands fa-facebook"  size="lg"/>
          <font-awesome-icon icon="fa-brands fa-twitter" class="ml-3" size="lg"/>
          <font-awesome-icon icon="fa-brands fa-linkedin" class="ml-3" size="lg"/>
          <font-awesome-icon icon="fa-brands fa-instagram" class="ml-3" size="lg"/>
          <font-awesome-icon icon="fa-brands fa-youtube" class="ml-3" size="lg"/>
        </div>
      </div>

      <div class="col-12 mt-5">
        <div class="horizontal-footer"></div>
      </div>

      <div class="col-12 mt-3 text-center">
        Copyright 2022 © Legoas, All Rights Reserved.
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.footer-container{
  background-color: $gray2;
}
.horizontal-footer{
  background-color: $gray3;
  height: 1px;
}
.phone-number{
  font-family: poppins-bold;
}
.footer-link{
  text-decoration: none;
  color: $black;
}
.footer-title{
  font-family: poppins-medium;
  font-size: 1.2rem;
  color: $black;
}
</style>