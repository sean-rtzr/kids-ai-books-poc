<template>
    <v-card v-if="dialog">
    </v-card>
</template>

<script setup>
import {ref, watch} from "vue";

const dialog = ref(false);
const props = defineProps(['show']);

watch(() => props.show, (val) => {
    dialog.value = val;
});
</script>

<style lang="scss" scoped>

</style>
