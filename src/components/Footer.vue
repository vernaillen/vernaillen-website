<template>
  <q-footer class="bg-secondary text-grey-4 shadow-up-4 text-center">
    <slot/>
    <div class="footer-content q-pa-sm">
      Powered by
      <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">
        <img alt="Vue" src="https://vuejs.org/images/logo.png" />
      </a>
      © 2020 Vernaillen Consulting
    </div>
  </q-footer>
</template>

<style lang="sass">
  footer
    font-size: 90%
    padding-top: 0
    a
      margin-right: 15px
      img
        height: 18px
        margin-bottom: -5px
</style>
