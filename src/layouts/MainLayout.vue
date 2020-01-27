<template>
  <q-layout view="hHr lpR fFr">
    <q-header class="bg-white text-grey-9 shadow-1">
      <q-toolbar>
        <logo/>
        <q-space/>
        <q-btn dense flat round icon="fas fa-bars" @click="showMenu = !showMenu" alt="Toggle menu" aria-label="Toggle menu" />
      </q-toolbar>
      <q-toolbar>
        <q-breadcrumbs separator="" gutter="lg">
          <q-breadcrumbs-el :to="previousPagePath" icon="fas fa-backward" />
          <q-breadcrumbs-el :label="$store.state.common.currentPageName" :icon="currentPageIcon" class="text-black" />
          <q-breadcrumbs-el :to="nextPagePath" icon="fas fa-forward" class="text-primary" />
        </q-breadcrumbs>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="showMenu"
              side="right"
              :width="250"
              :breakpoint="500"
              behavior="mobile"
              elevated
              content-class="bg-grey-1">
      <q-toolbar id="menu-toolbar"/>
      <q-list>
        <q-separator></q-separator>
        <div v-for="(page, index) in pages" :key="index">
          <q-item :to="page.path" clickable v-ripple :area-label="'Go to' + page.name" active-class="text-black q-item--active">
            <q-item-section avatar>
              <q-icon class="text-primary" :name="page.icon" />
            </q-item-section>
            <q-item-section>{{page.name}}</q-item-section>
          </q-item>
          <q-separator></q-separator>
        </div>
      </q-list>
    </q-drawer>

    <q-page-container
      v-touch-swipe.mouse.left="swipeLeft"
      v-touch-swipe.mouse.right="swipeRight"
      style="overflow: hidden;"  data-v-step="1">
      <transition :name="transitionName" mode="out-in">
        <router-view />
      </transition>
      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn fab icon="fas fa-long-arrow-alt-up" color="primary" alt="Back to top" aria-label="Back to top" />
      </q-page-scroller>
    </q-page-container>

    <q-footer class="bg-secondary text-grey-3 shadow-up-2 text-center q-pa-sm" data-v-step="2">
      © 2020 Vernaillen Consulting
    </q-footer>

    <v-tour name="myTour" :steps="tourSteps" :options="tourOptions" :callbacks="tourCallbacks"></v-tour>

  </q-layout>
</template>

<script>
import Logo from '../components/Logo'

export default {
  name: 'LayoutDefault',
  components: {
    Logo
  },
  props: {
    pathMatch: String
  },
  data () {
    return {
      showMenu: false,
      prevHeight: 0,
      pages: this.$store.state.common.pages,
      nrOfPages: this.$store.state.common.nrOfPages,
      showBreadcrumb: false,
      transitionName: 'slide-left',
      tourOptions: {
        useKeyboardNavigation: true,
        labels: {
          buttonSkip: 'Skip tour',
          buttonPrevious: 'Previous',
          buttonNext: 'Next',
          buttonStop: 'Finish'
        }
      },
      tourSteps: [
        {
          target: '[data-v-step="0"]',
          content: `Welcome to the <strong>Vernaillen website</strong>!`
        },
        {
          target: '[data-v-step="1"]',
          content: 'Check out the awesome career timeline'
        },
        {
          target: '[data-v-step="2"]',
          content: 'This is the footer :D',
          params: {
            placement: 'top'
          }
        }
      ],
      tourCallbacks: {
        onPreviousStep: this.myCustomPreviousStepCallback,
        onNextStep: this.myCustomNextStepCallback
      }
    }
  },
  mounted: function () {
    this.$tours['myTour'].start()
  },
  created () {
    this.$router.beforeEach((to, from, next) => {
      const fromPos = this.getPagePosition(from.name)
      const toPos = this.getPagePosition(to.name)
      let transitionName = toPos < fromPos ? 'slide-right' : 'slide-left'
      if (toPos === 0 && fromPos === this.nrOfPages) {
        transitionName = 'slide-left'
      } else if (toPos === this.nrOfPages && fromPos === 0) {
        transitionName = 'slide-right'
      }
      this.transitionName = transitionName || 'slide-left'
      this.$store.commit('common/currentBlogPostName', '')
      next()
    })
    this.$router.afterEach((to, from, next) => {
      this.setCurrentPageName(to.path)
    })
    this.setCurrentPageName(this.$route.path)
  },
  computed: {
    nextPagePath () {
      let nextPos = 1
      if (this.$store.state.common.currentPageName !== '') {
        const currentPos = this.getPagePosition(this.$store.state.common.currentPageName)
        nextPos = currentPos + 1
        if (nextPos >= this.nrOfPages) {
          nextPos = 0
        }
      }
      return this.$store.state.common.pages[nextPos].path
    },
    previousPagePath () {
      let nextPos = this.nrOfPages - 1
      if (this.$store.state.common.currentPageName !== '') {
        const currentPos = this.getPagePosition(this.$store.state.common.currentPageName)
        nextPos = currentPos - 1
        if (nextPos < 0) {
          nextPos = this.nrOfPages - 1
        }
      }
      return this.$store.state.common.pages[nextPos].path
    },
    currentPageIcon () {
      for (let i = 0; i < this.nrOfPages; i++) {
        if (this.$store.state.common.pages[i].name === this.$store.state.common.currentPageName) {
          return this.$store.state.common.pages[i].icon
        }
      }
      return 'fas fa-home'
    },
    isBlogPost () {
      return this.$store.state.common.currentPageName === 'Blog'
    }
  },
  methods: {
    swipeLeft () {
      this.$router.push(this.nextPagePath)
    },
    swipeRight () {
      this.$router.push(this.previousPagePath)
    },
    getPagePosition (pageName) {
      for (let i = 0; i < this.nrOfPages; i++) {
        if (this.$store.state.common.pages[i].name === pageName) {
          return i
        }
      }
    },
    setCurrentPageName (path) {
      let pageName = 'Home'
      if (typeof path !== 'undefined' && path !== '') {
        for (let i = 0; i < this.nrOfPages; i++) {
          if (this.$store.state.common.pages[i].path === path) {
            pageName = this.$store.state.common.pages[i].name
          }
        }
      }
      this.$store.commit('common/currentPageName', pageName)
    },
    myCustomPreviousStepCallback (currentStep) {
      console.log('[Vue Tour] A custom previousStep callback has been called on step ' + (currentStep + 1))
    },
    myCustomNextStepCallback (currentStep) {
      console.log('[Vue Tour] A custom nextStep callback has been called on step ' + (currentStep + 1))

      if (currentStep === 0) {
        this.$router.push('/career')
        console.log('[Vue Tour] A custom nextStep callback has been called from step 2 to step 3')
      }
    }
  }
}
</script>

<style type="scss">
  .q-breadcrumbs {
    margin-left: auto;
    margin-right: auto;
  }
  .q-breadcrumbs--last a {
    pointer-events: inherit;
  }

  .q-item.q-router-link--active,
  .q-item--active {
    background-color: #ddd;
  }

  .q-item.q-router-link--active .q-icon,
  .q-item--active .q-icon {
    color: black !important;
  }
  #menu-toolbar {
    height: 100px;
  }

  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active {
    transition-duration: 0.2s;
    transition-property: opacity, transform;
    overflow: hidden;
  }

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0.5;
    transform: translate(2em, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0.5;
    transform: translate(-2em, 0);
  }
</style>
