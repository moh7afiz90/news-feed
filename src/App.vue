<template>
  <div id="app">
    <v-app id="inspire" light>
      <v-toolbar class="toolbar" app fixed clipped-left>
        <v-toolbar-title>News</v-toolbar-title>
      </v-toolbar>
      <v-content>
        <v-container fluid fill-height>
          <v-layout row wrap>
            <SelectSource />
            <NewsFeed />
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
	components: {
		SelectSource,
		NewsFeed
	}
};
</script>

<style>
.toolbar {
	background-color: #1a237e !important;
	color: white !important;
}
</style>