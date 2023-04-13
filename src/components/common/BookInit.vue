<template>
    <v-btn :class="$style.wrapper" @click="prevPage">
        <div class="d-flex align-center justify-center">
            <v-img :src="back" width="18px"/>
            <p class="ml-2 text-body-1 font-weight-black">{{ $attrs.text }}</p>
        </div>
    </v-btn>
</template>

<script setup>
import {useRouter} from "vue-router";
import {useStore} from "vuex";

const router = useRouter();
const store = useStore();
const back = new URL('@/assets/images/icon_back.png', import.meta.url).href;
const prevPage = () => {
    store.commit('setBookInit', {
        char1_name: "",
        char1_src: new URL(
            "@/assets/images/char_sample1.gif",
            import.meta.url
        ).href,
        char2_name: "",
        char2_src: new URL(
            "@/assets/images/char_sample7.png",
            import.meta.url
        ).href,
        objects: [],
        title: "",
        cover: "",
        comment: "산이 어머님 윤이가 요즘 산이랑 친하게 <br/>지내서 너무 행복해해요.<br/>이야기를 읽고 산이도 행복했으면 좋겠어요.",
        book_story: ""
    });
    store.commit('setAddFriend', {isAdded: false});
    store.commit('setCurrentStory', {id: null, story: ""})
    store.commit('setLoading', false);
    router.push('/');
}
</script>

<style lang="scss" scoped module>
.wrapper {
  position: absolute;
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
  margin: 24px 0 0 24px;
  z-index: 3;
}

</style>
