<template>
<div id="app">
 <v-app>
   <div style="background-color:white">
     <header-bar></header-bar>
    <v-content>
      <router-view/>
    </v-content>
   <footer-bar></footer-bar>
   </div>
  </v-app>
</div>

</template>

<script>
import HeaderBar from './components/common/Header';
import FooterBar from './components/common/Footer';
export default {
  name: 'App',
  components: {
    HeaderBar,
    FooterBar
  }
}
</script>

<style>
</style>
