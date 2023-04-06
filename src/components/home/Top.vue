<template>
  <div :class="page === 0 ? $style.firstPage : $style.secondPage">
    <TopHead />
    <GenerativeBtn :page="page" />
    <Book @updatePage="updatePage"/>
  </div>
</template>

<script setup>

import TopHead from "./TopHead.vue";
import GenerativeBtn from "./GenerativeBtn.vue";
import Book from "./Book.vue";
import {ref} from "vue";

let page = ref(0)
const updatePage = (no) => {
  page.value = no
}
</script>

<style module lang="scss">
.firstPage {
  position: relative;
  background-color: #01C17B;
  transition: background-color 0.5s;
}
.secondPage {
  position: relative;
  background-color: #019EC1;
  transition: background-color 0.5s;
}
</style>
