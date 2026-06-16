<script lang="ts">
	let { icon, title, description }: { icon: string; title: string; description: string } = $props();
</script>

<div class="c-about-highlight">
	<span class="c-about-highlight__icon" aria-hidden="true">
		{#if icon === 'groups'}
			<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 -960 960 960" width="1em" fill="currentColor"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0H600v-65q0-25-7-48t-21-44q11-2 23-2.5t25-.5q72 0 116 27t44 70v63ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm0 240q-66 0-108 18.5T330-240h300q0-43-42-61.5T480-320Zm0-280Zm0 360Z"/></svg>
		{:else if icon === 'architecture'}
			<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 -960 960 960" width="1em" fill="currentColor"><path d="M480-80q-82 0-141-59t-59-141q0-74 48-129.5T440-474v-114L304-406l-56-56 200-200q13-13 32-13t32 13l200 200-56 56-136-182v114q64 16 112 71.5T680-280q0 82-59 141T480-80Zm0-80q49 0 84.5-35.5T600-280q0-49-35.5-84.5T480-400q-49 0-84.5 35.5T360-280q0 49 35.5 84.5T480-160Zm0-120Z"/></svg>
		{:else if icon === 'flowchart'}
			<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 -960 960 960" width="1em" fill="currentColor"><path d="M200-640v-160h160v160H200Zm0 480v-160h160v160H200Zm400-240v-160h160v160H600Zm-320-32h80v-55q0-30 20.5-51.5T432-560h88v80h80v-160h-80v80h-88q-63 0-107.5 44.5T280-408v56Zm-40-168h80v-80h-80v80Zm0 480h80v-80h-80v80Zm400-240h80v-80h-80v80Z"/></svg>
		{/if}
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
		font-size: 2.25rem;
		display: flex;
		align-items: center;
		justify-content: flex-start;
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
