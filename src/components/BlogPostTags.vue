<template>
  <span>
    <span class="post-tags" v-for="(tag, index) in tags" :key="index">
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

<style lang="sass">
  .post-tags
    font-size: 80%
    margin-right: 12px
    a.tag-link
      padding-left: 5px
      text-decoration: none
      color: $primary
    a.tag-link:hover
      text-decoration: underline
      color: $secondary
</style>
