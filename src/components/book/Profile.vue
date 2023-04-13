<template>
  <v-list>
    <v-list-item lines="2">
      <template v-slot:prepend>
        <v-btn icon :class="$style.profile" class="pa-0 ml-2 mr-2 bg-white d-flex justify-center align-center"
               size="small">
          <v-avatar color="white" variant="outlined">
            <v-img :src="profileImg"></v-img>
          </v-avatar>
        </v-btn>
      </template>
      <v-list-item-title :class="$style.author" >징징이맘</v-list-item-title>
      <v-list-item-subtitle :class="$style.book">이야기책 <span style="color:#1ab96c">1</span>권</v-list-item-subtitle>
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
.author {
  font-size: 0.85rem;
  font-weight: 700;
}

.book {
  font-size: 0.7rem;
  font-weight: 700;
}
</style>
