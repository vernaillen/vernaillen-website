<template>
  <q-page>
    <page-header title="Career timeline" currentUrl="/#/career" currentPageName="Career" />
    <div class="page-container q-px-md">
      <q-timeline :layout="layout" color="primary">
        <q-timeline-entry
          title="Kind en Gezin"
          subtitle="2019 - present"
          side="right"
          color="kindengezin"
          :avatar="require('../assets/img/kindengezin.jpg')"
        >
          <div>
            <label class="text-grey-6">project</label><br/>
            Governmental portal<br/>
            <label class="text-grey-6">role</label><br/>
            Senior Full Stack Java Developer<br/>
            <label class="text-grey-6">stack</label><br/>
            Java, Spring, Angular, Liferay, Docker, Kubernetes<br/>
            <br/>
          </div>
        </q-timeline-entry>

        <q-timeline-entry
          title="Aristo"
          subtitle="2019"
          side="left"
          color="aristo"
          :avatar="require('../assets/img/aristo.png')"
        >
          <div>
            <label class="text-grey-6">project</label><br/>
            E-commerce website<br/>
            <label class="text-grey-6">role</label><br/>
            Senior Full Stack Java Developer<br/>
            <label class="text-grey-6">stack</label><br/>
            Liferay Commerce<br/>
            <br/>
          </div>
        </q-timeline-entry>

        <q-timeline-entry
          title="IDEWE"
          subtitle="2018 - 2019"
          side="right"
          color="idewe"
          :avatar="require('../assets/img/idewe.png')"
        >
          <div>
            <label class="text-grey-6">project</label><br/>bla bla bla<br/>
            <label class="text-grey-6">role</label><br/>Senior Full Stack Java Developer<br/>
            <label class="text-grey-6">stack</label><br/>Java, Spring, Angular, Liferay, Docker, Kubernetes<br/>
            <br/>
          </div>
        </q-timeline-entry>

        <q-timeline-entry
          title="Kind en Gezin"
          subtitle="2014 - 2017"
          side="left"
          color="kindengezin"
          :avatar="require('../assets/img/kindengezin.jpg')"
        >
          <div>
            <label class="text-grey-6">project</label><br/>bla bla bla<br/>
            <label class="text-grey-6">role</label><br/>Senior Full Stack Java Developer<br/>
            <label class="text-grey-6">stack</label><br/>Java, Spring, Angular, Liferay, Docker, Kubernetes<br/>
            <br/>
          </div>
        </q-timeline-entry>

        <q-timeline-entry
          title="Colruyt"
          subtitle="2013"
          side="right"
          color="colruyt"
          :avatar="require('../assets/img/colruyt.png')"
        >
          <div>
            <label class="text-grey-6">project</label><br/>bla bla bla<br/>
            <label class="text-grey-6">role</label><br/>Senior Full Stack Java Developer<br/>
            <label class="text-grey-6">stack</label><br/>Java, Spring, Angular, Liferay, Docker, Kubernetes<br/>
            <br/>
          </div>
        </q-timeline-entry>

        <q-timeline-entry
          title="Event Title"
          subtitle="1987 - 1990"
          side="left"
        >
          <div>
            <label class="text-grey-6">project</label><br/>bla bla bla<br/>
            <label class="text-grey-6">role</label><br/>Senior Full Stack Java Developer<br/>
            <label class="text-grey-6">stack</label><br/>Java, Spring, Angular, Liferay, Docker, Kubernetes<br/>
            <br/>
          </div>
        </q-timeline-entry>

        <q-timeline-entry
          title="Event Title"
          subtitle="1986"
          side="right"
        >
          <div>
            <label class="text-grey-6">project</label><br/>bla bla bla<br/>
            <label class="text-grey-6">role</label><br/>Senior Full Stack Java Developer<br/>
            <label class="text-grey-6">stack</label><br/>Java, Spring, Angular, Liferay, Docker, Kubernetes<br/>
            <br/>
          </div>
        </q-timeline-entry>
      </q-timeline>
    </div>
  </q-page>
</template>

<script>
import PageHeader from '../components/PageHeader'

export default {
  name: 'Career',
  components: {
    PageHeader
  },
  computed: {
    layout () {
      if (this.$q.screen.lt.sm) {
        return 'comfortable'
      } else if (this.$q.screen.lt.md) {
        return 'loose'
      } else {
        return 'loose'
      }
    }
  }
}
</script>

<style lang="sass" >
  .text-kindengezin
    color: #4b95b4
  .text-idewe
    color: #5f96c8
  .text-aristo
    color: #8b9064
  .text-colruyt
    color: #a59c94
  .q-timeline--comfortable--right .q-timeline__content
    padding-left: 10px
  .q-timeline--comfortable--right .q-timeline__subtitle
    padding-right: 20px
    width: 25%

  .q-timeline__dot::before,
  .q-timeline__dot::after
    box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2),0 4px 5px rgba(0,0,0,0.14),0 1px 10px rgba(0,0,0,0.12)
</style>
