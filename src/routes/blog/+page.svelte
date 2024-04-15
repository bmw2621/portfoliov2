<script lang="ts">
	import type { PageData } from './$types';
	import PostCard from './PostCard.svelte';

	export let data: PageData;

	const { posts } = data;
</script>

<svelte:head><title>Blog | Benjamin Winchester</title></svelte:head>

<h1>Blog</h1>
{#each posts as post}
	<PostCard {post} />
{/each}

<style>
	h1 {
		width: 100%;
		text-align: center;
	}
</style>
