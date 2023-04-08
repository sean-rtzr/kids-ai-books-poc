<script setup>
// imports
import Subtitle from "../components/home/Subtitle.vue";
import Top from "../components/home/Top.vue";
import BestList from "../components/home/BestList.vue";
import {ref} from "vue";
import {useRouter} from "vue-router";
import {Vue3Lottie} from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import book from '@/assets/lottie/book.json'
// variables

// refs
const isOpen = ref(false)
const router = useRouter();

// methods
const openLoad = () => {
    isOpen.value = true;
    setTimeout(() => {
        isOpen.value = false;
        router.push('/book');
    }, 3000);
}

// lifecycle
</script>

<template>
    <div>
        <v-dialog
                v-model="isOpen"
                :scrim="false"
                persistent
                width="auto"
        >
            <v-card
                    width="200px"
                    height="260px"
                    color="primary"
                    class="rounded-xl"
                    :class="$style.loading"
            >
                <Vue3Lottie :animationData="book" :height="200" :width="200"/>
                <p :class="$style.text" class="pa-0 px-8 pb-4 text-center">
                    이야기를 만들고 있어요.<br/>잠시만 기다려주세요
                    <v-progress-linear
                            indeterminate
                            color="white"
                            class="mt-4 mb-0"
                    ></v-progress-linear>
                </p>
            </v-card>
        </v-dialog>
        <Top @openLoad="openLoad"/>
        <Subtitle/>
        <BestList/>
    </div>
</template>

<style lang="scss" scoped module>

.loading {
    position: relative;
  border-radius: 24px;
}

.text {
    position: absolute;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    bottom: 8px;
  font-size: 0.82rem;
  font-weight: 700;
}
</style>
