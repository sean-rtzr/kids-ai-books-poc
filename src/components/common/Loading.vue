<template>
    <v-dialog
            v-model="isLoading"
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
</template>

<script setup>
import {computed, reactive, watch} from "vue";
import {Vue3Lottie} from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import book from '@/assets/lottie/book.json'
import {titleFromAI} from "../../utils/openai.js";
import {useRouter} from "vue-router";
import {useStore} from "vuex";

const router = useRouter();
const store = useStore();
const isLoading = reactive(computed(()=> store.getters.getLoading))
const bookInit = reactive(computed(() => store.getters.getBookInit))

watch(isLoading, async (val) => {
  if(val=== true) {
      if(bookInit.value.title === '') {
          const title = await titleFromAI(bookInit.value.book_story)
          console.log('title: ', title);
          await store.commit('setBookTitle', title);
      }
      setTimeout(() => {
          router.push('/book');
      }, 3000);
  }
});
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
