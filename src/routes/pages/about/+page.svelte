
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
    }
  
    .about-section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 2rem;
      margin-bottom: 3rem;
    }
  
    .about-text {
      font-size: 1.2rem;
      line-height: 1.8;
      color: #444;
    }
  
    .about-heading {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: #0077ff;
    }
  
    .about-image {
      text-align: center;
    }
  
    .about-image img {
      max-width: 100%;
      border-radius: 16px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
  
    .callout {
      margin-top: 1rem;
      font-style: italic;
      color: #666;
      font-size: 1rem;
    }
  
    .section-title {
      font-size: 2rem;
      margin-bottom: 1rem;
      color: #333;
      border-bottom: 2px solid #0077ff;
      display: inline-block;
    }
  
    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
    }
  
    .team-card {
      text-align: center;
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 8px;
      background-color: #f9f9f9;
      color: black;
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
    }
  
    .team-card p {
      font-size: 0.9rem;
      color: #666;
    }
  </style>



  
  <div class="about-container">
    <!-- About Section -->
    <div class="about-section">
      <div class="about-text">
        <h1 class="about-heading">About Cosmic Nxws</h1>
        <p>
          Cosmic Nxws is your gateway to exploring the limitless possibilities of the universe. 
          Our mission is to educate, inspire, and connect people who share a passion for space and STEM. 
          Whether you're here for cutting-edge news, innovative tools, or exciting space-themed projects, 
          we’ve built this platform to bring the cosmos closer to you.
        </p>
        <p>
          By combining expert insights, creative tools, and an engaged community, we aim to empower 
          the next generation of space enthusiasts and innovators. Our team is committed to creating 
          resources that spark curiosity and foster learning for all.
        </p>
        <p class="callout">
          “Ad astra per literas” – To the stars through learning.
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
          <img src="/teampage/Ctyler.jpg" alt="Founder 1" />
          <h3>Tyler</h3>
          <p>CEO</p>
        </div>
        <div class="team-card">
          <img src="/teampage/sthibault.jpg" alt="Founder 2" />
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
  
    <!-- Other Team Members -->
    <div class="section">
      <h2 class="section-title">Our Team</h2>
      <div class="team-grid">
        <div class="team-card">
          <img src="/team/member1.jpg" alt="Team Member 1" />
          <h3>Brie Archambault</h3>
          <p>Content Writer & Editor</p>
        </div>
        <div class="team-card">
          <img src="/team/member2.jpg" alt="Team Member 2" />
          <h3>na</h3>
          <p>Designer</p>
        </div>
        <div class="team-card">
          <img src="/team/member3.jpg" alt="Team Member 3" />
          <h3>na</h3>
          <p>na</p>
        </div>
        <div class="team-card">
          <img src="/team/member4.jpg" alt="Team Member 4" />
          <h3>na</h3>
          <p>Content Writer</p>

        </div>
      </div>
    </div>
  </div>
  
  

  <Footer />