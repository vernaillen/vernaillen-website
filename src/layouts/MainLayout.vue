<template>
  <q-layout view="hHr lpR fFr">
    <q-header elevated class="text-dark" height-hint="61">
      <q-toolbar class="page-container">
        <q-btn
          v-if="$q.screen.lt.sm"
          dense flat round
          icon="fas fa-bars"
          alt="Toggle menu" aria-label="Toggle menu"
          @click="showDrawer = !showDrawer"
        />
        <logo />
        <q-space />
        <page-nav isDrawer=false v-if="!$q.screen.lt.sm"/>
        <div class="justify-end">
          <toolbar-actions/>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="showDrawer"
              side="left"
              :width="250"
              :breakpoint="500"
              behavior="mobile"
              elevated
              content-class="bg-grey-1">
      <q-toolbar id="menu-toolbar">
        <logo />
      </q-toolbar>
      <q-list>
        <q-separator/>
        <page-nav isDrawer=true />
      </q-list>
    </q-drawer>

    <q-page-container class="page-wrapper">
      <transition name="fade" mode="out-in">
        <router-view :key="$route.fullPath" />
      </transition>
      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn fab icon="fas fa-long-arrow-alt-up" class="shadow-4" color="primary" alt="Back to top" aria-label="Back to top" />
      </q-page-scroller>
    </q-page-container>

    <my-footer />
  </q-layout>
</template>

<script>
import Logo from '../components/Logo'
import PageNav from '../components/PageNav'
import ToolbarActions from '../components/ToolbarActions'
import MyFooter from '../components/Footer'

export default {
  name: 'MyLayout',
  components: {
    Logo,
    PageNav,
    ToolbarActions,
    MyFooter
  },
  data () {
    return {
      showDrawer: false
    }
  }
}
</script>

<style lang="sass">
  header,
  #menu-toolbar
    height: 61px
    background-color: white !important

  .fade-enter-active,
  .fade-leave-active
    transition-duration: 0.1s
    transition-property: opacity
    transition-timing-function: ease

  .fade-enter,
  .fade-leave-active
    opacity: 0
</style>
