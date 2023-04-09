<template>
    <div :class="$style.wrapper">
        <v-btn rounded width="48px" height="48px" density="compact" size="small" :class="$style.btn_pose1">
            <v-img :src="btn_pose1" width="50px"/>
        </v-btn>
        <v-btn rounded width="48px" height="48px" density="compact" size="small" :class="$style.btn_pose2">
            <v-img :src="btn_pose2" width="50px"/>
        </v-btn>
        <v-img :src="char_sample1" width="160px" :class="$style.char1"/>
        <v-img :src="char_sample2" width="160px" :class="$style.char2"/>
        <v-img :src="char_sample2" width="160px" :class="$style.char2"/>
        <p ref="dom_sample1" @click="onSound" :class="$style.text_sample1">{{ text_sample1 }}</p>
        <v-img :src="bg_sample1" width="300px" :class="$style.bg_sample1"/>
    </div>
</template>

<script setup>
import {onBeforeMount, ref} from "vue";

const dom_sample1 = ref(null)
const text_sample1 = ref("")
const btn_pose1 = new URL('@/assets/images/btn_pose5.png', import.meta.url).href;
const btn_pose2 = new URL('@/assets/images/btn_pose6.png', import.meta.url).href;
const char_sample1 = new URL('@/assets/images/char_sample5.png', import.meta.url).href;
const char_sample2 = new URL('@/assets/images/char_sample6.png', import.meta.url).href;
const bg_sample1 = new URL('@/assets/images/bg_sample7.jpg', import.meta.url).href;

const onSound = () => {
    dom_sample1.value.dataset.selected = true
}

onBeforeMount(() => {
    text_sample1.value = "이들은 서로를 도와주고, 서로를 이해해 주는 소중한 친구가 되었습니다. 그리고 그들의 우정은 더욱 강해졌습니다."
})

</script>

<style lang="scss" scoped module>
.wrapper {
  position: relative;
  width: 100%;
  height: 360px;
  padding: 0 24px;
  margin: 48px 0 120px 0;

  .btn_pose1 {
    position: absolute;
    left: 45%;
    transform: translateX(-50%);
    bottom: 12px;
    z-index: 2;
  }

  .btn_pose2 {
    position: absolute;
    left: 75%;
    transform: translateX(-50%);
    bottom: 12px;
    z-index: 2;
  }

  .char1 {
    position: absolute;
    left: 30%;
    transform: translateX(-50%);
    bottom: 0;
    z-index: 1;
  }

  .char2 {
    position: absolute;
    left: 60%;
      transform: translateX(-50%);
    bottom: 0;
    z-index: 1;
  }

  .text_sample1 {
    position: absolute;
    text-align: right;
    width: 100%;
    padding: 0 32px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.12rem;
    line-height: 1.4;
    font-weight: 900;
    top: 0;
    text-shadow: 0 2px 4px white;

    &[data-selected="true"] {
      text-shadow: 0 0 4px yellow;
    }
  }

  .bg_sample1 {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
