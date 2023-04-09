<template>
    <div ref="contents" :class="$style.wrapper">
        <Back text="이전"/>
        <Top/>
        <Title title="공룡타고 떠나는 친구들의 즐거운 시간 여행"/>
        <BookInfo/>
        <Contents :class="$style.contents"/>
    </div>
</template>

<script setup>
import Back from "../components/common/Back.vue";
import Top from "../components/detail/Top.vue";
import Title from "../components/book/Title.vue";
import Contents from "../components/detail/Contents.vue";
import BookInfo from "../components/detail/BookInfo.vue";
import {onMounted, ref} from "vue";
import {useDisplay} from "vuetify";

const contents = ref(null);
const display = useDisplay();

onMounted(() => {
    contents.value.style.height = display.height.value + 'px';
    contents.value.style.overflow = 'hidden';

    setTimeout(() => {
        contents.value.style.overflow = 'auto';
    }, 2000);
});
</script>

<style lang="scss" scoped module>
.wrapper {
    .contents {
        opacity: 0;
        animation: fade-in 2s forwards 2s;
    }
}


@keyframes fade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
