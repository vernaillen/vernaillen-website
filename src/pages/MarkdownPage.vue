<template>
  <q-page padding class="page-container">
    <template>
      <q-card>
        <q-card-section class="card-title">
          {{markdown.attributes.title}}
          <div class="float-right edit-icon">
            <q-btn flat icon="fas fa-pencil-alt" @click="openGitHubEditLink"></q-btn>
          </div>
        </q-card-section>
        <q-card-section>
          <em v-if="markdown.isBlogPost">Posted by {{markdown.attributes.author}} on {{markdown.attributes.date}} in  {{markdown.attributes.location}}</em>
          <q-markdown :src="markdown.body"/>
        </q-card-section>
      </q-card>
      <br/>
      <q-btn to="/blog" class="shadow-1" v-if="markdown.isBlogPost">
        Blog overview
      </q-btn>
    </template>
  </q-page>
</template>

<script>
import { markdownFiles } from '../load-markdown-files'
import notFound from '../markdown/notFound.md'

export default {
  name: 'Blog',
  props: {
    pathMatch: String
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
    }
  },
  methods: {
    openGitHubEditLink () {
      let url = 'https://github.com/vernaillen/vernaillen-website/edit/master/src/markdown/'
      if (this.markdown.isBlogPost) {
        url += 'blogposts/'
      }
      window.location.href = url + this.pathMatch + '.md'
    }
  }
}
</script>
