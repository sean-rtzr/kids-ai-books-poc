<template>
    <div class="text-black" :class="$style.wrapper">
        <div v-if="currentStory.value === null" :class="$style.char_add">
            <v-btn
                    v-if="isAdded.value"
                    width="40px"
                    height="40px"
                    color="transparent"
                    :ripple="false"
                    variant="flat"
                    icon
                    :class="$style.delete"
                    @click="deleteFriend"
            >
                <v-img :src="char_delete" width="40px"/>
            </v-btn>
            <v-btn
                    v-else
                    width="40px"
                    height="40px"
                    color="transparent"
                    :ripple="false"
                    variant="flat"
                    icon
                    @click="addFriend"
            >
                <v-img :src="char_add" width="40px"/>
            </v-btn>
            <p v-if="!isAdded.value" :class="$style.text">추가</p>
        </div>

        <v-btn
                v-if="currentStory.value === null"
                width="40px"
                height="40px"
                color="transparent"
                :ripple="false"
                variant="flat"
                icon
                :class="$style.char_set"
                @click="openOptions"
        >
            <v-img :src="char_set" width="40px"/>
        </v-btn>
        <v-img
                :src="bookInit.value.char1_src"
                width="100%"
                height="100%"
                :class="currentStory.value === 0 ? $style.char1_only : $style.char1"
        />
        <v-img
                :src="isAdded.value ? bookInit.value.char2_src : currentStory.value === 0 ? '' : currentStory.value === 1 ? char_sample4 : char_sample2"
                width="100%"
                height="100%"
                :class="isAdded.value ? $style.char3 : $style.char2"
        />
    </div>
</template>

<script setup>
import {useStore} from "vuex";
import {computed, reactive} from "vue";

const store = useStore();
const bookInit = reactive(computed(() => store.getters.getBookInit));
const char_sample1 = new URL(
    "@/assets/images/char_sample1.gif",
    import.meta.url
).href;
const char_sample2 = new URL(
    "@/assets/images/char_sample2_slot.gif",
    import.meta.url
).href;
const char_sample3 = new URL(
    "@/assets/images/char_sample7.png",
    import.meta.url
).href;
const char_sample4 = new URL(
    "@/assets/images/char_sample2.png",
    import.meta.url
).href;
const char_sample1_1 = new URL(
    "@/assets/images/char_sample1_1.png",
    import.meta.url
).href;
const currentStory = reactive(computed(() => store.getters.getCurrentStory));

const isAdded = reactive(computed(() => store.getters.getAddFriend.isAdded));
const char_set = new URL("@/assets/images/btn_charset.png", import.meta.url)
    .href;
const char_add = new URL("@/assets/images/btn_friend_add.png", import.meta.url)
    .href;
const char_delete = new URL(
    "@/assets/images/btn_friend_delete.png",
    import.meta.url
).href;

const openOptions = () => {
    store.commit("setOptions", {isOpen: true});
};

const addFriend = () => {
    store.commit("setAddFriend", {isAdded: true});
};

const deleteFriend = () => {
    store.commit("setAddFriend", {isAdded: false});
};
</script>

<style lang="scss" scoped module>
.wrapper {
  position: absolute;
  bottom: 0;
  width: 100%;
  max-width: 188px;
  height: 400px;
  box-sizing: border-box;
  z-index: 1;

  .char_add {
    position: absolute;
    left: 72%;
    top: 44px;
    transform: translateX(-50%);
    z-index: 2;

    .delete {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      max-width: 48px;
      height: 100%;
      object-fit: cover;
    }
  }

  .text {
    color: white;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
    font-size: 0.875rem;
    font-weight: 900;
    margin-top: 4px;
  }

  .char_set {
    position: absolute;
    left: 50%;
    top: 54%;
    transform: translateX(-50%);
    z-index: 2;
  }

  .char1 {
    position: absolute;
    top: -64px;
    left: -48px;
    width: 100%;
    max-width: 160px;
    height: 100%;
    object-fit: cover;
  }

  .char1_only {
    position: absolute;
    top: -64px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 160px;
    height: 100%;
    object-fit: cover;
  }

  .char2 {
    position: absolute;
    top: -60px;
    left: 72px;
    width: 100%;
    max-width: 138px;
    height: 100%;
    object-fit: cover;
  }

  .char3 {
    position: absolute;
    top: -60px;
    left: 72px;
    width: 100%;
    max-width: 164px;
    height: 100%;
    object-fit: cover;
  }
}
</style>
