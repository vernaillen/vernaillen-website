<template>
  <q-layout view="hHr lpR fFr">
    <q-header elevated class="text-dark" style="background: white" height-hint="61.59">
      <q-toolbar class="q-pb-md page-container">
        <q-btn
          v-if="$q.screen.lt.sm"
          class="q-pt-md q-pl-sm"
          dense flat round
          icon="fas fa-bars"
          alt="Toggle menu" aria-label="Toggle menu"
          @click="showDrawer = !showDrawer"
        />
        <logo />
        <q-space />
        <nav v-if="!$q.screen.lt.sm" class="page-nav">
          <router-link :class="navItemClass('/home')" to="/home">
            Home
          </router-link>
          <router-link :class="navItemClass('/career')" to="/career">
            Career
          </router-link>
          <router-link :class="navItemClass('/blog')" to="/blog">
            Blog
          </router-link>
          <router-link :class="navItemClass('/page/about')" to="/page/about">
            About
          </router-link>
          <router-link :class="navItemClass('/page/contact')" to="/page/contact">
            Contact
          </router-link>
        </nav>
        <div class="justify-end">
          <ul class="toolbar-actions float-right">
            <li>
              <q-btn title="Fork your own copy of vernaillen/vernaillen-website to your account"  @click="openUrl('https://github.com/vernaillen/vernaillen-website')">
                <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true">
                  <path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path>
                </svg>
                Fork
              </q-btn>
            </li>
          </ul>
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
      <q-toolbar id="menu-toolbar" style="height: 66px"/>
      <q-list>
        <q-separator></q-separator>
        <div>
          <q-item to="/home" clickable v-ripple :area-label="'Go to home'" active-class="text-black q-item--active">
            <q-item-section>Home</q-item-section>
          </q-item>
          <q-item to="/career" clickable v-ripple :area-label="'Go to home'" active-class="text-black q-item--active">
            <q-item-section>Career</q-item-section>
          </q-item>
          <q-item to="/blog" clickable v-ripple :area-label="'Go to home'" active-class="text-black q-item--active">
            <q-item-section>Blog</q-item-section>
          </q-item>
          <q-item to="/page/about" clickable v-ripple :area-label="'Go to home'" active-class="text-black q-item--active">
            <q-item-section>About</q-item-section>
          </q-item>
          <q-item to="/page/contact" clickable v-ripple :area-label="'Go to home'" active-class="text-black q-item--active">
            <q-item-section>Contact</q-item-section>
          </q-item>
        </div>
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

    <q-footer class="bg-secondary text-grey-4 shadow-up-4 text-center q-pa-sm">
      Powered by
      <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">
        <img alt="Vue" src="https://vuejs.org/images/logo.png" />
      </a>
      © 2020 Vernaillen Consulting
    </q-footer>
  </q-layout>
</template>

<script>
import Logo from '../components/Logo'

export default {
  name: 'MyLayout',
  components: {
    Logo
  },
  data () {
    return {
      showDrawer: false
    }
  },
  methods: {
    navItemClass (link) {
      let itemClass = 'page-nav-item'
      if (this.$route.path.startsWith(link)) {
        itemClass += ' selected'
      }
      return itemClass
    },
    openUrl (url) {
      window.location.href = url
    }
  }
}
</script>

<style lang="sass">

  .q-toolbar
    .page-nav
      position: relative
      .page-nav-item
        padding: 14px 12px 7px !important
        float: left
        color: #586069
        white-space: nowrap
        border-top: 5px solid transparent
        border-top-color: transparent
        text-decoration: none
        .q-icon
          margin-bottom: 3px
          margin-right: 5px
          color: #666
      .page-nav-item.selected
        border-color: $primary #e1e4e8 transparent
        color: #24292e
        background-color: #fff
    .page-nav::after,
    .page-nav::before
      display: table
      content: ""
    .toolbar-actions
      margin: 14px 0 0 0
      svg
        margin-right: 5px
      li
        font-size: 11px
        color: #24292e
        list-style-type: none
        .q-btn
          background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%)
          font-size: 12px
          line-height: 20px
          text-transform: none
          .q-btn__wrapper
            padding: 3px 10px

  .fade-enter-active,
  .fade-leave-active
    transition-duration: 0.1s
    transition-property: opacity
    transition-timing-function: ease

  .fade-enter,
  .fade-leave-active
    opacity: 0

  footer
    font-size: 90%
    height: 40px
    a
      margin-right: 15px
      img
        height: 18px
        margin-bottom: -5px

</style>
