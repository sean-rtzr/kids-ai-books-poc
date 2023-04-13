<template>
    <div :class="$style.wrapper">
        <v-btn class="bg-transparent" variant="flat" width="100px" height="auto" density="compact"
               :class="$style.obj_sample1">
            <v-img :src="obj_sample1" width="100px"/>
        </v-btn>
        <v-img :src="char_sample1" width="160px" :class="$style.char1"/>
        <v-btn rounded width="48px" height="48px" density="compact" size="small" :class="$style.btn_pose">
            <v-img :src="btn_pose" width="50px"/>
        </v-btn>
        <p ref="dom_sample1" @click="onSound" :class="$style.text_sample1" v-html="text_sample1"></p>
        <v-img :src="bg_sample1" width="300px" :class="$style.bg_sample1"/>
    </div>
</template>

<script setup>
import {computed, onBeforeMount, reactive, ref} from "vue";
import {useStore} from "vuex";

const store = useStore();
const bookInit = reactive(computed(() => store.getters.getBookInit));
const dom_sample1 = ref(null)
const text_sample1 = ref("")
const char_sample1 = new URL('@/assets/images/char_sample1_1.png', import.meta.url).href;
const bg_sample1 = new URL('@/assets/images/bg_sample3.jpg', import.meta.url).href;
const btn_pose = new URL('@/assets/images/btn_pose.png', import.meta.url).href;
const obj_sample1 = new URL('@/assets/images/obj_sample1.png', import.meta.url).href;

const onSound = () => {
    dom_sample1.value.dataset.selected = true
}

onBeforeMount(() => {
    text_sample1.value = `<span class="text-green-darken-2">${bookInit.value.char1_name}</span>는 우주를 여행하면서 수많은 행성과 별들을 보았습니다.`
})
</script>

<style lang="scss" scoped module>
.wrapper {
  position: relative;
  width: 100%;
  height: 340px;
  background-color: #fff;
  padding: 0 24px;
  margin: 120px 0;
  overflow: hidden;

  .btn_pose {
    position: absolute;
    right: 164px;
    bottom: 32px;
    z-index: 2;
  }

  .obj_sample1 {
    position: absolute;
    left: 10%;
    bottom: 30%;
    z-index: 2;
  }

  .char1 {
    position: absolute;
    right: 28px;
    top: 64px;
    z-index: 1;
  }

  .text_sample1 {
    width: 56%;
    position: absolute;
    text-align: left;
    font-size: 1.12rem;
    line-height: 1.4;
    padding: 0 20px;
    font-weight: 900;
    top: 12px;
    z-index: 2;
    text-shadow: 0 0 4px white;

    &[data-selected="true"] {
      text-shadow: 0 0 4px yellow;
    }
  }

  .bg_sample1 {
    position: absolute;
    right: -180px;
    top: 0;
  }
}
</style>
