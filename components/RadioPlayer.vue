<template>
	<section
		class="bg-primary d-flex flex-column justify-content-center align-items-center min-vh-100 m-0 my-auto"
		style="background: url('/textures/radiong_pp_2fd25dbbe6d6b5bdbca7636d9aa67298.png')"
	>
		<audio
			ref="radioPlayer"
			:src="radioUrl"
			@pause="eventPause"
			@ended="eventOffline"
			@onerror="eventOffline"
			@waiting="eventWaiting"
			@playing="eventPlaying"
		></audio>

		<div
			id="radio"
			class="bg-primary col-12 col-md-10 col-lg-8 shadow-lg p-2 p-md-4 d-flex flex-column vh-100 vh-md-75"
			style="background-image: url('/textures/otis-redding.png')"
		>
			<div class="d-flex align-items-center text-light">
				<div
					class="row bg-dark d-flex flex-column flex-md-row w-100 border rounded-lg shadow m-0 mb-4"
					style="background-image: url('/textures/black-mamba.png')"
				>
					<div class="col-12 col-md-3 d-flex flex-md-column text-left p-2 p-md-3 mr-4">
						<div class="font-weight-bold text-warning">104.7 MHz</div>
						<div class="ml-auto ml-md-0">
							<i class="fas fa-star"></i> S.M.A FM
						</div>
					</div>

					<div class="col text-light text-md-right p-1 p-md-3">
						<div class="row m-0">
							<div class="col p-0 text-monospace">
								<div class="font-weight-bold">{{ radioStatus.title }}</div>
								<div class="text-truncate mw-100">{{ radioStatus.msg }}</div>
							</div>

							<div class="col-2 col-md-1 p-0 mx-1 text-right">
								<a @click="toggleSwitch()">
									<i class="fas fa-3x" :class="radioToggle ? 'fa-toggle-on' : 'fa-toggle-off'"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				id="speaker"
				class="bg-dark flex-grow-1 d-flex flex-column justify-content-center align-items-center border rounded-lg text-center shadow p-4"
				style="background-image: url('/textures/bo-play.png')"
			>
				<a @click="toggleSwitch()" title="ON / OFF" class="text-light">
					<i v-if="radioStatus.waiting" class="fas fa-spinner fa-spin fa-4x"></i>
					<i v-else class="fas fa-4x" :class="radioToggle ? 'fa-volume-mute' : 'fa-play'"></i>
				</a>
			</div>

			<div
				class="d-flex flex-column flex-md-row justify-content-between align-items-center text-light my-3 m-md-0"
			>
				<div class="mt-1">
					<i class="fas fa-phone-alt"></i>
					<span>+234 818 8881 067,</span>
					<span>(0)909 1111 049</span>
				</div>
				<div class="d-flex mt-4 mt-md-1">
					<a href="https://twitter.com/1047SMAFM" class="text-light" title="Twitter">
						<i class="fab fa-twitter-square fa-2x"></i>
					</a>
					<a
						title="Facebok"
						class="mx-5 mx-md-4 text-light"
						href="https://web.facebook.com/1047-SMA-FM-119944118571102"
					>
						<i class="fab fa-facebook-square fa-2x"></i>
					</a>
					<a href="https://github.com/OgbeniHMMD/SMA-fm" class="text-light" title="Github">
						<i class="fab fa-github-square fa-2x"></i>
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
			radioUrl: "http://192.99.170.8:5034/listen.mp3",
			// radioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",

			radioStatus: { waiting: false, title: "Welcome", msg: "Press play" }
		};
	},

	methods: {
		toggleSwitch: function() {
			// Play switch tone
			this.playTone("switch");

			if (this.radioToggle) {
				this.$refs.radioPlayer.pause();
			} else {
				// start playing radio.
				const playPromise = this.$refs.radioPlayer.play();

				if (playPromise !== undefined) {
					playPromise
						.then(_ => {
							this.eventPlaying(); // Show (on-air) program details
						})
						.catch(error => {
							// this.eventOffline(); // Show error message
						});
				}
			}
		},

		playTone(option) {
			// Get appropriate feedback tone
			let toneUrl = "/tones/switch.mp3";
			if (option == "error") toneUrl = "/tones/error.mp3";

			// Play feedback tone
			const audio = new Audio(toneUrl);
			audio.play();
		},

		eventWaiting: function() {
			this.waiting = true;
			this.radioStatus = {
				waiting: true,
				title: "waiting",
				msg: "Please, Wait. . ."
			};
		},

		eventPlaying: function() {
			this.radioToggle = true;
			this.radioStatus = {
				waiting: false,
				title: "On Air",
				msg: "Reflections At Sunset With Father Abraham"
			};
		},

		eventPause: function() {
			this.radioToggle = false;
			this.$refs.radioPlayer.currentTime = 0;
			this.radioStatus = {
				waiting: false,
				title: "OFF",
				msg: "Press play"
			};
		},

		eventOffline: function() {
			this.playTone("error");
			this.$refs.radioPlayer.pause();
			this.radioStatus = {
				waiting: false,
				title: "Something went wrong",
				msg: "Maybe we are offline"
			};
		}
	}
};
</script>
