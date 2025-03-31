<script setup>
import Link from './Link.vue';

const links = [
	{ href: '/', text: 'Home' },
	{ href: '/about', text: 'About' },
	{ href: '/contact', text: 'Contact' },
];

</script>

<template>
	<nav>
		<h1>Site</h1>
		<ul>
			<li v-for="link in links">
				<Link :href="link.href" :text="link.text" />
			</li>
		</ul>
	</nav>
</template>
