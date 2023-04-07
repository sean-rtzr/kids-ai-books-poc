<template>
  <div :class="$style.wrapper">
    <div class="d-flex flex-row align-center">
      <h5 :class="$style.subtitle">BEST 인기작품</h5>
      <v-divider />
    </div>
    <p :class="$style.description">인기작품을 동화책에 바로 적용해보세요!</p>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped module>
.wrapper {
  width: 100%;
  height: 56px;
  margin: 40px 0 0;

  .subtitle {
    width: 204px;
    padding: 0 24px;
    font-size: 0.9rem;
    color: #01C17B;
  }
}

.description {
  font-size: 0.875rem;
  padding: 4px 0 0 24px;
  color: grey;
}

</style>
