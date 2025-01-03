<script>
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import { browser } from '$app/environment';
    import { getTopics } from "$lib/api";
    import { currentTopic } from '$lib/stores/topicstore';

    let topics = [];
    let ghostAuthUrl = browser ? window.location.origin + '/ghost/#/signin' : '';
    let isLoggedIn = false;
    let isMoreDropdownVisible = false;
    let isMobileDropdownVisible = false;
    let isAccountDropdownVisible = false;
    let isTopicsDropdownVisible = false;
    let isTopicsVisible = false;
    let isMobile = false;
    let showBetaPopup = true;

    const checkScreenSize = () => {
        isMobile = window.innerWidth <= 768;
    };

    onMount(async () => {
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        isLoggedIn = !!localStorage.getItem('ghost-admin-api-session');
        topics = await getTopics();
    });

    const handleTopicSelect = (topic) => {
        $currentTopic = topic;
        if (window.location.pathname !== '/') {
            navigate('/');
        }
        isTopicsDropdownVisible = false;
        isMobileDropdownVisible = false;
        isTopicsVisible = false;
    };

    const toggleMoreDropdown = () => {
        isMoreDropdownVisible = !isMoreDropdownVisible;
        isAccountDropdownVisible = false;
        isTopicsDropdownVisible = false;
    };

    const toggleAccountDropdown = () => {
        isAccountDropdownVisible = !isAccountDropdownVisible;
        isMoreDropdownVisible = false;
        isTopicsDropdownVisible = false;
    };

    const toggleTopicsDropdown = () => {
        isTopicsDropdownVisible = !isTopicsDropdownVisible;
        isMoreDropdownVisible = false;
        isAccountDropdownVisible = false;
    };

    const toggleMobileDropdown = () => {
        isMobileDropdownVisible = !isMobileDropdownVisible;
        if (!isMobileDropdownVisible) {
            isTopicsVisible = false;
        }
    };

    const toggleMobileTopics = (event) => {
        event.stopPropagation();
        isTopicsVisible = !isTopicsVisible;
    };

    const navigate = (path) => {
        if (path === '/') {
            $currentTopic = 'all';
        }
        goto(path);
        isTopicsDropdownVisible = false;
        isMobileDropdownVisible = false;
    };

    const handleSignIn = () => {
        window.location.href = ghostAuthUrl;
    };

    const handleSignOut = () => {
        localStorage.removeItem('ghost-admin-api-session');
        isLoggedIn = false;
        window.location.reload();
    };
</script>



<header>
    <div class="logo" on:click={() => navigate('/')}>Cosmic Nxws</div>

    <nav>
        <a href="/launches">Launches</a>
        <a href="/aerospace">Aerospace</a>
        <a href="/exploration">Exploration</a>
        <a href="/stem">STEM</a>
        
        <div class="dropdown topics-dropdown">
            <button class="dropdown-button" on:click={toggleTopicsDropdown}>
                All Topics
            </button>
            {#if isTopicsDropdownVisible}
            <div class="dropdown-content">
                <button on:click={() => handleTopicSelect('all')}>All Topics</button>
                {#each topics as topic}
                    <button on:click={() => handleTopicSelect(topic.slug)}>{topic.name}</button>
                {/each}
            </div>
            {/if}
        </div>

        <div class="dropdown account-dropdown">
            <button class="dropdown-button account-button" on:click={toggleAccountDropdown}>
                {#if isLoggedIn}
                    <span class="account-icon">👤</span>
                {:else}
                    Sign In
                {/if}
            </button>
            {#if isAccountDropdownVisible}
                <div class="dropdown-content">
                    {#if isLoggedIn}
                        <a href="/account">My Account</a>
                        <a href="/account/settings">Settings</a>
                        <button class="sign-out-button" on:click={handleSignOut}>Sign Out</button>
                    {:else}
                        <button class="sign-in-button" on:click={handleSignIn}>Sign In</button>
                        <a href={`${ghostAuthUrl}/signup`}>Create Account</a>
                    {/if}
                </div>
            {/if}
        </div>

        <div class="dropdown">
            <button class="dropdown-button" on:click={toggleMoreDropdown}>More</button>
            {#if isMoreDropdownVisible}
                <div class="dropdown-content">
                    <a href="/pages/about">About CN</a>
                    <a href="https://store.cosmicnxws.com">CN Store</a>
                    <a href="/pages/jobs">CN Jobs</a>
                    <a href="/pages/labs">CN Labs</a>
                    <a href="/pages/advertise">Advertise</a>
                    <a href="/pages/privacy">Privacy Policy</a>
                    <a href="/pages/terms">Terms and Conditions</a>
                    <a href="/pages/contact">Contact us</a>
                </div>
            {/if}
        </div>
    </nav>

    <div class="mobile-menu" on:click={toggleMobileDropdown}>
        &#9776;
    </div>

    {#if isMobileDropdownVisible}
    <div class="mobile-dropdown">
        <a href="/launches">Launches</a>
        <a href="/aerospace">Aerospace</a>
        <a href="/exploration">Exploration</a>
        <a href="/stem">STEM</a>
        
        <button class="mobile-topics-toggle" on:click={() => isTopicsVisible = !isTopicsVisible}>
            All Topics {isTopicsVisible ? '▼' : '▶'}
        </button>
        
        {#if isTopicsVisible}
            <div class="mobile-topics">
                <button on:click={() => handleTopicSelect('all')}>All Topics</button>
                {#each topics as topic}
                    <button on:click={() => handleTopicSelect(topic.slug)}>{topic.name}</button>
                {/each}
            </div>
        {/if}
        
        <hr />
        <div class="account-section">
            {#if isLoggedIn}
                <a href="/account">My Account</a>
                <a href="/account/settings">Settings</a>
                <button class="sign-out-button" on:click={handleSignOut}>Sign Out</button>
            {:else}
                <button class="sign-in-button" on:click={handleSignIn}>Sign In</button>
                <a href={`${ghostAuthUrl}/signup`}>Create Account</a>
            {/if}
        </div>
        <hr />
        <a href="/pages/about">About CN</a>
        <a href="https://store.cosmicnxws.com">CN Store</a>
        <a href="/pages/jobs">CN Jobs</a>
        <a href="/pages/labs">CN Labs</a>
        <a href="/pages/advertise">Advertise</a>
        <a href="/pages/privacy">Privacy Policy</a>
        <a href="/pages/terms">Terms and Conditions</a>
        <a href="/pages/contact">Contact us</a>
    </div>
{/if}

</header>

{#if showBetaPopup}
    <div id="beta-popup" class="beta-popup" on:click={() => (showBetaPopup = false)}>
        Cosmicnxws.com is in Beta and may be buggy <span class="close-popup">×</span>
    </div>
{/if}

<style>
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
        height: 55px;
        background-color: #000;
        color: #fff;
        padding: 0 1.5rem;
        font-family: Arial, sans-serif;
    }

    .logo {
        font-size: 1.5rem;
        font-weight: bold;
        cursor: pointer;
    }

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
        border-color: #9b59b6;
        color: #9b59b6;
    }

    .dropdown {
        position: relative;
    }

    .topics-dropdown .dropdown-content {
        left: 0;
        right: auto;
    }

    .topics-dropdown .dropdown-content button {
        display: block;
        width: 100%;
        background: none;
        border: none;
        color: white;
        padding: 0.8rem;
        text-align: left;
        transition: background 0.3s;
        font-size: 0.9rem;
        cursor: pointer;
    }

    .topics-dropdown .dropdown-content button:hover {
        background-color: #444;
        color: #9b59b6;
    }

    .account-dropdown {
        margin-left: 1rem;
    }

    .account-button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .account-icon {
        font-size: 1.2rem;
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

    .dropdown-content a, 
    .sign-in-button, 
    .sign-out-button {
        display: block;
        width: 100%;
        background: none;
        border: none;
        color: white;
        padding: 0.8rem;
        text-align: left;
        text-decoration: none;
        transition: background 0.3s;
        font-size: 0.9rem;
        cursor: pointer;
    }

    .dropdown-content a:hover,
    .sign-in-button:hover,
    .sign-out-button:hover {
        background-color: #444;
    }

    .mobile-menu {
        display: none;
        cursor: pointer;
    }

   .mobile-topics-toggle {
    width: 100%;
    text-align: left;
    padding: 1rem;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
}


    .mobile-dropdown {
        position: absolute;
        top: 55px;
        left: 0;
        width: 100%;
        background-color: #222;
        z-index: 10;
    }

    .mobile-dropdown a,
    .mobile-dropdown button {
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

    .mobile-dropdown a:hover,
    .mobile-dropdown button:hover {
        background-color: #444;
    }

    .account-section {
        padding: 1rem 0;
    }

    hr {
        border: none;
        border-top: 1px solid #555;
        margin: 0;
    }

    @media (max-width: 768px) {
        nav {
            display: none;
        }

        .mobile-menu {
            display: block;
        }
    }

    .beta-popup {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #222;
        color: #fff;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        font-size: 0.9rem;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        cursor: pointer;
    }

    .beta-popup .close-popup {
        font-size: 1.2rem;
        cursor: pointer;
        color: #9b59b6;
    }

    .beta-popup:hover .close-popup {
        color: #e74c3c;
    }
</style>
