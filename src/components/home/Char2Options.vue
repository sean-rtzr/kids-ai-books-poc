<template>
  <div :class="$style.wrapper">
    <div v-for="character in characters" :key="character.id" :class="$style.item">
      <v-img :src="character.src" :class="$style.char"></v-img>
      <v-btn
        :data-selected="character.id === 1"
        :class="$style.btn"
        value="char1"
        variant="flat"
        class="btn"
        @click="onSelectedItem(character.id)"
        >선택</v-btn
      >
    </div>
  </div>
</template>

<script setup>
import {useStore} from "vuex";

const store = useStore();
const characters = [
    {
        id: 1,
        name: "char4",
        src: new URL(
            "@/assets/images/char_options_sample4.png",
            import.meta.url
        ).href,
      animation: new URL(
          "@/assets/images/char_sample4.gif",
          import.meta.url
      ).href
    },
    {
        id: 2,
        name: "char5",
        src: new URL(
            "@/assets/images/char_options_sample5.png",
            import.meta.url
        ).href,
      animation: new URL(
          "@/assets/images/char_sample5.gif",
          import.meta.url
      ).href
    },
    {
        id: 3,
        name: "char6",
        src: new URL(
            "@/assets/images/char_options_sample6.png",
            import.meta.url
        ).href,
      animation: new URL(
          "@/assets/images/char_sample6.gif",
          import.meta.url
      ).href
    },
]

const onSelectedItem = (no) => {
  const btns = document.querySelectorAll(".btn");
  btns.forEach((btn) => {
    btn.setAttribute("data-selected", false);
  });
  btns[no-1].setAttribute("data-selected", true);
    store.commit('setChar2Src', characters[no-1].animation);
};
</script>

<style lang="scss" scoped module>
.wrapper {
  display: grid;
  text-align: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 10px;
  width: 100%;
  height: 200px;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: white;
  z-index: 1;

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .char {
      width: 110px;
      height: 150px;
    }

    .btn {
      padding: 4px 12px;
      border-radius: 20px;
      font-weight: 900;

      &[data-selected="true"] {
        background-color: #00c853;
        color: white;
      }
    }
  }
}
</style>
