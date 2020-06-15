<template>
  <section
    class="bg-primary d-flex flex-column justify-content-center align-items-center min-vh-100 m-0 my-auto"
    style="background: url(http://www.radionigerialive.com/listen/123ertf/radiong_pp_2fd25dbbe6d6b5bdbca7636d9aa67298.png)"
  >
    <audio id="player" :src="radio.url"></audio>

    <div
      class="bg-primary col-11 col-md-10 col-lg-8 border border-lg shadow-lg p-2 p-md-4"
      style="background-image: url('https://www.transparenttextures.com/patterns/otis-redding.png')"
    >
      <div class="d-flex align-items-center text-light">
        <div class="bg-primary d-flex flex-column flex-md-row w-100 border rounded shadow m-0 mb-4">
          <div
            class="col-12 col-md-3 d-flex flex-md-column text-monospace text-left p-2 p-md-3 mr-4"
          >
            <div class="font-weight-bold text-warning">104.7 MHz</div>
            <div class="ml-auto ml-md-0">S.M.A FM</div>
          </div>

          <div class="col text-light text-md-right p-2 p-md-3">
            <div class="d-flex align-items-center">
              <div class="d-flex flex-column text-monospace w-100 p-0">
                <div class="font-weight-bold">{{ radio.status.split('/')[0] }}</div>
                <div class="text-nowrap overflow-hidden">{{ radio.status.split('/')[1] }}</div>
              </div>
              <a @click="togglePlay(radio.toggle)" class="d-none d-sm-inline">
                <b-icon
                  :icon="radio.toggle ? 'toggle-on' : 'toggle-off'"
                  variant="light"
                  font-scale="3"
                  class="ml-md-3"
                ></b-icon>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        id="speaker"
        class="bg-primary border rounded-lg text-center shadow p-4"
        style="background-image: url('https://www.transparenttextures.com/patterns/bo-play.png')"
      >
        <div class="p-4">
          <div class="d-flex flex-column justify-content-between text-white p-4">
            <a @click="togglePlay(radio.toggle)" class="text-white" title="ON / OFF">
              <b-icon
                :icon="radio.toggle ? 'volume-mute-fill' : 'play-fill'"
                animation="throb"
                font-scale="7"
              ></b-icon>
            </a>
          </div>
        </div>
      </div>

      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-center text-light"
      >
        <div class="mt-2 text-monospace">
          <b-icon-phone class="mr1"></b-icon-phone>
          <span>+234 818 8881 067</span>

          <b-icon-phone class="mx-"></b-icon-phone>
          <span>+234 909 1111 049</span>
        </div>
        <div class="mt-2">
          <a href="#" class="mx-2 text-light" title="Twitter">
            <b-icon-link45deg font-scale="2"></b-icon-link45deg>
          </a>
          <a href="#" class="mx-2 text-light" title="Facebok">
            <b-icon-droplet-half font-scale="2"></b-icon-droplet-half>
          </a>
          <a href="#" class="mx-2 text-light" title="Github">
            <b-icon-link45deg font-scale="2"></b-icon-link45deg>
          </a>
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
        toggle: false,
        //url: "/test.mp3",
        url: "http://192.99.170.8:5034/listen.mp3",
        status: "OFF/Press play"
      }
    };
  },

  methods: {
    togglePlay: function() {
      const player = document.getElementById("player");

      if (this.radio.toggle) {
        player.pause();
        this.radio.status = "OFF/Press play";
      } else {
        player
          .play()
          .then(() => {
            this.radio.status = "On Air/Gbarada by Yemi Shodimu";
          })
          .catch(() => {
            this.radio.status = "Opps!/ It seems we are Offline";
          });
      }

      //toggle pause /play
      this.radio.toggle = !player.paused;
    }
  }
};
</script>:

<style lang="scss">
* {
  //outline: 1px solid red;
}
</style>