<script lang="ts">
	import type { DevToPost } from '$lib/types';
	import Icon from '@iconify/svelte';
	import { format } from 'date-fns';

	export let post: DevToPost;

	const pubDate = new Date(post.published_at);
</script>

<a href={`/blog/${post.slug}/${post.id}`}>
	<div class="post-card">
		<Icon width="75px" icon="skill-icons:devto-dark" />
		<div class="post-data">
			<h2>{post.title}</h2>
			<div style:display="flex" style:align-items="center" style:gap="10px">
				<Icon color="#a83f61" icon="radix-icons:heart-filled" />
				<span style:margin-right="30px">
					{post.positive_reactions_count}
				</span>
				<span>{format(pubDate, 'EEE LLL do yyyy')}</span>
			</div>
		</div>
	</div>
</a>

<style>
	.post-card {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 20px;
		padding: 20px;
		align-items: center;
		justify-content: start;
		margin-bottom: 30px;
		box-shadow: 10px 20px 40px rgba(0, 0, 0, 0.5);
	}

	.post-data {
		width: 100%;
		overflow: hidden;
	}

	h2 {
		font-size: 20px;
		margin: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		text-wrap: nowrap;
	}

	a,
	a:link,
	a:visited,
	a:hover,
	a:active {
		text-decoration: none;
		color: inherit;
	}
</style>
