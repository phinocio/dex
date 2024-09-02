<script setup lang="ts">
import Navbar from '@/components/Layout/Navbar.vue';
import Footer from '@/components/Layout/Footer.vue';
</script>

<template>
	<Navbar />

	<main class="container mx-auto flex-grow px-4 md:p-0"><RouterView /></main>

	<Footer />
</template>
