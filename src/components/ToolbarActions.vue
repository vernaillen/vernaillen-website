<template>
  <ul class="toolbar-actions float-right">
    <li>
      <q-btn
        title="Fork your own copy of vernaillen/vernaillen-website to your account"
        to="/page/fork">
        <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true">
          <path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path>
        </svg>
      </q-btn>
    </li>
    <li>
      <q-btn
        color="secondary"
        class="fullscreen-button"
        @click="$q.fullscreen.toggle()"
        :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
      />
    </li>
  </ul>
</template>

<style lang="sass">
.q-toolbar
  .toolbar-actions
    vertical-align: top
    margin: 14px 0
    padding-left: 20px
    li
      float: left
      margin: 0 10px 0 0
      font-size: 11px
      color: #24292e
      list-style-type: none
      .q-btn
        font-size: 12px
        line-height: 20px
        text-transform: none
        .q-btn__wrapper
          padding: 3px 10px
      .q-btn.fullscreen-button
        .q-btn__wrapper
          padding: 3px 5px
</style>
