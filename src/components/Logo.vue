<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <router-link to="/home" class="absolute-center" area-label="Go to home">
    <q-img
      id="vernaillen-logo"
      :src="require('../assets/img/vernaillen-logo.png')"
      alt="Wouter Vernaillen\'s logo"
      transition="slide-down">
      <template v-slot:loading/>
    </q-img>
  </router-link>
</template>

<style>
  .logo-center {
    margin-left: auto;
    margin-right: auto;
  }
  #vernaillen-logo {
    height: 50px;
    width: 120px;
  }
</style>
