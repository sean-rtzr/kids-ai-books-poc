<script setup>
// imports
import Book from "@/components/home/Book.vue";
import TopHead from "../components/home/TopHead.vue";
import GenerativeBtn from "../components/home/GenerativeBtn.vue";

// variables

// refs

// methods

// lifecycle
</script>

<template>
	<div :class="$style.books">
    <TopHead />
    <GenerativeBtn />
		<Book />
	</div>
</template>

<style module lang="scss">
.books {
  position: relative;
  background-color: #01C17B;
}
</style>
