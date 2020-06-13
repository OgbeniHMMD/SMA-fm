<template>
  <section class="bg-white d-flex justify-content-center align-items-center min-vh-100 m-0 my-auto">
    <audio id="player" :src="radio.url"></audio>

    <div
      class="bg-primary col-11 col-md-9 border rounded-lg shadow p-3 p-md-4 p-lg-5"
      style="background: url(http://www.radionigerialive.com/listen/123ertf/radiong_pp_2fd25dbbe6d6b5bdbca7636d9aa67298.png)"
    >
      <div class="d-flex align-items-center justify-content-between">
        <a @click="playOrPause(!radioStatus)" class="text-warning" title="play / stop">
          <b-icon-play-fill
            v-if="radio.status"
            font-scale="5"
            class="border border-warning rounded-lg"
          ></b-icon-play-fill>
          <b-icon-stop-fill v-else font-scale="5" class="border border-warning rounded-lg"></b-icon-stop-fill>
        </a>

        <div class="bg-primary border rounded shadow p-3">
          <img src="https://smafmonline.com/tmp/images/default.png" width="100" />
        </div>
      </div>

      <div class="d-flex align-items-center text-light mt-4">
        <b-icon-speaker variant="light" animation="throb" font-scale="3"></b-icon-speaker>
        <div class="d-flex flex-column text-monospace">
          <div class="ml-2 font-weight-bold">Now playing:</div>
          <div class="ml-2">Naija Go Sweet Again By Lagbaja</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      radio: {
        status: true,
        //url: "/test.mp3",
        url: "http://192.99.170.8:5034/listen.mp3"
      }
    };
  },

  methods: {
    playOrPause: function() {
      if (this.radio.status) {
        document.getElementById("player").play();
      } else {
        document.getElementById("player").pause();
      }

      this.radio.status = !this.radio.status;
    }
  }
};
</script>