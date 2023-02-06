<template>
  <div class="">
    <div class="position-relative d-flex flex-column align-items-center px-5">
      <img src="@/assets/how_to.png" width="100%"/>
    </div>

    <div class="p-5 m-5">
      <WhyChooseUs/>

      <div class="mt-3 d-flex justify-content-center">
        <p class="mb-0">
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor nec feugiat nisl pretium fusce id. Quis auctor elit sed vulputate mi sit amet. Tortor at auctor urna nunc id cursus. Tortor consequat id porta nibh venenatis cras sed. Quis vel eros donec ac odio tempor orci dapibus. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. Lorem ipsum dolor sit amet. Nunc lobortis mattis aliquam faucibus purus. In nisl nisi scelerisque eu ultrices vitae auctor eu augue.

          Commodo viverra maecenas accumsan lacus vel facilisis. Sit amet risus nullam eget felis eget. Pellentesque id nibh tortor id aliquet. Purus gravida quis blandit turpis cursus. Massa id neque aliquam vestibulum morbi blandit cursus risus at. Fames ac turpis egestas integer. Congue eu consequat ac felis donec et odio pellentesque. Id aliquet risus feugiat in. Sed risus ultricies tristique nulla aliquet. Ac ut consequat semper viverra nam libero justo laoreet s

          Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Erat pellentesque adipiscing commodo elit at imperdiet dui. Neque volutpat ac tincidunt vitae semper quis. Scelerisque in dictum non consectetur a erat nam. Nulla pellentesque dignissim enim sit amet venenatis urna. Diam ut venenatis tellus in metus vulputate. Urna et pharetra pharetra massa massa ultricies mi quis. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Placerat duis ultricies lacus sed turpis tincidunt. Commodo viverra maecenas accumsan lacus. Pellentesque diam volutpat commodo sed egestas. Molestie nunc non blandit massa enim nec dui nunc. Tellus in metus vulputate eu scelerisque felis imperdiet. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Ut sem nulla pharetra diam sit. Fermentum iaculis eu non diam phasellus vestibulum. Interdum velit laoreet id donec ultrices.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Base from '@/utils/base';

import WhyChooseUs from '@/pages/home/component/why_choose_us.vue'

export default {
  components: {
    'WhyChooseUs': WhyChooseUs,
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

</style>
