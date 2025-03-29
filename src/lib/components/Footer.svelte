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






/* Existing styles remain the same until the media query */

/* Mobile responsiveness */
@media screen and (max-width: 768px) {
  footer {
    flex-direction: column;
    height: auto;
  }

  .left-section {
    flex-direction: column;
    padding: 2rem 1.5rem;
    gap: 2rem;
  }

  .company-info {
    text-align: center;
  }

  .links {
    width: 100%;
    justify-content: space-around;
    gap: 1rem;
  }

  .right-section {
    height: 200px; /* Shorter height for mobile */
  }


  .image-credit {
    display: none;
  }
}

/* For very small screens */
@media screen and (max-width: 480px) {
  .links {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
  }

  .links div {
    align-items: center;
  }
}
  </style>
  
  <footer>
    <div class="left-section">
      <div class="company-info">
        <div class="logo-title">This site is being deprecated</div>
        <div class="tagline">AD ASTRA PER SCIENTIA</div>
        <div class="copyright">© 2025 Cosmic Nxws LLC. </div>
      </div>

      <div class="links">
        <div>
          <b>General</b>
          <a href="/pages/about" data-sveltekit-preload>About CN</a>
          <a href="/pages/advertise" data-sveltekit-preload>Advertise</a>
          <a href="/pages/privacy" data-sveltekit-preload>Privacy Policy</a>
          <a href="/pages/team" data-sveltekit-preload>The Team</a>
        </div>

        <div>
          <b>Follow us</b>
          <a href="https://youtube.com" target="_blank" rel="noopener">Youtube</a>
          <a href="https://bsky.app" target="_blank" rel="noopener">Bluesky</a>
          <a href="https://twitter.com" target="_blank" rel="noopener">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener">Instagram</a>
        </div>
      </div>
    </div>

    <div class="right-section">
      <div class="image-credit">Image Credit ©SpaceX (Not affiliated)</div>
    </div>
</footer>

  





