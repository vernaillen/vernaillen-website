<template>
  <q-page>
    <div id="musicPageContent" class="page-container q-pa-md">
      <q-card>
        <q-card-section>
          <q-markdown :src="markdown.body"/>
        </q-card-section>
      </q-card>
      <q-card-section>
        <!--
        <q-knob
          v-model="volume"
          :min="minVolume"
          :max="maxVolume"
          show-value
          font-size="16px"
          class="volume-button q-ma-md"
          size="40px"
          :thickness="0.26"
          color="#1bbc9b"
          track-color="grey-3"
        >
          <q-icon name="volume_up" class="q-mr-xs" />
        </q-knob><span v-if="loading">Buffering audio...</span>
        -->
        <!--div id="time">
          {{time}}
        </div-->
      </q-card-section>
      <tonePlayerSoundCloud class="q-gutter-y-md"/>
      <br/><br/>
      <br/><br/>
    </div>
  </q-page>
</template>

<script>
import { markdownFiles } from '../load-markdown-files'
import notFound from '../markdown/notFound.md'

export default {
  name: 'Music',
  data () {
    return {
      markdownFiles: markdownFiles,
      analyzerOptions: {
        height: 100
      },
      tracks: undefined,
      volume: -12,
      minVolume: -20,
      maxVolume: 0,
      duration: 0,
      state: 'stopped',
      loading: true,
      loadedTrack: undefined
    }
  },
  created () {
    this.$emit('pageData', {
      pageTitle: this.markdown.attributes.title,
      pageName: 'Music'
    })
  },
  computed: {
    markdown () {
      for (let i = 0; i < this.markdownFiles.length; i++) {
        if (this.markdownFiles[i].slug === 'music') {
          return this.markdownFiles[i]
        }
      }
      return { title: '404', body: notFound, isBlogPost: false }
    }
  },
  methods: {
  },
  watch: {
    volume: function (value) {
      // this.audioPlayer.volume.value = value
    }
  }
}
</script>

<style lang="sass" scoped>

  .volume-button
    color: #1bbc9b

  #waveformProgress
    position: relative
    .waveformImg
      background-repeat: no-repeat
      background-position: center
      background-size: 100% 100%
      position: absolute
      top: 0
      height: 100%
      width: 100%
    .q-linear-progress
      font-size: 40px
      background: #2e3d50

</style>
