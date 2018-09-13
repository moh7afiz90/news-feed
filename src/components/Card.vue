<template>
<div>
 <v-img
   :src="article.urlToImage"
   max-height="150px"
   gradient="to top right, rgba(100,115,201,.63), rgba(25,32,72,.7)"
   aspect-ration="1.7778"
 >
 <v-container fluid>
  <v-layout row wrap fill-height>
   <v-flex xs2 offset-xs10>
    <a :href="article.url">
     <i class="white--text fas fa-arrow-right fa-2x"></i>
    </a>
   </v-flex>
  <v-flex xs12>
   <span
    class="font-weight-bold caption date white--text"
   >
     {{ moment(article.publishedAt).format('DD.MM.YYYY') }}
   </span>
  </v-flex>
  <v-flex xs12>
   <span
   class="font-weight-bold caption date white--text"
   >
   {{article.title}}
  </span>
  </v-flex>
  </v-layout>
 </v-container>
 </v-img>
 </div>
</template>

<script>
import moment from 'moment';
 export default {
  name: 'Card',
  props: ['article'],
  methods: {
   moment(...args) {
			return moment(...args);
		}
  }
 }
</script>

<style>

</style>