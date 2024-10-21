<script setup lang="ts">
const { open = false } = defineProps<{ open: boolean }>();

defineEmits(['nav-close']);

const navLinks = ref([
	{
		name: 'Home',
		path: '/',
		icon: 'ph:house',
	},
	{
		name: 'Your Dexes',
		path: '/dexes',
		icon: 'ph:notebook',
	},
]);

const footerLinks = ref([
	{
		name: 'Settings',
		path: '/settings',
		icon: 'ph:gear',
	},
]);

const isActivePage = (routePath: string) => {
	const route = useRoute();

	return route.path === routePath;
};
</script>

<template>
	<div class="fixed z-50 h-dvh w-full border-r-2 border-blue-500 shadow-xl lg:block lg:w-64" :hidden="!open">
		<div class="flex h-full">
			<div class="flex h-full w-64 flex-col bg-[#dce0e8] lg:w-full dark:bg-[#11111b]">
				<header
					class="flex justify-center border-b-2 border-blue-500 py-4 text-center text-xl font-bold text-pink-500"
				>
					<button
						class="flex items-center justify-center rounded-xl border border-pink-500 px-4 py-2 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
					>
						<span>New Dex</span>
						<Icon name="ph:plus-bold" :size="24" />
					</button>
				</header>
				<nav class="mt-4 flex-grow">
					<ul class="space-y-2 py-2">
						<li v-for="link in navLinks" :key="link.path">
							<NuxtLink
								:class="[
									isActivePage(link.path)
										? 'ml-4 rounded-l-xl bg-blue-500 pr-0 text-white'
										: 'mx-4 rounded-xl',
									'flex px-3 py-2 hover:bg-pink-500 hover:text-white active:bg-pink-500 active:text-white',
								]"
								:to="link.path"
								@click="$emit('nav-close')"
							>
								<Icon :name="link.icon" :size="24" class="mr-2 inline" />
								<span>{{ link.name }}</span>
							</NuxtLink>
						</li>
					</ul>
				</nav>
				<footer class="pb-4">
					<ul class="space-y-4">
						<li v-for="link in footerLinks" :key="link.path" class="px-4">
							<NuxtLink
								:class="[
									isActivePage(link.path) ? 'bg-blue-500 text-white' : '',
									'flex rounded-xl px-3 py-2 hover:bg-pink-500 hover:text-white active:bg-pink-500 active:text-white',
								]"
								:to="link.path"
								@click="$emit('nav-close')"
							>
								<Icon :name="link.icon" :size="24" class="mr-2 inline" />
								<span>{{ link.name }}</span>
							</NuxtLink>
						</li>
					</ul>
				</footer>
			</div>
			<button class="inline-block h-full flex-grow bg-black/50 lg:hidden" @click="$emit('nav-close')" />
		</div>
	</div>
</template>
