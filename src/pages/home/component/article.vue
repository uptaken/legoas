<template>
  <div class="m-5 d-inline-block" style="width: 70%;">
    <div style="width: 100%;">
      <p class="m-0 why-title text-center">{{ $t("article") }}</p>
      <p class="mb-0 why-title2 text-center mt-3">{{ $t("article_list") }}</p>
    </div>

    <div class="d-flex justify-content-center" style="margin-top: 3.375rem;">
      <div v-for="(article, index) in arr_article" :key="index" :style="{width: (100 / arr_article.length) + '%'}" :class="{'ml-3': index > 0}">
        <ArticleItem :data="article" :index="index" :total_data="arr_article.length" />
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
