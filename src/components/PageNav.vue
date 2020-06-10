<template>
  <nav class="page-nav">
    <q-list>
      <page-nav-item title="Home" url="/home"/>
      <page-nav-item title="Career" url="/career"/>
      <page-nav-item title="Skills" url="/page/skills"/>
      <page-nav-item title="Blog" url="/blog"/>
      <page-nav-item title="Music" url="/music"/>
      <page-nav-item title="About" url="/page/about"/>
      <page-nav-item title="Contact" url="/contact"/>
    </q-list>
  </nav>
</template>

<script>
import PageNavItem from './PageNavItem'

export default {
  name: 'PageNav',
  components: {
    PageNavItem
  }
}
</script>

<style lang="sass">
  .q-toolbar
    .page-nav
      position: relative
      .page-nav-item
        padding: 0 !important
        float: left
        color: #586069
        white-space: nowrap
        text-decoration: none
        .q-item__section
          padding: 16px 12px
          border-bottom: 5px solid transparent
          border-bottom-color: transparent
      .page-nav-item.selected
        color: #24292e
        background-color: #fff
        .q-item__section
          border-color: $primary
    .page-nav::after,
    .page-nav::before
      display: table
      content: ""

  .q-drawer
    .page-nav-item
      padding: 0 !important
      .q-item__section
        padding: 12px 16px
        border-left: 5px solid transparent
        border-bottom-color: transparent
    .page-nav-item.selected
      .q-item__section
        border-color: $primary
        color: #24292e
</style>
