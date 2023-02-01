<template>
  <div>
    <input type="text" class="form-control" id="form-send_to" :placeholder="placeholder" v-model="model" @keyup="on_search" @focus="on_focus">
    <div class="" v-show="is_user_list_show">
      <ul id="user_list" v-show="!is_progress">
        <li v-for="(data,index) in arr" :key="index" :class="{'bg-primary text-white': data.name == model}">
          <div @click="on_select(index)">{{ data.name }}</div>
        </li>
      </ul>
      <ul id="user_list" v-show="is_progress">
        <li>Please Wait...</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['selected','arr','placeholder',],
  watch: {
    selected(value){
      this.model = value
    }
  },
  data(){
    return{
      is_user_list_show: false,
      model: '',
      timeout: null,
      is_progress: false,
    }
  },
  methods: {
    on_blur(){
      var context = this
      setTimeout(() => {
        context.is_user_list_show = false
      },100)
    },
    on_focus(){
      this.is_user_list_show = true
    },
    on_search(e){
      var context = this

      if(e.keyCode == 40 && this.arr.length > 0)
        context.$emit('on_arrow_down')
      else if(e.keyCode == 38 && this.arr.length > 0)
        context.$emit('on_arrow_up')
      else{
        this.is_progress = true
        clearTimeout(this.timeout)

        this.timeout = setTimeout(() => {
          context.$emit('on_search',context.model)
          this.is_progress = false
        },1000)
      }
    },
    on_select(index){
      this.$emit('on_select',index)
      // this.is_user_list_show = false
    }
  }
}
</script>
