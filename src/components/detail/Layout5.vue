<template>
    <div :class="$style.wrapper">
        <v-btn rounded width="48px" height="48px" density="compact" size="small" :class="$style.btn_pose">
            <v-img :src="btn_pose" width="50px"/>
        </v-btn>
        <p ref="dom_sample1" @click="onSound" :class="$style.text_sample1" v-html="text_sample1"></p>
        <v-img :src="char_sample1" width="160px" :class="$style.char1"/>
        <v-img :src="bg_sample1" width="300px" :class="$style.bg_sample1"/>
    </div>
</template>

<script setup>
import {onBeforeMount, ref} from "vue";

const dom_sample1 = ref(null)
const text_sample1 = ref("")
const char_sample1 = new URL('@/assets/images/char_sample3.png', import.meta.url).href;
const btn_pose = new URL('@/assets/images/btn_pose3.png', import.meta.url).href;
const bg_sample1 = new URL('@/assets/images/bg_sample6.jpg', import.meta.url).href;

const onSound = () => {
    dom_sample1.value.dataset.selected = true
}
onBeforeMount(() => {
    text_sample1.value = `공룡은 둘과함께 공놀이도하고 등에 태워 하늘을 나는 것을 제안했습니다. 그들은 서로의 꿈을 이루게 되었습니다.`
})
</script>

<style lang="scss" scoped module>
.wrapper {
  position: relative;
  width: 100%;
  height: 420px;
  padding: 0 24px;
  margin: 120px 0;
  overflow: hidden;

  .btn_pose {
    position: absolute;
    left: 40%;
    transform: translateX(-50%);
    bottom: 12px;
    z-index: 2;
  }

  .text_sample1 {
    position: absolute;
    text-align: left;
    font-size: 1.12rem;
    line-height: 1.4;
    font-weight: 900;
    top: 12px;
    left: 0;
    padding: 0 32px;
    z-index: 2;
    box-sizing: border-box;
    text-shadow: 0 0 4px white;

    &[data-selected="true"] {
      text-shadow: 0 0 4px yellow;
    }
  }

  .char1 {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    z-index: 1;
  }

  .bg_sample1 {
    position: absolute;
    left: -56px;
    bottom: 0;
  }
}
</style>
