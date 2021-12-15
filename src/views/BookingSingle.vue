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
                v-on:change="sort()"
                min="2022-05-01"
                max="2022-08-31"
                no-title
                scrollable
                width="340"
            >
              <div class="time-input">
                <v-select
                    :items="sortedTimes"
                    item-text="time"
                    label="See available times"
                    v-model="client.time"
                    :rules="[(v) => !!v || 'Field is required']"
                    outlined
                    width="350"
                    class=""
                    required> Select time
                </v-select>
                <div class="d-flex justify-space-between">
                  <v-btn
                      text
                      color="teal darken-3"
                      @click="menu = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                      text
                      color="teal darken-3"
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
              v-model="client.style"
              :rules="[(v) => !!v || 'Field is required']"
              return-object
              background-color="white"
              required
              outlined
          ></v-select>
          <v-select
              :items="levels"
              label="Surf level"
              v-model="client.level"
              :rules="[(v) => !!v || 'Field is required']"
              outlined
              required
              background-color="white"
          ></v-select>
          <v-text-field
              v-model="client.firstname"
              :rules="nameRules"
              label="First name"
              outlined
              required
              background-color="white"
          ></v-text-field>
          <v-text-field
              v-model="client.lastname"
              :rules="nameRules"
              label="Last name"
              outlined
              required
              background-color="white"
          ></v-text-field>
          <v-text-field
              v-model="client.email"
              :rules="emailRules"
              label="E-mail"
              outlined
              required
              background-color="white"
          ></v-text-field>
          <v-text-field
              v-model="client.height"
              :rules="heightRules"
              label="Height (cm)"
              outlined
              required
              background-color="white"
          ></v-text-field>
          <v-text-field
              v-model="client.weight"
              :rules="weightRules"
              label="Weight (kg)"
              outlined
              required
              background-color="white"
          ></v-text-field>
          <v-select
              :items="genders"
              label="Gender"
              v-model="client.gender"
              outlined
              background-color="white"
          ></v-select>
          <v-checkbox
              color="teal darken-3"
              v-model="client.wetsuit"
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
                <v-list-item-subtitle>Date: {{ client.bookedDate }}</v-list-item-subtitle>
                <v-list-item-subtitle>Time: {{ client.time }}</v-list-item-subtitle>
                <v-list-item-subtitle>Full name: {{ client.firstname }} {{ client.lastname }}</v-list-item-subtitle>
                <v-list-item-subtitle>Surf style: {{ client.style.style }}</v-list-item-subtitle>
                <v-list-item-subtitle>Level: {{ client.level }}</v-list-item-subtitle>
                <div v-if="client.wetsuit === true">
                  <v-list-item-subtitle>Require wetsuit: Yes</v-list-item-subtitle>
                </div>
                <div v-else>
                  <v-list-item-subtitle>Require wetsuit: No</v-list-item-subtitle>
                </div>
                <v-list-item-title class="text-h5 mb-1">
                  Total: {{ client.style.price }} $
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
          <div class="booking-btn">
            <v-btn class=" teal darken-4 white--text" width="100%" max-width="344" outlined text tile x-large
                   v-on:click="book()">Book
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
    date: (new Date(new Date(2022, 4, 2) - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
    styles: [],
    levels: ["Beginner", "Intermediate", "Advanced"],
    client: {
      bookedDate: "",
      time: "",
      style: {style: "", price: "", id: ""},
      level: "",
      firstname: "",
      lastname: "",
      email: "",
      weight: "",
      height: "",
      gender: "",
      wetsuit: false
    },

    nameRules: [
      v => !!v || 'Name is required',
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    weightRules: [
      v => !!v || 'Weight is required',
    ],

    heightRules: [
      v => !!v || 'Height is required',
    ],
    genders: ["Male", "Female"],
    total: "",
    times: [],
    sortedTimes: [],
  }),

  methods: {
    book: function () {
      this.$http.post("api/public/bookingsingle", {
        bookingId: 2,
        date: this.client.bookedDate,
        time: this.client.time,
        surfStyle: this.client.style.id,
        firstName: this.client.firstname,
        lastName: this.client.lastname,
        level: this.client.level,
        wetsuit: this.client.wetsuit,
        gender: this.client.gender,
        weight: this.client.weight,
        height: this.client.height,
        email: this.client.email
      });
      let timeIndex = this.sortedTimes.map(function (e) {return e.time}).indexOf(this.client.time);
      let time = this.sortedTimes[timeIndex];
      time.count = time.count - 1;
      console.log(time.count + " " + time.id)
      this.$http.put("api/public/updatetimes",{id: time.id, newCount:time.count});
      router.push({name: "BookingConfirmation"});
    },
    back: function () {
      router.push({name: "Homepage"})
    },
    toTop: function () {
      this.$vuetify.goTo(0)
    },
    submitDate: function () {
      this.client.bookedDate = this.date;
    },
    getStyles: function () {
      this.$http.get("api/public/getstyles")
          .then(response => {
            this.styles = response.data;
          })
          .catch(err => {
            console.log(err);
          })
    },
    getTimes: function () {
      this.$http.get("api/public/gettimes")
          .then(response => {
            this.times = response.data;
            let sortByDate = this.date;
            this.sortedTimes = this.times.filter(function (e) {
              return (e.date === sortByDate)
            });
          })
          .catch(err => {
            console.log(err);
          })
    },
    sort: function () {
      this.submitDate();
      let sortByDate = this.date;
      this.sortedTimes = this.times.filter(function (e) {
        return (e.date === sortByDate)
      });
      this.sortedTimes = this.sortedTimes.filter(function (e) {
        return e.count > 0
      });
    }

  }, mounted() {
    this.toTop();
    this.getStyles();
    this.getTimes();
  }
}
</script>

<style scoped>
.back-btn {
  z-index: 2;
  position: absolute;
  top: 30px;
  left: 30px;
}

.data-input-top {
  margin: 30% 0 20% 25%;
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

div >>> .v-card__actions {
  display: block;
}

.background-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  opacity: 0.1;
}
</style>