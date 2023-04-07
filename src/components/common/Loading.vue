<template>
  <v-dialog
      v-model="dialog"
      :scrim="false"
      persistent
      width="auto"
  >
    <v-card
        color="primary"
    >
      <v-card-text>
        Please stand by
        <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
        ></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
import {ref, watchEffect} from "vue";

defineProps(["isOpen"])
const dialog = ref(false);

watchEffect(() => {
  dialog.value = isOpen
})
</script>

<style lang="scss" scoped> </style>
