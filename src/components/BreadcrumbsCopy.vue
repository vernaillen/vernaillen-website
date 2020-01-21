<template>
  <q-breadcrumbs class="primary">
    <template v-slot:separator>
      <q-icon size="1em" name="fas fa-long-arrow-alt-right" color="primary" />
    </template>
    <q-breadcrumbs-el v-if="$store.state.common.currentPageName !== 'Home'" to="/home" icon="fas fa-home" />
    <q-breadcrumbs-el v-if="$store.state.common.currentBlogPostName === ''" :label="$store.state.common.currentPageName" :icon="currentPageIcon"/>
    <template v-if="$store.state.common.currentBlogPostName !== ''">
      <q-breadcrumbs-el to="/blog" label="Blog" icon="fas fa-blog"/>
      <q-breadcrumbs-el :label="$store.state.common.currentBlogPostName"/>
    </template>
  </q-breadcrumbs>
</template>

<script>
export default {
  name: 'BreadCrumbs',
  props: {
    pathMatch: String
  },
  computed: {
    currentPageIcon () {
      for (let i = 0; i < 7; i++) {
        if (this.$store.state.common.pages[i].name === this.$store.state.common.currentPageName) {
          return this.$store.state.common.pages[i].icon
        }
      }
      return 'add'
    },
    isBlogPost () {
      return this.$store.state.common.currentPageName === 'Blog'
    }
  }
}
</script>

<style>
</style>
