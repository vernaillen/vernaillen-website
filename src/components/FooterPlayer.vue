<template>
  <q-footer class="bg-secondary text-grey-4 shadow-up-4 text-center">
    <slot/>
    <div class="footer-content q-pa-sm">
      <q-btn clickable>
        <q-icon name="fa fa-step-backward" style="font-size: 1.3em;" />
      </q-btn>
      <q-btn clickable @click="play">
        <q-icon name="fa fa-play" style="font-size: 1.3em;" />
      </q-btn>
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
