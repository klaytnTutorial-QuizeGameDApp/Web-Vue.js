<template>
<div id="app">
 <v-app>
   <div style="background-color:white">
     <!-- <navigation-bar></navigation-bar> -->
    <v-content>
      <router-view/>
    </v-content>
    <!-- <footer-bar></footer-bar> -->
   </div>

  </v-app>
</div>

</template>

<script>
/*
  written by 배지원
  2018-07-31
*/
// import NavigationBar from './components/NavigationBar';
// import FooterBar from './components/Footer';
export default {
  name: 'App',
  components: {
    // NavigationBar,
    // FooterBar
  }
}
</script>

<style>
</style>
