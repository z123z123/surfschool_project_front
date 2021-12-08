<template>
  <v-container>
    <h1>Admin view</h1>
    <v-btn v-on:click="back()">Back</v-btn>
  </v-container>
</template>

<script>
import router from "@/router";

export default {
  name: "AdminView",
  data: function (){
    return {

    }
  },
  methods: {
    back: function (){
      router.push({name: "Homepage"})
    }
  }
}
</script>

<style scoped>

</style>