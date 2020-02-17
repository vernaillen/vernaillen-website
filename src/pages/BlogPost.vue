<template>
  <q-page padding>
    <template>
      {{pathMatch}}<br/>
      <q-markdown :src="content"/>
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
