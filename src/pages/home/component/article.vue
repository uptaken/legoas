<template>
  <div class="my-5 d-inline-block w-100">
    <div style="width: 100%;">
      <Transition name="home-article-title1">
        <p class="m-0 why-title text-center"  v-show="articleTitle1Flag">{{ $t("article") }}</p>
      </Transition>
      <Transition name="home-article-title2">
        <p class="mb-0 why-title2 text-center mt-3" v-show="articleTitle1Flag">{{ $t("article_list") }}</p>
      </Transition>
    </div>

    <Transition name="home-article-content">
      <div v-show="articleTitle1Flag">
        <div class="d-flex justify-content-center"  style="margin-top: 3.375rem;">
          <div class="footer-download-image1">
            <div class="row"  style="">
              <div v-for="(article, index) in arr_article" :key="index" class="col-6 col-md-4 mt-3 mt-lg-0" >
                <ArticleItem :data="article" :index="index" :total_data="arr_article.length" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import Base from '@/utils/base';
import moment from 'moment';

import ArticleItem from '@/pages/home/component/article_item.vue'

import Image from '@/assets/Intersect.png';

export default {
  components: {
    'ArticleItem': ArticleItem,
  },
  props: ['articleTitle1Flag', 'articleTitle2Flag', ],
  data(){
    return{
      base: null,
      articleTitleHeight: 0,
      articleSubtitleHeight: 0,
      isLoading: true,
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
      ],
    }
  },
  watch: {
    isLoading(val){
      this.$emit("onLoading", val, 2)
    },
  },
  created(){
    this.base = new Base()

    this.articleTitleHeight = window.$('#article-title').innerHeight()
    this.articleSubtitleHeight = window.$('#article-subtitle').innerHeight()

    this.get_article()
  },
  methods:{
    async get_article(){
      var response = await this.base.request(this.base.url_api + "/article/all?num_data=3&is_publish=1")
      this.isLoading = false

      if(response != null){
        if(response.status === "success"){
          for(let article of response.data){
            article.image = this.base.host + "/media/article?file_name=" + article.file_name
            article.date = moment(article.date, "YYYY-MM-DD")
          }
          this.arr_article = response.data
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
.home-article-title1-enter-active, .home-article-title1-leave-active{
  transition: all 2s;
}
.home-article-title1-leave-to, .home-article-title1-enter {
  transform: translateY(-10rem);
  // margin-bottom: 5rem !important;
  opacity: 0;
}
.home-article-title2-enter-active, .home-article-title2-leave-active{
  transition: all 2s;
}
.home-article-title2-leave-to, .home-article-title2-enter {
  transform: translateY(-10rem);
  opacity: 0;
}
.home-article-content-enter-active, .home-article-content-leave-active{
  transition: all 2s;
}
.home-article-content-leave-to, .home-article-content-enter {
  transform: translateX(-10rem);
  // margin-bottom: 5rem !important;
  opacity: 0;
}
</style>
