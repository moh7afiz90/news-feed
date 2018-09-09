<template>
  <div id="app">
    <v-app id="inspire" light>
      <v-toolbar class="toolbar" app fixed clipped-left>
        <v-toolbar-title>News</v-toolbar-title>
      </v-toolbar>
      <v-content>
        <v-container fluid fill-height>
          <v-layout row wrap>
            <SelectSource @source-changed="sourceChanged"/>
            <NewsFeed :source="source" />
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import SelectSource from './components/SelectSource';
import NewsFeed from './components/NewsFeed';

export default {
	name: 'app',
	components: {
		SelectSource,
		NewsFeed
	},
	data() {
		return {
			source: ''
		};
	},
	methods: {
		sourceChanged(source) {
			this.source = source;
		}
	}
};
</script>

<style>
.toolbar {
	background-color: #1a237e !important;
	color: white !important;
}
</style>