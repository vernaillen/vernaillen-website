<template>
  <q-page>
    <page-header :title="markdown.attributes.title" :currentPageName="currentPageName" :isBlogPost="markdown.isBlogPost" />
    <div class="page-container q-pa-md">
      <q-card>
        <q-card-section class="card-title">
          <span v-if="markdown.isBlogPost">{{markdown.displayDate}}</span>
          <div class="float-right edit-icon">
            <q-btn flat icon="fas fa-pencil-alt" @click="openGitHubEditLink"></q-btn>
          </div>
        </q-card-section>
        <q-card-section>
          <em v-if="markdown.isBlogPost">Posted by {{markdown.attributes.author}} on {{markdown.displayDate}} in  {{markdown.attributes.location}}</em>
          <q-markdown :src="markdown.body"/>
        </q-card-section>
      </q-card>
      <br/>
      <q-btn to="/blog" class="shadow-1" v-if="markdown.isBlogPost">
        Blog overview
      </q-btn>
    </div>
  </q-page>
</template>

<script>
import PageHeader from '../components/PageHeader'
import { markdownFiles } from '../load-markdown-files'
import notFound from '../markdown/notFound.md'

export default {
  name: 'Blog',
  props: {
    pathMatch: String
  },
  components: {
    PageHeader
  },
  data () {
    return {
      markdownFiles: markdownFiles
    }
  },
  computed: {
    markdown () {
      for (let i = 0; i < this.markdownFiles.length; i++) {
        if (this.markdownFiles[i].slug === this.pathMatch) {
          return this.markdownFiles[i]
        }
      }
      return { title: '404', content: notFound, isBlogPost: false }
    },
    currentPageName () {
      if (this.markdown.isBlogPost) {
        return this.markdown.attributes.title
      } else {
        return this.markdown.attributes.pageName
      }
    }
  },
  methods: {
    openGitHubEditLink () {
      let url = 'https://github.com/vernaillen/vernaillen-website/edit/master/src/markdown/'
      if (this.markdown.isBlogPost) {
        url += 'blog/'
      }
      window.location.href = url + this.pathMatch + '.md'
    }
  }
}
</script>
