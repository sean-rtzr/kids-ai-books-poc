<script setup>
// imports
import {ref} from "vue";
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/scss';
import BookNew from "./BookNew.vue";

// variables

// refs
const name = ref('');
const story = ref('');
const emits = defineEmits(['updatePage']);
const icon_ai = new URL('@/assets/images/icon_ai.png', import.meta.url).href;
const book_add = new URL('@/assets/images/btn_book_add.png', import.meta.url).href;

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
        <swiper-slide class="book" :class="$style.book" data-selected="true" >
          <BookNew/>
          <div :class="$style.inputs">
            <v-btn size="x-small" height="28px" rounded class="bg-purple-darken-3" :class="$style.ai">
              <v-img :src="icon_ai" width="12px" />
              <p class="font-weight-bold pl-1 text-caption font-weight-bold">추천</p>
            </v-btn>
            <v-text-field v-model="name" :class="$style.name" hide-details bg-color="transparent" density="compact" placeholder="이름"></v-text-field>
            <v-textarea rows="2" no-resize max-rows="2" hide-details v-model="story" :class="$style.story" bg-color="transparent" density="compact" placeholder="이야기 내용">
              <template v-slot:append-inner>
                <v-icon width="40px"></v-icon>
              </template>
            </v-textarea>
          </div>

        </swiper-slide>
        <swiper-slide class="book" :class="$style.book">
          <v-img :src="book_add" width="40px" :class="$style.book_add" />
        </swiper-slide>
      </swiper>
    </div>
  </v-container>
</template>
<style module lang="scss">
.wrapper {
  height: 510px;
  color: #fff;

  .subtitle {
    font-size: 1.4rem;
    font-weight: 900;
    line-height: 1;
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
    position: relative;
    width: 100%;
    height: 420px;
    text-align: center;
    padding: 150px 0 0;

    .book {
      position: relative;
      width: 100%;
      height: 220px;
      max-width: 188px;
      border-radius: 20px;
      background-color: white;
      border: 4px solid #FFD14C;
      transition: all 0.4s ease-in-out 0.1s;
      padding: 0 12px;
      margin: 0 24px;

      &[data-selected="true"] {
        padding: 0 24px;
        margin: 0 10px;
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.25);
      }

      .inputs {
        position: absolute;
        width: 188px;
        bottom: 14px;
        z-index: 1;

        .ai {
          position: absolute;
          right: 0;
          bottom: 30px;
          border: 2px solid white;
          z-index: 2;
        }

        .name, .story {
          color: black;
        }
        .name {
          margin-bottom: 12px;
        }
      }

      .book_add {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

}
</style>
