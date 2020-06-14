<template>
  <q-page>
    <page-header
      elevated
      :title="markdown.attributes.title"
      currentUrl="/#/music"
      :currentPageName="markdown.attributes.pageName"
      sticky=true />
    <div id="musicPageContent" class="page-container q-px-md">
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
        <!--
        <div id="waveformProgress">
          <q-linear-progress :value="percentage" color="#1bbc9b" class="q-mt-sm" />
          <div class="waveformImg" :style="waveformBg"></div>
        </div>
        -->
      </q-card-section>
      <tonePlayerWave />
      <tonePlayerSoundCloud class="q-pa-md row items-start q-gutter-md" :userId="soundCloudUserId"/>
      <br/><br/>
      <audioMotionAnalyzer :options="analyzerOptions" />
      <br/><br/>
    </div>
  </q-page>
</template>

<script>
import { markdownFiles } from '../load-markdown-files'
import notFound from '../markdown/notFound.md'
import PageHeader from '../components/PageHeader'

export default {
  name: 'Music',
  components: {
    PageHeader
  },
  data () {
    return {
      markdownFiles: markdownFiles,
      analyzerOptions: {
        height: 105
      },
      tracks: undefined,
      soundCloudUserId: 45616,
      clientId: '1745017edcfeb72a175c95614a1cc212',
      volume: -12,
      minVolume: -20,
      maxVolume: 0,
      duration: 0,
      state: 'stopped',
      loading: true,
      loadedTrack: undefined
    }
  },
  computed: {
    markdown () {
      for (let i = 0; i < this.markdownFiles.length; i++) {
        if (this.markdownFiles[i].slug === 'music') {
          return this.markdownFiles[i]
        }
      }
      return { title: '404', body: notFound, isBlogPost: false }
    },
    waveformBg () {
      if (this.loadedTrack) {
        return 'background-image: url(' + this.loadedTrack.waveform_url + ')'
      } else {
        return ''
      }
    }
    /*
    playButtonIcon () {
      if (this.state === 'started') {
        return 'fa fa-pause'
      } else {
        return 'fa fa-play'
      }
    },
    backDisabled () {
      return this.loading || this.state === 'stopped'
    },
    percentage () {
      return this.calculatePercentage()
    }
    */
    /* time () {
      return ('0' + this.calculateHours()).slice(-2) + ':' + ('0' + this.calculateMinutes()).slice(-2) + ':' + ('0' + this.calculateSeconds()).slice(-2)
    } */
  },
  methods: {
    /* clickBack () {
      this.audioPlayer.unsync().stop()
      Tone.Transport.stop()
      this.updateState()
    },
    click () {
      if (this.state === 'started') {
        Tone.Transport.pause()
      } else {
        if (this.percentage > 1) {
          this.audioPlayer.unsync()
          Tone.Transport.stop()
        }
        if (this.state !== 'paused') {
          this.audioPlayer.sync().start()
        }
        Tone.Transport.start()
      }
      this.updateState()
    },
    updateState () {
      this.state = Tone.Transport.state
    },
    loadTrack (track) {
      console.log(track)
      this.loading = true
      this.loadedTrack = track
      if (this.audioPlayer) {
        this.audioPlayer.unsync().stop()
      }
      Tone.Transport.stop()
      this.audioPlayer = new Tone.Player(this.loadedTrack.stream_url + '?client_id=' + this.clientId, this.loaded)
      this.audioPlayer.volume.value = this.volume
      // this.audioPlayer.fan(this.analyzer)
      this.audioPlayer.toMaster()
      this.updateState()
    },
    loaded () {
      this.loading = false
    },
    calculatePercentage () {
      if (this.loadedTrack) {
        const perc = (Tone.Transport.seconds / this.loadedTrack.duration) * 1000
        if (perc > 1) {
          Tone.Transport.pause()
        }
        return perc
      } else {
        return 0
      }
    }
    setTonePlayer (tonePlayer) {
      this.tonePlayer = tonePlayer
      this.audioCtx = tonePlayer.audioContext
      if (this.analyzer) {
        console.log('setTonePlayer is adding analyzer')
        tonePlayer.addAnalyzer(this.analyzer)
      }
    },
    calculateHours () {
      if (this.loadedTrack) {
        const secs = Tone.Transport.seconds
        return Math.floor(secs / 3600)
      } else {
        return 0
      }
    },
    calculateMinutes () {
      if (this.loadedTrack) {
        const secs = Tone.Transport.seconds
        return Math.floor(secs / 60)
      } else {
        return 0
      }
    },
    calculateSeconds () {
      if (this.loadedTrack) {
        const secs = Tone.Transport.seconds
        return Math.floor(secs % 60)
      } else {
        return 0
      }
    } */
  },
  watch: {
    volume: function (value) {
      this.audioPlayer.volume.value = value
    }
  }
}
</script>

<style lang="sass" scoped>
  #musicPageContent
    margin-top: 150px

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
