<template>
    <div ref="wrapper" :class="$style.wrapper">
        <Objects/>
    </div>
</template>

<script setup>
import {computed, onBeforeMount, onMounted, reactive, ref} from "vue";
import Objects from "./Objects.vue";
import {useStore} from "vuex";

const store = useStore();
const bookCover = reactive(computed(() => store.getters.getBookCover));
const bookCovers = [
    {
        src: new URL('@/assets/images/bg_sample8.jpg', import.meta.url).href,
    },
    {
        src: new URL('@/assets/images/bg_sample9.jpg', import.meta.url).href,
    },
    {
        src: new URL('@/assets/images/bg_sample10.jpg', import.meta.url).href,
    },
    {
        src: new URL('@/assets/images/bg_sample11.jpg', import.meta.url).href,
    },
    {
        src: new URL('@/assets/images/bg_sample12.jpg', import.meta.url).href,
    },
    {
        src: new URL('@/assets/images/bg_sample13.jpg', import.meta.url).href,
    },
    {
        src: new URL('@/assets/images/bg_sample14.jpg', import.meta.url).href,
    },
    {
        src: new URL('@/assets/images/bg_sample15.jpg', import.meta.url).href,
    },
    {
        src: new URL('@/assets/images/bg_sample16.jpg', import.meta.url).href,
    },
]
const wrapper = ref(null);

onBeforeMount(() => {
    const rand = Math.floor(Math.random() * bookCovers.length);
    if (bookCover.value === '') {
        store.commit('setBookCover', bookCovers[rand].src);
    }
})

onMounted(() => {
    wrapper.value.style.backgroundImage = `url(${bookCover.value})`;
    wrapper.value.style.backgroundSize = 'cover';
})
</script>

<style lang="scss" scoped module>
.wrapper {
  position: relative;
  width: 100%;
  height: 562px;
  max-height: 562px;
  background-position: top center;
  animation: scaleUp 2s forwards;
}

@keyframes scaleUp {
  0% {
    background-size: 100%;
  }
  100% {
    background-size: 114%;
  }
}
</style>
