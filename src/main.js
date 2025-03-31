import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import "./styles.css"
import App from './App.vue'

import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import ContactView from './views/ContactView.vue';

const routes = [
	{ path: "/", component: HomeView },
	{ path: "/about", component: AboutView },
	{ path: "/contact", component: ContactView }
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

createApp(App).use(router).mount('#app')
