<template>
    <v-btn class="btn_wrapper" :class="$style.wrapper" @click="prevPage">
        <div class="d-flex align-center justify-center">
            <v-img :src="back" width="18px"/>
            <p class="ml-2 text-body-1 font-weight-black">이전으로</p>
        </div>
    </v-btn>
</template>

<script setup>
import {useRouter} from "vue-router";
import {computed, reactive, watch} from "vue";
import {useStore} from "vuex";

const router = useRouter();
const store = useStore();
const back = new URL('@/assets/images/icon_back.png', import.meta.url).href;
const currentStory = reactive(computed(() => store.getters.getCurrentStory));
const prevPage = () => {
    store.commit('setCurrentStory', {id: null, book_story: ""});
}

watch(currentStory, (val) => {
    const btn_wrapper = document.querySelector('.btn_wrapper');

    if (val === null) {
        btn_wrapper.style.animation = 'hide_btn 0.5s ease-in-out forwards';
    } else {
        btn_wrapper.style.animation = 'show_btn 0.5s ease-in-out forwards';
    }
});
</script>

<style>
@keyframes show_btn {
    0% {
        bottom: -32px;
    }
    100% {
        bottom: 32px;
    }
}

@keyframes hide_btn {
    0% {
        bottom: 32px;
    }
    100% {
        bottom: -50px;
    }
}
</style>
<style lang="scss" scoped module>
.wrapper {
  position: fixed;
  left: 50%;
  bottom: -50px;
  transform: translateX(-50%);
  width: auto;
  height: 52px;
  padding: 0 24px 0 20px;
  border-radius: 26px;
  background-color: black;
  color: white;
  font-size: 0.875rem;
  font-weight: 900;
  letter-spacing: -0.2px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, .15);
  border: 4px solid white;
  z-index: 3;
}


</style>
