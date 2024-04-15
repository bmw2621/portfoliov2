<script>
	import Icon from '@iconify/svelte';

	let showMenu = false;

	const links = [
		{
			label: 'About Me',
			href: '/'
		},
		{
			label: 'Blog',
			href: '/blog'
		},
		{
			label: 'Experience',
			href: '/experience'
		},
		{
			label: 'Contact',
			href: '/contact'
		}
	];

	const toggleMenu = () => (showMenu = !showMenu);
</script>

<button on:click={toggleMenu}><Icon icon="radix-icons:hamburger-menu" /></button>

<nav id="fullNav" style="--columns: {links.length}">
	{#each links as { label, href }}
		<a {href}><div>{label}</div></a>
	{/each}
</nav>
<nav id="mobileNav" style="--columns: 1" class={showMenu ? 'showMenu' : ''}>
	{#each links as { label, href }}
		<a {href} on:click={toggleMenu}><div>{label}</div></a>
	{/each}
</nav>

<style>
	button {
		position: absolute;
		left: 30px;
		top: 30px;
		transform: skewY(var(--headerSkew));
		color: white;
		background-color: transparent;
		border: none;
		font-size: 30px;
		cursor: pointer;
	}

	nav {
		z-index: 1000;
		display: grid;
		grid-template-columns: repeat(var(--columns), 1fr);
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

	#mobileNav {
		position: absolute;
		top: 80px;
		left: -200px;
		transition: left 500ms ease-in-out;
	}

	.showMenu {
		left: 0px !important;
	}

	#fullNav {
		display: none;
	}

	a,
	a:link,
	a:visited,
	a:hover,
	a:active {
		text-decoration: none;
	}

	div {
		padding: 20px;
		border: 2px solid white;
		color: white;
		background-color: var(--secondaryColor);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
	}

	@media (min-width: 700px) {
		button {
			display: none;
		}

		#mobileNav {
			display: none;
		}

		#fullNav {
			display: inherit;
		}
	}
</style>
