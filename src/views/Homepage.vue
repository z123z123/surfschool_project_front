<template>
  <v-container px-0 py-0 fluid>
    <section class="showcase">

      <video src="Surf_video.mp4" muted autoplay loop></video>
      <div class="overlay">
        <div class="text">
          <h2 class="h">Unforgettable Surf Experience</h2>
          <h2>Fuerteventura Awaits</h2>
          <p>One of the most amazing places to learn surfing and up your skill</p>
        </div>
      </div>

    </section>

    <button @booking="booking()">Book Your Experience Now</button>

    <ul class="social-icon">
      <li><img src="facebook.png" alt=""></li>
      <li><img src="instagram.png" alt=""></li>

    </ul>
  </v-container>
</template>

<script>
export default {
  name: "Homepage"
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

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

.showcase header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 40px 100px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #c48a0f;
  font-family: "Bauhaus 93";
  font-size: x-large;
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

.text {
  /*position: relative;*/
  /*z-index: 10;*/
  z-index: 1000;
  display: block;
  align-items: center;
  justify-content: space-between;
}

botton {
  font-family: "Bauhaus 93";
  color: rgba(250, 222, 118, 0.99);
}

section {
  font-family: "Bauhaus 93";
  font-size: large;
}


h2 {
  color: #c48a0f;
  font-family: "Bauhaus 93";
  font-size: large;
}


</style>