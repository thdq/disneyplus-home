
<template>
  <section class="carousel-section">
    <CarouselTitles />
  </section>
  
  <section class="brands-section">
    <Brands />
  </section>
</template>

<script setup lang="ts">
import CarouselTitles from './components/CarouselTitles.vue'
import Brands from './components/Brands.vue'
</script>

<style scoped lang="scss">

.carousel-section {
  margin: 40px 0 40px;
}

.brands-section {
    margin: 40px 0 40px;
    display: flex;
    flex-flow: row wrap;
    gap: 40px;
    place-content: center;
}

</style>
