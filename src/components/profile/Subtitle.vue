<template>
    <div :class="$style.wrapper">
        <v-card-text :class="$style.subtitle">{{ $attrs.subtitle }}</v-card-text>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped module>
.wrapper {
  width: 100%;
  height: 56px;

  .subtitle {
    font-size: 1.1rem;
    font-weight: 900;
    letter-spacing: -0.2px;
  }
}

</style>
