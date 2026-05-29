<script lang="ts">
	import ProgressBar from './ProgressBar.svelte';

	let { title, skills }: { title: string; skills: { name: string; percentage: number }[] } = $props();
</script>

<div class="c-skill-category">
	<h3 class="c-skill-category__title">
		{title}
	</h3>
	<div class="c-skill-category__list">
		{#each skills as skill (skill.name)}
			<ProgressBar name={skill.name} percentage={skill.percentage} />
		{/each}
	</div>
</div>

<style>
	.c-skill-category {
		position: relative;
		padding-left: var(--spacing-md);
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
	}

	/* Technical Trace line */
	.c-skill-category::after {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 2px;
		height: 100%;
		background: var(--color-primary);
		opacity: 0.1;
	}

	.c-skill-category__title {
		font-family: var(--font-label);
		font-size: 0.75rem;
		font-weight: 900;
		color: var(--color-primary);
		text-transform: uppercase;
		letter-spacing: 0.3em;
		margin: 0;
	}

	.c-skill-category__list {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-lg);
	}
</style>
