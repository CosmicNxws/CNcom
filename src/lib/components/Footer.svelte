<script>
    // Static footer, no dynamic logic needed for now.
  </script>
  
  <style>
    /* Reset default margins and padding */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  
    /* Footer container */
    footer {
      display: flex;
      color: white;
      height: 350px; /* Slightly taller for better proportion */
      width: 100%; /* Full width */
      font-family: Arial, sans-serif;
    }
  
    /* Left half: black background */
    .left-section {
      background-color: black;
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center; /* Center content vertically */
      padding: 2rem 3rem; /* Adjust padding for spacing */
    }
  
    /* Main text: Cosmic News LLC and tagline */
    .company-info {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  
    .logo-title {
      font-weight: bold;
      font-size: 1.3rem;
    }
  
    .tagline {
      font-size: 1rem;
      color: #9b59b6; /* Purple color for AD ASTRA PER LITERAS */
    }
  
    .copyright {
      font-size: 0.8rem;
      margin-top: 1rem;
    }
  
    /* Links section: General and Follow Us */
    .links {
      display: flex;
      gap: 3rem; /* Space between General and Follow Us */
    }
  
    .links div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  
    .links b {
      margin-bottom: 0.5rem;
    }
  
    .links a {
      color: white;
      text-decoration: none;
      font-size: 0.9rem;
    }
  
    .links a:hover {
      text-decoration: underline;
    }
  
    /* Right half: background image */
    .right-section {
      flex: 1;
      background: url('/foot.jpg') no-repeat center center;
      background-size: cover;
      position: relative;
    }
  
    /* Image Credit: Positioned on top of the image */
    .image-credit {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      font-size: 0.7rem;
      color: white;
      opacity: 0.8;
    }
  </style>
  
  <footer>
    <!-- Left Section: Black Background -->
    <div class="left-section">
      <!-- Company Info -->
      <div class="company-info">
        <div class="logo-title">Cosmic Nxws LLC</div>
        <div class="tagline">AD ASTRA PER LITERAS</div>
        <div class="copyright">© 2024 Cosmic Nxws LLC. All Rights Reserved</div>
      </div>
  
      <!-- Links: General and Follow Us -->
      <div class="links">
        <div>
          <b>General</b>
          <a href="#">About Cosmic Nxws</a>
          <a href="#">Advertise</a>
          <a href="#">Privacy Policy</a>
          <a href="#">The Team</a>
        </div>
  
        <div>
          <b>Follow us</b>
          <a href="#">Youtube</a>
          <a href="#">Bluesky</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </div>
  
    <!-- Right Section: Image Background -->
    <div class="right-section">
      <div class="image-credit">Image Credit ©SpaceX (Not affiliated)</div>
    </div>
  </footer>
  