<template>
  <q-page>
    <div class="page-container q-pa-md">
      <q-card>
        <q-card-section>
          <q-markdown :src="markdowns.body"/>

          <i class="fab fa-linkedin"/>
          LinkedIn
          <br/>
          <i class="fab fa-instagram"/>
          Instagram
          <br/>
          <i class="fab fa-twitter"/>
          Twitter
          <br/>
          <i class="fab fa-facebook"/>
          Facebook
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { markdownFiles } from '../load-markdown-files'
import notFound from '../markdown/notFound.md'

export default {
  data () {
    return {
      markdownFiles: markdownFiles
    }
  },
  created () {
    this.$emit('pageData', {
      pageTitle: 'Get in touch',
      pageName: 'Contact'
    })
  },
  computed: {
    markdowns () {
      for (let i = 0; i < this.markdownFiles.length; i++) {
        if (this.markdownFiles[i].slug === 'contact') {
          return this.markdownFiles[i]
        }
      }
      return { title: '404', body: notFound, isBlogPost: false }
    }
  }
}
</script>
