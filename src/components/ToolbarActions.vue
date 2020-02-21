<template>
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
</template>

<style lang="sass">
.q-toolbar
  .toolbar-actions
    vertical-align: top
    margin: 14px 0
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
</style>
