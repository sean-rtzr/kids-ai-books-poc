<template>
  <v-card width="280px" height="300px" :class="$style.wrapper" class="bg-white">
    <v-img :src="char_sample1" width="160px" :class="$style.char1"/>
    <v-img :src="char_sample2" width="160px" :class="$style.char2"/>
    <p :class="$style.name1">서윤이</p>
    <p :class="$style.name2">김산</p>
  </v-card>
</template>

<script setup>
const char_sample1 = new URL('@/assets/images/char_sample1.gif', import.meta.url).href;
const char_sample2 = new URL('@/assets/images/char_sample2.png', import.meta.url).href;

</script>

<style lang="scss" scoped module>
.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 24px;
  border: 6px solid #FFD14C;
  box-shadow: 0 4px 12px rgba(0,0,0,.15);
  overflow: visible;

  .char1 {
    position: absolute;
    left: -10px;
    top: -48px;
    z-index: 1;
  }

  .char2 {
    position: absolute;
    right: -10px;
    top: -48px;
    z-index: 1;
  }

  .name1 {
    position: absolute;
    left: 56px;
    bottom: 64px;
    font-size: 1.32rem;
    font-weight: 900;
    text-align: center;
    color: #01C17B;
  }

  .name2 {
    position: absolute;
    right: 56px;
    bottom: 64px;
    font-size: 1.32rem;
    font-weight: 900;
    text-align: center;
    color: #FFD14C;
  }
}
</style>
