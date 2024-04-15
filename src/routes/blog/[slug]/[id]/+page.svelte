<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head><title>{data.post.title} | Benjamin Winchester</title></svelte:head>

<h1>{data.post.title}</h1>
<p>{data.post.description}</p>
<hr />
{@html data.post.body_html}
<pre>
    {JSON.stringify(data, null, 2)}
</pre>

<style>
	h1 {
		text-align: center;
	}

	p {
		font-style: italic;
		margin: 0 30px 30px;
	}
</style>
