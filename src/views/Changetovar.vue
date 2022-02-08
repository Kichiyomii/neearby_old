<template>
  <div>
    <HelloWorld :user="user"/>
    <chagetov  :user="user"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import chagetov from "@/components/chagetov.vue";
import {Auth} from "../auth"

export default {
  name: "Changetovar",
  components: {
    HelloWorld,
    chagetov,
  },
  data() {
    return {
      user: {}
    }
  },
  async mounted(){
    
    this.user = await Auth();
  }
};
</script>
