<script>
    let formOpen = false;
    let selectedPosition = '';
    
    // Function to open the form for the selected position
    function openForm(position) {
      selectedPosition = position;
      formOpen = true;
    }
  
    // Function to close the application form
    function closeForm() {
      formOpen = false;
      selectedPosition = '';
    }
  
    const jobPositions = [
      { id: 1, title: "Space Engineer" },
      { id: 2, title: "Data Scientist" },
      { id: 3, title: "Astrophysicist" },
    ];
  </script>
  
  <main class="jobs-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Join Our Team</h1>
        <p>We’re looking for passionate individuals who share our love for space, science, and technology!</p>
      </div>
    </section>
  
    <!-- Available Positions -->
    <section class="positions">
      <h2>Available Positions</h2>
      <div class="position-list">
        {#each jobPositions as { id, title }}
          <div class="position-card">
            <h3>{title}</h3>
            <p class="description">Excited to work on cutting-edge projects in the world of space and technology?</p>
            <button class="apply-btn" on:click={() => openForm(title)}>Apply Now</button>
          </div>
        {/each}
      </div>
    </section>
  
    <!-- Application Form (Popup) -->
    {#if formOpen}
      <section class="application-form">
        <div class="form-container">
          <h3>Apply for {selectedPosition}</h3>
          <form action="https://formspree.io/f/{your_form_endpoint}" method="POST">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
  
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="Your Email Address" required />
            </div>
  
            <div class="form-group">
              <label for="position">Position Applied For</label>
              <input type="text" id="position" name="position" value={selectedPosition} readonly />
            </div>
  
            <div class="form-group">
              <label for="resume">Upload Resume</label>
              <input type="file" id="resume" name="resume" required />
            </div>
  
            <div class="form-group">
              <label for="message">Why are you a great fit?</label>
              <textarea id="message" name="message" placeholder="Tell us about yourself..." rows="4" required></textarea>
            </div>
  
            <button type="submit" class="submit-btn">Submit Application</button>
            <button type="button" class="cancel-btn" on:click={closeForm}>Cancel</button>
          </form>
        </div>
      </section>
    {/if}
  </main>
  
  <style>
    body {
      background-color: #121212;
      color: #ffffff;
      font-family: 'Arial', sans-serif;
    }
  
    .jobs-page {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
  
    /* Hero Section */
    .hero {
      background-color: #1a1a1a;
      padding: 40px;
      text-align: center;
      border-radius: 12px;
    }
  
    .hero-content h1 {
      font-size: 3rem;
      margin-bottom: 10px;
    }
  
    .hero-content p {
      font-size: 1.2rem;
      color: #bbb;
    }
  
    /* Positions Section */
    .positions {
      margin-top: 40px;
    }
  
    .positions h2 {
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 20px;
    }
  
    .position-list {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }
  
    .position-card {
      background: #232323;
      padding: 20px;
      border-radius: 12px;
      text-align: center;
      width: 250px;
      transition: transform 0.3s ease;
    }
  
    .position-card:hover {
      transform: translateY(-5px);
    }
  
    .position-card h3 {
      font-size: 1.8rem;
      margin-bottom: 10px;
    }
  
    .description {
      font-size: 1rem;
      color: #888;
      margin-bottom: 20px;
    }
  
    .apply-btn {
      background-color: #7130bd;
      color: white;
      border: none;
      padding: 10px 20px;
      font-size: 1.2rem;
      cursor: pointer;
      border-radius: 6px;
      transition: all 0.3s ease;
    }
  
    .apply-btn:hover {
      background-color: #6846ff;
    }
  
    /* Application Form (Popup) */
    .application-form {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
  
    .form-container {
      background: #1a1a1a;
      padding: 40px;
      border-radius: 12px;
      max-width: 600px;
      width: 100%;
      text-align: center;
    }
  
    .form-group {
      margin-bottom: 20px;
    }
  
    label {
      font-size: 1.2rem;
      margin-bottom: 5px;
      display: block;
      color: #ddd;
    }
  
    input, textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid #333;
      border-radius: 6px;
      background-color: #232323;
      color: #fff;
      font-size: 1rem;
    }
  
    input[type="file"] {
      background-color: #121212;
      border: 1px solid #555;
    }
  
    textarea {
      resize: vertical;
      height: 150px;
    }
  
    .submit-btn {
      background-color: #7130bd;
      color: white;
      padding: 15px 30px;
      border: none;
      font-size: 1.2rem;
      cursor: pointer;
      border-radius: 6px;
      transition: all 0.3s ease;
    }
  
    .submit-btn:hover {
      background-color: #6846ff;
    }
  
    .cancel-btn {
      background-color: #444;
      color: white;
      padding: 10px 20px;
      border: none;
      font-size: 1rem;
      cursor: pointer;
      border-radius: 6px;
      transition: all 0.3s ease;
    }
  
    .cancel-btn:hover {
      background-color: #666;
    }
  
  </style>
  