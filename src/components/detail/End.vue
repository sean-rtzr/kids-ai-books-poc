<template>
    <div :class="$style.wrapper">
        <v-card-text :class="$style.end">끝.</v-card-text>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped module>
.wrapper {
  position: relative;
  width: 100%;
  height: 100px;
  margin: 120px 0;

  .end {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.24rem;
    font-weight: 900;
    color: #000;
  }
}
</style>
