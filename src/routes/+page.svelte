<script>
    import BlogPost from '$lib/components/BlogPost.svelte';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';

    /** @type {import('./$types').PageData} */
    export let data;

    // Define how many posts to display initially and per "load more"
    const POSTS_PER_LOAD = 20;
    let visiblePosts = POSTS_PER_LOAD;

    // Function to load more posts
    function loadMore() {
        visiblePosts += POSTS_PER_LOAD;
    }

    console.log('Page Data:', data);
</script>

<Header />

<main>
    <div class="posts-grid">
        {#each data.posts.slice(0, visiblePosts) as post}
            <BlogPost {post} />
        {/each}
    </div>
    {#if visiblePosts < data.posts.length}
        <button class="load-more" on:click={loadMore}>Load More</button>
    {/if}
</main>

<Footer />

<style>
    .posts-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        padding: 2rem;
    }

    .load-more {
        display: block;
        margin: 2rem auto;
        padding: 1rem 2rem;
        font-size: 1rem;
        background-color: #007acc;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .load-more:hover {
        background-color: #005fa3;
    }
</style>
