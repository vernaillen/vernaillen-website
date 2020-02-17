<template>
  <q-page>
      <q-carousel v-model="slide">
        <div class="bg-overlay"></div>
        <q-carousel-slide :name="1" :img-src="require('../assets/img/53beb950b2b85940c1e8bef237d4e332-xlarge.jpg')" class="slide">
          <div class="bg-overlay"></div>
          <div class="slide-header text-center">
            <h1 class="text-grey-4">Wouter Vernaillen</h1>
            <p class="text-grey-5">Freelance Full Stack Java &amp; JavaScript Developer</p>
          </div>
        </q-carousel-slide>
      </q-carousel>
  </q-page>
</template>

<script>
export default {
  name: 'PageHome',
  data () {
    return {
      slide: 1
    }
  }
}
</script>

<style scoped>
  .q-carousel {
    height: calc(100vh - 140px);
  }
  .q-carousel__slide {
    padding: 0;
  }
  @media (min-width: 751px) {
    .slide {
      background-position: 50% 20% !important;
    }
  }
  @media (min-width: 600px ) and (max-width: 750px) {
    .slide {
      background-position: 35% 20% !important;
    }
  }
  @media (max-width: 599px) {
    .slide {
      background-position: 20% 20% !important;
    }
  }

  .slide .bg-overlay {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #000;
    opacity: .6;
    z-index: 100;
  }
  .slide .slide-header {
    position: relative;
    top: 30%;
    z-index: 101;
  }
  .slide .slide-header h1 {
    font-size: 2em;
    line-height: 1.2;
    text-shadow: 1px 1px 1px #333;
    margin: 0 0 30px 0;
  }
  .slide .slide-header p {
    font-family: 'Roboto Mono',monospace;
    font-weight: 400;
    line-height: 1.6;
  }
  @media (min-width: 1200px) {
    .slide .slide-header h1 {
      font-size: 3em;
    }
  }
</style>
