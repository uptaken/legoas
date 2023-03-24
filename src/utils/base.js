import axios from 'axios'

export default class Base{
  host = "https://legoas-api.quantumtri.com"
  // host = ""
  url_api = this.host + "/api"
  version = ""
  locale_string = "id-ID"
  local_currency = "Rp."
  local_area_phone = "+62"
  wait_time = 1500
  app_version = '0.2.0016'

  host2 = "https://demo.legoas.co.id:8443"
  url_api2 = this.host2 + "/api/portal"
  auth = "Basic ODUwMWRjNjRiOTEzNDcyZmE0Mjc0MTE5MTEzYjdjNGQ6TFNTLWRjYTU0ZDQ0ODFjZDRlYTU4NDAwYzk4NDM3N2EzMzk1"

  constructor(){
  }

  async request(url, method = 'get', data = {}, with_modal = true, onUploadProgress = () => {}){
    try{
      axios.defaults.headers.common['Accept'] = 'application/json'

      var context = this
      var header = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Type": "web",
      }
      var token = await window.localStorage.getItem('token')
      if(url.includes(this.host2))
        header['Authorization'] = this.auth
      else if(token != null && token != '')
        header['Authorization'] = token

      var response
      if(method === 'get'){
        for(let x in data)
          url += (url.includes('?') ? '&' : '?') + x + "=" + (Array.isArray(data[x]) ? JSON.stringify(data[x]) : data[x])

        response = await axios.get(url, {
          headers: header,
        })
        .catch(function (error) {
          if (error.response.code != 200) {
            context.show_error(error.response.data)
          }
        })
      }
      else if(method === 'post')
        response = await axios.post(url, data, {
          headers: header,
          onUploadProgress
        })
        .catch(function (error) {
          if (error.response.code != 200) {
            context.show_error(error.response.data)
          }
        })
      else if(method === 'put')
        response = await axios.put(url, data, {
          headers: header,
          onUploadProgress
        })
        .catch(function (error) {
          if (error.response.code != 200) {
            context.show_error(error.response.data)
          }
        })
      else if(method === 'delete')
        response = await axios.delete(url, {
          headers: header,
          data: data,
        })
        .catch(function (error) {
          if (error.response.code != 200) {
            context.show_error(error.response.data)
          }
        })

      if(with_modal){
        setTimeout(() => {
        }, 500)
      }

      return response.data
    } catch(error){
      console.log(error.response.data)
    }
  }

  validate_email(email){
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  }

  check_phone_format(data){
    return data.length > 0 && data[data.length - 1].match(/^[\d\s]+$/g) == null ? data.substring(0, data.length - 1) : data
  }

  str_to_double(data, default_value = '0'){
    var value
    if(data != '')
      value = parseFloat(data.replace(/\./g,'').replace(/,/g,'.'))
    else
      value = default_value
    return value
  }

  responsive_scroll_threshold(value, additional_margin = 0){
    if(window.screen.width < 720)
      value = value * (12 / 16) + additional_margin
    else if(window.screen.width >= 720 && window.screen.width < 960)
      value = value * (12 / 16) + additional_margin
    return value
  }

  check_start_animation(scrollY, flag, arr_factor, scroll_threshold = 0, additional_margin = 0){
    var temp = true
    for(let factor of arr_factor){
      if(!factor){
        temp = false
        break
      }
    }

    return (flag || (!flag && scrollY >= this.responsive_scroll_threshold(scroll_threshold, additional_margin))) && temp
  }

  phone_validation(data, max_length = 12){
    data = String(this.str_to_double(data, ''))
    if(isNaN(data))
      data = '0'
    if(data.charAt(0) === '0')
      data = data.slice(1)
    if(max_length > 0 && data.length > max_length)
      data = data.substring(0, max_length)
    return data
  }

  to_currency_format(data, max_number = 100000000, max_comma_length = 2){
    var value = data
    
    if(value[value.length - 1] !== ","){
      var is_include_comma = false
      var is_convert_double = true
      var index_comma = 0
      for(let x = 0; x < value.length; x++){
        if(value[x] === ","){
          is_include_comma = true
          index_comma = x
        }
        else if(is_include_comma && x == value.length - 1 && value[x] === "0")
          is_convert_double = false
      }

      if(is_include_comma){
        is_convert_double = value.length - index_comma > max_comma_length && value[value.length - 2] !== "0"
        value = value.substring(0, index_comma + 1 + max_comma_length)
      }
      
      
      if(is_convert_double){
        value = this.str_to_double(value)
        if(isNaN(value))
          value = 0
        if(value > max_number)
          value = max_number
      }
    }

    return value.toLocaleString(this.locale_string)
  }

  show_error(message = ""){
    // showSnackBar({
    //   message: message,
    //   textColor: '#FFF',      // message text color
    //   position: 'top',  // enum(top/bottom).
    //   confirmText: '', // button text.
    //   duration: 2000,   // (in ms), duartion for which snackbar is visible.
    // })
    alert(message)
    // this.$toasted.show(message)
    // sessionStorage.removeItem('message')
  }
}
