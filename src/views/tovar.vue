<template>
  <div>
    <HelloWorld :user="user"/>
    <catalogauthtovar :user="user"/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import catalogauthtovar from "@/components/catalogauthtovar.vue";
import {Auth} from "../auth"

export default {
  name: "catalogavtor",
  components: {
    HelloWorld,
    catalogauthtovar,
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
