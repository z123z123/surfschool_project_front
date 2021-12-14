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
              v-model="client.firstName"
              :rules="nameRules"
              label="First name"
              outlined
              required
              background-color="white"
          ></v-text-field>
          <v-text-field
              v-model="client.lastName"
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
              color="teal darker-3"
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
                <v-list-item-subtitle>Date: {{ date }}</v-list-item-subtitle>
                <v-list-item-subtitle>Time: {{ time }}</v-list-item-subtitle>
                <v-list-item-subtitle>Full name: {{ client.firstName }} {{ client.lastName }}</v-list-item-subtitle>
                <v-list-item-subtitle>Surf style: {{ client.style.style }}</v-list-item-subtitle>
                <v-list-item-subtitle>Level: {{ client.level }}</v-list-item-subtitle>
                <div v-if="client.wetsuit === true">
                  <v-list-item-subtitle>Require wetsuit: Yes</v-list-item-subtitle>
                </div>
                <div v-else>
                  <v-list-item-subtitle>Require wetsuit: No</v-list-item-subtitle>
                </div>

              </v-list-item-content>
            </v-list-item>
          </v-card>
          <div class="booking-btn">
            <v-btn class=" teal darken-4 white--text" width="100%" max-width="344" outlined text tile x-large
                   v-on:click="saveClient()">Add person
            </v-btn>
          </div>
        </div>

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
                <table id="clientTable">
                  <tr v-for="newclient in clients">
                    <td>{{ newclient.firstName }} {{ newclient.lastName }}</td>
<!--                    <td>-->
<!--                      <v-btn class=" teal darken-4 white&#45;&#45;text"-->
<!--                             v-on:click="editClient()">Edit-->
<!--                      </v-btn>-->
                    <td>
<!--                    <v-btn class=" teal darken-4 white&#45;&#45;text"-->
<!--                             v-on:click="deleteClient()">Delete-->
<!--                      </v-btn>-->

                      <v-btn v-slot:activator="{ on, attrs }"
                          color="primary"
                          dark
                          v-bind="attrs"
                          v-on="on"
                      >
                        Open Dialog
                      </v-btn>
                    </td>
                  </tr>
                </table>
                <v-list-item-title class="text-h5 mb-1">
                  Total: {{ style.price }} $
                  {{ clients }}
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

    <div class="delete_form">
    <v-row justify="center">
      <v-dialog
          v-model="dialog"
          persistent
          max-width="600px"
      >
<!--        <template v-slot:activator="{ on, attrs }">-->
<!--          <v-btn-->
<!--              color="primary"-->
<!--              dark-->
<!--              v-bind="attrs"-->
<!--              v-on="on"-->
<!--          >-->
<!--            Open Dialog-->
<!--          </v-btn>-->
<!--        </template>-->
        <v-card>
          <v-card-title>
            <span class="text-h5">User Profile</span>
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
                      label="Legal first name*"
                      required
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                  <v-text-field
                      label="Legal middle name"
                      hint="example of helper text only on focus"
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                  <v-text-field
                      label="Legal last name*"
                      hint="example of persistent helper text"
                      persistent-hint
                      required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                      label="Email*"
                      required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                      label="Password*"
                      type="password"
                      required
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                  <v-select
                      :items="['0-17', '18-29', '30-54', '54+']"
                      label="Age*"
                      required
                  ></v-select>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                  <v-autocomplete
                      :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                      label="Interests"
                      multiple
                  ></v-autocomplete>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="blue darken-1"
                text
                @click="dialog = false"
            >
              Close
            </v-btn>
            <v-btn
                color="blue darken-1"
                text
                @click="dialog = false"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    </div>

  </v-container>
</template>

<script>
import router from "@/router";

export default {
  name: "BookingGroup",
  data: () => ({
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
    styles: [{style: "Traditional surf", price: 59.99}, {style: "Windsurf", price: 79.99}, {
      style: "Kitesurf", price: 89.99
    }],
    style: {style: "", price: ""},
    levels: ["Beginner", "Intermediate", "Advanced"],
    nameRules: [
      v => !!v || 'Name is required',
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      // v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    weightRules: [
      v => !!v || 'Weight is required',
    ],
    heightRules: [
      v => !!v || 'Height is required',
    ],
    genders: ["Male", "Female"],
    total: "",
    times: ["10:00", "11:00", "12:00"],
    time: "",
    wetsuit: false,
    clients: [],
    client: {
      style: '',
      level: '',
      firstName: '',
      lastName: '',
      email: '',
      height: '',
      gender: '',
      weight: '',
      wetsuit: ''
    },
    dialog: false,
  }),

  methods: {
    confirmation: function () {
      router.push({name: "BookingConfirmation"});
    }
    ,
    back: function () {
      router.push({name: "Homepage"})
    }
    ,
    toTop: function () {
      this.$vuetify.goTo(0)
    },

    saveClient: function () {
      let clientCopy = JSON.parse(JSON.stringify(this.client))
      this.clients.push(clientCopy)
    },
    //limit nr of rows to 6!!!!!!!!!!!!!!!!
    //find, edit, save new
    // editClient: function () {
    //   let copyOfClientCopy = clientCopy.map(newclient=>
    //   newclient.firstName === firstName ?
    //       {...copyOfClientCopy, ...firstName} :newclient)

// objlastName = clients.findIndex((obj => obj.lastName));
//     })
// },
    deleteClient: function () {
    }
},
mounted()
{
  this.toTop()
}
}


</script>

<style scoped>
.back-btn {
  z-index: 2;
}

.data-input-top {
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