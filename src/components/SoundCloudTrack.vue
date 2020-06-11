<template>
  <q-card>
    <q-card-section>
      <div class="row" v-if="track.title">
        <div class="col-md-2 col-3">Track Title</div><div class="col"><a :href="track.permalink_url" target="_blank">{{track.title}}</a></div>
      </div>
      <div class="row" v-if="track.artwork_url">
        <div class="col-md-2 col-3">
          Artwork
        </div>
        <div class="col">
          <a :href="track.permalink_url" target="_blank">
            <img :src="track.artwork_url"/>
          </a>
        </div>
      </div>
      <div class="row" v-if="track.user">
        <div class="col-md-2 col-3">
          Artist
        </div>
        <div class="col">
          <a :href="userUrl(track.user.permalink)" target="_blank">{{track.user.username}}</a>
        </div>
      </div>
      <div class="row" v-if="track.description">
        <div class="col-md-2 col-3">Description</div><div class="col"><span>{{track.description}}</span></div>
      </div>
      <div class="row" v-if="track.duration">
        <div class="col-md-2 col-3">Duration</div><div class="col">{{duration}}</div>
      </div>
      <br/>
      <q-btn @click="loadTrack">Load Track</q-btn>
    </q-card-section>
  </q-card>
</template>

<script>

export default {
  name: 'SoundCloudTrack',
  props: {
    track: {
      required: true
    }
  },
  data () {
    return {
    }
  },
  computed: {
    duration () {
      const hours = Math.floor(this.track.duration / 3600000)
      const minutes = Math.floor(this.track.duration / 60000)
      const seconds = Math.floor(this.track.duration % 60000)
      return ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2)
    }
  },
  methods: {
    userUrl (id) {
      return 'https://soundcloud.com/' + id
    },
    loadTrack () {
      this.$emit('loadTrack', this.track)
    }
  }
}
</script>
