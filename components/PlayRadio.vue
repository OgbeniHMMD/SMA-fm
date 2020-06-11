<template>
  <section class="d-flex justify-content-center align-items-center min-vh-100 m-0 my-auto">
    <div class="container p-4 p-md-5 text-center">
      <h1 class="title">SMA FM</h1>

      <audio id="player" src="http://192.99.170.8:5034/listen.mp3"></audio>

      <div class="border my-5 p-5">
        <button
          class="btn btn-lg btn-primary rounded-pill"
          onclick="document.getElementById('player').play()"
        >Play</button>
        <button
          class="btn btn-lg btn-primary rounded-pill"
          onclick="document.getElementById('player').pause()"
        >Pause</button>
        <button
          class="btn btn-lg btn-primary"
          onclick="document.getElementById('player').volume += 0.1"
        >Vol +</button>
        <button
          class="btn btn btn-primary"
          onclick="document.getElementById('player').volume -= 0.1"
        >Vol -</button>
      </div>

      <div>
        <h2 class="subtitle">104.7FM &mdash; Your Learning Frequency!</h2>
      </div>
    </div>
  </section>
</template>