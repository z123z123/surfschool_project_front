<template>
  <v-container fluid class="teal lighten-5">
    <v-btn v-on:click="back()" class="teal darken-3 white--text back-btn">Back</v-btn>
    <v-row>
      <v-col cols="12" md="4">
        <img src="booking-logo.png" alt="background-img" class="background-img">
        <div class="data-input-top">
          <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                  v-model="date"
                  label="Select date"
                  v-bind="attrs"
                  v-on="on"
                  outlined
                  background-color="white"
              ></v-text-field>
            </template>
            <v-date-picker
                v-model="date"
                no-title
                scrollable
                width="340"
            >
              <div class="time-input">
                <v-select
                    :items="times"
                    label="See available times"
                    v-model="time"
                    :rules="[(v) => !!v || 'Field is required']"
                    outlined
                    width="350"
                    class=""
                    required> Select time
                </v-select>
                <div class="d-flex justify-space-between">
                  <v-btn
                      text
                      color="indigo darken-4"
                      @click="menu = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                      text
                      color="indigo darken-4"
                      @click="$refs.menu.save(date)"
                  >
                    OK
                  </v-btn>
                </div>
              </div>
            </v-date-picker>
          </v-menu>
        </div>
      </v-col>
      <v-col cols="12" md="5">
        <div class="data-input-view">
          <v-select
              :items="styles"
              item-text="style"
              label="Surf style"
              v-model="style"
              :rules="[(v) => !!v || 'Field is required']"
              return-object
              background-color="white"
              required
              outlined
          ></v-select>
          <v-select
              :items="levels"
              label="Surf level"
              v-model="level"
              :rules="[(v) => !!v || 'Field is required']"
              outlined
              required
              background-color="white"
          ></v-select>
          <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="First name"
              outlined
              required
              background-color="white"
          ></v-text-field>
          <v-text-field
              v-model="lastname"
              :rules="nameRules"
              label="Last name"
              outlined
              required
              background-color="white"
          ></v-text-field>
          <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              outlined
              required
              background-color="white"
          ></v-text-field>
          <v-text-field
              v-model="height"
              :rules="heightRules"
              label="Height (cm)"
              outlined
              required
              background-color="white"
          ></v-text-field>
          <v-text-field
              v-model="weight"
              :rules="weightRules"
              label="Weight (kg)"
              outlined
              required
              background-color="white"
          ></v-text-field>
          <v-select
              :items="genders"
              label="Gender"
              v-model="gender"
              outlined
              background-color="white"
          ></v-select>
          <v-checkbox
              color="indigo darken-4"
              v-model="wetsuit"
              :label="`Require wetsuit`"
              class="pb-7 pt-2 mt-n3"
          ></v-checkbox>
        </div>
      </v-col>
      <v-col cols="12" md="3">
        <div class="preview-view">
          <v-card
              class="mx-auto"
              max-width="344"
              outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">
                  SUMMARY
                </div>
                <v-list-item-subtitle>Date: {{ date }}</v-list-item-subtitle>
                <v-list-item-subtitle>Time: {{ time }}</v-list-item-subtitle>
                <v-list-item-subtitle>Full name: {{firstname}} {{lastname}}</v-list-item-subtitle>
                <v-list-item-subtitle>Surf style: {{ style.style }}</v-list-item-subtitle>
                <v-list-item-subtitle>Level: {{ level }}</v-list-item-subtitle>
                <div v-if="wetsuit === true">
                  <v-list-item-subtitle>Require wetsuit: Yes</v-list-item-subtitle>
                </div>
                <div v-else>
                  <v-list-item-subtitle>Require wetsuit: No</v-list-item-subtitle>
                </div>
                <v-list-item-title class="text-h5 mb-1">
                  Total: {{ style.price }} $
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
          <div class="booking-btn">
            <v-btn class=" teal darken-4 white--text" width="100%" max-width="344" outlined text tile x-large
                   v-on:click="confirmation()">Book
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import router from "@/router";

export default {
  name: "BookingSingle",
  data: () => ({
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
    styles: [{style: "Traditional surf", price: 59.99}, {style: "Windsurf", price: 79.99}, {
      style: "Kitesurf",
      price: 89.99
    }],
    style: {style: "", price: ""},
    levels: ["Beginner", "Intermediate", "Advanced"],
    level: "",
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Name is required',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    weight: "",
    weightRules: [
      v => !!v || 'Weight is required',
    ],
    height: "",
    heightRules: [
      v => !!v || 'Height is required',
    ],
    genders: ["Male", "Female"],
    gender: "",
    total: "",
    times: ["10:00", "11:00", "12:00"],
    time: "",
    wetsuit: false
  }),
  methods: {
    confirmation: function () {
      router.push({name: "BookingConfirmation"});
    },
    back: function () {
      router.push({name: "Homepage"})
    },
    toTop: function () {
      this.$vuetify.goTo(0)
    }
  },mounted() {
    this.toTop()
  }
}
</script>

<style scoped>
.back-btn{
  z-index: 2;
}
.data-input-top{
  margin: 15% 0 20% 25%;
}
.data-input-view {
  margin: 5% 15%;
}

.preview-view {
  margin: 15% 15% auto auto;
}

.booking-btn {
  text-align: center;
}
.time-input {
  display: block;
}
div >>> .v-card__actions{
  display: block;
}
.background-img{
  position: absolute;
  top: 0;
  left:0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  opacity: 0.1;
}
</style>