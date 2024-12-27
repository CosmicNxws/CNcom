
<Header />

<script>
     import Header from '$lib/components/Header.svelte';
     import Footer from '$lib/components/Footer.svelte';

  </script>
  
  <section class="contact-us">
    <h1>Contact Us</h1>
  
    <!-- Google Form -->
    <div class="form-container">
      <h2>Reach Out via Google Form</h2>
      <iframe
        src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
        width="100%"
        height="500"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="Google Form"
      >Loading…</iframe>
    </div>
  
    <!-- Email -->
    <div class="contact-method">
      <h2>Email Us</h2>
      <p>
        You can email us directly at:
        <a href="mailto:your-email@example.com">Staff@cosmicxxws.com</a>
      </p>
    </div>
  
    <!-- Discord -->
    <div class="contact-method">
      <h2>Or Join Our Discord</h2>
      <p>
        Connect with us on Discord: <a href="https://discord.gg/" target="_blank">Join Here</a>
      </p>
    </div>
  </section>
  
  <style>
    .contact-us {
      font-family: Arial, sans-serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      line-height: 1.6;
    }
  
    .form-container {
      margin: 20px 0;
    }
  
    .contact-method {
      margin: 20px 0;
    }
  
    a {
      color: #007BFF;
      text-decoration: none;
    }
  
    a:hover {
      text-decoration: underline;
    }
  </style>
  

  <Footer />