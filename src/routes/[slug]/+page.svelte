<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';

    /** @type {import('./$types').PageData} */
    export let data;

    // Add this to see the data structure
    console.log('Post Data:', data.post);

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }
</script>

<Header />

<main>
    {#if data.post}
        <article class="post">
            {#if data.post.feature_image}
                <div class="feature-image-container">
                    <img src={data.post.feature_image} alt={data.post.title} />
                </div>
            {/if}
            <div class="post-header">
                <h1>{data.post.title}</h1>
                
                <div class="meta">
                    <div class="authors">
                        {#if data.post.authors && data.post.authors.length > 0}
                            <div class="author-list">
                                {#each data.post.authors as author, i}
                                    <div class="author">
                                        {#if author.profile_image}
                                            <img src={author.profile_image} alt={author.name} class="author-image"/>
                                        {/if}
                                        <span class="author-name">
                                            {author.name}
                                            {#if i < data.post.authors.length - 1} & {/if}
                                        </span>
                                    </div>
                                {/each}
                            </div>
                        {/if}
                    </div>
                    

                    <time>{formatDate(data.post.published_at)}</time>

                    {#if data.post.primary_tag}
                        <div class="tags">
                            <span class="tag">{data.post.primary_tag.name}</span>
                            {#if data.post.tags}
                                {#each data.post.tags.slice(1) as tag}
                                    <span class="tag">{tag.name}</span>
                                {/each}
                            {/if}
                        </div>
                    {/if}
                </div>
            </div>

            <div class="content">
                {@html data.post.html}
            </div>
        </article>
    {/if}
</main>

<Footer />


<style>
    .post {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
        background: var(--card-bg);
    }

    .feature-image-container {
        margin: -2rem -2rem 2rem -2rem;
    }

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
        max-height: 500px;
    }

    .post-header {
        text-align: center;
        margin-bottom: 3rem;
    }

    h1 {
        font-size: 2.5rem;
        margin: 1rem 0;
        line-height: 1.2;
    }

    .meta {
        color: #666;
        font-size: 0.9rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        margin-top: 1.5rem;
    }

    .authors {
        margin-bottom: 0.5rem;
    }

    .author-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
    }

    .author {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .author-image {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
    }

    .author-name {
        font-weight: 500;
        color: #2c3e50;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        justify-content: center;
        margin-top: 0.5rem;
    }

    .tag {
        background: #363636;
        padding: 0.3rem 0.8rem;
        border-radius: 15px;
        font-size: 0.8rem;
        color: var(--text-color);
    }

    time {
        color: #718096;
    }

    .content :global(p) {
        line-height: 1.8;
        margin-bottom: 1.5rem;
        font-size: 1.1rem;
        color: var(--text-color);
    }

    .content :global(h2) {
        margin: 2rem 0 1rem;
        font-size: 1.8rem;
    }

    .content :global(img) {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        margin: 2rem 0;
    }

    .content :global(blockquote) {
        border-left: 4px solid #3273dc;
        margin: 1.5rem 0;
        padding-left: 1rem;
        color: #4a5568;
    }

    .content :global(pre) {
        background: #f8f9fa;
        padding: 1rem;
        border-radius: 4px;
        overflow-x: auto;
    }

    .content :global(a) {
        color: #3273dc;
        text-decoration: none;
    }

    .content :global(a:hover) {
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        .post {
            padding: 1rem;
        }

        .feature-image-container {
            margin: -1rem -1rem 1rem -1rem;
        }

        h1 {
            font-size: 2rem;
        }

        .author-list {
            flex-direction: column;
            align-items: center;
        }
    }
</style>
