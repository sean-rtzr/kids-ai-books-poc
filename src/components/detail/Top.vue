<template>
    <div ref="wrapper" :class="$style.wrapper">
        <Comment :class="$style.comment"/>
    </div>
</template>

<script setup>
import {onBeforeUnmount, onMounted, ref} from "vue";
import Comment from "./Comment.vue";
import audioFile from "@/assets/audio/music_sample1.mp3";

const bg_sample1 = new URL('@/assets/images/bg_sample1.jpg', import.meta.url).href;
const bg_sample2 = new URL('@/assets/images/bg_sample2.jpg', import.meta.url).href;
const wrapper = ref(null);
const music = new Audio(audioFile);
music.volume = 0.3;
music.loop = true;

onBeforeUnmount(() => {
    music.pause();
});
onMounted(() => {
    wrapper.value.style.backgroundImage = `url(${bg_sample1})`;
    wrapper.value.style.backgroundSize = 'cover';

    setTimeout(async () => {
        wrapper.value.style.height = '292px'
        await music.play();
    }, 100)

});

document.addEventListener("pause", async () => {
    await music.play();
});

document.addEventListener("resume", async () => {
    await music.play();
});
</script>

<style lang="scss" scoped module>
.wrapper {
  position: relative;
  width: 100%;
  height: 562px;
  max-height: 562px;
  background-position: center;
  transition: height 2s;
  animation: scaleDown 2s forwards;

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background-color: rgba(0, 0, 0, 1);
    opacity: 0;
    z-index: 1;
    animation: dimmedBG 2s forwards;
  }

  .comment {
    opacity: 0;
    animation: showComment 1s forwards 2s;
  }
}

@keyframes scaleDown {
  0% {
    background-size: 114%;
  }
  100% {
    background-size: 100%;
  }
}

@keyframes dimmedBG {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
}

@keyframes showComment {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
