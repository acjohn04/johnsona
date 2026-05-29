<script lang="ts">
	let { icon, title, description }: { icon: string; title: string; description: string } = $props();
</script>

<div class="c-about-highlight">
	<span class="material-symbols-outlined c-about-highlight__icon" aria-hidden="true">
		{icon}
	</span>
	<h3 class="c-about-highlight__title">{title}</h3>
	<p class="c-about-highlight__description">{description}</p>
</div>

<style>
	.c-about-highlight {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-sm);
	}

	.c-about-highlight__icon {
		color: var(--color-primary);
		font-size: 2.25rem !important; /* Material symbol sizing */
	}

	.c-about-highlight__title {
		font-family: var(--font-headline);
		font-size: 1.25rem;
		font-weight: 700;
		margin: 0;
	}

	.c-about-highlight__description {
		color: var(--color-on-surface-variant);
		font-family: var(--font-body);
		line-height: 1.625;
		margin: 0;
	}
</style>
