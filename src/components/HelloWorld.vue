<template>
  <v-container>
    <v-row class="text-center">


      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-5">
          {{name}}
        </h2>

      </v-col>

      <v-col cols="12" md="4">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="First name"
              required
            ></v-text-field>
      </v-col>
  
      <v-col cols="12" md="4">
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="10"
              label="Last name"
              required
            ></v-text-field>
      </v-col>

      <v-col>
        <v-btn v-on:click="ping" elevation="5"> ping </v-btn>
      </v-col>
      
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'HelloWorld',

  data: () => ({
    firstname : "",
    lastname : "",
    name : "abc"
  }),

  methods: {
    ping() {
      const api ="http://192.168.2.15:5000/api/1.0/echo";
      const name = {
        "firstname" : this.firstname,
        "lastname" : this.lastname
      };
      
      this.axios.post(api, name).then((response) => {
        this.name = response.data.message
      })
    }
  },


}
</script>
