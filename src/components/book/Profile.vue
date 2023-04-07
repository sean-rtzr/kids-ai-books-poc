<template>
  <v-list>
    <v-list-item lines="2">
      <template v-slot:prepend>
        <v-btn icon :class="$style.profile" class="pa-0 ml-2 mr-4 bg-white d-flex justify-center align-center"
               size="x-small">
          <v-avatar color="white" size="small" variant="outlined">
            <v-img :src="profileImg"></v-img>
          </v-avatar>
        </v-btn>
      </template>
      <v-list-item-title class="text-caption font-weight-black">징징이맘</v-list-item-title>
      <v-list-item-subtitle class="text-caption font-weight-black">이야기책 1권</v-list-item-subtitle>
    </v-list-item>
  </v-list>
</template>

<script setup>
const profileImg = new URL('@/assets/images/profile_sample1.jpg', import.meta.url).href;
</script>

<style lang="scss" scoped module>
.profile {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
}
</style>
