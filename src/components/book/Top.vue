<template>
  <div ref="wrapper" :class="$style.wrapper">
    <Objects />
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import Objects from "./Objects.vue";
const bg_sample1 = new URL('@/assets/images/bg_sample1.jpg', import.meta.url).href;
const bg_sample2 = new URL('@/assets/images/bg_sample2.jpg', import.meta.url).href;
const wrapper = ref(null);

onMounted(() => {
  wrapper.value.style.backgroundImage = `url(${bg_sample1})`;
  wrapper.value.style.backgroundSize = 'cover';
})
</script>

<style lang="scss" scoped module>
.wrapper {
  position: relative;
  width: 100%;
  height: 562px;
  max-height: 562px;
  background-position: center;
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
