<template>
    <v-list
            v-for="list in bestList"
            :key="list.title"
            :class="$style.list"
            class="d-flex flex-row align-center"
    >
        <div :class="$style.thumbnail_wrapper" @click="applyStory(list.id)">
            <v-img :src="download" width="24px" :class="$style.download"/>
            <div v-if="list.starred === 1" :class="$style.chars">
                <v-img :src="char_sample1" width="28px"/>
            </div>
            <div v-if="list.starred === 2" :class="$style.chars">
                <v-img :src="char_sample1" width="28px"/>
                <v-img :src="char_sample2" width="28px"/>
            </div>
            <v-img
                    :src="list.thumbnail"
                    class="rounded-lg"
                    width="100%"
                    :class="$style.thumbnail"
            />
        </div>
        <div :class="$style.contents">
            <h5 :class="$style.title">{{ list.title }}</h5>
            <p :class="$style.objects">인원<span style="color:#1ab96c">{{ list.info.starred }}</span>명 . 길이 <span
                    style="color:#1ab96c">{{ list.info.length }}</span>분 . <span
                    style="color:#1ab96c">{{ list.info.objects[0].name }}</span>외 <span
                    style="color:#1ab96c"> {{ list.info.objects.length }}</span>개 물건</p>
            <div :class="$style.profile_wrapper">
                <v-btn icon :class="$style.profile" class="pa-0 mr-1 bg-white d-flex justify-center align-center"
                       size="x-small">
                    <v-avatar color="white" size="small" variant="outlined">
                        <v-img :src="list.profileImg"></v-img>
                    </v-avatar>
                </v-btn>
                <div class="d-flex flex-column">
                    <p :class="$style.author">{{ list.author }}</p>
                    <p :class="$style.book">이야기책 <span style="color:#1ab96c">{{ list.book }}</span>권</p>
                </div>
            </div>
        </div>
    </v-list>
</template>

<script setup>
import {useStore} from "vuex";

const store = useStore();
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
const profileImg1 = new URL('@/assets/images/profile_sample1.jpg', import.meta.url).href;
const profileImg2 = new URL('@/assets/images/profile_sample2.jpg', import.meta.url).href;

const bestList = [
    {
        id: 0,
        thumbnail: bg_sample1,
        starred: 1,
        title: "나홀로 떠나는 신나는 우주여행",
        cover: bg_sample1,
        prompt: "좌충우돌 우주여행을 떠나는 이야기",
        author: "징징이맘",
        book: 227,
        profileImg: profileImg1,
        info: {
            starred: 1,
            length: 1,
            objects: [{
                id: 1,
                name: "비치볼",
                value: "obj1",
                src: new URL(
                    "@/assets/images/obj_options_sample1.png",
                    import.meta.url
                ).href,
            },
                {
                    id: 2,
                    name: "풍선",
                    value: "obj2",
                    src: new URL(
                        "@/assets/images/obj_options_sample2.png",
                        import.meta.url
                    ).href,
                },
                {
                    id: 3,
                    name: "마법사 모자",
                    value: "obj3",
                    src: new URL(
                        "@/assets/images/obj_options_sample3.png",
                        import.meta.url
                    ).href,
                }],
        },
    },
    {
        id: 1,
        thumbnail: bg_sample2,
        starred: 2,
        title: "친구와 함께 폴짝폴짝 농장체험",
        cover: bg_sample2,
        prompt: "친구와 즐겁게 농장체험을 한 이야기",
        author: "은율이맘",
        book: 410,
        profileImg: profileImg2,
        info: {
            starred: 2,
            length: 2,
            objects: [{
                id: 4,
                name: "로켓",
                value: "obj4",
                src: new URL(
                    "@/assets/images/obj_options_sample4.png",
                    import.meta.url
                ).href,
            },
                {
                    id: 5,
                    name: "강아지",
                    value: "obj5",
                    src: new URL(
                        "@/assets/images/obj_options_sample5.png",
                        import.meta.url
                    ).href,
                },
                {
                    id: 6,
                    name: "고양이",
                    value: "obj6",
                    src: new URL(
                        "@/assets/images/obj_options_sample6.png",
                        import.meta.url
                    ).href,
                },],
        },
    },
];

const applyStory = (id) => {
    store.commit('setCurrentStory', {id, book_story: bestList[id].prompt});
    store.commit('setBookStory', bestList[id].prompt);
    store.commit('setBookTitle', bestList[id].title);
    store.commit('setBookCover', bestList[id].cover);
    store.commit('resetObjects');
    bestList[id].info.objects.forEach((obj) => {
        store.commit('setObjects', obj);
    })
};
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

    .profile_wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-top: 10px;

      .profile {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
      }

      .author {
        font-size: 0.85rem;
        font-weight: 700;
      }

      .book {
        font-size: 0.7rem;
        font-weight: 700;
        color: #999;
      }
    }

    .title {
      font-size: 0.9rem;
      font-weight: 900;
      padding-bottom: 2px;
    }

    .objects {
      font-size: 0.75rem;
      font-weight: 700;
      color: #999;
    }
  }
}
</style>
