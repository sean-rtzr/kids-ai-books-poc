<template>
    <v-card width="280px" height="300px" :class="$style.wrapper" class="bg-white">
        <v-img :src="char_sample1" width="160px"
               :class="currentStory !== 1 ? $style.char1_only : $style.char1"/>
        <v-img v-if="currentStory === 1 || isAdded" :src="char_sample2" width="140px" :class="$style.char2"/>
        <p :class="currentStory !== 1 || currentStory === null ? $style.name1_only : $style.name1">
            {{ bookInit.char1_name }}</p>
        <p v-if="currentStory === 1 || isAdded " :class="$style.name2">{{ bookInit.char2_name }}</p>
        <p :class="$style.object">이야기에 등장하는 물건</p>
    </v-card>
</template>

<script setup>
import {useStore} from "vuex";
import {computed, reactive} from "vue";

const store = useStore();
const bookInit = reactive(computed(() => store.getters.getBookInit));
const currentStory = reactive(computed(() => store.getters.getCurrentStory));
const isAdded = reactive(computed(() => store.getters.getAddFriend.isAdded));
const char_sample1 = new URL('@/assets/images/char_sample1.gif', import.meta.url).href;
const char_sample2 = new URL('@/assets/images/char_sample2.png', import.meta.url).href;

</script>

<style lang="scss" scoped module>
.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 24px;
  border: 6px solid #FFD14C;
  box-shadow: 0 4px 12px rgba(0, 0, 0, .15);
  overflow: visible;

  .char1 {
    position: absolute;
    left: -10px;
    top: -48px;
    z-index: 1;
  }

  .char1_only {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -48px;
    z-index: 1;
  }

  .char2 {
    position: absolute;
    right: -10px;
    top: -32px;
    z-index: 1;
  }

  .name1 {
    position: absolute;
    left: 56px;
    bottom: 64px;
    font-size: 1.32rem;
    font-weight: 900;
    text-align: center;
    color: #01C17B;
  }

  .name1_only {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 64px;
    font-size: 1.32rem;
    font-weight: 900;
    text-align: center;
    color: #01C17B;
  }

  .name2 {
    position: absolute;
    right: 56px;
    bottom: 64px;
    font-size: 1.32rem;
    font-weight: 900;
    text-align: center;
    color: #FFD14C;
  }

    .object {
        position: absolute;
        width: 100%;
        text-align: center;
        font-size: 0.875rem;
        font-weight: 700;
        color: #666;
        left: 50%;
        transform: translateX(-50%);
        bottom: 24px;
    }
}
</style>
