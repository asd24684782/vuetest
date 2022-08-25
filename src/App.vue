<template>
  <v-app>
    <v-main>
      <HelloWorld/>
      <TestPage/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TestPage from './components/TestPage.vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
    TestPage,
  },


}
</script>
