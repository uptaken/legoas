<template>
  <div class="custom-navbar-padding-right custom-navbar-padding-left text-center">
    <div class="content-container text-left">
      <div class="position-relative" style="margin-top: 3.8rem;">
        <div class="d-flex">
          <p class="mb-0 navigation">{{ $t('auction_info') }}</p>
          <p class="mb-0 navigation">&nbsp;/&nbsp;</p>
          <p class="mb-0 navigation navigation-now">{{ $t('article') }}</p>
        </div>
        <p class="mb-0 general-title">{{ $t('article') }}</p>
      </div>

      <div class=" w-100" style="padding-top: 6.5rem; padding-bottom: 15.6rem;">
        <div class="mt-3 w-100" style="cursor: pointer;" @click="toDetail()">
          <div class="row">
            <Transition name="article-image1">
              <div class="col-12 col-lg-6" v-show="flag.articleImage1Flag">
                <img :src="image" width="100%" class="article-image"/>
              </div>
            </Transition>
            <Transition name="article-title1">
              <div class="col-12 col-lg-6 pt-3 pt-lg-0" v-show="flag.articleTitle1Flag">
                <div class="d-flex align-items-center w-100">
                  <div class=" w-100">
                    <p class="mb-0 title-section">{{ title }}</p>
                    <p class="mb-0 content-section mt-3 w-100" v-html="description"></p>
                    <div class="d-flex align-items-center mt-3">
                      <img src="@/assets/clock_icon.png" style="width: 1.1rem;"/>
                      <p class="ml-2 mb-0 recommendation-info">{{ date.format('DD MMMM YYYY') }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>

        <div class="w-100" style="margin-top: 4rem;">
          <div class="card article-filter-card">
            <div class="card-body" style="padding: 2.8rem 3.75rem;">
              <div class="d-flex justify-content-between">
                <div class="d-flex align-items-center">
                  <p class="mb-0 content-content">Filter</p>
                  <Select2 v-model="filter"
                    class="ml-5 filter-select h-100" 
                    :options="arr_filter" 
                    :settings="{width: '10rem',}"
                    @select="onFilterSelect($event)" />
                </div>
                <div>
                  <div class="d-flex align-items-center article-search-input-card py-1 px-3">
                    <img src="@/assets/icon_search.png" style="width: 1rem; height: 1rem;"/>
                    <input class="form-control article-search-input ml-3" v-model="search" :placeholder="$t('search_article')"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="!isLoading">
          <div class="w-100" style="margin-top: 3.8rem;">
            <div class="row">
              <div v-for="(article, index) in arr_article" :key="index" class="col-6 col-lg-4 mt-3">
                <Transition name="article-item">
                  <ArticleItem :data="article" :index="index" :total_data="arr_article.length"/>
                </Transition>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="d-flex justify-content-center align-items-center" style="height: 20rem">
          <img src="@/assets/image_logo.png"/>
        </div>

        <div class="custom-pagination-container">
          <CustomPagination :total_page="total_page" :current_page="current_page" @next_action="next_action" @previous_action="previous_action" @select_page="select_page"/>
        </div>
          
      </div>
    </div>
  </div>
</template>

<script>
import Base from '@/utils/base';
import moment from 'moment';

import Image from '@/assets/Intersect.png';

import ArticleItem from '@/pages/home/component/article_item.vue'
import CustomPagination from '@/layout/custom_pagination.vue'

export default {
  components: {
    'ArticleItem': ArticleItem,
    'CustomPagination': CustomPagination,
  },
  data(){
    return{
      base: null,
      scrollY: 0,
      arr_factor: [false, ],
      flag: {
        articleImage1Flag: false,
        articleTitle1Flag: false,
        articleItemFlag: false,
      },
      isLoading: true,
      total_page: 10,
      current_page: 1,
      image: Image,
      title: "Lorem ipsum dolor sit amet consectetur adipisc",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ....",
      date: moment(),
      search: "",
      filter: "newest",
      arr_filter: [
        {
          id: "newest",
          text: this.$t("newest"),
        },
        {
          id: "oldest",
          text: this.$t("oldest"),
        },
      ],
      arr_article: [
        {
          id: "1",
          image: Image,
          date: moment(),
          title: "Lorem ipsum dolor sit amet consectetur adipisc",
          description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        },
        {
          id: "1",
          image: Image,
          date: moment(),
          title: "Lorem ipsum dolor sit amet consectetur adipisc",
          description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        },
        {
          id: "1",
          image: Image,
          date: moment(),
          title: "Lorem ipsum dolor sit amet consectetur adipisc",
          description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        },
        {
          id: "1",
          image: Image,
          date: moment(),
          title: "Lorem ipsum dolor sit amet consectetur adipisc",
          description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        },
        {
          id: "1",
          image: Image,
          date: moment(),
          title: "Lorem ipsum dolor sit amet consectetur adipisc",
          description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        },
        {
          id: "1",
          image: Image,
          date: moment(),
          title: "Lorem ipsum dolor sit amet consectetur adipisc",
          description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        },
        {
          id: "1",
          image: Image,
          date: moment(),
          title: "Lorem ipsum dolor sit amet consectetur adipisc",
          description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        },
        {
          id: "1",
          image: Image,
          date: moment(),
          title: "Lorem ipsum dolor sit amet consectetur adipisc",
          description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        },
        {
          id: "1",
          image: Image,
          date: moment(),
          title: "Lorem ipsum dolor sit amet consectetur adipisc",
          description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        },
      ],
      article_primary: {},
      searchTimeout: null,
    }
  },
  watch: {
    arr_factor(val){
      this.$emit('onChangeArrFactor', val)
      this.manage_start_animation()
    },
    scrollY(){
      this.manage_start_animation()
    },
    search(){
      var context = this
      this.isLoading = true
      window.scrollTo(0, 610)

      if(this.searchTimeout != null)
        clearTimeout(this.searchTimeout)
      this.searchTimeout = setTimeout(() => {
        context.get_article()
      }, this.base.wait_time)
    },
    filter(){
      this.get_article()
    },
    current_page(){
      this.get_article()
    },
  },
  created(){
    this.base = new Base()
    window.addEventListener('scroll', this.handleScroll)
    this.scrollY = 1

    this.get_article()
  },
  methods: {
    onFilterSelect(val){
      this.filter = val.id
    },
    handleScroll(){
      this.scrollY = window.scrollY
    },
    toDetail(){
      window.localStorage.setItem('article', JSON.stringify(this.article_primary))
      window.location.href = "/article/detail?id=" + this.article_primary.id
    },
    manage_start_animation(){
      this.flag.articleImage1Flag = this.base.check_start_animation(this.scrollY, this.flag.articleImage1Flag, this.arr_factor, 0)
      this.flag.articleTitle1Flag = this.base.check_start_animation(this.scrollY, this.flag.articleTitle1Flag, this.arr_factor, 0)
      this.flag.articleItemFlag = this.base.check_start_animation(this.scrollY, this.flag.articleItemFlag, this.arr_factor, 1000)
    },
    next_action(){
      this.current_page = this.current_page + 1
    },
    previous_action(){
      this.current_page = this.current_page - 1
    },
    select_page(page){
      this.current_page = page
    },
    async get_article(){
      this.isLoading = true
      window.scrollTo(0, 610)

      var response = await this.base.request(this.base.url_api + `/article?num_data=3&is_publish=1&search=${this.search}&type=${this.filter}&page=${this.current_page}`)
      this.$set(this.arr_factor, 0, true)
      this.isLoading = false

      if(response != null){
        if(response.status === "success"){
          var arr = []
          for(let article of response.data){
            var desc_display = article.content.substring(0, article.content.indexOf('</p>') + 4)

            article.image = this.base.host + "/media/article?file_name=" + article.file_name
            article.date = moment(article.date_format, "YYYY-MM-DD")
            article.description = desc_display

            if(article.is_primary == 1){
              this.article_primary = article
              this.image = this.base.host + "/media/article?file_name=" + article.file_name
              this.title = article.title
              this.description = desc_display
              this.date = article.date
            }
            else
              arr.push(article)
          }
          this.arr_article = arr
          this.current_page = response.current_page
          this.total_page = response.total_page

          
        }
        else
          this.base.show_error(response.message)
      }
      else
        this.base.show_error(this.$t('server_error'))
    },
  }
}
</script>

<style lang="scss">
.article-filter-card{
  background-color: $gray4;
  border: none;
}
.article-search-input::placeholder{
  color: $gray13;
}
.article-search-input{
  border: none;
  padding: 0;
}
.article-search-input-card{
  border: 1px solid $gray13;
  background-color: $white;
  border-radius: .5rem;
}
.filter-select .select2-container, .filter-select .selection, .filter-select .select2-selection{
  height: 100%;
  display: block;
}
.title-section{
  font-size: 2rem;
  font-family: poppins-medium;
}
.content-section{
  color: $gray6;
}
.article-title1-enter-active, .article-title1-leave-active{
  transition: all 2s;
}
.article-title1-leave-to, .article-title1-enter {
  margin-left: 10rem !important;
  margin-right: -10rem !important;
  opacity: 0;
}
.article-image1-enter-active, .article-image1-leave-active{
  transition: all 2s;
}
.article-image1-leave-to, .article-image1-enter {
  transform: translateX(10rem);
  opacity: 0;
}
.article-item-enter-active, .article-item-leave-active{
  transition: all 2s;
}
.article-item-leave-to, .article-item-enter {
  transform: translateX(-10rem);
  opacity: 0;
}
.custom-pagination-container{
  margin-top: 5.5rem;
}
.content-section *{
  width: 100%;
  height: 4.5rem;
  overflow: hidden;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.article-image{
  border-radius: 1rem;
}
</style>
