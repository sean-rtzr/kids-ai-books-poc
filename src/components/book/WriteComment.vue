<template>
  <div :class="$style.wrapper">
    <p :class="$style.text">함께보는 사람이 있다면?</p>
    <v-btn variant="flat" rounded :class="$style.btn">
      <template v-slot:prepend>
        <v-img :src="icon_write" width="16px"></v-img>
      </template>
      <p>메시지 작성</p>
    </v-btn>
  </div>
</template>

<script setup>
const icon_write = new URL('@/assets/images/icon_write.png', import.meta.url).href;
</script>

<style lang="scss" scoped module>
.wrapper {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 88px;
  padding: 0 32px;

  .text {
    letter-spacing: -0.4px;
    font-weight: 900;
  }

  .btn {
    height: 52px;
    padding: 0 24px;
    color: #fff;
    font-size: 0.92rem;
    font-weight: 900;
    letter-spacing: -0.4px;
    background-color: #02C17B;
    margin-left: 16px;
    border: 4px solid #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  }
}

</style>
