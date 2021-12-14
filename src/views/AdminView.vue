<template>
  <v-container ma-0 pa-0 fluid>
    <div class="teal lighten-5 admin-view">
      <div v-if="token !== undefined">
        <v-btn class="create-btn teal darken-3 white--text" @click.stop="drawer = !drawer">Create new admin user</v-btn>
      </div>
        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            right
            class="pa-3"
            height="auto"
        >
          <v-container class="pa-5 drawer-custom">
            <v-text-field v-model="newUserName" ></v-text-field>
            <v-text-field v-model="newUserPassword"></v-text-field>
            <v-btn class="mt-3 teal darken-3 white--text" v-on:click="createNewAdminUser()">Create new</v-btn>
          </v-container>
        </v-navigation-drawer>
      <div class="admin-view-restricted" v-if="token === undefined">
        <v-btn class="teal darken-3 white--text back-btn" v-on:click="back()">Back to home page</v-btn>
        <div class="restricted-view">
          <h1 class="teal--text text--darken-3">You shouldn't be here friend.</h1>
          <h2 class="teal--text text--darken-3">If instructor, try logging in first.</h2>
        </div>
      </div>
      <div v-else>
        <v-btn v-on:click="logout()" class=" logout-btn teal darken-3 white--text mb-15">Logout</v-btn>
        <v-card class="data-table">
          <v-card-title>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search in UPPERCASE"
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
      token: this.$route.params.token,
      newUserName: "",
      newUserPassword: "",
      drawer: null,
      items: [
        {title: 'Home', icon: 'mdi-view-dashboard'},
        {title: 'About', icon: 'mdi-forum'},
      ],
    }
  },
  methods: {
    logout: function () {
      this.token = '';
      localStorage.removeItem('user-token');
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
    },
    createNewAdminUser: function (){
      this.$http.post("api/createadminuser", {
        userName: this.newUserName,
        password: this.newUserPassword
      })
        .then(() => {
          alert("successully created new admin user.");
          this.newUserName = "";
          this.newUserPassword = "";
        })
        .catch(err => {
          console.log(err);
        })
    },
    back: function () {
      router.push({name: "Homepage"});
    }
  }, mounted() {
    this.getData();
  }
}
</script>

<style scoped>
.admin-view {
  padding: 10%;
  min-height: 100vh;
}

.admin-view-restricted {
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 100px;
  margin-top: 15%;
}

.custom-search {
  margin: 10px 25%;
}

.restricted-view {
  display: block;
  justify-content: center;
  align-items: center;
}

.back-btn, .logout-btn {
  position: absolute;
  top: 30px;
  left: 30px;
}
.create-btn{
  position: absolute;
  top: 30px;
  right: 30px;
}
.drawer-custom{
  text-align: center;
}


</style>