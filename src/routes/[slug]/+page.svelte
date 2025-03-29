<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';

    export let data;
    let showDeprecationNotice = true;

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

    function dismissNotice() {
        showDeprecationNotice = false;
        if (typeof window !== 'undefined') {
            localStorage.setItem('deprecationNoticeDismissed', 'true');
        }
    }

    onMount(() => {
        if (typeof window !== 'undefined' && localStorage.getItem('deprecationNoticeDismissed')) {
            showDeprecationNotice = false;
        }
    });
</script>

<svelte:head>
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</svelte:head>

<Header />

{#if showDeprecationNotice}
<div transition:fade class="deprecation-notice">
    <div class="notice-content">
        <span class="notice-icon">⚠️</span>
        <div>
            <strong>Important Update:</strong> CosmicNxws is rebranding to <strong>Proxima Report</strong>. 
            This site is being deprecated and will shut down on April 16, 2025 at 11pm CST. 
            <a href="https://proximareport.com" class="migration-link">Visit our new Site</a> 
            to continue getting updates.
        </div>
    </div>
    <button on:click={dismissNotice} class="close-button" aria-label="Dismiss notice">
        &times;
    </button>
</div>
{/if}

<main>
    <meta name="google-adsense-account" content="ca-pub-1753330877601837">
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
                            <span class="tag primary-tag">{data.post.primary_tag.name}</span>
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
    main {
        background: #121212;
        min-height: 100vh;
        padding: 2rem 0;
    }



    .deprecation-notice {
        background: linear-gradient(135deg, #1a1a2e, #16213e);
        color: white;
        padding: 0.8rem 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 2px 15px rgba(0,0,0,0.3);
        position: sticky;
        top: 0;
        z-index: 1000;
        border-left: 4px solid #f05454;
    }

    .notice-content {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        font-size: 0.95rem;
    }

    .notice-icon {
        font-size: 1.2rem;
    }

    .migration-link {
        color: #00f5d4;
        text-decoration: underline;
        font-weight: bold;
        margin-left: 0.3rem;
    }

    .migration-link:hover {
        text-decoration: none;
    }

    .close-button {
        background: transparent;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0 0.5rem;
        line-height: 1;
    }


    .post {
        max-width: 900px;
        margin: 0 auto;
        padding: 2rem;
        background: #1a1a1a;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(177, 64, 211, 0.473);
    }

    .feature-image-container {
        margin: -2rem -2rem 2rem -2rem;
        border-radius: 12px 12px 0 0;
        overflow: hidden;
        position: relative;
    }

    .feature-image-container img {
        width: 100%;
        max-height: 500px;
        object-fit: contain;
        background: #0f0f0f;
        transition: transform 0.3s ease;
    }

    .content :global(img) {
        width: auto;
        max-width: 100%;
        height: auto;
        border-radius: 12px;
        margin: 2.5rem auto;
        display: block;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    /* Tweet Styling */
    .content :global(.twitter-tweet-rendered) {
        display: flex !important;
        justify-content: center !important;
        margin: 0 auto !important;
        width: 100% !important;
    }

    .content :global(p:has(.twitter-tweet-rendered)) {
        margin: 0 !important;
        padding: 0 !important;
    }

    /* YouTube Embed Styling */
    .content :global(.kg-embed-card:has(iframe[src*="youtube"])) {
        position: relative;
        width: 100%;
        padding-bottom: 56.25%;
        margin: 2.5rem 0;
    }

    .content :global(.kg-embed-card:has(iframe[src*="youtube"]) iframe) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(216, 87, 233, 0.226);
    }

    .post-header {
        text-align: center;
        margin-bottom: 3rem;
    }

    h1 {
        font-size: 3rem;
        margin: 1.5rem 0;
        line-height: 1.2;
        background: linear-gradient(45deg, #fff, #b892ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .meta {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        margin-top: 2rem;
        color: #a0aec0;
    }

    .author-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.5rem;
    }

    .author {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        transition: transform 0.2s ease;
    }

    .author:hover {
        transform: translateY(-2px);
    }

    .author-image {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid #7130bd;
    }

    .author-name {
        font-weight: 500;
        color: #b892ff;
    }

    time {
        font-size: 0.9rem;
        color: #718096;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.8rem;
        justify-content: center;
    }

    .tag {
        background: #232323;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.9rem;
        color: #b892ff;
        transition: all 0.2s ease;
    }

    .tag:hover {
        background: #2d2d2d;
        transform: translateY(-2px);
    }

    .primary-tag {
        background: #7130bd;
        color: white;
    }

    .content {
        margin-top: 3rem;
        font-size: 1.1rem;
        line-height: 1.8;
    }

    .content :global(p) {
        margin-bottom: 1.8rem;
        color: #e0e0e0;
    }

    .content :global(h2) {
        margin: 2.5rem 0 1.5rem;
        font-size: 2rem;
        color: #ffffff;
    }

    .content :global(blockquote) {
        border-left: 4px solid #7130bd;
        margin: 2rem 0;
        padding: 1rem 2rem;
        background: #232323;
        border-radius: 0 12px 12px 0;
        color: #b8b8b8;
    }

    .content :global(pre) {
        background: #232323;
        padding: 1.5rem;
        border-radius: 8px;
        overflow-x: auto;
        margin: 2rem 0;
    }

    .content :global(a) {
        color: #b892ff;
        text-decoration: none;
        border-bottom: 1px solid transparent;
        transition: all 0.2s ease;
    }

    .content :global(a:hover) {
        border-bottom-color: #b892ff;
    }

    @media (max-width: 768px) {
        main {
            padding: 1rem;
        }

        .post {
            padding: 1rem;
        }

        .feature-image-container {
            margin: -1rem -1rem 1rem -1rem;
        }

        h1 {
            font-size: 2rem;
        }

        .content :global(h2) {
            font-size: 1.6rem;
        }
    }
</style>

