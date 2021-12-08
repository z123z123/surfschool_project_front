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
      <div class="surf-description">
        <v-row>
          <v-col cols="12" md="6">
            <div class="description-text">
              <h3>Classical Surf</h3>
              <br>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in volu</p>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="surf_image">
              <div></div>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="surf-description">
        <v-row>
          <v-col cols="12" md="6">
            <div MAMAMA PAPAPAP class="kitesurf_image">
              <div></div>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="description-text-middle">
              <h3>Kitesurf</h3>
              <br>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in volu</p>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="surf-description">
        <v-row>
          <v-col cols="12" md="6">
            <div class="description-text">
              <h3>Windsurf</h3>
              <br>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in volu</p>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="windsurf_image">
              <div></div>
             </div>
          </v-col>
        </v-row>
      </div>
    </section>


    <section class="booking-section">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries</p>
      <v-row>
        <v-col cols="12" md="6">
          <div class="button">
            <v-btn v-on:click="bookSingle()"
                   width="350"
                   height="75"
                   depressed
                   elevation="30"
                   raised
                   rounded
                   x-large
                   padding="5"
            >Book Your Experience Now
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="button">
            <v-btn v-on:click="bookGroup()"
                   width="350"
                   height="75"
                   depressed
                   elevation="30"
                   raised
                   rounded
                   x-large
                   padding="5"
            >Book Group Experience Now
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </section>
    <v-footer
        dark
        padless
    >
      <v-col cols="12" class="text-center">
        <v-card
            flat
            tile
            class="blue lighten-1 white--text text-center"
        >
          <br>
          <v-card-text>
            <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4 white--text"
                icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>
          <br>
        </v-card>
      </v-col>
    </v-footer>
  </v-container>
</template>

<script>
import router from "@/router";

export default {
  data: function () {
    return {
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ]
    }
  },
  methods: {
    bookSingle: function () {
      router.push({name: "BookingSingle"});
    },
    bookGroup: function () {
      router.push({name: "BookingGroup"});
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

section {
  /*font-family: "Bauhaus 93";*/
  font-family: sans-serif;
  /*font-size: large;*/
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
  /*font-family: "Bauhaus 93";*/
  font-size: 5em;
  font-weight: 800;
  line-height: 1em;
  text-transform: uppercase;
  text-align: center;
}

h3 {
  color: #c48a0f;
  /*font-family: "Bauhaus 93";*/
  font-size: 3em;
  font-weight: 600;
  line-height: 1em;
  text-transform: uppercase;
  text-align: center;
  margin-top: 15px;
}

.surf-description {
  display: flex;
  align-content: center;
  margin: 15%;
}

.description-image {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin: auto 0;
  margin-left: 35%;
}

.description-image-middle {
  margin-left: 15%;
}

.description-text {
  margin: auto
}

.booking-section {
  margin: 15%;
}

.button {
  text-align: center;
  display: flex;
  justify-content: space-around;
  size: 3em;
  margin-top: 10%;
}

.surf_image {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin: auto 0;
  margin-left: 35%;
  overflow: hidden;
  position: relative;
}

.surf_image div {
  width: 100%;
  height: 100%;
  background: url("https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 1s;
}
.windsurf_image div {
  width: 100%;
  height: 100%;
  background: url("https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 1s;
}

.kitesurf_image div {
  width: 100%;
  height: 100%;
  background: url("https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 1s;
}

.surf_image div:hover {
  transform: scale(1.5);
}

</style>