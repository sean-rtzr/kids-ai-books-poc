<template>
    <div :class="$style.wrapper">
        <v-btn rounded width="48px" height="48px" density="compact" size="small" :class="$style.btn_pose">
            <v-img :src="btn_pose" width="50px"/>
        </v-btn>
        <p ref="dom_sample1" @click="onSound" :class="$style.text_sample1" v-html="text_sample1"></p>
        <v-img :src="char_sample1" width="160px" :class="$style.char1"/>
        <v-img :src="bg_sample1" width="330px" :class="$style.bg_sample1"/>
    </div>
</template>

<script setup>
import {computed, onBeforeMount, reactive, ref} from "vue";
import {useStore} from "vuex";

const store = useStore();
const bookInit = reactive(computed(() => store.getters.getBookInit));
const dom_sample1 = ref(null)
const text_sample1 = ref("")
const char_sample1 = new URL('@/assets/images/char_sample4.png', import.meta.url).href;
const btn_pose = new URL('@/assets/images/btn_pose4.png', import.meta.url).href;
const bg_sample1 = new URL('@/assets/images/bg_sample5.jpg', import.meta.url).href;

const onSound = () => {
    dom_sample1.value.dataset.selected = true
}
onBeforeMount(() => {
    text_sample1.value = `그러던 중 우주비행사는 의문의 행성을 발견했습니다. 그 행성은 다른 행성들과는 달리 아름다운 꽃들로 가득 차 있었습니다.`
})
</script>

<style lang="scss" scoped module>
.wrapper {
  position: relative;
  width: 100%;
  height: 500px;
  padding: 0 24px;
  margin: 120px 0;
  overflow: hidden;

  .btn_pose {
    position: absolute;
    left: 65%;
    transform: translateX(-50%);
    bottom: 32px;
    z-index: 2;
  }

  .text_sample1 {
    position: absolute;
    text-align: left;
    font-size: 1.12rem;
    line-height: 1.4;
    font-weight: 900;
    width: 70%;
    top: 12px;
    left: 65%;
    transform: translateX(-50%);
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
    left: 70%;
    bottom: 0;
    transform: translateX(-50%);
    bottom: 24px;
    z-index: 1;
  }

  .bg_sample1 {
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
    bottom: 0;
  }
}

</style>
