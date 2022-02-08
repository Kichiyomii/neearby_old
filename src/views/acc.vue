<template>
  <div>
    <HelloWorld :user="user"/>
    <acctovar :user="user"/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import acctovar from "@/components/acctovar.vue";
import {Auth} from "../auth"

export default {
  name: "catalogavtor",
  components: {
    HelloWorld,
    acctovar,
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
