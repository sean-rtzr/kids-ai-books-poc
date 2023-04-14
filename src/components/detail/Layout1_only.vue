<template>
    <div :class="$style.wrapper">
        <v-img :src="bookInit.value.char1_src" width="160px" :class="$style.char1"/>
        <p :class="$style.name1">{{ bookInit.value.char1_name }}</p>
        <p ref="dom_sample1" @click="onSound" :class="$style.text_sample1" v-html="text_sample1"></p>
    </div>
</template>

<script setup>
import {computed, onBeforeMount, reactive, ref} from "vue";
import {useStore} from "vuex";

const store = useStore();
const bookInit = reactive(computed(() => store.getters.getBookInit))
const dom_sample1 = ref(null)
const text_sample1 = ref("")
const char_sample1 = new URL('@/assets/images/char_sample1.gif', import.meta.url).href;

const onSound = () => {
    dom_sample1.value.dataset.selected = true
}

onBeforeMount(() => {
    text_sample1.value = `우주여행을 좋아하는 아이, <span class="text-green-darken-2">${bookInit.value.char1_name}</span>이 있었습니다.`
})

</script>

<style lang="scss" scoped module>
.wrapper {
  position: relative;
  width: 100%;
  height: 340px;
  background-color: #fff;
  padding: 0 24px;
  margin: 48px 0 120px 0;

  .char1 {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    z-index: 1;
  }

  .name1 {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 56px;
    text-align: center;
    z-index: 1;
    color: #01C17B;
    font-size: 1.24rem;
    font-weight: 900;
  }

  .name2 {
    position: absolute;
    right: 20%;
    text-align: center;
    color: #FFD14C;
    bottom: 56px;
    z-index: 1;
    font-size: 1.24rem;
    font-weight: 900;
  }

  .text_sample1 {
    position: absolute;
    text-align: center;
    width: 100%;
    padding: 0 32px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.12rem;
    line-height: 1.4;
    font-weight: 900;
    bottom: 0;
    text-shadow: 0 2px 4px white;

    &[data-selected="true"] {
      text-shadow: 0 0 4px yellow;
    }
  }
}
</style>
