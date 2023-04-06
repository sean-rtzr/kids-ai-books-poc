<template>
  <div :class="$style.wrapper" class="d-flex flex-row align-center">
    <h5 :class="$style.subtitle">BEST 인기작품</h5>
    <v-divider />
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped module>
.wrapper {
  width: 100%;
  height: 80px;
  margin: 28px 0 0;

  .subtitle {
    width: 200px;
    padding: 0 24px;
    font-size: 0.9rem;
    color: #01C17B;
  }
}

</style>
