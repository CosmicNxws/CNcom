<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<Header />

<main>
    <section class="hero">
        <h1>Advertise With Us</h1>
        <p class="subtitle">Reach a highly engaged audience passionate about space, science, and technology</p>
    </section>

    <section class="stats">
        <div class="stat-card">
            <h3>Monthly Views</h3>
            <span class="number">1000+</span>
        </div>
        <div class="stat-card">
            <h3>Newsletter Subscribers</h3>
            <span class="number">50+</span>
        </div>
        <div class="stat-card">
            <h3>Social Following</h3>
            <span class="number">5K+</span>
        </div>
    </section>

    <section class="packages">
        <h2>Advertising Packages</h2>
        <div class="package-grid">
            <div class="package-card">
                <h3>One week</h3>
                <p class="price">$10</p>
                <ul>
                    <li>Sidebar Ad</li>
                    <li>1 post with featured ad</li>
                </ul>
                <button>Get Started</button>
            </div>

            <div class="package-card featured">
                <div class="featured-tag">Most Popular</div>
                <h3>3 weeks</h3>
                <p class="price">$28</p>
                <ul>
                    <li>Premium Banner/sidebar Position</li>
                    <li>Newsletter Feature</li>
                    <li>3 posts with featured ad</li>
                </ul>
                <button>Get Started</button>
            </div>
        </div>
    </section>

    <section class="contact">
        <h2>Ready to Get Started?</h2>
        <p>Fill out the form below, and we'll get back to you within 24 hours!</p>
        <form
            action="https://docs.google.com/forms/d/e/1FAIpQLSeh36nqJmo0y2H0c4TOYwlxN1zwE59tFd6nZNgKGg0PH4SkIg/viewform"
            method="POST"
            target="_blank"
        >
            <div class="form-group">
                <input type="text" name="entry.123456" placeholder="Company Name" required />
                <input type="email" name="entry.789012" placeholder="Email Address" required />
            </div>
            <div class="form-group">
                <select name="entry.345678" required>
                    <option value="">Select Package</option>
                    <option value="One week">One week</option>
                    <option value="3 weeks">3 weeks</option>
                </select>
                <input type="text" name="entry.901234" placeholder="Budget Range" />
            </div>
            <textarea name="entry.567890" placeholder="Tell us about your goals" rows="4"></textarea>
            <button type="submit">Submit Request</button>
        </form>
    </section>
</main>

<Footer />

<style>
    main {
        background: #121212;
        color: #ffffff;
    }

    .hero {
        text-align: center;
        padding: 4rem 2rem;
        background: linear-gradient(45deg, #7130bd, #6846ff);
    }

    .hero h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    .subtitle {
        font-size: 1.2rem;
        color: rgba(255, 255, 255, 0.9);
    }

    .stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        padding: 4rem 2rem;
        background: #1a1a1a;
    }

    .stat-card {
        text-align: center;
        padding: 2rem;
        background: #232323;
        border-radius: 12px;
        transition: transform 0.3s ease;
    }

    .stat-card:hover {
        transform: translateY(-5px);
    }

    .number {
        font-size: 2.5rem;
        font-weight: bold;
        color: #b892ff;
    }

    .packages {
        padding: 4rem 2rem;
    }

    h2 {
        text-align: center;
        margin-bottom: 3rem;
    }

    .package-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        max-width: 1200px;
        margin: 0 auto;
    }

    .package-card {
        background: #1a1a1a;
        border-radius: 12px;
        padding: 2rem;
        text-align: center;
        position: relative;
        transition: all 0.3s ease;
    }

    .package-card:hover {
        transform: translateY(-5px);
    }

    .featured {
        border: 2px solid #7130bd;
    }

    .featured-tag {
        position: absolute;
        top: -15px;
        left: 50%;
        transform: translateX(-50%);
        background: #7130bd;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.9rem;
    }

    .price {
        font-size: 1.8rem;
        color: #b892ff;
        margin: 1rem 0;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 2rem 0;
    }

    li {
        margin: 0.8rem 0;
        color: #dddddd;
    }

    .contact {
        padding: 4rem 2rem;
        background: #1a1a1a;
        text-align: center;
    }

    form {
        max-width: 800px;
        margin: 2rem auto;
    }

    .form-group {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    input, select, textarea {
        width: 100%;
        padding: 0.8rem;
        background: #232323;
        border: 1px solid #333;
        border-radius: 6px;
        color: #ffffff;
        margin-bottom: 1rem;
    }

    textarea {
        resize: vertical;
    }

    button {
        background: #7130bd;
        color: #ffffff;
        border: none;
        padding: 1rem 2rem;
        border-radius: 6px;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    button:hover {
        background: #6846ff;
        transform: translateY(-2px);
    }

    @media (max-width: 768px) {
        .form-group {
            grid-template-columns: 1fr;
        }
    }
</style>
