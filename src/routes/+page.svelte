<script>
    import BlogPost from '$lib/components/BlogPost.svelte';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';

    /** @type {import('./$types').PageData} */
    export let data;

    // We can log the data to see what we're getting
    console.log('Page Data:', data);
</script>


<Header />

<main>
    <div class="posts-grid">
        {#each data.posts as post}
            <BlogPost {post} />
        {/each}
    </div>
</main>

<Footer />

<style>
    .posts-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        padding: 2rem;
    }
</style>
