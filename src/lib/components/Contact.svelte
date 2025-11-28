<script>
  import Typewriter from "svelte-typewriter";
</script>

<div class={"contact-container"}>
  <Typewriter mode="cascade" interval={100}>
    <h2 class="written-line">
      Check out my <a
        class="link"
        href="https://github.com/aleciberg"
        target="_blank">GitHub</a
      >
    </h2>
    <h2 class="written-line">
      Check out my <a
        class="link"
        href="https://linkedin.com/in/aleciberg"
        target="_blank"
      >
        LinkedIn
      </a>
    </h2>
    <h2 class="written-line">
      Email Me <a
        class="link"
        href="mailto: ibergalec@icloud.com"
        target="_blank">Here</a
      >
    </h2>
  </Typewriter>
</div>

<style>
  .contact-container {
    text-align: center;
    min-height: 30vh;
    padding: 60px 20px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(26, 26, 26, 0.3));
    border-top: 4px solid #1a1a1a;
  }

  .written-line {
    color: #ffffff;
    padding: 25px;
    font-family: 'MedievalSharp', cursive;
    font-size: 24px;
    text-shadow: 
      2px 2px 4px rgba(0, 0, 0, 0.9),
      0 0 15px rgba(139, 0, 0, 0.5);
  }

  .link {
    color: #ffffff;
    text-decoration: none;
    text-shadow: 
      0 0 10px rgba(139, 0, 0, 0.8),
      2px 2px 4px rgba(0, 0, 0, 0.9);
    transition: text-shadow 0.3s ease;
    border-bottom: 2px solid transparent;
  }

  .link:hover {
    text-shadow: 
      0 0 20px rgba(139, 0, 0, 1),
      0 0 30px rgba(139, 0, 0, 0.6),
      2px 2px 4px rgba(0, 0, 0, 0.9);
    border-bottom-color: #8b0000;
  }
</style>
