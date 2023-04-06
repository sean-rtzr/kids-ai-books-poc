<template>
  <v-list v-for="list in bestList" :key="list.title" :class="$style.list" class="d-flex flex-row align-center">
    <div :class="$style.thumbnail_wrapper">
      <v-img :src="list.thumbnail" class="rounded-lg" width="100%" :class="$style.thumbnail" />
    </div>
    <div :class="$style.contents">
      <h5>{{ list.title }}</h5>
      <p>작가</p>
    </div>
  </v-list>
</template>

<script setup>
const bg_sample1 = new URL('@/assets/images/bg_sample1.jpg', import.meta.url).href;
const bg_sample2 = new URL('@/assets/images/bg_sample2.jpg', import.meta.url).href;

const bestList = [
  {
    thumbnail: bg_sample1,
    title: '나홀로 떠나는 신나는 우주여행',
  },
  {
    thumbnail: bg_sample2,
    title: '친구와 함께 폴짝폴짝 농장체험',
  }
]

</script>

<style lang="scss" scoped module>
.list {
  padding: 12px 24px;

  .thumbnail_wrapper {
    width: 100%;
    max-width: 68px;
    border: 4px solid white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,.15);
    padding: 0;
  }

  .contents {
    padding: 0 12px;
  }
}




</style>
