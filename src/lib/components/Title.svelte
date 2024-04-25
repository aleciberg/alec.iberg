<script>
    import { base } from '$app/paths';
  console.log("in play");
</script>

<div class="title-container">
  <div class="image-container">
    <img class="image" src={`${base}/images/alec.png`} alt="Alec" />
  </div>
  <h1 class="title-bar">Alec Iberg</h1>
</div>

<style>
  .title-container {
    width: 60vw;
    display: flex;
    align-items: center;
    margin: 10px;
  }
  .title-bar {
    color: #76abae;
    font-size: 48px;
    margin-left: 30px;
  }
  .image {
    height: 200px;
    width: 200px;
    border-radius: 100px;
  }
</style>
