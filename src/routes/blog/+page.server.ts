import type { DevToPost } from '$lib/types.js';

export async function load() {
	const posts: DevToPost[] = await (
		await fetch(`https://dev.to/api/articles?username=bmw2621`)
	).json();
	return {
		posts
	};
}
