<template>
  <div class="">
    <div class="d-flex align-items-center">
      <img src="@/assets/how_to_icon.png" style="width: 6rem;"/>
      <p class="mb-0 ml-2 section-title" v-html="title"></p>
    </div>

    <div class="row mx-3">
      <div class="col-12 col-lg-6">
        <table>
          <tr v-for="x in Math.ceil(arr.length / 2)" :key="'participantOdd' + x">
            <td style="vertical-align: top;" >
              <p class="mb-0 content-number mt-1">{{ ('0' + (x)).slice(-2) }}</p>
            </td>
            <td>
              <div class="ml-2" :class="{'mb-4': x < Math.ceil(arr.length / 2)}">
                <p class="mb-0 content-title">{{ arr[x - 1].title }}</p>
                <p class="mb-0 content-content">{{ arr[x - 1].content }}</p>
              </div>
            </td>
          </tr>
        </table>
      </div>

      <div class="col-12 col-lg-6">
        <table>
          <tr v-for="x in Math.floor(arr.length / 2)" :key="'participantEven' + x">
            <td style="vertical-align: top;">
              <p class="mb-0 content-number mt-1">{{ ('0' + (Math.ceil(arr.length / 2) + x)).slice(-2) }}</p>
            </td>
            <td>
              <div class="ml-2"  :class="{'mb-4': x < Math.ceil(arr.length / 2)}">
                <p class="mb-0 content-title">{{ arr[Math.ceil(arr.length / 2) + x - 1].title }}</p>
                <p class="mb-0 content-content">{{ arr[Math.ceil(arr.length / 2) + x - 1].content }}</p>
              </div>
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
  props: ["arr", "title",],
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
.content-number{
  font-size: 1.8rem;
  color: $primary;
  font-family: poppins-bold;
}
.content-title{
  font-size: 1.2rem;
  font-family: poppins-bold;
}
.content-content{
  color: $gray6;
}
</style>
