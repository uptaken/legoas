<template>
  <div class="container">
    <div class="position-relative px-5 mt-5">
      <div class="d-flex">
        <p class="mb-0 navigation">{{ $t('auction_info') }}</p>
        <p class="mb-0 navigation">&nbsp;/&nbsp;</p>
        <p class="mb-0 navigation navigation-now">{{ $t('article') }}</p>
      </div>
      <p class="mb-0 general-title">{{ $t('article') }}</p>
    </div>

    <div class="p-5 w-100">
      <div class="mt-3 d-flex justify-content-center align-items-center w-100">
        <div class="w-50 d-inline-block">
          <img src="@/assets/Intersect.png" width="100%"/>
        </div>
        <div class="w-50 d-inline-block ml-5">
          <p class="mb-0 title-section">{{ title }}</p>
          <p class="mb-0 content-section mt-3">{{ description }}</p>
          <div class="d-flex align-items-center mt-3">
            <img src="@/assets/clock_icon.png" style="width: 1.1rem;"/>
            <p class="ml-2 mb-0 recommendation-info">{{ date.format('DD MMMM YYYY') }}</p>
          </div>
        </div>
      </div>

      <div class="mt-5 w-100">
        <div class="card article-filter-card">
          <div class="card-body p-5">
            <div class="d-flex justify-content-between">
              <div class="d-flex align-items-center">
                <p class="mb-0 content-content">Filter</p>
                <Select2 v-model="filter"
                  class="ml-3" 
                  :options="arr_filter" 
                  :settings="{width: '10rem',}"
                  @change="onFilterChanged($event)" 
                  @select="onFilterSelect($event)" />
              </div>
              <div>
                <input class="form-control" v-model="search" :placeholder="$t('search_article')"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5 w-100">
        <div class="row">
          <div v-for="(article, index) in arr_article" :key="index" class="col-6 col-lg-4 mt-3">
            <ArticleItem :data="article" :index="index" :total_data="arr_article.length" />
          </div>
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

export default {
  components: {
    'ArticleItem': ArticleItem,
  },
  data(){
    return{
      base: null,
      title: "Lorem ipsum dolor sit amet consectetur adipisc",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ....",
      date: moment(),
      filter: {},
      arr_filter: [
        {
          id: "1",
          text: this.$t("newest"),
        },
        {
          id: "2",
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
.article-filter-card{
  background-color: $gray4;
  border: none;
}
.title-section{
  font-size: 2rem;
  font-family: poppins-medium;
}
.content-section{
  color: $gray6;
}
</style>
