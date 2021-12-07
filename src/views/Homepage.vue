<template>
  <v-container px-0 py-0 fluid>
    <section class="showcase">

      <video src="Surf_video.mp4" muted autoplay loop></video>
      <div class="overlay">
      </div>
      <div class="text">
        <h2>Unforgettable Surf Experience</h2>
        <h3>Fuerteventura Awaits</h3>
      </div>
    </section>

    <section>
      <div class="button">
        <v-btn
            width=300
            height="75"
            depressed
            elevation="30"
            raised
            rounded
            x-large
        >Book Your Experience Now
        </v-btn>
        <v-btn
            width=300
            height="75"
            depressed
            elevation="30"
            raised
            rounded
            x-large
            color="blue"
        >Book Your Group Experience Now
        </v-btn>
      </div>
    </section>


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
  position: relative;
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

.text {
  position: center;
  z-index: 10;
  margin: auto;
}

.text h2 {
  color: #c48a0f;
  font-family: "Bauhaus 93";
  font-size: 5em;
  font-weight: 800;
  line-height: 1em;
  text-transform: uppercase;
  text-align: center;
}

h3 {
  color: #c48a0f;
  font-family: "Bauhaus 93";
  font-size: 3em;
  font-weight: 600;
  line-height: 1em;
  text-transform: uppercase;
  text-align: center;
  margin-top: 15px;
}

section {
  font-family: "Bauhaus 93";
  /*font-size: large;*/
}

.button {
  text-align: center;
  display: flex;
  justify-content: space-around;
  size: 3em;
}


</style>