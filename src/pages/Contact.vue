<template>
  <q-page>
    <page-header title="Get in touch" currentUrl="/#/contact" currentPageName="Contact" />
    <div class="page-container q-px-md">
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
import PageHeader from '../components/PageHeader'

export default {
  components: {
    PageHeader
  },
  data () {
    return {
      markdownFiles: markdownFiles
    }
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
