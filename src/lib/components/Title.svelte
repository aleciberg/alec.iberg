<script>
    import { base } from '$app/paths';
  console.log("in play");
</script>

<div>
  <div class="image-container">
    <img class="image" src={`${base}/images/alec.png`} alt="Alec" />
  </div>
  <h1 class="title-bar">Alec Iberg</h1>
</div>

<style>
  .title-bar {
    color: #76abae;
    font-size: 48px;
  }
  .image {
    height: 200px;
    width: 200px;
    border-radius: 100px;
  }
</style>
