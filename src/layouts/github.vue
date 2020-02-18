<template>
  <q-layout>
    <q-header elevated class="text-white" style="background: #24292e" height-hint="61.59">
      <q-toolbar class="q-py-sm q-px-md">
        <logo/>

        <q-select
          ref="search" dark dense standout use-input hide-selected
          class="GL__toolbar-select"
          color="black" :stack-label="false" label="Search or jump to..."
          v-model="text" :options="filteredOptions" @filter="filter"
          style="width: 300px"
        >

          <template v-slot:append>
            <img alt="search key slash" src="https://cdn.quasar.dev/img/layout-gallery/img-github-search-key-slash.svg">
          </template>

          <template v-slot:no-option>
            <q-item>
              <q-item-section>
                <div class="text-center">
                  <q-spinner-pie
                    color="grey-5"
                    size="24px"
                  />
                </div>
              </q-item-section>
            </q-item>
          </template>

          <template v-slot:option="scope">
            <q-item
              v-bind="scope.itemProps"
              v-on="scope.itemEvents"
              class="GL__select-GL__menu-link"
            >
              <q-item-section side>
                <q-icon name="collections_bookmark" />
              </q-item-section>
              <q-item-section>
                <q-item-label v-html="scope.opt.label" />
              </q-item-section>
              <q-item-section side :class="{ 'default-type': !scope.opt.type }">
                <q-btn outline dense no-caps text-color="blue-grey-5" size="12px" class="bg-grey-1 q-px-sm">
                  {{ scope.opt.type || 'Jump to' }}
                  <q-icon name="subdirectory_arrow_left" size="14px" />
                </q-btn>
              </q-item-section>
            </q-item>
          </template>
        </q-select>

        <div v-if="$q.screen.gt.sm" class="GL__toolbar-link q-ml-xs q-gutter-md text-body2 text-weight-bold row items-center no-wrap">
          <a href="https://github.com/vernaillen" target="_blank" class="text-white" rel="noopener noreferrer">
            GitHub
          </a>
        </div>

        <q-space />

        <div class="q-pl-sm q-gutter-sm row items-center no-wrap">
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

    <div class="pagehead repohead hx_repohead readability-menu bg-gray-light pb-0 pt-3  pb-0">

      <div class="container-lg mb-4 px-3 d-flex">

        <div class="flex-auto min-width-0 width-fit mr-3">
          <h1 class="public  d-flex flex-wrap flex-items-center break-word float-none ">
            <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
            <span class="author ml-1 flex-self-stretch" itemprop="author">
              <a class="url fn" rel="author" href="https://github.com/vernaillen">vernaillen</a>
            </span>
            <span class="path-divider flex-self-stretch">/</span>
            <strong itemprop="name" class="mr-2 flex-self-stretch">
              <a data-pjax="#js-repo-pjax-container" href="https://github.com/vernaillen/vernaillen-website">vernaillen-website</a>
            </strong>

          </h1>
        </div>

        <ul class="pagehead-actions flex-shrink-0">
          <li>
            <details class="details-reset details-overlay details-overlay-dark d-inline-block float-left">
              <summary clickable class="btn btn-sm" title="Fork your own copy of vernaillen/vernaillen-website to your account" role="button" @click="openUrl('https://github.com/vernaillen/vernaillen-website')">
                <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true">
                  <path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path>
                </svg>
                Fork
              </summary>
            </details>
          </li>
        </ul>

      </div>

      <nav class="hx_reponav reponav js-repo-nav js-sidenav-container-pjax clearfix container-lg px-3" itemscope="" itemtype="http://schema.org/BreadcrumbList" aria-label="Repository" data-pjax="#js-repo-pjax-container">
        <a :class="navItemClass('/home')" href="/#/home">
          <div class="d-inline"><q-icon name="fas fa-house-damage"></q-icon></div>
          Home
        </a>
        <a :class="navItemClass('/career')" href="/#/career">
          <div class="d-inline"><q-icon name="fas fa-briefcase"></q-icon></div>
          Career
        </a>
        <a :class="navItemClass('/blog')" href="/#/blog">
          <div class="d-inline"><q-icon name="fas fa-blog"></q-icon></div>
          Blog
        </a>
        <a :class="navItemClass('/about')"  href="/#/about">
          <div class="d-inline"><q-icon name="fas fa-male"></q-icon></div>
          About
        </a>
        <a :class="navItemClass('/contact')"  href="/#/contact">
          <div class="d-inline"><q-icon name="fas fa-envelope-square"></q-icon></div>
          Contact
        </a>
      </nav>
    </div>
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-secondary text-grey-3 shadow-up-4 text-center q-pa-sm">
      Powered by <a alt="Vue" href="https://vuejs.org" target="_blank" rel="noopener noreferrer"><img src="https://vuejs.org/images/logo.png" style="height: 20px;margin-bottom: -5px; margin-right: 25px"/></a>  © 2020 Vernaillen Consulting
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
      let itemClass = 'js-selected-navigation-item reponav-item'
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
  .pagehead
    padding-top: 80px !important

  .q-page-container
    padding-top: 0 !important

  .reponav-item
    .q-icon
      margin-bottom: 3px
      margin-right: 5px
      color: #666

  .reponav-item.selected
    border-color: #1bbc9b #e1e4e8 transparent

  summary.btn a
    color: #24292e

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
