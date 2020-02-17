<template>
  <q-page padding class="flex flex-center" >
    Author: {{fm.author}}<br/>
    Location: {{fm.location}}<br/>
    Date: {{fm.date}}
    <br/>
    <post-test />
  </q-page>
</template>

<script>
import postTest from '../blogposts/post-test.vmd'

export default {
  name: 'MarkdownTest',

  components: {
    postTest
  },
  computed: {
    fm () {
      return this.$store.state.common.frontmatterData
    }
  }
}
</script>
