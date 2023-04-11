<template>
    <v-overlay v-model="isOpen.value" width="100%" :height="$vuetify.display.height + 'px'" @click="closeOptions"
               transition="scroll-y-reverse-transition">
        <div :class="$style.wrapper" class="d-flex justify-center pa-4">
            <p class="text-center py-4" :class="$style.title">이야기의 <span style="color: #00D22E">주인공을 선택</span>하고 <br/>
                좋아하는 물건들로 마음껏 채워주세요</p>
        </div>
    </v-overlay>
</template>

<script setup>
import {computed, reactive} from "vue";
import {useStore} from "vuex";

const store = useStore();
const isOpen = reactive(computed(() => store.getters.getOptions.isOpen));

const closeOptions = () => store.commit('setOptions', {isOpen: false});

</script>

<style lang="scss" scoped module>
.wrapper {
  width: 100vw;
  height: 400px;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: white;
  z-index: 1;

  .title {
    font-size: 1rem;
    font-weight: 900;
  }
}

</style>
