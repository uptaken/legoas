<template>
  <div class="m-5 d-inline-block" style="width: 70%;">
    <div style="width: 100%;">
      <Transition name="article-title1">
        <p class="m-0 why-title text-center" v-show="articleTitle1Flag">{{ $t("article") }}</p>
      </Transition>
      <Transition name="article-title2">
        <p class="mb-0 why-title2 text-center mt-3" v-show="articleTitle1Flag">{{ $t("article_list") }}</p>
      </Transition>
    </div>

    <div class="d-flex justify-content-center" style="margin-top: 3.375rem;">
      <div class="row">
        <div v-for="(article, index) in arr_article" :key="index" class="col-12 col-lg-4 mt-3 mt-lg-0" >
          <ArticleItem :data="article" :index="index" :total_data="arr_article.length" />
        </div>
      </div>
    </div>
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
  created(){
    this.base = new Base()
  },
  methods:{
    async get_article(){
      var response = await this.base.request(this.base.url_api + "/article?num_data=3&is_publish=1")

      if(response != null){
        if(response.status === "success"){
          for(let article of response.data){
            article.image = this.base.host + "/media/article?file_name=" + article.file_name
            article.date = moment(article.date_format, "YYYY-MM-DD")
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
.article-title1-enter-active, .article-title1-leave-active{
  transition: all 2s;
}
.article-title1-leave-to, .article-title1-enter {
  margin-left: -10rem !important;
  opacity: 0;
}
.article-title2-enter-active, .article-title2-leave-active{
  transition: all 2s;
}
.article-title2-leave-to, .article-title2-enter {
  margin-right: -10rem !important;
  opacity: 0;
}
</style>
