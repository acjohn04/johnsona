<script lang="ts">
  import { locale, useTranslations, type Locale } from "$lib/i18n";

  let currentLocale: Locale = $state("en");
  $effect(() => {
    const unsub = locale.subscribe((v) => (currentLocale = v));
    return unsub;
  });

  let t = $derived(useTranslations(currentLocale, "Projects"));

  let projects = $derived([
    {
      title: t("project1.title"),
      description: t("project1.description"),
      image: "/project-pantry.png",
      url: t("project1.url"),
    },
    {
      title: t("project2.title"),
      description: t("project2.description"),
      image: "/project-florafile.png",
      url: t("project2.url"),
    },
  ]);
</script>

<section id="projects" class="c-projects">
  <div class="o-container">
    <h2 class="c-projects__title">
      {t("title")}<span class="u-italic u-text-primary"
        >{t("titleVariant")}</span
      >
    </h2>

    <div class="c-projects__grid">
      {#each projects as project}
        <a
          href={project.url}
          class="c-project-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="c-project-card__image-wrapper">
            <img
              src={project.image}
              alt={project.title}
              class="c-project-card__image"
              loading="lazy"
              width="800"
              height="450"
            />
          </div>
          <div class="c-project-card__content">
            <h3 class="c-project-card__title">
              {project.title}
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" class="c-project-card__arrow" aria-hidden="true"><path d="M256-240 216-280l436-436H360v-64h384v384h-64v-292L256-240Z"/></svg>
            </h3>
            <p class="c-project-card__description">
              {project.description}
            </p>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  .c-projects {
    background-color: var(--color-background);
    padding-top: var(--spacing-xl);
    padding-bottom: var(--spacing-xl);
    border-top: 1px solid
      color-mix(in srgb, var(--color-outline-variant) 10%, transparent);
  }

  .c-projects__title {
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: -0.05em;
    margin-bottom: var(--spacing-xl);
  }

  @media (min-width: 768px) {
    .c-projects__title {
      font-size: 3.75rem;
    }
  }

  .c-projects__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  @media (min-width: 768px) {
    .c-projects__grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  /* Project Card */
  .c-project-card {
    display: flex;
    flex-direction: column;
    background-color: var(--color-surface);
    border: 1px solid
      color-mix(in srgb, var(--color-outline-variant) 30%, transparent);
    border-radius: 20px;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    transition:
      transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
      box-shadow 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
      border-color 0.4s ease;
    box-shadow: 0 4px 20px
      color-mix(in srgb, var(--color-on-background) 5%, transparent);
  }

  .c-project-card:hover {
    transform: translateY(-8px);
    border-color: var(--color-primary);
    box-shadow: 0 20px 40px
      color-mix(in srgb, var(--color-primary) 12%, transparent);
  }

  .c-project-card__image-wrapper {
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background-color: var(--color-surface-container-low);
    border-bottom: 1px solid
      color-mix(in srgb, var(--color-outline-variant) 20%, transparent);
  }

  .c-project-card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    transition:
      transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
      filter 0.6s ease;
  }

  .c-project-card:hover .c-project-card__image {
    transform: scale(1.05);
    filter: grayscale(0%);
  }

  .c-project-card__content {
    padding: var(--spacing-md);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
    flex-grow: 1;
  }

  .c-project-card__title {
    font-family: var(--font-headline);
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0;
    color: var(--color-on-surface);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-unit);
    transition: color 0.3s ease;
  }

  .c-project-card:hover .c-project-card__title {
    color: var(--color-primary);
  }

  .c-project-card__arrow {
    font-size: 1.25rem !important;
    color: var(--color-on-surface-variant);
    transition:
      transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
      color 0.3s ease;
  }

  .c-project-card:hover .c-project-card__arrow {
    transform: translate(3px, -3px);
    color: var(--color-primary);
  }

  .c-project-card__description {
    font-family: var(--font-body);
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--color-on-surface-variant);
    margin: 0;
  }
</style>
