<script setup lang="ts"></script>
<template>
	<Html class="h-full has-[dialog[open]]:overflow-hidden">
		<Body class="text-text-light dark:text-text-dark bg-light dark:bg-dark">
			<div class="flex h-dvh flex-col justify-between">
				<SiteNavbar />
				<main class="container mx-auto my-4 flex-grow p-4 md:p-0">
					<slot />
				</main>
				<SiteFooter />
			</div>
		</Body>
	</Html>
</template>

<style>
html {
	font-family: Inter;
}
</style>
