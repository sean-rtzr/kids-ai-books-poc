<template>
  <v-btn width="160px" variant="flat" rounded height="52px" color="yellow" :class="$style.btn">
    첫 이야기 만들기
  </v-btn>
</template>

<script setup>

</script>

<style lang="scss" scoped module>
.btn {
  position: absolute;
  bottom: -28px;
  left: 50%;
  font-size: 0.874rem;
  font-weight: 900;
  color: #0E4E36;
  transform: translateX(-50%);
  border: 4px solid white;
  box-shadow: 0 4px 12px rgba(0,0,0,.15);
  z-index: 1;
}

</style>
