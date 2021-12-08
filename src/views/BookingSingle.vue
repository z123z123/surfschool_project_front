<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="4">
        <div class="data-input">

        </div>
      </v-col>
      <v-col cols="12" md="5">
        <div class="data-input-view">
          <v-select
              :items="items"
              item-text="style"
              label="Surf style"
              v-model="style"
              return-object
              :rules="[(v) => !!v || 'Field is required']"

              outlined
          ></v-select>
          <v-select
              :items="levels"
              label="Surf level"
              v-model="level"
              :rules="[(v) => !!v || 'Field is required']"
              outlined
              required
          ></v-select>
          <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="First name"
              outlined
              required
          ></v-text-field>
          <v-text-field
              v-model="lastname"
              :rules="nameRules"
              label="Last name"
              outlined
              required
          ></v-text-field>
          <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              outlined
              required
          ></v-text-field>
          <v-text-field
              v-model="height"
              :rules="heightRules"
              label="Height (cm)"
              outlined
              required
          ></v-text-field>
          <v-text-field
              v-model="weight"
              :rules="weightRules"
              label="Weight (kg)"
              outlined
              required
          ></v-text-field>
          <v-text-field
              v-model="gender"
              label="Gender"
              outlined
          ></v-text-field>
          <v-checkbox
              v-model="wetsuit"
              :label="`Require wetsuit`"
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
                  PREVIEW
                </div>
                <v-list-item-subtitle>Date: {{ date }}</v-list-item-subtitle>
                <v-list-item-subtitle>Time: {{ time }}</v-list-item-subtitle>
                <v-list-item-subtitle>Surf style: {{ style.style }}</v-list-item-subtitle>
                <v-list-item-subtitle>Level: {{ level }}</v-list-item-subtitle>
                <v-div v-if="wetsuit == true">
                  <v-list-item-subtitle>Require wetsuit: Yes</v-list-item-subtitle>
                </v-div>
                <v-div v-else>
                  <v-list-item-subtitle>Require wetsuit: No</v-list-item-subtitle>
                </v-div>
                <v-list-item-title class="text-h5 mb-1">
                  Total: {{ style.price }} $
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
          <div class="booking-btn">
            <v-btn  width="100%" max-width="334" tile class="my-n1" height="50" v-on:click="confirmation()"> Book</v-btn>
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
    items: [{style: "Traditional surf", price: 59.99}, {style: "Windsurf", price: 79.99}, {
      style: "Kitesurf",
      price: 89.99
    }],
    levels: ["Beginner", "Intermediate", "Advanced"],
    valid: false,
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
    style: {style: "", price: ""},
    level: "",
    weight: "",
    weightRules: [
      v => !!v || 'Weight is required',
    ],
    height: "",
    heightRules: [
      v => !!v || 'Height is required',
    ],
    gender: "",
    total: "",
    date: "21. november",
    time: "11:00",
    wetsuit: false
  }),
  methods: {
    confirmation: function () {
      router.push({name: "BookingConfirmation"});
    },
  }
}
</script>

<style scoped>
  .data-input-view {
    margin: 5% 15%;
  }
  .preview-view{
    margin: 15% 15% auto auto;
  }
  .booking-btn{
    text-align: center;
  }
</style>