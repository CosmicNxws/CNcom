<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import { onMount } from 'svelte';

    export let data;

    let launches = [];

    onMount(() => {
        launches = data.posts;
    });
</script>

<Header />

<main>
    <h1>Launches</h1>
    <section class="launch-list">
        {#each launches as launch}
            <article class="launch">
                <a href={`/${launch.slug}`}>
                    {#if launch.feature_image}
                        <img src={launch.feature_image} alt={launch.title} />
                    {/if}
                    <h2>{launch.title}</h2>
                </a>
                <p>{launch.excerpt}</p>
                <time datetime={launch.published_at}>{new Date(launch.published_at).toLocaleDateString()}</time>
            </article>
        {/each}
    </section>
</main>

<Footer />

<style>
    main {
        padding: 2rem;
    }
    .launch-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1rem;
    }
    .launch {
        border: 1px solid #ddd;
        border-radius: 5px;
        padding: 1rem;
        background: white;
        text-align: center;
    }
    img {
        width: 100%;
        height: auto;
        max-height: 200px;
        object-fit: cover;
        border-radius: 5px;
    }
    h2 {
        margin: 0.5rem 0;
    }
    p {
        color: #555;
    }
    time {
        font-size: 0.8rem;
        color: #888;
    }
</style>
