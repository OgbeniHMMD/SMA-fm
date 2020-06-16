<template>
  <section
    class="bg-primary d-flex flex-column justify-content-center align-items-center min-vh-100 m-0 my-auto"
    style="background: url(http://www.radionigerialive.com/listen/123ertf/radiong_pp_2fd25dbbe6d6b5bdbca7636d9aa67298.png)"
  >
    <audio
      ref="player"
      :src="radioUrl"
      @pause="eventPause"
      @ended="eventOffline"
      @onerror="eventOffline"
      @waiting="eventWaiting"
      @playing="eventPlaying"
    ></audio>

    <div
      id="radio"
      class="bg-primary col-12 col-md-10 col-lg-8 shadow-lg p-md-4 p-0 border"
      style="background-image: url('https://www.transparenttextures.com/patterns/otis-redding.png')"
    >
      <div class="d-flex align-items-center text-light">
        <div
          class="bg-dark d-flex flex-column flex-md-row w-100 border rounded shadow m-0 mb-4"
          style="background-image: url('https://www.transparenttextures.com/patterns/black-mamba.png')"
        >
          <div
            class="col-12 col-md-3 d-flex flex-md-column text-monospace text-left p-2 p-md-3 mr-4"
          >
            <div class="font-weight-bold text-warning">104.7 MHz</div>
            <div class="ml-auto ml-md-0">S.M.A FM</div>
          </div>

          <div class="col text-light text-md-right p-2 p-md-3">
            <div class="d-flex align-items-center">
              <div class="d-flex flex-column text-monospace w-100 p-0">
                <div class="font-weight-bold">{{ radioStatus.split('/')[0] }}</div>
                <div class="text-nowrap overflow-hidden">{{ radioStatus.split('/')[1] }}</div>
              </div>

              <a @click="toggleSwitch()">
                <b-icon
                  :icon="radioToggle ? 'toggle-on' : 'toggle-off'"
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
        class="bg-dark border rounded-lg text-center shadow p-4"
        style="background-image: url('https://www.transparenttextures.com/patterns/bo-play.png')"
      >
        <div class="p-4">
          <div class="d-flex flex-column justify-content-between text-white p-4">
            <a @click="toggleSwitch()" class="text-white" title="ON / OFF">
              <b-icon
                :icon="radioToggle ? 'volume-mute-fill' : 'play-fill'"
                animation="throb"
                font-scale="7"
              ></b-icon>
            </a>
          </div>
        </div>
      </div>

      <div class="d-flex flex-row justify-content-between align-items-center text-light">
        <div class="text-monospace mt-3 m-md-0">
          <div class="mt-1">
            <b-icon-phone></b-icon-phone>
            <span>+234 818 8881 067</span>
          </div>

          <div class="mt-1">
            <b-icon-phone></b-icon-phone>
            <span>+234 909 1111 049</span>
          </div>
        </div>
        <div class="mt-2">
          <a href="https://twitter.com/1047SMAFM" class="mx-2 text-light" title="Twitter">
            <b-icon-link45deg font-scale="2"></b-icon-link45deg>
          </a>
          <a
            title="Facebok"
            class="mx-2 text-light"
            href="https://web.facebook.com/1047-SMA-FM-119944118571102"
          >
            <b-icon-link45deg font-scale="2"></b-icon-link45deg>
          </a>
          <a href="https://github.com/OgbeniHMMD/SMA-fm" class="mx-2 text-light" title="Github">
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
      radioToggle: false,
      radioStatus: "OFF/Press play",
      radioUrl: "/test.mp3" // "https://192.99.170.8:5034/listen.mp3"
    };
  },

  methods: {
    toggleSwitch: function() {
      // Toggle Radio on/off
      if (this.radioToggle) {
        this.$refs.player.pause();
      } else {
        // start playing radio.
        const playPromise = this.$refs.player.play();

        if (playPromise !== undefined) {
          playPromise
            .then(_ => {
              this.eventPlaying(); // Show (on-air) program details
            })
            .catch(error => {
              this.eventOffline(); // show error message
            });
        }
      }
    },

    eventWaiting: function() {
      this.radioStatus = "Loading/Please wait";
    },

    eventPlaying: function() {
      this.radioToggle = true;
      this.radioStatus = "On Air/Gbarada by Yemi Shodimu bla bla bla";
    },

    eventPause: function() {
      this.$refs.player.currentTime = 0;
      this.radioToggle = false;
      this.radioStatus = "OFF/Press play";
    },

    eventOffline: function() {
      this.$refs.player.pause();
      this.radioStatus = "Oops!/We are offline";
    }
  }
};
</script>:

<style lang="scss">
* {
  //outline: 1px solid red;
}
</style>