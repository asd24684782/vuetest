<template>
  <v-app>
    <v-main>
      <HelloWorld/>

      <v-col>
        <v-btn v-on:click="ping"
          elevation="5"

        >{{message}}</v-btn>
      </v-col>

    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    message : "aaa"
    //
  }),

  methods: {
    ping() {
      const api ="http://127.0.0.1:5000/api/1.0/ping";
      
      this.axios.get(api).then((response) => {
        this.message = response.data.message
      })
    }
  }
}
</script>
