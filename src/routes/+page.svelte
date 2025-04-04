<script>
    import BlogPost from '$lib/components/BlogPost.svelte';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';

    /** @type {import('./$types').PageData} */
    export let data;

    const POSTS_PER_LOAD = 20;
    let visiblePosts = POSTS_PER_LOAD;
    let selectedTopic = 'all';
    let showDeprecationNotice = true;

    $: filteredPosts = selectedTopic === 'all' 
        ? data.posts 
        : data.posts.filter(post => post.tags?.some(tag => tag.slug === selectedTopic));

    function loadMore() {
        visiblePosts += POSTS_PER_LOAD;
    }

    function dismissNotice() {
        showDeprecationNotice = false;
        // Optional: Store dismissal in localStorage
        if (typeof window !== 'undefined') {
            localStorage.setItem('deprecationNoticeDismissed', 'true');
        }
    }

    onMount(() => {
        // Check if user previously dismissed the notice
        if (typeof window !== 'undefined' && localStorage.getItem('deprecationNoticeDismissed')) {
            showDeprecationNotice = false;
        }
    });
</script>

<Header on:topicSelect={(e) => {
    selectedTopic = e.detail;
    visiblePosts = POSTS_PER_LOAD;
}} />

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
    <div class="posts-grid">
        {#each filteredPosts.slice(0, visiblePosts) as post}
            <BlogPost {post} />
        {/each}
    </div>
    {#if visiblePosts < filteredPosts.length}
        <button class="load-more" on:click={loadMore}>Load More</button>
    {/if}
</main>

<Footer />

<style>
    .deprecation-notice {
        background: linear-gradient(135deg, #1a1a2e, #16213e);
        border-left: 4px solid #f05454; /* Warning red */
        color: white;
        padding: 0.8rem 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 2px 15px rgba(0,0,0,0.3);
        position: sticky;
        top: 0;
        z-index: 1000;
    }

    .notice-content {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        font-size: 0.95rem;
    }

    .notice-icon {
        font-size: 1.4rem;
        animation: pulse 2s infinite;
    }

    .migration-link {
        color: #00f5d4; /* Cyber teal */
        text-decoration: underline;
        font-weight: bold;
        margin: 0 0.3rem;
    }

    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
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

    .close-button:hover {
        opacity: 0.8;
    }

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



<!-- Inactive code 
<script>
    import { onMount } from 'svelte';
    
    let stars = [];
    
    onMount(() => {
        stars = Array.from({ length: 400 }, () => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 2, // Bigger stars
            delay: Math.random() * 3
        }));
    });
  </script>
  
  <div class="construction-page">
    {#each stars as star}
        <div 
            class="star"
            style="
                left: {star.x}%;
                top: {star.y}%;
                width: {star.size}px;
                height: {star.size}px;
                animation-delay: {star.delay}s;
            "
        ></div>
    {/each}
    
    <div class="content">
        <div class="rocket">🚀</div>
        <h1>CosmicNxws will be back soon!</h1>
        <p>Our website is currently undergoing upgrades to serve you better.</p>
        <p>We’ll be back online shortly—thank you for your patience!</p>
        <div class="progress-bar">
            <div class="progress"></div>
        </div>
        <a href="https://www.instagram.com/cosmicnxws/" class="home-button">While you wail check out our Instagram!</a>
    </div>
  </div>
  
  <style>
    .construction-page {
    min-height: 100vh;
    background: linear-gradient(135deg, #000000, #0a0722, #060513);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
  }
  
  
    .star {
        position: fixed;
        background: #ffffff;
        border-radius: 50%;
        box-shadow: 
            0 0 4px #ffffff,
            0 0 8px #ffffff,
            0 0 12px #ffffff;
        animation: twinkle 4s infinite;
        z-index: 1;
    }
  
    .content {
        text-align: center;
        color: white;
        z-index: 2;
        padding: 2rem;
    }
  
    .rocket {
        font-size: 5rem;
        margin-bottom: 1rem;
        animation: float 3s infinite ease-in-out;
    }
  
    h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
        background: linear-gradient(45deg, #fff, #7b68ee);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
  
    p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
        color: #b8b8b8;
    }
  
    .progress-bar {
        width: 300px;
        height: 4px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 2px;
        margin: 2rem auto;
        overflow: hidden;
    }
  
    .progress {
        height: 100%;
        background: linear-gradient(90deg, #7b68ee, #3498db);
        animation: progress 2s infinite ease-in-out;
    }
  
    .home-button {
        display: inline-block;
        padding: 0.8rem 2rem;
        background: linear-gradient(45deg, #7b68ee, #3498db);
        color: white;
        text-decoration: none;
        border-radius: 25px;
        font-weight: bold;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
  
    .home-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(123, 104, 238, 0.4);
    }
  
    @keyframes twinkle {
        0%, 100% { opacity: 0.2; transform: scale(0.8); }
        50% { opacity: 1; transform: scale(1.2); }
    }
  
    @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
    }
  
    @keyframes progress {
        0% { width: 0%; }
        50% { width: 70%; }
        100% { width: 100%; }
    }
  
    @media (max-width: 768px) {
        h1 {
            font-size: 2rem;
        }
  
        p {
            font-size: 1rem;
        }
  
        .rocket {
            font-size: 3rem;
        }
  
        .progress-bar {
            width: 250px;
        }
    }
  </style>
-->



