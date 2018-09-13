<template>
  <div id="app">
    <v-app id="inspire">
      <v-layout justify-center>
        <v-flex xs12>
        <v-card>
          <v-container 
            fluid
            flat
            grid-list-lg
          >
            <v-layout row wrap>
              <v-flex
                height="100%" 
                sm6 md3 lg3 xs12
                v-for="newsArticle in newsArticles" :key="newsArticle.id"
              >
                  <Card :article="newsArticle" />
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      </v-layout>
    </v-app>
  </div>
</template>

<script>
/*eslint-disable-next-line*/
import {mapGetters, mapActions} from 'vuex'
import Card from './Card'
import moment from 'moment';
export default {
  name: 'NewsFeed',
  components: {
    Card
  },
  watch: {
		'selectedSource': function() {
      this.getNewsArticles(this.selectedSource);
    }
  }, 
	methods: {
    ...mapActions([
      'getNewsArticles'
    ])
	},
  computed: {
    ...mapGetters({
      newsArticles: 'newsArticles',
      selectedSource: 'selectedSource'
    })
  }
};
</script>

<style scoped>
/*eslint-disable-next-line*/
.vcard {
	opacity: 0.9;
	border: 0 !important;
	margin: 10px;
}

.vcard span {
	background-color: black;
	opacity: 0.9;
}

.vcard a {
	color: white;
	margin: 10px;
}

span.description {
	background-color: white;
}

.icon {
	position: absolute;
	top: 20px;
  right: 20px;
}
</style>
