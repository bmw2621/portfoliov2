import type { DevToArticle } from '$lib/types';
import type { PageServerLoad } from '../$types';

// @ts-ignore
export const load: PageServerLoad = async ({ params: { id: articleId } }) => {
	const post: DevToArticle = await (await fetch(`https://dev.to/api/articles/${articleId}`)).json();
	return {
		post
	};
};
