<template>
  <q-item clickable :class="navItemClass" :to="url">
    <q-item-section>{{title}}</q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'PageNavItem',
  props: {
    title: String,
    url: String
  },
  computed: {
    navItemClass () {
      let itemClass = 'page-nav-item'
      if (this.$route.path.startsWith(this.url)) {
        itemClass += ' selected'
      }
      return itemClass
    }
  }
}
</script>
