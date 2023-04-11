<template>
    <div>
        <ObjectSet />
        <Notification :show="show" @onEndNotification="onEndNotification" />
        <MyProfile :isOpen="isOpenProfile" @onEndProfile="onEndProfile"/>
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
        <Top @openLoad="openLoad" @onLoadProfile="openProfile" @onLoadNotification="onLoadNotification"/>
        <Subtitle/>
        <BestList/>
    </div>
</template>

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
import MyProfile from "@/components/profile/MyProfile.vue";
import Notification from "@/components/notification/Notification.vue";
import ObjectSet from "../components/home/ObjectSet.vue";

// variables

// refs
const isOpen = ref(false)
const show = ref(false);
const isOpenProfile = ref(false);
const router = useRouter();

// methods
const openLoad = () => {
    isOpen.value = true;
    setTimeout(() => {
        isOpen.value = false;
        router.push('/book');
    }, 3000);
}

const openProfile = () => {
    isOpenProfile.value = true;
}

const onLoadNotification = () => {
    show.value = true;
}

const onEndProfile = () => {
    isOpenProfile.value = false;
}

const onEndNotification = () => {
    show.value = false;
}

// lifecycle
</script>
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
