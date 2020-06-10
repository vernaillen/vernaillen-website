<template>
  <q-page>
    <page-header :title="markdown.attributes.title" currentUrl="/#/music" :currentPageName="markdown.attributes.pageName" />
    <div class="page-container q-px-md">
      <q-card>
        <q-card-section>
          <q-markdown :src="markdown.body"/>
        </q-card-section>
        <q-card-section v-if="soundCloudData">
          <div class="row" v-if="soundCloudData.title">
            <div class="col-md-2 col-3">
              Song
            </div>
            <div class="col">
              <a :href="soundCloudData.permalink_url" target="_blank">{{soundCloudData.title}}</a>
            </div>
          </div>
          <div class="row" v-if="soundCloudData.user">
            <div class="col-md-2 col-3">
              Profile
            </div>
            <div class="col">
              <a :href="userUrl(soundCloudData.user.permalink)" target="_blank">{{soundCloudData.user.username}}</a>
            </div>
          </div>
          <div class="row" v-if="soundCloudData.description">
            <div class="col-md-2 col-3">
              Description
            </div>
            <div class="col">
              <span v-if="soundCloudData.description">{{soundCloudData.description}}</span>
            </div>
          </div>
          <div class="row" v-if="soundCloudData.artwork_url">
            <div class="col-md-2 col-3">
              Artwork
            </div>
            <div class="col">
              <a :href="soundCloudData.permalink_url" target="_blank">
                <img :src="soundCloudData.artwork_url"/>
              </a>
            </div>
          </div>
          <q-btn clickable @click="click" :disabled="loading">
            <q-icon v-if="buttonIcon" :name="buttonIcon" style="font-size: 1.3em;" /> {{buttonText}}
          </q-btn>
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
          </q-knob>
          <p v-if="loadingError">
            {{loadingError}}
          </p>
        </q-card-section>
        <q-card-section v-else>
          loading song from SoundCloud...
        </q-card-section>
        <q-card-section>
          <audioMotionAnalyzer :options="analyzerOptions" @audioMotion="connectAnalyzer"/>
        </q-card-section>
      </q-card>
      <br/><br/><br/><br/>
    </div>
  </q-page>
</template>

<script>
import { markdownFiles } from '../load-markdown-files'
import notFound from '../markdown/notFound.md'
import PageHeader from '../components/PageHeader'
import * as Tone from 'tone'
import axios from 'axios'

const audioContext = new AudioContext()
Tone.setContext(audioContext)

export default {
  name: 'Music',
  components: {
    PageHeader
  },
  data () {
    return {
      markdownFiles: markdownFiles,
      analyzerOptions: {
        audioCtx: audioContext,
        bgAlpha: 0,
        showBgColor: false,
        overlay: true,
        reflexRatio: 0.5,
        reflexAlpha: 0.3,
        showLeds: true,
        showPeaks: false,
        showScale: false,
        gradient: 'rainbow',
        mode: 3,
        height: 200
      },
      audioPlayer: undefined,
      soundCloudData: undefined,
      buttonText: '',
      buttonIcon: '',
      trackUrl: 'https://soundcloud.com/woutervernaillen/deep-organ-house-sounddesign-test',
      clientId: '1745017edcfeb72a175c95614a1cc212',
      loading: true,
      loadingError: '',
      volume: -15,
      minVolume: -20,
      maxVolume: 0,
      analyzer: undefined
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
    }
  },
  created () {
    this.loadUrl()
  },
  methods: {
    connectAnalyzer (audioMotion) {
      this.analyzer = audioMotion.getAnalyzer()
    },
    click () {
      if (this.audioPlayer != null && this.audioPlayer.state === 'started') {
        this.stop()
      } else {
        this.buttonText = ''
        this.buttonIcon = 'fa fa-stop'
        this.start()
      }
    },
    start () {
      this.buttonText = ''
      this.buttonIcon = 'fa fa-stop'
      this.audioPlayer.start()
    },
    stop () {
      if (this.audioPlayer) {
        this.audioPlayer.stop()
      }
      this.buttonText = ''
      this.buttonIcon = 'fa fa-play'
    },
    loadUrl () {
      this.stop()
      this.soundCloudData = null
      this.loading = true
      this.buttonText = 'Loading Audio Buffer...'
      this.buttonIcon = ''
      axios
        .get('https://api.soundcloud.com/resolve.json?url=' + this.trackUrl + '&client_id=' + this.clientId)
        .then(result => { this.loadPlayer(result.data) })
        .catch(error => {
          this.loadingError = error
          console.log(error)
        })
    },
    loadPlayer (data) {
      this.soundCloudData = data
      this.audioPlayer = new Tone.Player(data.stream_url + '?client_id=' + this.clientId, this.loaded)
      this.audioPlayer.volume.value = this.volume
      this.audioPlayer.fan(this.analyzer)
      this.audioPlayer.toMaster()
    },
    loaded () {
      this.loading = false
      this.buttonText = ''
      this.buttonIcon = 'fa fa-play'
    },
    userUrl (id) {
      return 'https://soundcloud.com/' + id
    }
  },
  watch: {
    volume: function (value) {
      this.audioPlayer.volume.value = value
    }
  }
}
</script>

<style scoped>
 .volume-button {
   color: #1bbc9b
 }
</style>
