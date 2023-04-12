<template>
  <v-list
    v-for="list in bestList"
    :key="list.title"
    :class="$style.list"
    class="d-flex flex-row align-center"
  >
    <div :class="$style.thumbnail_wrapper">
      <v-img :src="download" width="24px" :class="$style.download" />
      <div v-if="list.starred === 1" :class="$style.chars">
        <v-img :src="char_sample1" width="28px" />
      </div>
      <div v-if="list.starred === 2" :class="$style.chars">
        <v-img :src="char_sample1" width="28px" />
        <v-img :src="char_sample2" width="28px" />
      </div>
      <v-img
        :src="list.thumbnail"
        class="rounded-lg"
        width="100%"
        :class="$style.thumbnail"
      />
    </div>
    <div :class="$style.contents">
      <h5>{{ list.title }}</h5>
      <p>작가</p>
    </div>
  </v-list>
</template>

<script setup>
const bg_sample1 = new URL("@/assets/images/bg_sample1.jpg", import.meta.url)
  .href;
const bg_sample2 = new URL("@/assets/images/bg_sample2.jpg", import.meta.url)
  .href;
const char_sample1 = new URL(
  "@/assets/images/char_sample1.png",
  import.meta.url
).href;
const char_sample2 = new URL(
  "@/assets/images/char_sample2.png",
  import.meta.url
).href;

const download = new URL(
  "@/assets/images/btn_book_download.png",
  import.meta.url
).href;

const bestList = [
  {
    thumbnail: bg_sample1,
    starred: 1,
    title: "나홀로 떠나는 신나는 우주여행",
    info: {
      starred: 1,
      length: 1,
      objects: ["공룡"],
    },
  },
  {
    thumbnail: bg_sample2,
    starred: 2,
    title: "친구와 함께 폴짝폴짝 농장체험",
    info: {
      starred: 1,
      length: 2,
      objects: ["자동차", "공"],
    },
  },
];
</script>

<style lang="scss" scoped module>
.list {
  padding: 12px 24px;

  .thumbnail_wrapper {
    position: relative;
    width: 100%;
    max-width: 68px;
    border: 4px solid white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    padding: 0;

    .chars {
      position: absolute;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
    }

    .download {
      position: absolute;
      bottom: 8px;
      right: 8px;
      z-index: 1;
    }
  }

  .contents {
    padding: 0 12px;
  }
}
</style>
