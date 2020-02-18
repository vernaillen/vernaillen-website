<template>
  <q-page padding class="flex flex-center" >
    <q-timeline layout="loose" color="primary">
      <q-timeline-entry
        title="Kind en Gezin"
        subtitle="April 2019 - present"
        side="right"
        color="kindengezin"
        :avatar="require('../assets/img/kindengezin.jpg')"
      >
        <div>
          <label class="text-grey-6">project</label>Governmental portal<br/>
          <label class="text-grey-6">role</label>Senior Full Stack Java Developer<br/>
          <label class="text-grey-6">stack</label>Java, Spring, Angular, Liferay, Docker, Kubernetes<br/>
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
          <label class="text-grey-6">project</label>E-commerce website<br/>
          <label class="text-grey-6">role</label>Senior Full Stack Java Developer<br/>
          <label class="text-grey-6">stack</label>Liferay Commerce<br/>
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
          <label class="text-grey-6">project</label>bla bla bla<br/>
          <label class="text-grey-6">role</label>Senior Full Stack Java Developer<br/>
          <label class="text-grey-6">stack</label>Java, Spring, Angular, Liferay, Docker, Kubernetes<br/>
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
          <label class="text-grey-6">project</label>bla bla bla<br/>
          <label class="text-grey-6">role</label>Senior Full Stack Java Developer<br/>
          <label class="text-grey-6">stack</label>Java, Spring, Angular, Liferay, Docker, Kubernetes<br/>
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
          <label class="text-grey-6">project</label>bla bla bla<br/>
          <label class="text-grey-6">role</label>Senior Full Stack Java Developer<br/>
          <label class="text-grey-6">stack</label>Java, Spring, Angular, Liferay, Docker, Kubernetes<br/>
          <br/>
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        side="left"
      >
        <div>
          <label class="text-grey-6">project</label>bla bla bla<br/>
          <label class="text-grey-6">role</label>Senior Full Stack Java Developer<br/>
          <label class="text-grey-6">stack</label>Java, Spring, Angular, Liferay, Docker, Kubernetes<br/>
          <br/>
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        side="right"
      >
        <div>
          <label class="text-grey-6">project</label>bla bla bla<br/>
          <label class="text-grey-6">role</label>Senior Full Stack Java Developer<br/>
          <label class="text-grey-6">stack</label>Java, Spring, Angular, Liferay, Docker, Kubernetes<br/>
          <br/>
        </div>
      </q-timeline-entry>
    </q-timeline>
  </q-page>
</template>

<script>
export default {
  name: 'Career'
}
</script>

<style type="scss" >
  .text-kindengezin {
    color: #4b95b4;
  }
  .text-idewe {
    color: #5f96c8;
  }
  .text-aristo {
    color: #8b9064;
  }
  .text-colruyt {
    color: #a59c94
  }
  .q-timeline__dot::before,
  .q-timeline__dot::after {
    box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2),0 4px 5px rgba(0,0,0,0.14),0 1px 10px rgba(0,0,0,0.12);
  }

  .q-timeline__content label {
    width: 60px;
    display: inline-block;
  }
  .q-timeline__entry--left .q-timeline__content label {
    text-align: right;
    padding-left: 10px;
    float: right;
  }
  .q-timeline__entry--right .q-timeline__content label {
    text-align: left;
    padding-right: 10px;
  }
  @media only screen and (max-width: 767px) {
    .q-timeline__content label {
      display: block;
    }
    .q-timeline__entry--left .q-timeline__content label {
      float: none;
      width: 100%;
    }
  }
</style>
