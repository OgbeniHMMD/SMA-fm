<template>
  <div>
    <the-header />

    <radio-player />
  </div>
</template>

<script>
import RadioPlayer from "~/components/RadioPlayer.vue";
import TheHeader from "~/components/_header.vue";

export default {
  components: {
    TheHeader,
    RadioPlayer
  }
};
</script>
