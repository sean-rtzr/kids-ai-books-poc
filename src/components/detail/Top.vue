<template>
    <div ref="wrapper" :class="$style.wrapper">
        <Comment :class="$style.comment"/>
    </div>
</template>

<script setup>
import {computed, onBeforeUnmount, onMounted, reactive, ref} from "vue";
import Comment from "./Comment.vue";
// import audioFile from "@/assets/audio/music_sample1.mp3";
import {useStore} from "vuex";

const store = useStore();
const audio = [
    {
        id: 0,
        src: new URL('@/assets/audio/music_sample1.mp3', import.meta.url).href,
    },
    {
        id: 1,
        src: new URL('@/assets/audio/music_sample2.mp3', import.meta.url).href,
    },
    {
        id: 2,
        src: new URL('@/assets/audio/music_sample3.mp3', import.meta.url).href,
    },
    {
        id: 3,
        src: new URL('@/assets/audio/music_sample4.mp3', import.meta.url).href,
    },
    {
        id: 4,
        src: new URL('@/assets/audio/music_sample5.mp3', import.meta.url).href,
    },
    {
        id: 5,
        src: new URL('@/assets/audio/music_sample6.mp3', import.meta.url).href,
    },
    {
        id: 6,
        src: new URL('@/assets/audio/music_sample7.mp3', import.meta.url).href,
    },
]
const bookCover = reactive(computed(() => store.getters.getBookCover));
const wrapper = ref(null);
const rand = Math.floor(Math.random() * audio.length);
const music = new Audio(audio[rand].src);
music.volume = 0.3;
music.loop = true;

onBeforeUnmount(() => {
    music.pause();
});
onMounted(() => {
    wrapper.value.style.backgroundImage = `url(${bookCover.value})`;
    wrapper.value.style.backgroundSize = 'cover';

    setTimeout(async () => {
        wrapper.value.style.height = '292px'
        await music.play();
    }, 100)

});

document.addEventListener("pause", async () => {
    await music.pause();
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
