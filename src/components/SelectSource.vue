<template>
  <v-container mt-0 fluid>
    <v-layout row wrap align-center>    
      <v-layout align-center justify-space-between>
        <div class="display-1 font-weight-thin" style="color:#3949AB;">Headlines</div>
        <v-menu transition="scale-transition" origin="top right">
          <v-btn slot="activator" large dark color="primary">FILTER</v-btn>
          <v-list>
            <v-list-tile 
             v-for="s in sources" 
              :key="s.id" 
              @click="sourceChanged(s.id)"
          >
              <v-list-tile-title>{{ s.name }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
      </v-menu>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';
import {API_KEY} from '../global';
export default {
	name: 'selectSource',

	data() {
		return {
			sources: [],
			source: ''
		};
	},

	methods: {
		sourceChanged(id) {
			this.$emit('source-changed', id);
		}
	},

	async mounted() {
		await axios.get(`https://newsapi.org/v2/sources?language=en&apiKey=${API_KEY}`).then(response => {
			let result = response.data.sources;
			result = result.map(s => {
				return Object.freeze(s);
			});
			this.sources = result;
		});
	}
};
</script>