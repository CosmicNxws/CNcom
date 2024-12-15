<script>
    // Optional: Additional logic can be added here if needed
  </script>
  
  <style>
    /* Use Rubik 80s Fade font */
    :global(body) {
      margin: 0;
      padding: 0;
      background-color: #111;
      color: #fff;
      font-family: "Arial", sans-serif;
      text-align: center;
    }
  
    .error-container {
      padding: 3rem 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
    }
  
    /* Apply Rubik 80s Fade to the Error Code */
    .error-code {
      font-family: "Rubik 80s Fade", system-ui, sans-serif;
      font-weight: 400;
      font-size: 6rem;
      color: #ffffff; /* Purple */
      text-shadow: 2px 2px 0px #c300ff, 4px 4px 0px #a216ff;
    }
  
    .error-title {
      font-size: 2rem;
      margin-top: 1rem;
    }
  
    .error-message {
      font-size: 1.25rem;
      max-width: 600px;
      margin: 1rem auto;
      line-height: 1.6;
    }
  
    .error-info {
      margin-top: 1.5rem;
      color: #e74c3c; /* Light red */
      font-weight: bold;
      font-size: 0.9rem;
    }
  </style>

<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Rubik+80s+Fade&display=swap" rel="stylesheet">
  </head>
  
  
  
  <div class="error-container">
    <div class="error-code">500</div>
    <div class="error-title">Houston, we have a problem.</div>
    <div class="error-message">
      An unknown Internal Error has occurred and the website was unable to establish a connection with the server.
    </div>
    <div class="error-info">
      Please report this issue to a Staff member
    </div>
  </div>
  