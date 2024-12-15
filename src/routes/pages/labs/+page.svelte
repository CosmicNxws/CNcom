
<Header />

<script>
     import Header from '$lib/components/Header.svelte';
     import Footer from '$lib/components/Footer.svelte';

     


    let projects = [
      {
        title: "Nebulon AI Chatbot",
        description: "A Chatbot trained on verified data from the CosmicNxws website.",
        type: "Chatbot",
        image: "/projects/Nebulon.jpeg",  
        author: "Sam Thibault",
        lastUpdated: "12/15/24",
        releaseDate: "Unknown",
        projectLink: "#",  
        technologies: ["Python", "WebGL"],
        status: "In Progress",
        tags: ["Space", "Ai", "Chatbot"]
      },
      {
        title: " Star Finder ",
        description: "A simple interactive tool that lets you search for stars or constellations and displays information about them.",
        type: "Tool",
        image: "/projects/starfinder.jpeg",  
        author: "Sam Thibault",
        lastUpdated: "12/15/24",
        releaseDate: "Unknown",
        projectLink: "#",
        technologies: ["svelte", "javascript", "HTML"],
        status: "Not Started",
        tags: ["Space", "Astronomy", "Tool"]
      },
      {
        title: "CN Browser homepage",
        description: "an extention that replaces your existing homepge e.g Google.com with a custom space themed one, with tools and cool space features",
        type: "Tool",
        image: "/projects/browserhome.jpeg",  // Replace with your project image path
        author: "Sam Thibault",
        lastUpdated: "12/15/24",
        releaseDate: "March 12, 2025",
        projectLink: "#",
        technologies: ["Svelte"],
        status: "Not Started",
        tags: ["Engineering", "Simulation", "Tool"]
      }
    ];
  </script>
  
  <style>
    :global(body) {
      font-family: Arial, sans-serif;
      background-color: #111;
      color: white;
      margin: 0;
    }
  
    .page-container {
      padding: 3rem;
      text-align: center;
    }
  
    .projects-header {
      font-size: 3rem;
      margin-bottom: 2rem;
      color: #9b59b6;
    }
  
    .project-card-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 2rem;
      justify-items: center;
    }
  
    .project-card {
      background-color: #222;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
      width: 100%;
      max-width: 350px;
      text-align: left;
      transition: transform 0.3s, box-shadow 0.3s;
    }
  
    .project-card:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.5);
    }
  
    .project-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 8px;
    }
  
    .project-card h3 {
      color: #9b59b6;
      font-size: 1.8rem;
      margin-top: 1rem;
    }
  
    .project-card p {
      font-size: 1rem;
      margin: 1rem 0;
      color: #ccc;
    }
  
    .project-details {
      font-size: 0.9rem;
      color: #aaa;
      margin: 0.5rem 0;
    }
  
    .project-details span {
      color: #9b59b6;
    }
  
    .tags {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: 10px;
    }
  
    .tag {
      background-color: #9b59b6;
      color: white;
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 0.9rem;
    }
  
    .project-card a {
      color: #fff;
      text-decoration: none;
      background-color: #9b59b6;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      display: inline-block;
      margin-top: 1rem;
      transition: background-color 0.3s;
    }
  
    .project-card a:hover {
      background-color: #8e44ad;
    }
  </style>
  
  <div class="page-container">
    <h1 class="projects-header">CN Labs - Projects</h1>
    
    <div class="project-card-container">
      {#each projects as project}
        <div class="project-card">
          <img class="project-image" src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div class="project-details">
            <span>Author:</span> {project.author}
          </div>
          <div class="project-details">
            <span>Last Updated:</span> {project.lastUpdated}
          </div>
          <div class="project-details">
            <span>Release Date:</span> {project.releaseDate}
          </div>
          <div class="project-details">
            <span>Status:</span> <span style="color: {project.status === 'Completed' ? 'green' : 'orange'}">{project.status}</span>
          </div>
          <div class="tags">
            {#each project.tags as tag}
              <span class="tag">{tag}</span>
            {/each}
          </div>
          <a href={project.projectLink} target="_blank">Learn More</a>
        </div>
      {/each}
    </div>
  </div>
  

  <Footer />