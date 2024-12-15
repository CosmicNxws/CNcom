<script>
    export let post;
</script>

<article class="post-card">
    {#if post.feature_image}
        <img src={post.feature_image} alt={post.title} />
    {/if}
    <div class="content">
        <h2>{post.title}</h2>
        <p>{post.excerpt}</p>
        <a href="/{post.slug}">Read more</a>
    </div>
</article>

<style>
     .post-card {
        background: var(--card-bg);
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    }

    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    .content {
        padding: 1.5rem;
    }

    h2 {
        margin: 0 0 1rem 0;
    }

    a {
        display: inline-block;
        margin-top: 1rem;
        color: #3273dc;
        text-decoration: none;
    }
</style>
