<template>
  <v-container fluid>
    <h1>Booking Group (max 6 people)</h1>

    <v-form v-model="valid">
      <v-row>

        <v-col cols="12" md="4">

        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
              v-model="style"
              label="Surf style"
              required
          ></v-text-field>
          <v-text-field
              v-model="skill"
              label="Skill level"
              required
          ></v-text-field>
          <v-text-field
              v-model="firstname"
              label="First name"
              required
          ></v-text-field>
          <v-text-field
              v-model="lastname"
              label="Last name"
              required
          ></v-text-field>
          <v-text-field
              v-model="email"
              label="E-mail"
              required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
              v-model="height"
              label="Height"
              required
          ></v-text-field>
          <v-text-field
              v-model="weight"
              label="Weight"
              required
          ></v-text-field>
          <v-text-field
              v-model="gender"
              label="gender"
          ></v-text-field>
          <v-text-field
              v-model="wetsuit_required"
              label="Wetsuit required"
              required
          ></v-text-field>
        </v-col>

      </v-row>
    </v-form>


    <v-row>
      <v-col cols="12" sm="6">
        <v-date-picker
            v-model="dates"
            multiple
        ></v-date-picker>
      </v-col>
      <v-col
          cols="12"
          sm="6"
      >
        <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="dates"
            transition="scale-transition"
            offset-y
            min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-combobox
                v-model="dates"
                multiple
                chips
                small-chips
                label="Multiple picker in menu"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
            ></v-combobox>
          </template>
          <v-date-picker
              v-model="dates"
              multiple
              no-title
              scrollable
          >
            <v-spacer></v-spacer>
            <v-btn
                text
                color="primary"
                @click="menu = false"
            >
              Cancel
            </v-btn>
            <v-btn
                text
                color="primary"
                @click="$refs.menu.save(dates)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
    </v-row>


    <v-btn v-on:click="confirmation()">Book</v-btn>
  </v-container>
</template>

<script>
import router from "@/router";

export default {
  name: "BookingGroup",
  data: function () {
    return {}
  },
  methods: {
    confirmation: function () {
      router.push({name: "BookingConfirmation"});
    }
  }
}
</script>

<style scoped>

</style>