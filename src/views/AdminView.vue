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
          <v-text-field v-model="newUserName" placeholder="Create User Name"></v-text-field>
          <v-text-field v-model="newUserPassword" placeholder="Create Password"></v-text-field>
          <v-btn class="mt-3 teal darken-3 white--text" v-on:click="createNewAdminUser()">Create new</v-btn>
        </v-container>
      </v-navigation-drawer>
      <div class="admin-view-restricted" v-if="token === undefined">
        <v-btn class="teal darken-3 white--text back-btn" v-on:click="back()">Back to home page</v-btn>
        <div class="restricted-view">
          <h1 class="teal--text text--darken-3">You shouldn't be here, friend.</h1>
          <h2 class="teal--text text--darken-3">If instructor, try logging in first.</h2>
        </div>
      </div>
      <div v-else>
        <v-btn v-on:click="logout()" class=" logout-btn teal darken-3 white--text mb-15">Logout</v-btn>


        <v-data-table
            :headers="headers"
            :items="clients"
            class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar
                flat
            >
              <v-toolbar-title>Your awesome clients</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-dialog
                  v-model="dialog"
                  max-width="500px"
                  color="teal darken-3"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      color="teal darken-3"
                      dark
                      class="white--text"
                      v-bind="attrs"
                      v-on="on"
                  >
                    New Booking
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-text-field
                              v-model="editedItem.bookingId"
                              label="Booking ID"
                          ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-text-field
                              v-model="editedItem.clientId"
                              label="Client ID"
                          ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-text-field
                              v-model="editedItem.date"
                              label="Date"
                          ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-text-field
                              v-model="editedItem.time"
                              label="Time"
                          ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-text-field
                              v-model="editedItem.firstName"
                              label="First Name"
                          ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-text-field
                              v-model="editedItem.lastName"
                              label="Last Name"
                          ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-select
                              :items="surfStyles"
                              label="Style"
                              v-model="editedItem.surfStyle"
                              background-color="white"
                          ></v-select>
                          <!--                          <v-text-field-->
                          <!--                              v-model="editedItem.surfStyle"-->
                          <!--                              label="Surf Style"-->
                          <!--                          ></v-text-field>-->
                        </v-col>

                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-select
                              :items="levels"
                              label="Level"
                              v-model="editedItem.level"
                              background-color="white"
                          ></v-select>
                          <!--                          <v-text-field-->
                          <!--                              v-model="editedItem.level"-->
                          <!--                              label="Level"-->
                          <!--                          ></v-text-field>-->
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-select
                              :items="wetsuits"
                              label="Require Wetsuit"
                              v-model="editedItem.wetsuit"
                              background-color="white"
                          ></v-select>
                          <!--                          <v-text-field-->
                          <!--                              v-model="editedItem.wetsuit"-->
                          <!--                              label="Require Wetsuit"-->
                          <!--                          ></v-text-field>-->
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-select
                              :items="genders"
                              label="Gender"
                              v-model="editedItem.gender"
                              background-color="white"
                          ></v-select>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-text-field
                              v-model="editedItem.height"
                              label="Height"
                          ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-text-field
                              v-model="editedItem.weight"
                              label="Weight"
                          ></v-text-field>
                        </v-col>

                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-text-field
                              v-model="editedItem.email"
                              label="E-mail"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="teal darken-3"
                        text
                        @click="close"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                        color="teal darken-3 "
                        text
                        @click="save"
                    >
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title class="text-h5">Are you sure you want to delete this booking?</v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="teal darken-3"
                           text @click="closeDelete">Cancel
                    </v-btn>
                    <v-btn color="teal darken-3"
                           text @click="deleteItemConfirm">OK
                    </v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon
                small
                class="mr-2"
                @click="editItem(item)"
            >
              mdi-pencil
            </v-icon>
            <v-icon
                small
                @click="deleteItem(item)"
            >
              mdi-delete
            </v-icon>
          </template>
          <template v-slot:no-data>
            <!--            <v-btn-->
            <!--                color="teal darken-3 white&#45;&#45;text"-->
            <!--            >-->
            <!--              Reset-->
            <!--            </v-btn>-->
          </template>
        </v-data-table>
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
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Booking ID',
          align: 'start',
          filterable: false,
          value: 'bookingId',
        },
        {text: 'Client ID', value: 'clientId'},
        {text: 'Date', value: 'date'},
        {text: 'Time', value: 'time'},
        {text: 'Surf Style', value: 'surfStyle'},
        {text: 'First name', value: 'firstName'},
        {text: 'Last name', value: 'lastName'},
        {text: 'Level', value: 'level'},
        {text: 'Require wetsuit', value: 'wetsuit'},
        {text: 'Gender', value: 'gender'},
        {text: 'Weight', value: 'weight'},
        {text: 'Height', value: 'height'},
        {text: 'E-mail', value: 'email'},
        {text: 'Actions', value: 'actions', sortable: false}
      ],

      clients: [],
      client: {
        bookingId: "",
        clientId: "",
        date: "",
        time: "",
        surfStyle: "",
        firstName: "",
        lastName: "",
        level: "",
        wetsuit: "",
        gender: "",
        weight: "",
        height: "",
        email: ""
      },

      genders: ["Male", "Female"],
      levels: ["Beginner", "Intermediate", "Advanced"],
      wetsuits: ["true", "false"],
      surfStyles: [1, 2, 3],

      editedIndex: -1,

      editedItem: {
        bookingId: "",
        clientId: "",
        date: "",
        time: "",
        surfStyle: "",
        firstName: "",
        lastName: "",
        level: "",
        wetsuit: "",
        gender: "",
        weight: "",
        height: "",
        email: ""
      },

      defaultItem: {
        bookingId: "",
        clientId: "",
        date: "",
        time: "",
        surfStyle: "",
        firstName: "",
        lastName: "",
        level: "",
        wetsuit: "",
        gender: "",
        weight: "",
        height: "",
        email: ""
      },
      editResponse: "",
      token: this.$route.params.token,
      newUserName: "",
      newUserPassword: "",
      drawer: null,
      items: [
        {title: 'Home', icon: 'mdi-view-dashboard'},
        {title: 'About', icon: 'mdi-forum'},
      ],
      answer: "",
    }
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Booking' : 'Edit Booking'
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
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
            this.clients = response.data;
          })
          .catch(error => {
            console.log(error);
          })
    },
    createNewAdminUser: function () {
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
    },

    editItem(item) {
      this.editedIndex = this.clients.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.clients.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.clients.splice(this.editedIndex, 1)
      let url = "api/deleteclient/" + this.clients[this.editedIndex].clientId
      this.$http.delete(url, this.editedItem)
          .then(response => this.answer = response.data)
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {
        console.log(this.editedIndex)
        Object.assign(this.clients[this.editedIndex], this.editedItem)
        console.log(this.clients[this.editedIndex])
        let url = "api/editclient/" + this.clients[this.editedIndex].clientId
        console.log(this.clients[this.editedIndex].clientId)
        this.$http.put(url, this.editedItem)
        // console.log(this.editedItem)
            .then(response => this.answer = response.data)

      } else {
        this.clients.push(this.editedItem)
      }
      this.close()


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

.create-btn {
  position: absolute;
  top: 30px;
  right: 30px;
}

.drawer-custom {
  text-align: center;
}


</style>