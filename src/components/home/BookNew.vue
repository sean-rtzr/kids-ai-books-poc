<template>
  <div class="text-black" :class="$style.wrapper">
    <div :class="$style.char_add">
      <v-btn width="40px" height="40px" color="transparent" :ripple="false" variant="flat" icon>
        <v-img :src="char_add" width="40px" />
      </v-btn>
      <p :class="$style.text">추가</p>
    </div>

    <v-btn width="40px" height="40px" color="transparent" :ripple="false" variant="flat" icon :class="$style.char_set">
      <v-img :src="char_set" width="40px" />
    </v-btn>
    <v-img :src="char_sample1" width="100%" height="100%" :class="$style.char1"/>
    <v-img :src="char_sample2" width="100%" height="100%" :class="$style.char2"/>
  </div>
</template>

<script setup>

const char_sample1 = new URL('@/assets/images/char_sample1.gif', import.meta.url).href;
const char_sample2 = new URL('@/assets/images/char_sample2_slot.gif', import.meta.url).href;
const char_set = new URL('@/assets/images/btn_charset.png', import.meta.url).href;
const char_add = new URL('@/assets/images/btn_friend_add.png', import.meta.url).href;

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
  .char2 {
    position: absolute;
    top: -60px;
    left: 72px;
    width: 100%;
    max-width: 138px;
    height: 100%;
    object-fit: cover;
  }
}

</style>
