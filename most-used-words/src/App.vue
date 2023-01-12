<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Most Used Words</v-toolbar-title>
    </v-app-bar> 
    <v-content>
      <HomeComp/>
    </v-content>
  </v-app>
</template>

<script>
import HomeComp from './components/HomeComp'

export default {
  name: 'App',

  components: {
    HomeComp
  },

  data: () => ({
    //
  }),
};
</script>
