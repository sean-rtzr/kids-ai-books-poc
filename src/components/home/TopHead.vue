<template>
  <v-toolbar :class="$style.wrapper" color="transparent" class="d-flex align-center justify-center">
    <v-spacer></v-spacer>
    <v-btn icon :class="$style.notification" class="pa-0 mx-2 bg-white d-flex justify-center align-center" size="x-small">
      <v-icon :class="$style.icon" class="mdi mdi-bell pa-0 ma-0" size="large"></v-icon>
    </v-btn>
    <v-btn icon :class="$style.profile" class="pa-0 ml-2 mr-4 bg-white d-flex justify-center align-center" size="x-small">
      <v-avatar color="white" size="small" variant="outlined">
        <v-img :src="profileImg"></v-img>
      </v-avatar>
    </v-btn>
  </v-toolbar>
</template>

<script setup>
const profileImg = new URL('@/assets/images/profile_sample1.jpg', import.meta.url).href;

</script>

<style lang="scss" scoped module>
.wrapper {
height: 56px;

  .notification, .profile {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  }

  .notification .icon {
    color: #01C17B;
  }
}
</style>
