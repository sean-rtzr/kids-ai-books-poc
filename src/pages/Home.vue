<template>
    <div>
        <Back />
        <ObjectSet />
        <Notification :show="show" @onEndNotification="onEndNotification" />
        <MyProfile :isOpen="isOpenProfile" @onEndProfile="onEndProfile"/>
        <Loading />
        <Top @onLoadProfile="openProfile" @onLoadNotification="onLoadNotification"/>
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

import MyProfile from "@/components/profile/MyProfile.vue";
import Notification from "@/components/notification/Notification.vue";
import ObjectSet from "../components/home/ObjectSet.vue";
import Back from "../components/home/Back.vue";
import Loading from "../components/common/Loading.vue";

// variables

// refs
const isOpen = ref(false)
const show = ref(false);
const isOpenProfile = ref(false);
const router = useRouter();

// methods
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
