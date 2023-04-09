<template>
  <div :class="page === 0 ? $style.firstPage : $style.secondPage">
    <TopHead @onLoadProfile="onLoadProfile" @onLoadNotification="onLoadNotification" />
    <GenerativeBtn :page="page" @openLoad="openLoad" />
    <Book @updatePage="updatePage"/>
  </div>
</template>

<script setup>

import TopHead from "./TopHead.vue";
import GenerativeBtn from "./GenerativeBtn.vue";
import Book from "./Book.vue";
import {ref} from "vue";

const emits = defineEmits(['openLoad', 'onLoadProfile', 'onLoadNotification']);
let page = ref(0)
const updatePage = (no) => {
  page.value = no
}
const openLoad = () => {
  emits('openLoad', true)
}
const onLoadProfile = () => {
  emits('onLoadProfile', true)
}

const onLoadNotification = () => {
  emits('onLoadNotification', true)
}

const onEndProfile = () => {
  emits('onEndProfile', true)
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
