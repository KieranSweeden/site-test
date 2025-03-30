<script setup lang="ts">
const props = defineProps<{
  href: string;
  text: string;
}>();

</script>

<template>
<a :href="props.href">{{ props.text }}</a>
</template>

<style scoped>
a {
  text-decoration: none;
  color: var(--primary-text-color);
	font-size: 1.2rem;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}
</style>