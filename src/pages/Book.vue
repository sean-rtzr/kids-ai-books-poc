<template>
    <div>
        <Comment />
        <BookInit text="이전"/>
        <Top/>
        <Title :title="bookInit.value.title"/>
        <Profile/>
        <Btns/>
        <v-divider class="mx-6 my-2"/>
        <WriteComment/>
    </div>
</template>

<script setup>

import Top from "../components/book/Top.vue";
import Title from "../components/book/Title.vue";
import Profile from "../components/book/Profile.vue";
import Btns from "../components/book/Btns.vue";
import WriteComment from "../components/book/WriteComment.vue";
import {computed, onBeforeMount, reactive} from "vue";
import {useStore} from "vuex";
import BookInit from "../components/common/BookInit.vue";
import Comment from "../components/book/Comment.vue";

const store = useStore();
const bookInit = reactive(computed(() => store.getters.getBookInit))
onBeforeMount(async () => {
    window.scrollTo({top: 0});
})
</script>

<style lang="scss" scoped>

</style>
