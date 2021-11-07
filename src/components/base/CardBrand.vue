<template>
<div 
    class="card-brand"
    @mouseenter="playVideo(videoEl)"
>
    <div class="card-brand-image-container">
        <div>
            <img :src="image" />
            <video
                ref="videoEl"
                width="320"
                height="240"
                loop
                playsinline>
                <source :src="video" type="video/mp4" />
            </video>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const videoEl = ref<HTMLVideoElement>();

const {image, video} = defineProps({
    image: String,
    video: String
})

const playVideo = (videoEl: HTMLVideoElement | undefined) => {
    videoEl?.play()
}

</script>

<style lang="scss" scoped>

.card-brand {
    background-image: linear-gradient(rgb(58, 60, 74), rgb(36, 38, 50));
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    overflow: hidden;
    position: relative;
    transform: scale(1);
    width: 325px;
    height: 184px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s !important;

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        
        video {
            opacity: 1;
            z-index: -1;
        }
    }

    &::after {
        border-radius: 10px;
        border: 1px solid rgba(249, 249, 249, 0.1);
        inset: 0px;
        content: "";
        pointer-events: none;
        position: absolute;
        transition: inherit;        
    }

    div {
        transition: opacity 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }

    &-image-container {
        background: linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42));
        border-radius: 4px;
        height: 0px;
        position: relative;
        width: 100%;        
    }

    img {
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
    }

    video {
        opacity: 0;
        z-index: 0;
        width: 100%;
        height: auto;
        position: absolute;
        top: 0px;        
    }
    
}

</style>