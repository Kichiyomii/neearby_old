<template>
  <div>
    <HelloWorld :user="user"/>
    <infoo/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import infoo from "@/components/infoo.vue";
import {Auth} from "../auth"

export default {
  name: "catalogavtor",
  components: {
    HelloWorld,
    infoo,
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
