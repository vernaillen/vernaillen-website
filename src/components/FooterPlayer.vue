<template>
  <q-footer class="bg-secondary text-grey-4 shadow-up-4 text-center">
    <slot/>
    <div class="footer-content q-pa-sm">
      <div class="row">
        <div class="scControl col-12 col-md-6">
          <tonePlayerControls />
        </div>
        <div class="scWave col-12 col-md-6">
          <tonePlayerWave :options="waveFormOptions" />
        </div>
      </div>
    </div>
  </q-footer>
</template>

<script>
export default {
  name: 'FooterPlayer',
  data () {
    return {
      waveFormOptions: {
        waveColor: '#f5f5f5',
        progressColor: '#1bbc9b',
        height: 36
      }
    }
  },
  methods: {
    play () {
      this.$emit('startPlay', true)
    }
  }
}
</script>

<style lang="sass" scoped>
  scControl
  scWave
    height: 60px
</style>
