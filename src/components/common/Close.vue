<template>
    <v-btn :class="$style.wrapper" @click="closePage">
        <div class="d-flex align-center justify-center">
            <p class="ml-2 text-body-1 font-weight-black">닫기</p>
        </div>
    </v-btn>
</template>

<script setup>
const emits = defineEmits(['onEndProfile'])
const closePage = () => {
    emits('onEndProfile', true)
}
</script>

<style lang="scss" scoped module>
.wrapper {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
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
  z-index: 3;
}

</style>
