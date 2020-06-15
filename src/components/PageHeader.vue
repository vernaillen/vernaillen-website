<template>
  <div class="pageHeader sticky">
    <audioMotionAnalyzer :options="analyzerOptions"/>
    <div class="page-container q-px-md">
      <div class="row full-width">
        <div class="col-12 text-center">
          <h6>{{title}}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: String
  },
  data () {
    return {
      analyzerOptions: {
        bgAlpha: 0.5,
        showBgColor: false,
        overlay: true,
        showLeds: true,
        showPeaks: false,
        showScale: false,
        gradient: 'rainbow',
        mode: 1,
        height: 60
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  .pageHeader
    position: fixed
    z-index: 1000
    width: 100%
    height: 62px
    top: 61px
    padding: 0
    border-bottom: 2px solid #e1e4e8
    background-color: #f5f5f5
    -webkit-box-shadow: inset 0px -1px 5px 0px rgba(50, 50, 50, 0.12)
    -moz-box-shadow: inset 0px -1px 5px 0px rgba(50, 50, 50, 0.12)
    box-shadow: inset 0px -1px 5px 0px rgba(50, 50, 50, 0.12)

    #audioMotionAnalyzer
      position: absolute
      width: 95%
      overflow: hidden

    h6
      margin: 0
      padding: 15px 0
      z-index: 20000
</style>
