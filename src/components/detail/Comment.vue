<template>
  <div :class="$style.wrapper" class="d-flex justify-center pa-12">
    <v-btn icon :class="$style.profile" class="pa-0 my-8 bg-white d-flex justify-center align-center"
           size="x-large">
      <v-avatar color="white" size="x-large" variant="outlined">
        <v-img :src="profileImg"></v-img>
      </v-avatar>
    </v-btn>
    <v-list-item-title :class="$style.name">징징이맘</v-list-item-title>
    <p v-html="comment.value" :class="$style.comment"></p>
  </div>
</template>

<script setup>
import {computed, reactive} from "vue";
import {useStore} from "vuex";

const store = useStore();
const profileImg = new URL('@/assets/images/profile_sample1.jpg', import.meta.url).href;
const comment =  reactive(computed(() => store.getters.getComment))
</script>

<style lang="scss" scoped module>
@import url('https://fonts.googleapis.com/css2?family=Cute+Font&family=Noto+Sans+KR:wght@300;400;500;700&display=swap');

.wrapper {
  position: absolute;
  width: 100%;
  height: 292px;
  z-index: 2;

  .profile {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  }

  .name {
    position: absolute;
    top: 156px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.875rem;
    font-weight: 900;
    color: white;
    text-align: center;
  }

  .comment {
    font-family:'Cute Font',serif;
    position: absolute;
    bottom: 0;
    font-size: 1.32rem;
    color: white;
    text-align: center;
    line-height: 1.1;
    padding: 32px;
  }
}

</style>
