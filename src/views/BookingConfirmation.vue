<template>
  <v-container>
    <h1>Booking confirmation page</h1>
  </v-container>
</template>

<script>
import router from "@/router";

export default {
  name: "BookingConfirmation",
  data: function (){
    return {

    }
  },
  methods:{

  }, mounted() {
    setTimeout(function(){router.push({name: "Homepage"})},5000);
  }
}
</script>

<style scoped>

</style>