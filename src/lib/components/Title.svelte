<script>
    import { base } from '$app/paths';
  console.log("in play");
</script>

<div class="title-container">
  <div class="image-wrapper">
    <div class="image-glow"></div>
    <img class="image" src={`${base}/images/alec.png`} alt="Alec" />
  </div>
  <h1 class="title-bar">Alec Iberg</h1>
</div>

<style>
  .title-container {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 40px 0;
    padding: 40px 0;
  }

  .image-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }

  .image-glow {
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(139, 0, 0, 0.3) 0%, transparent 70%);
    animation: pulse-glow 3s ease-in-out infinite;
    z-index: 0;
  }

  @keyframes pulse-glow {
    0%, 100% {
      opacity: 0.5;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.1);
    }
  }

  .image {
    position: relative;
    height: 350px;
    width: 350px;
    border-radius: 50%;
    border: 5px solid #1a1a1a;
    box-shadow: 
      0 0 20px rgba(0, 0, 0, 0.8),
      0 0 40px rgba(139, 0, 0, 0.3),
      inset 0 0 30px rgba(0, 0, 0, 0.5);
    z-index: 1;
    filter: 
      grayscale(60%) 
      contrast(1.4) 
      brightness(0.7) 
      saturate(0.3)
      sepia(20%);
    transition: transform 0.3s ease, filter 0.3s ease;
  }

  .image:hover {
    transform: scale(1.05);
    filter: 
      grayscale(40%) 
      contrast(1.5) 
      brightness(0.75) 
      saturate(0.4)
      sepia(30%);
    box-shadow: 
      0 0 30px rgba(0, 0, 0, 0.9),
      0 0 60px rgba(139, 0, 0, 0.5),
      inset 0 0 40px rgba(0, 0, 0, 0.6);
  }

  .title-bar {
    color: #ffffff;
    font-size: 72px;
    font-family: 'UnifrakturMaguntia', cursive;
    text-shadow: 
      3px 3px 0px #000000,
      0 0 20px rgba(139, 0, 0, 0.5),
      0 0 40px rgba(139, 0, 0, 0.3);
    letter-spacing: 4px;
    margin: 0;
    text-align: center;
  }

  @media (max-width: 768px) {
    .image {
      height: 250px;
      width: 250px;
    }

    .image-glow {
      width: 300px;
      height: 300px;
    }

    .title-bar {
      font-size: 48px;
    }
  }
</style>
