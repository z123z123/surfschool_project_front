<template>
  <v-container fluid px-0 py-0>
    <section class="showcase">

      <video src="confirmation_video.mp4" muted autoplay loop></video>
      <div class="overlay">
      </div>
      <div class="text">
        <h2>See you on the waves </h2>
        <br>
        <br>
        <p>Booking confirmation is sent to your e-mail</p>
        <p class="small">Returning to front page in ... {{ countDown }}</p>
      </div>
    </section>
  </v-container>
</template>

<script>
import router from "@/router";

export default {
  name: "BookingConfirmation",
  data: function () {
    return {
      countDown: 10
    }
  },
  methods: {
    countDownTimer: function () {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1
          this.countDownTimer()
        }, 1000)
      }
    }
  }, mounted() {
    this.countDownTimer();
    setTimeout(function () {
      router.push({name: "Homepage"})
    }, 10000);
  },
}
</script>

<style scoped>
.showcase {
  position: absolute;
  right: 0;
  width: 100%;
  min-height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: antiquewhite;
  color: blue;
  z-index: 2;
}

.showcase video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.text, p {
  position: center;
  z-index: 10;
  margin: auto;
  text-align: center;
  color: #fff;
}

p {
  font-size: 2em;
}

.small {
  font-size: 1em;
}

.text h2 {
  color: #fff;
  /*font-family: "Bauhaus 93";*/
  font-size: 6rem;
  font-weight: 800;
  line-height: 1em;
  text-transform: uppercase;
  text-align: center;
}
</style>