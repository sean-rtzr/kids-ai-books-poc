<template>
  <v-card-text class="px-10" :class="$style.title">
    {{ $attrs.title }}
  </v-card-text>
</template>

<script setup>

</script>

<style lang="scss" scoped module>
.title {
  font-size: 1.38rem;
  font-weight: 900;
  letter-spacing: -0.2px;
  margin-top: 12px;
}
</style>
