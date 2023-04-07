<template>
  <div>
    <Back text="이전"/>
    <Top />
    <Title title="공룡타고 떠나는 친구들의 즐거운 시간 여행" />
    <Profile />
    <Btns />
    <WriteComment />
  </div>
</template>

<script setup>

import Back from "../components/common/Back.vue";
import Top from "../components/book/Top.vue";
import Title from "../components/book/Title.vue";
import Profile from "../components/book/Profile.vue";
import Btns from "../components/book/Btns.vue";
import WriteComment from "../components/book/WriteComment.vue";
import {onBeforeMount} from "vue";

onBeforeMount(() => {
  window.scrollTo({top: 0});
})
</script>

<style lang="scss" scoped>

</style>
