<template>
  <q-page padding class="flex flex-center" >
    <q-markdown :src="markdown"/>
  </q-page>
</template>

<script>
import markdown from '../markdown/markdown.md'

export default {
  name: 'MarkdownTest',
  data () {
    return {
      markdown: markdown
    }
  }
}
</script>
