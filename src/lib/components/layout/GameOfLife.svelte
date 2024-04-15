<script lang="ts">
	import { buildGrid, getDimensions, getRenderer, setCanvasSize } from '$lib/utils/gameOfLife';
	import { onMount } from 'svelte';
	import type { HTMLCanvasAttributes } from 'svelte/elements';

	let canvas: HTMLCanvasElement;
	let props: HTMLCanvasAttributes = {};
	let requestId: number;

	onMount(() => {
		setCanvasSize(canvas);
		const { cols, rows } = getDimensions(canvas);
		const grid = buildGrid(cols, rows);

		const render = getRenderer({ grid, canvas, setId: (id: number) => (requestId = id) });
		render();

		return () => {
			cancelAnimationFrame(requestId);
		};
	});
</script>

<canvas bind:this={canvas} {...props} />

<style>
	canvas {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;

		opacity: 0;
		-webkit-animation-name: titleNameFadeIn;
		animation-name: titleNameFadeIn;
		-webkit-animation-duration: 500ms;
		animation-duration: 500ms;
		-webkit-animation-timing-function: ease-out;
		animation-timing-function: ease-out;
		-webkit-animation-delay: 500ms;
		animation-delay: 500ms;
		-webkit-animation-iteration-count: 1;
		animation-iteration-count: 1;
		-webkit-animation-fill-mode: forwards;
		animation-fill-mode: forwards;
	}

	@-webkit-keyframes titleNameFadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes titleNameFadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
