<template>
  <div class="">
    <div class="p-5">
      <div class="card border-0 register-card">
        <div class="card-body p-5">
          <div class="row">
            <div class="col-12 col-lg-6">
              <div class="card border-0 form-card">
                <div class="card-body p-5">
                  <p class="mb-0 form-title">Hubungi <label class="text-primary mb-0">Legoas</label> untuk dilayani Oleh Tim Kami</p>

                  <div class="row mt-3">
                    <div class="col-12 col-lg-6">
                      <div class="form-group">
                        <label class="form-label">{{ $t("your_name") }}<label class="text-danger mb-0">*</label></label>
                        <input class="form-control" v-model="name" :placeholder="$t('input_your_name')"/>
                      </div>
                    </div>

                    <div class="col-12 col-lg-6">
                      <div class="form-group">
                        <label class="form-label">{{ $t("your_email") }}<label class="text-danger mb-0">*</label></label>
                        <input class="form-control" v-model="email" :placeholder="$t('input_your_email')"/>
                      </div>
                    </div>

                    <div class="col-12 col-lg-6 mt-2">
                      <div class="form-group">
                        <label class="form-label">{{ $t("seller_category") }}<label class="text-danger mb-0">*</label></label>
                        <Select2 v-model="category"
                          :settings="{width: '100%', height: '100%',}"
                          :options="arr_category" 
                          @change="onCategoryChanged($event)" 
                          @select="onCategorySelect($event)" />
                      </div>
                    </div>

                    <div class="col-12 col-lg-6 mt-2">
                      <div class="form-group">
                        <label class="form-label">{{ $t("your_phone") }}<label class="text-danger mb-0">*</label></label>
                        <input class="form-control" v-model="phone" :placeholder="$t('input_your_phone')"/>
                      </div>
                    </div>

                    <div class="col-12 mt-2">
                      <div class="form-group">
                        <label class="form-label">{{ $t("your_message") }}</label>
                        <textarea class="form-control" v-model="message" :placeholder="$t('input_your_message')"></textarea>
                      </div>
                    </div>

                    <div class="col-12 mt-2">
                      <button class="btn btn-primary w-100" @click="submit">{{ $t('submit') }}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-lg-6 px-5 mt-3 mt-lg-0">
              <Transition name="register-title1">
                <div v-show="flag.registerTitle1Flag">
                  <p class="mb-0 register-banner">Cara Baru Jual Mobil Yang Terpercaya.</p>
                  <img src="@/assets/register_image.png" width="100%"/>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Base from '@/utils/base';

export default {
  data(){
    return{
      base: null,
      scrollY: 0,
      flag: {
        registerTitle1Flag: false,
      },
      name: "",
      email: "",
      category: "",
      phone: "",
      arr_category: [
        {
          id: "1",
          text: this.$t("newest"),
        },
        {
          id: "2",
          text: this.$t("oldest"),
        },
      ],
      message: "",
    }
  },
  watch: {
    phone(val){
      this.phone = this.base.phone_validation(val)
    },
    scrollY(val){
      this.flag.registerTitle1Flag = val >= this.base.responsive_scroll_threshold(0)
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
    async submit(){
      if(this.name === "")
        this.base.show_error(this.$t('name_empty'))
      else if(this.email === "")
        this.base.show_error(this.$t('email_empty'))
      else if(this.category === "")
        this.base.show_error(this.$t('category_empty'))
      else if(this.phone === "")
        this.base.show_error(this.$t('phone_empty'))
      else if(this.base.validate_email(this.email))
        this.base.show_error(this.$t('not_email_format'))
      else{
        // var data = {
        //   name: this.name,
        //   email: this.email,
        //   category: this.category,
        //   phone: this.phone,
        //   message: this.message,
        // }
      }
    }
  }
}
</script>

<style lang="scss">
.register-banner{
  font-size: 3rem;
  font-family: poppins-bold;
  color: $white;
}
.form-title{
  font-family: poppins-medium;
  font-size: 1.5rem;
}
.form-label{
  color: $gray11;
  margin-bottom: .5rem; 
}
.register-card{
  border-radius: 1rem;
  background-color: $blue1;
}
.form-card{
  border-radius: 1rem;
}
.register-title1-enter-active, .register-title1-leave-active{
  transition: all 2s;
}
.register-title1-leave-to, .register-title1-enter {
  margin-left: 10rem !important;
  opacity: 0;
}
</style>
