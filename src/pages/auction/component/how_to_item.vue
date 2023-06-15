<template>
  <div class="">
    <Transition name="how-to-title1">
      <div v-show="howToTitle1Flag">
        <div class="d-flex align-items-center">
          <img :src="image" style="width: 6rem;"/>
          <p class="mb-0 ml-2 section-title" v-html="title"></p>
        </div>
      </div>
    </Transition>

    <div class="row mx-3" style="margin-top: 3.3rem;">
      <div class="col-12 col-md-6">
        <table>
          <tr v-for="x in Math.ceil(arr.length / 2)" :key="'participantOdd' + x">
            <td style="vertical-align: top;" >
              <Transition name="how-to-number">
                <p v-show="howToTitle1Flag" class="mb-0 how-to-item-number mt-1">{{ ('0' + (x)).slice(-2) }}</p>
              </Transition>
            </td>
            <td>
              <Transition name="how-to-content">
                <div v-show="howToTitle1Flag" class="ml-2" :style="{marginBottom: x < Math.ceil(arr.length / 2) ? '2rem' : 0}">
                  <p class="mb-0 how-to-item-title" v-html="arr[x - 1].title"></p>
                  <p class="mb-0 how-to-item-content mt-2" v-html="arr[x - 1].content"></p>
                </div>
              </Transition>
            </td>
          </tr>
        </table>
      </div>

      <div class="col-12 col-md-6">
        <table>
          <tr v-for="x in Math.floor(arr.length / 2)" :key="'participantEven' + x">
            <td style="vertical-align: top;">
              <Transition name="how-to-number">
                <p v-show="howToTitle1Flag" class="mb-0 how-to-item-number mt-1">{{ ('0' + (Math.ceil(arr.length / 2) + x)).slice(-2) }}</p>
              </Transition>
            </td>
            <td>
              <Transition name="how-to-content">
                <div v-show="howToTitle1Flag" class="ml-2"  :style="{marginBottom: x < Math.ceil(arr.length / 2) ? '2rem' : 0}">
                  <p class="mb-0 how-to-item-title" v-html="arr[Math.ceil(arr.length / 2) + x - 1].title"></p>
                  <p class="mb-0 how-to-item-content mt-2" v-html="arr[Math.ceil(arr.length / 2) + x - 1].content"></p>
                </div>
              </Transition>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Base from '@/utils/base';

export default {
  props: ["arr", "title", "howToTitle1Flag", "image",],
  components: {
  },
  data(){
    return{
      base: null,
      
    }
  },
  created(){
    this.base = new Base()
  },
  methods: {
  }
}
</script>

<style lang="scss">
.how-to-item-number{
  font-size: 1.8rem;
  color: $primary;
  font-family: poppins-bold;
  line-height: 100%;
}
.how-to-item-title{
  font-size: 1.2rem;
  font-family: poppins-bold;
  line-height: 120%;
}
.how-to-item-content{
  color: $gray6;
}
.how-to-title1-enter-active, .how-to-title1-leave-active{
  transition: all 2s;
}
.how-to-title1-leave-to, .how-to-title1-enter {
  transform: translateY(-10rem);
  // margin-left: -10rem !important;
  opacity: 0;
}
.how-to-number-enter-active, .how-to-number-leave-active{
  transition: all 2s;
}
.how-to-number-leave-to, .how-to-number-enter {
  transform: translateX(-10rem);
  // margin-left: -10rem !important;
  opacity: 0;
}
.how-to-content-enter-active, .how-to-content-leave-active{
  transition: all 2s;
}
.how-to-content-leave-to, .how-to-content-enter {
  transform: translateX(10rem);
  // margin-left: -10rem !important;
  opacity: 0;
}
</style>
