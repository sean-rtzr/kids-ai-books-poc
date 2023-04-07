<template>
  <div :class="$style.wrapper">
    <v-btn :class="$style.btn"
           class="bg-yellow"
           rounded
           variant="flat"
           @click="onViewStory"
    >
      <template v-slot:prepend>
        <v-img :src="icon_play" width="16px"></v-img>
      </template>
      <p>이야기 시작</p>
    </v-btn>
    <v-btn :class="$style.btn" class="bg-white" rounded variant="flat">
      <template v-slot:prepend>
        <v-img :src="icon_lang" width="20px"></v-img>
      </template>
      <p>한국어</p>
    </v-btn>
    <v-btn :class="$style.btn" class="bg-white" rounded variant="flat">
      <template v-slot:prepend>
        <v-img :src="icon_share" width="20px"></v-img>
      </template>
      <p>공유하기</p>
    </v-btn>
    <v-btn :class="$style.btn" class="bg-white" rounded variant="flat">
      <template v-slot:prepend>
        <v-img :src="icon_delete" width="20px"></v-img>
      </template>
      <p>삭제하기</p>
    </v-btn>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";

const icon_play = new URL('@/assets/images/icon_play.png', import.meta.url).href;
const icon_lang = new URL('@/assets/images/icon_lang.png', import.meta.url).href;
const icon_share = new URL('@/assets/images/icon_share.png', import.meta.url).href;
const icon_delete = new URL('@/assets/images/icon_delete.png', import.meta.url).href;

const router = useRouter();
const onViewStory = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
  setTimeout(() => {
    router.push('/detail')
  }, 400)

}
</script>

<style lang="scss" scoped module>
.wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: 47% 47%;
  grid-row: auto;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  padding: 16px 24px;

  .btn {
    width: 100%;
    height: 52px;
    font-size: 0.9rem;
    font-weight: 900;
    letter-spacing: -0.4px;
    color: #777;
    border: 1px solid rgba(0, 0, 0, 0.24);
  }
}


</style>
