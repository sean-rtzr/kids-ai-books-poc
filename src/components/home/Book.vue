<script setup>
// imports
import {ref} from "vue";
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/scss';

// variables

// refs
const name = ref('');
const story = ref('');
const emits = defineEmits(['updatePage']);


// methods

const onSlideChange = (swiper) => {
  const books = document.querySelectorAll('.book');
  books.forEach((book) => {
    book.setAttribute('data-selected', 'false');
  });
  books[swiper.activeIndex].setAttribute('data-selected', 'true');
};

const onEndSlideChange = (swiper) => {
  emits('updatePage', swiper.activeIndex);
}

// lifecycle
</script>

<template>
  <v-container fluid class="pa-0 py-4" :class="$style.wrapper">
    <div class="d-flex justify-center align-center flex-column">
      <h1 :class="$style.subtitle">가지고 노는 이야기책</h1>
      <h2 :class="$style.title">우리<span class="text-yellow">AI</span>북스</h2>
      <swiper
          :class="$style.books"
          :slidesPerView="'auto'"
          :centeredSlides="true"
          @slideChange="onSlideChange"
          @slide-change-transition-end="onEndSlideChange"
      >
        <swiper-slide class="book" :class="$style.book" data-selected="true">
<!--          <v-text-field v-model="name" :class="$style.name" placeholder="이름"></v-text-field>-->
<!--          <v-text-field v-model="story" :class="$style.story" placeholder="이야기 내용"></v-text-field>-->
        </swiper-slide>
        <swiper-slide class="book" :class="$style.book">
        </swiper-slide>
        ...
      </swiper>
    </div>
  </v-container>
</template>
<style module lang="scss">
.wrapper {
  height: 564px;
  color: #fff;

  .subtitle {
    font-size: 1.4rem;
    font-weight: 900;
    line-height: 1.2;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  }

  .title {
    font-size: 1.4rem;
    font-weight: 900;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);

    span {
      font-size: 1.58rem;
      font-weight: 700;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    }
  }

  .books {
    width: 100%;
    height: 380px;
    padding: 12px;
    margin: 110px auto 0;

    .book {
      width: 100%;
      height: 264px;
      max-width: 180px;
      border-radius: 20px;
      background-color: white;
      border: 4px solid #FFD14C;
      transition: all 0.4s ease-in-out 0.1s;
      padding: 12px;
      margin: 0 24px;

      &[data-selected="true"] {
        transform: scaleX(1.2) translateY(-4px);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.25);
      }

      .name, .story {
        width: 100%;
        color: black;
      }
    }
  }

}
</style>
