<template>
    <v-dialog
            v-model="dialog"
            fullscreen
            :scrim="false"
            transition="dialog-bottom-transition"
    >
        <v-card :class="$style.wrapper">
            <div class="d-flex flex-row align-center">
                <div class="d-flex flex-column">
                    <h1 :class="$style.name">징징이맘</h1>
                    <p :class="$style.class">일반회원</p>
                </div>
                <v-spacer/>
                <v-avatar color="white" size="88" variant="outlined">
                    <v-img :src="profileImg"></v-img>
                </v-avatar>
            </div>
            <Subtitle subtitle="내정보" />
            <TopMenu />
            <Subtitle subtitle="앱정보" />
            <Close @onEndProfile="onEndProfile" />
            <v-img :src="bg_profile1" :class="$style.bg_profile1" />
            <v-img :src="bg_profile2" :class="$style.bg_profile2" />
        </v-card>
    </v-dialog>
</template>

<script setup>
import {ref, watch} from "vue";
import Close from "../common/Close.vue";
import Subtitle from "./Subtitle.vue";
import TopMenu from "./TopMenu.vue";

const dialog = ref(false);
const emits = defineEmits(['onEndProfile']);
const bg_profile1 = new URL('@/assets/images/bg_profile1.png', import.meta.url).href;
const bg_profile2 = new URL('@/assets/images/bg_profile2.png', import.meta.url).href;
const profileImg = new URL('@/assets/images/profile_sample1.jpg', import.meta.url).href;
const onEndProfile = () => {
    emits('onEndProfile', true)
}
const props = defineProps(['isOpen']);

watch(() => props.isOpen, (val) => {
    dialog.value = val;
});
</script>

<style lang="scss" scoped module>
.wrapper {
    position: relative;
    padding: 24px;

    .name {
        font-size: 1.24rem;
    }
    .class {
        font-size:  0.875rem;
        color: #9B9B9B;
    }

    .bg_profile1 {
        position: absolute;
        width: 150px;
        bottom: 0;
        left: 0;
    }
    .bg_profile2 {
        position: absolute;
        width: 150px;
        bottom: 0;
        right: 0;
    }
}

</style>
