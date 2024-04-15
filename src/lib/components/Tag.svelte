<script lang="ts">
	import type { TagData } from '$lib/types';
	import Icon from '@iconify/svelte';

	export let data: TagData;
	const { icon, img_src: src, label } = data;
</script>

<div class="tag">
	{#if icon}
		<Icon {icon} width="20px" />
	{:else if src}
		<img {src} alt={label + 'icon'} />
	{/if}
	<div>{label}</div>
</div>

<style>
	.tag {
		color: white;
		font-weight: 100;
		display: flex;
		gap: 10px;
		background: var(--secondaryColor);
		border-radius: 20px;
		padding: 5px 10px;
	}
</style>
