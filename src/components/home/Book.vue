<template>
    <v-container fluid class="pa-0 py-4" :class="$style.wrapper">
        <div class="d-flex justify-center align-center flex-column">
            <h1 :class="$style.subtitle" v-html="subtitle"></h1>
            <swiper
                    :class="$style.books"
                    :slidesPerView="'auto'"
                    :centeredSlides="true"
                    @slideChange="onSlideChange"
                    @slide-change-transition-end="onEndSlideChange"
            >
                <swiper-slide class="book" :class="$style.book" data-selected="true">
                    <BookNew/>
                    <div :class="$style.inputs">
                        <v-tooltip
                                v-model="showHintText"
                                :text="hintText"
                                width="200px"
                                class="text-center"
                                location="top"
                        >
                            <template v-slot:activator="{ props }">
                                <v-btn
                                        v-if="currentStory === null"
                                        size="x-small"
                                        v-bind="props"
                                        height="28px"
                                        rounded
                                        class="bg-purple-darken-3"
                                        :class="$style.ai"
                                        @click="getHint"
                                >
                                    <v-img :src="icon_ai" width="12px"/>
                                    <p class="font-weight-bold text-caption font-weight-bold">
                                        추천
                                    </p>
                                </v-btn>
                            </template>
                            <span class="text-caption text-center">{{ hintText }}</span>
                        </v-tooltip>
                        <div class="d-flex justify-center">
                            <v-text-field
                                    v-model="name"
                                    :class="$style.char1_name"
                                    hide-details
                                    bg-color="transparent"
                                    density="compact"
                                    @change="setChar1Name"
                                    placeholder="이름"
                            ></v-text-field>
                            <v-text-field
                                v-if="currentStory === 1 || isAdded"
                                    v-model="friendName"
                                    :class="$style.char2_name"
                                    hide-details
                                    bg-color="transparent"
                                    density="compact"
                                    @change="setChar2Name"
                                    placeholder="친구 이름"
                            ></v-text-field>
                        </div>

                        <v-textarea
                                rows="2"
                                no-resize
                                :readonly="currentStory !== null"
                                max-rows="2"
                                hide-details
                                v-model="story"
                                :class="$style.story"
                                bg-color="transparent"
                                density="compact"
                                @change="setStory"
                                placeholder="이야기 내용"
                        >
                            <template v-slot:append-inner>
                                <v-icon width="40px"></v-icon>
                            </template>
                        </v-textarea>
                    </div>
                </swiper-slide>
                <swiper-slide v-if="currentStory === null" class="book" :class="$style.book">
                    <v-img :src="book_add" width="40px" :class="$style.book_add"/>
                </swiper-slide>
            </swiper>
        </div>
    </v-container>
</template>

<script setup>
// imports
import {computed, reactive, ref, watch} from "vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import "swiper/scss";
import BookNew from "./BookNew.vue";
import {useStore} from "vuex";

// variables

// refs
const name = ref("");
const friendName = ref("");
const story = ref("");
const store = useStore();
const subtitle = ref(`가지고 노는 이야기책<br/>우리<span style='color: yellow;'>AI</span>북스`);
const showHintText = ref(false);
const hintText = ref("이야기 내용");
const hintTexts = [
    "우주선을 타고 우주를 떠나는 이야기",
    "유니콘을 만나 재미있게 놀았던 이야기",
    "아기 코끼리를 구해줘서 기뻤던 이야기",
    "놀다가 다쳤지만 씩씩하게 행동했던 이야기",
    "치과가 무서웠지만 잘 다녀왔던 이야기",
    "어린이집에서 친구와 속상했지만 놀면서 다시 친해진 이야기",
];
const total = hintTexts.length;
let i = 0;
const emits = defineEmits(["updatePage"]);
const icon_ai = new URL("@/assets/images/icon_ai.png", import.meta.url).href;
const book_add = new URL("@/assets/images/btn_book_add.png", import.meta.url).href;
const isAdded = reactive(computed(() => store.getters.getAddFriend.isAdded));
const currentStory = reactive(computed(() => store.getters.getCurrentStory));
const setChar1Name = () => store.commit('setChar1Name', name.value);
const setChar2Name = () => store.commit('setChar2Name', friendName.value);
const setStory = () => store.commit('setBookStory', story.value);

// methods

const onSlideChange = (swiper) => {
    const books = document.querySelectorAll(".book");
    books.forEach((book) => {
        book.setAttribute("data-selected", "false");
    });
    books[swiper.activeIndex].setAttribute("data-selected", "true");
};

const onEndSlideChange = (swiper) => {
    emits("updatePage", swiper.activeIndex);
};

const getHint = () => {
    if (i > total - 1) i = 0;
    hintText.value = hintTexts[i];
    i++;
};

watch(currentStory, (val) => {
    if (val === null) {
        subtitle.value = `가지고 노는 이야기책<br/>우리<span style='color: yellow;'>AI</span>북스`;
        story.value = ''
    }
    if (val === 0) {
        subtitle.value = "나홀로 떠나는 신나는<br/> 우주여행";
        story.value = store.getters.getBookInit.book_story;
    }
    if (val === 1) {
        subtitle.value = "친구와 함께 폴짝폴짝<br/>농장체험";
        story.value = store.getters.getBookInit.book_story;
    }
});

// lifecycle
</script>
<style>
input[type="text"] {
    font-size: 0.875rem;
    padding: 0 8px;
}

textarea {
    font-size: 0.875rem;
    margin: 0;
    text-indent: 0;
    border: none;
    height: 50px;
    resize: none;
    padding: 6px 8px !important;
}
</style>
<style module lang="scss">

.wrapper {
  height: 510px;
  color: #fff;

  .subtitle {
    font-size: 1.4rem;
    font-weight: 900;
    line-height: 1.32;
    text-align: center;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
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
      border: 4px solid #ffd14c;
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
          right: -4px;
          bottom: 30px;
          border: 2px solid white;
          z-index: 2;
        }

        .char1_name,
        .char2_name,
        .story {
          padding: 0;
          margin: 0;
          color: black;
        }

        .char1_name,
        .char2_name {
          margin-bottom: 12px;
        }

        .char1_name {
          margin-right: 4px;
        }

        .char2_name {
          margin-left: 4px;
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
