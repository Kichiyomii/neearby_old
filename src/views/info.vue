<template>
  <div>
    <HelloWorld :user="user"/>
    <inf/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import inf from "@/components/inf.vue";
import {Auth} from "../auth"

export default {
  name: "catalogavtor",
  components: {
    HelloWorld,
    inf,
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
