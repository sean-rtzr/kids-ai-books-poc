<template>
  <div :class="$style.wrapper">
    <div :class="$style.item">
      <v-img :src="obj_options_sample1" :class="$style.obj"></v-img>
      <v-btn
        data-selected="true"
        :class="$style.btn"
        value="char1"
        variant="flat"
        class="btn"
        @click="onSelectedItem(0)"
        >선택</v-btn
      >
    </div>
    <div :class="$style.item">
      <v-img :src="obj_options_sample2" :class="$style.obj"></v-img>
      <v-btn
        :class="$style.btn"
        value="char2"
        variant="flat"
        class="btn border-sm"
        @click="onSelectedItem(1)"
        >선택</v-btn
      >
    </div>
    <div :class="$style.item">
      <v-img :src="obj_options_sample3" :class="$style.obj"></v-img>
      <v-btn
        :class="$style.btn"
        value="char3"
        variant="flat"
        class="btn border-sm"
        @click="onSelectedItem(2)"
        >선택</v-btn
      >
    </div>
    <div :class="$style.item">
      <v-img :src="obj_options_sample4" :class="$style.obj"></v-img>
      <v-btn
        :class="$style.btn"
        value="char3"
        variant="flat"
        class="btn border-sm"
        @click="onSelectedItem(3)"
        >선택</v-btn
      >
    </div>
    <div :class="$style.item">
      <v-img :src="obj_options_sample5" :class="$style.obj"></v-img>
      <v-btn
        :class="$style.btn"
        value="char3"
        variant="flat"
        class="btn border-sm"
        @click="onSelectedItem(4)"
        >선택</v-btn
      >
    </div>
    <div :class="$style.item">
      <v-img :src="obj_options_sample6" :class="$style.obj"></v-img>
      <v-btn
        :class="$style.btn"
        value="char3"
        variant="flat"
        class="btn border-sm"
        @click="onSelectedItem(5)"
        >선택</v-btn
      >
    </div>
  </div>
</template>

<script setup>
const obj_options_sample1 = new URL(
  "@/assets/images/obj_options_sample1.png",
  import.meta.url
).href;
const obj_options_sample2 = new URL(
  "@/assets/images/obj_options_sample2.png",
  import.meta.url
).href;
const obj_options_sample3 = new URL(
  "@/assets/images/obj_options_sample3.png",
  import.meta.url
).href;
const obj_options_sample4 = new URL(
  "@/assets/images/obj_options_sample4.png",
  import.meta.url
).href;
const obj_options_sample5 = new URL(
  "@/assets/images/obj_options_sample5.png",
  import.meta.url
).href;
const obj_options_sample6 = new URL(
  "@/assets/images/obj_options_sample6.png",
  import.meta.url
).href;

const onSelectedItem = (no) => {
  const btns = document.querySelectorAll(".btn");
  btns.forEach((btn) => {
    btn.setAttribute("data-selected", false);
  });
  btns[no].setAttribute("data-selected", true);
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

    .obj {
      width: 84px;
      height: 84px;
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
