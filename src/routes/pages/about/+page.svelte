<Header />
<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<style>
  .about-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    color: #e0e0e0;
    font-family: 'Arial', sans-serif;
  }

  .about-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .about-heading {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #a749ff;
    font-weight: bold;
  }

  .about-text {
    font-size: 1.2rem;
    line-height: 1.8;
  }

  .callout {
    margin-top: 1rem;
    font-style: italic;
    color: #a749ff;
    font-size: 1rem;
    border-left: 4px solid #a749ff;
    padding-left: 10px;
  }

  .about-image {
    text-align: center;
  }

  .about-image img {
    max-width: 100%;
    border-radius: 16px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;
  }

  .about-image img:hover {
    transform: scale(1.05);
  }

  .section-title {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #8c00ff;
    font-weight: bold;
    border-bottom: 3px solid #ffae00;
    display: inline-block;
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }

  .team-card {
    text-align: center;
    padding: 1.5rem;
    border: 1px solid #444;
    border-radius: 12px;
    background-color: #1c1c1c;
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .team-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  }

  .team-card img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 0.5rem;
    object-fit: cover;
  }

  .team-card h3 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
    color: #8c00ff;
  }

  .team-card p {
    font-size: 0.9rem;
    color: #dadada;
  }

  /* Mobile Responsiveness */
  @media screen and (max-width: 768px) {
    .about-section {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .about-heading {
      font-size: 2rem;
    }

    .about-text {
      font-size: 1.1rem;
    }

    .team-grid {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1rem;
    }

    .section-title {
      font-size: 1.75rem;
    }

    .team-card img {
      width: 80px;
      height: 80px;
    }

    .team-card h3 {
      font-size: 1.1rem;
    }

    .team-card p {
      font-size: 0.8rem;
    }
  }
</style>

<div class="about-container">
  <!-- About Section -->
  <div class="about-section">
    <div class="about-text">
      <h1 class="about-heading">About Cosmic Nxws</h1>
      <p>
        Our mission is to educate, inspire, and connect any and all people who share a passion for space and STEM. 
        Whether you're here for the latest in space, innovative tools, or our space-themed projects, 
        we’ve built this platform to bring the cosmos closer to you.
      </p>
      <p>
        We’re determined to ignite curiosity and empower learning for everyone.
      </p>
      <p class="callout">
        “AD ASTRA PER SCIENTIA” – To the Stars Through Knowledge.
      </p>
    </div>
    <div class="about-image">
      <img src="/teampage/about.jpg" alt="Cosmic Nxws Team" />
    </div>
  </div>

  <!-- Founders Section -->
  <div class="section">
    <h2 class="section-title">Founders</h2>
    <div class="team-grid">
      <div class="team-card">
        <img src="https://cdn.bsky.app/img/avatar/plain/did:plc:r7zvmqorx24nuiafx6qga6jb/bafkreic2sf5umqn7dqyinwuajughsn6bcsbrfxdnmm5u7jfjx64w7lf2fy@jpeg" alt="Founder 1" />
        <h3>Tyler</h3>
        <p>CEO</p>
      </div>
      <div class="team-card">
        <img src="https://cdn.bsky.app/img/avatar/plain/did:plc:tchvwsx3ez3c3lkm32pfksrs/bafkreiggug5hpcczy5274tvjfsffbncreqhuthujuimnlrj7e2pabuhzrq@jpeg" alt="Founder 2" />
        <h3>Sam Thibault</h3>
        <p>CTO & Lead Developer</p>
      </div>
      <div class="team-card">
        <img src="/teampage/Jack.jpg" alt="Founder 3" />
        <h3>Jack C.</h3>
        <p>CCO & Editor</p>
      </div>
    </div>
  </div>

  <!-- Team Section -->
  <div class="section">
    <h2 class="section-title">Our Team</h2>
    <div class="team-grid">
      <div class="team-card">
        <img src="https://cdn.bsky.app/img/avatar/plain/did:plc:aab2hclrv7vqsm2ovm2ys5zn/bafkreib3uvgv7qylkawrnckawst4zz6mbek3j4wc4ego3tusae4eg3qtz4@jpeg" alt="Team Member 1" />
        <h3>Brie Archambault</h3>
        <p>Content Writer & Editor</p>
      </div>
      <div class="team-card">
        <img src="https://cosmic-nxws.ghost.io/content/images/2024/09/20240911_143104.jpg" alt="Team Member 2" />
        <h3>Seth G.</h3>
        <p>Content Writer</p>
      </div>
      <div class="team-card">
        <img src="https://cosmic-nxws.ghost.io/content/images/2024/08/spacex-released-high-quality-onboard-images-of-the-ship-in-v0-31b34o2l3moc1-1-1.webp" alt="Team Member 3" />
        <h3>Jeppe Kastrup</h3>
        <p>Content Writer</p>
      </div>
      <div class="team-card">
        <img src="https://i0.wp.com/www.secondchanceinc.org/wp-content/uploads/image69.jpg?fit=448%2C298&ssl=1" alt="Team Member 4" />
        <h3>This can be you 👀</h3>
        <p>Apply on the jobs page</p>
      </div>
    </div>
  </div>
</div>

<Footer />
