<template>
  <q-page padding class="max1024">
    <template>
      <div class="Box mt-3 position-relative shadow-2">

        <div class="Box-header py-2 d-flex flex-column flex-shrink-0 flex-md-row flex-md-items-center">
          <div class="text-mono f6 flex-auto pr-3 flex-order-2 flex-md-order-1 mt-2 mt-md-0">
            {{markdown.attributes.title}}
          </div>
          <div class="d-flex py-1 py-md-0 flex-auto flex-order-1 flex-md-order-2 flex-sm-grow-0 flex-justify-between">
            <div>
              <button class="btn-octicon tooltipped tooltipped-nw" type="submit" aria-label="Edit this file" data-hotkey="e" data-disable-with="">
                <a :href="gitHubEditLink">
                  <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 011.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg>
                </a>
              </button>
            </div>
          </div>
        </div>
        <div class="Box-body blob js-code-block-container">
          <em v-if="markdown.isBlogPost">Posted by {{markdown.attributes.author}} on {{markdown.attributes.date}} in  {{markdown.attributes.location}}</em>
          <q-markdown :src="markdown.body"/>
        </div>
      </div>
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
    },
    gitHubEditLink () {
      let url = 'https://github.com/vernaillen/vernaillen-website/edit/master/src/markdown/'
      if (this.markdown.isBlogPost) {
        url += 'blogposts/'
      }
      return url + this.pathMatch + '.md'
    }
  }
}
</script>