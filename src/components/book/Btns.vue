<template>
  <div :class="$style.wrapper" class="pa-0">
    <v-btn :class="$style.btn">이야기 시작</v-btn>
    <v-btn :class="$style.btn">한국어</v-btn>
    <v-btn :class="$style.btn">공유하기</v-btn>
    <v-btn :class="$style.btn">삭제하기</v-btn>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped module>
.wrapper {
  margin: 20px auto;
  width: 100%;
  height: 52px;
  background-color: #fff;
  display: grid;
  grid-template-columns: 200px 200px;
  grid-row: auto auto;
  grid-column-gap: 10px;
  grid-row-gap: 10px;

  .btn {
    background-color: #333;
    padding: 20px;
    border-radius: 10px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}


</style>
