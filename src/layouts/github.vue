<template>
  <q-layout view="hHr lpR fFr">
    <q-header elevated class="text-white" style="background: #24292e" height-hint="61.59">
      <q-toolbar class="q-pb-md q-px-md page-container">
        <logo/>

        <q-space />

        <div class="q-pl-sm q-pt-sm q-gutter-sm row items-center no-wrap">
          <q-btn v-if="$q.screen.gt.xs" dense flat round size="sm" icon="notifications" @click="openUrl('/#/blog')" />
          <q-btn v-if="$q.screen.gt.xs" dense flat>
            <div class="row items-center no-wrap">
              <q-icon name="add" size="20px" />
              <q-icon name="arrow_drop_down" size="16px" style="margin-left: -2px" />
            </div>
            <q-menu auto-close>
              <q-list dense style="min-width: 100px">
                <q-item clickable class="GL__menu-link" @click="openUrl('https://github.com/vernaillen/vernaillen-website')">
                  <q-item-section>This repository</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link" @click="openUrl('https://github.com/vernaillen/vernaillen-website/issue/new')">
                  <q-item-section>New issue</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>

          <q-btn dense flat no-wrap>
            <q-avatar rounded size="20px">
              <img alt="Wouter's GitHub Avatar" src="https://avatars0.githubusercontent.com/u/102268?s=40&v=4">
            </q-avatar>
            <q-icon name="arrow_drop_down" size="16px" />

            <q-menu auto-close>
              <q-list dense>
                <q-item clickable class="GL__menu-link" @click="openUrl('https://github.com/vernaillen/')">
                  <q-item-section>GitHub profile</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link" @click="openUrl('https://github.com/vernaillen?tab=repositories')">
                  <q-item-section>My repositories</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link" @click="openUrl('https://github.com/vernaillen?tab=stars')">
                  <q-item-section>My stars</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <div class="pageheader">

      <div class="page-container q-px-md">

        <div class="row full-width">

          <div class="col">
            <div class="repo-nav">
              <svg class="repo-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true">
                <path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path>
              </svg>
              <span class="author" itemprop="author">
                <a rel="author" title="got to my GitHub account" href="https://github.com/vernaillen">vernaillen</a>
              </span>
              <span class="path-divider">/</span>
              <strong itemprop="name">
                <a title="check out this website's git repository" href="https://github.com/vernaillen/vernaillen-website">vernaillen-website</a>
              </strong>
            </div>
          </div>

          <div class="col justify-end">
            <ul class="pageheader-actions float-right">
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

        </div>

        <div class="row full-width">
          <nav class="page-nav">
            <a :class="navItemClass('/home')" href="/#/home">
              <q-icon name="fas fa-house-damage"></q-icon> Home
            </a>
            <a :class="navItemClass('/career')" href="/#/career">
              <q-icon name="fas fa-briefcase"></q-icon> Career
            </a>
            <a :class="navItemClass('/blog')" href="/#/blog">
              <q-icon name="fas fa-blog"></q-icon> Blog
            </a>
            <a :class="navItemClass('/page/about')"  href="/#/page/about">
              <q-icon name="fas fa-male"></q-icon> About
            </a>
            <a :class="navItemClass('/page/contact')"  href="/#/page/contact">
              <q-icon name="fas fa-envelope-square"></q-icon> Contact
            </a>
          </nav>
        </div>
      </div>
    </div>
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-secondary text-grey-3 shadow-up-4 text-center q-pa-sm">
      Powered by <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer"><img alt="Vue" src="https://vuejs.org/images/logo.png" style="height: 20px;margin-bottom: -5px; margin-right: 25px"/></a>  © 2020 Vernaillen Consulting
    </q-footer>
  </q-layout>
</template>

<script>
import Logo from '../components/Logo'

const stringOptions = [
  'vernaillen/vernaillen-website',
  'quasarframework/quasar-awesome'
]

export default {
  name: 'MyLayout',

  components: {
    Logo
  },
  data () {
    return {
      text: '',
      options: null,
      filteredOptions: []
    }
  },

  methods: {
    filter (val, update) {
      if (this.options === null) {
        // load data
        setTimeout(() => {
          this.options = stringOptions
          this.$refs.search.filter('')
        }, 2000)
        update()
        return
      }

      if (val === '') {
        update(() => {
          this.filteredOptions = this.options.map(op => ({ label: op }))
        })
        return
      }

      update(() => {
        this.filteredOptions = [
          {
            label: val,
            type: 'In this repository'
          },
          {
            label: val,
            type: 'All GitHub'
          },
          ...this.options
            .filter(op => op.toLowerCase().includes(val.toLowerCase()))
            .map(op => ({ label: op }))
        ]
      })
    },
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
  .pageheader
    padding-top: 80px !important
    position: relative
    padding-top: 24px
    padding-bottom: 0
    margin-bottom: 24px
    border-bottom: 1px solid #e1e4e8

    svg
      margin-right: 5px

    .repo-nav
      font-size: 16px
      color: #959da5
      .repo-icon
        fill: currentColor
        margin-bottom: -4px
      a
        color: #0366d6
        text-decoration: none
      a:hover
        text-decoration: underline
      .path-divider
        padding: 3px

    .pageheader-actions
      margin-top: 0
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

    .page-nav
      position: relative
      top: 1px
      margin-top: -5px
      .page-nav-item
        padding: 7px 12px 8px !important
        float: left
        color: #586069
        white-space: nowrap
        border: 1px solid transparent
        border-top-color: transparent
        border-top-style: solid
        border-top-width: 1px
        border-right-color: transparent
        border-bottom-color: transparent
        border-left-color: transparent
        border-top: 3px solid transparent
        border-top-color: transparent
        border-radius: 3px 3px 0 0
        text-decoration: none
        .q-icon
          margin-bottom: 3px
          margin-right: 5px
          color: #666
      .page-nav-item.selected
        border-color: #1bbc9b #e1e4e8 transparent
        color: #24292e
        background-color: #fff
    .page-nav::after,
    .page-nav::before
      display: table
      content: ""

  .q-page-container
    padding-top: 0 !important

  .GL
    &__select-GL__menu-link
    .default-type
      visibility: hidden

      &:hover
        background: #0366d6
        color: white
        .q-item__section--side
          color: white
        .default-type
          visibility: visible

    &__toolbar-link
      a
        color: white
        text-decoration: none
        &:hover
          opacity: 0.7

    &__menu-link:hover
      background: #0366d6
      color: white

    &__menu-link-signed-in
    &__menu-link-status
      &:hover
        & > div
          background: white !important

    &__menu-link-status
      color: $blue-grey-6
      &:hover
        color: $light-blue-9

    &__toolbar-select.q-field--focused
      width: 450px !important
      .q-field__append
        display: none
</style>
