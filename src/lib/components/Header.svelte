<script>
    import { onMount } from "svelte";
    import { goto } from "$app/navigation"; // SvelteKit navigation helper
  
    // State for dropdown visibility
    let isMoreDropdownVisible = false;
    let isMobileDropdownVisible = false;
  
    let isMobile = false;
  
    // Check for screen size
    const checkScreenSize = () => {
      isMobile = window.innerWidth <= 768; // Adjust breakpoint if needed
    };
  
    onMount(() => {
      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);
    });
  
    // Toggle dropdowns
    const toggleMoreDropdown = () => {
      isMoreDropdownVisible = !isMoreDropdownVisible;
    };
  
    const toggleMobileDropdown = () => {
      isMobileDropdownVisible = !isMobileDropdownVisible;
    };
  
    // Navigation helper for buttons
    const navigate = (path) => {
      goto(path); // Navigate to the given route
    };
  </script>
  
  <style>
    /* General Reset */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 70px;
      background-color: #000;
      color: #fff;
      padding: 0 1.5rem;
      font-family: Arial, sans-serif;
    }
  
    /* Logo */
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      cursor: pointer;
    }
  
    /* Desktop Navigation */
    nav {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  
    nav a, .dropdown-button {
      text-decoration: none;
      background: none;
      border: 1px solid transparent;
      color: white;
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }
  
    nav a:hover, .dropdown-button:hover {
      border-color: #9b59b6; /* Purple hover effect */
      color: #9b59b6;
    }
  
    /* Dropdown Styles */
    .dropdown {
      position: relative;
    }
  
    .dropdown-content {
      position: absolute;
      top: 2.5rem;
      right: 0;
      background-color: #222;
      color: white;
      border: 1px solid #333;
      border-radius: 4px;
      min-width: 150px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      z-index: 10;
    }
  
    .dropdown-content a {
      display: block;
      width: 100%;
      background: none;
      border: none;
      color: white;
      padding: 0.8rem;
      text-align: left;
      text-decoration: none;
      transition: background 0.3s;
    }
  
    .dropdown-content a:hover {
      background-color: #444;
    }
  
    /* Mobile Menu */
    .mobile-menu {
      display: none; /* Hidden by default */
      cursor: pointer;
    }
  
    .mobile-dropdown {
      position: absolute;
      top: 70px;
      left: 0;
      width: 100%;
      background-color: #222;
      z-index: 10;
    }
  
    .mobile-dropdown a {
      display: block;
      width: 100%;
      color: white;
      background: none;
      border: none;
      padding: 1rem;
      text-align: left;
      text-decoration: none;
      transition: background 0.3s;
    }
  
    .mobile-dropdown a:hover {
      background-color: #444;
    }
  
    hr {
      border: none;
      border-top: 1px solid #555;
      margin: 0;
    }
  
    /* Responsive */
    @media (max-width: 768px) {
      nav {
        display: none; /* Hide desktop nav on mobile */
      }
  
      .mobile-menu {
        display: block; /* Show mobile menu */
      }
    }
  </style>
  
  <header>
    <!-- Logo -->
    <div class="logo" on:click={() => navigate('/')}>Cosmic Nxws</div>
  
    <!-- Desktop Navigation -->
    <nav>
        <a href="/launches">Launches</a>
        <a href="/technology">Advanced Tech</a>
        <a href="/sstronomy">Astronomy</a>
        <a href="/aerospace">Aerospace</a>
        <a href="/international">International</a>
  
      <!-- More Dropdown -->
      <div class="dropdown">
        <button class="dropdown-button" on:click={toggleMoreDropdown}>More</button>
        {#if isMoreDropdownVisible}
          <div class="dropdown-content">
            <a href="/pages/about">About CN</a>
            <a href="https://store.cosmicnxws.com">CN Store</a>
            <a href="/pages/jobs">CN Jobs</a>
            <a href="/pages/labs">CN Labs</a>
            <a href="/pages/privacy">Privacy & Terms</a>
            <a href="/pages/contact">Contact us</a>
          </div>
        {/if}
      </div>
    </nav>
  
    <!-- Mobile Menu Icon -->
    <div class="mobile-menu" on:click={toggleMobileDropdown}>
      &#9776; <!-- Hamburger Icon -->
    </div>
  
    <!-- Mobile Dropdown -->
    {#if isMobileDropdownVisible}
      <div class="mobile-dropdown">
        <a href="/"></a>
        <a href="/news">Launches</a>
        <a href="/technology">Advanced Tech</a>
        <a href="/space">Astronomy</a>
        <a href="/opinion">Aerospace</a>
        <a href="/about">International</a>
        <hr />
        <a href="/contact">About CN</a>
        <a href="/advertise">CN Store</a>
        <a href="/careers">CN Jobs</a>
        <a href="/privacy">Privacy & Terms</a>
        <a href="/terms">Contact us</a>
      </div>
    {/if}
  </header>
  