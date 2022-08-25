<template>
  <div>
    <p>random user api Loaded: {{userLoaded}}</p>
    <v-btn v-on:click="Reload" elevation="5"> Reload </v-btn>
    <h1>Female number: {{ FemaleNum }}</h1>
    <h1>Male number: {{ MaleNum }}</h1>

    <label>Are there more than 2 women in data?</label>
    <v-btn @click="DetectGender('female')" elevation="5">Detect</v-btn>
    <br />
    <label>Are there more than 2 men in data?</label>
    <v-btn @click="DetectGender('male')" elevation="5">Detect</v-btn>

  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';



export default {

  data() {
    return {};
  },
  mounted() {
    // 1.  頁面讀取完成時，吃 randomuser API
    this.$store.dispatch("GetUser");
  },
  computed: {
    ...mapState(["Loaded", "clickedTimes", "users"]),
    ...mapGetters(["FemaleNum", "MaleNum", "returnFn"]),

  },
  methods: {
  
    Reload() {
      this.$store.commit("SetFalse");
      this.$store.dispatch("GetUser");
      this.$store.dispatch("ClickedActions", 2);
    },

    DetectGender(gd){
      this.returnFn(gd);
    }

  }

};
</script>