<template>
  <v-container mt-0 fluid>
    <v-layout row wrap align-center>    
      <v-layout align-center justify-space-between>
        <div class="display-1 font-weight-thin" style="color:#3949AB;">Headlines</div>
        <v-menu transition="scale-transition" origin="top right">
          <v-btn slot="activator" large dark color="primary">FILTER</v-btn>
          <v-list>
            <v-list-tile 
              v-for="selectedSource in selectedSources" 
              :key="selectedSource.id" 
              @click="selectedSourceChanged(selectedSource)"
   		      >
              <v-list-tile-title>{{ selectedSource.name }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
      </v-menu>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'selectSource',
	methods: {
		selectedSourceChanged(selectedSource , id){
			this.$store.dispatch('getSelectedSources', selectedSource.id)
		}
	},
	computed: {
		...mapGetters({
			selectedSources: 'selectedSources',
			selectedSource: 'selectedSource'
		})
	},
	created: function(){
		this.$store.dispatch('getNews')
	}
};
</script>