<template>
  <v-container>
    <h1>Booking Group</h1>
    <v-btn v-on:click="confirmation()">Book</v-btn>
  </v-container>
</template>

<script>
import router from "@/router";

export default {
  name: "BookingGroup",
  data: function (){
    return{

    }
  },
  methods: {
    confirmation: function (){
      router.push({name: "BookingConfirmation"});
    }
  }
}
</script>

<style scoped>

</style>