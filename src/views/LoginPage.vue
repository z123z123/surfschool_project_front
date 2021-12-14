<template>
  <v-container fluid fill-height class="teal lighten-5">
    <v-btn v-on:click="back()" class="teal darken-3 white--text mb-15 back-btn">Back</v-btn>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="teal darken-3">
            <v-toolbar-title>User login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form class="pt-5">
              <v-text-field
                  name="login"
                  label="Username"
                  type="text"
                  v-model="user.userName"
                  outlined
              ></v-text-field>
              <v-text-field
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  v-model="user.password"
                  outlined
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="teal darken-3 white--text" large v-on:click="login()">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import router from "@/router";

export default {
  name: "LoginPage",
  data: function (){
    return{
      user: {
        userName:"",
        password:""
      },
      token:''
    }
  },
  methods: {
    login: function (){
      this.$http.post("api/public/login", this.user)
        .then(result => {
          this.user.userName = "";
          this.user.password = "";
          this.token = result.data;
          console.log(this.token);
          localStorage.setItem('user-token', this.token)
          this.$http.defaults.headers.common['Authorization'] = "Bearer " + this.token;
          router.push({name:"AdminView", params:{token: this.token}})
        })
        .catch(err =>{
          console.log(err);
          alert("Wrong username or password.");
        })
    },
    back: function (){
      router.push({name: "Homepage"});
    }
  }
}
</script>

<style scoped>
    .back-btn{
      position: absolute;
      top: 30px;
      left: 30px;
    }
</style>