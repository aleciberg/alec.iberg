<script>
</script>

<div class="bio-text">
  <br />
  Hello, my name is <span class={"attention"}>Alec Iberg.</span>
  <br />
  <br />
  I am a Full Stack Software Engineer, currently working at <a href="https://immuta.com">Immuta</a> to advance the future of Data Provisioning.  
  <br />
  <br />
  {" "}
  As for my personal life, I really enjoy the{" "}
  <span class="attention">outdoors</span>- you can usually find me camping,
  hiking, or backpacking on a weekend. I am fortunate enough to
  <span class="target"> live in Portland</span> and be surrounded by some of our
  nation's best outdoor beauty.{" "}
  <span class={"attention"}>Mount Hood</span> is probably my favorite.
  Additionally, I am a huge College Football fan (GO BUCKEYES!), a big hockey
  fan, and I very much enjoy spending time with my dog,
  <span class={"attention"}> Juniper.</span> She is a 5 year old Border Collie
  with unlimited energy.
  <br />
  <br />
</div>

<style>
  .bio-text {
    color: #e0e0e0;
    font-size: 24px;
    font-family: 'MedievalSharp', cursive;
    margin: 40px;
    padding: 30px;
    border-bottom: 4px solid #1a1a1a;
    border-top: 4px solid #1a1a1a;
    background: linear-gradient(to bottom, rgba(26, 26, 26, 0.3), rgba(0, 0, 0, 0.3));
    box-shadow: 
      inset 0 0 30px rgba(0, 0, 0, 0.5),
      0 0 20px rgba(0, 0, 0, 0.3);
    line-height: 1.8;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  }
  .attention {
    color: #ffffff;
    font-weight: bold;
    text-shadow: 
      0 0 10px rgba(139, 0, 0, 0.5),
      2px 2px 4px rgba(0, 0, 0, 0.9);
  }
  .link {
    text-decoration: none;
    color: #ffffff;
    text-shadow: 0 0 10px rgba(139, 0, 0, 0.5);
  }

  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0.3; }
    100% { opacity: 1; }
}

.blinking-text {
    color: #ffffff;
    animation: blink 2s infinite;
    border: 2px solid #8b0000;
    text-align: center;
    text-shadow: 0 0 10px rgba(139, 0, 0, 0.8);
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

.pulsing-text {
    color: #ffffff;
    animation: pulse 3s infinite;
    text-shadow: 0 0 15px rgba(139, 0, 0, 0.6);
}

@keyframes border-flash {
    0% { border-color: #1a1a1a; }
    50% { border-color: #8b0000; }
    100% { border-color: #1a1a1a; }
}

.highlighted-text {
    background-color: #0a0a0a;
    color: #ffffff;
    padding: 5px;
    border: 2px solid #8b0000;
    animation: border-flash 3s infinite;
    text-shadow: 0 0 10px rgba(139, 0, 0, 0.5);
}

@keyframes underline-color-change {
    0% { text-decoration-color: #ffffff; }
    50% { text-decoration-color: #8b0000; }
    100% { text-decoration-color: #ffffff; }
}

.underline-color-change {
    color: #ffffff;
    text-decoration: underline;
    text-decoration-color: #ffffff;
    animation: underline-color-change 3s infinite;
    text-shadow: 0 0 10px rgba(139, 0, 0, 0.5);
}
</style>
