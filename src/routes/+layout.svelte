<script lang="ts">
	import GameOfLife from '$lib/components/layout/GameOfLife.svelte';
	import MeImage from '$lib/components/layout/MeImage.svelte';
	import Navbar from '$lib/components/layout/Navbar.svelte';
</script>

<header>
	<GameOfLife />
	<MeImage />
	<Navbar />
</header>
<main><slot /></main>
<footer />

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<style>
	:global(body) {
		font-family: 'Fira Code';
		margin: 0;
		padding: 0;
		width: 100%;
		overflow-x: hidden;
	}

	:global(:root) {
		--headerSkew: 6deg;
		--inverseHeaderSkew: -6deg;
		--secondaryColor: #103037;
		--primaryColor: #0d3942;
	}

	:global(*) {
		box-sizing: border-box;
	}

	header {
		position: relative;
		height: 80vh;
		box-shadow: 0px 5px 30px 10px rgba(0, 0, 0, 0.6);
		-webkit-transform: skewY(var(--inverseHeaderSkew));
		transform: skewY(var(--inverseHeaderSkew));
		-webkit-transform-origin: top left;
		transform-origin: top left;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		margin-bottom: 20px;
	}

	main {
		max-width: 700px;
		margin: 0 auto;
	}

	footer {
		height: 100px;
	}

	@media only screen and (max-width: 700px) {
		header {
			height: 108vh;
		}

		main {
			margin: 0 30px;
		}
	}
</style>
