<script setup lang="ts">
const open = ref(false);
</script>
<template>
	<Html class="h-full has-[dialog[open]]:overflow-hidden">
		<Body class="text-text-light dark:text-text-dark bg-light dark:bg-dark">
			<div class="flex h-dvh w-full justify-between">
				<SiteNav :open="open" @nav-close="open = false" />

				<div class="flex flex-grow flex-col md:p-0 lg:mt-16">
					<header
						class="flex items-center justify-between border-b border-blue-500 px-8 py-4 text-center text-2xl font-bold text-red-500 lg:hidden"
					>
						<Icon name="ph:notebook" :size="32" class="inline" />
						<span>phinocio/dex </span>
						<button @click="open = !open">
							<Icon name="ph:list" :size="24" />
						</button>
					</header>
					<main class="flex-grow px-8 py-4 lg:mx-64">
						<slot />
					</main>
					<SiteFooter />
				</div>
			</div>
		</Body>
	</Html>
</template>

<style>
html {
	font-family: Inter;
}
</style>
