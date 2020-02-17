<template>
  <q-page padding class="flex flex-center" >
    <q-list>
      <div v-for="(post, index) in blogPosts" :key="index">
        <q-item
          :to="'/blog/' + post.slug"
          :area-label="'Go to blog post ' + post.name"
          clickable
        >
          {{ post.name }} ({{ post.date }})
        </q-item>
      </div>
    </q-list>
  </q-page>
</template>

<script>

export default {
  data () {
    return {
      blogPosts: this.$store.state.common.blogPosts
    }
  }
}
</script>
