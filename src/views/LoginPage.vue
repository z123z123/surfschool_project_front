<template>
  <v-container fluid fill-height class="teal lighten-5">
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="teal darken-3">
            <v-toolbar-title>Login Form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form class="pt-5">
              <v-text-field
                  name="login"
                  label="Username"
                  type="text"
                  outlined
              ></v-text-field>
              <v-text-field
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  outlined
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="teal darken-3 white--text" large to="/">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "LoginPage"
}
</script>

<style scoped>

</style>