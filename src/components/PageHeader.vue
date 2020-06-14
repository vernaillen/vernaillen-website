<template>
  <div :class="pageHeaderClass">
    <audioMotionAnalyzer :options="analyzerOptions" @audioMotion="connectAnalyzer"/>
    <div class="page-container q-px-md">
      <div class="row full-width">
        <div class="col-12 text-center">
          <h4>{{title}}</h4>
          <div class="breadcrumbs">
            <a title="check out this website's git repository" href="https://github.com/vernaillen/vernaillen-website">
              <svg class="repo-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true">
                <path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path>
              </svg>
            </a>
            <a href="/#/home">Home</a>
            <span class="path-divider">/</span>
            <template v-if="isBlogPost">
              <a href="/#/blog">Blog</a>
              <span class="path-divider">/</span>
            </template>
            <template v-if="isTagPage">
              <q-icon name="fas fa-tag"/>
            </template>
            {{pageName}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: String,
    currentPageName: String,
    isBlogPost: Boolean,
    sticky: {
      boolean: false,
      required: false
    }
  },
  data () {
    return {
      analyzerOptions: {
        bgAlpha: 0,
        showBgColor: false,
        overlay: true,
        showLeds: true,
        showPeaks: false,
        showScale: false,
        gradient: 'rainbow',
        mode: 6,
        height: 105
      }
    }
  },
  computed: {
    pageName () {
      if (this.isTagPage) {
        return this.currentPageName.substring(5)
      } else {
        return this.currentPageName
      }
    },
    isTagPage () {
      return this.currentPageName.startsWith('tag:')
    },
    pageHeaderClass () {
      if (this.sticky) return 'pageHeader sticky'
      return 'pageHeader'
    }
  },
  methods: {
    connectAnalyzer (analyser) {
      this.$emit('connectAnalyzer', analyser)
    }
  }
}
</script>

<style lang="sass" scoped>
  .pageHeader
    position: relative
    padding: 15px
    margin-bottom: 24px
    border-bottom: 1px solid #e1e4e8
    background-color: #f5f5f5
    height: 120px

    #audioMotionAnalyzer
      position: absolute
      width: 95%
      overflow: hidden

    h4
      font-weight: 900
      margin: 0

    .breadcrumbs
      font-size: 14px
      color: #959da5
      margin-top: 6px
      margin-bottom: 12px
      .repo-icon
        fill: currentColor
        margin-bottom: -3px
        margin-right: 10px
      a
        text-decoration: none
        color: #959da5
      a:hover
        text-decoration: underline
      .path-divider
        padding: 3px

  .pageHeader.sticky
    position: fixed
    z-index: 1000
    width: 100%
    top: 61px
</style>
