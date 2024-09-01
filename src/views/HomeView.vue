<script setup></script>

<template>
	<div class="grid grid-cols-4 gap-10">
		<div class="col-span-3 grid grid-cols-3 gap-10">
			<div class="grid grid-cols-6 grid-rows-6 rounded-t-xl border-2 dark:border-border-dark">
				<div
					class="col-span-6 flex items-center justify-center rounded-t-xl text-2xl font-bold"
				>
					<p>001 - 030</p>
				</div>
				<div class="border border-border-light dark:border-border-dark" v-for="_ in 30">
					<img
						src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
						alt="Bulbasaur"
					/>
				</div>
			</div>
			<div
				class="grid grid-cols-6 grid-rows-6 rounded-t-xl border border-border-light dark:border-border-dark"
			>
				<div
					class="col-span-6 flex items-center justify-center rounded-t-xl text-2xl font-bold"
				>
					<p>031 - 060</p>
				</div>
				<div class="border border-border-light dark:border-border-dark" v-for="_ in 30">
					<img
						src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
						alt="Bulbasaur"
					/>
				</div>
			</div>
			<div
				class="grid grid-cols-6 grid-rows-6 rounded-t-xl border border-border-light dark:border-border-dark"
			>
				<div
					class="col-span-6 flex items-center justify-center rounded-t-xl text-2xl font-bold"
				>
					<p>061 - 090</p>
				</div>
				<div class="border border-border-light dark:border-border-dark" v-for="_ in 30">
					<img
						src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
						alt="Bulbasaur"
					/>
				</div>
			</div>
		</div>
		<div class="col-span-1 rounded-xl border border-border-light p-4 dark:border-border-dark">
			<h2
				class="border-b border-border-light text-center text-2xl font-bold dark:border-border-dark"
			>
				Catching Queue
			</h2>
			<ul>
				<li
					class="flex flex-col items-center justify-between border-b border-border-light dark:border-border-dark"
				>
					<div class="flex w-full items-center justify-between">
						<img
							src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
							alt="Bulbasaur"
							class="h-20 w-20"
						/>
						<p>Route 1, 2, 5, 9</p>
					</div>
					<div class="flex w-full justify-between">
						<span
							class="flex h-12 w-12 items-center justify-center bg-red-400 font-bold dark:bg-red-600"
							>-</span
						>
						<span class="flex flex-grow items-center justify-center bg-gray-200"
							>2</span
						>
						<span
							class="flex h-12 w-12 items-center justify-center bg-green-400 font-bold dark:bg-green-600"
							>+</span
						>
					</div>
				</li>
				<li
					class="flex flex-col items-center justify-between border-b border-border-light dark:border-border-dark"
				>
					<div class="flex w-full items-center justify-between">
						<img
							src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
							alt="Bulbasaur"
							class="h-20 w-20"
						/>
						<p>Route 1, 2, 5, 9</p>
					</div>
					<div class="flex w-full justify-between">
						<span
							class="flex h-12 w-12 items-center justify-center bg-red-400 font-bold dark:bg-red-600"
							>-</span
						>
						<span class="flex flex-grow items-center justify-center bg-gray-200"
							>2</span
						>
						<span
							class="flex h-12 w-12 items-center justify-center bg-green-400 font-bold dark:bg-green-600"
							>+</span
						>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
