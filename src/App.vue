<script setup lang="ts">
import { RouterView } from 'vue-router';
import Nav from './components/Nav.vue';
</script>

<template>
	<header>
		<Nav />
	</header>
	<main>
		<RouterView />
	</main>
	<footer>

	</footer>
</template>
