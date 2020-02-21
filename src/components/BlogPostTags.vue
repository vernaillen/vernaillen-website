<template>
  <span>
    <span class="post-meta" v-for="(tag, index) in tags" :key="index">
      <router-link :to="'/blog/tag/'+tag"><q-icon name="fas fa-tag"/></router-link>
      <router-link :to="'/blog/tag/'+tag" class="tag-link">{{tag}}</router-link>
    </span>
  </span>
</template>

<script>
export default {
  name: 'MarkdownPage',
  props: {
    tags: Array
  }
}
</script>
