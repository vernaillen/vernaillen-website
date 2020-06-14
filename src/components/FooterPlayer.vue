<template>
  <q-footer class="bg-secondary text-grey-4 shadow-up-4 text-center">
    <slot/>
    <div class="footer-content q-pa-sm">
      <tonePlayerControls />
    </div>
  </q-footer>
</template>

<script>
export default {
  name: 'FooterPlayer',
  methods: {
    play () {
      this.$emit('startPlay', true)
    }
  }
}
</script>

<style scoped>

</style>
