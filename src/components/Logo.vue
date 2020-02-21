<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <router-link :class="logoClass" to="/home" area-label="Go to home">
    <q-img
      id="vernaillen-logo"
      :src="require('../assets/img/vernaillen-logo.png')"
      alt="Wouter Vernaillen\'s logo"
      transition="slide-down">
      <template v-slot:loading/>
    </q-img>
  </router-link>
</template>

<script>
export default {
  name: 'Logo',
  computed: {
    logoClass () {
      if (this.$q.screen.lt.sm) {
        return 'wv-logo logo-centered'
      }
      return 'wv-logo'
    }
  }
}
</script>

<style lang="sass">
  #vernaillen-logo
    height: 50px
    width: 120px

  .wv-logo
    position: absolute
    top: 0

  .logo-centered
    left: 50%
    transform: translate(-50%, 0)
</style>
