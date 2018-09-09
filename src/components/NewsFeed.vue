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
              v-for="s in articles"
               :key="s.id"
              >
                <v-card>
                  <v-img
                  :src="s.urlToImage"
                  max-height="150px"
                  gradient="to top right, rgba(100,115,201,.63), rgba(25,32,72,.7)"
                  aspect-ration="1.7778"
                >
                  <v-container fluid>
                  <v-layout row wrap fill-height>
                  <v-flex xs2 offset-xs10>
                  <a :href="s.url">
                    <i class="white--text fas fa-arrow-right fa-2x"></i>
                  </a>
                  </v-flex>
                  <v-flex xs12>
                    <span
                    class="font-weight-bold caption date white--text"
                  >
                    {{ moment(s.publishedAt).format('DD.MM.YYYY') }}
                    </span>
                  </v-flex>
                  <v-flex xs12>
                    <span
                    class="font-weight-bold caption date white--text"
                  >
                    {{s.title}}
                    </span>
                  </v-flex>
                  </v-layout>
                  </v-container>
                  </v-img>
                </v-card> 
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
import axios from 'axios';
import {API_KEY} from '../global';
import moment from 'moment';
export default {
	name: 'NewsFeed',
	props: ['source'],
	data: function() {
		return {
			articles: [],
			value: ''
		};
	},
	methods: {
		async fetchNews(value) {
			this.source = value;

			if (value)
				await axios.get(`https://newsapi.org/v2/top-headlines?sources=${this.source}&apiKey=${API_KEY}`).then(response => {
					let result = response.data.articles;
					result = result.map(a => {
						return Object.freeze(a);
					});
					this.articles = result;
				});
		},

		moment(...args) {
			return moment(...args);
		}
	},

	created() {
		this.fetchNews(this.source);
	},

	watch: {
		source(val) {
			this.fetchNews(val);
		}
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
