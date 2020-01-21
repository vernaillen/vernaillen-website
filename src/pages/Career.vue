<template>
  <q-page padding class="flex flex-center" >
    <q-timeline layout="loose" color="primary">
      <q-timeline-entry
        title="Kind en Gezin"
        subtitle="April 2019 - present"
        side="right"
        color="kindengezin"
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy2dgl6zPZfpCL5fBoVlPgFvLRMY6p44-HSKEgxk4a7ufVIghy"
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
        avatar="https://test.aristolivingoutdoors.com/documents/89923/90356/aristo_icon_pale.svg"
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
        avatar="https://www.tarieven-externe-diensten.be/documents/448485/448840/over_Idewe.png"
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
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy2dgl6zPZfpCL5fBoVlPgFvLRMY6p44-HSKEgxk4a7ufVIghy"
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
        color="orange"
        avatar="https://crm.theshift.be/media/cache/attachment/resize/111/member_logo/57e0e24e0638f.jpeg"
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

  .q-timeline__content label {
    width: 60px;
    display: inline-block;
  }
  .q-timeline__entry--left .q-timeline__content label {
    text-align: left;
    padding-left: 10px;
    float: right;
  }
  .q-timeline__entry--right .q-timeline__content label {
    text-align: right;
    padding-right: 10px;
  }
</style>
