<script setup lang="ts">
const props = defineProps<{
	href: string;
	text: string;
}>();

import { RouterLink } from 'vue-router';

</script>

<template>
	<RouterLink :to="props.href">{{ props.text }}</RouterLink>
</template>

<style scoped>

</style>