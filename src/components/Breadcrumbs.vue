<template>
  <div class="breadcrumbHeader">
    <div class="page-container q-px-md">
      <div class="row full-width">
        <div class="col-12">
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
  name: 'Breadcrumbs',
  props: {
    currentPageName: String,
    isBlogPost: Boolean
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
      if (this.sticky) return 'breadcrumbHeader sticky'
      return 'breadcrumbHeader'
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
  .breadcrumbHeader

    .breadcrumbs
      font-size: 14px
      color: #959da5
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

</style>
