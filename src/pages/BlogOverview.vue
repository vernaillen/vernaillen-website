<template>
  <q-page>
    <page-header title="Wouter's blog" currentUrl="/#/blog" currentPageName="Blog" />
    <div class="page-container q-pa-md">
      <div class="row q-col-gutter-lg">
        <div class="col-12 col-md-6" v-for="(post, index) in blogPosts" :key="index">
          <q-card>
            <q-card-section class="card-title">
              <h6>{{post.attributes.title}}</h6>
              <span class="float-right">
                {{post.displayDate}}
              </span>
            </q-card-section>
            <q-card-section>
              {{post.attributes.desc}}
              <br/><br/>
              <q-btn
                :to="'/blog/' + post.slug"
                :area-label="'Go to blog post ' + post.attributes.title"
                clickable flat
              >
                Read more
              </q-btn>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import PageHeader from '../components/PageHeader'
import { markdownFiles } from '../load-markdown-files'

export default {
  data () {
    return {
      markdownFiles: markdownFiles
    }
  },
  components: {
    PageHeader
  },
  computed: {
    blogPosts () {
      return this.markdownFiles.filter(md => {
        return md.isBlogPost
      }).sort((a, b) => {
        return b.sortingDate - a.sortingDate
      })
    }
  }
}
</script>
