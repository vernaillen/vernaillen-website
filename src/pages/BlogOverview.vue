<template>
  <q-page padding class="page-container q-pa-md">
      <div class="row q-col-gutter-lg">
        <div class="col-12 col-md-6" v-for="(post, index) in blogPosts" :key="index">
          <q-card>
            <q-card-section class="card-title">
              {{post.attributes.title}}
              <span class="float-right">
                {{post.attributes.date}}
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
  </q-page>
</template>

<script>
import { markdownFiles } from '../load-markdown-files'

export default {
  data () {
    return {
      markdownFiles: markdownFiles
    }
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
