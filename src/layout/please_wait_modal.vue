<template>
  <div class="modal fade" id="please_wait_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ $t('notice') }}</h5>
        </div>
        <div class="modal-body">
          {{ $t('please_wait') }}
        </div>
      </div>
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
    this.base = new Base()
  },
}
</script>
