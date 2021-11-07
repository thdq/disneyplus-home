
<template>
  <section class="carousel-section">
    <CarouselTitles />
  </section>
  
  <section class="brands-section">
    <Brands />
  </section>

  <section class="collection-section">
    <Parcel 
      :config="parcelConfig"
      :mountParcel="mountParcel"
    />
  </section>
</template>

<script setup lang="ts">
import CarouselTitles from './components/CarouselTitles.vue'
import Brands from './components/Brands.vue'
import Parcel from './components/base/Parcel'
import { mountParcel } from './main'

const parcelConfig = System.import('@disneyplus/disneyplus-collection')

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
