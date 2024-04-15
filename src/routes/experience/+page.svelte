<script lang="ts">
	import Tag from '$lib/components/Tag.svelte';
	import { format } from 'date-fns';
	import { other, professional } from './experienceData';

	const formatter = 'MMMM yyyy';
	const formatActiveDate = (start: Date, end: Date | undefined) => {
		let formatted = format(start, formatter) + ' - ';
		if (end) {
			formatted += format(end, formatter);
		} else {
			formatted += 'Present';
		}
		return formatted;
	};
</script>

<svelte:head><title>Experience | Benjamin Winchester</title></svelte:head>

<h1 style:text-align="center">Professional Experience</h1>
{#each professional as { employer, location, title, start, end, description, tags }}
	<div class="experience">
		<h2>{title}</h2>
		<h3 style:font-style="italic">{employer} - {location}</h3>
		<h3 style:font-weight="normal" style:margin-bottom="20px">{formatActiveDate(start, end)}</h3>
		{#if tags.length}
			<div class="tags">
				{#each tags as data}
					<Tag {data} />
				{/each}
			</div>
		{/if}
		<p>{description}</p>
	</div>
{/each}
<h1 style:text-align="center">Other</h1>
{#each other as { title, date, description, tags }}
	<div class="experience">
		<h2>{title}</h2>
		<h3 style:font-weight="normal" style:margin-bottom="20px">{format(date, formatter)}</h3>
		{#if tags.length}
			<div class="tags">
				{#each tags as data}
					<Tag {data} />
				{/each}
			</div>
		{/if}
		<p>{description}</p>
	</div>
{/each}

<style>
	h2,
	h3 {
		margin: 0;
	}
	.experience {
		padding: 20px;
		align-items: center;
		justify-content: start;
		margin-bottom: 30px;
		box-shadow: 10px 20px 40px rgba(0, 0, 0, 0.5);
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 1px;
		width: 100%;
		justify-content: flex-start;
		align-items: center;
	}
</style>
