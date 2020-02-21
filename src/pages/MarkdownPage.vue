<template>
  <q-page class="markdown-page">
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
            <q-card-section class="post-meta-section">
              <div class="row">
                <div class="col-6 col-md-12 post-meta-1">
                  <span class="post-meta"><q-icon name="far fa-user"/> {{markdown.attributes.author}}</span>
                  <span class="post-meta"><q-icon name="far fa-calendar"/> {{markdown.displayDate}}</span>
                  <span class="post-meta"><q-icon name="fas fa-map-marker-alt"/> {{markdown.attributes.location}}</span>
                </div>
                <div class="col-6 col-md-12 post-meta-2">
                  <blog-post-tags :tags="markdown.attributes.tag"/>
                </div>
              </div>
              <div class="row blog-nav-buttons">
                <q-btn :to="prev"
                       :disable="prev === ''"
                       class="prev"
                       icon="fas fa-backward"
                       color="secondary"/>
                <q-btn to="/blog"
                       class="up"
                       icon="fas fa-level-up-alt"/>
                <q-btn :to="next"
                       :disable="next === ''"
                       class="next"
                       icon="fas fa-forward"
                       color="secondary"/>
              </div>
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
import { markdownFiles } from '../load-markdown-files'
import notFound from '../markdown/notFound.md'
import PageHeader from '../components/PageHeader'
import BlogPostTags from '../components/BlogPostTags'

export default {
  name: 'MarkdownPage',
  props: {
    pathMatch: String
  },
  components: {
    PageHeader,
    BlogPostTags
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
      return { title: '404', body: notFound, isBlogPost: false }
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
  .markdown-page
    .post-meta-section
      position: relative
      .q-btn
        position: absolute
        bottom: 16px
      .q-btn.prev
        left: 16px
      .q-btn.up
        left: 50%
        transform: translate(-50%, 0)
      .q-btn.next
        right: 16px
    .blog-nav-buttons
      height: 70px

    @media (min-width: 1024px)
      .q-card
        .post-meta-section
          .post-meta-1
            .post-meta
              display: block
              padding-bottom: 5px
</style>
