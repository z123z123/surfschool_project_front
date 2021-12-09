<template>
  <v-container ma-0 pa-0 fluid >
    <div class="teal lighten-5 admin-view" >
      <v-btn v-on:click="back()" class="teal darken-3 white--text mb-15">Back</v-btn>
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
          text: 'Dessert (100g serving)',
          align: 'start',
          filterable: false,
          value: 'name',
        },
        {text: 'Calories', value: 'calories'},
        {text: 'Fat (g)', value: 'fat'},
        {text: 'Carbs (g)', value: 'carbs'},
        {text: 'Protein (g)', value: 'protein'},
        {text: 'Iron (%)', value: 'iron'},
      ],
      data: [{
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: '1%',
      }, {name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3, iron: '1%',}, {
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: '7%',
      }, {name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3, iron: '8%',}, {
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: '16%',
      },
      ],
    }
  },
  methods: {
    back: function () {
      router.push({name: "Homepage"})
    }
  }
}
</script>

<style scoped>
 .admin-view{
   padding:5% 15%;
   min-height: 100vh;
 }
 .custom-search{
   margin: 10px 25%;
 }
</style>