<template>
  <v-btn width="160px" variant="flat" rounded height="52px" class="text-green-darken-4" color="yellow" :class="$style.btn">
    {{ page === 0 ? '첫 이야기 만들기' : '구독 후 만들기' }}
  </v-btn>
</template>

<script setup>
defineProps(["page"])
</script>

<style lang="scss" scoped module>
.btn {
  position: absolute;
  bottom: -28px;
  left: 50%;
  font-size: 0.92rem;
  font-weight: 900;
  letter-spacing: -0.2px;
  transform: translateX(-50%);
  border: 4px solid white;
  box-shadow: 0 4px 12px rgba(0,0,0,.15);
  z-index: 1;
}

</style>
