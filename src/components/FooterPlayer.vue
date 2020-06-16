<template>
  <div>
    <audioMotionAnalyzer :options="analyzerOptions"/>
    <q-footer class="bg-secondary text-grey-4 shadow-up-4 text-center">
      <slot/>
      <div class="footer-content q-pl-sm">
        <div class="row">
          <div class="scControl col-12 col-md-6 text-center">
            <tonePlayerControls />
          </div>
          <div class="scWave col-12 col-md-6">
            <tonePlayerWave id="footerWaveform" :options="waveFormOptions" />
          </div>
        </div>
      </div>
    </q-footer>
  </div>
</template>

<script>
export default {
  name: 'FooterPlayer',
  data () {
    return {
      waveFormOptions: {
        waveColor: '#f5f5f5',
        progressColor: '#1bbc9b',
        cursorColor: '#1bbc9b',
        cursorWidth: 1,
        scrollParent: false,
        responsive: true,
        skipLength: 10,
        height: 60,
        barHeight: 1.2
      },
      analyzerOptions: {
        barSpace: 0.5,
        bgAlpha: 0.5,
        sensitivity: 4,
        smoothing: 0.4,
        showBgColor: false,
        overlay: true,
        showLeds: false,
        showPeaks: false,
        showScale: false,
        gradient: 'rainbow',
        mode: 1,
        height: 60
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
  .footer-content
    padding: 0

  .scControl
  .scWave
    height: 60px

  .scControl
    padding: 10px

  .scWave
    width: 100vw - 1

  @media (min-width: 1024px)
    .scWave
      width: 50vw - 1

  #audioMotionAnalyzer
    position: fixed
    left: 0
    width: 100vw
    bottom: 110px

  @media (min-width: 1024px)
    #audioMotionAnalyzer
      bottom: 54px
</style>

<style lang="sass">
  .scTrackLink
    color: #333
    text-decoration: none

  .scTrackLink:hover
    color: gray
</style>
