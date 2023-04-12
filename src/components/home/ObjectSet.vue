<template>
  <v-overlay
    v-model="isOpen"
    width="100%"
    :height="$vuetify.display.height + 'px'"
    transition="scroll-y-reverse-transition"
  >
    <div :class="$style.wrapper" class="d-flex flex-column align-center pa-4">
      <v-btn
        rounded
        width="48px"
        height="48px"
        density="compact"
        size="small"
        :class="$style.btn_close"
        @click="closeOptions"
      >
        <v-img :src="btn_close" width="50px" />
      </v-btn>
      <p class="text-center py-4" :class="$style.title">
        이야기의 <span style="color: #00d22e">주인공을 선택</span>하고 <br />
        좋아하는 물건들로 마음껏 채워주세요
      </p>
      <!-- Toggles -->
      <v-btn-toggle
        v-model="text"
        color="green-darken-3"
        border="sm"
        class="pa-1 bg-yellow-lighten-5 rounded-xl"
        :class="$style.toggles"
        group
      >
        <v-btn value="char1" :class="$style.btn" class="bg-transparent"
          >주인공</v-btn
        >

        <v-btn value="char2" :class="$style.btn" class="bg-transparent"
          >친구</v-btn
        >

        <v-btn value="objects" :class="$style.btn" class="bg-transparent"
          >물건</v-btn
        >
      </v-btn-toggle>
      <Char1Options v-if="text === 'char1'" />
      <Char2Options v-if="text === 'char2'" />
      <Char3Options v-if="text === 'objects'" />
    </div>
  </v-overlay>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { useStore } from "vuex";
import Char1Options from "./Char1Options.vue";
import Char2Options from "./Char2Options.vue";
import Char3Options from "./Char3Options.vue";

const store = useStore();
const text = ref("char1");
const isOpen = reactive(computed(() => store.getters.getOptions.isOpen));
const btn_close = new URL("@/assets/images/btn_close.png", import.meta.url)
  .href;

const closeOptions = () => store.commit("setOptions", { isOpen: false });
</script>

<style lang="scss" scoped module>
.wrapper {
  width: 100vw;
  height: 350px;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: white;
  z-index: 1;

  .title {
    font-size: 1rem;
    font-weight: 900;
  }

  .btn_close {
    position: absolute;
    top: -80px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }

  .toggles {
    .btn {
      font-weight: 900;
    }
  }
}
</style>
