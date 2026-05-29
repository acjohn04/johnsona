<script lang="ts">
	let { name, percentage }: { name: string; percentage: number } = $props();
</script>

<div class="c-progress-bar">
	<div class="c-progress-bar__header">
		<span class="c-progress-bar__name">{name}</span>
		<span class="c-progress-bar__percentage">{percentage}%</span>
	</div>
	<div class="c-progress-bar__track">
		<div
			class="c-progress-bar__fill"
			style:width="{percentage}%"
			role="progressbar"
			aria-valuenow={percentage}
			aria-valuemin={0}
			aria-valuemax={100}
		></div>
	</div>
</div>

<style>
	.c-progress-bar {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-unit);
	}

	.c-progress-bar__header {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}

	.c-progress-bar__name {
		font-family: var(--font-headline);
		font-size: 1.25rem;
		font-weight: 700;
	}

	.c-progress-bar__percentage {
		font-family: var(--font-body);
		font-size: 0.75rem;
		color: var(--color-on-surface-variant);
	}

	.c-progress-bar__track {
		height: 6px;
		width: 100%;
		background-color: var(--color-surface-container-low);
		border-radius: 9999px;
		overflow: hidden;
	}

	.c-progress-bar__fill {
		height: 100%;
		background: linear-gradient(90deg, var(--color-primary-container) 0%, var(--color-primary) 100%);
		border-radius: 9999px;
		transition: width 1s ease-out;
	}
</style>
