<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
	<header class="mb-6 border-b-2 border-red-500">
		<nav class="container mx-auto flex items-center p-4 text-xl">
			<RouterLink to="/" class="mr-8 text-2xl font-bold text-red-500"
				>phinocio/dex</RouterLink
			>
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

	<footer class="mt-6 border-t-2 border-red-500">
		<div class="container mx-auto flex items-center justify-between p-4 text-center text-sm">
			<section class="space-y-2">
				<p class="font-bold text-red-600 dark:text-red-500">phinocio/dex</p>
				<p>
					Created By
					<span class="font-bold text-red-600 dark:text-red-500">Phinocio</span>
				</p>
			</section>
			<section class="space-y-2">
				<p class="font-bold text-red-600 dark:text-red-500">Social</p>
				<p class="flex justify-center space-x-2">
					<a
						class="hover:text-red-600 dark:hover:text-red-500"
						href="https://patreon.com/phinocio"
						rel="noreferrer noopener"
						target="_blank"
						>BlueSky</a
					><a
						class="hover:text-red-600 dark:hover:text-red-500"
						href="https:/github.com/phinocio/dex"
						rel="noreferrer noopener"
						target="_blank"
						>GitHub</a
					>
				</p>
			</section>
			<section class="space-y-2">
				<p class="font-bold text-red-600 dark:text-red-500">Support The Site</p>
				<p class="flex justify-center space-x-2">
					<a
						class="hover:text-red-600 dark:hover:text-red-500"
						href="https://patreon.com/phinocio"
						rel="noreferrer noopener"
						target="_blank"
						>Patreon</a
					><a
						class="hover:text-red-600 dark:hover:text-red-500"
						href="https://ko-fi.com/phinocio"
						rel="noreferrer noopener"
						target="_blank"
						>Ko-fi</a
					>
				</p>
			</section>
		</div>
	</footer>
</template>
