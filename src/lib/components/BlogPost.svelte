<script>
    import { currentTopic } from '../stores/topicStore';
    export let post;

    $: visible = $currentTopic === 'all' || 
        post.tags?.some(tag => tag.slug === $currentTopic);
</script>

{#if visible}
    <a href="/{post.slug}" class="post-card">
        <div class="image-container">
            {#if post.feature_image}
                <img src={post.feature_image} alt={post.title} />
            {/if}
        </div>

        {#if post.tags && post.tags.length > 0}
            <div class="tags">
                {#each post.tags as tag}
                    <span class="tag">{tag.name}</span>
                {/each}
            </div>
        {/if}

        <div class="content">
            <h2>{post.title}</h2>
            <p class="excerpt">{post.excerpt}</p>

            <div class="meta">
                <div class="authors">
                    {#if post.authors && post.authors.length > 0}
                        <div class="author-list">
                            By:&nbsp;
                            {#each post.authors as author, i}
                                <span class="author">
                                    {author.name}{i < post.authors.length - 1 ? ', ' : ''}
                                </span>
                            {/each}
                        </div>
                    {/if}
                    <span class="date">{new Date(post.published_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}</span>
                </div>
            </div>
        </div>
    </a>
{/if}

<style>
.post-card {
    background: #1a1a1a;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    transition: all 0.3s ease;
    margin-bottom: 2rem;
    position: relative;
    display: block;
    text-decoration: none;
    cursor: pointer;
}

.post-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}

.image-container {
    width: 120%;
    height: 200px;
    overflow: hidden;
}

.post-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.post-card:hover img {
    transform: scale(1.05);
}

.tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    padding: 0.6rem 0.9rem;
    background: #1a1a1a;
}

.tag {
    background: #7130bd;
    color: #ffffff;
    padding: 0.3rem 0.8rem;
    border-radius: 6px;
    font-size: 0.8rem;
    transition: all 0.2s ease;
}

.tag:hover {
    background: #6846ff;
    color: #fff;
}

.content {
    padding: 0.8rem 1.8rem 1.8rem 1.8rem;
}

.content h2 {
    margin: 0;
    font-size: 1.6rem;
    color: #ffffff;
    font-weight: 700;
    line-height: 1.3;
}

.excerpt {
    color: #dddddd;
    line-height: 1.7;
    margin: 1rem 0 1.5rem 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.meta {
    display: flex;
    width: 100%;
    border-top: 1px solid #2d2d2d;
    padding-top: 1.2rem;
}

.authors {
    width: 100%;
    color: #cecece;
    font-size: 0.9rem;
    line-height: 1.5;
}

.author-list {
    margin-bottom: 0.5rem;
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
}

.author {
    color: #b892ff;
    font-weight: 500;
    transition: color 0.2s ease;
}

.author:hover {
    color: #d4b6ff;
}

.date {
    display: block;
    color: #c9c9c9;
}
</style>
