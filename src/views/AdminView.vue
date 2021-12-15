<template>
  <v-container ma-0 pa-0 fluid>
    <div class="teal lighten-5 admin-view">
      <v-btn v-on:click="logout()" class="teal darken-3 white--text mb-15">Logout</v-btn>
      <v-card>
        <v-card-title>
          <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
              class="custom-search"
          ></v-text-field>
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="data"
            :search="search"
        ></v-data-table>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import router from "@/router";

export default {
  name: "AdminView",
  data: function () {
    return {
      search: '',
      headers: [
        {
          text: 'Booking ID',
          align: 'start',
          filterable: false,
          value: 'bookingId',
        },
        {text: 'Date', value: 'date'},
        {text: 'Time', value: 'time'},
        {text: 'Surf style', value: 'surfStyle'},
        {text: 'First name', value: 'firstName'},
        {text: 'Last name', value: 'lastName'},
        {text: 'Level', value: 'level'},
        {text: 'Require wetsuit', value: 'wetsuit'},
        {text: 'Gender', value: 'gender'},
        {text: 'Weight', value: 'weight'},
        {text: 'Height', value: 'height'},
        {text: 'E-mail', value: 'email'}
      ],
      data: [{
        bookingId: 1,
        date: "YOU",
        time: "SHOULD",
        surfStyle: "NOT",
        firstName: "BE",
        lastName: "HERE",
        level: "FRIEND.",
        wetsuit: "IF",
        gender: "INSTRUCTOR",
        weight: "TRY",
        height: "LOGGING",
        email: "IN."
      }],
      token: ''
    }
  },
  methods: {
    logout: function () {
      this.token = '';
      localStorage.removeItem('user-token');
      alert("Logging out");
      router.push({name: "LoginPage"})
      location.reload();
    },
    getData: function () {
      this.$http.get("api/getallclients")
          .then(response => {
            this.data = response.data;
          })
          .catch(error => {
            console.log(error);
          })
    }
  }, mounted() {
    this.getData();
  }
}
</script>

<style scoped>
.admin-view {
  padding: 5% 15%;
  min-height: 100vh;
}

.custom-search {
  margin: 10px 25%;
}
</style>