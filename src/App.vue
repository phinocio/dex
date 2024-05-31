<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
	<header class="mb-6 border-b-2 border-red-500">
		<nav class="container mx-auto flex items-center p-4 text-xl">
			<span class="mr-4 text-2xl font-bold text-red-500">phinocio/dex</span>
			<ul class="flex space-x-8">
				<li>Home</li>
				<li>Home</li>
				<li>Home</li>
			</ul>
		</nav>
	</header>

	<main class="container mx-auto h-full flex-grow px-4">
		<RouterView />
	</main>

	<footer class="bg-dark/50">
		<div class="py-5 text-center sm:container sm:mx-auto sm:flex sm:justify-between">
			footer
		</div>
	</footer>
</template>
