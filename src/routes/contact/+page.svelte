<script>
	import Icon from '@iconify/svelte';

	const commlines = [
		{ icon: 'material-symbols-light:mail', label: 'benjamin.m.winchester@gmail' },
		{ icon: 'bi:phone-fill', label: '••• - ••• - ••••' },
		{ icon: 'fluent-mdl2:world', label: 'Savannah, GA' }
	];
</script>

<svelte:head>
	<title>Contact | Benjamin Winchester</title>
</svelte:head>
<h1 style:text-align="center">Let's Talk</h1>
<div>
	{#each commlines as { icon, label }}
		<div class="com-line">
			<Icon {icon} width="30px" /><span>{label}</span>
		</div>
	{/each}
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.com-line {
		flex-direction: row;
		gap: 20px;
		margin-bottom: 10px;
	}
</style>
