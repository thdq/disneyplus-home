<template>
	<Swiper class="carousel"
		:autoplay="carouselOptions.autoplay"
	>
		<SwiperSlide v-for="(title, index) in cauroselImages" :key="index">
			<img :src="title" />
		</SwiperSlide>
		<template class="swiper-pagination" #pagination></template>
	</Swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { SwiperOptions } from 'swiper/types';
 import 'swiper/css';

const carouselOptions: SwiperOptions = {
	slidesPerView: 3,
    spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
}

const cauroselImages = [
	'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4E03D084F106940B62B0E9B4367A5875454B72F2ACDBB4351ABFD7508A8E109B/scale?width=1440&aspectRatio=3.91&format=jpeg',
	'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/977776D73134B1646384F995B35AB89F371C9080CF3739788AE37E4B721C25DC/compose?width=1440&aspectRatio=3.91&format=jpeg&label=391_scrim',
	'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/01EE65FFFD236AC9A6A6E6D8C739443CE01427CF1E03F937400411DFE724426D/scale?width=1440&aspectRatio=3.91&format=jpeg',
	'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/678897ADCF4E6AA3AB2EE3771C6A9DD667AF1A72D35D0ED2B2576474C4120B75/compose?width=1440&aspectRatio=3.91&format=jpeg&label=391_scrim',
	'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/86B2EE409E999A9A767E96A6209E48749A9F9F2155F100D3E67BB7EEA22FBAF2/compose?width=1440&aspectRatio=3.91&format=jpeg&label=391_scrim'
]

</script>

<style lang="scss" scoped>

.carousel {
	.swiper-slide {
		display: flex;
    	justify-content: center;

		img { 
			min-height: 25vw;
    		border-radius: 10px;
		}

	}
	
}

</style>
