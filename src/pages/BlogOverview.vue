<template>
  <q-page>
    <div class="page-container q-pa-md">
      <div v-if="tag">
        <router-link to="/blog"><q-icon name="fas fa-window-close"/></router-link>
        Filtered by tag:
        <q-icon name="fas fa-tag"/> {{tag}}<br/><br/>
      </div>
      <div class="row q-col-gutter-lg">
        <div class="col-12 col-sm-6" v-for="(post, index) in blogPosts" :key="index">
          <q-card>
            <q-card-section class="card-title">
              <h6><router-link :to="'/blog/' + post.slug">{{post.attributes.title}}</router-link></h6>
            </q-card-section>
            <q-card-section class="post-date">
              <q-icon name="far fa-clock"/> {{post.displayDate}}
            </q-card-section>
            <q-card-section>
              {{post.attributes.desc}}
            </q-card-section>
            <q-card-section class="post-meta-section">
              <blog-post-tags :tags="post.attributes.tag"/>
              <div class="col-12 col-sm-4">
                <br/><br/>
                <q-btn
                  clickable
                  class="read-more"
                  color="secondary"
                  :to="'/blog/' + post.slug"
                  :area-label="'Go to blog post ' + post.attributes.title"
                >
                  Read more
                </q-btn>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { markdownFiles } from '../load-markdown-files'
import BlogPostTags from '../components/BlogPostTags'

export default {
  props: {
    tag: String
  },
  data () {
    return {
      markdownFiles: markdownFiles
    }
  },
  components: {
    BlogPostTags
  },
  created () {
    let isTagPage = false
    let pageTitle = 'Wouter\'s Blog'
    if (this.tag) {
      isTagPage = true
      pageTitle = 'posts about \'' + this.tag + '\''
    }
    this.$emit('pageData', {
      pageTitle: pageTitle,
      pageName: 'Blog',
      tag: this.tag,
      isTagPage: isTagPage
    })
  },
  computed: {
    blogPosts () {
      const posts = this.markdownFiles
        .filter(markdownFile => {
          return markdownFile.isBlogPost
        }).sort((a, b) => {
          return b.sortingDate - a.sortingDate
        })
      if (this.tag) {
        return posts.filter(markdownFile => {
          for (let i = 0; i < markdownFile.attributes.tag.length; i++) {
            if (markdownFile.attributes.tag[i] === this.tag) {
              return true
            }
          }
          return false
        })
      } else {
        return posts
      }
    }
  }
}
</script>

<style lang="sass">
  .post-date
    font-size: 80%
    margin-right: 12px
    color: $primary
</style>
