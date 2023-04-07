<template>
  <v-btn :class="$style.wrapper" @click="prevPage">
    <div class="d-flex align-center justify-center">
      <v-img :src="back" width="18px" />
      <p class="ml-2 text-body-1 font-weight-black">{{ $attrs.text }}</p>
    </div>
  </v-btn>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter();
const back = new URL('@/assets/images/icon_back.png', import.meta.url).href;
const prevPage = () => {
 router.go(-1);
}
</script>

<style lang="scss" scoped module>
.wrapper {
  position: absolute;
  width: auto;
  height: 52px;
  padding: 0 24px 0 20px;
  border-radius: 26px;
  background-color: black;
  color: white;
  font-size: 0.875rem;
  font-weight: 900;
  letter-spacing: -0.2px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,.15);
  border: 4px solid white;
  margin: 24px 0 0 24px;
  z-index: 1;
}

</style>
