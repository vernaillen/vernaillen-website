<template>
  <q-page padding class="q-page-max1024">
    <template>
      {{pathMatch}}<br/>
      <q-markdown :src="content"/>
      <q-btn to="/blog" class="shadow-4" icon="fas fa-long-arrow-alt-left">
        Blog overview
      </q-btn>
    </template>
  </q-page>
</template>

<script>
export default {
  name: 'Blog',
  props: {
    pathMatch: String
  },
  data () {
    return {
      blogPosts: this.$store.state.common.blogPosts
    }
  },
  computed: {
    content () {
      for (let i = 0; i < 2; i++) {
        if (this.blogPosts[i].slug === this.pathMatch) {
          this.$store.commit('common/currentBlogPostName', this.blogPosts[i].name)
          return this.blogPosts[i].component
        }
      }
      return this.blogPosts[0].component
    }
  }
}
</script>
