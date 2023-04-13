<template>
    <div class="book_cover" :class="page === 0 ? $style.firstPage : $style.secondPage">
        <TopHead @onLoadProfile="onLoadProfile" @onLoadNotification="onLoadNotification"/>
        <GenerativeBtn :page="page"/>
        <Book @updatePage="updatePage"/>
    </div>
</template>

<script setup>

import TopHead from "./TopHead.vue";
import GenerativeBtn from "./GenerativeBtn.vue";
import Book from "./Book.vue";
import {computed, onMounted, reactive, ref, watch} from "vue";
import {useStore} from "vuex";

const store = useStore();
const currentStory = reactive(computed(() => store.getters.getCurrentStory));
const bg_sample1 = new URL("@/assets/images/bg_sample1.jpg", import.meta.url).href;
const bg_sample2 = new URL("@/assets/images/bg_sample2.jpg", import.meta.url).href;
const emits = defineEmits(['openLoad', 'onLoadProfile', 'onLoadNotification']);
let page = ref(0)
const updatePage = (no) => {
    const bookCover = document.querySelector('.book_cover');
    bookCover.style.backgroundImage = null;
    page.value = no
    if(page.value === 0) bookCover.style.backgroundColor = '#01C17B';
    if(page.value === 1) bookCover.style.backgroundColor = '#019EC1';
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
watch(currentStory, (val) => {
    const bookCover = document.querySelector('.book_cover');

    if (val === null) {
        bookCover.style.backgroundImage = null;
        bookCover.style.backgroundColor = '#01C17B';
    }
    if (val === 0) {
        bookCover.style.backgroundImage = `url(${bg_sample1})`;
    }
    if (val === 1) {
        bookCover.style.backgroundImage = `url(${bg_sample2})`;
    }
});

onMounted(() => {
    const bookCover = document.querySelector('.book_cover');
    bookCover.style.backgroundColor = '#01C17B';
})

</script>

<style module lang="scss">
.firstPage {
  position: relative;
  background-size: 100%;
  transition: all 0.5s;
}

.secondPage {
  position: relative;
  background-color: #019EC1;
  transition: background-color 0.5s;
}
</style>
