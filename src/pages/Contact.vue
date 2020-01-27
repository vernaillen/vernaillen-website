<template>
  <q-page padding>
    <p>This is the contact page</p>
  </q-page>
</template>

<script>
export default {
  name: 'PageContact',
  mounted: function () {
    this.$tours['myTour'].nextStep()
  }
}
</script>
