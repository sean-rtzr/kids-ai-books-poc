<template>
  <div :class="$style.books">
    <TopHead />
    <GenerativeBtn :page="page" />
    <Book @updatePage="updatePage" />

  </div>
</template>

<script setup>

import TopHead from "./TopHead.vue";
import GenerativeBtn from "./GenerativeBtn.vue";
import Book from "./Book.vue";
import {ref} from "vue";
import BestList from "./BestList.vue";

let page = ref(0)
const updatePage = (no) => {
  page.value = no
}
</script>

<style module lang="scss">
.books {
  position: relative;
  background-color: #01C17B;
}
</style>
