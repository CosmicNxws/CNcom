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
        <h1>Page comming soon</h1>
        <p>This page is temporarily unavailable & will be ready soon.</p>
        <div class="progress-bar">
            <div class="progress"></div>
        </div>
        <a href="/" class="home-button">Return to Home</a>
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
