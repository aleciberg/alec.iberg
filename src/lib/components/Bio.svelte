<script>
</script>

<div class="bio-text">
  <br />
  Hello, my name is <span class={"attention"}>Alec Iberg</span> and I am a Full
  Stack Developer.
  <br />
  <br />
  <div class="blinking-text">I am actively looking for new opportunities.</div>
  <br />
  I most recently worked at <a class="link" href="https://array.com">Array</a>, a FinTech company, as a Software Engineer II, on such products as Debt Manager, Offers Engine, and Subscription Manager.  
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
  <span class={"attention"}> Juniper.</span> She is a 4 year old Border Collie
  with unlimited energy.
  <br />
  <br />
</div>

<style>
  .bio-text {
    color: #eeeeee;
    font-size: 24px;
    margin: 20px;
    border-bottom: 3px solid rgba(118, 171, 174, 0.5);
    border-top: 3px solid rgba(118, 171, 174, 0.5);
  }
  .attention {
    color: #76abae;
  }
  .link {
    text-decoration: none;
    color: #76abae;
  }

  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
}

.blinking-text {
    color: #76abae;
    animation: blink 1.5s infinite;
    border: 2px solid #f1fa8c;
    text-align: center;
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

.pulsing-text {
    color: #76abae;
    animation: pulse 2s infinite;
}

@keyframes border-flash {
    0% { border-color: #76abae; }
    50% { border-color: white; }
    100% { border-color: #76abae; }
}

.highlighted-text {
    background-color: #222831;
    color: white;
    padding: 5px;
    border: 2px solid #76abae;
    animation: border-flash 2s infinite;
}

@keyframes underline-color-change {
    0% { text-decoration-color: #76abae; }
    50% { text-decoration-color: white; }
    100% { text-decoration-color: #76abae; }
}

.underline-color-change {
    color: white;
    text-decoration: underline;
    text-decoration-color: #76abae;
    animation: underline-color-change 2s infinite;
}
</style>
