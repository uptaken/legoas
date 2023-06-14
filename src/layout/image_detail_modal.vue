<template>
  <div class="modal fade" id="image_detail_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-12">
              <img :src="selected_image" style="width: 100%; border-radius: 1rem;"/>
            </div>
            <!-- <div class="col-12 col-md-6">
              <div class="row" style="overflow-y: scroll; max-height: 100%;">
                <div v-for="(image, index) in arr_image" :key="'image' + index" 
                  class="image-slick col-6 col-md-4 mb-3"
                  @click="onSelectedImage(index)">
                  <div class="container-image">
                    <img :src="image" style="" :class="{'active': image === selected_image}"/>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Base from '@/utils/base'

export default{
  props: ['selected_image', ],
  data(){
    return{
      base: null,
    }
  },
  watch: {
    
  },
  created(){
    this.base = new Base()
    
  },
  methods: {
    // onSelectedImage(index){
    //   this.$emit('onSelectedImage', index)
    // }
  }
}
</script>

<style lang="scss">
.container-image .active{
  border: .4rem solid $blue;
}
</style>
