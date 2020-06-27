<template>
	<section id="radio">
		<audio
			:src="radio.url"
			ref="radioPlayer"
			preload="none"
			@pause="eventPause"
			@ended="eventOffline"
			@error="eventOffline"
			@waiting="eventWaiting"
			@playing="eventPlaying"
		></audio>

		<div id="radio-body">
			<div class="d-flex align-items-center text-light">
				<div id="radio-status">
					<div class="col-12 col-md-3 d-flex flex-md-column text-left p-2 p-md-3 mr-4">
						<div class="font-weight-bold">
							<i class="fas fa-globe"></i>
							{{ radio.frequency }}
						</div>
						<div class="ml-auto ml-md-0">{{ radio.name }}</div>
					</div>

					<div class="col text-light text-md-right p-1 p-md-3">
						<div class="row m-0">
							<div class="col p-0 text-monospace">
								<div class="font-weight-bold">{{ status.title }}</div>
								<div class="text-truncate mw-100">{{ status.msg }}</div>
							</div>

							<div class="col-2 col-md-1 p-0 mx-1 text-right">
								<a @click="toggleSwitch()" title="Switch">
									<i class="fas fa-3x" :class="radio.toggle ? 'fa-toggle-on' : 'fa-toggle-off'"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="radio-speaker">
				<a @click="toggleSwitch()" title="ON / OFF" class="text-light m-4 p-5">
					<i v-if="status.waiting" class="fas fa-spinner fa-spin fa-4x"></i>
					<i v-else class="fas fa-4x" :class="radio.toggle ? 'fa-volume-mute' : 'fa-play'"></i>
				</a>
			</div>

			<div id="radio-footer">
				<div class="mt-1">
					Made with &hearts; by
					<a
						href="https://www.hmmd.xyz"
						class="text-light font-weight-bold"
					>OgbeniHMMD</a>
				</div>
				<div class="d-flex mt-4 mt-md-1">
					<a href="https://twitter.com/Radiolagos1075" class="text-light" title="Twitter">
						<i class="fab fa-twitter-square fa-2x"></i>
					</a>
					<a
						title="Facebok"
						class="ml-5 ml-md-4 text-light"
						href="https://www.facebook.com/radiolagos.amititi.5"
					>
						<i class="fab fa-facebook-square fa-2x"></i>
					</a>
					<a
						title="Instagram"
						class="mx-5 mx-md-4 text-light"
						href="https://www.instagram.com/radiolagos1075/"
					>
						<i class="fab fa-instagram-square fa-2x"></i>
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
			radio: {
				toggle: false,
				name: "Radio Lagos",
				frequency: "107.5 FM",
				url: "https://ca7ssl.rcast.net/stream/61621.mp3"
			},

			status: { waiting: false, title: "Welcome", msg: "Press play" }
		};
	},

	methods: {
		toggleSwitch: function() {
			this.beep(); // Play switch tone

			if (this.radio.toggle) {
				this.$refs.radioPlayer.pause();
			} else {
				this.$refs.radioPlayer.src = this.radio.url;
				this.$refs.radioPlayer.play();
			}
		},

		beep(url = "/tones/switch.mp3") {
			const audio = new Audio(url).play();
		},

		eventWaiting: function() {
			this.waiting = true;
			this.status = {
				waiting: true,
				title: "Loading",
				msg: "Please, Wait. . ."
			};
		},

		eventPlaying: function() {
			this.radio.toggle = true;
			this.status = {
				waiting: false,
				title: "On Air",
				msg: "Tiwa n Tiwa"
			};
		},

		eventPause: function() {
			// STOP the player
			this.radio.toggle = false;
			this.$refs.radioPlayer.currentTime = 0;
			this.$refs.radioPlayer.src = "/tones/switch.mp3"; // set a dummy source

			this.status = {
				waiting: false,
				title: "OFF",
				msg: "Press play"
			};
		},

		eventOffline: function() {
			this.beep("/tones/error.mp3");
			this.status = {
				waiting: false,
				title: "Something went wrong",
				msg: "Maybe we are offline"
			};
		}
	}
};
</script>
