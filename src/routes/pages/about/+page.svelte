
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
  color: #dadada;
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
  color: #a749ff;
  font-size: 1rem;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #e0e0e0;
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
  color: #1b1b1b;
}

/* Mobile Responsiveness */
@media screen and (max-width: 768px) {
  .about-container {
    padding: 1rem;
  }

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
    text-align: center;
    display: block;
  }

  .team-card {
    padding: 0.75rem;
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

/* Small Mobile Devices */
@media screen and (max-width: 480px) {
  .team-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}

  </style>



  
  <div class="about-container">
    <!-- About Section -->
    <div class="about-section">
      <div class="about-text">
        <h1 class="about-heading">About Cosmic Nxws</h1>
        <p>
          Our mission is to educate, inspire, and connect people who share a passion for space and STEM. 
          Whether you're here for the latest in space, innovative tools, or our space-themed projects, 
          we’ve built this platform to bring the cosmos closer to you.
        </p>
        <p>
          We’re determined to ignite curiosity and empower learning for everyone.



          
        </p>
        <p class="callout">
          “AD ASTRA PER SEIENTA” – To the Stars Through Knowledge.
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