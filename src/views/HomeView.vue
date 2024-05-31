<script setup></script>

<template>
	<div class="grid grid-cols-2 gap-10 xl:grid-cols-3">
		<div
			class="dark:border-border-dark grid grid-cols-6 grid-rows-6 rounded-t-xl border-2 border-red-500"
		>
			<div
				class="col-span-6 flex items-center justify-center rounded-t-xl text-2xl font-bold"
			>
				<p>001 - 030</p>
			</div>
			<div class="border-border-light dark:border-border-dark border" v-for="_ in 30">
				<img
					src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
					alt="Bulbasaur"
				/>
			</div>
		</div>
		<div
			class="border-border-light dark:border-border-dark grid grid-cols-6 grid-rows-6 rounded-t-xl border"
		>
			<div
				class="col-span-6 flex items-center justify-center rounded-t-xl text-2xl font-bold"
			>
				<p>031 - 060</p>
			</div>
			<div class="border-border-light dark:border-border-dark border" v-for="_ in 30">
				<img
					src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
					alt="Bulbasaur"
				/>
			</div>
		</div>
		<div
			class="border-border-light dark:border-border-dark grid grid-cols-6 grid-rows-6 rounded-t-xl border"
		>
			<div
				class="col-span-6 flex items-center justify-center rounded-t-xl text-2xl font-bold"
			>
				<p>061 - 090</p>
			</div>
			<div class="border-border-light dark:border-border-dark border" v-for="_ in 30">
				<img
					src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
					alt="Bulbasaur"
				/>
			</div>
		</div>
	</div>
</template>
