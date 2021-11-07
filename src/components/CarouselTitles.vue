<template>
  <Carousel 
  	class="carousel"
	:items-to-show="1.3"
	:wrap-around="true"
	>
    <Slide v-for="(title, index) in cauroselImages" :key="index">
      <img :src="title" />
    </Slide>
    <template #addons>
      <Pagination />
    </template>	
  </Carousel>
</template>

<script setup lang="ts">
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

const cauroselImages = [
	'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4E03D084F106940B62B0E9B4367A5875454B72F2ACDBB4351ABFD7508A8E109B/scale?width=1440&aspectRatio=3.91&format=jpeg',
	'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/977776D73134B1646384F995B35AB89F371C9080CF3739788AE37E4B721C25DC/compose?width=1440&aspectRatio=3.91&format=jpeg&label=391_scrim',
	'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/01EE65FFFD236AC9A6A6E6D8C739443CE01427CF1E03F937400411DFE724426D/scale?width=1440&aspectRatio=3.91&format=jpeg',
	'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/678897ADCF4E6AA3AB2EE3771C6A9DD667AF1A72D35D0ED2B2576474C4120B75/compose?width=1440&aspectRatio=3.91&format=jpeg&label=391_scrim',
	'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/86B2EE409E999A9A767E96A6209E48749A9F9F2155F100D3E67BB7EEA22FBAF2/compose?width=1440&aspectRatio=3.91&format=jpeg&label=391_scrim'
]

</script>

<style lang="scss">

.carousel {
	.carousel__slide img {
		border-radius: 10px;
	}
	.carousel__pagination {
		&-button {
			background-color: #919191;
    		width: 10px;
    		height: 11px;
    		border-radius: 100%;			
			
			&--active {
				background-color: white;
			}
		}
	}
	
}

</style>
