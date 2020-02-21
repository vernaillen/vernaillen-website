<template>
  <q-page>
    <page-header :title="markdown.attributes.title" :currentPageName="currentPageName" :isBlogPost="markdown.isBlogPost" />
    <div v-if="markdown.isBlogPost" class="page-container q-pa-md">
      <div class="row q-col-gutter-lg">
        <div class="col-12 col-md-9">
          <q-card>
            <q-card-section>
              <q-markdown :src="markdown.body"/>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-3">
          <q-card>
            <q-card-section class="blog-meta">
              <q-icon name="far fa-user"/> {{markdown.attributes.author}}<br/>
              <q-icon name="far fa-calendar"/> {{markdown.displayDate}}<br/>
              <q-icon name="fas fa-map-marker-alt"/> {{markdown.attributes.location}}<br/>
              <br/>
              <div v-for="(tag, index) in markdown.attributes.tag" :key="index">
                <q-icon name="fas fa-tag"/> {{tag}}<br/>
              </div>
              <br/>
              <q-btn :to="prev"
                     :disable="prev === ''"
                     icon="fas fa-backward"
                     color="secondary"/>
              <q-btn to="/blog"
                     icon="fas fa-level-up-alt"/>
              <q-btn :to="next"
                     :disable="next === ''"
                     icon="fas fa-forward"
                     color="secondary"/>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <div v-else class="page-container q-pa-md">
      <q-card>
        <q-card-section>
          <q-markdown :src="markdown.body"/>
        </q-card-section>
      </q-card>
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
    blogPosts () {
      return this.markdownFiles.filter(md => {
        return md.isBlogPost
      }).sort((a, b) => {
        return b.sortingDate - a.sortingDate
      })
    },
    prev () {
      for (let i = 0; i < this.blogPosts.length; i++) {
        if (this.blogPosts[i].slug === this.pathMatch) {
          if (i > 0) {
            return '/blog/' + this.blogPosts[i - 1].slug
          }
        }
      }
      return ''
    },
    next () {
      for (let i = 0; i < this.blogPosts.length; i++) {
        if (this.blogPosts[i].slug === this.pathMatch) {
          if (i < this.blogPosts.length - 1) {
            return '/blog/' + this.blogPosts[i + 1].slug
          }
        }
      }
      return ''
    },
    currentPageName () {
      if (this.markdown.isBlogPost) {
        return this.markdown.attributes.title
      } else {
        return this.markdown.attributes.pageName
      }
    },
    editLink () {
      let url = 'https://github.com/vernaillen/vernaillen-website/edit/master/src/markdown/'
      if (this.markdown.isBlogPost) {
        url += 'blog/'
      }
      return url + this.pathMatch + '.md'
    }
  }
}
</script>

<style lang="sass">
  .blog-meta
    .q-btn
      margin-right: 14px
    .q-btn:last-child
      margin-right: 0px
</style>
